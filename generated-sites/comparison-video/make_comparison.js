#!/usr/bin/env node
/* ─────────────────────────────────────────────────────────────────────────────
   make_comparison.js — сборщик сравнительного видео
   «шаблонный ИИ-сайт (сверху) vs сайт с дизайн-системой (снизу)».

   Делает ВСЁ автоматически по зафиксированному шаблону:
     • пишет два скролл-видео (1920×1080, 30fps, медленный старт),
     • рендерит золотую корону (SVG) и подписи (Playwright → прозрачные PNG),
     • собирает финальный монтаж: тёплый фон + прямая тетрадная клетка,
       скруглённые видео в рамках, подписи с подчёркиванием по ширине текста,
       корона наклонена «на уголок» нижнего видео, симметричные отступы.

   ЗАПУСК (из корня репозитория или откуда угодно — пути можно относительные):
     node generated-sites/comparison-video/make_comparison.js \
       --design generated-sites/<slug>/index.html \
       --ai     generated-sites/<slug>/comparison/ai-version.html \
       --out    generated-sites/<slug>/comparison

   Необязательные флаги (значения по умолчанию — стандартная рамка «AI-дефолт vs дизайн-система»):
     --label-top    "AI Default Styles"
     --label-bottom "With Custom Design System"
     --crown        bottom | top | none        (на каком видео корона; по умолч. bottom)
     --avg          1061       (средняя скорость скролла ДИЗАЙН-САЙТА, px/сек; меньше = медленнее)
     --min-sec      8          (минимальная длительность ролика, сек; короткий сайт едет
                                медленнее, а не выдаёт 4-секундный огрызок. 0 — снять предел)
     --hold         1          (сколько секунд стоим на первом экране до начала скролла)
     --peak-from    2s         (с какой секунды держится максимальная скорость; можно долей: 0.2)
     --peak-to      1          (до какого момента держится максимум; 1 = до конца, без замедления)
     --peak         3          (максимум, в разах от стартовой скорости)
     --tail         2          (скорость на финише, в разах от стартовой; работает при --peak-to < 1)
     --sync         on | off   (on: ИИ-версия проходит свою высоту за то же время, что и
                                дизайн-сайт — если она короче, едет медленнее; off — свой
                                темп по --avg и фриз-кадр в конце)
     --note-top     "Standard components, heavy contrast, zero personality"
                               (вторая строка под верхней подписью: мельче и серым)
     --note-bottom  "Refined typography, balanced hierarchy, polished UI"
                               (то же под нижней; переопредели флагом, если на конкретном
                                ролике нужен источник дизайн-системы вместо тэглайна)
     --ratio        native     (native = 2016×2730; «4:5» / «1:1» — боковые поля расширяются
                                до нужной пропорции, сайты НЕ обрезаются и не ужимаются)
     --deliver      ""         (WxH финала; по умолчанию от --ratio: портрет → 1350 по высоте,
                                ландшафт → 1920 по ширине. Это потолки ленты — отдаём готовым
                                размером, чтобы не было второго транскода на их стороне)
     --out-name     comparison-final
                               (имя финала без расширения; при своём имени скролл-видео тоже
                                получают префикс, поэтому основной монтаж не затирается)
     --fps          60         (частота кадров. Длительность от неё НЕ зависит: кадры всюду
                                считаются как «секунды × FPS», поэтому 60 fps — это вдвое
                                больше снятых скриншотов на ту же длину, то есть реально
                                более плавный скролл, а не растяжка. 30 — прежний стандарт)
     --videos-dir   generated-sites/_videos
                               (общее хранилище финалов; см. «КУДА ЛОЖИТСЯ ФИНАЛ»)
     --date-dir     <сегодняшняя дата, YYYY-MM-DD>
                               (подпапка-батч внутри videos-dir; переопредели, если дособираешь
                                ролик для сайта из вчерашней/другой пачки)
     --slug         <из --out/--design>
                               (имя файла в общем хранилище)

   КУДА ЛОЖИТСЯ ФИНАЛ: штатный монтаж пишется ОДИН раз в общую папку, сгруппированную
   по дате генерации — generated-sites/_videos/<YYYY-MM-DD>/<slug>.mp4 (сайты, смонтированные
   в один заход/день, лежат вместе, а не одной кучей за всё время). В папке сайта создаётся
   относительный симлинк <slug>/comparison/comparison-final.mp4 → ../../_videos/<дата>/<slug>.mp4.
   Симлинк прозрачен для os.path.isfile (build_generated.py), serve.py и file://, поэтому чип
   «Видео» в галерее работает без правок. Скролл-видео остаются в папке сайта. При кастомном
   --out-name (альтернативные ratio/имена) финал остаётся рядом с сайтом, как раньше.

   Пример монтажа под ленту X (4:5, пауза 3с, источник в подписи, отдельный файл):
     node … --out-name comparison-4x5 --ratio 4:5 --hold 3 --min-sec 14 \
            --note-bottom "Design system: LogoArchive · styles.refero.design"

   ЗАВИСИМОСТИ: playwright (уже в node_modules проекта) + ffmpeg.
   ffmpeg ищется по порядку: ./bin/ffmpeg (лежит рядом) → require('ffmpeg-static') → $FFMPEG.
   ───────────────────────────────────────────────────────────────────────────── */

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

// ── playwright из node_modules проекта (require поднимается по дереву) ──
let chromium;
try { ({ chromium } = require('playwright')); }
catch (e) { die('Не найден playwright. Установи: npm i playwright && npx playwright install chromium'); }

// ── ffmpeg ──
function resolveFfmpeg() {
  const local = path.join(__dirname, 'bin', 'ffmpeg');
  if (fs.existsSync(local)) return local;
  try { const p = require('ffmpeg-static'); if (p && fs.existsSync(p)) return p; } catch (e) {}
  if (process.env.FFMPEG && fs.existsSync(process.env.FFMPEG)) return process.env.FFMPEG;
  die('Не найден ffmpeg. Положи бинарь в ./bin/ffmpeg, или `npm i ffmpeg-static`, или задай $FFMPEG.');
}
const FFMPEG = resolveFfmpeg();
const ff = (args) => execFileSync(FFMPEG, args, { stdio: ['ignore', 'ignore', 'ignore'] });
function die(m) { console.error('✗ ' + m); process.exit(1); }

// ── аргументы ──
function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
}
const DESIGN = path.resolve(arg('design', ''));
const AI     = path.resolve(arg('ai', ''));
const OUT    = path.resolve(arg('out', ''));
const LABEL_TOP    = arg('label-top', 'AI Default Styles');
const LABEL_BOTTOM = arg('label-bottom', 'With Custom Design System');
// вторая строка под подписью, мельче и серым — стандартный тэглайн процесса; на конкретном
// ролике можно переопределить флагом (например, источником дизайн-системы)
const NOTE_TOP     = arg('note-top', 'Standard components, heavy contrast, zero personality');
const NOTE_BOTTOM  = arg('note-bottom', 'Refined typography, balanced hierarchy, polished UI');
// имя финального файла без расширения: даёт собрать альтернативный монтаж,
// не затирая уже отданный comparison-final.mp4
const OUT_NAME = arg('out-name', 'comparison-final');
// Штатные финалы лежат в generated-sites/_videos/<дата>/<slug>.mp4, сгруппированные по дате
// генерации — иначе при генерации пачками все ролики за всё время сваливаются в одну кучу.
// В папке сайта остаётся симлинк comparison/comparison-final.mp4 → туда. Симлинк прозрачен для
// os.path.isfile (build_generated.py), serve.py и file://, поэтому галерею править не надо.
// slug берём из --out (…/<slug>/comparison) или из --design (…/<slug>/index.html).
const VIDEOS_DIR = path.resolve(arg('videos-dir', path.join(__dirname, '..', '_videos')));
function today() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
const DATE_DIR = arg('date-dir', today());
const SLUG = arg('slug', '') || deriveSlug();
function deriveSlug() {
  const o = path.resolve(arg('out', ''));
  if (path.basename(o) === 'comparison') return path.basename(path.dirname(o));
  const d = path.resolve(arg('design', ''));
  return d ? path.basename(path.dirname(d)) : '';
}
// соотношение сторон кадра: native — как считается из раскладки (2016×2730),
// «4:5» / «1:1» — боковые поля расширяются до нужной пропорции, сайты НЕ обрезаются.
// При заданном ratio финал дополнительно ужимается до --deliver (по умолчанию 1080×1350
// для 4:5) — это ровно тот размер, который принимает лента, без второго транскода.
const RATIO   = arg('ratio', 'native');
const DELIVER = arg('deliver', '');
const CROWN_ON = arg('crown', 'bottom');           // bottom | top | none
const AVG = parseInt(arg('avg', '1061'), 10);      // 884 + 20%
const HOLD_SEC = parseFloat(arg('hold', '1'));     // пауза на первом экране, сек
// Нижняя граница длительности ролика. Короткие сайты при --avg 1061 давали 4-секундные
// видео — смотреть невозможно. Если по --avg выходит меньше, скролл растягивается на
// MIN_SEC (скорость падает), а не обрезается. Ставь --min-sec 0, чтобы снять ограничение.
const MIN_SEC = parseFloat(arg('min-sec', '8'));
const SYNC = arg('sync', 'on') !== 'off';          // темп ИИ-версии считать от дизайн-системы
// моменты на таймлайне: «4s» — секунда от начала видео; «0.5» — доля всего ролика
const when = (raw) => (/s$/i.test(raw) ? { sec: parseFloat(raw) } : { frac: parseFloat(raw) });
const PEAK_FROM = when(String(arg('peak-from', '2s')));  // с какой секунды держим максимум
// 1 = держим максимум до самого конца (замедления в финале нет — это формат шортса).
// Меньше 1 (или «7s») — после этого момента спад к --tail.
const PEAK_TO   = when(String(arg('peak-to', '1')));     // до какого момента держим максимум
const PEAK = parseFloat(arg('peak', '3'));            // максимум, в разах от стартовой скорости
const TAIL = parseFloat(arg('tail', '2'));            // скорость на финише, в разах от стартовой
if (!DESIGN || !AI || !OUT) die('Нужны --design, --ai, --out. См. шапку файла.');
for (const f of [DESIGN, AI]) if (!fs.existsSync(f)) die('Файл не найден: ' + f);
fs.mkdirSync(OUT, { recursive: true });

// ── зафиксированные параметры видео/монтажа ──
const W = 1920, H = 1080, B = 3, R = 30;
// Частота кадров. Вся арифметика ниже считает кадры как «секунды × FPS», поэтому смена
// частоты НЕ меняет длительность ролика: при 60 fps на те же 8 секунд снимается вдвое
// больше скриншотов — движение плавнее, длина та же.
const FPS = parseInt(arg('fps', '60'), 10);
if (!(FPS > 0)) die(`--fps: ожидается положительное число (получено «${arg('fps', '')}»)`);
// хвост держим в секундах, а не в кадрах: 4 кадра были привязаны к 30 fps и на другой
// частоте укоротили бы ролик
const HOLD_START = Math.max(1, Math.round(HOLD_SEC * FPS));
const HOLD_END = Math.max(1, Math.round(4 * FPS / 30));   // стоим на первом экране + короткий хвост
const PAD_TOP = 60, LABEL_H = 130;
const HAS_NOTE = !!(NOTE_TOP || NOTE_BOTTOM);
const NOTE_LH = 38, NOTE_H = HAS_NOTE ? 54 : 0;       // строка-источник занимает место под подписью
const yTop = PAD_TOP + LABEL_H + NOTE_H;              // 190 без источника
const yBot = yTop + H + PAD_TOP + LABEL_H + NOTE_H;   // такой же блок между видео
const FH = 3 * yTop + 2 * H;                          // симметрия: низ = верхний блок
// боковые поля: при native — исходные 48px, при заданном ratio расширяются до пропорции
const SIDE = RATIO === 'native'
  ? 48
  : Math.max(48, Math.round((parseRatio(RATIO) * FH - W) / 2));
const FW = W + 2 * SIDE;                              // 2016 при native
function parseRatio(s) {
  const m = String(s).split(':').map(Number);
  if (m.length !== 2 || !m[0] || !m[1]) die(`--ratio: ожидается «W:H», например 4:5 (получено «${s}»)`);
  return m[0] / m[1];
}
const even = (n) => Math.round(n / 2) * 2;
// размер доставки: явный --deliver WxH, иначе от ratio (портрет → 1350 по высоте,
// ландшафт → 1920 по ширине; это потолки, которые лента отдаёт без пережатия)
let DELIV_W = 0, DELIV_H = 0;
if (DELIVER) {
  const m = DELIVER.toLowerCase().split('x').map(Number);
  if (m.length !== 2 || !m[0] || !m[1]) die(`--deliver: ожидается «WxH», например 1080x1350`);
  [DELIV_W, DELIV_H] = [even(m[0]), even(m[1])];
} else if (RATIO !== 'native') {
  const r = parseRatio(RATIO);
  if (r < 1)       { DELIV_H = 1350; DELIV_W = even(r * 1350); }
  else if (r === 1) { DELIV_W = DELIV_H = 1080; }
  else             { DELIV_W = 1920; DELIV_H = even(1920 / r); }
}
// пути выхода: имя финала настраиваемое, скролл-видео при кастомном имени тоже
// получают префикс — иначе альтернативный монтаж затирает файлы основного
const custom = OUT_NAME !== 'comparison-final';
// штатный монтаж уезжает в общую папку (при известном slug), кастомный остаётся
// рядом с сайтом — альтернативные ratio/имена в общей папке только мешают
const central = !custom && !!SLUG;
const FINAL = central ? path.join(VIDEOS_DIR, DATE_DIR, SLUG + '.mp4') : path.join(OUT, OUT_NAME + '.mp4');
const LINK = central ? path.join(OUT, 'comparison-final.mp4') : '';
if (central) fs.mkdirSync(path.dirname(FINAL), { recursive: true });
const SCROLL_DESIGN = path.join(OUT, custom ? OUT_NAME + '-design-scroll.mp4' : 'design-system-scroll.mp4');
const SCROLL_AI     = path.join(OUT, custom ? OUT_NAME + '-ai-scroll.mp4'     : 'ai-version-scroll.mp4');
const WORK = fs.mkdtempSync(path.join(os.tmpdir(), 'cmp_'));

// профиль скорости: после паузы сразу разгон → с --peak-from по --peak-to держим максимум
// PEAK → спад к TAIL на финише (TAIL=2 → вдвое быстрее старта, полной остановки нет).
// Разгон и спад — smoothstep, поэтому на стыках с полкой производная нулевая: рывков нет.
const E0_SEC = 0.25;                                 // мягкое трогание с места, сек
const smooth = (s) => s * s * (3 - 2 * s);
let P1 = 0.15, P2 = 0.8, E0 = 0.02, FMEAN = 1;       // считает tuneProfile()
const shape = (t) =>
  t < P1 ? 1 + (PEAK - 1) * smooth(t / P1)                        // разгон от стартовой к максимуму
: t > P2 ? TAIL + (PEAK - TAIL) * smooth((1 - t) / (1 - P2))      // спад к финишной
         : PEAK;                                                  // полка максимальной скорости
const fvel = (t) => shape(t) * (t < E0 ? smooth(t / E0) : 1);

// доля видео → доля пути скролла (в видео есть ещё пауза в начале и хвост в конце);
// FMEAN нужен, чтобы перевести средний AVG в реальный пик px/с
function tuneProfile(N) {
  const total = HOLD_START + N + HOLD_END;
  // момент видео → доля пути скролла (в ролике ещё пауза в начале и хвост в конце)
  const tau = (w) => ((w.sec !== undefined ? w.sec * FPS : w.frac * total) - HOLD_START) / N;
  P1 = Math.min(0.9, Math.max(0.03, tau(PEAK_FROM)));
  P2 = Math.min(1, Math.max(P1 + 0.02, tau(PEAK_TO)));
  E0 = Math.min(P1, E0_SEC * FPS / N);
  const M = 2000; let s = 0;
  for (let i = 0; i <= M; i++) s += fvel(i / M) * (i === 0 || i === M ? 0.5 : 1);
  FMEAN = s / M;
}
// N задаётся снаружи: при --sync on он общий для обоих сайтов, и профиль просто
// растягивается на нужную длительность — короткая страница едет медленнее.
function buildYs(maxScroll, N) {
  if (!maxScroll || N < 2) return [0];
  tuneProfile(N);
  const taus = Array.from({ length: N }, (_, i) => i / (N - 1));
  const cum = [0];
  for (let i = 1; i < N; i++) cum.push(cum[i - 1] + (fvel(taus[i - 1]) + fvel(taus[i])) / 2 * (taus[i] - taus[i - 1]));
  const tot = cum[N - 1];
  return cum.map((c) => Math.round(maxScroll * c / tot));
}
const geqRound = (r) => `if(gt(max(min(X\\,W-1-X)\\,min(Y\\,H-1-Y))\\,${r})\\,255\\,if(lte(hypot(${r}-min(X\\,W-1-X)\\,${r}-min(Y\\,H-1-Y))\\,${r})\\,255\\,0))`;

// ── золотая корона (SVG, high-res → прозрачный PNG) ──
const CROWN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 166" width="660" height="498">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFF7CE"/><stop offset=".32" stop-color="#FFDD6B"/>
      <stop offset=".66" stop-color="#F8BE3C"/><stop offset="1" stop-color="#E79A1B"/>
    </linearGradient>
    <linearGradient id="ball" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFF0B0"/><stop offset="1" stop-color="#E89A1C"/>
    </linearGradient>
    <filter id="sh" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="4" stdDeviation="4.5" flood-color="#3a2a00" flood-opacity="0.28"/>
    </filter>
  </defs>
  <g filter="url(#sh)">
    <path d="M22,116 L34,50 L53,90 L72,34 L91,88 L110,20 L129,88 L148,34 L167,90 L186,50 L198,116
             L198,140 Q198,150 188,150 L32,150 Q22,150 22,140 Z"
          fill="url(#g)" stroke="#D9860F" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M28,120 L110,26 L192,120" fill="none" stroke="#FFFFFF" stroke-opacity="0.28"
          stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
    <line x1="30" y1="126" x2="190" y2="126" stroke="#D9860F" stroke-opacity=".55" stroke-width="2.5"/>
    <circle cx="74" cy="136" r="5.5" fill="#E89A1C"/><circle cx="110" cy="136" r="5.5" fill="#E89A1C"/><circle cx="146" cy="136" r="5.5" fill="#E89A1C"/>
    <circle cx="34" cy="50" r="9" fill="url(#ball)" stroke="#D9860F" stroke-width="2"/>
    <circle cx="72" cy="34" r="9" fill="url(#ball)" stroke="#D9860F" stroke-width="2"/>
    <circle cx="110" cy="20" r="10" fill="url(#ball)" stroke="#D9860F" stroke-width="2"/>
    <circle cx="148" cy="34" r="9" fill="url(#ball)" stroke="#D9860F" stroke-width="2"/>
    <circle cx="186" cy="50" r="9" fill="url(#ball)" stroke="#D9860F" stroke-width="2"/>
  </g>
</svg>`;
// шрифтовой стек подписей: современный гротеск (Geist/Inter, если стоят), фолбэк — системный
// SF на macOS через -apple-system (визуально = SF Pro Display)
const LABEL_FONT = "'Geist','Inter',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif";
// нижняя подпись («After» — сайт с дизайн-системой) крупнее и в акцентном золотистом цвете —
// сразу направляет взгляд, куда смотреть. Подчёркивания больше нет ни у одной подписи —
// визуально не должно читаться как гиперссылка.
const labelHTML = (text, accent) => `<!doctype html><meta charset=utf-8>
<style>*{margin:0}html,body{background:transparent}
 .l{display:inline-block;font-family:${LABEL_FONT};font-weight:${accent ? 800 : 700};
    font-size:${accent ? 84 : 72}px;line-height:1.05;color:${accent ? '#8c4008' : '#2f2f36'};
    white-space:nowrap}</style>
<div class="l">${text}</div>`;
// строка-источник: мельче подписи, серым, без подчёркивания — не спорит с заголовком
const noteHTML = (text) => `<!doctype html><meta charset=utf-8>
<style>*{margin:0}html,body{background:transparent}
 .n{display:inline-block;font-family:${LABEL_FONT};font-weight:500;
    font-size:34px;line-height:1.2;color:#6b6b73;white-space:nowrap;letter-spacing:0.01em}</style>
<div class="n">${text}</div>`;

// ── загрузка страницы (общая для замера высоты и для записи) ──
async function load(page, url) {
  // domcontentloaded (не 'load'): не виснем на внешних <link> шрифтах без сети
  await page.goto('file://' + url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.addStyleTag({ content: `
    html,body{scroll-behavior:auto !important}
    *,*::before,*::after{animation-duration:0s !important;animation-delay:0s !important;transition:none !important}` });
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  await page.waitForTimeout(1500);
  await page.evaluate(() => { document.querySelectorAll('*').forEach((e) => {
    if (e.style && e.style.opacity !== '' && e.style.opacity !== '1') { e.style.opacity = '1'; e.style.transform = 'none'; } }); });
  return page.evaluate(() => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight);
}

// ── захват скролла одной страницы; N — сколько кадров отвести на скролл ──
async function capture(page, url, dir, N) {
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const maxScroll = await load(page, url);
  const ys = buildYs(maxScroll, N);
  let idx = 0;
  const shot = async () => { await page.screenshot({ path: path.join(dir, 'f' + String(idx).padStart(5, '0') + '.jpg'), type: 'jpeg', quality: 92 }); idx++; };
  await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(50);
  for (let i = 0; i < HOLD_START; i++) await shot();
  for (let i = 0; i < ys.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), ys[i]);
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    await shot();
  }
  await page.evaluate((y) => window.scrollTo(0, y), ys[ys.length - 1]); await page.waitForTimeout(50);
  for (let i = 0; i < HOLD_END; i++) await shot();
  return idx;
}
function padFrames(dir, from, to) {
  if (to <= from) return;
  const last = path.join(dir, 'f' + String(from - 1).padStart(5, '0') + '.jpg');
  for (let i = from; i < to; i++) fs.copyFileSync(last, path.join(dir, 'f' + String(i).padStart(5, '0') + '.jpg'));
}
function encode(dir, out) {
  ff(['-y', '-framerate', String(FPS), '-i', path.join(dir, 'f%05d.jpg'),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-r', String(FPS), '-movflags', '+faststart', out]);
}

(async () => {
  console.log('ffmpeg:', FFMPEG);
  console.log('work:', WORK);
  const browser = await chromium.launch({ headless: true });

  // 1) скролл-видео (1920×1080)
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  // сперва замеряем обе высоты: при --sync on скролл обоих идёт одинаковое число кадров,
  // и короткий сайт автоматически едет медленнее (а не замирает фриз-кадром в конце)
  console.log('▶ замер высот…');
  const msD = await load(page, DESIGN), msA = await load(page, AI);
  const nat = (ms) => Math.max(1, Math.round(ms / AVG * FPS));
  // пол по длительности: сколько кадров должно уйти на скролл, чтобы весь ролик был ≥ MIN_SEC
  const nMin = Math.max(1, Math.round(MIN_SEC * FPS) - HOLD_START - HOLD_END);
  const nRawD = nat(msD);
  const nSD = Math.max(nRawD, nMin);  // темп задаёт дизайн-система: её высота / --avg
  const nSA = SYNC ? nSD : Math.max(nat(msA), nMin); // ИИ-версия подстраивается под эту длительность
  const floored = nSD > nRawD;
  const spd = (ms, n) => Math.round(ms / (n / FPS));
  tuneProfile(nSD);
  const at0 = (v) => Math.round(v / FMEAN), peak = (v) => Math.round(v * PEAK / FMEAN),
        end = (v) => Math.round(v * TAIL / FMEAN);
  const at = (t) => ((HOLD_START + t * nSD) / FPS).toFixed(1);
  console.log(`  скролл ${(nSD / FPS).toFixed(1)}с${SYNC ? ' (синхронно)' : ''} + пауза ${HOLD_SEC}с на первом экране` +
              (floored ? `  [растянут до минимума ${MIN_SEC}с: по --avg вышло бы ${((nRawD + HOLD_START + HOLD_END) / FPS).toFixed(1)}с]` : ''));
  console.log(`  разгон с ${(HOLD_START / FPS).toFixed(1)}с → максимум ${at(P1)}—${at(P2)}с` +
              (P2 >= 1 ? ' (до конца, без замедления)' : ` → финиш на ${TAIL}× от старта`));
  for (const [tag, ms, n] of [['design', msD, nSD], ['ai', msA, nSA]]) {
    const v = spd(ms, n);
    console.log(`  ${tag} ${ms}px → ${v} px/с средняя (старт ${at0(v)} → максимум ${peak(v)}` +
                (P2 >= 1 ? ' до конца)' : ` → финиш ${end(v)})`));
  }
  console.log('▶ запись DESIGN…'); const nD = await capture(page, DESIGN, WORK + '/fd', nSD);
  console.log('▶ запись AI…');     const nA = await capture(page, AI, WORK + '/fa', nSA);
  const maxN = Math.max(nD, nA);
  padFrames(WORK + '/fd', nD, maxN); padFrames(WORK + '/fa', nA, maxN);
  console.log(`  кадров=${maxN} (${(maxN / FPS).toFixed(1)}с)  design=${nD} ai=${nA}`);
  encode(WORK + '/fd', SCROLL_DESIGN);
  encode(WORK + '/fa', SCROLL_AI);
  await ctx.close();

  // 2) корона + подписи (прозрачные PNG)
  const ctx2 = await browser.newContext({ deviceScaleFactor: 3 });
  const p2 = await ctx2.newPage();
  fs.writeFileSync(WORK + '/crown.html', `<!doctype html><meta charset=utf-8><style>*{margin:0}html,body{background:transparent}</style>${CROWN_SVG}`);
  await p2.goto('file://' + WORK + '/crown.html', { waitUntil: 'load' });
  await (await p2.$('svg')).screenshot({ path: WORK + '/crown.png', omitBackground: true });
  for (const [name, txt, accent] of [['label1', LABEL_TOP, false], ['label2', LABEL_BOTTOM, true]]) {
    fs.writeFileSync(WORK + `/${name}.html`, labelHTML(txt, accent));
    await p2.goto('file://' + WORK + `/${name}.html`, { waitUntil: 'load' });
    await (await p2.$('.l')).screenshot({ path: WORK + `/${name}.png`, omitBackground: true });
  }
  for (const [name, txt] of [['note1', NOTE_TOP], ['note2', NOTE_BOTTOM]]) {
    if (!txt) continue;
    fs.writeFileSync(WORK + `/${name}.html`, noteHTML(txt));
    await p2.goto('file://' + WORK + `/${name}.html`, { waitUntil: 'load' });
    await (await p2.$('.n')).screenshot({ path: WORK + `/${name}.png`, omitBackground: true });
  }
  await browser.close();
  console.log('  корона+подписи готовы');

  // 3) маска скругления + рамка-плашка
  ff(['-y', '-f', 'lavfi', '-i', `color=c=black:s=${W}x${H}`, '-vf', `geq=lum='${geqRound(R)}',format=gray`, '-frames:v', '1', WORK + '/mask.png']);
  ff(['-y', '-f', 'lavfi', '-i', `color=c=0xd8d6cc:s=${W + 2 * B}x${H + 2 * B}`, '-vf', `format=rgba,geq=r='r(X\\,Y)':g='g(X\\,Y)':b='b(X\\,Y)':a='${geqRound(R + B)}'`, '-frames:v', '1', WORK + '/plate.png']);

  // 4) фон: тёплый жёлтый + прямая серая клетка + подписи + рамки
  const LH_TOP = 104, LH_BOTTOM = 122;                  // «After» (низ) крупнее — акцент на результат
  const labY = (y, lh) => y - NOTE_H - (NOTE_H ? 18 : 22) - lh;  // низ подписи держим на одной линии
  const noteY = (y) => y - NOTE_H + 4;
  const bgIn = ['-f', 'lavfi', '-i', `color=c=0xf7f3e3:s=${FW}x${FH}`,
    '-i', WORK + '/label1.png', '-i', WORK + '/label2.png', '-i', WORK + '/plate.png'];
  let bake =
    `[0:v]drawgrid=w=78:h=78:t=2:c=0xb9b7ad@0.85[g];` +
    `[1:v]scale=-1:${LH_TOP}[l1];[2:v]scale=-1:${LH_BOTTOM}[l2];[3:v]split=2[p1][p2];` +
    `[g][l1]overlay=(W-w)/2:${labY(yTop, LH_TOP)}[a];` +
    `[a][l2]overlay=(W-w)/2:${labY(yBot, LH_BOTTOM)}[b]`;
  let idx = 4, tail = '[b]';
  for (const [txt, y] of [[NOTE_TOP, yTop], [NOTE_BOTTOM, yBot]]) {
    if (!txt) continue;
    bgIn.push('-i', WORK + (y === yTop ? '/note1.png' : '/note2.png'));
    bake += `;[${idx}:v]scale=-1:${NOTE_LH}[n${idx}];${tail}[n${idx}]overlay=(W-w)/2:${noteY(y)}[nn${idx}]`;
    tail = `[nn${idx}]`; idx++;
  }
  bake += `;${tail}[p1]overlay=${SIDE - B}:${yTop - B}[c];[c][p2]overlay=${SIDE - B}:${yBot - B}[o]`;
  ff(['-y', ...bgIn, '-filter_complex', bake, '-map', '[o]', '-frames:v', '1', WORK + '/bg.png']);

  // 5) финал: скруглённые видео на фон + корона «на уголок»
  const CW = 150, ANG = '-18*PI/180';                 // ширина короны и наклон влево
  const crownY = (CROWN_ON === 'top' ? yTop : yBot) - 108;
  const crownX = SIDE - 42;                           // всегда «на уголок» плашки
  let fc =
    `[3:v]format=gray,split=2[m1][m2];` +
    `[1:v][m1]alphamerge[a];[2:v][m2]alphamerge[d];` +
    `[0:v][a]overlay=${SIDE}:${yTop}[t];[t][d]overlay=${SIDE}:${yBot}`;
  const args = ['-y', '-framerate', String(FPS), '-loop', '1', '-i', WORK + '/bg.png',
    '-i', SCROLL_AI, '-i', SCROLL_DESIGN,
    '-framerate', String(FPS), '-loop', '1', '-i', WORK + '/mask.png'];
  if (CROWN_ON === 'none') {
    fc += `[o]`;
  } else {
    args.push('-framerate', String(FPS), '-loop', '1', '-i', WORK + '/crown.png');
    fc += `[t2];[4:v]scale=${CW}:-1,rotate=${ANG}:fillcolor=none:ow=rotw(${ANG}):oh=roth(${ANG})[cr];` +
          `[t2][cr]overlay=${crownX}:${crownY}[o]`;
  }
  // доставка: при заданном ratio ужимаем до размера, который лента принимает без второго транскода
  let outW = FW, outH = FH;
  if (DELIV_W) {
    fc += `;[o]scale=-2:${DELIV_H}:flags=lanczos,pad=${DELIV_W}:${DELIV_H}:(ow-iw)/2:0:0xf7f3e3[out]`;
    outW = DELIV_W; outH = DELIV_H;
  }
  args.push('-filter_complex', fc, '-map', DELIV_W ? '[out]' : '[o]', '-frames:v', String(maxN),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-preset', 'veryfast', '-r', String(FPS), '-movflags', '+faststart',
    FINAL);
  ff(args);

  fs.rmSync(WORK, { recursive: true, force: true });

  // симлинк в папке сайта: пересоздаём каждый раз — на месте мог остаться обычный файл
  // от старой схемы или битая ссылка на переименованный slug
  if (LINK) {
    const rel = path.relative(path.dirname(LINK), FINAL);
    if (fs.existsSync(LINK) || fs.lstatSync(LINK, { throwIfNoEntry: false })) fs.rmSync(LINK, { force: true });
    try { fs.symlinkSync(rel, LINK); }
    catch (e) {
      if (!['EPERM', 'EACCES', 'ENOTSUP'].includes(e.code)) throw e;
      fs.copyFileSync(FINAL, LINK); // Windows without symlink privileges
    }
  }

  console.log(`✓ ГОТОВО  ${outW}x${outH}${DELIV_W ? `  (композиция ${FW}x${FH})` : ''}  →  ${FINAL}`);
  if (LINK) console.log(`  ↳ симлинк ${LINK}`);
  console.log(`  + ${SCROLL_AI} , ${SCROLL_DESIGN}`);
})().catch((e) => { console.error(e); process.exit(1); });
