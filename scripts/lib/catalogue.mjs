import { geographicLabels } from './labels.mjs';
export { geographicLabels } from './labels.mjs';
export const themeLabels={'musees-beaux-arts':'Beaux-arts','musees-art-moderne-contemporain':'Art moderne et contemporain','musees-histoire':'Histoire et mémoires','musees-sciences':'Sciences et techniques','musees-histoire-naturelle':'Histoire naturelle','musees-archeologie':'Archéologie','musees-arts-decoratifs':'Arts décoratifs et savoir-faire','musees-automobile':'Automobile','musees-mode':'Mode et textile','musees-insolites':'Musées insolites'};
export const escapeAttribute = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const label = slug => geographicLabels[slug] || slug.replaceAll('-', ' ');

export function catalogueControls({ themes, locations, locationField = 'region' }) {
  const locationLabel = locationField === 'region' ? 'Région' : 'Département';
  return `<form class="catalogue-search" action="./" method="get" role="search" data-catalogue-search>
    <label for="museum-query">Musée, ville ou thème</label><div class="search"><input id="museum-query" type="search" name="q" placeholder="Ex. Louvre, Rouen, archéologie…"><button type="submit">RECHERCHER →</button></div>
    <div class="catalogue-filters"><div><label for="museum-theme">Collection</label><select id="museum-theme" name="theme"><option value="">Tous les thèmes</option>${themes.map(([slug, name]) => `<option value="${slug}">${name}</option>`).join('')}</select></div>
    <div><label for="museum-location">${locationLabel}</label><select id="museum-location" name="${locationField}"><option value="">${locationField === 'region' ? 'Toutes les régions' : 'Tous les départements'}</option>${locations.map(slug => `<option value="${slug}">${label(slug)}</option>`).join('')}</select></div>
    <a class="text-link" href="./">Effacer les critères</a></div></form>
    <p class="catalogue-status" data-search-status role="status" aria-live="polite"></p><p data-search-empty hidden>Essayez un autre nom, un territoire ou un thème plus large. Vous pouvez aussi <a class="text-link" href="./">retrouver toutes les fiches</a>.</p>
    <noscript><p>Les filtres et la pagination nécessitent JavaScript. Toutes les fiches restent consultables ci-dessous.</p></noscript>`;
}
export const cataloguePagination = '<nav class="catalogue-pagination" data-catalogue-pagination aria-label="Pages du catalogue" hidden></nav>';

// Change the presentation of the existing regional source, preserving every
// museum link, paragraph and former section anchor. Reject unsupported source
// shapes instead of silently discarding editorial text.
export function renderNormandyCatalogue(source, { taxonomy, themes, names }) {
  const sections = [...source.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].map(match => match[0]);
  const entries = [];
  let hero = '';
  const supplementary = [];
  for (const section of sections) {
    if (/class="page-hero"/.test(section)) { hero = section.replace('class="page-hero"', 'class="page-hero catalogue-hero"'); continue; }
    const cards = [...section.matchAll(/<a\b[^>]*href="\.\.\/\.\.\/musee\/([^/]+)\/"[^>]*>[\s\S]*?<\/a>/g)];
    if (!cards.length) { supplementary.push(section); continue; }
    const heading = section.match(/<h2>([\s\S]*?)<\/h2>/)?.[1] || '';
    const id = section.match(/^<section\b[^>]*\bid="([^"]+)"/)?.[1];
    let remaining = section.replace(/<h2>[\s\S]*?<\/h2>/, '');
    cards.forEach(card => { remaining = remaining.replace(card[0], ''); });
    if (remaining.replace(/<[^>]+>/g, '').trim()) throw new Error('Unmapped regional prose; update catalogue renderer before publishing');
    cards.forEach(([original, slug], index) => {
      const item = taxonomy.find(item => item.slug === slug);
      if (!item) throw new Error(`Museum missing from taxonomy: ${slug}`);
      const small = original.match(/<small>[\s\S]*?<\/small>/)?.[0] || '';
      const opening = original.match(/^<a\b[^>]*>/)[0];
      const copy = original.slice(opening.length, -4).replace(small, '');
      const search = [names.get(slug) || slug, slug, item.ville, item.region, item.departement, ...(item.themes || []).map(theme => themes[theme])].filter(Boolean).join(' ');
      const data = ` data-museum="${slug}" data-search="${escapeAttribute(search)}" data-themes="${item.themes.join(' ')}" data-region="${item.region || ''}" data-departement="${item.departement || ''}"`;
      const card = `${opening.slice(0, -1)}${data}>${small}<div><p class="catalogue-context">${heading}</p>${copy}</div></a>`;
      entries.push(`<li data-catalogue-entry${index === 0 && id ? ` id="${id}"` : ''}>${card}</li>`);
    });
  }
  if (!hero || !entries.length) throw new Error('Regional catalogue needs a hero and museum entries');
  const locations = [...new Set(taxonomy.filter(item => item.region === 'normandie').map(item => item.departement).filter(Boolean))].sort();
  const controls = catalogueControls({ themes: Object.entries(themes), locations, locationField: 'departement' });
  hero = hero.replace(/<\/div><\/section>$/, `${controls}</div></section>`);
  return `${hero}<section class="section catalogue-results" id="catalogue-results" data-museum-group><div class="wrap"><div class="section-head"><h2>Les musées de Normandie</h2></div><ol class="catalogue-list" role="list">${entries.join('\n')}</ol>${cataloguePagination}</div></section><div class="catalogue-territories">${supplementary.join('\n')}</div>`;
}
