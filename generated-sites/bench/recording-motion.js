// Source adaptations: React Bits TextCursor (bounded chain), SplitText (line masks),
// RotatingText (vertical replacement); Magic UI InteractiveHoverButton (fill and swap).
// Disable the previous authored word entrance; the recording shows line masks instead.
revealHeroWords=function(){};
extraObserver.disconnect();extraTargets.forEach(el=>el.classList.remove('motion-pending'));
observer?.disconnect();about.classList.add('revealed');
const photoBlock=document.querySelector('.work');photoBlock.tabIndex=0;photoBlock.dataset.motion='project-hover';
document.querySelector('header').dataset.motion='sticky-navigation';
document.querySelectorAll('.tool').forEach(el=>{el.tabIndex=0;el.dataset.motion='service-hover'});
document.querySelector('.down').dataset.motion='chevrons';
let countFrame=0,exitTimer=0;
const count=document.createElement('span');count.className='intro-count';count.setAttribute('aria-hidden','true');document.querySelector('.intro-lines').append(count);
function recordedIntro(){
  clearTimeout(timer);clearTimeout(exitTimer);cancelAnimationFrame(countFrame);
  runningMotion.forEach(a=>a.cancel());
  intro.classList.remove('active','opening');void intro.offsetWidth;
  if(reduce.matches)return;
  intro.classList.add('active');intro.setAttribute('aria-hidden','false');skip.tabIndex=0;
  const started=performance.now();count.textContent='(0%)';
  function tick(now){const progress=Math.min(1,(now-started)/1150);count.textContent='('+Math.round(progress*100)+'%)';if(progress<1)countFrame=requestAnimationFrame(tick);else{intro.classList.add('opening');exitTimer=setTimeout(()=>{finishIntro();revealLines(document.querySelector('h1'),30)},950)}}
  countFrame=requestAnimationFrame(tick);
}
function wrapLines(el){
  const text=el.textContent;el.setAttribute('aria-label',text);el.replaceChildren();
  const words=text.trim().split(/\s+/);let line=null,lastTop=null;
  words.forEach((text,i)=>{const span=document.createElement('span');span.textContent=text;span.style.display='inline-block';el.append(span);if(i<words.length-1)el.append(document.createTextNode(' '))});
  const wordElements=[...el.querySelectorAll('span')];const groups=[];
  wordElements.forEach(word=>{const top=word.offsetTop;if(lastTop===null||Math.abs(top-lastTop)>5){line=[];groups.push(line);lastTop=top}line.push(word.textContent)});
  el.replaceChildren();groups.forEach(words=>{const mask=document.createElement('span');mask.className='line-mask';mask.setAttribute('aria-hidden','true');const content=document.createElement('span');content.className='line-content';content.textContent=words.join(' ');mask.append(content);el.append(mask)});
  return [...el.querySelectorAll('.line-content')];
}
function revealLines(el,stagger=70){
  if(reduce.matches)return;
  wrapLines(el).forEach((line,i)=>animateMotion(line,[{transform:'translateY(115%)'},{transform:'translateY(0)'}],{duration:650,delay:stagger*i,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'}));
}
const lineObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){lineObserver.unobserve(entry.target);revealLines(entry.target)}}),{threshold:.3});
lineObserver.observe(document.querySelector('.about h2'));
playIntro=recordedIntro;document.querySelector('#replay').onclick=recordedIntro;
const finishBeforeRecording=finishIntro;
finishIntro=function(){cancelAnimationFrame(countFrame);clearTimeout(exitTimer);intro.classList.remove('opening');finishBeforeRecording()};
skip.onclick=()=>{finishIntro();revealLines(document.querySelector('h1'),30)};
recordedIntro();
const stage=document.querySelector('.pointer-stage'),action=stage.querySelector('.stage-action'),layer=stage.querySelector('.trail-layer');
const links=Array.from({length:22},()=>{const e=document.createElement('span');e.className='trail-disc';layer.append(e);return {e,x:0,y:0}});
let pointerFrame=0,target={x:0,y:0},inside=false,lastMove=0;
function stopChain(){cancelAnimationFrame(pointerFrame);pointerFrame=0;inside=false;stage.classList.remove('tracking');links.forEach(p=>p.e.style.opacity='0');action.style.left='50%';action.style.top='50%'}
function drawChain(now){
  if(!inside||reduce.matches||document.hidden){stopChain();return}
  let x=target.x,y=target.y,moving=false;
  links.forEach((p,i)=>{p.x+=(x-p.x)*.32;p.y+=(y-p.y)*.32;p.e.style.transform=`translate3d(${p.x-50}px,${p.y-50}px,0)`;p.e.style.opacity=now-lastMove<450?'1':'0';moving=moving||Math.hypot(p.x-x,p.y-y)>.1;x=p.x;y=p.y});
  action.style.left=target.x+'px';action.style.top=target.y+'px';
  if(moving||now-lastMove<500)pointerFrame=requestAnimationFrame(drawChain);else pointerFrame=0;
}
stage.addEventListener('pointermove',e=>{if(reduce.matches||e.pointerType==='touch')return;const rect=stage.getBoundingClientRect();target={x:Math.max(52,Math.min(rect.width-52,e.clientX-rect.left)),y:Math.max(52,Math.min(rect.height-52,e.clientY-rect.top))};if(!inside)links.forEach(p=>{p.x=target.x;p.y=target.y});inside=true;lastMove=performance.now();stage.classList.add('tracking');if(!pointerFrame)pointerFrame=requestAnimationFrame(drawChain)});
stage.addEventListener('pointerleave',stopChain);document.addEventListener('visibilitychange',()=>{if(document.hidden)stopChain()});
reduce.addEventListener('change',()=>{if(reduce.matches){stopChain();finishIntro();lineObserver.disconnect();runningMotion.forEach(a=>a.cancel())}});
document.querySelectorAll('button[data-lang]').forEach(b=>b.addEventListener('click',()=>{if(!intro.classList.contains('active'))revealLines(document.querySelector('h1'),30)}));
