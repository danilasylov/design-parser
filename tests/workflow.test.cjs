const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {spawnSync}=require('node:child_process');
const {storyboard,run}=require('../scripts/storyboard.cjs');
const {capture}=require('../scripts/capture_site.cjs');
const {qa}=require('../scripts/qa_motion.cjs');
const ROOT=path.resolve(__dirname,'..');
const PYTHON=process.env.PYTHON || (process.platform==='win32'?'python':'python3');
const TMP=fs.mkdtempSync(path.join(os.tmpdir(),'design-parser spaces-'));
function python(args){const result=spawnSync(PYTHON,args,{cwd:ROOT,encoding:'utf8',env:{...process.env,PYTHONUTF8:'1'}});assert.equal(result.status,0,result.stderr||result.error?.message);return result.stdout;}

test('all references are searched and motion search never duplicates a pattern',()=>{
  const sites=JSON.parse(python(['scripts/select_references.py','sites','finance bank','--limit','0']));
  assert.equal(sites.scanned,1288);assert.equal(sites.results.length,1288);
  assert.ok(sites.results[0].matched_terms.some(t=>/finance|bank/.test(t)));
  const motion=JSON.parse(python(['scripts/select_references.py','motion','scroll reveal','--limit','0']));
  assert.equal(motion.scanned_variants,1944);
  assert.equal(new Set(motion.results.map(r=>r.id)).size,motion.results.length);
  assert.ok(motion.results.some(r=>r.id==='pattern.content.enter'&&r.variant_count>190));
  const patterns=spawnSync(process.execPath,['motion_reference/scripts/check-patterns.mjs'],{cwd:ROOT,encoding:'utf8'});
  assert.equal(patterns.status,0,patterns.stderr);
});

test('FFmpeg samples a whole clip, supports intervals, caches results and rejects invalid intervals',()=>{
  const input=path.join(TMP,'source video.mp4');
  run(['-hide_banner','-loglevel','error','-y','-f','lavfi','-i','testsrc2=size=320x180:rate=12:duration=3','-c:v','libx264','-pix_fmt','yuv420p',input]);
  const out=path.join(TMP,'overview');
  const result=storyboard(input,out,{frames:12,width:320});
  assert.equal(result.frames.length,12);
  assert.equal(result.total_seconds,3);
  assert.ok(result.frames.at(-1).approx_seconds>2.5);
  assert.ok(fs.statSync(path.join(out,'overview.jpg')).size>1000);
  assert.equal(storyboard(input,out,{frames:12,width:320}).cached,true);
  const detail=storyboard(input,path.join(TMP,'detail'),{start:1,duration:1,frames:6});
  assert.equal(detail.start,1);assert.equal(detail.frames.length,6);
  assert.throws(()=>storyboard(input,out,{start:10}),/Invalid interval/);
});

test('browser capture reaches footer and QA checks actual movement, pause, RU and no-JS',{skip:process.env.SKIP_BROWSER_TESTS==='1'},async()=>{
  const file=path.join(TMP,'test site.html');
  fs.writeFileSync(file,`<!doctype html><html lang="en"><meta charset="utf-8"><style>
  *{box-sizing:border-box}body{margin:0}header{height:160px}main{min-height:2300px}.spacer{height:1000px}.reveal{opacity:1}.js .reveal{opacity:0;transition:opacity .3s}.js .reveal.on{opacity:1}.orbit{display:block;width:50px;height:50px;animation:spin 2s linear infinite}.paused .orbit{animation-play-state:paused}.card{display:block;width:100px;transition:transform .3s}.card:hover{transform:translateX(25px)}@keyframes spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
  </style><header><button data-lang="en">EN</button><button data-lang="ru">RU</button><button id="pause">Pause</button><h1>Design test</h1></header><main><div class="orbit">Orbit</div><div class="card" tabindex="0">Hover</div><div class="spacer"></div><p class="reveal">Readable section</p></main><footer>Footer content</footer><script>
  document.documentElement.classList.add('js');const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}));observer.observe(document.querySelector('.reveal'));
  document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>document.documentElement.lang=b.dataset.lang);document.querySelector('#pause').onclick=()=>document.documentElement.classList.toggle('paused');
  </script></html>`);
  const plan=path.join(TMP,'plan.json');
  fs.writeFileSync(plan,JSON.stringify({language_selectors:{en:'[data-lang="en"]',ru:'[data-lang="ru"]'},pause_selector:'#pause',content_selectors:['h1','main','footer'],effects:[
    {example_id:'fixture.orbit',selector:'.orbit',trigger:'autoplay',property:'transform',loop:true},
    {example_id:'fixture.hover',selector:'.card',trigger:'hover',property:'transform'},
    {example_id:'fixture.reveal',selector:'.reveal',trigger:'scroll',property:'opacity'}]}));
  const recorded=await capture(file,path.join(TMP,'capture'),{dwell:100,maxSteps:12});
  assert.equal(recorded.covered_to_footer,true);
  assert.ok(recorded.positions.at(-1).y>=recorded.positions.at(-1).height-900);
  const results=await qa(file,plan,path.join(TMP,'qa'));
  assert.equal(results.passed,true);
  await assert.rejects(capture(file,path.join(TMP,'incomplete'),{dwell:100,maxSteps:1}),/budget reached/);
  const broken=JSON.parse(fs.readFileSync(plan));broken.effects[0].selector='.absent';
  const badPlan=path.join(TMP,'bad-plan.json');fs.writeFileSync(badPlan,JSON.stringify(broken));
  await assert.rejects(qa(file,badPlan,path.join(TMP,'failed-qa')),/Missing selector/);
});

test('asset downloads reject corrupt content, preserve atomicity and support Windows paths',()=>{
  python(['-c',`
import importlib.util, tempfile, pathlib, io, hashlib
from unittest.mock import patch
spec=importlib.util.spec_from_file_location('assets','scripts/fetch_assets.py'); m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
with tempfile.TemporaryDirectory(prefix='assets spaces-') as folder:
 m.ROOT=pathlib.Path(folder); target=m.ROOT/'selected file.webm'
 class Response(io.BytesIO):
  headers={'Content-Type':'video/webm'}
 with patch.object(m.urllib.request,'urlopen',side_effect=lambda *a,**k:Response(b'valid video')),patch.object(m.time,'sleep'):
  result=m.download('https://example.com/video.webm',target,hashlib.sha256(b'valid video').hexdigest());assert result['status']=='downloaded'
  assert m.download('https://example.com/video.webm',target)['status']=='cached'
  target.unlink()
  try:m.download('https://example.com/video.webm',target,'wrong-hash');raise AssertionError('Corruption accepted')
  except ValueError:pass
  assert not target.exists(); assert not target.with_name(target.name+'.part').exists()
  with patch.object(m.urllib.request,'urlopen',side_effect=lambda *a,**k:Response(b'updated video')):
   changed=m.download('https://example.com/video.webm',target,'old-hash',allow_updated=True)
   assert changed['status']=='downloaded_updated';assert changed['snapshot_sha256']=='old-hash'
   assert changed['sha256']==hashlib.sha256(b'updated video').hexdigest()
  code=m.ROOT/'component.jsx'
  try:m.download('https://example.com/code',code,'wrong-hash',allow_updated=True);raise AssertionError('Changed code accepted')
  except ValueError:pass
  try:m.download('https://example.com/x',m.ROOT.parent/'outside.txt');raise AssertionError('Traversal accepted')
  except ValueError:pass
`]);
});
