/* analyze_sections.js — рендерит оригинальные сайты-референсы через Playwright и
   извлекает УПОРЯДОЧЕННЫЙ список секций (лейбл + заголовок + образец текста).
   Результат → sections.json (id -> {...}). Резюмируемый: уже проанализированные
   (ok:true) пропускает. Батч: id из argv, иначе все refs из generated-sites/projects.json.
   Параллелит по CONCURRENCY страниц (env CONCURRENCY переопределяет).
   Запуск:  node analyze_sections.js [id id ...]
            node analyze_sections.js --all      (все 1288 — долго!)
            CONCURRENCY=8 node analyze_sections.js --all  */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const styles = JSON.parse(fs.readFileSync(path.join(ROOT, 'all_styles.json')));
const byId = Object.fromEntries(styles.map(s => [s.id, s]));
const OUT = path.join(ROOT, 'sections.json');
let out = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT)) : {};

let args = process.argv.slice(2);
let ids;
if (args.includes('--all')) {
  ids = styles.map(s => s.id);
} else if (args.length) {
  ids = args;
} else {
  const projs = JSON.parse(fs.readFileSync(path.join(ROOT, 'generated-sites/projects.json')));
  const set = new Set();
  projs.forEach(p => (p.refs || []).forEach(r => { if (r.id) set.add(r.id); }));
  ids = [...set];
}

// извлечение секций внутри страницы
function extractSections() {
  const KW = {
    'social-proof': /trusted by|as seen|our clients|logos|used by|доверя|используют|партнёр|клиент/i,
    'pricing': /pricing|\bplans?\b|per month|\/mo\b|тариф|\bцен[аы]\b|стоимость|подписк/i,
    'testimonials': /testimonial|reviews?|what .{0,20}say|loved by|отзыв|говорят о нас/i,
    'faq': /\bfaq\b|frequently asked|common questions|частые вопрос|вопросы и ответ/i,
    'how-it-works': /how it works|how it’s made|get started in|\bstep\b|как это работает|как работает|шаг [1-9]/i,
    'features': /features?|why .{0,20}\?|benefits?|what you get|возможност|почему|преимуществ|что умеет/i,
    'stats': /\b\d[\d.,]*\s?(k|m|bn|%|\+|млн|тыс)\b.{0,40}\b\d/i,
    'gallery': /gallery|collection|shop|products?|каталог|коллекц|товар/i,
    'cta': /get started|sign up|try .{0,15}free|book a|buy now|join .{0,10}(now|today|waitlist)|request access|начать|попроб|купить|записать|оформить|оставить заявк/i,
    'contact': /contact us|get in touch|связаться|контакт/i,
    'newsletter': /subscribe|newsletter|stay in the loop|подпис/i,
    'team': /our team|meet the|founders?|команда|о нас\b/i,
    'blog': /latest .{0,10}(posts|news|articles)|from the blog|journal|блог|новости|статьи/i,
  };
  function label(txt, tag) {
    if (tag === 'header' || tag === 'nav') return 'nav / header';
    if (tag === 'footer') return 'footer';
    for (const k in KW) if (KW[k].test(txt)) return k;
    return null;
  }
  const main = document.querySelector('main') || document.body;
  const cand = new Set();
  document.querySelectorAll('header, footer, nav[role], body > nav').forEach(e => cand.add(e));
  [...(main.children || [])].forEach(e => cand.add(e));
  document.querySelectorAll('section').forEach(e => cand.add(e));
  let arr = [...cand].filter(e => e.offsetHeight > 120 || ['HEADER', 'FOOTER', 'NAV'].includes(e.tagName));
  arr = arr.filter(e => !arr.some(o => o !== e && o.contains(e)));  // только верхнеуровневые
  arr.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1);
  const res = [], seen = new Set();
  let first = true;
  for (const el of arr) {
    const tag = el.tagName.toLowerCase();
    const h = el.querySelector('h1, h2, h3');
    const heading = h ? h.innerText.trim().replace(/\s+/g, ' ').slice(0, 90) : '';
    const txt = (el.innerText || '').replace(/\s+/g, ' ').trim();
    let lab = label((heading + ' ' + txt).slice(0, 500), tag);
    if (!lab && first && tag !== 'header' && tag !== 'nav' && heading) { lab = 'hero'; }
    if (!lab) lab = heading ? 'section' : 'block';
    if (tag !== 'header' && tag !== 'nav') first = false;
    const key = lab + '|' + heading.slice(0, 40);
    if (seen.has(key)) continue; seen.add(key);
    res.push({ tag, label: lab, heading, sample: txt.slice(0, 120) });
    if (res.length >= 20) break;
  }
  return res;
}

const CONCURRENCY = Math.max(1, parseInt(process.env.CONCURRENCY || '3', 10));
const RETRIES   = Math.max(0, parseInt(process.env.RETRIES   || '2', 10));   // доп. попытки на сетевую ошибку
const COOL_MS   = Math.max(0, parseInt(process.env.COOL_MS   || '45000', 10)); // глобальный кулдаун при каскаде
const COOL_HITS = Math.max(2, parseInt(process.env.COOL_HITS || '6', 10));   // сколько подряд reset'ов = каскад
const BACKOFF   = [6000, 15000, 30000]; // пауза перед ретраем (по номеру попытки)
const sleep = ms => new Promise(r => setTimeout(r, ms));
// сетевой сброс/таймаут (лечится паузой), в отличие от «мёртвого» домена (NAME_NOT_RESOLVED)
const isNetReset = m => /ERR_CONNECTION_RESET|ERR_CONNECTION_CLOSED|ERR_CONNECTION_TIMED_OUT|ERR_TIMED_OUT|ERR_NETWORK_CHANGED|ERR_HTTP2|Timeout/i.test(m);

(async () => {
  // очередь только из непроанализированных
  const queue = ids.filter(id => !(out[id] && out[id].ok) && byId[id] && byId[id].url);
  const skip = ids.length - queue.length;
  const total = queue.length;
  let done = 0, fail = 0, saveDirty = false;
  let consecReset = 0;      // подряд идущих сетевых сбросов по всему пулу
  let coolingUntil = 0;     // до этого времени все воркеры спят (кулдаун)
  const t0 = Date.now();

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1366, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
  });

  // writeFileSync синхронен → снапшоты общего out не переплетаются; троттлим до раза в 1.5с + всегда в конце
  let saveTimer = null;
  function scheduleSave() {
    saveDirty = true;
    if (saveTimer) return;
    saveTimer = setTimeout(() => {
      saveTimer = null;
      if (saveDirty) { fs.writeFileSync(OUT, JSON.stringify(out, null, 1)); saveDirty = false; }
    }, 1500);
  }

  // если сработал глобальный кулдаун — ждём его окончания перед любым новым goto
  async function waitCooldown() {
    const left = coolingUntil - Date.now();
    if (left > 0) await sleep(left);
  }

  // одна попытка загрузки; true при успехе
  async function attempt(s, id) {
    await waitCooldown();
    const page = await ctx.newPage();
    try {
      await page.goto(s.url, { timeout: 25000, waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(2600);
      const sections = await page.evaluate(extractSections);
      out[id] = { url: s.url, name: s.siteName, sections, ts: Date.now(), ok: true };
      consecReset = 0;  // успех гасит счётчик каскада
      done++;
      console.log(`✓ ${s.siteName} — ${sections.length} секций (${sections.map(x => x.label).join(', ')})`);
      return true;
    } catch (e) {
      const msg = String(e.message);
      out[id] = { url: s.url, name: s.siteName, sections: [], ts: Date.now(), ok: false, err: msg.slice(0, 100) };
      if (isNetReset(msg)) {
        consecReset++;
        // каскад сбросов → усыпляем весь пул, чтобы rate-limit остыл
        if (consecReset >= COOL_HITS && Date.now() >= coolingUntil && COOL_MS > 0) {
          coolingUntil = Date.now() + COOL_MS;
          consecReset = 0;
          console.log(`⏸ каскад сбросов — глобальный кулдаун ${COOL_MS / 1000}с`);
        }
        return false;  // сетевой сброс → можно ретраить
      }
      console.log(`✗ ${s.siteName} — ${msg.slice(0, 60)}`);
      return null;     // «жёсткая» ошибка (мёртвый домен и т.п.) — ретраить бессмысленно
    } finally {
      await page.close().catch(() => {});
    }
  }

  async function processOne(id) {
    const s = byId[id];
    for (let i = 0; i <= RETRIES; i++) {
      const r = await attempt(s, id);
      if (r === true) break;         // успех
      if (r === null) { fail++; break; }  // жёсткая ошибка (мёртвый домен) — не ретраим
      if (i < RETRIES) {             // сетевой сброс — пауза и ещё попытка
        await sleep(BACKOFF[i] || BACKOFF[BACKOFF.length - 1]);
      } else {                       // исчерпали ретраи
        fail++;
        console.log(`✗ ${s.siteName} — reset ×${RETRIES + 1}`);
      }
    }
    scheduleSave();
    const n = done + fail;
    if (n % 25 === 0 || n === total) {
      const rate = n / ((Date.now() - t0) / 1000);
      const eta = rate > 0 ? Math.round((total - n) / rate) : 0;
      console.log(`— прогресс: ${n}/${total} (${done} ok, ${fail} fail), ~${rate.toFixed(1)}/с, ETA ${Math.floor(eta / 60)}м${eta % 60}с`);
    }
  }

  // пул воркеров: каждый тянет следующий id из общего курсора
  let cursor = 0;
  async function worker() {
    while (cursor < queue.length) {
      const id = queue[cursor++];
      await processOne(id);
    }
  }
  console.log(`Старт: ${total} к анализу, ${skip} уже готово, параллелизм ${CONCURRENCY}, ретраи ${RETRIES}, кулдаун ${COOL_MS / 1000}с/${COOL_HITS}`);
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, total || 1) }, worker));

  if (saveTimer) clearTimeout(saveTimer);
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));  // финальный снапшот
  await browser.close();
  console.log(`\nГотово: ${done} новых, ${skip} пропущено, ${fail} ошибок. Всего в базе: ${Object.keys(out).length}`);
})();
