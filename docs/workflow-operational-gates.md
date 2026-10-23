# Operational gates — Visite Musée

The shared upstream skills in `.agents/skills/` are byte-pinned. Do not edit them to add site-specific functionality.

## Content pipeline (human review required)
1. Read `AGENTS.md`, `.agents/site-context.shared.md`, `.agents/shared-routing.json`, and the relevant complete original skills.
2. Existing page: museum-analysis AUDIT; new page: NEW_PAGE. Produce source-backed research and brief.
3. Draft through museum-content and the routed skills; run fact-check and entity/freshness checks.
4. Explicitly apply `humanizer/SKILL.md` to the complete page, **without inventing evidence or visits**; log before/after examples and reviewer decision in `content/reviews/<route>/humanizer-review.md`.
5. Explicitly apply `anti-ai-slop/SKILL.md` with the original review protocols and checklists; log findings, changes, and reviewer verdict in `content/reviews/<route>/anti-ai-slop-review.md`.
6. Run editorial QA, internal links, and `museum-analysis-workflow / PUBLISH_REVIEW`; retain noindex until separately authorized. Missing reviewer evidence is BLOCKED, never PASS.
7. Run `python3 scripts/verify_site_agents.py`, `npm run build`, `npm run check`; use browser QA for DOM/CSS evidence.

## Browser
Run `npm install --no-save --no-package-lock @playwright/test`; `npx playwright install --with-deps chromium`; `npm run build`; serve the repository root, then `VISUAL_BASE_URL=http://127.0.0.1:4173 node scripts/museum-visual-qa.mjs`.
The browser suite checks nine actual museum routes in desktop/mobile, response status, JS exceptions, horizontal overflow, heading structure, and captures screenshots and JSON to `.artifacts/museum-visual/`. A green browser job does **not** certify editorial accuracy or visual aesthetics. Review screenshots manually.

## Legacy reference actions
Source GitHub Actions in `.agents/reference/` are retained for provenance; they contain product-site paths, generators, or write permissions inappropriate for this museum site. Do not enable them as-is. Convert each operation through native museum routes, content ownership, and noindex restrictions.
