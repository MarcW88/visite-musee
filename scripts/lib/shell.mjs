export function navigation(prefix) {
  return `<header class="site-header"><a class="skip-link" href="#main-content">Aller au contenu</a><div class="wrap nav"><a class="brand" href="${prefix}"><img src="${prefix}assets/logo.svg" alt=""><span>VISITE<br>MUSÉE</span></a><button class="menu-button" data-menu-button aria-controls="site-navigation" aria-expanded="false" aria-label="Ouvrir le menu">☰</button><nav class="menu" id="site-navigation" data-menu><a href="${prefix}musees/">Musées</a><a href="${prefix}regions/">Destinations</a><a href="${prefix}themes/">Thèmes</a><a href="${prefix}#inspiration">Inspirez-moi</a></nav></div></header>`;
}
export function footer(prefix) {
  return `<footer class="footer"><div class="wrap"><div class="footer-grid"><div class="brand">VISITE<br>MUSÉE</div><div><strong>Explorer</strong><a href="${prefix}musees/">Tous les musées</a><a href="${prefix}themes/">Par thème</a></div><div><strong>Choisir</strong><a href="${prefix}regions/">Destinations</a><a href="${prefix}#inspiration">Inspirez-moi</a></div><div><strong>À venir</strong><a href="${prefix}guides/">Guides · en préparation</a><a href="${prefix}expositions/">Expositions · en préparation</a><a href="${prefix}visiter/">Préparer une visite · en préparation</a><a href="${prefix}inspiration/">Sélections · en préparation</a></div></div><div class="legal">Pour les horaires, tarifs et conditions d’accès, consultez la source et la date indiquées sur la fiche, puis confirmez-les auprès du musée avant votre visite.</div></div></footer>`;
}
export function refreshShell(html, prefix) {
  return html.replace('<main>', '<main id="main-content" tabindex="-1">').replace(/<header class="site-header">[\s\S]*?<\/header>/, navigation(prefix)).replace(/<footer class="footer">[\s\S]*?<\/footer>/, footer(prefix));
}

export function replaceMain(html, body) {
  const opening = html.match(/<main\b[^>]*>/)?.[0];
  if (!opening || !html.includes('</main>')) throw new Error('Missing main content container');
  return html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/, () => opening + body + '</main>');
}
