# SERP coverage — musee/cernuschi

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Cernuschi`.

Variants:
- `visiter musée Cernuschi`
- `musée Cernuschi gratuit`
- `musée Cernuschi horaires`
- `collections Cernuschi`
- `arts asiatiques Paris musée`
- `musée Cernuschi Chine Japon`
- `combien de temps musée Cernuschi`

Dominant intent: exact entity + focused Asian-art discovery + free/practical planning.

The useful decision is whether Cernuschi offers the right scale and collection focus for someone who wants East Asian art without committing to a much larger encyclopedic institution.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.cernuschi.paris.fr/fr/preparer-sa-visite` | official visit hub | free permanent access, reservation rules, visitor practicals |
| `https://www.cernuschi.paris.fr/fr/preparer-sa-visite/aide-la-visite` | official visitor-tool page | two official self-guided routes: about 45 min and about 1h30 |
| `https://www.cernuschi.paris.fr/fr/collections` | official collections hub | China/Japan core plus Korea/Vietnam, collection scope |
| official tariff page on `cernuschi.paris.fr` | official practical | permanent vs temporary exhibition pricing distinction |

Observed result pattern: official pages already separate permanent collections, temporary exhibitions and self-guided visit tools. The page can add value by helping users understand the collection’s focus and scale, then surface the official route options rather than inventing its own visit duration.

SERP-feature inventory: `DATA_GAP`; no live feature export available.

## 3. Recurring needs / questions

1. What kind of Asian art does Cernuschi actually cover?
2. Is the permanent collection free?
3. Do I need to book?
4. How large / manageable is the museum?
5. Can I follow a shorter route?
6. Are China and Japan the only collections?
7. Are temporary exhibitions also free?
8. What are the hours?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Focused Asian-art visit proposition | MUST | COVERED | current page clearly positions a more concentrated visit |
| China as core collection | MUST | COVERED | official collections |
| Japan as major collection | MUST | COVERED | official collections |
| Korea and Vietnam context | MUST | PARTIAL | currently compressed into one third card; should be presented as separate collection areas where useful |
| Free permanent collections | MUST | COVERED | official visit/tariff page |
| Temporary exhibition paid distinction | MUST | COVERED | official tariff page |
| Current hours | MUST | COVERED | official visit information |
| Official route durations | SHOULD | MISSING | add official 45-min / ~1h30 route options, explicitly sourced, not as an invented site recommendation |
| Reservation distinction | SHOULD | COVERED | permanent individual access free/no reservation subject to capacity; temporary exhibitions differ |
| Current-display guarantee | MUST | COVERED BY EXCLUSION | no claim that every collection object is currently shown |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Cernuschi for a relatively focused introduction to East Asian art, especially Chinese and Japanese collections, with free access to the permanent route and official short/long self-guided options.**

The proposition should not imply that “Asia” is a single undifferentiated subject; the four geographic collection areas should remain legible.

## 6. Information gain

Useful gain versus generic Paris-museum listings:
- explain collection composition instead of saying only “Asian art”;
- preserve China, Japan, Korea and Vietnam as distinct collection areas;
- surface free permanent access;
- use the museum’s own 45-minute / ~1h30 route options instead of inventing a duration;
- clarify that temporary exhibitions have separate ticketing.

## 7. GEO / citation opportunities

Atomic facts:
- permanent collections accessible free of charge under current individual-visit rules;
- official mobile guide proposes a roughly 45-minute highlights route and a roughly 1h30 full permanent route;
- collection strengths include China and Japan, with Korean and Vietnamese collections also represented;
- temporary exhibitions use a separate paid ticket model;
- museum located avenue Velasquez in Paris 8e.

All practical claims should retain current source/date.

## 8. Internal overlap / ownership

- `/musee/cernuschi/` owns the exact museum entity and collection/visit proposition.
- `/themes/musees-arts-decoratifs/` should not become a substitute owner just because objects/craft media overlap.
- A future dedicated Asian-art theme could compare institutions; it should not duplicate Cernuschi practical facts.
- `/musees/paris/` owns city-level selection.
- `/visiter/musees-gratuits/` owns budget/free-entry selection and can cite Cernuschi as a qualifying museum.

Cannibalization risk: LOW.

## 9. Entities

- Musée Cernuschi
- Henri Cernuschi where historical context serves the collection story
- Chinese collection
- Japanese collection
- Korean collection
- Vietnamese collection
- official mobile/application visit routes

Specific objects should only be stated as displayed when current-display evidence exists.

## 10. Freshness

VOLATILE:
- temporary exhibition ticket prices;
- exhibition programme;
- opening exceptions;
- reservation rules.

SEMI_STABLE:
- permanent-route access conditions;
- mobile guide / route durations;
- visitor services.

STABLE / long-lived:
- broad collection geography and historical identity.

Checked 2026-09-14 against official Cernuschi pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- Official route durations are available and may be cited; no additional editorial “ideal duration” should be invented.
- Current temporary exhibition details are intentionally not central to the museum page.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current practical data: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: HIGH enough to fix — page currently announces four collection areas but visually compresses them into three cards.

**Gate: READY_FOR_BRIEF — reconfirmed.**
