# CLUSTER_AUDIT — fiches musée

Date : 2026-09-14  
Workflow : `museum-analysis-workflow / CLUSTER_AUDIT`  
Scope : les 14 routes `/musee/<slug>/` actuellement générées et matérialisées dans `main`.

## Décision globale

**FAIL — KEEP_NOINDEX**

Ce statut ne signifie pas que les 14 fiches sont mauvaises. Le contenu publié est globalement utile, spécifique et nettement supérieur aux anciens skeletons. Le blocage concerne la **readiness du cluster** avant validation humaine/indexation :

1. les artefacts de workflow de 13 fiches n'ont pas la profondeur du research gate validé sur Orsay ;
2. la logique de composition éditoriale est trop répétitive entre les fiches ;
3. de nombreux liens de continuation envoient vers des pages ville/thème/intention encore à l'état de skeleton ;
4. les données volatiles sont nombreuses mais ne disposent pas encore d'une gouvernance de fraîcheur centralisée.

Aucun retrait de contenu ni changement d'indexation n'est recommandé à ce stade. Toutes les pages doivent rester `noindex,follow` jusqu'à correction des blockers et nouveau `CLUSTER_AUDIT`.

---

## 1. Données disponibles et limites de l'audit

### Inspecté

- les 14 sources `content/musee/<slug>/body.html` ;
- les `meta.json` et HTML matérialisés lorsque nécessaire ;
- les research artifacts, briefs, post-write checks et publish reviews ;
- l'architecture des routes voisines ;
- les liens contextuels présents dans les fiches ;
- les règles de `museum-analysis-workflow` ;
- le build/check du dépôt : 87 pages publiques, 14 fiches musée personnalisées, liens internes valides, `noindex` valide.

### Non disponible dans cet audit

- GSC par URL/requête ;
- Analytics ;
- backlinks/referring domains ;
- logs de crawl ;
- tests utilisateurs des parcours de navigation.

Conséquence : aucune décision de merge/suppression n'est fondée sur la performance. Les conclusions de cannibalisation portent ici sur l'ownership, le contenu et l'architecture, pas sur des signaux GSC.

---

## 2. Inventaire et ownership

| Route | Proposition de visite / ownership principal | Décision contenu | Risque de cannibalisation |
|---|---|---|---|
| `/musee/louvre/` | Musée encyclopédique ; choisir un axe/départements plutôt que tout voir | KEEP + workflow backfill | Faible |
| `/musee/orsay/` | Arts 1848-1914, impressionnisme/postimpressionnisme, ancienne gare | KEEP | Faible |
| `/musee/fondation-louis-vuitton/` | Programmation temporaire + architecture Gehry ; statut d'ouverture prioritaire | KEEP + workflow backfill | Faible, frontière à maintenir avec `/expositions/` |
| `/musee/musee-grevin/` | Parcours de cire/scénographie/divertissement patrimonial | KEEP + workflow backfill | Faible |
| `/musee/musee-confluences/` | Grandes questions croisées entre sciences, sociétés et cultures | KEEP + workflow backfill | Faible |
| `/musee/louvre-lens/` | Galerie du Temps : chronologie ouverte de 5 000 ans | KEEP + workflow backfill | Faible ; différenciation Louvre/Lens réussie |
| `/musee/cernuschi/` | Arts asiatiques dans un musée resserré ; collections permanentes gratuites | KEEP + workflow backfill | Faible |
| `/musee/musee-de-l-homme/` | Enquête interdisciplinaire sur l'humain en trois questions | KEEP + workflow backfill | Faible |
| `/musee/bourdelle/` | Sculpture dans l'atelier historique de Bourdelle | KEEP + workflow backfill | Faible |
| `/musee/granet/` | Deux sites distincts : beaux-arts/Cézanne + Granet XXe/Planque | KEEP + workflow backfill | Faible |
| `/musee/fabre/` | Beaux-arts avec fil Bruyas/Courbet puis Soulages | KEEP + workflow backfill | Faible |
| `/musee/musee-de-grenoble/` | Beaux-arts + rôle pionnier de l'art moderne ; collection permanente gratuite | KEEP + workflow backfill | Faible |
| `/musee/christian-dior-granville/` | Exposition annuelle dans la maison d'enfance ; visite saisonnière | KEEP + workflow backfill | Faible, frontière à maintenir avec `/expositions/` |
| `/musee/arts-decoratifs/` | Histoire des usages/formes par mobilier, design, mode et objets | KEEP + workflow backfill | Faible |

### Conclusion ownership

Aucun couple ne justifie actuellement un `MERGE` ou un `NOINDEX` pour overlap d'entité.

Le couple le plus proche, Louvre / Louvre-Lens, est correctement séparé : le Louvre aide à choisir parmi plusieurs départements, tandis que Louvre-Lens repose sur une Galerie du Temps chronologique et ouverte. Leur cross-link est pertinent.

Les pages Fondation Louis Vuitton et Christian Dior doivent continuer à traiter la programmation temporaire uniquement lorsqu'elle change la décision de visite. Une future page d'exposition doit posséder le détail de l'exposition, pas la fiche musée.

---

## 3. BLOCKER P0 — research gate et preuves de workflow inégaux

### Constat

Orsay reste la seule fiche dont les artefacts documentent réellement toute la profondeur attendue par le workflow :

- résultats/SERP inspectés ;
- sous-intentions ;
- matrice MUST / SHOULD / OPTIONAL ;
- statut MISSING / PARTIAL / COVERED ;
- information gain ;
- opportunités GEO/citation ;
- overlap interne ;
- entités ;
- fraîcheur/data gaps ;
- brief détaillé ;
- post-write gap check détaillé ;
- publish review traçable.

Les 13 autres fiches possèdent bien les fichiers attendus, mais la plupart sont des résumés très courts. Exemple typique : Cernuschi résume l'intention, quelques sources officielles et les MUST en quelques lignes, sans la matrice de couverture obligatoire ni les résultats SERP réellement inspectés.

Même le fichier Louvre, plus développé que les autres, ne documente pas encore tous les éléments obligatoires du research gate : résultats SERP réellement inspectés, SERP features, matrice de couverture, opportunités GEO, overlap interne détaillé, entités/data gaps explicites.

### Risque

Le contenu final peut être bon, mais le système n'a pas assez de trace pour démontrer que :

- la profondeur découle réellement de la SERP et de l'intention ;
- les concurrents/gaps ont été inspectés ;
- les exclusions d'ownership ont été testées ;
- les MUST ont tous été vérifiés après rédaction ;
- le `PUBLISH_REVIEW` est reproductible.

### Action requise

Backfiller les 13 research gates / briefs / reviews **avec la même méthode qu'Orsay**, sans imposer la même longueur. Le critère n'est pas le nombre de mots : chaque artifact doit contenir les éléments exigés par le workflow et une preuve réelle de l'analyse effectuée.

**Priorité : P0 — avant toute décision d'indexation.**

---

## 4. BLOCKER P0 — similarité structurelle excessive

### Ce qui peut rester commun

Les composants UI suivants sont légitimement réutilisables :

- hero ;
- facts panel ;
- cartes ;
- notices ;
- source notes ;
- grille de liens.

Le problème n'est donc pas l'utilisation des mêmes classes CSS.

### Ce qui est trop répétitif

Une majorité de fiches suit le même rythme éditorial :

1. hero + proposition ;
2. facts panel ;
3. bloc éditorial texte + aside ;
4. `reason-grid` de **3 cartes** ;
5. `practical-grid` de **3 cartes** ;
6. `next-links` de **3 cartes**.

Cette répétition est précisément le type de similarité visé par le workflow : mêmes fonctions de blocs, même nombre de raisons, même rythme et même CTA.

Le contenu des cartes est spécifique, mais la **pensée éditoriale est trop souvent contrainte par le composant**. Plusieurs formulations renforcent ce signal : `se choisit si`, `à choisir si`, `Continuer`, `Prolonger`, `Comparer`, etc.

### Exemples où la structure devrait naturellement diverger

- **Louvre** : devrait pouvoir fonctionner comme un problème de décision/parcours sans obligation d'un bloc de trois « façons ».
- **Fondation Louis Vuitton** : le statut fermé/réouverture et la programmation doivent dominer ; l'architecture vient ensuite selon la programmation réelle.
- **Musée de l'Homme** : les trois questions sont intrinsèques au musée ; ici trois cartes sont justifiées par le contenu, pas par le template.
- **Granet** : les deux sites devraient structurer plus fortement toute la page ; trois cartes ne sont pas nécessaires.
- **Christian Dior** : saison/exposition/accessibilité sont plus importantes qu'un triptyque générique.
- **Cernuschi** : le heading annonce « quatre ensembles » mais le composant agrège Corée et Vietnam dans une troisième carte, signe que la structure éditoriale s'est pliée à la grille.

### Action requise

Diversifier la structure selon le job réel de chaque musée. Ne pas « randomiser » artificiellement les pages ; supprimer ou déplacer les blocs uniquement quand l'intention le justifie.

**Priorité : P0 — avant indexation du cluster.**

---

## 5. P1 — destination des liens : fiches fortes vers hubs faibles

### Constat

Les fiches musée contiennent des liens contextuels et des blocs de continuation pertinents vers :

- `/musees/<ville>/` ;
- `/themes/<theme>/` ;
- `/visiter/<intent>/` ;
- `/expositions/` ;
- `/guides/` ;
- `/regions/`.

Mais ces pages sont encore pour beaucoup des skeletons. Exemple : `/musees/paris/` affiche encore :

- « Cette page accueillera une sélection… » ;
- des compteurs `—` ;
- « Contenu à connecter » ;
- « Vue géographique ».

Le lien est techniquement valide mais la destination dégrade le parcours après une fiche musée de qualité.

### Priorités de construction issues du maillage actuel

1. `/musees/paris/`
2. `/visiter/musees-gratuits/`
3. `/themes/musees-beaux-arts/`
4. `/themes/musees-art-moderne-contemporain/`
5. `/themes/musees-sciences/`
6. `/expositions/paris/`
7. pages ville déjà reliées par les fiches : Lyon, Grenoble, Montpellier
8. thèmes spécifiques : mode, arts décoratifs, insolites
9. régions reliées : Hauts-de-France, Normandie, PACA

Ces pages doivent avoir leur propre ownership et leur propre workflow ; ne pas simplement agréger les introductions des fiches musée.

**Priorité : P1.**

---

## 6. P1 — maillage musée → musée encore limité

### État actuel

Les liens directs entre entités musée sont rares :

- Louvre → Orsay ;
- Louvre-Lens → Louvre.

Ce n'est pas automatiquement un défaut. Le skill de maillage interdit d'inventer des liens uniquement pour augmenter le nombre de liens.

### Opportunités vérifiées

- **Orsay → Louvre** : le texte compare déjà Orsay au Louvre. Un lien contextuel vers la fiche Louvre serait naturel et utile.
- **Louvre ↔ Louvre-Lens** : déjà partiellement couvert ; conserver cette relation.

Ne pas créer un réseau artificiel de 14 fiches entre elles. La majorité des connexions doivent passer par les hubs ville/thème/intention une fois ceux-ci devenus utiles.

**Priorité : P1, après amélioration des hubs.**

---

## 7. P1 — gouvernance des informations volatiles

### Claims volatils actuellement présents

Le cluster contient beaucoup de faits à durée de vie courte :

- horaires ;
- prix ;
- gratuités ;
- réservation ;
- fermetures temporaires ;
- travaux ;
- programmation annuelle ;
- horaires saisonniers ;
- salles fermées ;
- conditions d'accès.

Exemples particulièrement sensibles :

- Fondation Louis Vuitton : fermeture jusqu'au 9 octobre 2026 ;
- Confluences : fermeture annoncée d'un espace à partir du 22 septembre 2026 ;
- Granet : changement d'horaires à partir du 3 novembre 2026 ;
- Grenoble : département égyptien temporairement fermé ;
- Christian Dior : saison 2026 et horaires qui changent en octobre ;
- Orsay : travaux et accès modifiés jusqu'à l'été 2028.

### Situation actuelle

Les pages affichent une date de vérification et citent des sources officielles. C'est bon au niveau éditorial.

En revanche, il n'existe pas encore de registre central ou de gate CI capable d'identifier une donnée devenue ancienne.

### Recommandation

Ajouter ultérieurement un manifeste de fraîcheur par musée, ou étendre `meta.json`, avec au minimum :

- claim / groupe de claims ;
- classe `STABLE / SEMI_STABLE / VOLATILE` ;
- `checked_at` ;
- source officielle ;
- date d'expiration/recheck éventuelle.

Le validator peut ensuite avertir ou bloquer les données volatiles trop anciennes.

**Priorité : P1.**

---

## 8. P2 — cohérence du modèle d'entités / schema

Le JSON-LD `Museum` est présent sur les fiches personnalisées, mais la profondeur est inégale.

Orsay dispose notamment d'un `sameAs` confirmé et d'horaires structurés. Plusieurs autres fiches utilisent une version plus minimale : `Museum`, nom, URL officielle, adresse.

Ce n'est pas un blocker SEO technique. La priorité est la précision, pas le volume de schema.

### Recommandation

Après mise en place de la gouvernance de fraîcheur :

- ajouter `sameAs` uniquement quand l'entité est confirmée ;
- ajouter les relations stables utiles (bâtiment/architecte/lieu) quand elles apportent une vraie désambiguïsation ;
- éviter de structurer des horaires volatils si leur maintenance n'est pas garantie ;
- ne pas transformer le JSON-LD en copie du texte de la page.

**Priorité : P2.**

---

## 9. Similarité : matrice synthétique

| Signal | Niveau | Commentaire |
|---|---|---|
| Proposition de visite spécifique | BON | Les 14 propositions sont réellement différentes |
| Introduction par substitution d'entité | FAIBLE risque | Les intros sont spécifiques malgré des formulations récurrentes |
| Ordre des fonctions de sections | ÉLEVÉ | Editorial → cartes → pratique → continuer très fréquent |
| Nombre fixe de cartes | ÉLEVÉ | 3 raisons + 3 pratiques + 3 next-links répétés |
| Données pratiques | JUSTIFIÉ | Nécessaires sur toutes les fiches, mais présentation peut varier |
| CTA / conclusion | ÉLEVÉ | `next-links` à trois cartes quasi systématique |
| Jugements vagues | FAIBLE | Les propositions sont généralement fondées sur des faits |
| Fake first-hand experience | AUCUN détecté | Conforme |

---

## 10. Décisions par page avant prochain audit

### KEEP sans réécriture structurelle urgente

- Orsay : structure plus riche et workflow correctement documenté ; seulement fraîcheur + lien contextuel Louvre à envisager.
- Musée de l'Homme : le triptyque de questions est natif au musée, donc la grille de trois est éditorialement justifiée.

### LIGHT_UPDATE structurel + workflow backfill

- Louvre
- Fondation Louis Vuitton
- Grévin
- Confluences
- Louvre-Lens
- Cernuschi
- Bourdelle
- Granet
- Fabre
- Musée de Grenoble
- Christian Dior Granville
- Arts Décoratifs

Objectif : préserver le fond, réduire les séquences clonées, renforcer la trace de recherche et les gates.

Aucune page ne mérite actuellement `MERGE`, `NOINDEX` individuel ou suppression. Le `KEEP_NOINDEX` est un état de cluster avant validation, pas une sanction sur la qualité des fiches.

---

## 11. Plan de correction recommandé

### Phase A — P0 : restaurer la discipline du workflow

Backfiller pour les 13 fiches hors Orsay :

- SERP coverage complet ;
- brief relié aux résultats de recherche ;
- post-write gap check détaillé ;
- publish review traçable.

Puis revalider les décisions individuelles.

### Phase B — P0 : casser la structure industrialisée

Faire une passe cluster centrée uniquement sur :

- ordre des sections ;
- nécessité réelle des grilles ;
- nombre de cartes ;
- formulation des hooks ;
- nature de la conclusion/next step.

Conserver les composants visuels, mais laisser les besoins du musée décider de leur présence et de leur ordre.

### Phase C — P1 : rendre utiles les hubs les plus liés

Commencer par Paris, gratuit, beaux-arts, moderne/contemporain, sciences et expositions Paris.

### Phase D — P1 : fraîcheur

Mettre en place le registre de données volatiles et le contrôle de staleness.

### Phase E — P2 : entités/schema

Normaliser le socle `Museum` et enrichir uniquement les relations sûres et utiles.

---

## 12. Gate d'indexation recommandé

Ne pas retirer `noindex,follow` tant que :

- [ ] les 13 research gates incomplets n'ont pas été backfillés ;
- [ ] les principaux clones structurels n'ont pas été réduits ;
- [ ] les hubs prioritaires liés depuis les fiches ne sont plus des placeholders ;
- [ ] les données volatiles P0/P1 ont un plan de maintenance explicite ;
- [ ] un nouveau `CLUSTER_AUDIT` ne retourne pas de blocker central ;
- [ ] validation humaine explicite obtenue.

## Résultat final

**FAIL — KEEP_NOINDEX**

### Valeur à préserver

Le fond éditorial des 14 fiches est solide : les propositions de visite sont distinctes, les contraintes actuelles sont visibles, les informations importantes sont sourcées et aucune fausse expérience n'a été détectée. Les corrections doivent donc porter d'abord sur **la preuve de workflow, la diversité structurelle et l'écosystème de pages autour des fiches**, pas sur une réécriture totale du contenu.