#!/usr/bin/env python3
"""Генерирует site-copy/index.html — офлайн-галерею всех сайтов с видео/скриншотами
и ссылками на оригиналы. Данные встраиваются в страницу как JSON."""
import json, os

from taxonomy import CAT_ORDER, TAG_ORDER, host
from gallery_ui import navigation

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(ROOT, "site-copy")
styles = json.load(open(os.path.join(ROOT, "all_styles.json"), encoding="utf-8"))

# classification.json: id -> {"cat": "...", "tags": [...]} (см. CLAUDE.md).
# Если файла нет, галерея собирается без категорий и кнопки брифа не теряет смысл —
# просто фильтры будут пустыми.
cls_path = os.path.join(ROOT, "classification.json")
cls = json.load(open(cls_path, encoding="utf-8")) if os.path.exists(cls_path) else {}
# CAT_ORDER / TAG_ORDER / host() — общие с build_generated.py, см. taxonomy.py.

cards = []
for s in styles:
    sid = s["id"]
    has_video = bool(s.get("previewVideoUrl"))
    c = cls.get(sid, {})
    cards.append({
        "id": sid,
        "name": (s.get("siteName") or host(s.get("url")) or "Untitled").strip(),
        "url": s.get("url") or "",
        "host": host(s.get("url")),
        "v": has_video,                # есть видео
        "cs": s.get("colorScheme") or "light",
        "w": s.get("previewVideoWidth") or 1200,
        "h": s.get("previewVideoHeight") or 750,
        # классификация + данные для кнопки «Бриф»
        "cat": c.get("cat", ""),
        "tags": c.get("tags", []),
        "ns": " ".join((s.get("northStar") or "").split()),
        "colors": [x["hex"] for x in (s.get("colors") or [])[:6] if x.get("hex")],
        "fonts": (s.get("fonts") or [])[:4],
    })

# Сортировка: сначала с видео, потом по имени
cards.sort(key=lambda c: (not c["v"], c["name"].lower()))

n_video = sum(1 for c in cards if c["v"])
n_total = len(cards)
data_json = json.dumps(cards, ensure_ascii=False, separators=(",", ":"))

html = """<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Refero Styles — локальная копия (видео-галерея)</title>
<style>
  :root{ --bg:#0b0b0d; --card:#15151a; --card2:#1d1d24; --txt:#f4f4f6; --mut:#9a9aa6; --acc:#6c8cff; --bd:#2a2a33;}
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--bg);color:var(--txt);font:15px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
  header{position:sticky;top:0;z-index:20;background:rgba(11,11,13,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--bd);padding:8px 20px}
  .bar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;max-width:1600px;margin:0 auto}
  .bar+.bar{margin-top:7px}
  .topnav{display:flex;gap:6px;align-items:center;flex-shrink:0}
  .nav-item{text-decoration:none;color:var(--mut);font-size:12px;font-weight:600;padding:5px 12px;border-radius:999px;border:1px solid var(--bd);background:var(--card2);white-space:nowrap;transition:color .15s,border-color .15s,background .15s}
  .nav-item:hover{color:var(--txt);border-color:#3a3a48}
  .nav-item.on{background:var(--acc);color:#fff;border-color:var(--acc)}
  .navToggle{display:none;background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:999px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer;align-items:center;gap:6px;flex-shrink:0}
  @media(max-width:680px){
    .topnav{display:none;flex-direction:column;align-items:stretch;background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:8px;gap:6px;width:100%;order:9}
    .topnav.open{display:flex}
    .navToggle{display:inline-flex}
    .nav-item{text-align:center}
    #filterBar{display:none}
    #filterBar.open{display:flex;flex-direction:column;align-items:stretch;gap:8px}
    #filterBar select{max-width:none}
    #filterBar .seg{justify-content:space-between}
  }
  h1{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  .sub{color:var(--mut);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}
  input[type=search]{background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:9px;padding:7px 11px;font-size:13px;flex:1 1 180px;min-width:0;outline:none}
  input[type=search]:focus{border-color:var(--acc)}
  select{background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:9px;padding:7px 9px;font-size:12px;outline:none;max-width:240px;cursor:pointer}
  select:focus{border-color:var(--acc)}
  .seg{display:flex;gap:3px;background:var(--card2);border:1px solid var(--bd);border-radius:9px;padding:2px;overflow:hidden;flex-shrink:0}
  .seg button{font:inherit;line-height:1;background:none;border:0;color:var(--mut);border-radius:7px;padding:5px 8px;cursor:pointer;font-size:11px;white-space:nowrap}
  .seg button.on{background:var(--acc);color:#fff}
  .toggle{display:flex;align-items:center;gap:7px;color:var(--mut);font-size:12px;cursor:pointer;user-select:none;white-space:nowrap;flex-shrink:0}
  .toggle input{accent-color:var(--acc);width:15px;height:15px}
  main{max-width:1600px;margin:0 auto;padding:22px 20px 80px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:22px}
  .card{background:var(--card);border:1px solid var(--bd);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .2s,transform .2s}
  .card:hover{border-color:#3a3a48;transform:translateY(-2px)}
  .media{position:relative;aspect-ratio:16/10;background:#000;overflow:hidden}
  .media img,.media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .media video{opacity:0;transition:opacity .35s}
  .media.playing video{opacity:1}
  .badge{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.6);color:#fff;font-size:11px;padding:3px 8px;border-radius:999px;backdrop-filter:blur(4px)}
  .novid{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.6);color:#cfcfe0;font-size:11px;padding:3px 8px;border-radius:999px}
  .fav{position:absolute;top:9px;right:9px;width:34px;height:34px;border-radius:50%;border:0;cursor:pointer;background:rgba(0,0,0,.5);color:#fff;font-size:17px;line-height:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);transition:transform .15s,background .15s;z-index:4;padding:0}
  .fav:hover{transform:scale(1.12);background:rgba(0,0,0,.7)}
  .fav.on{background:#ff4d6d}
  .info{padding:12px 14px;display:flex;align-items:center;gap:10px}
  .meta{min-width:0;flex:1}
  .name{font-weight:600;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .host{color:var(--mut);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .chips{display:flex;flex-wrap:wrap;gap:3px 6px;margin-top:5px;align-items:center}
  .cat{background:rgba(108,140,255,.16);color:#aebfff;font-size:11px;padding:2px 8px;border-radius:999px;white-space:nowrap}
  .tag{color:var(--mut);font-size:11px;white-space:nowrap}
  .brief{background:var(--card2);border:1px solid var(--bd);color:var(--txt);font-size:11.5px;font-weight:550;padding:5px 10px;border-radius:8px;cursor:pointer;transition:background .15s;white-space:nowrap}
  .brief:hover{background:var(--acc);border-color:var(--acc);color:#fff}
  .open{flex-shrink:0;display:inline-flex;align-items:center;gap:5px;background:var(--card2);border:1px solid var(--bd);color:var(--txt);text-decoration:none;font-size:12.5px;font-weight:550;padding:7px 11px;border-radius:9px;transition:background .15s}
  .open:hover{background:var(--acc);border-color:var(--acc);color:#fff}
  .refero{color:var(--mut);text-decoration:none;font-size:11px}
  .refero:hover{color:var(--acc)}
  .foot{padding:0 14px 12px;display:flex;justify-content:space-between;align-items:center}
  #empty{color:var(--mut);text-align:center;padding:60px 0;display:none}
  .count{color:var(--mut);font-size:12px;white-space:nowrap;flex-shrink:0}
</style>
<link rel="stylesheet" href="../ui/gallery.css">
</head>
<body class="gallery-app">
<header>
  <h1>Референсы — Refero Styles</h1>
  <div class="bar">
  <button class="navToggle" id="navToggle" type="button" aria-expanded="false" aria-controls="filterBar">Фильтры</button>
  __NAVIGATION__
    <div class="sub">__N_TOTAL__ сайтов · __N_VIDEO__ с видео · дизайн-референсы</div>
  </div>
  <div class="bar" id="filterBar">
    <input type="search" id="q" placeholder="Поиск: название, домен, категория, стиль…" autocomplete="off">
    <select id="catSel" title="Категория сайта"><option value="">Все категории</option></select>
    <select id="tagSel" title="Стиль дизайна"><option value="">Все стили</option></select>
    <div class="seg" id="filter">
      <button data-f="all" class="on">Все</button>
      <button data-f="video">С видео</button>
      <button data-f="img">Без видео</button>
      <button data-f="fav" id="favTab">★ Избранное</button>
    </div>
    <label class="toggle"><input type="checkbox" id="auto" checked> Авто-видео</label>
    <span class="count" id="count"></span>
  </div>
</header>
<main>
  <p id="mediaNotice" hidden style="padding:12px 16px;border:1px solid var(--bd);border-radius:7px;background:var(--card)">
    Видео-превью ещё не установлены полностью.
    <a href="https://github.com/danilasylov/design-parser/releases/tag/reference-media-v1" target="_blank" rel="noopener noreferrer">Скачать сохранённый медиапакет проекта</a> (1,56 ГБ).
    После установки видео проигрываются прямо в карточках.
  </p>
  <div class="grid" id="grid"></div>
  <div id="empty">Ничего не найдено</div>
</main>
<script>
const DATA = __DATA__;
const CAT_ORDER = __CATS__;
const TAG_ORDER = __TAGS__;
const grid = document.getElementById('grid');
const qEl = document.getElementById('q');
const countEl = document.getElementById('count');
const emptyEl = document.getElementById('empty');
if(location.protocol !== 'file:') fetch('/api/reference-media').then(r=>r.ok?r.json():null).then(data=>{
  if(data && (data.videos < data.expected_videos || data.posters < data.expected_posters)) document.getElementById('mediaNotice').hidden=false;
}).catch(()=>{});

// Мобильное меню: пилюли нав-бара на узких экранах прячутся за кнопку «☰ Меню»
(function(){
  const btn = document.getElementById('navToggle');
  const panels = [document.getElementById('filterBar')].filter(Boolean);
  if(!btn || !panels.length) return;
  function setOpen(open){
    panels.forEach(panel => panel.classList.toggle('open', open));
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', () => {
    setOpen(!panels.some(panel => panel.classList.contains('open')));
  });
  document.addEventListener('click', e => {
    if(panels.some(panel => panel.classList.contains('open')) && !panels.some(panel => panel.contains(e.target)) && e.target !== btn){
      setOpen(false);
    }
  });
})();
let filter = 'all';
let query = '';
let cat = '';
let tag = '';

// Дропдауны категории/стиля: пункты в порядке таксономии, счётчики по всей базе
function fillSelect(sel, order, getVals){
  const cnt = {};
  DATA.forEach(c => getVals(c).forEach(v => { if(v) cnt[v] = (cnt[v]||0)+1; }));
  for(const v of order){
    if(!cnt[v]) continue;
    const o = document.createElement('option');
    o.value = v; o.textContent = v + ' (' + cnt[v] + ')';
    sel.appendChild(o);
  }
}
const catSel = document.getElementById('catSel');
const tagSel = document.getElementById('tagSel');
fillSelect(catSel, CAT_ORDER, c => [c.cat]);
fillSelect(tagSel, TAG_ORDER, c => c.tags || []);
catSel.addEventListener('change', e => { cat = e.target.value; render(); });
tagSel.addEventListener('change', e => { tag = e.target.value; render(); });

// Избранное: храним id понравившихся карточек в localStorage (живёт между перезагрузками)
let favs = new Set(JSON.parse(localStorage.getItem('refero_favs')||'[]'));
function saveFavs(){ try{ localStorage.setItem('refero_favs', JSON.stringify([...favs])); }catch(e){} }
function toggleFav(id){ if(favs.has(id)) favs.delete(id); else favs.add(id); saveFavs(); return favs.has(id); }
function updateFavTab(){ const b=document.getElementById('favTab'); if(b) b.textContent='★ Избранное'+(favs.size?' ('+favs.size+')':''); }

function vpath(id){return 'media/videos/'+id+'.mp4';}
function tpath(id){return 'media/thumbs/'+id+'.jpg';}
function detail(id){return 'https://styles.refero.design/style/'+id;}

// «Бриф ⧉»: готовый промпт для ИИ-агента — «сделай сайт этой категории, но со своим дизайном»
function briefText(c){
  const p = [];
  p.push('Сделай сайт категории «' + (c.cat || 'без категории') + '», но со своим дизайном — не копируй референс.');
  p.push('Референс по духу: ' + (c.url || detail(c.id)) + ' (' + c.name + ').');
  if(c.ns) p.push('Характер референса: ' + c.ns + '.');
  const st = (c.tags || []).join(', ');
  if(st) p.push('Стиль референса: ' + st + '. Цветовая схема: ' + (c.cs === 'dark' ? 'тёмная' : 'светлая') + '.');
  if(c.colors && c.colors.length) p.push('Палитра референса: ' + c.colors.join(' ') + '.');
  if(c.fonts && c.fonts.length) p.push('Шрифты референса: ' + c.fonts.join(', ') + '.');
  p.push('Страница стиля: ' + detail(c.id));
  return p.join('\\n');
}
function legacyCopy(t){
  const ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch(e) {}
  ta.remove();
  return ok;
}
async function copyBrief(c, btn){
  const t = briefText(c);
  let ok = false;
  if(navigator.clipboard && navigator.clipboard.writeText){
    try { await navigator.clipboard.writeText(t); ok = true; } catch(e) { ok = legacyCopy(t); }
  } else ok = legacyCopy(t);
  btn.textContent = ok ? 'Скопировано ✓' : 'Не удалось :(';
  setTimeout(() => { btn.textContent = 'Бриф ⧉'; }, 1600);
}

// Авто-воспроизведение: постер грузится лениво, а видео само запускается, когда
// карточка попадает в зону видимости, и выгружается, когда уходит из неё —
// так одновременно играют только видимые ролики (экономия памяти при 1000+ видео).
let autoplay = true;
const visible = new Set();

function ensureVideo(card){
  if(card._v) return card._v;
  const media = card.querySelector('.media');
  const v = document.createElement('video');
  v.muted=true; v.loop=true; v.playsInline=true; v.preload='auto';
  media.insertBefore(v, media.querySelector('.badge'));
  card._v = v;
  return v;
}
function playCard(card){
  if(card._off) return;            // вручную поставлено на паузу — не трогаем
  const v = ensureVideo(card);
  if(!v.src) v.src = card.dataset.vsrc;
  card.querySelector('.media').classList.add('playing');
  v.play().catch(()=>{});
}
function pauseCard(card, release){
  const m = card.querySelector('.media');
  if(m) m.classList.remove('playing');
  if(!card._v) return;
  card._v.pause();
  if(release){                     // ушло из вида — полностью освобождаем ролик
    card._v.removeAttribute('src'); card._v.load();
    card._v.remove(); card._v=null;
  }
}

const io = new IntersectionObserver((entries)=>{
  for(const e of entries){
    const card = e.target;
    const img = card.querySelector('img');
    if(img && !img.src && img.dataset.src) img.src = img.dataset.src;
    if(!card.dataset.vsrc) continue;
    if(e.isIntersecting){ visible.add(card); if(autoplay) playCard(card); }
    else { visible.delete(card); pauseCard(card, true); }
  }
},{rootMargin:'250px 0px'});

const autoEl = document.getElementById('auto');
autoEl.addEventListener('change',()=>{
  autoplay = autoEl.checked;
  if(autoplay) visible.forEach(c=>playCard(c));
  else visible.forEach(c=>pauseCard(c, false));
});

function makeCard(c){
  const card = document.createElement('article');
  card.className='card';
  const safeName = c.name.replace(/[<>&]/g,s=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[s]));
  const hostTxt = c.host || 'оригинал';
  card.innerHTML = `
    <div class="media" ${c.v?'data-vid="1"':''}>
      <img loading="lazy" data-src="${tpath(c.id)}" alt="">
      ${c.v?`<span class="badge">▶ видео</span>`:`<span class="novid">скриншот</span>`}
      <button class="fav${favs.has(c.id)?' on':''}" title="В избранное" aria-label="В избранное">${favs.has(c.id)?'♥':'♡'}</button>
    </div>
    <div class="info">
      <div class="meta">
        <div class="name" title="${safeName}">${safeName}</div>
        <div class="host">${hostTxt}</div>
        ${c.cat||((c.tags||[]).length)?`<div class="chips">${c.cat?`<span class="cat">${c.cat}</span>`:''}${(c.tags||[]).map(t=>`<span class="tag">#${t}</span>`).join('')}</div>`:''}
      </div>
      ${c.url?`<a class="open" href="${c.url}" target="_blank" rel="noopener noreferrer">Открыть оригинал ↗</a>`:''}
    </div>
    <div class="foot">
      <a class="refero" href="${detail(c.id)}" target="_blank" rel="noopener noreferrer">страница на Refero ↗</a>
      <button class="brief" title="Скопировать промпт для ИИ-агента">Бриф ⧉</button>
    </div>`;
  io.observe(card);
  if(c.v){
    const media = card.querySelector('.media');
    media.dataset.role='vid';
    card.dataset.vsrc = vpath(c.id);
    // клик/тап — ручная пауза-переключатель для конкретной карточки
    media.addEventListener('click',(ev)=>{
      ev.preventDefault();
      if(media.classList.contains('playing')){ card._off=true; pauseCard(card, false); }
      else { card._off=false; playCard(card); }
    });
  }
  const briefBtn = card.querySelector('.brief');
  briefBtn.addEventListener('click',(ev)=>{ ev.stopPropagation(); ev.preventDefault(); copyBrief(c, briefBtn); });
  const favBtn = card.querySelector('.fav');
  favBtn.addEventListener('click',(ev)=>{
    ev.stopPropagation(); ev.preventDefault();
    const on = toggleFav(c.id);
    favBtn.classList.toggle('on', on);
    favBtn.textContent = on ? '♥' : '♡';
    updateFavTab();
    if(filter==='fav' && !on) render();   // на вкладке избранного убрать снятую карточку
  });
  return card;
}

function render(){
  const q = query.trim().toLowerCase();
  const list = DATA.filter(c=>{
    if(filter==='video' && !c.v) return false;
    if(filter==='img' && c.v) return false;
    if(filter==='fav' && !favs.has(c.id)) return false;
    if(cat && c.cat!==cat) return false;
    if(tag && !(c.tags||[]).includes(tag)) return false;
    if(q && !((c.name||'').toLowerCase().includes(q) || (c.host||'').toLowerCase().includes(q)
           || (c.cat||'').toLowerCase().includes(q) || (c.tags||[]).some(t=>t.toLowerCase().includes(q)))) return false;
    return true;
  });
  io.disconnect();      // снимаем наблюдение со старых карточек
  visible.clear();
  grid.innerHTML='';
  const frag=document.createDocumentFragment();
  for(const c of list) frag.appendChild(makeCard(c));
  grid.appendChild(frag);
  countEl.textContent = list.length+' / '+DATA.length;
  emptyEl.style.display = list.length? 'none':'block';
}

qEl.addEventListener('input',e=>{query=e.target.value;render();});
document.getElementById('filter').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  filter=b.dataset.f;
  [...e.currentTarget.children].forEach(x=>x.classList.toggle('on',x===b));
  render();
});
updateFavTab();
render();
</script>
</body>
</html>"""

html = (html.replace("__DATA__", data_json)
            .replace("__CATS__", json.dumps(CAT_ORDER, ensure_ascii=False))
            .replace("__TAGS__", json.dumps(TAG_ORDER, ensure_ascii=False))
            .replace("__N_TOTAL__", str(n_total))
            .replace("__N_VIDEO__", str(n_video)))

os.makedirs(SITE, exist_ok=True)
out = os.path.join(SITE, "index.html")
html = html.replace("__NAVIGATION__", navigation("references"))
open(out, "w", encoding="utf-8").write(html)
print(f"wrote {out}  ({n_total} cards, {n_video} with video, {len(html)//1024} KB)")
