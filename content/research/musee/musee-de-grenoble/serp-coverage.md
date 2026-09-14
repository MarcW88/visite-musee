# SERP coverage — musee/musee-de-grenoble

Date: 2026-09-14
Mode: NEW_PAGE backfill after `CLUSTER_AUDIT`
Status: READY_FOR_BRIEF — reconfirmed
Owner: `MUSEUM`

## 1. Query set and intent

Primary query: `musée de Grenoble`.

Variants:
- `visiter musée de Grenoble`
- `musée de Grenoble gratuit`
- `musée de Grenoble horaires`
- `collections musée de Grenoble`
- `art moderne musée de Grenoble`
- `Andry-Farcy musée de Grenoble`
- `antiquités égyptiennes musée de Grenoble`

Dominant intent: exact entity + understand collection breadth and the museum’s early modern-art identity + practical/free-access planning.

The key visit decision is whether Grenoble’s mix of old masters, a historically early commitment to modern art and free permanent collections matches the visitor’s interests. A second decision concerns the current temporary closure of the Egyptian antiquities department.

Maturity: choosing / planning.

## 2. Results actually inspected

| Result | Type | Useful signal |
|---|---|---|
| `https://www.museedegrenoble.fr/1931-informations-pratiques.htm` | official practical page | free permanent collections, hours, first-Sunday policy, current Egypt closure |
| `https://www.museedegrenoble.fr/1895-son-histoire.htm` | official history page | Andry-Farcy and first-museum-of-modern-art positioning |
| `https://www.museedegrenoble.fr/1922-les-incontournables.htm` | official collection highlights | modern/contemporary collection strengths and named artists |
| official Andry-Farcy / collection pages | official collection/history | acquisition policy and modern-art identity |

Observed result pattern: official content strongly supports the historical “pioneer of modern art” angle and the free permanent route. This is more distinctive than a generic old-to-new chronology.

SERP-feature inventory: `DATA_GAP`; no reliable live feature export available.

## 3. Recurring needs / questions

1. What is the Musée de Grenoble known for?
2. Why is Andry-Farcy important?
3. Are the permanent collections really free?
4. What does the museum cover beyond modern art?
5. Is the Egyptian collection currently open?
6. What are current exhibition prices?
7. What are the hours / closure day?
8. Which works are actually visible now?

## 4. Coverage matrix

| Need / claim | Priority | Current page | Evidence / action |
|---|---|---|---|
| Pioneer modern-art identity | MUST | COVERED | official history and collection pages |
| Old + modern + contemporary breadth | MUST | COVERED | current page explains broad range |
| Free permanent collections | MUST | COVERED | official practical page |
| First-Sunday all-access free policy | SHOULD | COVERED | official practical page |
| Current hours / Tuesday closure | MUST | COVERED | official practical page |
| Egypt department temporary closure | MUST | COVERED | official practical page |
| Exhibition price | SHOULD | COVERED | current page carries current full/reduced pricing |
| Visitor services (pushchairs/wheelchairs) | OPTIONAL | COVERED | official practical page |
| Current artwork visibility | MUST | COVERED BY CAUTION | examples from collection pages; do not overclaim every work as currently visible |
| Free-access section structure | SHOULD | PARTIAL | current three-card layout is arbitrary; convert to a concise practical/free-access block |

No central MUST remains `MISSING`.

## 5. Visit proposition

**Choose the Musée de Grenoble when you want one museum to connect old masters with one of France’s earliest institutional commitments to modern art, while accessing the permanent collections free of charge.**

## 6. Information gain

Useful gain:
- explain the historical acquisition policy behind the modern collection rather than just listing Matisse/Picasso;
- make free permanent access operationally clear;
- surface the temporary Egyptian-department closure early enough to prevent a bad visit decision;
- avoid a generic “14 € / 7 €” card trio as the main free-access story;
- preserve the distinction between collection ownership and current display.

## 7. GEO / citation opportunities

Atomic facts:
- permanent collections currently free for all;
- museum open 10:00–18:30 except Tuesday under current official information;
- first Sunday of each month currently free for collections and exhibitions;
- Egyptian antiquities department currently closed for renovation;
- Andry-Farcy, curator 1919–1949, drove early acquisitions of modern art and shaped the museum’s identity.

## 8. Internal overlap / ownership

- `/musee/musee-de-grenoble/` owns the exact entity and its historic modern-art proposition.
- `/musees/grenoble/` should compare city venues.
- `/themes/musees-art-moderne-contemporain/` should compare institutions by modern/contemporary focus.
- `/visiter/musees-gratuits/` owns free-entry selection criteria.

Cannibalization risk: LOW.

## 9. Entities

- Musée de Grenoble
- Andry-Farcy
- Agutte-Sembat legacy
- modern-art collection relation
- Egyptian antiquities department
- artists only when serving the acquisition/history story and with display caution

## 10. Freshness

VOLATILE:
- exhibition tariffs;
- Egypt-department closure/reopening;
- exceptional hours/closures;
- temporary exhibitions.

SEMI_STABLE:
- visitor services;
- permanent display composition;
- free-access policy (stable today but must still be periodically rechecked).

STABLE / long-lived:
- Andry-Farcy history;
- modern-art acquisition identity;
- broad collection scope.

Checked 2026-09-14 against official Musée de Grenoble pages.

## 11. Data gaps

- No GSC/analytics/backlinks.
- No live SERP-feature export.
- No official universal recommended duration.
- Individual artwork visibility must be checked before stronger current-display wording.

## 12. Gate

Ownership: CLEAR.
Central MUSTs: COVERED.
Current Egypt closure: VERIFIED.
Current free-access policy: VERIFIED.
Cannibalization: CONTROLLED.
Structural-cloning issue: MODERATE — free-access information should be simplified rather than forced into three cards.

**Gate: READY_FOR_BRIEF — reconfirmed.**
