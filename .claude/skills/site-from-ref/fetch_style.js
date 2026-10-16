#!/usr/bin/env node
/**
 * Выгрузка ВСЕХ четырёх вкладок страницы стиля refero.
 *
 *   node .claude/skills/site-from-ref/fetch_style.js <id> [outDir]
 *
 * Кладёт в outDir (по умолчанию — временная папка):
 *   design.md    — вкладка DESIGN.md (Extended) ДОСЛОВНО: north star, роли токенов,
 *                  компоненты, Do's и Don'ts. Это то, что WebFetch отдаёт лишь пересказом.
 *   tokens.css   — вкладка CSS Variables: готовый :root {…} для вставки в сайт
 *   tailwind.css — вкладка Tailwind v4: тот же набор в виде @theme {…}
 *   tokens.json  — вкладка Design Tokens: $value/$type/$description по каждому токену
 *
 * Первые три лежат в HTML (SSR) и берутся обычным запросом. Четвёртая рендерится
 * клиентски, поэтому за ней открывается Chromium и кликается вкладка.
 *
 * Запускать с dangerouslyDisableSandbox: true.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '../../..');
const { chromium } = require(path.join(ROOT, 'node_modules/playwright'));

const id = process.argv[2];
if (!id) {
  console.error('usage: node fetch_style.js <style-id> [outDir]');
  process.exit(1);
}
const out = process.argv[3] || path.join(os.tmpdir(), 'style-' + id.slice(0, 8));
fs.mkdirSync(out, { recursive: true });
const url = 'https://styles.refero.design/style/' + id;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const unescapeHtml = s => s
  .replace(/\\n/g, '\n')
  .replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/');

(async () => {
  // ——— 1–3: DESIGN.md, CSS Variables, Tailwind v4 — прямо из HTML ———
  const html = await (await fetch(url, { headers: { 'User-Agent': UA } })).text();

  const mdStart = html.indexOf('# ');
  const mdEnd = html.indexOf('```css', mdStart);
  if (mdStart !== -1 && mdEnd > mdStart) {
    fs.writeFileSync(path.join(out, 'design.md'), unescapeHtml(html.slice(mdStart, mdEnd)));
  }

  const cssBlocks = [...html.matchAll(/```css(.*?)```/gs)].map(m => unescapeHtml(m[1]).trim());
  const root = cssBlocks.find(b => b.startsWith(':root'));
  const theme = cssBlocks.find(b => b.startsWith('@theme'));
  if (root) fs.writeFileSync(path.join(out, 'tokens.css'), root + '\n');
  if (theme) fs.writeFileSync(path.join(out, 'tailwind.css'), theme + '\n');

  // ——— 4: Design Tokens — только через рендер ———
  let tokensJson = null;
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(3500);
    await page.evaluate(() => {
      const btns = [...document.querySelectorAll('button')].filter(b => b.textContent.trim() === 'Design Tokens');
      if (btns.length) btns[btns.length - 1].click();
    });
    await page.waitForTimeout(2000);
    tokensJson = await page.evaluate(() => {
      const pre = [...document.querySelectorAll('pre')].map(x => x.innerText).find(t => t.trim().startsWith('{'));
      return pre || null;
    });
    if (tokensJson) fs.writeFileSync(path.join(out, 'tokens.json'), tokensJson);
    await browser.close();
  } catch (e) {
    console.log('Design Tokens не сняты: ' + e.message.split('\n')[0]);
  }

  const size = f => { try { return fs.statSync(path.join(out, f)).size + ' Б'; } catch { return '—'; } };
  console.log('папка:        ' + out);
  console.log('design.md:    ' + size('design.md') + '   (north star, роли, компоненты, Do/Don\'t — читать целиком)');
  console.log('tokens.css:   ' + size('tokens.css') + '   (:root — вставить в сайт дословно)');
  console.log('tailwind.css: ' + size('tailwind.css'));
  console.log('tokens.json:  ' + size('tokens.json') + '   ($description = роль каждого токена)');
})();
