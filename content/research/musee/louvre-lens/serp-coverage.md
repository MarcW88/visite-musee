# SERP coverage — musee/louvre-lens

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `Louvre-Lens`.

Variants:
- `visiter Louvre-Lens`
- `Louvre-Lens horaires`
- `Louvre-Lens tarif`
- `Galerie du Temps`
- `que voir Louvre-Lens`
- `Louvre Lens gratuit`
- `Louvre Lens architecture parc`

Dominant intent: exact entity + understand the Galerie du Temps concept + practical/free-visit planning.

The main decision is whether the Lens experience — one large chronological gallery plus architecture/parc — suits the visitor better than the departmental complexity of the Louvre in Paris.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.louvrelens.fr/informations-pratiques/` | official practical hub | current opening, access, accessibility, visitor services |
| `https://www.louvrelens.fr/informations-pratiques/preparez-votre-prochaine-visite/` | official preparation/resource page | visit supports, FALC, practical tools |
| `https://www.louvrelens.fr/la-galerie-du-temps/` | official permanent-gallery page | open chronological display, >250 works, renewed presentation |
| `https://www.louvrelens.fr/` | official homepage | family activities, territory/weekend framing, services |
| official architecture/parc page | official institutional page | SANAA building and former mining-site landscape context |

Observed result pattern: the Galerie du Temps is the dominant identity signal; practical and territory/service pages then answer the visit. This supports a page whose structure begins with the gallery concept, not with generic “reasons to visit”.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export available.

## 3. Recurring needs / questions

1. What is the difference between Louvre-Lens and the Louvre in Paris?
2. What is the Galerie du Temps?
3. Is the permanent visit really free?
4. What do I pay for temporary exhibitions?
5. Is the museum worth visiting for the building/parc as well?
6. How do I get there from Lens station / local transport?
7. How long / broad is the chronological span?
8. Is the current gallery presentation still the 2012 one?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Distinct Louvre-Lens visit proposition | MUST | COVERED | 5,000 years in one open chronological space |
| Galerie du Temps explanation | MUST | COVERED | official gallery page |
| Current free permanent access | MUST | COVERED | official practical page |
| Temporary-exhibition price distinction | MUST | COVERED | official practical information |
| Opening hours / Tuesday closure | MUST | COVERED | official page |
| Current 2024-renewed gallery context | SHOULD | COVERED | useful information gain |
| Architecture / mining-site park | SHOULD | COVERED | supports why Lens is a destination, not merely a satellite room |
| Access / TADAO context | SHOULD | COVERED | current public-transport information |
| “same collection as Paris” implication | MUST | COVERED BY EXCLUSION | page explains loans/presentation model instead of claiming a duplicate Louvre |
| Family/accessibility tools | OPTIONAL | PARTIAL | official resources exist; add only where useful |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Louvre-Lens when you want to read long-term art/history chronologically in one open gallery, with a simpler and free permanent route than the Louvre’s departmental organisation in Paris.**

That contrast is specific, factual and useful; it should remain the primary differentiator.

## 6. Information gain

Useful gain:
- explain the open-gallery chronology rather than market “masterpieces”;
- make the free permanent route explicit;
- state that the Galerie du Temps was renewed, avoiding stale descriptions of the 2012 opening display;
- connect architecture/parc to the former mining site;
- cross-link to the Louvre in Paris specifically to compare two curatorial models.

## 7. GEO / citation opportunities

Atomic facts:
- Galerie du Temps occupies about 3,000 m²;
- current presentation includes more than 250 works and spans roughly 5,000 years;
- permanent Galerie du Temps access is free;
- temporary exhibition gallery is separately ticketed;
- museum is closed Tuesday;
- SANAA designed the museum;
- site occupies a former mining area transformed with a large park.

Use official sources and checked dates for current tariffs/access.

## 8. Internal overlap / ownership

- `/musee/louvre-lens/` owns the Lens institution and Galerie du Temps experience.
- `/musee/louvre/` owns the Paris Louvre entity and selection problem across departments.
- `/regions/hauts-de-france/` should select regional museums, not duplicate entity detail.
- `/visiter/musees-gratuits/` can use the verified free permanent-access fact as a selection criterion.

Cannibalization risk: LOW. Louvre vs Louvre-Lens differentiation is a positive internal comparison opportunity.

## 9. Entities

- Louvre-Lens
- Galerie du Temps
- Musée du Louvre as lending/parent institution relation, without implying identity equivalence
- SANAA / Kazuyo Sejima / Ryue Nishizawa where sourced
- former pit 9/9 bis / mining-site context where used
- Catherine Mosbach park relation where used

Specific artworks should not be guaranteed as visible without current display verification.

## 10. Freshness

VOLATILE:
- temporary exhibition prices;
- opening exceptions;
- transport offers;
- current loans/display list.

SEMI_STABLE:
- visitor services;
- accessibility tools;
- gallery mediation.

STABLE / long-lived:
- open chronological-gallery concept;
- architectural authorship;
- mining-site context.

Checked 2026-09-14 against official Louvre-Lens pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No reason to publish a generic recommended duration; official resources can guide route choice without inventing an “ideal” time.
- Individual artwork visibility remains date-sensitive.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Louvre overlap: RESOLVED.
Current practical data: VERIFIED.
Structural-cloning issue: MODERATE — architecture/parc should not be forced into a generic three-reason grid if a more natural gallery → site narrative works better.

**Gate: READY_FOR_BRIEF — reconfirmed.**
