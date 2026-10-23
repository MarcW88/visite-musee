import fs from 'node:fs';import path from 'node:path';const root=path.resolve(import.meta.dirname,'..');const files=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(['.git','node_modules','content'].includes(e.name))continue;const p=path.join(d,e.name);e.isDirectory()?walk(p):e.name.endsWith('.html')&&files.push(p)}}walk(root);const errors=[];for(const f of files){const s=fs.readFileSync(f,'utf8');if(!/assets\/styles\.css/.test(s))errors.push(`${f}: CSS absent`);if(!/noindex,follow/.test(s))errors.push(`${f}: noindex absent`);for(const href of s.matchAll(/href="([^"#]+)"/g)){const u=href[1];if(/^(https?:|mailto:)/.test(u))continue;const target=path.resolve(path.dirname(f),u);if(!fs.existsSync(target)&&!fs.existsSync(path.join(target,'index.html')))errors.push(`${f}: lien cassé ${u}`)}}
const readPage = route => fs.readFileSync(path.join(root,route,'index.html'),'utf8');
const directoryHtml = readPage('musees');
const regionalSlugs = {
  'hauts-de-france': ['louvre-lens','palais-beaux-arts-lille','musee-picardie','musee-matisse-cateau','la-piscine-roubaix','musee-conde-chantilly','musee-flandre-cassel','historial-grande-guerre-peronne','familistere-guise','cite-langue-francaise'],
  'normandie': ['musee-beaux-arts-rouen','muma-le-havre','memorial-caen','tapisserie-bayeux','christian-dior-granville','musee-beaux-arts-dentelle-alencon','musee-eugene-boudin-honfleur','musee-impressionnismes-giverny','musee-beaux-arts-caen','musee-normandie-caen','musee-ceramique-rouen','musee-le-secq-des-tournelles','musee-maritime-tatihou','musee-debarquement-arromanches','musee-liberation-cherbourg','musee-thomas-henry-cherbourg','musee-art-histoire-lisieux','musee-villa-montebello-trouville','musee-richard-anacreon-granville','musee-art-histoire-archeologie-evreux','musee-art-histoire-saint-lo','musee-baron-gerard-bayeux','musee-chateau-dieppe','les-pecheries-fecamp','villa-temps-retrouve-cabourg','musee-vire-normandie','scriptorial-avranches','musee-chateau-flers','musee-memorial-bataille-normandie-bayeux','musee-batterie-merville','airborne-museum-sainte-mere-eglise','musee-ceramique-ger','musee-beaux-arts-bernay','musee-quesnel-moriniere-coutances','musee-blanche-hoschede-monet-vernon'],
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
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`${files.length} pages contrôlées : CSS, noindex et liens internes valides.`)
