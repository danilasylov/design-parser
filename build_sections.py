#!/usr/bin/env python3
"""Генерирует sections/index.html — вкладку «Секции»: для каждого проанализированного
референса показывает УПОРЯДОЧЕННЫЙ список секций (лейбл + заголовок). Источник —
sections.json (пишет analyze_sections.js) + all_styles.json + classification.json.
Данные встраиваются в страницу как JSON. Категории/таксономия — из taxonomy.py."""
import json, os
from gallery_ui import navigation

ROOT = os.path.dirname(os.path.abspath(__file__))
styles = {s["id"]: s for s in json.load(open(os.path.join(ROOT, "all_styles.json"), encoding="utf-8"))}
sec = json.load(open(os.path.join(ROOT, "sections.json"), encoding="utf-8")) if os.path.exists(os.path.join(ROOT, "sections.json")) else {}
cls_path = os.path.join(ROOT, "classification.json")
cls = json.load(open(cls_path, encoding="utf-8")) if os.path.exists(cls_path) else {}

# некоторые сайты отдают в innerText одиночные суррогаты (обломки эмодзи) —
# они ломают запись в UTF-8; чистим все строки перед сборкой
def clean(x):
    if isinstance(x, str):
        return "".join(c for c in x if not (0xD800 <= ord(c) <= 0xDFFF))
    if isinstance(x, list):
        return [clean(i) for i in x]
    if isinstance(x, dict):
        return {k: clean(v) for k, v in x.items()}
    return x

cards = []
for sid, rec in sec.items():
    s = styles.get(sid, {})
    cards.append({
        "id": sid,
        "name": clean(rec.get("name") or s.get("siteName") or "—"),
        "url": rec.get("url") or s.get("url") or "",
        "cat": cls.get(sid, {}).get("cat", ""),
        "ok": rec.get("ok", False),
        "sections": clean(rec.get("sections", [])),
    })
# сначала с наибольшим числом секций (богатая анатомия — полезнее), потом по имени
cards.sort(key=lambda c: (-len([x for x in c["sections"]]), c["name"].lower()))

n_total = len(cards)
n_ok = sum(1 for c in cards if c["sections"])
data_json = json.dumps(cards, ensure_ascii=False, separators=(",", ":"))

html = """<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Секции референсов — анатомия страниц</title>
<style>
  :root{--bg:#0b0b0d;--card:#15151a;--card2:#1d1d24;--txt:#f4f4f6;--mut:#9a9aa6;--acc:#6c8cff;--bd:#2a2a33}
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--bg);color:var(--txt);font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
  a{color:inherit;text-decoration:none}
  header{position:sticky;top:0;z-index:20;background:rgba(11,11,13,.85);backdrop-filter:blur(12px);border-bottom:1px solid var(--bd);padding:14px 20px}
  .topnav{display:flex;gap:8px;align-items:center;max-width:1200px;margin:0 auto 12px}
  .nav-item{color:var(--mut);font-size:13px;font-weight:600;padding:6px 15px;border-radius:999px;border:1px solid var(--bd);background:var(--card2);transition:color .15s,border-color .15s,background .15s}
  .nav-item:hover{color:var(--txt);border-color:#3a3a48}
  .nav-item.on{background:var(--acc);color:#fff;border-color:var(--acc)}
  .navToggle{display:none;background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:999px;padding:6px 15px;font-size:13px;font-weight:600;cursor:pointer;align-items:center;gap:6px;margin-bottom:12px}
  @media(max-width:680px){
    .topnav{display:none;flex-direction:column;align-items:stretch;position:absolute;left:20px;right:20px;top:100%;margin-top:8px;background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:8px;z-index:30;box-shadow:0 12px 28px rgba(0,0,0,.5)}
    .topnav.open{display:flex}
    .navToggle{display:inline-flex}
    .nav-item{text-align:center}
  }
  .bar{display:flex;gap:12px;align-items:center;flex-wrap:wrap;max-width:1200px;margin:0 auto}
  h1{font-size:18px;margin:0;font-weight:650;white-space:nowrap}
  .sub{color:var(--mut);font-size:13px}
  input[type=search]{background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:10px;padding:9px 13px;font-size:14px;flex:1 1 220px;min-width:0;outline:none}
  input[type=search]:focus{border-color:var(--acc)}
  .count{color:var(--mut);font-size:13px;white-space:nowrap}
  main{max-width:1200px;margin:0 auto;padding:22px 20px 80px}
  .intro{color:var(--mut);font-size:13.5px;margin-bottom:20px;max-width:80ch}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:18px}
  .card{background:var(--card);border:1px solid var(--bd);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
  .chead{padding:14px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:baseline;justify-content:space-between;gap:10px}
  .chead .nm{font-weight:650;font-size:15px}
  .chead .cat{font-size:11px;color:#aebfff;background:rgba(108,140,255,.16);padding:2px 8px;border-radius:999px;white-space:nowrap}
  .chead a.host{display:block;color:var(--mut);font-size:12px;margin-top:2px}
  .secs{padding:8px 10px;display:flex;flex-direction:column;gap:2px}
  .sec{display:grid;grid-template-columns:26px 1fr;gap:10px;align-items:start;padding:7px 8px;border-radius:8px}
  .sec:hover{background:var(--card2)}
  .sec .i{font-family:ui-monospace,monospace;font-size:11px;color:var(--mut);padding-top:2px}
  .sec .lab{display:inline-block;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:.04em;text-transform:uppercase;color:#c7d0ff;background:rgba(108,140,255,.13);border:1px solid rgba(108,140,255,.2);padding:1px 7px;border-radius:5px}
  .sec .lab.footer,.sec .lab.nav\\/\\ header{color:#b9b9c6;background:rgba(255,255,255,.05);border-color:var(--bd)}
  .sec .hd{font-size:13px;color:var(--txt);margin-top:5px}
  .sec .sm{font-size:11.5px;color:var(--mut);margin-top:3px;display:block}
  .empty{padding:18px 16px;color:var(--mut);font-size:13px}
  #none{color:var(--mut);text-align:center;padding:60px 0;display:none}
</style>
<link rel="stylesheet" href="../ui/gallery.css">
</head>
<body class="gallery-app">
<header>
  <h1>Анатомия страниц</h1>
  <div class="bar">
  <button class="navToggle" id="navToggle" type="button" aria-expanded="false" aria-controls="filterBar">Фильтры</button>
  __NAVIGATION__
    <div class="sub">__N_OK__ / __N_TOTAL__ сайтов разобрано · анатомия страниц</div>
  </div>
  <div class="bar" id="filterBar">
    <input type="search" id="q" placeholder="Поиск: сайт, тип секции, заголовок…" autocomplete="off">
    <span class="count" id="count"></span>
  </div>
</header>
<main>
  <div class="intro">Playwright открывает оригинальный сайт-референс, ждёт рендер и достаёт упорядоченный список секций (тип + заголовок). Так видно, из каких блоков собран сайт. Когда Claude делает лендинг по этому референсу, он смотрит и дизайн-систему (refero), и эту анатомию секций. Пополняется по мере анализа новых сайтов (<code>node analyze_sections.js</code>).</div>
  <div class="grid" id="grid"></div>
  <div id="none">Ничего не найдено</div>
</main>
<script>
const DATA = __DATA__;
const grid = document.getElementById('grid');
const countEl = document.getElementById('count');
const noneEl = document.getElementById('none');

// Мобильное меню: пилюли нав-бара на узких экранах прячутся за кнопку «☰ Меню»
(function(){
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('filterBar');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', e => {
    if(nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
function host(u){try{const h=new URL(u).hostname;return h.replace(/^www\\./,'');}catch(e){return u;}}
function esc(s){return String(s||'').replace(/[<>&]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c]));}
function card(c){
  const secs = c.sections.length
    ? c.sections.map((s,i)=>`<div class="sec"><span class="i">${String(i+1).padStart(2,'0')}</span><div>`
        +`<span class="lab ${esc(s.label)}">${esc(s.label)}</span>`
        +(s.heading?`<div class="hd">${esc(s.heading)}</div>`:'')
        +(!s.heading&&s.sample?`<span class="sm">${esc(s.sample)}</span>`:'')
        +`</div></div>`).join('')
    : `<div class="empty">Секции не считались (тяжёлый JS / canvas-сайт).</div>`;
  return `<article class="card">
    <div class="chead">
      <div><div class="nm">${esc(c.name)}</div><a class="host" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(host(c.url))} ↗</a></div>
      ${c.cat?`<span class="cat">${esc(c.cat)}</span>`:''}
    </div>
    <div class="secs">${secs}</div>
  </article>`;
}
function render(q){
  q=(q||'').trim().toLowerCase();
  const list=DATA.filter(c=>!q||[c.name,c.cat,c.url,...c.sections.flatMap(s=>[s.label,s.heading])].join(' ').toLowerCase().includes(q));
  grid.innerHTML=list.map(card).join('');
  countEl.textContent=list.length+' / '+DATA.length;
  noneEl.style.display=list.length?'none':'block';
}
document.getElementById('q').addEventListener('input',e=>render(e.target.value));
render('');
</script>
</body>
</html>"""

html = (html.replace("__DATA__", data_json)
            .replace("__N_OK__", str(n_ok))
            .replace("__N_TOTAL__", str(n_total)))

out_dir = os.path.join(ROOT, "sections")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, "index.html")
html = html.replace("__NAVIGATION__", navigation("sections"))
open(out, "w", encoding="utf-8").write(html)
print(f"wrote {out}  ({n_total} сайтов, {n_ok} с секциями, {len(html)//1024} KB)")
