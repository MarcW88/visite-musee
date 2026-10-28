const menu = document.querySelector('[data-menu]');
const menuButton = document.querySelector('[data-menu-button]');
function setMenu(open) {
  menu?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
menuButton?.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) {
    setMenu(false);
    menuButton.focus();
  }
});

const searchForm = document.querySelector('[data-catalogue-search]');
if (searchForm) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr').replace(/[^a-z0-9]+/g, ' ').trim();
  const params = new URLSearchParams(location.search);
  const query = (params.get('q') || '').trim();
  searchForm.querySelector('[name="q"]').value = query;
  const facets = ['theme', 'region', 'departement'].map(name => {
    const control = searchForm.querySelector(`[name="${name}"]`);
    if (!control) return null;
    const value = params.get(name) || '';
    const known = [...control.options].some(option => option.value === value);
    if (known) control.value = value;
    return { name, value, known, label: known ? control.selectedOptions[0].textContent : 'critère inconnu' };
  }).filter(Boolean);
  const words = normalize(query).split(' ').filter(Boolean);
  const active = Boolean(query || facets.some(facet => facet.value));
  const cards = [...document.querySelectorAll('[data-museum-group] [data-museum]')];
  const matching = cards.filter(card => words.every(word => normalize(card.dataset.search).includes(word)) && facets.every(facet => {
    if (!facet.value) return true;
    if (!facet.known) return false;
    return facet.name === 'theme' ? card.dataset.themes.split(' ').includes(facet.value) : card.dataset[facet.name] === facet.value;
  }));
  const all = params.get('all') === '1';
  const pageSize = all ? Math.max(1, matching.length) : 24;
  const pageCount = Math.max(1, Math.ceil(matching.length / pageSize));
  let currentPage = Math.min(pageCount, Math.max(1, Number.parseInt(params.get('page'), 10) || 1));
  let target;
  try { if (location.hash) target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch {}
  // Keep former editorial anchors reachable after introducing pagination.
  const anchorCard = target?.matches('[data-catalogue-entry]') ? target.querySelector('[data-museum]') : null;
  const anchorIndex = matching.indexOf(anchorCard);
  if (anchorIndex >= 0) currentPage = Math.floor(anchorIndex / pageSize) + 1;
  const start = (currentPage - 1) * pageSize;
  const displayed = new Set(matching.slice(start, start + pageSize));
  cards.forEach(card => { (card.closest('[data-catalogue-entry]') || card).hidden = !displayed.has(card); });
  document.querySelectorAll('[data-museum-group]').forEach(group => { group.hidden = matching.length === 0; });
  document.querySelectorAll('[data-browse-only]').forEach(section => { section.hidden = active; });
  const criteria = [query && `« ${query} »`, ...facets.filter(facet => facet.value).map(facet => facet.label)].filter(Boolean).join(' · ');
  document.querySelector('[data-search-status]').textContent = `${matching.length} fiche${matching.length === 1 ? '' : 's'} ${active ? 'pour ' + criteria : 'dans le catalogue'}.${matching.length ? ` ${start + 1}–${Math.min(start + pageSize, matching.length)} affichées.` : ''}`;
  document.querySelector('[data-search-empty]').hidden = matching.length !== 0;
  const pagination = document.querySelector('[data-catalogue-pagination]');
  pagination.hidden = matching.length === 0 || (pageCount === 1 && !all);
  const pageLink = (text, page, showAll = all) => {
    const url = new URL(location.href);
    url.searchParams.set('page', String(page));
    if (showAll) url.searchParams.set('all', '1'); else url.searchParams.delete('all');
    url.hash = 'catalogue-results';
    const link = document.createElement('a');
    link.href = url.pathname + url.search + url.hash;
    link.textContent = text;
    return link;
  };
  for (let page = 1; page <= pageCount; page++) {
    const link = pageLink(String(page), page);
    link.setAttribute('aria-label', `Page ${page}`);
    if (page === currentPage) link.setAttribute('aria-current', 'page');
    pagination.append(link);
  }
  if (matching.length > 24) {
    const link = pageLink(all ? 'Afficher 24 fiches par page' : 'Tout afficher', 1, !all);
    link.classList.add('catalogue-show-all');
    pagination.append(link);
  }
  if (active) {
    document.body.classList.add('search-active');
    document.querySelector('.page-hero').classList.add('search-results-hero');
    if (searchForm.querySelector('[name="region"]')) {
      document.querySelector('h1').textContent = 'Résultats de recherche';
      document.title = 'Recherche de musées | Visite Musée';
    }
  }
  if (anchorIndex >= 0) target.scrollIntoView();
  window.addEventListener('hashchange', () => {
    let anchor;
    try { anchor = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { return; }
    const card = anchor?.closest('[data-catalogue-entry]')?.querySelector('[data-museum]');
    if (!card) return;
    const index = matching.indexOf(card);
    if (index >= 0 && (all || Math.floor(index / pageSize) + 1 === currentPage)) {
      anchor.scrollIntoView();
      return;
    }
    const url = new URL(location.href);
    if (index < 0) ['q', 'theme', 'region', 'departement'].forEach(key => url.searchParams.delete(key));
    url.searchParams.set('page', String(index < 0 ? 1 : Math.floor(index / pageSize) + 1));
    location.replace(url.pathname + url.search + url.hash);
  });
  searchForm.dataset.ready = 'true';
}
