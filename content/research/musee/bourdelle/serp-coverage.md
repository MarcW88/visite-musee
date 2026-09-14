# SERP coverage — musee/bourdelle

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Bourdelle`.

Variants:
- `visiter musée Bourdelle`
- `musée Bourdelle gratuit`
- `musée Bourdelle horaires`
- `atelier Bourdelle Paris`
- `que voir musée Bourdelle`
- `musée Bourdelle jardin`

Dominant intent: exact entity + understand the preserved artist-studio experience + free practical planning.

The user decision is whether seeing Bourdelle’s work in the historic place where he worked adds enough context to choose this museum over a more general sculpture/fine-art museum.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.bourdelle.paris.fr/visiter` | official visit hub | hours, free permanent access, accessibility |
| `https://www.bourdelle.paris.fr/visiter/preparer-sa-visite/informations-pratiques` | official practical page | current temporary entrance change, tariffs, baggage/security, opening details |
| `https://www.bourdelle.paris.fr/visiter/preparer-sa-visite/plan-guide` | official plan/space page | historic studios, hall des plâtres, Portzamparc wing, apartment and three gardens |
| official atelier-history page | official heritage page | confirms the studio’s historic continuity and why place matters |

Observed result pattern: official pages are unusually strong on spaces. The content opportunity is therefore spatial rather than “three reasons”: atelier, apartment, hall, extensions and gardens can carry the page structure naturally.

SERP-feature inventory: `DATA_GAP`; no live feature export available.

## 3. Recurring needs / questions

1. Is the museum really in Bourdelle’s former studio?
2. What spaces are preserved?
3. Is the permanent collection free?
4. Are the gardens part of the visit?
5. How accessible is the museum?
6. Are there temporary access changes in 2026?
7. What kinds of sculptures / materials can I see?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Historic studio as core proposition | MUST | COVERED | official atelier/plan sources |
| Sculpture + process/material context | MUST | COVERED | current copy distinguishes plasters/bronzes/process |
| Free permanent access | MUST | COVERED | official practical page |
| Current hours | MUST | COVERED | official page |
| Accessibility | SHOULD | COVERED | official practical page |
| Temporary entrance at no. 16 during works | MUST | MISSING | add as current practical notice because it can change arrival |
| Spatial diversity: atelier/apartment/hall/gardens/extensions | SHOULD | PARTIAL | current three-card grid underuses official spatial structure; replace with place-led route |
| Temporary exhibition pricing | OPTIONAL | PARTIAL | current page correctly says separate conditions; exact price only needed when useful/current |

No central content MUST remains missing, but the temporary entrance change is a practical MUST for the 2026 version.

## 5. Visit proposition

**Choose Bourdelle when the place of creation matters as much as the sculptures: the historic studios, apartment, plaster hall and gardens let visitors read scale, process and working environment together.**

## 6. Information gain

Useful gain:
- explain why this is not just a monographic sculpture gallery;
- structure the visit through real spaces rather than generic “reasons”;
- surface the current temporary entrance at 16 rue Antoine-Bourdelle while reception works continue;
- retain free permanent access;
- avoid simulating personal impressions of atmosphere/light.

## 7. GEO / citation opportunities

Atomic facts:
- permanent collections are free and normally do not require reservation for individuals;
- museum open Tuesday–Sunday 10:00–18:00, last entry 17:15 under current official information;
- current reception works redirect access to 16 rue Antoine-Bourdelle;
- site includes historic studios, apartment, plaster hall, later extensions and three sculpture gardens;
- museum states accessibility for people with reduced mobility.

## 8. Internal overlap / ownership

- `/musee/bourdelle/` owns the exact artist-museum entity and studio/site experience.
- `/themes/musees-beaux-arts/` may classify/select but should not duplicate atelier history or practical data.
- `/visiter/musees-gratuits/` can use the permanent-free criterion.
- `/musees/paris/` should compare Bourdelle with other artist houses/museums.

Cannibalization risk: LOW.

## 9. Entities

- Antoine Bourdelle
- Musée Bourdelle
- historic studio / impasse du Maine context
- hall des plâtres
- apartment
- gardens
- Christian de Portzamparc extension where used

Specific sculptures should only be described as currently displayed if verified.

## 10. Freshness

VOLATILE:
- temporary entrance/work access;
- temporary exhibition prices/programme;
- exceptional closures.

SEMI_STABLE:
- accessibility services;
- visitor equipment;
- route/room availability.

STABLE / long-lived:
- studio history;
- spatial organisation and architectural additions;
- monographic Bourdelle identity.

Checked 2026-09-14 against official Bourdelle pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No independent crowd or duration data.
- Current reception works require future recheck before the access notice can be removed.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED with one practical update required.
Current practical source: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: HIGH enough to fix — replace generic three-card “scale” block with a space-led route.

**Gate: READY_FOR_BRIEF — reconfirmed.**
