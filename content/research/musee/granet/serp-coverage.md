# SERP coverage — musee/granet

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée Granet`.

Variants:
- `visiter musée Granet`
- `musée Granet horaires`
- `musée Granet tarifs`
- `Granet XXe`
- `musée Granet Cézanne`
- `que voir musée Granet`
- `musée Granet deux sites`

Dominant intent: exact entity + understand the two-site structure + choose between historical/beaux-arts and twentieth-century collections + practical planning.

The primary friction is architectural/organizational: visitors can easily assume “Musée Granet” and “Granet XXe” are one continuous visit under one ticket. The page should solve that confusion first.

Maturity: choosing / planning / avoiding ticketing mistake.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| official Musée Granet hours/tariffs page | official practical | current seasonal hours, separate site/ticket rules |
| `https://www.museegranet-aixenprovence.fr/votre-visite/les-visites-guidees` | official programme/visit page | current permanent-collection routes and 2026 programme |
| official Granet XXe / Jean Planque page | official collection/site page | second-site identity and collection scope |
| `https://www.aix.fr/incontournables/musee-granet` | current city guide / secondary institutional | clearly surfaces two addresses, seasonal hours and site distinction |

Observed result pattern: both official and city-guide results emphasize the split between the main museum and Granet XXe. This is the strongest information architecture signal and should drive the page structure.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export was available.

## 3. Recurring needs / questions

1. Are Musée Granet and Granet XXe in the same place?
2. Does one ticket cover both?
3. Where do I go for Cézanne / old masters / archaeology?
4. Where do I go for Jean Planque / twentieth-century art?
5. What are the current seasonal hours?
6. Which site is accessible and via which entrance?
7. What is currently on view versus simply held in the collections?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Two-site distinction | MUST | COVERED | currently explained early |
| Separate ticket logic | MUST | COVERED | official tariff/source |
| Main-site collection identity | MUST | COVERED | archaeology, old masters, Granet/Ingres/Cézanne context |
| Granet XXe / Jean Planque identity | MUST | COVERED | official collection/site page |
| Seasonal hour change in Nov 2026 | MUST | COVERED | current official practical info |
| Current price bands | MUST | COVERED | official practical source |
| Cézanne role without monographic overclaim | SHOULD | COVERED | page frames him within broader museum |
| Exact current-display claims | MUST | COVERED BY CAUTION | page avoids guaranteeing individual works |
| Accessibility / separate entrances | SHOULD | PARTIAL | useful to add where it changes site choice |
| Structural representation of two sites | MUST | PARTIAL | current page explains two sites, then falls back to a three-card grid; should become an explicit two-site comparison |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose Granet by first choosing the site: the main museum for archaeology, old masters and Aix/Cézanne context; Granet XXe for the Jean Planque collection and twentieth-century art. Treat them as two complementary visits, not one undifferentiated museum route.**

## 6. Information gain

Useful gain versus generic “best museums in Aix” content:
- solve the two-address / two-ticket confusion before listing artists;
- make the site choice actionable;
- keep seasonal 2026 hour changes explicit;
- avoid pretending Cézanne alone defines the institution;
- avoid generic duration claims from secondary guides.

A secondary current guide suggests 1h30 for the main site, but this is not an official universal recommendation and should not be promoted as a site fact.

## 7. GEO / citation opportunities

Atomic facts:
- main site at place Saint-Jean-de-Malte;
- Granet XXe at place Jean-Boyer / chapelle des Pénitents blancs;
- tickets are separate under current rules;
- seasonal opening changes after early November 2026;
- main site combines archaeology and painting collections;
- Granet XXe houses the Jean Planque collection / twentieth-century focus.

## 8. Internal overlap / ownership

- `/musee/granet/` owns both institutional sites because they belong to the same museum entity and user confusion is part of the visit task.
- `/regions/provence-alpes-cote-d-azur/` should select regional museums, not reproduce two-site practical details.
- `/themes/musees-beaux-arts/` should compare collection types.
- A future Cézanne guide/inspiration route may discuss Aix’s Cézanne ecosystem, but not own Granet practical information.

Cannibalization risk: LOW.

## 9. Entities

- Musée Granet
- Granet XXe
- chapelle des Pénitents blancs
- Jean Planque collection
- François-Marius Granet
- Paul Cézanne only in the role supported by the collection/current route
- Philippe Meyer collection if used

Specific works / current hanging remain date-sensitive.

## 10. Freshness

VOLATILE:
- site opening calendars;
- seasonal hours;
- ticket prices;
- temporary exhibitions;
- site-specific closures.

SEMI_STABLE:
- accessibility entrances;
- site routing;
- permanent display composition.

STABLE / long-lived:
- two-site institutional structure;
- collection identities;
- historical links to Granet / Aix / Cézanne.

Checked 2026-09-14 against official Musée Granet pages and current Aix institutional guide.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No official general recommended duration found/needed.
- Individual current artwork display must be rechecked before stronger claims.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Two-site ticket boundary: VERIFIED.
Current seasonal hours: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: HIGH enough to fix — replace three generic collection cards with a two-site comparison that matches the actual user decision.

**Gate: READY_FOR_BRIEF — reconfirmed.**
