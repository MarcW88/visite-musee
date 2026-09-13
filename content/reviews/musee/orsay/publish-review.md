# PUBLISH_REVIEW — musee/orsay

Workflow version: museum-v1
Mode: PUBLISH_REVIEW
Review date: 2026-09-13
Research: `content/research/musee/orsay/serp-coverage.md`
Brief: `content/briefs/musee/orsay.md`
Draft: `content/musee/orsay/body.html`
Post-write check: `content/reviews/musee/orsay/post-write-gap-check.md`

## Gate A — machine validation

PASS.

- `npm run build`: success.
- 88 pages generated.
- 1 validated museum content source applied.
- `npm run check`: success after excluding editorial source fragments from generated-page validation.
- GitHub Actions PR Quality Gate run: `34777968332`.

The first machine run failed because `scripts/check.mjs` incorrectly treated `content/musee/orsay/body.html` as a standalone published page. The validator was corrected to validate generated HTML while excluding `content/` source fragments. The second run passed.

## Gate B — research traceability

PASS.

- Current SERP and official museum sources inspected before drafting.
- Research artifact exists and defines explicit MUST / SHOULD / OPTIONAL coverage.
- Brief is derived from the research artifact.
- Post-write gap check maps every central requirement back to the final draft.
- No unresolved `MUST = MISSING`.
- The only `SHOULD = PARTIAL` is visit duration, intentionally omitted because no satisfactory official source or site methodology supports a number.

## Gate C — intent and page ownership

PASS.

The page owns the exact Musée d'Orsay entity and the decision/preparation task: understand why this museum fits a visit intent and how to prepare the visit now.

It does not absorb:

- Paris museum comparison;
- generic family/accessibility advice;
- the Paris exhibition agenda;
- generic free-museum comparison;
- encyclopedic museum history.

## Gate D — factuality and freshness

PASS.

- Stable cultural/history claims use institutional museum sources.
- Hours, prices, free-entry conditions, works/access changes and other volatile claims are dated and sourced to the museum.
- 2026-2028 works are explicitly integrated into the current visit guidance.
- No visit duration, crowd level or best-time estimate is invented.
- Collection ownership is not presented as proof that an artwork is currently on display.
- No simulated first-hand visit, queue observation, family test or accessibility audit.

## Gate E — GEO / entity layer

PASS.

- Direct answer appears at the start of the page.
- Important practical facts are stated atomically with adjacent source/date context.
- Museum, period, artistic movements, artists and building relations are clear without exposing ontology jargon.
- `Museum` JSON-LD uses only verified data.
- `sameAs` includes Wikidata Q23402.
- Canonical points to `https://visite-musee.fr/musee/orsay/`.
- No artificial FAQ or duplicated answer blocks were added for GEO.

## Gate F — editorial quality / anti-slop

PASS.

- The visit proposition is specific and evidence-backed rather than promotional.
- No unsupported `incontournable`, `must-see`, rating or ranking language.
- Humanizer, general-writing and anti-ai-slop passes were executed separately.
- No material generic-AI/slop blocker remains.
- The page does not reuse the old skeleton's mandatory `3 reasons` editorial logic.
- The three collection/movement cards are justified by Orsay's research and are not defined as a reusable museum template.

## Gate G — SEO / technical

PASS.

- One H1: `Musée d’Orsay`.
- Primary entity appears in title, H1 and opening paragraph.
- Final title is within the intended on-page range.
- Meta description is specific to the visit task.
- Internal links support next logical needs.
- Canonical and Museum schema are injected by the post-build content pass.
- `noindex,follow` remains in place.

## Decision

**PASS — READY_FOR_HUMAN_VALIDATION**

This PASS does not authorize indexation. The page must remain `noindex,follow` until explicit human validation and a separate instruction to change indexing status.