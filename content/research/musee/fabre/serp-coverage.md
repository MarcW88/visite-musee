# SERP coverage — musee/fabre

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Fabre`.

Variants:
- `visiter musée Fabre`
- `musée Fabre horaires`
- `musée Fabre tarifs`
- `que voir musée Fabre`
- `musée Fabre Courbet Bruyas`
- `musée Fabre Soulages`
- `Hôtel Sabatier musée Fabre`

Dominant intent: exact entity + understand the breadth of the permanent collection + identify the museum’s distinctive donor/artist threads + practical planning.

The page should help a visitor understand why Fabre is more than a generic regional fine-arts museum: old masters, the Bruyas/Courbet nineteenth-century nucleus, Montpellier-linked artists and the Soulages donation form a readable progression.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.museefabre.fr/nos-collections` | official collection hub | old masters, modernity, contemporary art, named room/collection structure |
| `https://museefabre.fr/index.php/decouverte-des-collections` | official collection overview | three major visit families: old masters, modern/contemporary, Hôtel Sabatier arts décoratifs |
| `https://museefabre.fr/index.php/decouverte-des-collections/modernite-et-art-contemporain` | official collection page | Bruyas, nineteenth century, Soulages and modern/contemporary continuity |
| official Bruyas collection page | official collection/history | donor role and direct artist relationships |
| Routard Musée Fabre page | secondary travel guide | practical result format and broad “what to see” expectations |

Observed result pattern: the strongest content angle is not a flat chronology alone but the museum’s donor-driven identity, particularly Bruyas and Soulages, plus the separate Hôtel Sabatier arts-decorative component.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export available.

## 3. Recurring needs / questions

1. What makes Fabre distinctive among fine-arts museums?
2. How broad is the chronological range?
3. Why are Bruyas and Courbet important here?
4. What is the Soulages collection/donation?
5. Is Hôtel Sabatier part of the museum visit?
6. What are the current hours/prices/free first Sunday conditions?
7. Which current displays can be assumed versus collection holdings only?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Fine-arts breadth from old masters to contemporary | MUST | COVERED | official collection hub |
| Bruyas/Courbet as distinctive nineteenth-century thread | MUST | COVERED | official Bruyas/collections pages |
| Soulages donation as contemporary endpoint | MUST | COVERED | official modern/contemporary pages |
| Current hours | MUST | COVERED | official site header/practical info |
| Current ticket prices | MUST | COVERED | current municipal/museum practical source |
| First-Sunday permanent-collection free access | MUST | COVERED | current practical source |
| Hôtel Sabatier relationship | SHOULD | MISSING/PARTIAL | official collection overview treats it as arts-decorative department; page should surface it if practical/ticket conditions are clear |
| Current artwork display claims | MUST | COVERED BY CAUTION | examples are tied to official collection route; avoid guaranteeing display when uncertain |
| Structural narrative | SHOULD | PARTIAL | current page repeats a three-card chronology after a strong Bruyas section; donor/collection relationships can carry a more natural structure |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Fabre when you want a broad European painting museum whose identity is made unusually legible by major donors and local relationships: Bruyas anchors the nineteenth century around Delacroix/Courbet, while the Soulages donation extends the story into contemporary painting.**

## 6. Information gain

Useful gain:
- explain the role of collectors/donors rather than listing famous artists;
- connect Bruyas, Courbet and Montpellier historically;
- show why Soulages belongs to the museum’s story rather than appearing as an isolated contemporary appendix;
- make Hôtel Sabatier visible as a separate arts-decorative component when relevant;
- avoid generic “Renaissance to today” copy as the only differentiator.

## 7. GEO / citation opportunities

Atomic facts:
- official permanent collection spans old masters through modern/contemporary art;
- Alfred Bruyas donated major nineteenth-century holdings, including a strong Courbet/Delacroix context;
- Pierre and Colette Soulages made a major 2005 donation;
- Hôtel de Cabrières-Sabatier d’Espeyran houses the museum’s decorative-arts department;
- current standard hours are 11:00–18:00 Tuesday–Sunday;
- current first-Sunday permanent-collection free access is published by the museum/municipality.

## 8. Internal overlap / ownership

- `/musee/fabre/` owns the exact museum entity and donor/collection story.
- `/musees/montpellier/` should compare cultural venues in the city.
- `/themes/musees-beaux-arts/` should compare broad fine-arts museums.
- `/visiter/musees-gratuits/` can own first-Sunday/free-selection logic, not Fabre entity details.
- A future Soulages thematic page should not replace museum ownership.

Cannibalization risk: LOW.

## 9. Entities

- Musée Fabre
- François-Xavier Fabre
- Alfred Bruyas
- Gustave Courbet / Eugène Delacroix where directly tied to Bruyas holdings
- Pierre Soulages / Colette Soulages donation
- Hôtel de Cabrières-Sabatier d’Espeyran
- Montpellier Métropole / institutional ownership context only where useful

## 10. Freshness

VOLATILE:
- prices;
- exhibition programme;
- first-Sunday conditions if policy changes;
- temporary display / gallery closures.

SEMI_STABLE:
- Hôtel Sabatier access/ticket relationship;
- permanent route and services.

STABLE / long-lived:
- Bruyas and Soulages donation history;
- broad collection chronology;
- museum identity in Montpellier.

Checked 2026-09-14 against official Musée Fabre pages and current secondary guide result.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- Exact current ticket relationship with Hôtel Sabatier should be rechecked if expanded in copy.
- No independent duration/crowd evidence.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current practical data: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: MODERATE — donor relationships should replace the generic three-card chronology where possible.

**Gate: READY_FOR_BRIEF — reconfirmed.**
