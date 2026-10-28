import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const output = '.artifacts/design-review/discovery';
await mkdir(output, { recursive: true });
const server = process.env.DISCOVERY_BASE_URL ? null : createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.endsWith('/')) pathname += 'index.html';
    const filename = path.resolve('.' + pathname);
    if (!filename.startsWith(process.cwd() + path.sep)) { response.writeHead(403).end(); return; }
    const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml' };
    const bytes = await readFile(filename);
    response.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' }).end(bytes);
  } catch (error) { console.error('Preview server:', error.message); response.writeHead(404).end(); }
});
if (server) await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = process.env.DISCOVERY_BASE_URL || `http://127.0.0.1:${server.address().port}`;
let browser;
const checks = [];
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    try { const response = await fetch(origin); if (response.ok) { ready = true; break; } if (i===0) console.error('Preview status:', response.status, origin, process.cwd()); } catch (error) { if(i===0)console.error('Preview connection:', error.message); }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  assert.ok(ready, 'The preview server must respond');
  browser = await chromium.launch({ headless: true, ...(process.env.DISCOVERY_CHROMIUM_PATH ? { executablePath: process.env.DISCOVERY_CHROMIUM_PATH, args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'] } : {}) });
  for (const width of [320, 390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    if (process.env.DISCOVERY_FONT_CSS) {
      const css = await readFile(process.env.DISCOVERY_FONT_CSS, 'utf8');
      await context.route('https://fonts.googleapis.com/**', route => route.fulfill({ contentType: 'text/css', body: css }));
    }
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const visit = async route => {
      await page.goto(origin + route);
      await page.evaluate(() => document.fonts.ready);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `No horizontal overflow at ${width}px on ${route}`);
    };
    const visibleIds = async () => {
      await page.locator('[data-catalogue-search][data-ready="true"]').waitFor({ state: 'attached' });
      return page.locator('[data-museum-group] [data-museum]:visible').evaluateAll(nodes => nodes.map(node => node.dataset.museum));
    };
    const screenshot = name => page.screenshot({ path: `${output}/${width}-${name}.png`, animations: 'disabled' });

    await visit('/');
    await screenshot('home');
    await page.getByRole('searchbox').fill('Louvre');
    await page.getByRole('searchbox').press('Enter');
    await page.waitForURL('**/musees/?q=Louvre');
    assert.equal(await page.getByRole('searchbox').inputValue(), 'Louvre');
    assert.ok((await visibleIds()).includes('louvre'));
    assert.ok((await visibleIds()).length < 126);
    await page.evaluate(() => document.fonts.ready);
    await screenshot('louvre-results');

    await visit('/musees/?q=paris+louvre&theme=musees-beaux-arts');
    assert.deepEqual(await visibleIds(), ['louvre'], 'Text and theme filters must intersect');
    await visit('/musees/?q=archeologie');
    assert.ok((await visibleIds()).includes('musee-archeologie-nationale'), 'Search must ignore accents');
    await visit('/musees/?q=RoUeN');
    assert.ok((await visibleIds()).includes('musee-beaux-arts-rouen'), 'Search must ignore letter case');
    assert.ok(await page.locator('[data-browse-only]').first().isHidden());

    await visit('/musees/?q=aucunmuseexyz');
    assert.equal((await visibleIds()).length, 0);
    assert.ok(await page.locator('[data-search-empty]').isVisible());
    await screenshot('no-results');
    await page.getByRole('link', { name: 'Effacer les critères', exact: true }).click();
    assert.equal((await visibleIds()).length, 24);
    assert.match(await page.locator('[data-search-status]').innerText(), /126 fiches/);
    assert.ok(await page.locator('[data-search-empty]').isHidden());
    await visit('/musees/?theme=inconnu');
    assert.equal((await visibleIds()).length, 0, 'An unknown theme must not show unrelated results');
    await visit('/musees/?q=%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E');
    assert.equal(await page.locator('[data-search-status] img').count(), 0, 'Queries must remain text');

    await visit('/');
    await page.getByRole('radio', { name: 'Histoire et mémoires', exact: true }).check();
    await page.locator('.planner').scrollIntoViewIfNeeded();
    await screenshot('inspiration');
    await page.getByRole('button', { name: 'DÉCOUVRIR LES MUSÉES →', exact: true }).click();
    await page.waitForURL('**/musees/?theme=musees-histoire');
    assert.ok((await visibleIds()).length > 0);
    assert.ok(await page.locator('[data-museum-group] [data-museum]:visible').evaluateAll(nodes => nodes.every(node => node.dataset.themes.split(' ').includes('musees-histoire'))));
    assert.equal(await page.getByLabel('Collection', { exact: true }).inputValue(), 'musees-histoire');
    await page.evaluate(() => document.fonts.ready);
    await screenshot('theme-results');
    // Pagination and geographical filters must preserve all source entries.
    await visit('/musees/');
    const firstPage = await visibleIds();
    assert.equal(firstPage.length, 24);
    await page.getByRole('link', { name: 'Page 2', exact: true }).click();
    await page.waitForURL(url => url.searchParams.get('page') === '2');
    const secondPage = await visibleIds();
    assert.equal(secondPage.length, 24);
    assert.ok(secondPage.every(id => !firstPage.includes(id)));
    await page.reload();
    assert.deepEqual(await visibleIds(), secondPage, 'Pagination must survive reload');
    await page.getByRole('link', { name: 'Tout afficher', exact: true }).click();
    assert.equal((await visibleIds()).length, 126);
    await visit('/musees/?page=999');
    assert.equal((await visibleIds()).length, 6);
    assert.equal(await page.getByRole('link', { name: 'Page 6', exact: true }).getAttribute('aria-current'), 'page');
    await page.getByLabel('Région', { exact: true }).selectOption('normandie');
    await page.getByRole('button', { name: 'RECHERCHER →', exact: true }).click();
    await page.waitForLoadState();
    await page.locator('[data-catalogue-search][data-ready="true"]').waitFor({ state: 'attached' });
    assert.ok(await page.locator('[data-museum]:visible').evaluateAll(nodes => nodes.every(node => node.dataset.region === 'normandie')));
    await page.locator('#catalogue-results').evaluate(node => node.scrollIntoView({ block: 'start' }));
    await screenshot('catalogue-list');
    await visit('/regions/normandie/');
    assert.equal((await visibleIds()).length, 24);
    assert.equal(await page.locator('[data-museum]').count(), 97);
    assert.match(await page.locator('[data-search-status]').innerText(), /97 fiches/);
    await page.locator('#catalogue-results').evaluate(node => node.scrollIntoView({ block: 'start' }));
    await screenshot('normandy-list');
    await page.getByLabel('Département', { exact: true }).selectOption('calvados');
    await page.getByRole('button', { name: 'RECHERCHER →', exact: true }).click();
    await page.waitForLoadState();
    await page.locator('[data-catalogue-search][data-ready="true"]').waitFor({ state: 'attached' });
    assert.ok((await visibleIds()).length > 0);
    assert.ok(await page.locator('[data-museum]:visible').evaluateAll(nodes => nodes.every(node => node.dataset.departement === 'calvados')));
    await visit('/regions/normandie/?q=Dior');
    assert.deepEqual(await visibleIds(), ['christian-dior-granville']);
    await visit('/regions/normandie/?all=1');
    assert.equal((await visibleIds()).length, 97);
    await visit('/regions/normandie/#batterie-azeville');
    assert.ok(await page.locator('#batterie-azeville [data-museum]').isVisible());
    await page.getByRole('link', { name: 'Art et impressionnisme', exact: true }).click();
    await page.waitForURL(url => url.hash === '#art' && url.searchParams.get('page') === '1');
    assert.ok(await page.locator('#art [data-museum]').isVisible());
    checks.push({ width, catalogue: 'PASS', tests: ['pagination', 'reload', 'show-all', 'page-clamp', 'region-filter', 'department-filter', 'all-97-normandy-links', 'regional-query', 'old-anchor', 'hash-change'] });
    // Pending destinations must expose their state and lead to real content.
    for (const route of ['/visiter/musees-en-famille/', '/guides/comment-preparer-visite-musee/', '/expositions/paris/', '/inspiration/week-end-culturel/']) {
      await visit(route);
      assert.ok(await page.locator('[data-page-state="pending"]').isVisible());
      assert.equal(await page.locator('.stats, .map-placeholder').count(), 0);
      const catalogue = page.getByRole('link', { name: 'EXPLORER LE CATALOGUE →', exact: true });
      assert.equal(new URL(await catalogue.getAttribute('href'), page.url()).pathname, '/musees/');
      if (route === '/visiter/musees-en-famille/') await screenshot('pending-family');
    }
    await visit('/musees/evreux/');
    assert.equal(await page.locator('h1').innerText(), 'Musées : Évreux');
    await visit('/themes/musees-beaux-arts/');
    assert.ok(await page.getByRole('heading', { name: 'Musée du Louvre', exact: true }).isVisible());
    await visit('/guides/');
    assert.ok(await page.locator('[data-page-state="pending"]').isVisible());
    await page.locator('.pending-topics summary').click();
    assert.ok(await page.getByRole('link', { name: 'Comment préparer une visite au musée', exact: true }).isVisible());
    await visit('/');
    assert.equal(await page.getByRole('heading', { name: 'À voir en ce moment', exact: true }).count(), 0);
    assert.ok(await page.getByRole('heading', { name: 'Des musées à découvrir', exact: true }).isVisible());
    const quickLinks = await page.locator('.hero .quick a').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
    assert.ok(quickLinks.every(href => !href.startsWith('visiter/') && !href.startsWith('expositions/')));
    checks.push({ width, pendingPages: 'PASS', tests: ['pending-state', 'no-empty-statistics', 'working-alternatives', 'honest-homepage', 'forthcoming-topics'] });
    await visit('/');
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.skip-link').evaluate(node => node === document.activeElement), true);
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#main-content').evaluate(node => node === document.activeElement), true);
    await visit('/musee/louvre/');
    assert.equal(await page.locator('.museum-page').count(), 1);
    const overview = page.locator('.museum-overview');
    assert.ok(await overview.isVisible());
    const factsPosition = await page.locator('.museum-practical').boundingBox();
    const introductionPosition = await page.locator('.museum-summary').boundingBox();
    if (width <= 850) assert.ok(factsPosition.y < introductionPosition.y, 'Mobile visitors see practical information before the long introduction');
    assert.ok(await page.locator('.museum-summary .visual').evaluate(node => node.getBoundingClientRect().height <= 200), 'The typographic banner must stay compact');
    await screenshot('museum-overview');
    await page.locator('.museum-toc summary').click();
    const tocLink = page.getByRole('navigation', { name: 'Sommaire de la fiche' }).getByRole('link', { name: 'Choisissez un axe avant de choisir des œuvres', exact: true });
    const targetId = (await tocLink.getAttribute('href')).slice(1);
    await tocLink.click();
    await page.waitForURL(url => url.hash === '#' + targetId);
    assert.ok(await page.locator('#'+targetId).isVisible());
    assert.ok(await page.locator('#'+targetId).evaluate(node => node.getBoundingClientRect().top >= document.querySelector('.site-header').getBoundingClientRect().bottom - 1));
    await visit('/musee/musee-carnavalet/');
    await page.locator('.museum-toc summary').click();
    assert.equal(await page.getByRole('navigation', { name: 'Sommaire de la fiche' }).getByRole('link').count(), 7);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await screenshot('museum-toc');
    checks.push({ width, museumLayout: 'PASS', tests: ['keyboard-skip-link', 'practical-first-mobile', 'compact-visual', 'table-of-contents', 'anchor-visible-below-header', 'toc-reflow'] });
    await visit('/musee/louvre/');
    assert.equal(await page.locator('.site-header').getByRole('navigation').getByRole('link', { name: 'Carte', exact: true }).count(), 0, 'Preserved museum navigation must also lose the missing map');
    if (width <= 850) {
      await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
      assert.equal(await page.getByRole('button', { name: 'Fermer le menu' }).getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.ok(await page.locator('.site-header').getByRole('navigation').isHidden());
      assert.ok(await page.getByRole('button', { name: 'Ouvrir le menu' }).evaluate(node => node === document.activeElement));
    }
    if (width <= 850) await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    await page.locator('.site-header').getByRole('navigation').getByRole('link', { name: 'Inspirez-moi', exact: true }).click();
    await page.waitForURL(url => url.pathname === '/' && url.hash === '#inspiration');
    assert.ok(await page.locator('#inspiration').isVisible());
    assert.deepEqual(errors, []);
    checks.push({ width, status: 'PASS', tests: ['query-submit', 'museum-name', 'combined-filters', 'accents', 'city-case', 'empty-results', 'reset', 'unknown-theme', 'query-as-text', 'inspiration-choice', 'preserved-navigation', ...(width <= 850 ? ['menu-escape-focus'] : [])] });
    await context.close();
  }
  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 900 } });
  await noScript.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => route.abort());
  const fallback = await noScript.newPage();
  for (const [route, count] of [['/musees/', 126], ['/regions/normandie/', 97]]) {
    await fallback.goto(origin + route);
    assert.equal(await fallback.locator('[data-museum]:visible').count(), count, 'Every entry stays available without JavaScript');
    assert.ok(await fallback.locator('noscript').isVisible());
  }
  await noScript.close();
  checks.push({ fallback: 'PASS', tests: ['all-entries-without-javascript'] });
  await writeFile(`${output}/report.json`, JSON.stringify(checks, null, 2));
  console.log(JSON.stringify(checks, null, 2));
} finally {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
}
