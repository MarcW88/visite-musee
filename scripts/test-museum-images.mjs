import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {readFile, mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {chromium} from '@playwright/test';

const media = JSON.parse(await readFile('content/data/museum-images.json', 'utf8'));
const output = process.env.IMAGES_OUTPUT || '.artifacts/design-review/museum-images';
await mkdir(output, {recursive:true});
const server = createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const filename = path.resolve('.' + pathname);
    if (!filename.startsWith(process.cwd() + path.sep)) { res.writeHead(403).end(); return; }
    const bytes = await readFile(filename);
    res.setHeader('Content-Type', {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg'}[path.extname(filename)] || 'application/octet-stream');
    res.end(bytes);
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browserPath = process.env.DISCOVERY_CHROMIUM_PATH;
let browser;
const observations = [];
const captureRoutes = (process.env.IMAGES_CAPTURE_ROUTES || '/musee/christian-dior-granville/,/musee/musee-ceramique-rouen/,/musee/musee-le-secq-des-tournelles/,/regions/normandie/').split(',');
const routes = [...Object.keys(media).map(slug => `/musee/${slug}/`), '/', '/musees/', '/regions/normandie/', '/themes/musees-beaux-arts/', '/musees/?q=Dior', '/musees/?q=zzzzzz'];
try {
  browser = await chromium.launch({headless:true, ...(browserPath ? {executablePath:browserPath,args:['--no-sandbox','--disable-dev-shm-usage']} : {})});
  for (const width of [320,390,768,1440]) {
    const context = await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
    if (process.env.DISCOVERY_FONT_CSS) {
      const css = await readFile(process.env.DISCOVERY_FONT_CSS, 'utf8');
      await context.route('https://fonts.googleapis.com/**', route => route.fulfill({contentType:'text/css',body:css}));
    }
    const page = await context.newPage();
    for (const route of routes) {
      const response = await page.goto(`http://127.0.0.1:${server.address().port}${route}`);
      assert.ok(response.ok(), route);
      await page.evaluate(() => document.fonts.ready);
      let photos = 0;
      for (const img of await page.locator('.museum-photo img:visible').all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate(image => image.decode());
        const info = await img.evaluate(image => ({width:image.naturalWidth,height:image.naturalHeight,alt:image.alt,src:image.currentSrc,links:[...image.closest('figure').querySelectorAll('figcaption a')].map(a=>a.href)}));
        assert.ok(info.width > 0 && info.height > 0 && info.alt, `${route}: image loaded and described`);
        assert.ok(info.links.some(url => (url.includes('commons.wikimedia.org/wiki/File:') || url.includes('www.wikimanche.fr/Fichier:'))), `${route}: documentary source`);
        assert.ok(info.links.some(url => url.includes('creativecommons.org/') || (url.includes('commons.wikimedia.org/wiki/File:') && url.endsWith('#Licensing'))), `${route}: license`);
        photos++;
      }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${width}px ${route}: overflow`);
      if (route.startsWith('/musee/')) assert.equal(await page.locator('.museum-summary > .museum-photo img').count(), 1, route + ': one main museum photo');
      if (route.includes('q=zzzzzz')) assert.equal(photos, 0, 'No orphaned image/credit after filtering');
      if (route.includes('q=Dior')) assert.equal(photos, 1, 'Filtered photo remains visible');
      observations.push({width,route,photos});
      if ([390,1440].includes(width) && captureRoutes.includes(route)) {
        const photo = page.locator('.museum-photo img:visible').first();
        await photo.scrollIntoViewIfNeeded();
        await page.screenshot({path:`${output}/${width}-${route.replaceAll('/','-')}.png`,animations:'disabled'});
      }
      if ([390,1440].includes(width) && route.includes('q=Dior')) {
        await page.locator('.museum-photo-card:visible').first().screenshot({path:`${output}/${width}-dior-card.png`});
      }
    }
    await context.close();
  }
  await writeFile(`${output}/report.json`, JSON.stringify({museums:Object.keys(media).length,observations},null,2));
  console.log(`${observations.length} rendered observations passed across ${Object.keys(media).length} illustrated museums; images, credits, filtered visibility and reflow verified.`);
} finally {
  await browser?.close();
  server.close();
}
