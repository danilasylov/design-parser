const {chromium}=require('../../../node_modules/playwright');
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),crypto=require('crypto'),vm=require('vm');
const root=path.resolve(__dirname,'../../..');
(async()=>{const browser=await chromium.launch();for(const slug of ['vector-bi','prism-bi']){
 const folder=path.join(root,'generated-sites',slug),html=fs.readFileSync(path.join(folder,'index.html'),'utf8');
 new vm.Script(html.match(/<script>([\s\S]*?)<\/script>/)[1]);assert(html.includes(fs.readFileSync(path.join(folder,'reference/tokens.css'),'utf8')));
 for(const name of ['design.md','tokens.css','tokens.json','tailwind.css'])assert(fs.statSync(path.join(folder,'reference',name)).size>100);
 const p=await browser.newPage({viewport:{width:1440,height:900}});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto('http://localhost:8080/generated-sites/'+slug+'/',{waitUntil:'domcontentloaded'});await p.waitForTimeout(1300);
 const report=JSON.parse(fs.readFileSync(path.join(folder,'qa/motion-results.json'),'utf8'));const extra={name:'Final source: syntax, literal tokens, transforms and data consistency',passed:true,evidence:{tokenTabs:4,inlineScriptSyntax:'valid',runtimeErrors:errors}};
 if(slug==='prism-bi'){
  const transforms=await p.locator('.notebook,.insight-card').evaluateAll(es=>es.map(e=>({transform:getComputedStyle(e).transform,animations:e.getAnimations().length})));assert(transforms.every(x=>x.transform!=='none'&&x.animations===0));extra.evidence.settledRotations=transforms;
  const box=await p.locator('.question-card').boundingBox(),hero=await p.locator('.hero').boundingBox();assert(box.y+box.height<=hero.y+hero.height);extra.evidence.noClipping=true;
 }else{
  const total=Number((await p.locator('#main-value').innerText()).replace(/\D/g,''));const sum=await p.locator('#chart-points circle').evaluateAll(es=>es.reduce((n,e)=>n+Number(e.getAttribute('aria-label').split('$')[1].replace(/,/g,'')),0));assert(Math.abs(total-sum)<=6);extra.evidence.revenue={displayedTotal:total,sumOfDataPoints:sum,roundingTolerance:6};
 }
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth),0);assert.deepEqual(errors,[]);
 const sha=crypto.createHash('sha256').update(html).digest('hex');report.post_polish_checks=[extra];report.source_sha256=sha;report.checked_on='2026-10-16';fs.writeFileSync(path.join(folder,'qa/motion-results.json'),JSON.stringify(report,null,2)+'\n');console.log(slug,JSON.stringify(extra.evidence));await p.close();
 }await browser.close()})();
