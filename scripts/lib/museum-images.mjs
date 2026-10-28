import fs from 'node:fs';
const images = JSON.parse(fs.readFileSync(new URL('../../content/data/museum-images.json', import.meta.url), 'utf8'));
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
export function museumPhoto(slug, {prefix = '../../', home = false, card = false, list = false} = {}) {
  const image = images[slug];
  if (!image) return '';
  return `<figure class="museum-photo${home ? ' museum-photo-home' : ''}"><img src="${prefix}${escape(image.path)}" ${card && image.thumbnailPath ? `srcset="${prefix}${escape(image.thumbnailPath)} 330w, ${prefix}${escape(image.path)} 1280w" sizes="${list ? '(max-width:520px) 110px, 160px' : '(max-width:520px) calc(100vw - 24px), (max-width:850px) 45vw, 400px'}"` : ''} width="${image.width}" height="${image.height}" alt="${escape(image.alt)}" loading="lazy" decoding="async"><figcaption>${escape(image.caption)}<span>Photo : <a href="${escape(image.authorUrl)}">${escape(image.author)}</a> · <a href="${escape(image.sourceUrl)}">${escape(image.sourceName || 'Wikimedia Commons')}</a> · <a href="${escape(image.licenseUrl)}" rel="license">${escape(image.license)}</a> · Redimensionnée, sans recadrage.</span></figcaption></figure>`;
}

// Apply once to finished pages so editorial and generated cards share credits.
export function illustrateMuseumCards(html, prefix) {
  html = html.replace(/<!--museum-card-photo-->([\s\S]*?)<!--\/museum-card-photo-->/g, (_, block) => block.match(/<a\b[^>]*class="[^\"]*\bresult-card\b[^\"]*"[^>]*>[\s\S]*?<\/a>/)?.[0] || block);
  return html.replace(/<a\b[^>]*class="[^\"]*\bresult-card\b[^\"]*"[^>]*href="[^\"]*musee\/([^/]+)\/"[^>]*>[\s\S]*?<\/a>/g, (card, slug) => {
    const photo = museumPhoto(slug, {prefix, card:true, list:html.includes('class="catalogue-list"')});
    return photo ? `<!--museum-card-photo--><div class="museum-photo-card">${card}${photo}</div><!--/museum-card-photo-->` : card;
  });
}
