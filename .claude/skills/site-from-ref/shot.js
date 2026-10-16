#!/usr/bin/env node
/**
 * Визуальный QA сайта из generated-sites/<slug>.
 *
 *   node .claude/skills/site-from-ref/shot.js <slug> [outDir]
 *
 * Снимает десктоп (1440×900) по всей высоте страницы и RU-версию, печатает горизонтальное
 * переполнение и ошибки страницы. Каждый PNG нужно ОТКРЫТЬ через Read — скрипт ничего
 * не проверяет за тебя, он только даёт кадры.
 *
 * Мобильных кадров нет намеренно: сайты галереи делаются и проверяются только под десктоп
 * (решение пользователя — экономия времени и токенов).
 *
 * Запускать с dangerouslyDisableSandbox: true — под песочницей Bash chromium не стартует.
 * goto идёт с waitUntil:'commit': на file:// событие domcontentloaded ждёт CSS Google Fonts
 * и висит до таймаута.
 */
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '../../..');           // …/desigh-parser
const { chromium } = require(path.join(ROOT, 'node_modules/playwright'));

const slug = process.argv[2];
if (!slug) {
  console.error('usage: node shot.js <slug> [outDir]');
  process.exit(1);
}
const file = path.join(ROOT, 'generated-sites', slug, 'index.html');
if (!fs.existsSync(file)) {
  console.error('не найден ' + file);
  process.exit(1);
}
const out = process.argv[3] || path.join(require('os').tmpdir(), 'shot-' + slug);
fs.mkdirSync(out, { recursive: true });
const url = require('node:url').pathToFileURL(file).href;

const FONT_WAIT = 6000;   // шрифты Google + первый layout

/** page.screenshot перед каждым кадром ждёт document.fonts.ready. На страницах с Google
 *  Fonts статус нередко навсегда остаётся 'loading' (часть subset'ов не догружается), хотя
 *  нужные глифы уже отрисованы, — и кадр уходит в таймаут. Фолбэк: снимок через CDP,
 *  он шрифты не ждёт. */
async function snap(page, file) {
  try {
    await page.screenshot({ path: file, timeout: 8000 });
    return;
  } catch (e) { /* ниже — CDP */ }
  try {
    const client = await page.context().newCDPSession(page);
    const { data } = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(file, Buffer.from(data, 'base64'));
    await client.detach();
  } catch (e) {
    console.log('кадр не снят (' + path.basename(file) + '): ' + e.message.split('\n')[0]);
  }
}

/** Дождаться шрифтов до начала съёмки: иначе первые кадры уходят в таймаут,
 *  пока Playwright ждёт document.fonts.ready перед каждым снимком. */
async function waitFonts(page) {
  await page.evaluate(() => Promise.race([
    document.fonts.ready,
    new Promise(r => setTimeout(r, 10000)),
  ])).catch(() => {});
}

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  // ——— десктоп: кадры по всей высоте ———
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  p.on('pageerror', e => errors.push('desktop: ' + e.message));
  await p.goto(url, { waitUntil: 'commit' });
  await p.waitForTimeout(FONT_WAIT);
  await waitFonts(p);

  const height = await p.evaluate(() => document.body.scrollHeight);
  const step = 1000;
  const shots = [];
  for (let y = 0; y < height - 200; y += step) shots.push(Math.min(y, height - 900));
  for (let i = 0; i < shots.length; i++) {
    await p.evaluate(v => window.scrollTo(0, v), shots[i]);
    await p.waitForTimeout(500);
    await snap(p, `${out}/d${String(i).padStart(2, '0')}.png`);
  }
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

  // ——— RU: хиро + одна секция ———
  await p.evaluate(() => window.scrollTo(0, 0));
  // Scope data-lang to buttons: html itself also carries the current language.
  const hasRu = await p.$('.lang button[data-set="ru"], [data-set="ru"], [data-l="ru"], [data-set-lang="ru"], button[data-lang="ru"]');
  if (hasRu) {
    await hasRu.click();
    await p.waitForTimeout(600);
    await snap(p, `${out}/ru0.png`);
    await p.evaluate(() => window.scrollTo(0, Math.min(2000, document.body.scrollHeight - 900)));
    await p.waitForTimeout(600);
    await snap(p, `${out}/ru1.png`);
  }

  await browser.close();

  console.log('кадры:            ' + out);
  console.log('высота страницы:  ' + height + 'px, кадров ' + shots.length);
  console.log('overflow-x:       ' + overflow + '   (должно быть 0)');
  console.log('RU-переключатель: ' + (hasRu ? 'есть' : 'НЕ НАЙДЕН'));
  console.log('pageerror:        ' + (errors.length ? errors.join(' | ') : 'нет'));
  console.log('\nтеперь открой каждый PNG через Read и посмотри на коллизии (чек-лист в SKILL.md).');
})();
