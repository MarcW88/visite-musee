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
  html = html.replace(/<main>[\s\S]*?<\/main>/, `<main>${body}</main>`);

  fs.writeFileSync(outputPath, html);
  applied += 1;
}

const regionalBody = path.join(root, 'content', 'regions', 'ile-de-france', 'body.html');
const regionalOutput = path.join(root, 'regions', 'ile-de-france', 'index.html');
if (fs.existsSync(regionalBody) && fs.existsSync(regionalOutput)) {
  let html = fs.readFileSync(regionalOutput, 'utf8');
  const body = fs.readFileSync(regionalBody, 'utf8').trim();
  html = html.replace(/<title>[\\s\\S]*?<\\/title>/, '<title>Musées en Île-de-France : où aller selon vos envies ? | Visite Musée</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Découvrez des musées d’art, d’histoire et de mode en Île-de-France, avec une sélection par type de visite et des liens vers les musées.">');
  html = html.replace('</head>', '<link rel="canonical" href="https://visite-musee.fr/regions/ile-de-france/"><link rel="stylesheet" href="../../assets/content.css"></head>');
  html = html.replace(/<main>[\\s\\S]*?<\\/main>/, '<main>' + body + '</main>');
  fs.writeFileSync(regionalOutput, html);
}
console.log(`${applied} fiche(s) musée personnalisée(s) appliquée(s).`);
