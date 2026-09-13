# Content brief — Musée d'Orsay

workflow_version: museum-v1
mode: NEW_PAGE
route: /musee/orsay/
cluster_owner: MUSEUM
status: BRIEF_READY
research: content/research/musee/orsay/serp-coverage.md
brief_date: 2026-09-13

## 1. Target query + cluster

- Primary query: `musée d'Orsay`
- Supporting cluster: `visiter musée d'Orsay`, `musée d'Orsay que voir`, `musée d'Orsay horaires`, `musée d'Orsay tarifs`, `musée d'Orsay billets`, `musée d'Orsay œuvres`, `musée d'Orsay impressionnisme`
- Search intent: entity/navigational + informational + preparation de visite
- Dominant SERP shape: hybride entre page officielle pratique et guide de visite éditorial

La page ne doit pas tenter de devenir un guide générique « tous les musées de Paris » ni un agenda exhaustif des expositions.

## 2. Reader task / JTBD

**Quand j'envisage une visite culturelle à Paris et que je compare mes options, je veux comprendre ce qu'Orsay permet réellement de voir et comment la visite se prépare aujourd'hui, afin de décider si ce musée mérite mon temps et éviter une mauvaise surprise pratique.**

Le lecteur n'a pas besoin d'une persona fictive. Son niveau de maturité peut aller de « je compare les musées » à « j'ai presque décidé et je veux préparer ma venue ».

## 3. Page role and exclusions

### This page owns

- l'entité Musée d'Orsay ;
- la proposition de visite spécifique ;
- les collections/mouvements/artistes qui permettent de comprendre ce que l'on vient y chercher ;
- les informations pratiques actuelles nécessaires à la décision ;
- les contraintes spécifiques qui changent la visite au moment de la publication.

### This page does not own

- les meilleurs musées de Paris → `/musees/paris/` / `/inspiration/` ;
- la stratégie générale d'une visite avec enfants → `/visiter/musees-avec-enfants/` ;
- la comparaison des musées gratuits → `/visiter/musees-gratuits/` ;
- l'agenda exhaustif des expositions parisiennes → `/expositions/paris/` ;
- une histoire encyclopédique complète du musée ;
- un catalogue exhaustif des œuvres.

## 4. Editorial proposition

### Core angle

Présenter Orsay comme **le musée à choisir lorsque l'on veut explorer la période 1848-1914 — notamment l'impressionnisme et le postimpressionnisme — dans un ancien bâtiment ferroviaire qui fait lui-même partie de l'expérience**, puis rendre la visite immédiatement préparables avec des données officielles actuelles.

La page doit répondre à deux questions liées :

1. **Pourquoi ce musée peut-il correspondre à mon envie ?**
2. **Que dois-je savoir avant d'y aller aujourd'hui ?**

### Do not write

- « incontournable », « exceptionnel », « unique », « à couper le souffle » sans distinction factuelle précise ;
- faux retour d'expérience (« nous avons visité », « nous avons attendu ») ;
- estimation d'affluence non sourcée ;
- durée de visite présentée comme officielle ;
- œuvre « à voir actuellement » sans vérification du statut de présentation.

## 5. MUST coverage

Le draft ne peut pas passer le post-write gate s'il manque un de ces éléments.

### MUST 1 — Proposition de visite claire

Expliquer tôt ce qui distingue Orsay : période 1848-1914, impressionnisme/postimpressionnisme, diversité des formes artistiques, ancienne gare.

Sources prioritaires : histoire du musée + collections officielles.

### MUST 2 — Ce que l'on vient voir

Donner une vision concrète de la collection à travers une sélection limitée d'artistes/mouvements/œuvres réellement utiles au lecteur.

Règle : dire `dans les collections` tant que la visibilité actuelle de l'œuvre n'est pas vérifiée. Une collection n'implique pas une exposition permanente de chaque objet.

Entités prioritaires possibles : Monet, Manet, Degas, Renoir, Cézanne, Van Gogh, Gauguin, impressionnisme, postimpressionnisme.

### MUST 3 — Horaires actuels

À la date de recherche :

- lundi : fermé ;
- mardi, mercredi, vendredi, samedi, dimanche : 9h30–18h ;
- jeudi : 9h30–21h45.

Le draft doit afficher une date de vérification et rappeler que ces données sont volatiles.

Source : `musee-orsay.fr/fr/visite`.

### MUST 4 — Tarifs / gratuité / réservation

À la date de recherche :

- plein tarif : 16 € en ligne / 14 € sur place ;
- nocturne jeudi à partir de 18h : 12 € en ligne / 10 € sur place ;
- gratuité pour plusieurs catégories officielles ;
- 1er dimanche du mois gratuit pour tous avec réservation obligatoire.

La source officielle prime sur tout guide secondaire. Ne pas reprendre le tarif de 18 € observé sur un concurrent.

### MUST 5 — Travaux et accès 2026-2028

Mentionner que les espaces d'accueil sont en rénovation du 10 mars 2026 à l'été 2028. Le musée reste ouvert et les collections/expositions restent accessibles, mais les accès sont modifiés et la réservation en ligne est fortement recommandée.

Cette information est un information gain concret par rapport à plusieurs guides de visite génériques.

Source : page officielle travaux.

### MUST 6 — Localisation / accès utile

Adresse : Esplanade Valéry Giscard d'Estaing, 75007 Paris.

Repères utiles confirmés : métro ligne 12 Solférino ; RER C Musée d'Orsay ; bus listés sur la page officielle.

Pendant les travaux, l'accès PMR se fait par l'entrée 2 / Parvis selon la page officielle travaux/accessibilité.

## 6. SHOULD coverage

### SHOULD — Bâtiment

Expliquer brièvement le rôle de l'ancienne gare d'Orsay construite pour l'Exposition universelle de 1900 et transformée en musée ouvert en 1986. Ce contexte sert la proposition de visite ; éviter la chronologie exhaustive.

### SHOULD — Familles

Donner une synthèse factuelle : ressources dédiées, poussettes disponibles, espace bébé, parcours/activités famille. Les activités datées ne doivent pas être présentées comme permanentes.

### SHOULD — Accessibilité

Résumer les éléments utiles et renvoyer vers la page officielle détaillée. Ne pas transformer la fiche en audit d'accessibilité indépendant.

### SHOULD — Durée

Ne publier une durée conseillée que si une méthode éditoriale explicite est définie. Aucune durée libre officielle suffisante n'a été identifiée dans le test. Le skeleton actuel contient « Durée conseillée » : ce champ doit donc rester absent/non publié tant que la méthode n'existe pas.

## 7. OPTIONAL coverage

- une mention courte de l'exposition temporaire du moment uniquement si alimentée/contrôlée au moment de publication ;
- café/restauration/boutique uniquement si cela aide réellement la visite ;
- alentours uniquement via maillage, pas comme section principale.

## 8. Entity coverage

### Required / high-value

- Musée d'Orsay — Wikidata `Q23402`
- Paris / 7e arrondissement
- Gare d'Orsay
- Victor Laloux
- impressionnisme
- postimpressionnisme
- Claude Monet
- Édouard Manet
- Edgar Degas
- Vincent van Gogh

### Works: conditional

Des œuvres telles que `Olympia`, `Le Déjeuner sur l'herbe`, `Bal du moulin de la Galette`, `Coquelicots` peuvent servir d'exemples de collections.

Avant toute formulation `à voir`, `exposé`, `salle X`, vérifier le statut de présentation actuel. Sinon employer une formulation de collection.

### Schema / sameAs

Utiliser les identifiants externes seulement s'ils servent la désambiguïsation et le structured data. Ne pas remplir le contenu visible de jargon entity/knowledge graph.

## 9. Source requirements and freshness

### STABLE

- période 1848-1914 ;
- histoire de la gare ;
- ouverture du musée en 1986 ;
- grands mouvements et collections historiques.

Sources : musée d'Orsay officiel, entity database pour désambiguïsation.

### SEMI_STABLE

- services famille ;
- accessibilité ;
- organisation des espaces/présentations d'artistes.

Vérifier au moment de rédaction.

### VOLATILE

- horaires ;
- prix ;
- gratuité ;
- réservation ;
- portes d'entrée ;
- travaux ;
- expositions temporaires ;
- fermeture de salles / visibilité des œuvres.

Pour ces claims : source officielle + `checked_at` visible ou associé à la donnée.

## 10. Information gain to preserve

1. **Décision de visite plutôt que superlatifs :** expliquer factuellement pour quelle envie Orsay est pertinent.
2. **Travaux 2026-2028 intégrés à la préparation :** musée ouvert mais accès temporairement modifiés.
3. **Collection ≠ exposition actuelle :** ne pas promettre une œuvre visible si le statut n'est pas confirmé.
4. **Fraîcheur visible :** les données pratiques doivent être datées ; les guides secondaires ont déjà montré des conflits de prix.
5. **Culture + pratique dans une seule fiche :** relier ce que l'on vient chercher à la manière concrète d'organiser la visite.

## 11. Internal linking plan

### Outbound candidates

- `/musees/paris/` — pour comparer avec d'autres musées parisiens ;
- `/themes/musees-beaux-arts/` — si la page correspond réellement à l'angle ;
- `/visiter/musees-avec-enfants/` ou `/visiter/musees-en-famille/` — pour approfondir la contrainte famille ;
- `/visiter/musees-accessibles/` — pour la stratégie transverse accessibilité ;
- `/visiter/musees-gratuits/` — pour comparer les dispositifs de gratuité ;
- `/expositions/paris/` — pour la programmation temporaire ;
- `/guides/combien-de-temps-pour-visiter-un-musee/` uniquement lorsque ce guide repose sur une méthodologie suffisante.

### Inbound candidates after publish

- `/musees/paris/` ;
- `/themes/musees-beaux-arts/` ;
- `/inspiration/meilleurs-musees-france/` si Orsay y est réellement retenu selon les critères éditoriaux de cette page.

## 12. Proposed structure after research

La structure n'est pas un template pour les autres musées. Elle répond aux besoins identifiés ici.

### Opening / decision answer

Répondre rapidement : ce qu'est Orsay, quelle période il couvre et pour quelle envie de visite il est particulièrement pertinent.

### Ce que vous venez réellement voir à Orsay

Construire autour de la période/mouvements et d'exemples concrets d'artistes/œuvres, sans catalogue exhaustif.

### Le bâtiment compte aussi dans la visite

Contexte court : gare de 1900 → musée ouvert en 1986 ; uniquement ce qui aide à comprendre l'expérience du lieu.

### Préparer la visite aujourd'hui

Horaires + tarifs + gratuité + réservation, avec date de vérification.

### Travaux : ce qui change actuellement

Bloc nettement identifiable et facile à actualiser : période des travaux, musée ouvert, accès modifiés, réservation recommandée.

### Familles et accessibilité

Synthèse opérationnelle si les données restent confirmées au moment du draft.

### Next step

Liens vers Paris, expositions et besoins transverses plutôt qu'une conclusion générique.

## 13. Anti-patterns

- transformer la fiche en Wikipédia ;
- copier les listes de 15 à 20 œuvres des concurrents ;
- industrialiser ensuite cette structure pour tous les musées ;
- imposer un bloc « 3 raisons de visiter » parce que le skeleton actuel le prévoit ;
- afficher une note, un classement ou un avis sans méthodologie ;
- créer une FAQ artificielle ;
- écrire une durée/affluence à partir de mémoire ;
- reprendre un tarif d'un tiers quand l'officiel diffère ;
- présenter une exposition temporaire sans dates/source ;
- utiliser « actuellement exposé » sans preuve.

## 14. Success / publish criteria

Le draft sera considéré `READY_FOR_PUBLISH_REVIEW` seulement si :

- chaque MUST du research artifact est `COVERED` ou explicitement justifié ;
- aucun claim volatile central n'est sans source officielle/date ;
- la proposition de visite est spécifique et prouvable ;
- aucune fausse expérience n'est introduite ;
- la distinction collection / visibilité actuelle est respectée ;
- la page n'empiète pas sur les clusters Paris, expositions ou guides transverses ;
- le post-write gap check est créé ;
- la page reste `noindex,follow` jusqu'à un `PUBLISH_REVIEW PASS` + validation humaine + instruction séparée d'indexation.

Aucun objectif de volume ou de ranking chiffré n'est inventé dans ce test, faute de données GSC/keyword dédiées.

## 15. Voice reference

Référence : `DESIGN.md` + règles `AGENTS.md`.

Voix : culturelle sans académisme gratuit, précise, calme, utile à la décision, descriptive avant laudative. Les données pratiques doivent rester lisibles et séparables des éléments éditoriaux.

## Handoff

**BRIEF_READY — drafting not started.**

Le prochain appel autorisé est `museum-content-workflow` pour la rédaction, à condition de relire ce brief et `content/research/musee/orsay/serp-coverage.md`.