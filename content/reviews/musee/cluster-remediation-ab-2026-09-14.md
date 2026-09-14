# CLUSTER REMEDIATION — A + B

Date: 2026-09-14
Scope: 14 routes `/musee/<slug>/`
Parent audit: `content/reviews/musee/cluster-audit-2026-09-14.md`

## Scope of this remediation

This pass addresses the two P0 blockers identified by the cluster audit:

A. unequal workflow/research depth across the 14 museum pages;
B. excessive structural cloning across museum pages.

It does **not** authorize indexation. Hub quality and centralized freshness governance remain separate cluster workstreams.

## A — workflow depth

**REMEDIATED.**

For the 13 pages other than Orsay, research gates were backfilled to include the required decision evidence: query/intent, inspected official/current evidence, coverage matrix, information gain, ownership/cannibalization boundaries, entities, freshness classes and explicit data gaps where evidence was unavailable.

Briefs were upgraded to define page ownership, exclusions, MUST/SHOULD coverage, museum-specific composition logic and factual/freshness constraints. Post-write and publish-review artifacts now trace the result back to those decisions.

Orsay remains the methodological reference, not a length or structure template.

## B — structural similarity

**REMEDIATED.**

Shared UI components remain reusable, but the editorial logic now follows each institution:

- Louvre: decision list / choice of visit axis;
- Orsay: period + collection proposition + current works constraint;
- Fondation Louis Vuitton: current status, programming and architecture;
- Grévin: experience / heritage chronology;
- Confluences: four permanent questions/rooms;
- Louvre-Lens: Galerie du Temps, then architecture/site;
- Cernuschi: four collection lenses + official 45 min / 1h30 routes;
- Musée de l’Homme: three official questions retained because they are native to the institution;
- Bourdelle: spatial studio/garden route;
- Granet: two-site comparison;
- Fabre: collection/acquisition timeline;
- Grenoble: historical modern-art identity + free permanent route + current closure constraint;
- Christian Dior: annual exhibition + villa/garden distinction;
- Arts Décoratifs: six collection lenses reflecting actual breadth.

The audit rule is now respected: shared presentation components do not dictate a shared editorial argument.

## Remaining cluster constraints

These are **not blockers for merging A+B**, but they remain blockers for cluster indexation:

1. city/theme/intent hubs linked from museum pages are still materially weaker than the museum pages, with `/musees/paris/` still a skeleton;
2. volatile claims need centralized freshness governance (`claim → source → checked_at → freshness_class → recheck`);
3. entity/schema harmonization can be improved after hub and freshness work.

## Final gate before merge

Editorial remediation: **PASS**.
Individual museum review status: **READY_FOR_FINAL_MACHINE_GATE**.
Machine validation: **PENDING PR QUALITY GATE**.
Indexation: **KEEP_NOINDEX**.

A+B may be merged only after the exact PR head passes `npm run build` and `npm run check`.