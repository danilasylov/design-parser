const D=window.MOTION_CATALOG;
const PATTERNS=window.MOTION_PATTERN_CATALOG.patterns;
const PROVIDERS={'react-bits':'React Bits',animista:'Animista','magic-ui':'Magic UI',codrops:'Codrops'};
const PAGE_SIZE=24;
const state={type:'',provider:'',pattern:'',trigger:'',query:'',page:1};
const els={};
for(const id of ['nav','date','total','typeCount','classCount','search','classFilter','triggerFilter','sources','sectionTitle','resultCount','grid','prev','next','pageLabel','detail','detailTitle','detailSubtitle','detailPreview','detailAside','close'])els[id]=document.getElementById(id);
const E=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
const byId=new Map(D.examples.map(e=>[e.id,e]));
const patternById=new Map(PATTERNS.map(p=>[p.id,p]));
const patternForExample=new Map(PATTERNS.flatMap(p=>p.variants.map(e=>[e.id,p])));
const liveCards=new LiveCardManager();
function quantity(n,forms){const m=n%100;return n+' '+forms[m>=11&&m<=14?2:n%10===1?0:n%10>=2&&n%10<=4?1:2];}
const inlineLive=e=>Boolean(e.live_preview)&&['animista','magic-ui'].includes(e.provider);
const preferences={'content.enter':'animista.fade-in','content.exit':'animista.fade-out','background.grid':'magic-ui.animated-grid-pattern','typography.gradient':'magic-ui.animated-gradient-text'};
function representative(pattern,variants){return variants.find(e=>e.id===preferences[pattern.key])||variants.find(e=>inlineLive(e)&&!e.is_static_reference)||variants.find(inlineLive)||variants[0]}
const automatic=new Set('animated-beam animated-circular-progress-bar animated-gradient-text animated-list animated-shiny-text aurora-text backlight border-beam comic-text dotted-map flickering-grid glyph-matrix highlighter light-rays line-shadow-text meteors morphing-text neon-gradient-card noise-texture number-ticker orbiting-circles pixel-image pulsating-button rainbow-button retro-grid ripple shine-border sparkles-text spinning-text terminal text-animate typing-animation video-text warp-background word-rotate'.split(' '));
const interactions={
  'animated-grid-pattern':['pointer','click'], 'interactive-grid-pattern':['pointer'],
  'animated-subscribe-button':['click'],'animated-theme-toggler':['click'],bento:['hover'],
  'bento-grid':['hover'],confetti:['click'],'cool-mode':['click'],dock:['pointer'],
  'file-tree':['click'],'glare-hover':['pointer'],globe:['pointer','drag'],
  'hero-video-dialog':['click'],'hyper-text':['hover'],'icon-cloud':['pointer'],
  'interactive-hover-button':['hover'], 'kinetic-text':['hover'],lens:['pointer'],
  'magic-card':['pointer'],marquee:['hover'],'particles':['pointer'],
  'floating-3d-particles':['pointer'],pointer:['pointer'],'smooth-cursor':['pointer'],
  'ripple-button':['click'],'shimmer-button':['hover','click'],'shiny-button':['hover'],
  'text-3d-flip':['hover'],'dia-text-reveal':['scroll'],'progressive-blur':['scroll'],
  'scroll-based-velocity':['scroll'],'scroll-progress':['scroll'],'text-reveal':['scroll']
};
const TRIGGER_LABELS={autoplay:'Автоматически',hover:'Наведение',pointer:'Курсор',click:'Клик',drag:'Перетаскивание',scroll:'Прокрутка',input:'Ввод',audio:'Звук'};
function triggers(e){
  if(e.provider==='animista')return ['hover','click'];
  if(e.provider==='magic-ui')return interactions[e.id.slice(9)]|| (automatic.has(e.id.slice(9))?['autoplay']:[]);
  return e.triggers||[];
}
function behavior(e){
  if(!inlineLive(e))return e.video_paths?.length?'Видео референс':e.live_preview?'Отдельное демо':'Исходный пример';
  if(e.provider==='animista')return 'Наведение / клик · повтор';
  if(e.id==='magic-ui.animated-grid-pattern')return 'Курсор / клик · адаптация';
  const t=triggers(e);return t.length?t.map(t=>TRIGGER_LABELS[t]).join(' / '):e.is_static_reference?'Статичный пример':'Оригинальный компонент';
}
function link(label,href,cls='',download=false){const a=E('a',cls,label);a.href=href;if(/^https?:/.test(href)){a.target='_blank';a.rel='noopener noreferrer'}if(download)a.download='';return a}
function sourceText(e){return [e.name,e.description_en,e.description_ru,e.class_label,...(e.source_tags||[]),...(e.technology||[])].join(' ').toLowerCase()}
function matchingVariants(p){
  const terms=state.query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return p.variants.filter(e=>(!state.provider||e.provider===state.provider)&&(!state.trigger||triggers(e).includes(state.trigger))&&terms.every(term=>(p.name+' '+sourceText(e)).toLowerCase().includes(term)));
}
function filtered(){
  return PATTERNS.filter(p=>(!state.type||p.type_id===state.type)&&(!state.pattern||p.id===state.pattern)).map(p=>({pattern:p,variants:matchingVariants(p)})).filter(row=>row.variants.length).sort((a,b)=>Number(inlineLive(representative(b.pattern,b.variants)))-Number(inlineLive(representative(a.pattern,a.variants))));
}
function nav(){
  els.nav.replaceChildren();
  const types=Object.entries(D.types).filter(([id])=>PATTERNS.some(p=>p.type_id===id)).sort((a,b)=>a[1].localeCompare(b[1],'ru'));
  for(const [id,label] of [['','Все паттерны'],...types]){
    const b=E('button',state.type===id?'active':'');b.type='button';
    b.append(E('span','',label),E('span','count',String(id?PATTERNS.filter(p=>p.type_id===id).length:PATTERNS.length)));
    b.onclick=()=>{state.type=id;state.pattern='';state.page=1;classes();render()};els.nav.append(b);
  }
}
function sources(){
  els.sources.replaceChildren();
  for(const [id,label] of [['','Все источники'],...Object.entries(PROVIDERS)]){
    const b=E('button','source'+(state.provider===id?' active':''),label);b.type='button';
    b.append(E('small','',String(id?PATTERNS.filter(p=>p.providers.includes(id)).length:PATTERNS.length)));
    b.onclick=()=>{state.provider=id;state.page=1;render()};els.sources.append(b);
  }
}
function classes(){
  els.classFilter.replaceChildren(new Option('Все паттерны',''));
  for(const p of PATTERNS.filter(p=>!state.type||p.type_id===state.type).sort((a,b)=>a.name.localeCompare(b.name,'ru')))els.classFilter.add(new Option(p.name,p.id));
  els.classFilter.value=state.pattern;
}
function videoElement(e,controls=false){
  const v=E('video');v.muted=true;v.loop=true;v.playsInline=true;v.preload=controls?'metadata':'none';v.controls=controls;
  if(e.poster_path)v.poster=e.poster_path;
  for(const path of e.video_paths){const s=E('source');s.src=path;s.type=path.endsWith('.webm')?'video/webm':'video/mp4';v.append(s)}
  if(controls)v.autoplay=true;return v;
}
function media(e,p,full=false){
  if(inlineLive(e))return liveCards.create({...e,pattern_key:p?.key},full);
  const b=E('button','media');b.type='button';b.setAttribute('aria-label','Посмотреть '+e.name);
  if(e.video_paths.length){const v=videoElement(e);b.append(v);b.addEventListener('pointerenter',()=>v.play().catch(()=>{}));b.addEventListener('pointerleave',()=>v.pause());}
  else if(e.poster_path){const img=E('img');img.src=e.poster_path;img.alt=e.name;img.loading='lazy';b.append(img);}
  else b.append(E('span','empty-media','Превью не загружено · открой подробности и источник'));
  b.append(E('span','tag-provider',PROVIDERS[e.provider]));b.onclick=()=>openDetail(e.id);return b;
}
function technique(e){return e.provider==='animista'?'animista.'+e.group:e.id}
function techniqueLabel(e){return PROVIDERS[e.provider]+' · '+(e.provider==='animista'?e.class_label.replace(/^(Появление|Исчезновение): /,''):e.name)}
function variantLabel(e){
  if(e.provider!=='animista')return e.name;
  const suffix=e.name.startsWith(e.group+'-')?e.name.slice(e.group.length+1):e.name;
  const directions={center:'По центру',top:'Сверху',bottom:'Снизу',left:'Слева',right:'Справа',tr:'Сверху справа',tl:'Сверху слева',br:'Снизу справа',bl:'Снизу слева',hor:'По горизонтали',ver:'По вертикали',horizontal:'По горизонтали',vertical:'По вертикали',both:'В обе стороны'};
  return directions[suffix]||e.name;
}
function variantControls(variants,selected,onChange,name){
  const wrap=E('div','pattern-options');const methods=E('select');methods.setAttribute('aria-label','Способ · '+name);
  const directions=E('select');directions.setAttribute('aria-label','Вариант · '+name);
  const groups=new Map();for(const e of variants){const key=technique(e);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(e)}
  for(const [key,rows] of groups)methods.add(new Option(techniqueLabel(rows[0]),key));
  methods.value=technique(selected);
  function fill(current){const rows=groups.get(methods.value);directions.replaceChildren();for(const e of rows)directions.add(new Option(variantLabel(e),e.id));directions.value=current.id;directions.hidden=rows.length===1;}
  fill(selected);
  methods.onchange=()=>{const e=groups.get(methods.value)[0];fill(e);onChange(e)};
  directions.onchange=()=>onChange(byId.get(directions.value));
  // Even a single implementation is named, so its source is clear.
  wrap.append(methods,directions);return wrap;
}
function card({pattern:p,variants}){
  let selected=representative(p,variants);
  const article=E('article','card pattern-card');article.dataset.pattern=p.id;
  const slot=E('div','pattern-stage');const body=E('div','card-body');
  const title=E('button','card-title',p.name);title.type='button';title.onclick=()=>openDetail(selected.id);
  const summary=E('p','class-label',p.type_label+' · '+quantity(variants.length,['вариант','варианта','вариантов']));
  const behaviorLabel=E('span','');const sourceLink=link('Источник ↗',selected.demo_url);
  const foot=E('div','card-footer');foot.append(behaviorLabel,sourceLink);
  function show(e){
    if(slot.firstChild)liveCards.release(slot.firstChild);
    selected=e;slot.replaceChildren(media(e,p));article.classList.toggle('native-card',inlineLive(e));
    behaviorLabel.textContent=behavior(e);behaviorLabel.className=inlineLive(e)?'live-tag':'';
    sourceLink.href=e.demo_url;
  }
  body.append(title,summary,variantControls(variants,selected,show,p.name),foot);article.append(slot,body);show(selected);return article;
}
function render(){
  liveCards.clear();nav();sources();const rows=filtered();const pages=Math.max(1,Math.ceil(rows.length/PAGE_SIZE));state.page=Math.min(state.page,pages);
  els.sectionTitle.textContent=state.type?D.types[state.type]:'Все паттерны';
  const count=rows.reduce((sum,row)=>sum+row.variants.length,0);
  els.resultCount.textContent=quantity(rows.length,['паттерн','паттерна','паттернов'])+' · '+quantity(count,['вариант','варианта','вариантов']);
  els.grid.replaceChildren(...rows.slice((state.page-1)*PAGE_SIZE,state.page*PAGE_SIZE).map(card));
  if(!rows.length){const empty=E('div','empty','Ничего не найдено. Измени запрос или фильтр.');empty.style.gridColumn='1 / -1';els.grid.append(empty)}
  els.pageLabel.textContent=state.page+' / '+pages;els.prev.disabled=state.page===1;els.next.disabled=state.page===pages;
}
function preview(e,demo){
  liveCards.releaseDetail();els.detailPreview.replaceChildren();
  if(inlineLive(e)){
    const example=demo?{...e,live_preview:'live/magic-ui/index.html?demo='+encodeURIComponent(demo)}:e;
    els.detailPreview.append(media(example,patternForExample.get(e.id),true));return;
  }
  if(e.live_preview&&location.protocol!=='file:'){const f=E('iframe');f.src=e.live_preview;f.title=e.name;els.detailPreview.append(f);return;}
  if(e.video_paths.length){els.detailPreview.append(videoElement(e,true));return;}
  if(e.poster_path){const img=E('img');img.src=e.poster_path;img.alt=e.name;els.detailPreview.append(img);return;}
  const note=E('div','file-note','Исходный проект доступен по ссылке.');note.append(link('Открыть пример',e.demo_url));els.detailPreview.append(note);
}
function detailMetadata(e){
  const side=els.detailAside;side.replaceChildren();const p=patternForExample.get(e.id);
  side.append(E('h3','','Варианты паттерна'),variantControls(p.variants,e,chosen=>openDetail(chosen.id),p.name));
  side.append(E('h3','','Взаимодействие'),E('div','',behavior(e)));
  if(e.id==='magic-ui.animated-grid-pattern')side.append(E('p','small-note','В каталоге к оригинальной автоматической сетке добавлены подсветка под курсором и отклик на клик. Исходник автора сохранён отдельно.'));
  if(e.demos?.length>1){
    side.append(E('h3','','Оформление реализации'));const select=E('select');select.setAttribute('aria-label','Оформление реализации');
    for(const demo of e.demos)select.add(new Option(demo.replace(/-/g,' '),demo));select.onchange=()=>preview(e,select.value);side.append(select);
  }
  side.append(E('h3','','Технология'),E('div','',(e.technology.length?e.technology:e.renderers).join(' · ')));
  const actions=E('div','actions');actions.append(link('Оригинальное демо ↗',e.demo_url,'primary'));
  if(e.repository_url)actions.append(link('Репозиторий ↗',e.repository_url));
  for(const u of e.code_urls||[])if(u!==e.repository_url)actions.append(link('Код автора ↗',u));
  if(e.article_url)actions.append(link('Разбор автора ↗',e.article_url));
  if(e.source_archive_path)actions.append(link('Скачать исходный код',e.source_archive_path,'',true));
  side.append(actions);
  const downloadNote=E('p','small-note','Загрузить материалы выбранного примера из корня Design Parser:');
  const command=E('code','','python scripts/fetch_assets.py --motion '+e.id);
  command.style.cssText='display:block;overflow-wrap:anywhere;user-select:all';
  side.append(downloadNote,command);
  if(e.code_paths.length){side.append(E('h3','','Сохранённый код'));const list=E('div','code-list');for(const path of e.code_paths.slice(0,24))list.append(link(path.split('/').slice(-2).join('/'),path,'',true));side.append(list)}
  if(e.license_path)side.append(link('Условия использования исходника',e.license_path,'small-note'));
}
function openDetail(id){
  const e=byId.get(id);if(!e)return;const p=patternForExample.get(id);liveCards.suspend(true);
  els.detailTitle.textContent=p.name;els.detailSubtitle.textContent=PROVIDERS[e.provider]+' · '+e.name;
  preview(e);detailMetadata(e);if(!els.detail.open)els.detail.showModal();
}
els.search.addEventListener('input',()=>{state.query=els.search.value;state.page=1;render()});
els.classFilter.onchange=()=>{state.pattern=els.classFilter.value;state.page=1;render()};
els.triggerFilter.onchange=()=>{state.trigger=els.triggerFilter.value;state.page=1;render()};
els.prev.onclick=()=>{state.page--;render();window.scrollTo({top:0,behavior:'smooth'})};
els.next.onclick=()=>{state.page++;render();window.scrollTo({top:0,behavior:'smooth'})};
els.close.onclick=()=>els.detail.close();
els.detail.addEventListener('close',()=>{liveCards.releaseDetail();els.detailPreview.replaceChildren();liveCards.suspend(false)});
els.detail.addEventListener('click',e=>{if(e.target===els.detail){const r=els.detail.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)els.detail.close()}});
function openFromHash(){const id=new URLSearchParams(location.hash.slice(1)).get('example');if(byId.has(id))openDetail(id);else if(patternById.has(id)){const p=patternById.get(id);openDetail(representative(p,p.variants).id)}}
window.addEventListener('hashchange',openFromHash);
els.date.textContent='Снимок каталогов · '+D.date;
els.total.textContent=PATTERNS.length;els.typeCount.textContent=new Set(PATTERNS.map(p=>p.type_id)).size;els.classCount.textContent=D.examples.length.toLocaleString('ru');
async function startCatalog(){
  if(location.protocol!=='file:'){
    try{
      const response=await fetch('/api/motion-availability');
      if(response.ok){const available=await response.json();for(const e of D.examples){const paths=available[e.id];if(!Array.isArray(paths))continue;e.video_paths=e.video_paths.filter(p=>paths.includes(p));if(e.poster_path&&!paths.includes(e.poster_path))e.poster_path=null;}}
    }catch(error){console.warn('Asset availability:',error.message);}
  }
  classes();render();openFromHash();
}
startCatalog();
const folderLink=link('📁 Исходные папки и варианты','folders/index.html');folderLink.style.cssText='display:block;padding:14px 10px;color:#fff;border:1px solid #444;border-radius:7px;margin-top:20px';document.querySelector('.sidebar').append(folderLink);
