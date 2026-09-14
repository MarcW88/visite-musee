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

**PASS — REMEDIATED.**

For the 13 pages other than Orsay, research gates now include the required decision evidence: query/intent, inspected official/current evidence, coverage matrix, information gain, ownership/cannibalization boundaries, entities, freshness classes and explicit data gaps where evidence was unavailable.

Briefs define page ownership, exclusions, MUST/SHOULD coverage, museum-specific composition logic and factual/freshness constraints. Post-write and publish-review artifacts trace the result back to those decisions.

Orsay remains the methodological reference, not a length or structure template.

## B — structural similarity

**PASS — REMEDIATED.**

Shared UI components remain reusable, but editorial logic now follows each institution:

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

## Machine validation

PR Quality Gate run `34823251627` on head `6618968ddea6b2068e323bc51702b8f465f6e4c4`:

- `npm run build`: PASS;
- `npm run check`: PASS.

The only commits after that run finalize review/status Markdown. Therefore the exact final PR head must pass the Quality Gate once more before merge; no further edits are allowed after that final green run.

## Remaining cluster constraints

These are **not blockers for merging A+B**, but remain blockers for cluster indexation:

1. city/theme/intent hubs linked from museum pages are still materially weaker than the museum pages, with `/musees/paris/` still a skeleton;
2. volatile claims need centralized freshness governance (`claim → source → checked_at → freshness_class → recheck`);
3. entity/schema harmonization can be improved after hub and freshness work.

## Merge / indexation decision

A+B editorial remediation: **PASS**.
Individual museum publish reviews: **PASS — READY_FOR_HUMAN_VALIDATION**.
Final machine validation: **RE-RUN REQUIRED ON FINAL HEAD**.
Indexation: **KEEP_NOINDEX**.

Merge is authorized only when the exact final PR head is green. Indexation is not authorized by this remediation.