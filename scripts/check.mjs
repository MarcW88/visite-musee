import fs from 'node:fs';import path from 'node:path';const root=path.resolve(import.meta.dirname,'..');const files=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['.git','node_modules','content'].includes(e.name))continue;const p=path.join(d,e.name);e.isDirectory()?walk(p):e.name.endsWith('.html')&&files.push(p)}}walk(root);const errors=[];for(const f of files){const s=fs.readFileSync(f,'utf8');if(!/assets\/styles\.css/.test(s))errors.push(`${f}: CSS absent`);if(!/noindex,follow/.test(s))errors.push(`${f}: noindex absent`);for(const href of s.matchAll(/href="([^"#]+)"/g)){const u=href[1];if(/^(https?:|mailto:)/.test(u))continue;const target=path.resolve(path.dirname(f),u);if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))errors.push(`${f}: lien cassé ${u}`)}}
const readPage = route => fs.readFileSync(path.join(root,route,'index.html'),'utf8');

// Central theme taxonomy consistency checks (all pages remain noindex).
const taxonomy=JSON.parse(fs.readFileSync(path.join(root,'content/taxonomy/museums.json'),'utf8'));
const museumSet=new Set(taxonomy.museums.map(x=>x.slug));
if(museumSet.size!==126)errors.push('Taxonomie: attendu 126 identifiants de musées distincts');
for(const item of taxonomy.museums){if(!/^[a-z0-9-]+$/.test(item.slug))errors.push('Slug mal formé '+item.slug);for(const theme of item.themes){if(!taxonomy.themeSlugs.includes(theme))errors.push('Thème inconnu '+theme+' '+item.slug)}}
for(const theme of taxonomy.themeSlugs){const html=readPage('themes/'+theme);const links=[...html.matchAll(/href="\.\.\/\.\.\/musee\/([^/]+)\/"/g)].map(m=>m[1]);const expected=taxonomy.museums.filter(item=>item.themes.includes(theme)).map(item=>item.slug);if(links.length!==expected.length||new Set(links).size!==links.length||expected.some(slug=>!links.includes(slug)))errors.push('Thème: incohérence des liens '+theme);if(!/noindex,follow/.test(html))errors.push('Thème: noindex absent '+theme)}
if(!/noindex,follow/.test(readPage('themes')))errors.push('Hub Thèmes: noindex absent');

// City/department classification and destinations checks. Duplicate identities are excluded from new shortlists.
for(const entry of taxonomy.museums.filter(m=>!m.duplicate_candidate_of)){
 for(const [field,route] of [['ville','musees'],['departement','departements']]){
  if(!entry[field])continue;
  const file=path.join(root,route,entry[field],'index.html');
  if(!fs.existsSync(file)){errors.push('Destination sans page: '+route+'/'+entry[field]);continue}
  const html=fs.readFileSync(file,'utf8');
  if(!html.includes('href="../../musee/'+entry.slug+'/'))errors.push('Destination sans lien: '+route+'/'+entry[field]+' -> '+entry.slug);
  if(!/noindex,follow/.test(html))errors.push('Destination sans noindex: '+route+'/'+entry[field]);
 }
}
for(const region of [...new Set(taxonomy.museums.map(m=>m.region))]){
 const file=path.join(root,'regions',region,'index.html');
 if(!fs.existsSync(file))errors.push('Région absente: '+region);
}
const directoryHtml = readPage('musees');
const regionalSlugs = {
  'hauts-de-france': ['louvre-lens','palais-beaux-arts-lille','musee-picardie','musee-matisse-cateau','la-piscine-roubaix','musee-conde-chantilly','musee-flandre-cassel','historial-grande-guerre-peronne','familistere-guise','cite-langue-francaise'],
  'normandie': ['musee-beaux-arts-rouen','muma-le-havre','memorial-caen','tapisserie-bayeux','christian-dior-granville','musee-beaux-arts-dentelle-alencon','musee-eugene-boudin-honfleur','musee-impressionnismes-giverny','musee-beaux-arts-caen','musee-normandie-caen','musee-ceramique-rouen','musee-le-secq-des-tournelles','musee-maritime-tatihou','musee-debarquement-arromanches','musee-liberation-cherbourg','musee-thomas-henry-cherbourg','musee-art-histoire-lisieux','musee-villa-montebello-trouville','musee-richard-anacreon-granville','musee-art-histoire-archeologie-evreux','musee-art-histoire-saint-lo','musee-baron-gerard-bayeux','musee-chateau-dieppe','les-pecheries-fecamp','villa-temps-retrouve-cabourg','musee-vire-normandie','scriptorial-avranches','musee-chateau-flers','musee-memorial-bataille-normandie-bayeux','musee-batterie-merville','airborne-museum-sainte-mere-eglise','musee-ceramique-ger','musee-beaux-arts-bernay','musee-quesnel-moriniere-coutances','musee-blanche-hoschede-monet-vernon','musee-alfred-canel-pont-audemer','musee-ethnographie-honfleur','musee-marine-honfleur','chateau-martainville-musee-traditions-normandes','musee-horlogerie-saint-nicolas-aliermont','musee-histoire-vie-quotidienne-petit-caux','musee-corderie-vallois','musee-debarquement-utah-beach','musee-mine-molay-littry','musee-meunerie-moulin-marcy','musee-prieure-harfleur','abbaye-graville-le-havre','musee-verre-blangy-sur-bresle','paleospace-villers-sur-mer','batterie-crisbecq-saint-marcouf','musee-radar-douvres-la-delivrande','musee-jouet-la-ferte-mace','musee-camembert-vimoutiers','maison-patrimoine-sourdin-villedieu','musee-bocage-normand-saint-lo','musee-instruments-vent-la-couture-boussey','manufacture-bohin-saint-sulpice-sur-risle','musee-percee-bocage-saint-martin-des-besaces','musee-fernand-leger-andre-mare-argentan','musee-nicolas-poussin-les-andelys','musee-automates-falaise','memorial-civils-guerre-falaise','musee-art-histoire-granville','musee-mobilier-miniature-vendeuvre','musee-regional-cidre-valognes','manoir-tourp-maison-hague','musee-sapeurs-pompiers-montville','musee-maritime-regneville','musee-bataille-tilly-sur-seulles','museum-emmanuel-liais-cherbourg','musee-manufacture-parapluies-cherbourg','vieux-la-romaine-musee','ferme-musee-cotentin-sainte-mere-eglise','chateau-crevecoeur-musee-schlumberger','chateau-saint-germain-livet','maison-natale-jean-francois-millet','musee-poeslerie-villedieu','musee-ecorche-anatomie-neubourg','musee-sabot-la-haye-de-routot','musee-verre-francois-decorchemont-conches','musee-comtesse-de-segur-aube','musee-grosse-forge-aube','musee-ivoires-yvetot','musee-antiquites-rouen','maison-du-lin-routot','moulin-pierre-hauville','blackwater-museum-berjou','musee-charles-leandre-conde-en-normandie','parc-musee-granit-saint-michel-de-montjoie','espace-museal-poterie-mesnil-bavent','le-monde-miniature-clecy','musee-des-automates-falaise','musee-numero-4-commando-ouistreham','musee-instruments-a-vent-la-couture-boussey','les-dominicaines-pont-leveque','musee-forge-saint-pierre-benouville','batterie-azeville-musee'],
};
const allMuseums = fs.readdirSync(path.join(root,'content','musee'),{withFileTypes:true})
  .filter(entry=>entry.isDirectory() && fs.existsSync(path.join(root,'content','musee',entry.name,'body.html')))
  .map(entry=>entry.name);
for(const slug of allMuseums) {
  if(!directoryHtml.includes(`href="../musee/${slug}/"`)) errors.push(`musees/: musée absent de l'annuaire: ${slug}`);
}
for(const [region,slugs] of Object.entries(regionalSlugs)) {
  const html = readPage(`regions/${region}`);
  for(const slug of slugs) {
    if(!html.includes(`href="../../musee/${slug}/"`)) errors.push(`regions/${region}/: fiche absente: ${slug}`);
  }
  if(/Contenu à connecter|sélection issue de la base de données/.test(html))
    errors.push(`regions/${region}/: contenu de remplissage non remplacé`);
}
// Public pages should never expose empty prototype UI as a completed service.
for(const file of files){
 const html=fs.readFileSync(file,'utf8');
 if(/Contenu à connecter|Vue géographique|Cette page accueillera|Une vue structurée de la future base|<strong>—<\/strong>/.test(html))errors.push(file+': interface de remplissage encore visible');
}
// Preserve the full museum articles when presenting practical information first.
for(const slug of allMuseums){
 const source=fs.readFileSync(path.join(root,'content/musee',slug,'body.html'),'utf8');
 const html=readPage('musee/'+slug);
 const text=html.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
 for(const match of source.matchAll(/<(p|h1|h2|h3|strong|span)\b[^>]*>([\s\S]*?)<\/\1>/g)){
  const expected=match[2].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
  if(!text.includes(expected))errors.push(slug+': texte source absent du rendu: '+expected.slice(0,80));
 }
 for(const match of source.matchAll(/\b(href|id)="([^"]+)"/g)){
  if(!html.includes(`${match[1]}="${match[2]}"`))errors.push(slug+': lien ou ancre source absent: '+match[2]);
 }
}
for(const file of files){
 const html=fs.readFileSync(file,'utf8');
 if((html.match(/id="main-content"/g)||[]).length!==1||(html.match(/class="skip-link"/g)||[]).length!==1)errors.push(file+': lien d’évitement ou cible manquante/dupliquée');
}
// A layout change must not silently discard the regional editorial source.
const normandySource=fs.readFileSync(path.join(root,'content/regions/normandie/body.html'),'utf8');
const normandyPage=readPage('regions/normandie');
const plainText=html=>html.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
const publishedText=plainText(normandyPage);
for(const match of normandySource.matchAll(/<(p|h2|h3)[^>]*>([\s\S]*?)<\/\1>/g)){
 if(!publishedText.includes(plainText(match[2])))errors.push('Normandie: texte source absent du rendu: '+plainText(match[2]).slice(0,80));
}
for(const match of normandySource.matchAll(/href="(\.\.\/\.\.\/musee\/[^\"]+)"/g)){
 if(!normandyPage.includes(`href="${match[1]}"`))errors.push('Normandie: lien source absent du rendu: '+match[1]);
}
for(const match of normandySource.matchAll(/\bid="([^"]+)"/g)){
 if(!normandyPage.includes(`id="${match[1]}"`))errors.push('Normandie: ancre source absente du rendu: '+match[1]);
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`${files.length} pages contrôlées : CSS, noindex, liens internes et conservation des textes sources valides.`)
