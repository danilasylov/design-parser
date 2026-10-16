#!/usr/bin/env node
// Decode the whole clip once; inspect 12 uniform samples before requesting a detailed interval.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {spawnSync} = require('node:child_process');
const ROOT = path.resolve(__dirname, '..');
const {pathToFileURL} = require('node:url');

function ffmpegPath() { return process.env.FFMPEG_PATH || require('ffmpeg-static'); }
function run(args) {
  const r = spawnSync(ffmpegPath(), args, {encoding:'utf8', maxBuffer:8*1024*1024, windowsHide:true});
  if (r.error) throw r.error;
  if (r.status !== 0) throw Error(r.stderr.slice(-4000));
  return r;
}
function storyboard(input, out, {start=0, duration=null, frames=12, width=480}={}) {
  input=path.resolve(input); out=path.resolve(out);
  if (!fs.existsSync(input)) throw Error(`Video missing: ${input}. Run scripts/fetch_assets.py first.`);
  const probe=spawnSync(ffmpegPath(), ['-hide_banner','-i', input], {encoding:'utf8',windowsHide:true});
  if(probe.error) throw probe.error;
  const match=(probe.stderr||'').match(/Duration: (\d+):(\d+):(\d+(?:\.\d+)?)/);
  if(!match) throw Error('Cannot determine video duration');
  const total=Number(match[1])*3600+Number(match[2])*60+Number(match[3]);
  const span=Math.min(duration??total-start,total-start);
  if(!(start>=0 && span>0 && frames>=1 && frames<=60)) throw Error('Invalid interval or frame count (1–60)');
  const stat=fs.statSync(input);
  const key=crypto.createHash('sha256').update(JSON.stringify([input,stat.size,stat.mtimeMs,start,span,frames,width,2])).digest('hex');
  const metaFile=path.join(out,'storyboard.json');
  if(fs.existsSync(metaFile)) {
    const saved=JSON.parse(fs.readFileSync(metaFile));
    if(saved.key===key && saved.frames.every(f=>fs.existsSync(path.join(out,f.file))) && fs.existsSync(path.join(out,'overview.jpg'))) return {...saved,cached:true};
  }
  fs.mkdirSync(out,{recursive:true});
  for(const name of fs.readdirSync(out)) if(/^frame-\d+\.jpg$/.test(name)) fs.unlinkSync(path.join(out,name));
  const step=span/frames;
  run(['-hide_banner','-loglevel','error','-y','-ss',String(start),'-i',input,'-t',String(span),
    '-vf',`fps=fps=${frames/span}:start_time=0:round=up,scale=${width}:-2`, '-frames:v',String(frames),'-q:v','3',path.join(out,'frame-%03d.jpg')]);
  const names=fs.readdirSync(out).filter(n=>/^frame-\d+\.jpg$/.test(n)).sort();
  if(!names.length) throw Error('FFmpeg produced no frames');
  run(['-hide_banner','-loglevel','error','-y','-framerate','1','-i',path.join(out,'frame-%03d.jpg'),
    '-vf',`tile=4x${Math.ceil(names.length/4)}:padding=4:margin=4:color=white`,'-frames:v','1','-q:v','3',path.join(out,'overview.jpg')]);
  const result={key,input,total_seconds:total,start,duration:span,sampling:'uniform full-interval overview; not proof of every interaction',
    frames:names.map((file,i)=>({file,approx_seconds:Number((start+i*step).toFixed(3))})),overview:'overview.jpg'};
  fs.writeFileSync(metaFile,JSON.stringify(result,null,2)+'\n');
  return result;
}

if(require.main===module) {
  const [input,out,...options]=process.argv.slice(2);
  if(!input||!out){console.error('node scripts/storyboard.cjs <video> <out> [--start 0 --duration 4 --frames 12]');process.exit(1);}
  const config={};
  for(let i=0;i<options.length;i+=2){const k=options[i].replace(/^--/,'');if(!['start','duration','frames','width'].includes(k))throw Error('Unknown option: '+k);config[k]=Number(options[i+1]);}
  try{console.log(JSON.stringify(storyboard(input,out,config),null,2));}catch(e){console.error(e.message);process.exitCode=1;}
}
module.exports={storyboard,ffmpegPath,run};
