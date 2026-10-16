#!/usr/bin/env node
// The plan defines which observable properties each chosen animation must change.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');

async function qa(file,planFile,out) {
  const plan=JSON.parse(fs.readFileSync(planFile,'utf8'));
  assert.ok(plan.effects?.length,'motion-plan.json must list implemented effects');
  const browser=await chromium.launch();
  const checks=[];const errors=[];
  if(fs.existsSync(file))file=pathToFileURL(path.resolve(file)).href;
  fs.mkdirSync(out,{recursive:true});
  const contexts=[];
  try{
    const context=await browser.newContext({viewport:{width:1440,height:900}});contexts.push(context);
    const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
    await page.goto(file,{waitUntil:'domcontentloaded'});
    await page.waitForTimeout(700);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0,'EN horizontal overflow');
    for(const effect of plan.effects){
      const el=page.locator(effect.selector).first();
      assert.equal(await el.count(),1,'Missing selector '+effect.selector);
      const prop=effect.property||'transform';
      const read=()=>el.evaluate((element,p)=>getComputedStyle(element).getPropertyValue(p),prop);
      // Hover/focus/click are sampled before the trigger; scroll starts outside the viewport.
      if(effect.trigger==='scroll')await page.evaluate(()=>scrollTo(0,0));
      const before=await read();
      if(effect.trigger==='hover')await el.hover();
      else if(effect.trigger==='focus')await el.focus();
      else if(effect.trigger==='click')await el.click();
      else if(effect.trigger==='scroll')await el.scrollIntoViewIfNeeded();
      else assert.equal(effect.trigger,'autoplay','Specify a supported trigger for '+effect.selector);
      let changed=false;
      for(let i=0;i<6;i++){await page.waitForTimeout(100);if(await read()!==before){changed=true;break;}}
      assert.ok(changed,`${effect.selector}: ${prop} did not change after ${effect.trigger}`);
      checks.push(`${effect.example_id}: ${effect.selector} changes ${prop} (${effect.trigger})`);
    }
    if(plan.pause_selector){
      await page.locator(plan.pause_selector).click();await page.waitForTimeout(150);
      for(const effect of plan.effects.filter(e=>e.loop)){
        const target=page.locator(effect.selector).first();const prop=effect.property||'transform';
        const frozen=await target.evaluate((e,p)=>getComputedStyle(e).getPropertyValue(p),prop);
        await page.waitForTimeout(350);
        assert.equal(await target.evaluate((e,p)=>getComputedStyle(e).getPropertyValue(p),prop),frozen,'Pause must freeze '+effect.selector);
      }
      checks.push('loop pause verified');
    }else assert.ok(!plan.effects.some(e=>e.loop),'Loop animations require pause_selector');
    for(const lang of ['en','ru']){
      assert.ok(plan.language_selectors?.[lang],'Specify language_selectors for EN and RU');
      await page.locator(plan.language_selectors[lang]).click();
      await page.waitForTimeout(200);
      assert.equal(await page.locator('html').getAttribute('lang'),lang);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0,lang+' overflow');
      await page.screenshot({path:path.join(out,lang+'.png'),fullPage:true});
    }
    await page.emulateMedia({reducedMotion:'reduce'});await page.waitForTimeout(150);
    assert.equal(await page.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,'Running CSS/WAAPI under reduced motion');
    // Also check rAF driven components via the measured property, which getAnimations cannot see.
    for(const effect of plan.effects){
      const el=page.locator(effect.selector).first();const prop=effect.property||'transform';
      const value=await el.evaluate((e,p)=>getComputedStyle(e).getPropertyValue(p),prop);
      await page.waitForTimeout(200);
      assert.equal(await el.evaluate((e,p)=>getComputedStyle(e).getPropertyValue(p),prop),value,'Reduced-motion property still moves');
    }
    const reduced=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});contexts.push(reduced);
    const r=await reduced.newPage();await r.goto(file,{waitUntil:'domcontentloaded'});await r.waitForTimeout(600);
    assert.equal(await r.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0,'Initial reduced motion');
    const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900}});contexts.push(nojs);
    const n=await nojs.newPage();await n.goto(file,{waitUntil:'domcontentloaded'});
    for(const selector of plan.content_selectors||['h1','main']){
      const element=n.locator(selector).first();assert.ok((await element.innerText()).trim(),selector+' has no content');
      assert.ok(await element.isVisible(),selector+' invisible without JS');
      assert.equal(await element.evaluate(e=>getComputedStyle(e).opacity),'1',selector+' transparent without JS');
    }
    assert.deepEqual(errors,[],'Browser errors');
    checks.push('EN/RU, initial/live reduced-motion, no-JS content and browser errors verified');
    const result={passed:true,checks,errors,note:'Open both screenshots and inspect overlaps. Canvas/shader motion needs additional visual QA.'};
    fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(result,null,2));return result;
  }finally{for(const context of contexts)await context.close();await browser.close();}
}
if(require.main===module){const [file,plan,out='.cache/qa']=process.argv.slice(2);if(!file||!plan){console.error('node scripts/qa_motion.cjs <URL|file> <motion-plan.json> [out]');process.exit(1);}qa(file,plan,out).then(r=>console.log(JSON.stringify(r,null,2))).catch(e=>{console.error(e);process.exitCode=1;});}
module.exports={qa};
