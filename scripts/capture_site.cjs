#!/usr/bin/env node
// A video is a browser recording; ffmpeg then extracts an inexpensive visual overview.
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const {pathToFileURL}=require('node:url');
const {storyboard}=require('./storyboard.cjs');

async function capture(url,out,{maxSteps=120,dwell=450}={}) {
  out=path.resolve(out);fs.mkdirSync(out,{recursive:true});
  if(fs.existsSync(url))url=pathToFileURL(path.resolve(url)).href;
  const browser=await chromium.launch();
  let context;
  try {
    context=await browser.newContext({viewport:{width:1440,height:900},recordVideo:{dir:path.join(out,'video'),size:{width:1440,height:900}}});
    const page=await context.newPage();const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});
    await page.evaluate(()=>Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,4000))]));
    await page.waitForTimeout(1200);
    const positions=[];let covered=false;let stable=0;
    for(let i=0;i<maxSteps;i++) {
      const state=await page.evaluate(()=>({y:scrollY,height:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),viewport:innerHeight}));
      positions.push(state);
      await page.waitForTimeout(dwell);
      if(state.y+state.viewport>=state.height-2){
        stable++;if(stable>=3){covered=true;break;}
      }else stable=0;
      await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),Math.min(state.y+720,state.height-state.viewport));
    }
    const video=page.video();
    await context.close();context=null;
    const videoFile=await video.path();
    const report={url,covered_to_footer:covered,positions,errors,video:videoFile,
      note:'Scroll capture covers document height, not hidden tabs, hover states or nested scroll containers.'};
    fs.writeFileSync(path.join(out,'capture.json'),JSON.stringify(report,null,2));
    storyboard(videoFile,path.join(out,'storyboard'));
    if(!covered)throw Error('Scroll budget reached before footer. Increase --max-steps or inspect infinite/nested scrolling. See capture.json.');
    return report;
  } finally {if(context)await context.close();await browser.close();}
}
if(require.main===module){
  const [url,out,...opts]=process.argv.slice(2);const config={};
  if(!url||!out){console.error('node scripts/capture_site.cjs <URL|file> <out> [--max-steps 120 --dwell 450]');process.exit(1);}
  for(let i=0;i<opts.length;i+=2){const key={'--max-steps':'maxSteps','--dwell':'dwell'}[opts[i]];if(!key||!(Number(opts[i+1])>0))throw Error('Invalid option');config[key]=Number(opts[i+1]);}
  capture(url,out,config).then(r=>console.log(JSON.stringify({covered_to_footer:r.covered_to_footer,steps:r.positions.length,errors:r.errors}))).catch(e=>{console.error(e);process.exitCode=1;});
}
module.exports={capture};
