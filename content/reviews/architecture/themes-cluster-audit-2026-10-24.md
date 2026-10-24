# CLUSTER_AUDIT — Architecture et maillage du site
Date: 2026-10-24. Scope: classification / themes only; other main sections unchanged.
## Baseline
126 museum slugs on main registry; 97 Normandy museum slugs. Before change /themes/ had 10 category links, but each category only placeholder result cards ("Contenu à connecter") and no links to actual museum detail pages. /musees/ has 126 cards, /regions/normandie/ 97 cards. /visiter/musees-en-famille/ has zero museum detail links; /expositions/ currently has Paris Lyon Marseille landing routes only; homepage not yet curated from full museum data. Menu points to Musées, Destinations, Thèmes, Expositions, En famille, Carte.
## New taxonomy
content/taxonomy/museums.json version 1 contains exactly 126 unique IDs, with region coverage 97 Normandie, 15 Île-de-France, 10 Hauts-de-France, 2 Auvergne-Rhône-Alpes, 1 Occitanie, 1 PACA. Empty department, city and visit intent fields explicitly mean 'unverified/not classified' rather than negative evidence. 104 museum IDs have at least one theme candidate; 22 pending category validation. Theme membership rule uses conservative patterns on the exact museum slug, and is PROVISIONAL editorial classification, not verified museum exhibit facts. Counts 27 fine arts, 7 modern/contemporary, 31 history, 13 science, 4 natural history, 4 archaeology, 23 decorative arts, 0 automobile, 5 fashion, 17 unusual. Exactly 131 thematic outgoing detail links; multiple themes permitted. A category with zero verified candidate shows a transparent no-result state rather than made-up museums.
## Implementation
- scripts/build.mjs reads central taxonomic JSON for theme hub and ten generated theme pages, so content does not revert to generic landing placeholders after a rebuild.
- themes/index.html and ten themes/*/index.html materialized on main. Each includes relevant museum links, top-level links to hub and directory, and retains noindex,follow.
- scripts/check.mjs now asserts category membership and link counts, duplicate prevention and noindex; execution still unverified.
## Next phases blocked until approval
1. Human editorial validation of the 22 pending museums; check all 131 candidate tags and museum names/labels against actual collections.
2. Populate city, department, availability/fee/family/accessibility fields only from evidence, not inferred from URL title.
3. Destination and department routes: genuine city/department indexes and geographically precise links; existing 97 Normandie cards require editorial hierarchy, not simply a longer flat list.
4. Visit intents (family, free, children, accessible) need sourced tags; current page is generic, not changed.
5. Exhibition pages and homepage remain unchanged.
6. Add reciprocal contextual links from museum fiche pages to themes, city and regional pages in a separate approved scope.
## Indexation and gates
All pages touched keep original robots noindex,follow. No index change on any museum, theme or hub. No claim of production build/deployment or Playwright passed; review is KEEP_NOINDEX pending check execution and human approval. 
