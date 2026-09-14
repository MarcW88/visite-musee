# SERP coverage — musee/louvre

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée du Louvre`.

Observed / expected variants:
- `visiter le Louvre`
- `horaires Louvre`
- `tarifs Louvre`
- `billet Louvre`
- `que voir au Louvre`
- `parcours Louvre`
- `collections Louvre`
- `Louvre en 1h / 2h`

Dominant intent: exact entity / navigational + informational visit planning.

The real user task is not only “find practical information”. The Louvre creates a selection problem because the museum is too large to treat as one undifferentiated visit. The page must help the visitor decide what kind of Louvre visit to build, while keeping current operational constraints explicit.

Maturity: planning / choosing a visit strategy.

Primary next question: which departments, rooms or itinerary should I prioritize for the time and interests I have?

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.louvre.fr/visiter` | official visit hub | reservation, access, practical framing |
| `https://www.louvre.fr/visiter/horaires-tarifs` | official practical page | current hours, closure day, 2026 pricing, free-entry rules |
| `https://www.louvre.fr/decouvrir/les-parcours-de-visite` | official itinerary page | Louvre itself answers the scale problem with themed/time-bounded routes |
| `https://www.louvre.fr/visiter/jours-d-acces-aux-collections` | official operational page | room access varies and must be checked by date |
| `https://www.louvre.fr/recherche-et-conservation` | official collection/departments hub | eight conservation departments and collection scope |

Result-type pattern observed: the strongest useful results are official pages split by task — visit, tariffs, itineraries, collection access — rather than one long generic guide. This supports a task-led page that synthesizes the decision without trying to reproduce the Louvre’s full documentation.

SERP-feature inventory is a `DATA_GAP`: no reliable live feature export was available in this run. No FAQ or snippet format is therefore imposed.

## 3. Recurring needs / questions

1. Is the Louvre the right museum for my interests?
2. What should I choose rather than trying to see everything?
3. Which departments / themes can form a coherent route?
4. What are the current hours and closure day?
5. What does a ticket cost in 2026 and who is free?
6. Do I need to reserve?
7. Are all rooms and famous works necessarily visible?
8. Which entrance / practical information should I check before going?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Louvre-specific visit proposition | MUST | COVERED | page frames the museum as a choice among several civilizations/departments |
| Help selecting a route | MUST | PARTIAL | good principle, but three-card format is arbitrary; should become a real route-selection block |
| Eight-department / broad collection identity | MUST | COVERED | official conservation structure |
| Current opening hours / Tuesday closure | MUST | COVERED | official practical page, checked 2026-09-14 |
| 2026 ticket prices | MUST | COVERED | 22 € France/EEE; 32 € non-EEE on official page |
| Reservation guidance | MUST | COVERED | strongly recommended, including free visitors |
| Room availability caveat | MUST | COVERED | official room-access calendar |
| Collection ownership != current display | MUST | COVERED | wording avoids guaranteeing a specific work |
| Palace / building as part of visit | SHOULD | COVERED | supports orientation and expectations |
| Official itinerary tools | SHOULD | PARTIAL | add link/context to official suggested routes rather than inventing a duration |
| Accessibility / family detail | OPTIONAL | MISSING | not required for core task in this version; can be added only if it changes visit decision |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Louvre when you want an encyclopedic museum spanning multiple civilizations and media, and are willing to build a selective route rather than treat the museum as a checklist of famous works.**

This proposition is supported by the breadth of departments, the palace layout and the Louvre’s own use of themed/time-bounded itineraries.

## 6. Information gain

Generic museum guides frequently collapse the Louvre into “top masterpieces”. The page’s information gain should instead be:
- explain the selection problem created by scale;
- make the visitor choose an axis before arrival;
- show that room access changes by date;
- refuse to guarantee a work merely because it belongs to the collection;
- direct the visitor to the Louvre’s own itinerary and room-availability tools.

## 7. GEO / citation opportunities

Useful extractable facts:
- museum with eight conservation departments;
- open 9:00–18:00 on Monday, Thursday, Saturday and Sunday; late opening Wednesday and Friday; closed Tuesday;
- 2026 admission differentiated between France/EEE and non-EEE visitors;
- reservation strongly recommended;
- room access can change by date;
- official suggested itineraries exist by theme and available time.

Do not create artificial FAQ blocks. Facts should remain adjacent to official source links and checked dates.

## 8. Internal overlap / ownership

- `/musee/louvre/` owns the exact Louvre entity + visit decision.
- `/musee/louvre-lens/` owns the distinct Louvre-Lens entity and its Galerie du Temps model; cross-link is useful, not cannibalizing.
- `/musees/paris/` should compare museums in Paris and must not reproduce Louvre practical details.
- `/themes/musees-beaux-arts/` can classify/select by theme but should not own the Louvre entity query.
- `/guides/comment-preparer-visite-musee/` owns generic preparation method; Louvre should apply the principle to its specific scale problem.

Cannibalization risk: LOW.

## 9. Entities to verify / preserve

- Musée du Louvre
- Palais du Louvre
- eight conservation departments
- collection categories actually used in copy
- official room calendar
- official itinerary pages

Specific artworks should only be described as currently visible if checked against current display information. The page currently avoids that claim.

## 10. Freshness

VOLATILE:
- ticket price;
- opening hours / exceptional closures;
- reservation rules;
- room closures / access calendar;
- entrance constraints.

SEMI_STABLE:
- visitor services;
- accessibility routes;
- official itinerary catalogue.

STABLE:
- palace role;
- department structure;
- broad collection scope.

Checked 2026-09-14 against official Louvre pages.

## 11. Data gaps

- No GSC query/CTR data supplied.
- No backlink/authority comparison supplied.
- No reliable live SERP-feature export in this run.
- No independent crowd dataset; no “best time to visit” claim should be invented.
- No universal recommended visit duration: official itinerary durations may be referenced as route examples, not converted into a site-wide “ideal duration”.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: VERIFIED / COVERED.
Current official practical data: VERIFIED 2026-09-14.
Cannibalization: CONTROLLED.
Structural-cloning issue: IDENTIFIED for remediation in content pass.

**Gate: READY_FOR_BRIEF — reconfirmed.**
