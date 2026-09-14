# SERP coverage — musee/musee-confluences

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée des Confluences`.

Variants:
- `visiter musée des Confluences`
- `musée des Confluences horaires`
- `musée des Confluences tarifs`
- `que voir musée des Confluences`
- `musée des Confluences famille`
- `musée des Confluences expositions permanentes`

Dominant intent: exact entity + understand the unusual interdisciplinary permanent route + practical planning.

The visitor decision is whether a museum mixing natural sciences, anthropology, societies and beliefs around broad questions is preferable to a discipline-specific science/history museum.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://museedesconfluences.fr/fr/bienvenue-au-musee` | official museum overview | permanent/temporary offer, architecture, free-access public spaces, mediation |
| `https://museedesconfluences.fr/fr/preparer-ma-visite/confort-de-visite` | official visitor-services page | wheelchairs, pushchairs, sensory tools, FALC, family resources, flash visits |
| `https://museedesconfluences.fr/fr/preparer-ma-visite/comment-venir` | official access page | current hours, transport changes and access |
| official tariffs / visit pages on `museedesconfluences.fr` | official practical | current ticket and calendar conditions |

Observed result pattern: official result set is task-separated and rich in mediation/accessibility. The opportunity is not to write a generic “science museum” page, but to explain the four-question architecture and surface only the practical services that materially help a visitor decide.

SERP-feature inventory: `DATA_GAP`; no live feature export was available.

## 3. Recurring needs / questions

1. What kind of museum is Confluences?
2. Is it natural history, anthropology, science or all of these?
3. What are the permanent rooms?
4. Is the building part of the experience?
5. What changes in autumn 2026?
6. What are the hours / prices?
7. Is it family-friendly / accessible / suitable for sensory needs?
8. Are temporary exhibitions included?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Interdisciplinary visit proposition | MUST | COVERED | clearly explains cross-disciplinary logic |
| Four permanent spaces / questions | MUST | PARTIAL | names are present in prose but structure is then reduced to a generic three-card grid; restructure around the four spaces |
| Current closure of `Sociétés` from 22 Sep 2026 | MUST | COVERED | volatile operational information needs dated source |
| Hours / holiday calendar | MUST | COVERED | official access page |
| Ticket price / inclusions | MUST | COVERED | official practical pages |
| Architecture / confluence location | SHOULD | COVERED | supports museum identity |
| Family / sensory comfort tools | SHOULD | PARTIAL | current page links to family but omits distinctive official sensory aids; useful information gain candidate |
| Temporary exhibitions included in day ticket | SHOULD | COVERED | page states this |
| Current programme detail | OPTIONAL | MISSING | belongs primarily to exhibition/agenda surfaces |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Confluences if you prefer a museum organised around large human/scientific questions rather than around a single discipline: origins, living species, societies and beliefs are deliberately compared across objects and fields.**

This proposition should be embodied in the structure itself: four permanent questions, not an arbitrary three-card editorial pattern.

## 6. Information gain

Useful gain versus generic city guides:
- explain why objects from different disciplines are placed together;
- map the visit to the four permanent questions;
- warn about the 2026-2027 closure/reworking of the `Sociétés` space;
- surface distinctive visitor-comfort tools (sensory aids, FALC, pushchairs/wheelchairs) where useful;
- distinguish free public architectural spaces from ticketed exhibitions.

## 7. GEO / citation opportunities

Atomic extractable facts:
- museum located at the confluence of Rhône and Saône;
- permanent route built around four major thematic spaces/questions;
- first-Thursday late opening published by the museum;
- day ticket includes permanent and temporary exhibitions;
- official visitor services include sensory-comfort tools, wheelchairs and pushchairs on request;
- `Sociétés, le théâtre des Hommes` closure announced from 2026-09-22 with replacement route planned for late 2027.

No artificial FAQ.

## 8. Internal overlap / ownership

- `/musee/musee-confluences/` owns the exact institution and its interdisciplinary visit proposition.
- `/themes/musees-sciences/` should compare science-oriented museums and explain selection criteria, not reproduce Confluences’ practical data.
- `/musees/lyon/` should compare Lyon venues.
- `/visiter/musees-en-famille/` can use verified family/comfort criteria; it should not own the museum entity query.
- `/expositions/lyon/` should own temporary programme comparison.

Cannibalization risk: LOW.

## 9. Entities

- Musée des Confluences
- Rhône / Saône / Lyon Confluence
- permanent spaces: `Origines`, `Espèces`, `Sociétés`, `Éternités`
- Coop Himmelb(l)au as architect only where sourced/used
- temporary exhibition entities only when needed for current decision

## 10. Freshness

VOLATILE:
- hours / holiday openings;
- prices;
- temporary exhibitions;
- transport disruptions;
- `Sociétés` closure/reopening timeline.

SEMI_STABLE:
- sensory / family / accessibility services;
- mediation formats;
- visitor equipment.

STABLE:
- four-question curatorial model (subject to future permanent-route redesign, therefore still periodically review);
- location at the confluence;
- architectural authorship.

Checked 2026-09-14 against official pages.

## 11. Data gaps

- No GSC / analytics / backlinks.
- No reliable live SERP-feature export.
- No evidence-based dwell-time or crowd model; do not invent a recommended duration or best hour.
- Future replacement of `Sociétés` after late 2027 should be rechecked before that date.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current 2026 operational change: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: HIGH enough to fix — page should expose four permanent questions directly rather than compressing them into three generic cards.

**Gate: READY_FOR_BRIEF — reconfirmed.**
