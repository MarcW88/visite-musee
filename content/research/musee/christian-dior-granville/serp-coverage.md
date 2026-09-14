# SERP coverage — musee/christian-dior-granville

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Christian Dior Granville`.

Variants:
- `visiter musée Christian Dior`
- `musée Dior Granville horaires 2026`
- `musée Dior Granville tarif`
- `exposition Dior Granville 2026`
- `Villa Les Rhumbs`
- `jardin Christian Dior Granville`
- `musée Dior accessibilité`

Dominant intent: exact entity + current annual exhibition + seasonal opening / reservation planning.

The key user task is highly date-sensitive: the museum is seasonal and its public content changes every year through a renewed temporary exhibition in the historic family villa. The garden is a distinct year-round/free component and accessibility constraints materially affect visit feasibility.

Maturity: deciding / booking.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.musee-dior-granville.com/` | official homepage | 2026 season, annual exhibition model, garden, booking |
| `https://www.musee-dior-granville.com/preparer-visite/` | official practical page | hours by month, prices, reservation, accessibility, free days |
| `https://www.musee-dior-granville.com/musee/expositions/` | official exhibition-history/current page | one fully renewed annual temporary exhibition is central to museum model |
| `https://www.musee-dior-granville.com/programme/` | official agenda | current September 2026 activities and exhibition-linked programming |
| Ville de Granville event page for 2026 guided visit | institutional secondary | confirms current exhibition context and programming |

Observed result pattern: official results are programme-first and season-first. An evergreen “house museum” framing would be misleading if it did not explain the annual exhibition model.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export available.

## 3. Recurring needs / questions

1. Is the museum open on my date?
2. What is the 2026 exhibition?
3. Is the villa a preserved house interior or an exhibition venue?
4. Do I need to reserve?
5. How much is admission?
6. Is the garden separate / free / open year-round?
7. Is the villa accessible to PMR or pushchairs?
8. Are there free days in season?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Annual exhibition model | MUST | COVERED | official exhibition page |
| 2026 exhibition title/theme | MUST | COVERED | official current programme |
| 2026 seasonal opening dates | MUST | COVERED | official practical page |
| Current monthly hours | MUST | COVERED | official practical page |
| Booking strongly recommended | MUST | COVERED | official page, low-capacity context |
| Current prices / free days | MUST | COVERED | official practical page |
| Villa inaccessible to PMR/pushchairs | MUST | COVERED | critical visit constraint |
| Garden separate, free, year-round | MUST | COVERED | official page |
| Villa/house history | SHOULD | COVERED | supports context without implying permanent domestic reconstruction |
| Structural distinction exhibition / villa / garden | SHOULD | PARTIAL | current three-card layout is serviceable but should become a more natural exhibition-first + villa/garden split |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Christian Dior Museum in Granville for the year’s exhibition interpreted through Dior’s childhood villa and garden — not for a fixed permanent house-museum display. Check the season, reservation and stair-only accessibility before planning the trip.**

## 6. Information gain

Useful gain:
- explain the annual-renewal model clearly;
- put the current exhibition and opening season ahead of generic fashion biography;
- distinguish villa from garden operationally;
- surface the PMR/pushchair blocker prominently;
- avoid treating the exhibition as a permanent museum attribute after 1 November 2026.

## 7. GEO / citation opportunities

Atomic facts:
- 2026 museum season runs 4 April–1 November;
- 2026 exhibition is `Christian Dior, à la recherche des couleurs de l’enfance`;
- online booking strongly recommended;
- current full/reduced prices 10 € / 7 €;
- garden is free and open year-round on separate hours;
- villa’s historic architecture makes its three levels inaccessible to PMR and pushchairs;
- annual exhibitions are renewed each year.

## 8. Internal overlap / ownership

- `/musee/christian-dior-granville/` owns the institution, annual-exhibition model, villa/garden and practical constraints.
- A future exhibition-specific page should own detailed curatorial content for a specific annual exhibition if created.
- `/themes/musees-mode/` should compare fashion museums/venues.
- `/regions/normandie/` should select regional visits.
- `/expositions/` should compare programmes, not duplicate the museum’s stable operating model.

Cannibalization risk: LOW if annual exhibition detail stays bounded.

## 9. Entities

- Musée Christian Dior
- Villa Les Rhumbs
- Christian Dior
- Jardin Christian Dior
- 2026 exhibition as a temporary entity with start/end dates
- annual temporary-exhibition model

## 10. Freshness

VOLATILE:
- annual exhibition;
- seasonal opening dates;
- monthly hours;
- tariffs/free days;
- booking conditions;
- agenda.

SEMI_STABLE:
- accessibility constraint (recheck if building works change it);
- garden hours/policy.

STABLE / long-lived:
- villa childhood association;
- museum’s annual-exhibition model.

Checked 2026-09-14 against official museum pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No independent crowd dataset; the museum itself warns about low capacity, which is enough to justify reservation guidance.
- Content needs a scheduled recheck after 1 November 2026 because the season ends and the 2026 exhibition ceases to be current.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current season/exhibition/accessibility: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: MODERATE — the page should read exhibition-first, then villa/garden, rather than defaulting to a generic three-reason grid.

**Gate: READY_FOR_BRIEF — reconfirmed.**
