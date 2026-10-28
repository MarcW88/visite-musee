import { museumPhoto } from './museum-images.mjs';
// Render the existing article source: no summaries, dates or claims are generated.
function divByClass(html, className) {
  const opening = new RegExp('<div\\b[^>]*class="[^\\"]*\\b' + className + '\\b[^\\"]*"[^>]*>').exec(html);
  if (!opening) return '';
  const tags = /<div\b[^>]*>|<\/div>/g;
  tags.lastIndex = opening.index + opening[0].length;
  let depth = 1;
  let token;
  while ((token = tags.exec(html))) {
    depth += token[0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(opening.index, tags.lastIndex);
  }
  throw new Error(`Unclosed museum component: ${className}`);
}
export function renderMuseumLayout(source, slug) {
  const ids = new Set([...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
  const freshId = base => {
    let id = base;
    let suffix = 2;
    while (ids.has(id)) id = `${base}-${suffix++}`;
    ids.add(id);
    return id;
  };
  const practicalId = freshId('museum-information');
  const introductionId = freshId('museum-introduction');
  const sections = [];
  let number = 0;
  let body = source.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (heading, attributes, title) => {
    const id = attributes.match(/\bid="([^"]+)"/)?.[1] || freshId(`museum-section-${++number}`);
    sections.push({ id, title: title.replace(/<[^>]+>/g, '') });
    return `<h2${/\bid=/.test(attributes) ? attributes : `${attributes} id="${id}"`}${/\btabindex=/.test(attributes) ? '' : ' tabindex="-1"'}>${title}</h2>`;
  });
  const blocks = [...body.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].map(match => match[0]);
  const originalHero = blocks.find(block => /class="[^\"]*\bpage-hero\b/.test(block));
  const originalOverview = blocks.find(block => /class="[^\"]*\bmuseum-layout\b/.test(block));
  if (!originalHero || !originalOverview) throw new Error('Museum source must contain its hero and practical overview');
  const facts = divByClass(originalOverview, 'facts');
  const visual = divByClass(originalOverview, 'visual');
  const layout = divByClass(originalOverview, 'museum-layout');
  if (!facts || !visual || !layout) throw new Error('Museum source must retain facts and visual components');
  const introduction = originalHero.match(/<p\b[^>]*class="[^\"]*\bpage-intro\b[^\"]*"[^>]*>[\s\S]*?<\/p>/)?.[0] || '';
  const notes = originalOverview.replace(layout, '').replace(/^<section\b[^>]*>/, '').replace(/<\/section>$/, '').replace(/class="wrap\s+([^\"]+)"/g, 'class="$1"');
  const toc = `<details class="museum-toc"><summary>Dans cette fiche</summary><nav aria-label="Sommaire de la fiche"><ol><li><a href="#${practicalId}">L’essentiel pour visiter</a></li>${introduction ? `<li><a href="#${introductionId}">Présentation du musée</a></li>` : ''}${sections.map(({ id, title }) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></nav></details>`;
  let hero = originalHero.replace(introduction, '');
  const shortcut = `<a class="chip" href="#${practicalId}">L’essentiel</a>`;
  if (hero.includes('<div class="quick">')) hero = hero.replace('<div class="quick">', `<div class="quick">${shortcut}`);
  else hero = hero.replace(/<\/div><\/section>$/, `<div class="quick">${shortcut}</div></div></section>`);
  hero = hero.replace(/<\/div><\/section>$/, `${toc}</div></section>`);
  if (!hero.includes('museum-toc')) throw new Error('Unsupported museum hero markup');
  const overview = `<section class="section museum-overview" id="${practicalId}"><div class="wrap museum-overview-grid"><div class="museum-practical"><h2 class="facts-heading">L’essentiel pour visiter</h2>${facts}${notes}</div><div class="museum-summary" id="${introductionId}">${introduction}${museumPhoto(slug)}${visual}</div></div></section>`;
  body = body.replace(originalHero, hero + overview).replace(originalOverview, '');
  return `<div class="museum-page">${body}</div>`;
}
