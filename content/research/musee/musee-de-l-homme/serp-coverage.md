# SERP coverage — musee/musee-de-l-homme

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée de l'Homme`.

Variants:
- `visiter musée de l'Homme`
- `musée de l'Homme horaires`
- `musée de l'Homme tarifs`
- `Galerie de l'Homme`
- `que voir musée de l'Homme`
- `musée de l'Homme famille`
- `musée de l'Homme audioguide`

Dominant intent: exact entity + understand the interdisciplinary permanent exhibition + practical planning.

The real task is to determine whether the museum’s question-led approach to human evolution, biology, cultures and futures fits the visitor’s interests better than a conventional natural-history or archaeology museum.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.mnhn.fr/fr/musee-de-l-homme` | official entity page | current tariffs and institutional positioning |
| `https://www.museedelhomme.fr/fr/preparer-sa-visite` | official visit hub | permanent/temporary visit, family, access, services |
| `https://www.museedelhomme.fr/fr/audioguide-plan-de-visite` | official visitor-tool page | 60+ scientific audio commentaries, four visitor levels |
| `https://www.museedelhomme.fr/fr/venir-au-musee` | official practical/access page | hours, access, disability information |
| MNHN `Guide du Musée de l'Homme` page | official publication | confirms the museum-laboratory framing and the three core questions |

Observed result pattern: official results foreground the three-question permanent gallery and scientific mediation. This validates keeping the three-question structure because it is institution-native, not a generic content template.

SERP-feature inventory: `DATA_GAP`; no live feature export available.

## 3. Recurring needs / questions

1. What does the Musée de l’Homme actually cover?
2. Is it about evolution only, or also cultures/societies?
3. What are the three questions of the permanent route?
4. What are the key objects / scientific collections?
5. How much does it cost and what is free?
6. Is there an audioguide / plan?
7. Is the museum accessible / family-suited?
8. How does the museum relate to active scientific research?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Three-question visit proposition | MUST | COVERED | official Gallery/guide structure |
| Interdisciplinary science + society framing | MUST | COVERED | current page explains multiple disciplines |
| Research / museum-laboratory identity | SHOULD | COVERED | official institutional sources |
| Current hours | MUST | COVERED | official page |
| Current ticket price / free categories | MUST | COVERED | official MNHN page |
| Permanent + temporary access via ticket | MUST | COVERED | official tariff description |
| Audioguide / scientific mediation | SHOULD | MISSING | add 60+ scientific commentaries as useful visit tool |
| Plan / levels | OPTIONAL | PARTIAL | can be linked, not reproduced exhaustively |
| Named objects | SHOULD | PARTIAL | current examples are sourced institutionally; do not overstate current visibility without checking |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Musée de l’Homme when you want to investigate what humans are, where they come from and where they may be going through biology, prehistory, anthropology and social/cultural perspectives in one permanent route.**

The three-question structure is semantically justified and should remain even while other museum pages move away from repeated three-card patterns.

## 6. Information gain

Useful gain:
- explain why the museum is broader than “human evolution”;
- preserve the official three-question inquiry model;
- connect collections to active science/research;
- surface the free smartphone audioguide with 60+ scientist commentaries;
- avoid reducing the museum to a list of fossils or famous objects.

## 7. GEO / citation opportunities

Atomic facts:
- permanent Gallery of Man structured around three questions: who are we, where do we come from, where are we going;
- current ticket covers permanent collection and temporary exhibitions;
- current full/reduced prices 15 € / 12 €;
- free smartphone audioguide provides more than 60 commentaries by 14 scientists in six languages;
- museum located at 17 place du Trocadéro.

## 8. Internal overlap / ownership

- `/musee/musee-de-l-homme/` owns the exact museum entity and its three-question scientific/cultural visit proposition.
- `/themes/musees-sciences/` should compare science museums and selection criteria.
- `/visiter/musees-en-famille/` should select venues based on verified family criteria.
- `/musees/paris/` owns city-level comparison.

Cannibalization risk: LOW.

## 9. Entities

- Musée de l’Homme
- Muséum national d’Histoire naturelle
- Galerie de l’Homme
- permanent questions: `Qui sommes-nous ?`, `D'où venons-nous ?`, `Où allons-nous ?`
- research centre / museum-laboratory relation
- specific collection objects only when current-display evidence is sufficient

## 10. Freshness

VOLATILE:
- tariffs;
- temporary exhibitions;
- opening exceptions;
- activity dates.

SEMI_STABLE:
- audioguide availability/content count;
- accessibility and visitor services;
- gallery routing.

STABLE / long-lived:
- three-question model;
- broad disciplinary identity;
- Trocadéro location.

Checked 2026-09-14 against official MNHN / Musée de l’Homme pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No independent dwell-time or crowd dataset.
- Specific fossil/object visibility should be rechecked if copy shifts from “collection/featured by the museum” to “currently displayed”.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current practical data: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning finding: NO BLOCKER for the three-question block because the number three is intrinsic to the official permanent-gallery concept.

**Gate: READY_FOR_BRIEF — reconfirmed.**
