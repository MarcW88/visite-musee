# SERP coverage — musee/fondation-louis-vuitton

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `Fondation Louis Vuitton`.

Variants:
- `visiter Fondation Louis Vuitton`
- `Fondation Louis Vuitton horaires`
- `Fondation Louis Vuitton tarifs`
- `Fondation Louis Vuitton exposition`
- `Fondation Louis Vuitton architecture`
- `que voir Fondation Louis Vuitton`

Dominant intent: exact entity + current programme + practical planning.

The decisive user question is date-sensitive: **is the Fondation open and what is actually being presented at the date I want to go?** The building by Frank Gehry is a stable second reason to visit, but the public experience is strongly programme-led.

Maturity: planning / deciding whether the current programme justifies the trip.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.fondationlouisvuitton.fr/fr/visiter` | official visit page | current closure, reopening date, tariffs, reservation, access, navette |
| `https://www.fondationlouisvuitton.fr/fr/portail-wifi-interexposition` | official visitor tools page | architecture-focused app / interactive tools; confirms current inter-exhibition closure context |
| `https://www.fondationlouisvuitton.fr/fr/evenements/parcours-architectural-mars-2026` | official programme/archive page | architecture can itself become a visit programme between exhibitions |
| official exhibition/programme pages on `fondationlouisvuitton.fr` | official programme | public visit changes substantially with exhibition cycle |

Observed result pattern: official pages dominate the useful entity query because opening status, exhibition programme and booking conditions are highly volatile. A generic evergreen guide that ignores the date would be structurally weaker.

SERP-feature inventory: `DATA_GAP`; no reliable feature export was available, so no FAQ/snippet format is imposed.

## 3. Recurring needs / questions

1. Is the Fondation currently open?
2. What exhibition is on when I plan to visit?
3. Is the architecture itself worth the trip?
4. How much is the ticket and who gets reductions/free entry?
5. Is booking required?
6. How do I get there from central Paris?
7. Does the visit have a stable permanent collection route, or does it change with programming?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Current closure / reopening 9 Oct 2026 | MUST | COVERED | official visit page, checked 2026-09-14 |
| Programme-led visit proposition | MUST | COVERED | current page correctly says visit depends on exhibitions |
| Frank Gehry architecture as independent motive | MUST | COVERED | official architectural content and visitor app support it |
| Current tariffs | MUST | COVERED | 18 € full, 10 € -26/student/teacher, other bands on official visit page |
| Reservation / entry rules | MUST | COVERED | official page states booking access conditions |
| Access / location | MUST | COVERED | Bois de Boulogne, metro/navette details on official page |
| Explain variability of opening hours / programme | MUST | COVERED | date-first framing |
| Stable permanent-gallery claim | MUST | COVERED BY EXCLUSION | page explicitly avoids presenting it as a fixed permanent-gallery museum |
| Current exhibition detail | SHOULD | PARTIAL | only enough to explain reopening; future exhibition detail belongs primarily to `/expositions/` |
| Family/accessibility | OPTIONAL | MISSING | can be linked or added when it materially changes decision |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Fondation Louis Vuitton when a current exhibition interests you and/or when you want to experience Frank Gehry’s building as part of the cultural visit. Always check the date first because the public offer changes strongly with the programme.**

At the audit date, the first answer must be closure, not a generic description: the Fondation is closed and announces reopening on 9 October 2026.

## 6. Information gain

The useful distinction from generic travel copy is:
- status/opening before description;
- programming before generic “must-see” language;
- architecture treated as a real visit component with official tools, not decorative context;
- clear boundary between museum entity page and future exhibition-detail pages;
- no implication that a single stable permanent route is always available.

## 7. GEO / citation opportunities

Atomic, sourceable facts:
- currently closed as of 2026-09-14;
- reopening announced for 2026-10-09;
- full price 18 € on official visit page;
- building designed by Frank Gehry;
- official visitor application includes architectural interpretation;
- navette and metro access published by the Fondation.

These facts should stay adjacent to official URLs and checked dates. No artificial FAQ.

## 8. Internal overlap / ownership

- `/musee/fondation-louis-vuitton/` owns the institution, stable visit proposition, architecture and practical status.
- `/expositions/paris/` should compare current temporary programming across venues.
- A future exhibition-specific URL should own detailed curatorial content, dates, artists and exhibition-specific ticketing where useful.
- `/themes/musees-art-moderne-contemporain/` should classify/select institutions, not reproduce current opening status.
- `/musees/paris/` should compare the Fondation to alternative museums, especially when it is closed.

Cannibalization risk: LOW if the exhibition boundary remains explicit.

## 9. Entities

- Fondation Louis Vuitton
- Frank Gehry
- Bois de Boulogne / Jardin d’Acclimatation context
- current exhibition entity only when needed to explain status
- commissioned artworks / architectural route only if specifically sourced

Do not model temporary programming as a stable attribute of the museum.

## 10. Freshness

VOLATILE:
- open/closed status;
- reopening date;
- exhibitions;
- daily hours;
- ticket prices;
- booking rules;
- navette operation.

SEMI_STABLE:
- visitor services and app;
- accessibility;
- access routes.

STABLE:
- Frank Gehry authorship;
- address / broad institutional identity (still recheck if practical source changes).

Checked 2026-09-14 against official Fondation pages.

## 11. Data gaps

- No GSC/analytics supplied.
- No reliable live SERP-feature export.
- No independent crowd data; do not infer best visiting times.
- Current detailed 9 October exhibition coverage was not needed for the museum page beyond reopening context; do not pre-empt an exhibition owner URL.

## 12. Gate

Ownership: CLEAR.
Current status: VERIFIED.
Central MUSTs: COVERED.
Exhibition overlap: CONTROLLED.
Structural-cloning issue: IDENTIFIED for content pass; architecture/programme logic should not be forced into a three-card block.

**Gate: READY_FOR_BRIEF — reconfirmed.**
