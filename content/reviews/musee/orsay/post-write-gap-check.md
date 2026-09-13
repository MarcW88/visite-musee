# Post-write gap check — musee/orsay

Workflow version: museum-v1
Research artifact: `content/research/musee/orsay/serp-coverage.md`
Brief: `content/briefs/musee/orsay.md`
Draft/source: `content/musee/orsay/body.html`
Metadata: `content/musee/orsay/meta.json`
Review date: 2026-09-13

## Coverage verification

| Requirement | Priority | Final status | Where covered | Evidence/source preserved? | Notes |
|---|---|---|---|---|---|
| Proposition de visite spécifique | MUST | COVERED | hero + `Pourquoi choisir Orsay ?` | yes | 1848-1914, impressionnisme/postimpressionnisme, ancienne gare ; pas de superlatif générique |
| Ce que l'on vient voir | MUST | COVERED | `Ce que vous venez réellement voir` | yes | artistes/mouvements utilisés comme exemples ; distinction collection / visibilité actuelle explicitée |
| Horaires actuels | MUST | COVERED | facts + `Préparer la visite > Horaires` | yes | source officielle et date de vérification visibles |
| Tarifs, gratuité, réservation | MUST | COVERED | facts + `Préparer la visite > Tarifs` | yes | officiel utilisé ; conflit secondaire à 18 € rejeté ; 1er dimanche avec réservation mentionné |
| Travaux 2026-2028 | MUST | COVERED | `Les travaux changent les accès...` | yes | dates, musée ouvert, accès modifiés, réservation recommandée |
| Localisation et accès | MUST | COVERED | facts + `Préparer la visite > Venir` + travaux | yes | adresse, métro 12, RER C ; entrée 2 PMR pendant travaux ajoutée |
| Bâtiment / ancienne gare | SHOULD | COVERED | `Pourquoi choisir Orsay ?` | yes | Expo 1900 + musée ouvert en 1986 |
| Familles | SHOULD | COVERED | `En famille... > Avec des enfants` | yes | poussettes, espace bébé, contraintes de matériel ; lien transverse |
| Accessibilité | SHOULD | COVERED | `En famille... > Accessibilité` + travaux | yes | circulation, prêt de matériel, gratuité sur justificatif, entrée temporaire PMR |
| Durée conseillée | SHOULD | PARTIAL | volontairement absente | n/a | aucune méthode/source officielle satisfaisante ; le brief interdit d'inventer un chiffre |
| Expositions temporaires du moment | OPTIONAL | MISSING | hors corps evergreen | n/a | ownership laissé à `/expositions/paris/` ; lien de continuation présent |

## Factual / freshness verification

- Horaires : `VOLATILE`, source officielle, vérifiés le 2026-09-13.
- Plein tarif / nocturne : `VOLATILE`, source officielle, vérifiés le 2026-09-13.
- Gratuité : `VOLATILE`, source officielle, vérifiée le 2026-09-13.
- Travaux et portes d'entrée : `VOLATILE`, page travaux officielle, vérifiés le 2026-09-13.
- Famille / accessibilité : `SEMI_STABLE`, pages officielles, vérifiées le 2026-09-13.
- Histoire, période 1848-1914, gare : `STABLE`, sources institutionnelles du musée.
- Aucune durée, affluence ou « meilleur moment » inventé.
- Aucune œuvre n'est promise comme actuellement visible ; le texte précise qu'une œuvre de collection peut ne pas être présentée le jour de la visite.

## GEO verification

- Réponse directe au début : yes.
- Faits importants atomiques et source-adjacents : yes.
- Données volatiles datées : yes.
- Relations musée / période / mouvements / artistes / bâtiment claires : yes.
- FAQ artificielle ajoutée : no.
- Snippet blocks dupliqués : no.
- JSON-LD `Museum` : présent via `meta.json`, limité aux données confirmées.
- `sameAs` : Wikidata Q23402.
- Canonical : `https://visite-musee.fr/musee/orsay/`.

## Voice / anti-slop verification

- Direction `DESIGN.md` appliquée : culturelle, pratique, sans note ni données inventées.
- Humanizer pass : yes.
- General-writing pass : yes.
- Anti-ai-slop review : yes.
- Em dash/en dash dans la prose : no.
- Throat-clearing / « incontournable » / « must-see » / importance puffery : no blocker.
- Faux retour d'expérience : none.
- Structure clonée du skeleton « 3 raisons » : no ; la structure vient du brief Orsay.
- Les trois cartes de mouvements servent une distinction réelle et ne sont pas utilisées comme règle de template pour les autres musées.

## On-page / technical verification

- H1 : `Musée d’Orsay`.
- Title final attendu : `Musée d’Orsay : préparer sa visite en 2026 | Visite Musée` (57 caractères).
- Meta description : 136 caractères.
- Primary query au début du title, H1 et premier paragraphe : yes.
- Internal links vers Paris, beaux-arts, enfants, accessibilité, gratuité, expositions : present.
- Source links externes : institutionnels pour les claims pratiques.
- `noindex,follow` : conservé par le shell ; aucune instruction d'indexation.
- `scripts/apply-content.mjs` smoke test local : PASS (injection body/title/canonical/schema/CSS).
- Full repository `npm run build && npm run check` on PR: PASS, GitHub Actions run `34777968332`.

## Information gain preserved

1. Le choix d'Orsay est expliqué par la période et les mouvements, pas par la notoriété.
2. Les travaux 2026-2028 sont traités comme une contrainte actuelle de visite.
3. Le contenu distingue collection et visibilité réelle des œuvres.
4. Les données pratiques sont sourcées et datées.
5. Culture et pratique sont réunies sans absorber les pages Paris, exposition ou guides transverses.

## Gate before PUBLISH_REVIEW

- [x] No unresolved `MUST = MISSING`.
- [x] Any `MUST = PARTIAL` resolved before this check.
- [x] Unsupported central claims removed or sourced.
- [x] Volatile claims have official source + checked date.
- [x] Visit proposition remains specific and provable.
- [x] Entity/collection visibility distinction preserved.
- [x] Humanizer / general-writing / anti-ai-slop run separately.
- [x] PR machine gate `npm run build && npm run check` passed.

**Status: READY_FOR_PUBLISH_REVIEW.**