import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const museumContentRoot = path.join(root, 'content', 'musee');

if (!fs.existsSync(museumContentRoot)) {
  console.log('0 fiches musée personnalisées appliquées.');
  process.exit(0);
}

const escapeAttr = value => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

let applied = 0;

for (const entry of fs.readdirSync(museumContentRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const slug = entry.name;
  const sourceDir = path.join(museumContentRoot, slug);
  const bodyPath = path.join(sourceDir, 'body.html');
  const metaPath = path.join(sourceDir, 'meta.json');
  const outputPath = path.join(root, 'musee', slug, 'index.html');

  if (!fs.existsSync(bodyPath) || !fs.existsSync(outputPath)) continue;

  const body = fs.readFileSync(bodyPath, 'utf8').trim();
  const meta = fs.existsSync(metaPath)
    ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
    : {};
  let html = fs.readFileSync(outputPath, 'utf8');

  if (meta.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)} | Visite Musée</title>`);
  }

  if (meta.description) {
    html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttr(meta.description)}">`);
  }

  const headExtras = [];
  if (meta.canonical) {
    headExtras.push(`<link rel="canonical" href="${escapeAttr(meta.canonical)}">`);
  }
  headExtras.push('<link rel="stylesheet" href="../../assets/content.css">');
  if (meta.schema) {
    headExtras.push(`<script type="application/ld+json">${JSON.stringify(meta.schema)}</script>`);
  }

  html = html.replace('</head>', `${headExtras.join('')}</head>`);
  html = html.slice(0, html.indexOf('<main>')) + '<main>' + body + '</main>' + html.slice(html.indexOf('</main>') + 7);

  fs.writeFileSync(outputPath, html);
  applied += 1;
}

const regionalBody = path.join(root, 'content', 'regions', 'ile-de-france', 'body.html');
const regionalOutput = path.join(root, 'regions', 'ile-de-france', 'index.html');
if (fs.existsSync(regionalBody) && fs.existsSync(regionalOutput)) {
  let html = fs.readFileSync(regionalOutput, 'utf8');
  const body = fs.readFileSync(regionalBody, 'utf8').trim();
  html = html.replace(html.slice(html.indexOf('<title>'),html.indexOf('</title>') + 8), '<title>Musées en Île-de-France : où aller selon vos envies ? | Visite Musée</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Découvrez des musées d’art, d’histoire et de mode en Île-de-France, avec une sélection par type de visite et des liens vers les musées.">');
  html = html.replace('</head>', '<link rel="canonical" href="https://visite-musee.fr/regions/ile-de-france/"><link rel="stylesheet" href="../../assets/content.css"></head>');
  html = html.slice(0, html.indexOf('<main>')) + '<main>' + body + '</main>' + html.slice(html.indexOf('</main>') + 7);
  fs.writeFileSync(regionalOutput, html);
}

const hautsBody = path.join(root, 'content', 'regions', 'hauts-de-france', 'body.html');
const hautsOutput = path.join(root, 'regions', 'hauts-de-france', 'index.html');
if (fs.existsSync(hautsBody) && fs.existsSync(hautsOutput)) {
  let html = fs.readFileSync(hautsOutput, 'utf8');
  const content = fs.readFileSync(hautsBody, 'utf8').trim();
  const titleStart = html.indexOf('<title>');
  const titleEnd = html.indexOf('</title>') + 8;
  if (titleStart >= 0 && titleEnd >= 8) {
    html = html.slice(0, titleStart) + '<title>Musées des Hauts-de-France : où aller selon vos envies ? | Visite Musée</title>' + html.slice(titleEnd);
  }
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Quels musées visiter dans les Hauts-de-France ? Lens, Lille, Roubaix, Amiens, Chantilly et une sélection par centres d’intérêt.">');
  html = html.replace('</head>', '<link rel="canonical" href="https://visite-musee.fr/regions/hauts-de-france/"><link rel="stylesheet" href="../../assets/content.css"></head>');
  const mainStart = html.indexOf('<main>');
  const mainEnd = html.indexOf('</main>');
  if (mainStart >= 0 && mainEnd > mainStart) {
    html = html.slice(0, mainStart) + '<main>' + content + '</main>' + html.slice(mainEnd + 7);
  }
  fs.writeFileSync(hautsOutput, html);
}

console.log(`${applied} fiche(s) musée personnalisée(s) appliquée(s).`);
