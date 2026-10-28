import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import path from 'node:path';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const output = process.env.REFLOW_OUTPUT || '.artifacts/design-review/reflow';
await mkdir(output, { recursive: true });
const root = process.cwd();
const server = createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const filename = path.resolve('.' + pathname);
    if (!filename.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    const bytes = await readFile(filename);
    const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };
    response.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' }).end(bytes);
  } catch { response.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const routes = [];
async function walk(directory = '') {
  for (const entry of await readdir(directory || '.', { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['node_modules', 'content'].includes(entry.name)) continue;
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(filename);
    else if (entry.name === 'index.html') routes.push('/' + (directory ? directory + '/' : ''));
  }
}
await walk();
const selected = process.env.REFLOW_ROUTES ? process.env.REFLOW_ROUTES.split(',') : routes;
const captured = new Set(['/', '/departements/', '/musees/', '/musee/louvre/', '/musee/musee-instruments-vent-la-couture-boussey/', '/musee/musee-carnavalet/', '/regions/normandie/']);
const rows = [];
let browser;
try {
  browser = await chromium.launch({ headless: true, ...(process.env.DISCOVERY_CHROMIUM_PATH ? { executablePath: process.env.DISCOVERY_CHROMIUM_PATH, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] } : {}) });
  for (const fonts of ['intended', 'fallback']) {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    if (fonts === 'fallback') await context.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => route.abort());
    else if (process.env.DISCOVERY_FONT_CSS) {
      const css = await readFile(process.env.DISCOVERY_FONT_CSS, 'utf8');
      await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ contentType: 'text/css', body: css }));
    }
    const page = await context.newPage();
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of selected) {
        const errors = [];
        const onError = error => errors.push(error.message);
        page.on('pageerror', onError);
        const response = await page.goto(origin + route, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.evaluate(() => ({
          width: innerWidth,
          height: document.documentElement.scrollHeight,
          visibleMuseumCards: [...document.querySelectorAll('[data-museum]')].filter(card => card.getBoundingClientRect().width > 0).length,
          scrollWidth: document.documentElement.scrollWidth,
          bodyOverflow: getComputedStyle(document.body).overflowX,
          rootOverflow: getComputedStyle(document.documentElement).overflowX,
          loadedFonts: [...document.fonts].filter(font => font.status === 'loaded').map(font => font.family),
          outliers: [...document.querySelectorAll('main *, header *, footer *')].filter(element => {
            const rect = element.getBoundingClientRect();
            return rect.width && (rect.right > innerWidth + 1 || rect.left < -1);
          }).slice(0, 8).map(element => ({ tag: element.tagName, class: element.className, text: element.textContent.trim().slice(0, 90) }))
        }));
        rows.push({ route, fonts, width, status: response.status(), errors, ...metrics });
        if (captured.has(route) && (width === 320 || width === 1440) && fonts === 'intended') {
          const name = route.replaceAll('/', '-').replace(/^-|-$/g, '') || 'home';
          await page.screenshot({ path: `${output}/${width}-${name}.png`, animations: 'disabled' });
          if (route === '/musee/louvre/' && width === 320) {
            await page.locator('.museum-overview, .museum-layout').first().scrollIntoViewIfNeeded();
            await page.screenshot({ path: `${output}/${width}-${name}-facts.png`, animations: 'disabled' });
          }
        }
        page.removeListener('pageerror', onError);
      }
      console.log(`${fonts} ${width}px: ${selected.length} pages checked`);
    }
    await context.close();
  }
  const issues = rows.filter(row => row.status !== 200 || row.scrollWidth > row.width + 1 || row.outliers.length || row.errors.length || ['hidden', 'clip'].includes(row.bodyOverflow) || ['hidden', 'clip'].includes(row.rootOverflow));
  await writeFile(`${output}/report.json`, JSON.stringify({ pages: selected.length, observations: rows.length, issues, rows }, null, 2));
  console.log(JSON.stringify({ pages: selected.length, observations: rows.length, issues: issues.length, sample: issues.slice(0, 8) }, null, 2));
  if (!process.env.REFLOW_BASELINE) assert.equal(issues.length, 0, 'Every page must reflow without clipping or horizontal overflow');
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
