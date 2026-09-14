# SERP coverage — musee/musee-grevin

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Grévin`.

Variants:
- `visiter musée Grévin`
- `musée Grévin tarif`
- `musée Grévin horaires`
- `que voir au musée Grévin`
- `musée Grévin enfant`
- `Palais des Mirages`

Dominant intent: exact entity + leisure/family decision + tickets/hours.

The user is not choosing between comparable art collections. The real task is to understand whether Grévin’s wax figures, immersive sets and heritage spectacle match the desired type of outing, and what the variable ticket/calendar conditions are.

Maturity: choosing / booking an attraction-like museum visit.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.grevin-paris.com/nos-offres` | official ticket page | dynamic dated pricing, undated tickets, age bands, current One Piece special product |
| `https://www.grevin-paris.com/preparez-votre-visite` | official practical page | calendar varies by date, access and visitor preparation |
| Grévin official visitor/adult/heritage pages | official experience/heritage | >250 personalities, historic décor, Palais des Mirages |
| Routard Musée Grévin guide | secondary travel guide | result format focuses on what visitors actually encounter: scenes, historical figures, celebrities, immersive experiences |

Observed result pattern: a mix of official commercial/practical pages and travel-guide “what to see” pages. The useful page must bridge the two without pretending Grévin is a conventional fine-art museum.

SERP-feature inventory: `DATA_GAP`; no reliable feature export was available.

## 3. Recurring needs / questions

1. What is Grévin actually like?
2. Is it mainly wax statues, or is there more to the experience?
3. Is it suited to children/families/groups?
4. Which current personalities / themed zones matter?
5. What is the current ticket price?
6. Why do prices vary by date?
7. What are the hours on my exact date?
8. Is the Palais des Mirages part of the visit?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Wax + immersive visit proposition | MUST | COVERED | clearly distinguishes Grévin from an art museum |
| >250 personalities | MUST | COVERED | official site |
| Historic décor / Palais des Mirages | MUST | COVERED | official heritage/visitor content |
| Current ticket model | MUST | COVERED | dated from 21 €, undated 28 €, child bands; official offers page |
| Dynamic pricing caveat | MUST | COVERED | official page explicitly describes variable pricing |
| Daily hours vary | MUST | COVERED | current page tells user to verify date-specific calendar |
| Address/access | MUST | COVERED | official visit page |
| Current zones / personalities | SHOULD | PARTIAL | page avoids stale celebrity list; good choice. Specific zone can be added only when checked/current |
| Family fit | SHOULD | COVERED | qualitative fit explained without inventing experience |
| “Art originals” implication | MUST | COVERED BY EXCLUSION | page explicitly frames wax/scenography rather than original art collection |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Grévin for a staged, photographic and pop-cultural outing built around wax figures, immersive scenes and a historic entertainment venue — not for a conventional collection of original artworks.**

This helps users self-select quickly and reduces mismatch with people searching for art/history collections.

## 6. Information gain

Useful gain versus generic attraction copy:
- say what Grévin is not;
- treat photography/interaction as part of the intended experience;
- explain that pricing is dynamic rather than presenting one misleading “ticket price”;
- preserve the historic Palais des Mirages and Belle Époque context;
- avoid fragile celebrity-name stuffing that becomes stale quickly.

## 7. GEO / citation opportunities

Atomic facts that can be extracted safely:
- more than 250 personalities announced by Grévin;
- dated adult ticket advertised from 21 € for the current pricing period;
- undated adult ticket 28 €;
- under-5s free on the current ticket rules;
- opening hours vary by date;
- Palais des Mirages is a historic component of the visit.

Prices and offers must carry current source/date because they are highly volatile.

## 8. Internal overlap / ownership

- `/musee/musee-grevin/` owns the exact Grévin entity and experience decision.
- `/themes/musees-insolites/` should compare unusual museum formats, not repeat Grévin practical information.
- `/visiter/musees-en-famille/` should select family-suited venues according to criteria; Grévin can be one candidate.
- `/musees/paris/` should compare Grévin with conventional art/science/history museums.

Cannibalization risk: LOW.

## 9. Entities

- Musée Grévin
- Palais des Mirages
- wax-figure / staged-scene experience
- current themed zones only when current official source is available

Celebrity rosters are `VOLATILE`; do not treat any named figure as permanently present without checking.

## 10. Freshness

VOLATILE:
- ticket prices;
- dynamic offers;
- daily hours;
- themed zones / celebrity roster;
- special-ticket products.

SEMI_STABLE:
- family conditions;
- visitor services;
- access.

STABLE:
- broad wax-museum identity;
- historic entertainment positioning;
- Palais des Mirages heritage role.

Checked 2026-09-14 against official Grévin ticket/visit pages; secondary guide inspected for result-format comparison.

## 11. Data gaps

- No GSC/analytics/backlink data.
- No reliable live SERP-feature export.
- No independent satisfaction/crowd data; no ratings or “best time” claims.
- Current One Piece offer is intentionally not made central because it is campaign-specific and would create rapid content decay.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current commercial/practical facts: VERIFIED 2026-09-14.
Cannibalization: CONTROLLED.
Structural-cloning issue: MODERATE; the heritage section can keep a chronology, but should not exist merely to satisfy a three-card pattern.

**Gate: READY_FOR_BRIEF — reconfirmed.**
