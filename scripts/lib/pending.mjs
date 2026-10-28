export function pendingPage({ title, type, prefix = '../../', localLink = '' }) {
  const isExhibition = type === 'expositions';
  const isGuide = type === 'guides';
  const status = isExhibition ? 'Programmation en préparation' : isGuide ? 'Guide en préparation' : 'Sélection en préparation';
  const description = isExhibition
    ? 'La programmation des expositions n’est pas encore disponible sur Visite Musée. Consultez le site officiel du musée qui vous intéresse pour connaître ses expositions et leurs dates.'
    : isGuide
      ? 'Ce guide est en préparation. Pour organiser votre sortie dès maintenant, consultez les fiches des musées, puis confirmez les informations pratiques sur les sites officiels.'
      : 'Cette sélection n’est pas encore disponible. En attendant, explorez les musées par destination ou par collection, puis vérifiez les conditions de visite auprès de chaque établissement.';
  return `<section class="page-hero pending-page" data-page-state="pending"><div class="wrap"><div class="eyebrow">${status}</div><h1>${title}</h1><p class="page-intro">${description}</p><div class="pending-actions">${localLink}<a class="button" href="${prefix}musees/">EXPLORER LE CATALOGUE →</a><a class="chip" href="${prefix}themes/">Choisir un thème</a><a class="chip" href="${prefix}regions/">Choisir une destination</a></div></div></section>`;
}
