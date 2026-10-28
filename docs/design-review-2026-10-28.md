# Livraison de la revue de design — 28 octobre 2026

Les six lots ont été examinés puis validés séparément par le propriétaire du dépôt.

## Comportement livré

1. **Génération fiable** : fonction géographique disponible avant son premier appel ; builds successifs identiques ; remplacement des balises gérées au lieu de leur accumulation.
2. **Parcours opérationnels** : recherche par musée, ville et collection, filtres combinables, état sans résultat et réinitialisation ; inspiration liée au thème choisi ; navigation vers les services disponibles.
3. **Responsive** : grilles réductibles, textes longs qui reviennent à la ligne, informations pratiques en colonne sur petit écran, polices de secours explicites et mouvement réduit.
4. **Catalogues lisibles** : listes compactes, 24 fiches par page, filtres géographiques et option « Tout afficher ». Les 97 liens de musées de la source Normandie et ses anciennes ancres sont conservés. Toutes les fiches restent visibles sans JavaScript.
5. **États et libellés cohérents** : noms et accents des libellés générés, 24 pages/rubriques en préparation signalées avec des alternatives utiles, navigation et pied de page partagés.
6. **Fiches lisibles** : informations pratiques remontées, affiches typographiques compactes, échelle des titres éditoriaux, sommaires repliables et accès clavier au contenu.

La palette et la direction typographique sont conservées. La recherche utilise les données du catalogue existant. Les critères de durée, d’accueil familial et une vue carte pourront être ajoutés lorsque leurs données seront disponibles.

## Préservation du contenu

- Aucun changement des fichiers sources sous `content/`, des fichiers d’agents, de `AGENTS.md` ou de `DESIGN.md`.
- Les 126 articles sont présentés par un renderer qui conserve leurs textes, liens et ancres existants. Le contrôle de conservation vérifie 6 422 blocs de texte des sources musée.
- Les 97 liens de musées et les textes de la source Normandie restent présents dans le rendu compact.
- Les 237 pages restent en `noindex,follow`.
- Le diff HTML étendu correspond à la régénération des pages et à l’application du shell partagé.

## Validation locale

| Contrôle | Résultat |
|---|---|
| `npm run build` puis `npm run check` | 237 pages valides ; 126 fiches personnalisées appliquées |
| Nouvelle génération sur les mêmes sources | HTML identique sur les 237 pages |
| `python3 scripts/verify_site_agents.py` | 555 fichiers conformes aux versions épinglées |
| `npm run test:discovery` | Recherche, filtres, pagination, anciennes ancres, états d’attente, menu, sommaire et accès clavier réussis à 320, 390, 768 et 1440 px ; consultation sans JavaScript vérifiée |
| `npm run test:reflow` | 237 pages × 4 largeurs × 2 configurations de fontes : 1 896 observations, aucun débordement ni masquage horizontal détecté |
| `git diff --check` | Réussi |

Le téléchargement standard de Chromium n’était pas utilisable dans l’environnement local. Les contrôles ont été exécutés avec Playwright et un Chromium alternatif. Manrope et Space Grotesk ont été fournies localement via Fontsource pour le passage avec les fontes prévues ; un second passage bloque les fontes externes afin de tester les fontes de secours. Les captures ont été inspectées sur les pages représentatives.

Ces contrôles couvrent l’implémentation frontend et les rendus Chromium. Ils ne constituent pas une certification WCAG, une mesure de performance de terrain ni une nouvelle vérification des données pratiques des musées.

## Reproduire les contrôles navigateur

```bash
npm install --no-save --no-package-lock @playwright/test
npx playwright install --with-deps chromium
npm run build
npm run check
npm run test:discovery
npm run test:reflow
```

Les deux nouveaux scripts démarrent leur serveur de prévisualisation local. Leurs captures et rapports sont écrits sous `.artifacts/design-review/`, exclu de Git. Le workflow `museum-visual-qa.yml` exécute aussi ces suites et conserve les preuves dans ses artifacts.

Variables facultatives pour les environnements disposant d’un navigateur ou de fontes locales : `DISCOVERY_CHROMIUM_PATH` et `DISCOVERY_FONT_CSS`. `REFLOW_ROUTES` permet un contrôle ciblé ; le contrôle complet utilise les 237 pages par défaut.

## Publication

La pull request est destinée à la revue finale. Sa fusion sur `main` déclenchera le workflow GitHub Pages existant. La publication doit suivre la décision explicite du propriétaire après cette revue.
