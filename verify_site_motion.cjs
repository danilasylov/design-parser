/* Browser QA for this three-site batch; assertions inspect behavior over time. */
const {chromium}=require('playwright');
const fs=require('fs');
const path=require('path');
const assert=require('node:assert/strict');
const slug=process.argv[2];
const out=path.join(__dirname,'generated-sites',slug,'qa');fs.mkdirSync(out,{recursive:true});
(async()=>{
const browser=await chromium.launch();const errors=[];const results={slug,checks:[],scope:'Desktop 1440×900, EN/RU, motion runtime, reduced motion, no JS.'};
const context=await browser.newContext({viewport:{width:1440,height:900},acceptDownloads:true});const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://localhost:8080/generated-sites/'+slug+'/',{waitUntil:'domcontentloaded'});
await p.waitForTimeout(1800);
for(const lang of ['en','ru']){await p.locator('button[data-lang="'+lang+'"]').click();await p.evaluate(()=>document.fonts.ready);assert.equal(await p.locator('html').getAttribute('lang'),lang);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);results.checks.push(lang+': no overflow, language applied');}
await p.locator('button[data-lang="en"]').click();
const target=slug==='marginalia'?'.rail-track':slug==='cult'?'.seal-spin':'.about-copy';
if(slug==='marginalia'||slug==='cult'){
 const before=await p.locator(target).first().evaluate(e=>getComputedStyle(e).transform);await p.waitForTimeout(350);const after=await p.locator(target).first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(before,after);results.checks.push('automatic transform changes over time');
 await p.locator('#motion-toggle').click();await p.waitForTimeout(80);const frozen=await p.locator(target).first().evaluate(e=>getComputedStyle(e).transform);await p.waitForTimeout(250);assert.equal(await p.locator(target).first().evaluate(e=>getComputedStyle(e).transform),frozen);results.checks.push('pause freezes loop');
}
if(slug==='marginalia'){const wait=p.waitForEvent('download');await p.locator('#download').click();const download=await wait;assert.match(download.suggestedFilename(),/programme-en/);results.checks.push('programme download works');}
if(slug==='cult'){await p.locator('#menu-button').click();assert.equal(await p.locator('#menu-button').getAttribute('aria-expanded'),'true');await p.locator('#menu-panel a').first().click();assert.equal(await p.locator('#menu-button').getAttribute('aria-expanded'),'false');await p.locator('#product-select').selectOption('labneh');await p.locator('#portion').fill('3');await p.locator('#calculate').click();assert.match(await p.locator('#order-result').innerText(),/3/);results.checks.push('menu and local basket estimate work');}
if(slug==='bench'){
 assert.equal(await p.locator('#intro').isVisible(),false);
 await p.evaluate(()=>{scrollTo(0,0);document.querySelector('#replay').click()});
 assert.equal(await p.locator('#intro').isVisible(),true);
 await p.waitForTimeout(90);const wordBefore=await p.locator('.intro-word').first().evaluate(e=>getComputedStyle(e).transform);
 await p.waitForTimeout(180);const wordAfter=await p.locator('.intro-word').first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(wordBefore,wordAfter);
 await p.screenshot({path:path.join(out,'intro-in-motion.png')});await p.waitForTimeout(1000);assert.equal(await p.locator('#intro').isVisible(),false);
 results.checks.push('intro phrase transform changes within the mask, then panel releases hero');
 assert.equal(await p.locator('.about-copy').evaluate(e=>getComputedStyle(e).opacity),'0');
 await p.locator('.about-copy').scrollIntoViewIfNeeded();await p.waitForTimeout(650);assert.equal(await p.locator('.about-copy').evaluate(e=>getComputedStyle(e).opacity),'1');
 await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(500);assert.equal(await p.locator('.about-copy').evaluate(e=>getComputedStyle(e).opacity),'1');
 results.checks.push('scroll trigger reveals hidden paragraph; reverse scroll preserves final readable state');
 await p.locator('#hours').fill('4');await p.locator('#calculate').click();assert.match(await p.locator('#estimate').innerText(),/4/);results.checks.push('local session estimate works');
}
await p.emulateMedia({reducedMotion:'reduce'});await p.waitForTimeout(100);assert.equal(await p.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length),0);results.checks.push('live reduced-motion switch leaves no running animations');
await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:path.join(out,'verified-en.png')});
await p.locator('button[data-lang="ru"]').click();await p.screenshot({path:path.join(out,'verified-ru.png')});
const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:1440,height:900}});const n=await nojs.newPage();await n.goto('http://localhost:8080/generated-sites/'+slug+'/',{waitUntil:'domcontentloaded'});assert.ok((await n.locator('h1').innerText()).length>0);assert.equal(await n.locator('h1').evaluate(e=>getComputedStyle(e).opacity),'1');if(slug==='bench')assert.equal(await n.locator('#intro').isVisible(),false);results.checks.push('no-JS primary content visible');assert.deepEqual(errors,[]);results.checks.push('no page errors');results.errors=errors;results.passed=true;fs.writeFileSync(path.join(out,'motion-results.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
