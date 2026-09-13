# SERP coverage matrix — musee/orsay

Workflow version: museum-v1
Mode: NEW_PAGE
Market: France / fr-FR
Research date: 2026-09-13
Status: READY_FOR_BRIEF

## 1. Ownership

- Route: `/musee/orsay/`
- Cluster owner: `MUSEUM`
- Primary query: `musée d'Orsay`
- Close variants: `visiter musée d'Orsay`, `musée d'Orsay que voir`, `musée d'Orsay horaires`, `musée d'Orsay tarifs`, `musée d'Orsay billets`, `musée d'Orsay œuvres`, `musée d'Orsay impressionnisme`
- Important sub-intents: décider si le musée correspond à la sortie recherchée ; comprendre ce que les collections permettent réellement de voir ; préparer horaires/billets/accès ; savoir quelles contraintes 2026 changent la visite ; vérifier famille/accessibilité ; repérer les artistes/œuvres qui justifient la visite.
- Queries/intents owned by another URL:
  - `musées à Paris`, `meilleurs musées Paris` → `/musees/paris/` ou `/inspiration/`
  - `musées impressionnistes` → `/themes/` lorsque le cluster correspondant existe
  - `musée d'Orsay avec enfants` → la fiche peut répondre brièvement, mais la stratégie transverse appartient à `/visiter/musees-avec-enfants/`
  - `musée d'Orsay gratuit` → la fiche donne la règle actuelle ; les comparaisons de gratuité appartiennent à `/visiter/musees-gratuits/`
  - expositions temporaires à Paris → `/expositions/paris/`; la fiche musée ne doit pas devenir un agenda dupliqué

### Search intent / JTBD

Dominante : informationnelle + préparation de visite, avec une forte composante navigational/entity.

Job provisoire : **Quand j'envisage une visite culturelle à Paris et que je compare mes options, je veux comprendre ce qu'Orsay permet réellement de voir et comment la visite se prépare aujourd'hui, afin de décider si ce musée mérite mon temps et éviter une mauvaise surprise pratique.**

Hire criteria observables dans la SERP : richesse impressionniste/postimpressionniste, chefs-d'œuvre identifiables, bâtiment de l'ancienne gare, informations pratiques fiables, possibilité d'organiser la visite avant venue.

Fire criteria probables à traiter sans les inventer comme données d'usage : information pratique périmée, confusion entre collection et œuvres actuellement exposées, page trop encyclopédique, absence d'alerte sur les travaux/accès 2026-2028.

## 2. Current SERP evidence

Résultats réellement inspectés le 2026-09-13.

| Query | Ranking URL/domain | Page type | Main task/angle | SERP features | Freshness |
|---|---|---|---|---|---|
| `musée d'Orsay` / pratique | musee-orsay.fr/fr/visite | officiel / visite | horaires, tarifs, accès, billets, services | informations pratiques structurées | actuelle, vérifiée 2026-09-13 |
| `musée d'Orsay tarifs` | musee-orsay.fr/fr/visite/tarifs | officiel / tarifs | prix, réductions, gratuité | tableaux + conditions | actuelle, vérifiée 2026-09-13 |
| `musée d'Orsay que voir` | paris-story.com/fr/que-voir-au-musee-dorsay/ | guide éditorial | liste d'œuvres à ne pas manquer | longue liste d'œuvres | mis à jour 2026-05-26 |
| `musée d'Orsay guide visit` | lonelyplanet.com/articles/guide-to-musee-orsay | guide voyage | billets, moment de visite, collections, top works | guide structuré | publié 2026-05-18 |
| `visiter musée d'Orsay` | routard.com/.../musee-d-orsay | guide destination | que voir + bâtiment + alentours | fiche destination | publié en 2026 |
| `musée d'Orsay que voir 2026` | thebettervacation.com/fr/paris/what-to-see-at-musee-dorsay/ | guide commercial | œuvres, horaires, billet | guide + billetterie | publié 2026-06-05 ; prix observé en conflit avec l'officiel |
| `musée d'Orsay guide complet` | paris-toujours.com/le-mag/pratique/guide-visite-musee-orsay/ | guide éditorial | histoire, œuvres, salles, conseils | guide long | crawlé 2026-09 |

## 3. User need / coverage matrix

| Reader question / need | Recurs in winning results? | Evidence/data used by winners | Current page | Requirement | Information-gain opportunity |
|---|---|---|---|---|---|
| Pourquoi choisir Orsay plutôt qu'un autre musée parisien ? | oui | collection 1848-1914, impressionnisme/postimpressionnisme, bâtiment-gare | MISSING | MUST | formuler une proposition de visite factuelle, pas « incontournable » |
| Qu'est-ce que le musée couvre réellement ? | oui | période, mouvements, disciplines, artistes | MISSING | MUST | expliquer le rôle d'Orsay entre Louvre et art moderne sans encyclopédisme |
| Quelles œuvres/artistes donnent une idée concrète de la visite ? | oui | listes de chefs-d'œuvre | MISSING | MUST | sélectionner peu d'exemples reliés à des raisons de visite ; ne jamais confondre collection et exposition actuelle |
| Horaires actuels | oui | source officielle | MISSING | MUST | afficher date de vérification et nocturne du jeudi |
| Prix / gratuité / réservation | oui | source officielle et guides | MISSING | MUST | résoudre les conflits par priorité à l'officiel ; inclure 1er dimanche gratuit sur réservation obligatoire |
| Les travaux changent-ils la visite ? | peu/mal traité par les guides | source officielle travaux | MISSING | MUST | information gain fort : travaux 10/03/2026–été 2028, musée ouvert mais accès modifiés, réservation fortement recommandée |
| Où est le musée et comment y accéder ? | oui | adresse, métro/RER/bus | MISSING | MUST | rester concis et actuel ; relier aux accès modifiés pendant travaux |
| Le musée est-il accessible ? | partiellement | page officielle accessibilité | MISSING | SHOULD | synthèse factuelle + lien vers source détaillée ; accès PMR par entrée 2 pendant travaux |
| Est-ce adapté aux familles ? | partiellement | services, parcours, poussettes, activités | MISSING | SHOULD | distinguer services permanents et programmation temporaire |
| Combien de temps prévoir ? | oui dans certains guides | estimations éditoriales variables | MISSING | SHOULD | ne pas inventer de durée « officielle » ; si une estimation est publiée, documenter sa méthode ou l'identifier comme conseil éditorial |
| Quelle est l'histoire du bâtiment ? | oui | ancienne gare, Expo 1900, transformation en musée | MISSING | SHOULD | l'utiliser comme facteur de visite, pas comme longue chronologie |
| Quelles expositions temporaires sont en cours ? | oui | agenda officiel | MISSING | OPTIONAL | module dynamique ou lien vers `/expositions/`; éviter de figer des dates dans le corps evergreen |
| Que voir autour / avec quoi combiner la visite ? | parfois | guides voyage | MISSING | OPTIONAL | plutôt maillage vers ville/inspiration, pas scope central de la fiche |

## 4. Visit proposition evidence

| Decision factor | Confirmed fact/evidence | Source type | Freshness | Confidence |
|---|---|---|---|---|
| Période artistique cohérente | Le musée est consacré aux créations du monde occidental de 1848 à 1914. | OFFICIAL_MUSEUM | STABLE | high |
| Impressionnisme / postimpressionnisme | Les collections et parcours officiels documentent Monet, Manet, Degas, Renoir, Cézanne, Van Gogh, Gauguin, Seurat, etc. | OFFICIAL_MUSEUM | STABLE | high |
| Diversité au-delà de la peinture | Le projet muséal inclut peinture, sculpture, architecture, arts décoratifs, photographie et autres formes de création de la période. | OFFICIAL_MUSEUM | STABLE | high |
| Bâtiment comme partie de l'expérience | Le musée occupe l'ancienne gare d'Orsay construite pour l'Exposition universelle de 1900 ; le musée a ouvert en 1986. | OFFICIAL_MUSEUM | STABLE | high |
| Visite actuellement possible malgré travaux | Les travaux des espaces d'accueil vont du 10 mars 2026 à l'été 2028 ; le musée reste ouvert et les collections/expositions restent accessibles, mais les accès sont modifiés. | OFFICIAL_MUSEUM | VOLATILE | high |
| Nocturne | Le jeudi, ouverture jusqu'à 21h45. | OFFICIAL_MUSEUM | VOLATILE | high |
| Gratuité | Gratuit notamment pour les moins de 18 ans, certains 18-25 ans EEE/résidents longue durée, personnes handicapées + accompagnateur ; 1er dimanche gratuit pour tous avec réservation obligatoire. | OFFICIAL_MUSEUM | VOLATILE | high |
| Familles | Parcours/livrets, poussettes disponibles, espace bébé, offre jeune public ; accessibilité du parcours annoncée pour poussettes et PMR. | OFFICIAL_MUSEUM | SEMI_STABLE | high |

### Proposition de visite provisoire

Orsay est particulièrement pertinent pour un visiteur qui veut **comprendre et voir la transition vers l'art moderne entre 1848 et 1914, avec un fort ancrage impressionniste/postimpressionniste, dans un bâtiment patrimonial qui fait lui-même partie de la visite**. La fiche doit aider à décider si cette proposition correspond à l'envie du visiteur et à préparer la visite dans le contexte de travaux 2026-2028.

Cette proposition est préférable à un jugement générique du type « musée incontournable ».

## 5. Entity map

| Entity | Type | Relation to page | External ID / sameAs | Source | Status |
|---|---|---|---|---|---|
| Musée d'Orsay | Museum | entité principale | Wikidata Q23402 ; musee-orsay.fr | Wikidata + officiel | CONFIRMED |
| Paris 7e arrondissement | Place | localisation | via Wikidata / adresse officielle | Wikidata + officiel | CONFIRMED |
| Gare d'Orsay | Building | bâtiment abritant le musée | ancienne gare construite pour Expo 1900 | officiel | CONFIRMED |
| Victor Laloux | Person | architecte de la gare | à enrichir avec ID si utile au draft | officiel | CONFIRMED |
| Impressionnisme | Theme | mouvement central de la proposition de visite | à relier seulement si utile | officiel | CONFIRMED |
| Postimpressionnisme | Theme | mouvement majeur de collection | à relier seulement si utile | officiel | CONFIRMED |
| Claude Monet | Person | artiste fortement représenté | ID externe à récupérer au besoin | officiel | CONFIRMED |
| Édouard Manet | Person | artiste / œuvres de collection | ID externe à récupérer au besoin | officiel | CONFIRMED |
| Edgar Degas | Person | artiste / œuvres de collection | ID externe à récupérer au besoin | officiel | CONFIRMED |
| Vincent van Gogh | Person | artiste / présentation dédiée documentée | ID externe à récupérer au besoin | officiel | CONFIRMED |
| Olympia | Work | œuvre des collections | ne pas promettre une visibilité actuelle sans vérification au moment du draft | officiel | CONFIRMED |
| Le Déjeuner sur l'herbe | Work | œuvre des collections | ne pas promettre une visibilité actuelle sans vérification au moment du draft | officiel | CONFIRMED |
| Bal du moulin de la Galette | Work | œuvre des collections | ne pas promettre une visibilité actuelle sans vérification au moment du draft | officiel | CONFIRMED |
| Coquelicots | Work | œuvre des collections | ne pas promettre une visibilité actuelle sans vérification au moment du draft | officiel | CONFIRMED |
| Expositions temporaires 2026 | Exhibition | contexte dynamique, non cœur evergreen | agenda officiel | officiel | TO_VERIFY at draft time |

Specific control: **aucune œuvre de la table ne doit être formulée comme « actuellement exposée » sans vérification de son statut de présentation au moment de la rédaction.** La billetterie officielle signale que certaines œuvres ne sont actuellement pas visibles.

## 6. Practical/freshness matrix

| Claim needed | Freshness class | Preferred source | Checked at | Status |
|---|---|---|---|---|
| Horaires : mar-dim 9h30-18h, jeudi 21h45, lundi fermé | VOLATILE | https://www.musee-orsay.fr/fr/visite | 2026-09-13 | CONFIRMED |
| Dernier accès / fermeture des salles | VOLATILE | https://www.musee-orsay.fr/fr/visite | 2026-09-13 | CONFIRMED |
| Plein tarif 16 € en ligne / 14 € sur place | VOLATILE | https://www.musee-orsay.fr/fr/visite/tarifs | 2026-09-13 | CONFIRMED |
| Nocturne 12 € en ligne / 10 € sur place | VOLATILE | https://www.musee-orsay.fr/fr/visite/tarifs | 2026-09-13 | CONFIRMED |
| Gratuités principales | VOLATILE | https://www.musee-orsay.fr/fr/visite/tarifs + /gratuite | 2026-09-13 | CONFIRMED |
| 1er dimanche gratuit pour tous, réservation obligatoire | VOLATILE | https://www.musee-orsay.fr/fr/visite/tarifs | 2026-09-13 | CONFIRMED |
| Travaux 10/03/2026–été 2028, musée ouvert, accès modifiés | VOLATILE | https://www.musee-orsay.fr/fr/articles/travaux-au-musee-dorsay-330932 | 2026-09-13 | CONFIRMED |
| Réservation en ligne fortement recommandée pendant travaux | VOLATILE | page travaux officielle | 2026-09-13 | CONFIRMED |
| Entrée 1 billets horodatés / entrée 2 autres publics et PMR pendant travaux | VOLATILE | page travaux + page entrer dans le musée | 2026-09-13 | CONFIRMED |
| Adresse et transports principaux | SEMI_STABLE | https://www.musee-orsay.fr/fr/visite | 2026-09-13 | CONFIRMED |
| Accessibilité du parcours et sanitaires | SEMI_STABLE | page accessibilité officielle | 2026-09-13 | CONFIRMED |
| Services famille | SEMI_STABLE | pages familles officielles | 2026-09-13 | CONFIRMED |
| Durée conseillée de visite libre | SEMI_STABLE / editorial | aucune source officielle pertinente identifiée | 2026-09-13 | MISSING |
| Expositions « en cours » | VOLATILE | agenda officiel | 2026-09-13 | CONFIRMED source path, content changes rapidly |

### Conflict noted

Un résultat secondaire daté de juin 2026 affiche un billet à **18 €**, alors que le site officiel vérifié le 2026-09-13 affiche **16 € en ligne / 14 € sur place**. Le workflow doit donc rejeter le prix secondaire et utiliser exclusivement la source officielle pour ce claim.

## 7. GEO / citation opportunities

| Question | Atomic fact/answer needed | Preferred primary source | Date sensitivity | Context/method needed |
|---|---|---|---|---|
| Que couvre le musée d'Orsay ? | création occidentale de 1848 à 1914, plusieurs disciplines | histoire/collections officielles | faible | expliquer le rôle de cette période dans la proposition de visite |
| Pourquoi Orsay est-il associé à l'impressionnisme ? | présence structurante d'œuvres/artistes impressionnistes et postimpressionnistes dans les collections | collections/parcours officiels | faible | ne pas transformer en superlatif non sourcé |
| Le musée est-il ouvert pendant les travaux ? | oui, travaux accueil 10/03/2026–été 2028, musée ouvert, accès modifiés | page travaux officielle | forte | afficher date de vérification |
| Quels sont les horaires ? | mar-mer/ven-dim 9h30-18h ; jeu 9h30-21h45 ; lun fermé | page visite | forte | afficher date de vérification |
| Combien coûte l'entrée ? | 16 € en ligne / 14 € sur place au plein tarif à la date de contrôle | tarifs officiels | forte | préciser canal d'achat + date |
| Quand Orsay est-il gratuit ? | 1er dimanche gratuit pour tous sur réservation obligatoire + catégories permanentes | tarifs/gratuité officiels | forte | séparer règle générale et bénéficiaires permanents |
| Que peut-on voir à Orsay ? | impressionnisme/postimpressionnisme + arts de 1848-1914 ; exemples d'artistes/œuvres | catalogue/collections officiels | moyenne | distinguer « dans les collections » de « visible aujourd'hui » |
| Le musée est-il adapté aux familles ? | ressources, poussettes, espace bébé, parcours et activités dédiées | pages familles | moyenne | ne pas promettre une activité temporaire sans date |

## 8. Competitor weaknesses / real information gain

1. **Volatile data conflicts.** Les guides secondaires peuvent garder des tarifs périmés ou conflictuels. Notre fiche peut afficher explicitement une date de vérification et faire de l'officiel la source de vérité.
2. **Travaux 2026-2028 insuffisamment intégrés.** C'est actuellement un facteur concret de préparation de visite : entrées modifiées, réservation recommandée, mais musée et collections ouverts.
3. **Listes d'œuvres sans statut.** Beaucoup de guides listent des « incontournables » sans distinguer collection permanente et visibilité réelle du jour. Notre modèle d'entité doit garder cette distinction.
4. **Pourquoi choisir le musée est souvent réduit à des superlatifs.** Notre gain est une proposition de visite fondée sur période + mouvements + diversité disciplinaire + bâtiment.
5. **Pratique et culturel sont souvent séparés.** La fiche peut relier la raison de visiter à la préparation concrète sans devenir un guide touristique générique.
6. **Durée présentée comme certitude.** Aucune durée libre officielle utile n'a été trouvée ; mieux vaut ne pas afficher un chiffre arbitraire dans les facts du template actuel.

## 9. Internal overlap / cannibalisation

- Closest own URLs:
  - `/musees/paris/`
  - `/themes/musees-beaux-arts/`
  - `/visiter/musees-en-famille/`
  - `/visiter/musees-avec-enfants/`
  - `/visiter/musees-accessibles/`
  - `/visiter/musees-gratuits/`
  - `/expositions/paris/`
  - `/guides/combien-de-temps-pour-visiter-un-musee/`
- SERP overlap observed: élevé sur pratique et sélection, mais ownership clair si la fiche reste centrée sur **l'entité Orsay + décision de visite**, tandis que les autres URLs comparent ou généralisent.
- Boundary this URL must keep: répondre « est-ce le musée d'Orsay que je veux visiter et comment préparer cette visite maintenant ? », sans devenir une liste de musées parisiens, un guide générique enfants/accessibilité, ni un agenda exhaustif des expositions.
- Links that should answer the next logical need: Paris, beaux-arts/impressionnisme si cluster disponible, musées avec enfants, musées accessibles, musées gratuits, expositions à Paris, guide de durée lorsque celui-ci possède une méthodologie crédible.

## 10. Data gaps

- **Durée conseillée de visite libre :** aucune source officielle ou méthodologie propre au site n'a été identifiée. Ne pas afficher de chiffre arbitraire dans le draft.
- **Affluence / meilleur moment :** aucune donnée primaire observée dans ce test. Ne pas affirmer « venez tôt », « évitez le week-end », etc. comme faits sans source/méthode.
- **Statut d'exposition de chaque œuvre :** à vérifier individuellement au moment du draft si la formulation implique qu'elle est visible aujourd'hui.
- **Volumes SEO / GSC :** aucune donnée keyword/GSC spécifique au site n'est disponible dans ce test. La priorité est donc basée sur SERP observée + intention, pas sur des volumes inventés.
- **Entités sameAs artistes/œuvres :** IDs externes non nécessaires au gate initial ; à enrichir seulement pour les entités réellement utilisées dans le draft/schema.

## Gate

- [x] Current SERP inspected for primary query and meaningful variants where needed.
- [x] Search intent supported by evidence, not only slug/keyword.
- [x] URL ownership is clear.
- [x] MUST items explicit.
- [x] Visit proposition is evidence-backed.
- [x] Critical museum/entity relationships are confirmed or excluded.
- [x] Volatile claims needed for the page have a source path and date strategy.
- [x] Information gain is concrete.
- [x] No blocking internal cannibalisation remains unresolved.

**Gate result: READY_FOR_BRIEF.**

The missing duration estimate is not blocking because it is not required to satisfy the core intent and must not be fabricated.

## Sources inspected

### Official museum

- https://www.musee-orsay.fr/fr/visite
- https://www.musee-orsay.fr/fr/visite/tarifs
- https://www.musee-orsay.fr/fr/visite/tarifs/gratuite
- https://www.musee-orsay.fr/fr/articles/travaux-au-musee-dorsay-330932
- https://www.musee-orsay.fr/fr/articles/entrer-dans-le-musee-296246
- https://www.musee-orsay.fr/fr/articles/accessibilite-au-musee-dorsay-373945
- https://www.musee-orsay.fr/fr/vous-etes/familles/visite-libre-en-famille
- https://www.musee-orsay.fr/fr/articles/histoire-du-musee-60
- https://www.musee-orsay.fr/fr/collections/peintures
- https://www.musee-orsay.fr/fr/node/117
- https://www.musee-orsay.fr/fr/articles/van-gogh-nouvelle-presentation-des-oeuvres-de-lartiste-au-musee-dorsay-277393

### Entity database

- https://www.wikidata.org/wiki/Q23402

### SERP/editorial comparison

- https://www.lonelyplanet.com/articles/guide-to-musee-orsay
- https://www.routard.com/fr/guide/france/ile-de-france/paris/7eme-arrondissement/musee-d-orsay
- https://www.paris-story.com/fr/que-voir-au-musee-dorsay/
- https://paris-toujours.com/le-mag/pratique/guide-visite-musee-orsay/
- https://www.thebettervacation.com/fr/paris/what-to-see-at-musee-dorsay/
