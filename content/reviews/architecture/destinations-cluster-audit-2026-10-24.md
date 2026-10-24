# CLUSTER_AUDIT & PUBLISH_REVIEW — Destinations, villes, départements
Date : 2026-10-24. Statut : FAIL — KEEP_NOINDEX tant que build réel, CI, déploiement HTTP et Playwright ne sont pas certifiés.
## Périmètre
Phase approuvée : revoir la classification des 126 fiches, les 22 sans catégorie, et structurer régions/destinations/villes/départements. Les pages d'intention de visite (/visiter/), expositions, inspiration et fiches individuelles n'ont pas été éditées. Tous les noindex d'origine doivent rester en place.
## Taxonomie
content/taxonomy/museums.json version 2, 126 URL enregistrées et 124 identités distinctes probables : 2 paires de doublons confirmées par les noms JSON-LD (musee-automates-falaise / musee-des-automates-falaise ; musee-instruments-vent-la-couture-boussey / musee-instruments-a-vent-la-couture-boussey). Aucun canonical, noindex, URL ni redirect modifiés. Anciennes URL exclues des nouvelles sélections ; elles restent dans l'ancien annuaire et dans la liste Normandie jusqu'à une validation de fusion.
Les 22 fiches précédemment sans catégorie ont été examinées à partir des titres, descriptifs et entités JSON-LD des meta.json. 20 reçoivent des thèmes éditoriaux ; les 2 identités doublonnées restent sans lien thématique vers la fiche secondaire. Revue correctrice supplémentaire : Maison natale Millet n'est plus classée art contemporain ; Corderie Vallois n'est plus assimilée à la mode ; Forge Saint-Pierre-Bénouville n'est plus assimilée à l'art décoratif ; musée de Mine Molay-Littry retiré des insolites.
154 associations thématiques de 124 fiches primaires : beaux-arts 37 ; moderne 6 ; histoire 48 ; sciences 12 ; naturelle 4 ; archéologie 4 ; décoratifs 22 ; automobile 0 ; mode 4 ; insolites 17. Classement éditorial à consolider contre les collections documentées avant indexation.
Géographie : 126 URL régionales dont 97 Normandie ; 65 fiches primaires ont un rattachement à une ville et département suffisamment établi, 59 n'en ont pas encore. Les champs incertains restent null, aucun faux rattachement à une ville voisine.
## Maillage publié sur main
13 pages de régions existantes, 11 pages départementales (dont Calvados, Manche, Orne, Eure et Seine-Maritime), 47 pages de villes, 10 pages thèmes, hubs /regions/, /departements/, /musees/ et /themes/. La page Normandie comporte ses 97 liens historiques aux musées et les nouveaux renvois par villes et cinq départements. Le hub région et le hub département relient les territoires. L'annuaire relie les principales villes normandes et leurs départements. Les pages à données vides indiquent honnêtement « sélection en préparation ».
scripts/build.mjs intègre la taxonomie et la génération géographique, et protège les HTML de fiches musées rédigées et la page Normandie contre un écrasement par le gabarit générique. scripts/check.mjs vérifie la correspondance des liens Thèmes et Destinations, les slugs, les balises noindex ainsi que les contrôles préexistants CSS et liens relatifs.
## Contrôles par GitHub fetch de main
- 13/13 pages régions présentes, sans placeholders, noindex,follow présent.
- 11/11 pages département présentes, sans placeholders, noindex,follow présent.
- 47/47 pages villes présentes, sans placeholders, noindex,follow présent.
- 10/10 pages Thèmes présentes et le nombre de liens correspond exactement à la taxonomie, noindex,follow présent.
- Les liens de nouvelles sélections sont dérivés des 126 slugs déclarés ; vérification des URL live et crawling HTTP non réalisés.
- Aucun retrait d'indexation, de canonical ou de contenu des fiches individuelles.
## Écarts / dette à valider
1. 59 fiches primaires attendent encore une vérification ville/département ; ne pas leur inventer d'affectation.
2. Deux paires de doublons d'identité restent sur les URL historiques et les hubs région/annuaire ; une fusion/décision canonical doit être approuvée séparément.
3. Plusieurs pages d'autres régions, villes, départements disposent de 0 musée dans la taxonomie et présentent un état sans données, plutôt qu'une sélection complète.
4. Les libellés issus de slugs dans certaines cartes des nouvelles pages demandent une passe éditoriale de noms/accents, idéalement via le schéma Museum.name.
5. Les sélections d'intentions de visite requièrent des preuves actualisées (gratuité, famille, accessibilité, horaires) et doivent faire l'objet d'une phase distincte après validation.
6. Les liens réciproques entre chaque fiche musée et ville/département/thème ne sont pas encore diffusés dans les 124 pages individuelles et demandent une validation spécifique.
7. Pas de preuve de build Node réussi, CI vert, site HTTP déployé ou audit Playwright. GitHub status/run vides ne valent pas validation.
## Gate
FAIL — KEEP_NOINDEX; la modification des robots de toutes les fiches et catégories est interdite sans approbation humaine.
