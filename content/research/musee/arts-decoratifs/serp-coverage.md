# SERP coverage — musee/arts-decoratifs

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée des Arts Décoratifs Paris`.

Variants:
- `visiter musée des Arts Décoratifs`
- `musée des Arts Décoratifs tarifs`
- `musée des Arts Décoratifs horaires`
- `collections MAD Paris`
- `musée design mobilier mode Paris`
- `que voir musée des Arts Décoratifs`

Dominant intent: exact entity + understand the unusually broad object/design collection + practical planning.

The user decision is whether this museum fits an interest in how objects are designed, used and styled across periods — furniture, design, fashion, jewellery, glass, graphic design and interiors — rather than a painting-led fine-arts visit.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://madparis.fr/Tarifs-et-gratuites` | official practical page surfaced in search | current 15 € ticket, under-26 free policy, combined ticket information |
| `https://collections.madparis.fr/` | official collections portal | collection categories from medieval objects to contemporary design, fashion, jewellery, graphics, toys, Asian/Islamic arts |
| official Musée des Arts Décoratifs page on `madparis.fr` | official institutional | permanent collections, exhibition/collection visit context |
| current MAD group/tariff pages | official practical | confirms ticket and visit products current in 2026 |

Observed result pattern: official search results split between the museum page, tariffs and a large metadata-rich collections portal. The strongest editorial opportunity is to help the visitor choose a collection lens instead of reproducing a catalogue.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export available.

## 3. Recurring needs / questions

1. What counts as “arts décoratifs” here?
2. Is this mainly design, furniture, fashion or all of them?
3. Are all these collections permanently visible?
4. How broad is the chronological range?
5. What are current prices and under-26 conditions?
6. What is included in the ticket?
7. Which collections rotate because of fragility?
8. Is this the right museum for someone interested in objects more than paintings?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Object/design-led visit proposition | MUST | COVERED | clear distinction from fine-arts museum |
| Breadth of media/categories | MUST | COVERED | official collections portal |
| Medieval-to-current chronological breadth | MUST | COVERED | official portal |
| Not all collections permanently visible | MUST | COVERED | current page correctly warns about rotations, especially fragile media |
| Current full price / under-26 free | MUST | COVERED | official tariff result, checked 2026-09-14 |
| Current hours / Thursday late-opening nuance | MUST | COVERED | current practical data in page; recheck before future indexation |
| Reservation/weekend advice | SHOULD | COVERED | official practical source used in current page |
| Fashion/jewellery/graphics visibility caveat | SHOULD | COVERED | useful to prevent false expectations |
| Collection structure | SHOULD | PARTIAL | current three-card structure compresses a much richer set of collection lenses; should become a flexible “choose your lens” module |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Musée des Arts Décoratifs when you want to read social and aesthetic change through objects and designed environments — furniture, interiors, fashion, jewellery, glass, toys and graphic design — while accepting that some fragile collections appear only in rotations or exhibitions.**

## 6. Information gain

Useful gain:
- explain the museum through use/design rather than a flat list of departments;
- make rotation/fragility explicit so users do not assume fashion or graphic works are always visible;
- let visitors choose a collection lens before the visit;
- keep practical ticket information distinct from the much larger online collections portal;
- avoid conflating Musée des Arts Décoratifs with Musée Nissim de Camondo despite shared institutional ecosystem and combined-ticket products.

## 7. GEO / citation opportunities

Atomic facts:
- collections span Middle Ages to today;
- official portal covers decorative arts/design, fashion/textile, jewellery, drawings/photos/wallpaper, advertising/graphic design, toys, Asian and Islamic arts;
- current museum ticket is 15 € and free for under-26 visitors under current official rules;
- some fragile collection categories rotate rather than being permanently displayed;
- museum located rue de Rivoli in Paris 1er.

## 8. Internal overlap / ownership

- `/musee/arts-decoratifs/` owns the exact museum entity and visit proposition.
- `/themes/musees-arts-decoratifs/` should compare institutions by object/design focus, not reproduce MAD practical detail.
- `/themes/musees-mode/` may include MAD as one venue but should not imply its fashion holdings are always visible.
- `/musees/paris/` owns city comparison.
- A future Nissim de Camondo page must be a separate entity owner despite institutional/ticket links.

Cannibalization risk: LOW.

## 9. Entities

- Musée des Arts Décoratifs / MAD Paris
- collection families actually used in copy
- Musée Nissim de Camondo as related but separate institution
- specific designers/artists only where current display is verified or the claim concerns collection holdings/history

## 10. Freshness

VOLATILE:
- tariffs;
- temporary exhibitions;
- late-opening conditions;
- reservation advice;
- current rotations / visible galleries.

SEMI_STABLE:
- visitor services;
- ticket bundling with Camondo;
- collection-route availability.

STABLE / long-lived:
- broad object/design identity;
- collection categories;
- historical chronological span.

Checked 2026-09-14 using current official search results and the official collections portal. Direct page fetching was blocked by the site on some URLs, so current tariff facts are grounded in indexed official snippets/results rather than an invented value.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- Some `madparis.fr` pages returned access restrictions to direct fetch; official indexed results were available for tariff verification.
- No universal recommended duration.
- Current display status of fashion/textile/graphic holdings must be rechecked if the page names a specific object or gallery as visible.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current ticket facts: VERIFIED from official indexed result.
Display-rotation caveat: COVERED.
Cannibalization: CONTROLLED.
Structural-cloning issue: HIGH enough to fix — replace the generic three-card period/media block with a collection-lens selector that can support more than three categories.

**Gate: READY_FOR_BRIEF — reconfirmed.**
