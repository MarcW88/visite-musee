# Photos des musées — lot pilote du 28 octobre 2026

## Audit ciblé et décision

Les fiches et cartes d’accueil ne contenaient aucune photographie. Décision : ajout de médias uniquement, sans réécriture des sources éditoriales, modification des routes ou de l’indexation. Le lot pilote porte sur Louvre et Orsay avant validation humaine de sa généralisation.

## Sources et rendu

Les fiches Commons, leurs descriptions, auteurs et licences ont été consultés le 28 octobre 2026. Métadonnées et révisions : `content/data/museum-images.json`. Les deux fichiers JPEG de 1280 px sont servis localement depuis `assets/images/museums/` ; aucune requête Commons côté visiteur. Les fichiers restent sous leur licence individuelle (CC BY 2.0 pour Louvre ; CC BY-SA 2.0 pour Orsay), indépendamment du code du dépôt. Redimensionnement Commons, aucune modification ni recadrage supplémentaire. Crédit, auteur, fiche source et licence sont affichés à chaque réutilisation.

La photo du Louvre représente le pavillon de Rohan. La photo d’Orsay représente le détail de sa façade et son horloge. Ce sont des documents de contexte, pas une preuve d’état actuel des lieux.

## Vérification

- Build et contrôle natif : 237 pages valides, conservation des textes et liens sources.
- Intégrité des agents : 555 fichiers conformes.
- Playwright : accueil et deux fiches à 320, 390, 768 et 1440 px, 12 observations ; images décodées, crédits présents et aucun débordement horizontal.
- Inspection des captures mobile et desktop dans `.artifacts/design-review/images-pilot/`.
- Validation de présentation en attente du propriétaire ; pas de publication pour ce lot.

## Suite après validation

Sélectionner les photos des autres musées individuellement, confirmer leur identité et leurs crédits, puis reprendre le même manifeste dans les cartes thématiques et géographiques. Ne pas générer automatiquement une association musée-photo à partir du seul nom.

## Lot 2 — fiches supplémentaires et cartes

Ajout de cinq photos vérifiées : Palais des Beaux-Arts de Lille, Petit Palais, musée Fabre, musée des Beaux-Arts de Rouen et musée des Confluences. Total actuel : 7 fiches illustrées sur 126. Les photos sont reprises sur les cartes existantes correspondantes (annuaire, villes, départements, régions et thèmes). Le rendu ne crée ni nouvelle route ni association pour les 119 fiches restantes.

L’inspection visuelle a écarté le fichier Commons `Musée des Confluences @ La Confluence @ Lyon (36217533232).jpg` : il montrait les abords, pas le bâtiment. Le fichier retenu est `The Musée des Confluences from the Rhône, 2025.jpg`, par Ronavni, CC BY-SA 4.0. Les autres fichiers et licences sont consignés dans le manifeste.

Vignettes Commons locales de 330 px avec `srcset` adapté aux listes et cartes ; photos de fiche de 1280 px. Conservation du cadre complet, sans recadrage CSS. Les crédits restent hors du lien vers la fiche et sont masqués avec leur entrée lorsque les filtres l’excluent. Aucun JavaScript ajouté.

Validation locale : 48 observations Playwright sur 12 routes/états à quatre largeurs (320, 390, 768, 1440 px), sans débordement. Images visibles décodées et crédits présents ; inspection des cinq nouvelles photos et des captures mobile/desktop. Suite `test:discovery` réussie (filtres, pagination, recherche, ancres, clavier et absence de JS). Génération répétée identique sur 237 pages, contrôle natif et intégrité des 555 fichiers agents réussis. Contrôles du manifeste intégrés à `scripts/check.mjs` pour empêcher les fichiers absents et les crédits incomplets.

Le lot 2 est préparé localement ; validation humaine avant le prochain lot de sélection d’images, consacré aux musées normands. Aucune publication de ces changements à ce stade.

## Lot 3 — onze photos normandes

Fiches ajoutées : Christian Dior à Granville, Eugène-Boudin à Honfleur, Les Pêcheries à Fécamp, Le Secq des Tournelles et la Céramique à Rouen, château-musée de Dieppe, MuMa au Havre, Mémorial de Caen, Tapisserie de Bayeux, musée de Normandie et musée des Beaux-Arts de Caen. Total : 18 fiches illustrées sur 126, dont 12 normandes (avec les Beaux-Arts de Rouen du lot 2).

Les onze fichiers ont été inspectés avant intégration. La première photo de la Céramique, trop encombrée au premier plan, a été remplacée par une vue plus nette de 2025. Les deux vues intérieures sont explicitement identifiées : Eugène-Boudin (2024) et Le Secq des Tournelles (2010). La légende de Bayeux précise également 2017. Aucune photo ne sert de preuve d’ouverture ou de présentation actuelle des collections. Les informations et avertissements éditoriaux des fiches sont conservés.

Les champs de source, révision, auteur, licence et date de prise de vue proviennent de l’API Commons consultée le 28 octobre 2026. Les trois photos CC0 par Andy Li sont identifiées comme telles, avec lien vers la déclaration CC0 ; le contrôle natif accepte ce statut en plus des licences CC BY et CC BY-SA. Les versions 1280 px et 330 px sont servies localement. La hauteur des photos verticales est limitée à 520 px dans l’aperçu pratique, avec conservation du cadre entier.

### Vérifications du lot 3

- `npm run build` et `npm run check` : 237 pages valides ; textes, liens, ancres et noindex conservés.
- Génération répétée identique sur les 237 pages.
- `npm run test:images` : 96 observations sur les 18 fiches illustrées, accueil, annuaire, Normandie, Beaux-arts et deux états de recherche, à 320/390/768/1440 px. Toutes les images visibles ont été décodées ; crédits et licences présents, absence de débordement, aucun visuel orphelin après filtrage.
- Captures mobile et desktop inspectées, notamment Dior, Céramique et annuaire Normandie. Preuves : `.artifacts/design-review/museum-images/`.
- `python3 scripts/verify_site_agents.py` : 555 fichiers conformes. `git diff --check` réussi.
- Suite média ajoutée à la CI avec conservation des captures. Elle a été exécutée localement ; aucun nouveau contrôle distant ni déploiement pour cette branche à ce stade.

Statut : lot 3 prêt pour validation humaine avant poursuite des autres musées. Aucune publication des lots images à ce stade.

## Lot 4 — neuf autres musées normands

Photos ajoutées : musée des impressionnismes Giverny, Villa Montebello à Trouville, musée Thomas-Henry à Cherbourg, musée de Vire Normandie, château-musée de Flers, musée Quesnel-Morinière à Coutances, Villa du Temps retrouvé à Cabourg, Scriptorial à Avranches et musée Baron Gérard à Bayeux. Total : 27 fiches sur 126, dont 21 normandes.

Chaque candidat a été inspecté. Deux vues de Tatihou (`Musee Tatihou3305.jpg` et `Musee Tatihou3297.jpg`) ont été écartées pour leur manque de netteté et leur exposition ; aucune image de remplacement sans rapport avec le musée n’a été insérée. Tatihou reste à traiter.

La vue intérieure Thomas-Henry précise sa date de 2016. Giverny et le Scriptorial sont datés dans leur légende. Le fichier du Scriptorial est une photographie de Man vyi déclarée dans le domaine public par son auteur (`PD-self`, permission explicite dans les métadonnées Commons). Sa mention de droits renvoie à la section de la fiche source : aucune licence CC n’est inventée. Le contrôle natif et le test navigateur prennent en charge cette déclaration de domaine public, en plus des licences déjà utilisées.

Vérifications : génération et contrôle natifs réussis sur 237 pages ; 132 observations Playwright à quatre largeurs sur les 27 fiches illustrées et les six pages/états de navigation ; images chargées et décrites, sources et statuts de droits visibles, filtres sans image orpheline, aucun débordement. Captures inspectées à 390 et 1440 px, notamment Giverny, Vire et Scriptorial. Preuves : `.artifacts/design-review/museum-images-lot4/`. Intégrité des 555 fichiers agents et `git diff --check` réussis.

Statut : lot 4 prêt pour validation humaine avant poursuite. Les lots images restent locaux, sans publication.

## Lot 5 — neuf photos normandes supplémentaires

Ajouts : château de Martainville, musée des Beaux-Arts de Bernay, musée Blanche Hoschedé-Monet à Vernon, musée du Prieuré à Harfleur, abbaye de Graville, Corderie Vallois, Airborne Museum de Sainte-Mère-Église, musée-mémorial de la Bataille de Normandie à Bayeux et musée du Débarquement d’Utah Beach. Total : 36 fiches sur 126, dont 30 normandes.

Les neuf images ont été inspectées individuellement. Les vues de l’Airborne Museum (scène reconstituée, 2017) et de Bayeux (véhicule exposé, 2021) sont légendées comme des documents datés des collections. Pour Vernon, les métadonnées fournissent une date de mise en ligne : elle est conservée dans `sourceDateNote`, sans l’inventer comme date de prise de vue ; la légende indique « vue ancienne ».

Le premier candidat d’Utah Beach, daté de 2023, présentait un visiteur posant au premier plan. Il a été remplacé par une vue documentaire du musée et de ses abords, explicitement datée de 2009 dans la légende. Cette photo n’est pas présentée comme une vue actuelle du site. Toutes les images de ce lot utilisent une licence CC BY-SA 3.0 ou 4.0 affichée avec l’auteur et la fiche Commons.

Contrôles : build et validation native sur 237 pages ; 168 observations Playwright à 320/390/768/1440 px sur les 36 fiches illustrées et six pages/états ; chargement, textes alternatifs, crédits, licences et visibilité après filtrage vérifiés, sans débordement. Captures mobile et desktop inspectées, notamment Bernay, Martainville et Utah Beach. Preuves : `.artifacts/design-review/museum-images-lot5/`. Intégrité des 555 fichiers agents et `git diff --check` réussis.

Statut : lot 5 prêt pour validation humaine ; aucune publication des lots images.

## Rétablissement des lots 6 à 11 validés

Le dossier repris avant le lot 12 contenait de nouveau seulement les 36 images du lot 5 ; les commits locaux de la session précédente n’étaient plus présents. Les 44 ajouts approuvés ont été rétablis depuis les mêmes fichiers Commons et avec les mêmes légendes, en relisant leurs métadonnées et droits. Les contrôles du lot 12 couvrent de nouveau les 80 fiches précédemment illustrées et les nouveaux ajouts. Cette reprise ne publie aucun fichier.

Les crédits particuliers sont préservés : © Peter Potrowl à Alençon ; Daderot comme photographe à Carnavalet ; Photo : Myrabella et Wikimedia Commons à Grévin ; Sawyer sur Wikipédia français pour Hauville ; PD-self avec lien Licensing pour le Granit, Azeville, maison Millet et Cernuschi. La date EXIF de 2008 du Granit est distincte du téléversement de 2010. Le détail de façade Alfred-Canel, le théâtre de Guise, le jardin de La Piscine et les abords sculptés du musée d’Art moderne restent correctement nommés. Blangy conserve sa source d’identification institutionnelle. Les vues anciennes gardent leurs dates ou la mention vue ancienne ; les avis de fermeture éditoriaux restent inchangés.

La liste intégrale des fichiers rétablis, leurs révisions, captions, auteurs, liens et licences est conservée dans content/data/museum-images.json. Les nouvelles lectures de provenance sont sous .artifacts/commons-recovery/. Les candidats précédemment écartés ne sont pas intégrés, notamment Horlogerie trop petit, Tatihou peu net, panoramas de Cherbourg, photos du musée de l’Homme centrées sur un visiteur ou des panneaux, ni le musée Ingres-Bourdelle de Montauban pour Paris.

## Lot 12 — six nouvelles photos

Ajouts : Granet à Aix-en-Provence, Grenoble, Archéologie nationale à Saint-Germain-en-Laye, Air et Espace au Bourget, Ethnographie à Honfleur et Ferme-musée du Cotentin à Sainte-Mère-Église. Total : 86 fiches illustrées sur 126, soit 40 fiches restant sans photo.

Les six images ont été inspectées avec leurs métadonnées. Granet est une façade de Malost, sous CC BY-SA 3.0 : faute de date de prise de vue explicite dans les métadonnées, la légende indique vue ancienne. La version originale est utilisée, sans attribuer à Malost la variante retouchée par un tiers. Grenoble montre le bâtiment actuel en 2009, et non l’ancien musée-bibliothèque de la place de Verdun. Saint-Germain-en-Laye montre le château abritant le musée en 2017, photographie de Patrick sous CC BY-SA 2.0, avec licence Flickr confirmée par la fiche Commons.

Au Bourget, la photo de DiscoA340 (2022, CC BY-SA 4.0) montre le hall d’accueil de l’ancienne aérogare ; elle est nommée ainsi et non comme une façade extérieure. Honfleur est une photographie noir et blanc de Miniwark datée de 2019, qui montre la façade rue de la Prison, sous CC BY-SA 4.0. La machine à écrémer de la Ferme-musée est une photographie de Crochet.david de 2009, CC BY-SA 4.0 : la légende date ce document des collections, sans garantir un accrochage actuel.

Les photos d’exposition temporaire Nos marins au manoir du Tourp restent hors de ce lot. Sources, révisions, droits, dates et crédits des six ajouts sont conservés dans le manifeste ; métadonnées brutes sous .artifacts/commons-lot12/.

Contrôles natifs : 237 pages générées et contrôlées ; dimensions réelles des 86 photos et des 86 miniatures de 330 pixels conformes ; intégrité des 555 fichiers agents ; git diff --check réussi. Les sources éditoriales, fichiers agents, CNAME et noindex restent inchangés.

Playwright : 368 observations réussies sur les 86 fiches illustrées et six pages/états à 320/390/768/1440 pixels. Images décodées, alternatives, crédits, licences, filtrage et absence de débordement vérifiés après le rétablissement complet. Captures mobile et ordinateur inspectées, notamment Air et Espace et Ethnographie à Honfleur. Preuves : .artifacts/design-review/museum-images-lot12/.

Statut : lot 12 prêt pour validation humaine ; aucune publication des photos.

## Lot 13 — sept autres photos normandes

Ajouts : Débarquement à Arromanches, Fernand-Léger – André-Mare à Argentan, Radar à Douvres-la-Délivrande, batterie de Crisbecq, patrimoine maritime de Regnéville, Bataille de Tilly-sur-Seulles et Écorché d’anatomie au Neubourg. Total : 93 fiches illustrées sur 126 ; 33 restent sans photo.

Les sept photos sont inspectées et datées dans leur légende. Arromanches montre une façade vitrée du nouveau musée en octobre 2026 (jokinzuru, CC BY-SA 4.0). Le premier candidat du même contributeur, qui montrait essentiellement la plage et une plaque, a été écarté ; deux autres variantes montraient davantage panneaux ou drapeaux au premier plan. La vue de l’ancien bâtiment n’est pas utilisée. Argentan est bien une photo de 2019 de la maison devenue musée (Madeleine Marguerite, CC BY-SA 4.0), et non la vue de 2009 de la maison avant ouverture.

Le radar SCR-584 de Douvres est une photo d’Ikmo-ned datée de 2016 (CC BY-SA 4.0). Crisbecq montre un emplacement de canon photographié en 2017 par Falcon® Photography sous CC BY-SA 2.0 ; le poste de commandement, qui constitue une visite distincte, n’est pas utilisé comme illustration du musée de la batterie. Les légendes n’affirment aucun état actuel inchangé de présentation du matériel.

Regnéville montre les fours à chaux du Rey en 2016 (Selbymay, CC BY-SA 4.0), nommés précisément dans la légende. La fiche conserve ses conditions distinctes de visite du musée maritime et des fours ; aucune équivalence d’ouverture ou de billet n’est ajoutée. Tilly montre la chapelle Notre-Dame-du-Val abritant le musée, en 2015 (Ikmo-ned, CC BY-SA 4.0). Le Neubourg montre la façade du musée en 2016 (Eponimm, CC BY-SA 4.0).

Sources, révisions, auteurs, licences et dates dans le manifeste ; candidats et métadonnées sous .artifacts/commons-lot13/. Dimensions réelles des 93 photos et des 93 miniatures de 330 pixels vérifiées. Build et check réussis sur 237 pages ; intégrité des 555 fichiers agents ; git diff --check réussi ; sources éditoriales, CNAME et noindex inchangés.

Playwright : 396 observations réussies sur les 93 fiches illustrées et six pages/états à 320/390/768/1440 pixels. Chargement des images, alternatives, crédits et licences, visibilité après filtrage et absence de débordement vérifiés. Captures mobile et ordinateur inspectées, notamment Arromanches, Argentan et Regnéville. Preuves : .artifacts/design-review/museum-images-lot13/.

Statut : lot 13 prêt pour validation humaine ; aucune publication des photos.

## Lot 14 — cinq photos pour six fiches

Ajouts : automates de Falaise (deux routes existantes), Verre François-Décorchemont à Conches, Art et Histoire de Granville, musée de l’Homme et musée maritime de Tatihou. Total : 99 fiches illustrées sur 126 ; 27 restent sans photo. Les deux fiches de Falaise concernent la même collection au même lieu : elles réutilisent le même fichier avec les mêmes crédits, sans nouvelle URL ni fusion éditoriale.

Les cinq photos retenues sont inspectées et datées. La scène d’automates de Falaise date de 2016 (Philippe Alès, CC BY-SA 4.0). Conches montre la cour du nouveau lieu du musée en 2022 (Totorvdr59, CC BY-SA 4.0). Le Logis du Roi à Granville est photographié en 2012 (HaguardDuNord, CC BY-SA 3.0) ; l’avertissement de fermeture depuis 2015 est conservé. La salle du musée de l’Homme date de 2024 (Frédéric Picard 28, CC BY-SA 4.0), sans garantir une présentation actuelle identique. Tatihou montre une reconstitution de quille de frégate en extérieur en 2011 (Raphodon, CC BY-SA 3.0), plus lisible que les précédentes vues intérieures écartées.

Les candidats des instruments à vent restent écartés : une plaque seule et une démonstration ancienne centrée sur un musicien n’offrent pas la vue recherchée. Les deux routes de La Couture-Boussey restent sans photo. Le fichier LesParapluiesDeCherbourg.jpg représente le magasin du tournage du film, et non la manufacture au 22 quai Alexandre-III : il n’est pas utilisé. Deux autres candidats du musée de l’Homme montrent un relief du palais et un dispositif interactif isolé ; la vue de salle de 2024 est préférée. Deux nouvelles photos intérieures de Tatihou sont également écartées pour leur lisibilité.

Sources, auteurs, licences, dates et révisions figurent dans le manifeste ; candidats et métadonnées sous .artifacts/commons-lot14/. Dimensions réelles des images et miniatures de 330 pixels contrôlées pour les 99 entrées. Build et check réussis sur 237 pages ; sources éditoriales et noindex conservés ; intégrité des 555 fichiers agents et git diff --check réussis.

Playwright : 420 observations réussies sur les 99 fiches illustrées et six pages/états, à 320/390/768/1440 pixels. Images décodées, alternatives, crédits et droits, filtrage sans visuel orphelin et absence de débordement vérifiés. Captures mobile et ordinateur inspectées, notamment Falaise, musée de l’Homme et Conches. Preuves : .artifacts/design-review/museum-images-lot14/.

Statut : lot 14 prêt pour validation humaine ; aucune publication des photos.

## Lot 15 — cinq nouvelles photos

Ajouts : musée d’Histoire de la vie quotidienne à Petit-Caux, Blackwater Museum à Berjou, Grosse Forge à Aube, Libération à Cherbourg et Dominicaines à Pont-l’Évêque. Total : 104 fiches illustrées sur 126 ; 22 restent sans photo.

Les cinq images ont été inspectées. La façade du musée de la vie quotidienne est une photo de Marc Ryckaert de 2017, CC BY-SA 4.0. Berjou montre le bâtiment du Blackwater Museum et des objets extérieurs en juillet 2026 (Dave osm, CC BY-SA 4.0) ; le candidat centré sur les panneaux d’entrée a été remplacé. La forge d’Aube est photographiée en 2019 (Ikmo-ned, CC BY-SA 4.0). Cherbourg montre l’entrée du musée au fort du Roule en 2019 (Xfigpower, CC BY-SA 3.0), plutôt que le panorama ou les poteaux commémoratifs précédemment écartés. Les Dominicaines montrent le bâtiment à pans de bois en 2010 (Philippe Alès, CC BY-SA 3.0). Les légendes datent les vues et ne garantissent pas une présentation actuelle identique des espaces ou collections.

Trois fichiers de la Fondation Louis Vuitton sont écartés après inspection : Fundação louis vuitton (50574655891).jpg montre surtout les abords, Fondation Louis Vuitton - Paris (50577213051).jpg un détail de fontaine, et Fondation Louis Vuitton 20160413 South 02.jpg présente une signalétique d’entrée malgré un titre et une description évoquant le bâtiment. Ce dernier original a également été téléchargé et inspecté : il ne constitue pas la vue architecturale recherchée. Aucun de ces fichiers n’entre dans les assets ni dans le manifeste ; la fiche de la fondation reste à traiter. Aucune attribution n’est déduite d’un nom de fichier seul.

Sources, auteurs, dates, licences et révisions dans le manifeste ; candidats et métadonnées sous .artifacts/commons-lot15/. Contrôle des dimensions réelles pour les 104 entrées et leurs miniatures de 330 pixels. Build et check réussis sur 237 pages ; intégrité des 555 fichiers agents et git diff --check réussis ; textes sources, CNAME et noindex conservés.

Playwright : 440 observations réussies sur les 104 fiches illustrées et six pages/états à 320/390/768/1440 pixels. Images décodées, alternatives, crédits, licences, filtrage sans image orpheline et absence de débordement vérifiés. Captures mobile et ordinateur inspectées, notamment Petit-Caux, Berjou et les Dominicaines. Preuves : .artifacts/design-review/museum-images-lot15/.

Statut : lot 15 prêt pour validation humaine ; aucune publication des photos.

## Lot 16 — trois photos et prise en charge de Wikimanche

Ajouts : Poterie du Mesnil de Bavent, ancien musée de la Poëslerie à Villedieu-les-Poêles et domaine Emmanuel-Liais à Cherbourg. Total : 107 fiches illustrées sur 126 ; 19 restent sans photo.

La photo du manoir de la Poterie du Mesnil de Bavent (Emg63, 2016, CC BY-SA 4.0) a été inspectée. Elle montre le site de production et son manoir, sans présenter les ateliers comme une nouvelle collection publique. La photo du domaine Emmanuel-Liais (JMEnault_Ville de Cherbourg-en-Cotentin, 2015, CC BY-SA 4.0) montre le parc et ses bâtiments. La Ville confirme que ce domaine héberge le muséum ; la légende ne confond pas l’ouverture du parc et celle du musée. La fiche garde son avertissement de fermeture. Source d’identité : https://www.cherbourg.fr/culture-et-loisirs/patrimoine/a-decouvrir/domaine-liais/ .

Pour la Poëslerie, le fichier Cour du Foyer Musee de la Poeslerie.JPG de P.Clairay montre un atelier et des objets de cuivre en 2010. La page Wikimanche comporte une licence CC BY-SA version 3.0 ou plus récente explicite ; le wikicode, le modèle de droits rendu et le lien de licence sont vérifiés, sans déduire les droits du seul pied de page du site. La photo est datée dans la légende et n’est pas attribuée à la nouvelle Maison du patrimoine sourdin. Source : https://www.wikimanche.fr/Fichier:Cour_du_Foyer_Musee_de_la_Poeslerie.JPG ; révision 733827. Le rendu affiche P.Clairay, Wikimanche et CC BY-SA 3.0 avec liens. Le composant média, le contrôle natif et le test navigateur reconnaissent désormais cette seconde source documentaire explicitement autorisée ; les images Commons conservent leur crédit d’origine.

Les photos du Tourp sur Wikimanche indiquent CC-BY sans version ni lien de licence dans leur page de droits ; elles ne sont pas intégrées avec une version inventée. La recherche des autres lieux a été élargie aux ressources publiques et institutionnelles, mais aucune photo n’a été copiée sous une licence présumée. Les vues des autres communes, musées homonymes ou institutions proches ne remplacent pas le musée recherché.

Sources Commons et Wikimanche, auteurs, dates, licences et révisions sont conservés dans le manifeste. Métadonnées Commons sous .artifacts/commons-lot16/ ; provenance Wikimanche sous .artifacts/wikimanche-meta16.json, wikimanche-rights16.json et poeslerie-rights-render.txt. Les trois photographies ont été inspectées avant intégration. Dimensions des 107 entrées et miniatures de 330 pixels conformes ; génération et contrôle natifs sur 237 pages réussis ; intégrité des 555 fichiers agents et git diff --check réussis. Textes sources, CNAME et noindex conservés.

Playwright : 452 observations réussies sur les 107 fiches illustrées et six pages/états à 320/390/768/1440 pixels. Images décodées, alternatives, crédits Commons ou Wikimanche et licences, filtrage sans image orpheline et absence de débordement vérifiés. Captures mobile et ordinateur inspectées, notamment la Poëslerie (source Wikimanche visible), Liais et la Poterie de Bavent. Preuves : .artifacts/design-review/museum-images-lot16/.

Statut : lot 16 prêt pour validation humaine ; aucune publication des photos.
