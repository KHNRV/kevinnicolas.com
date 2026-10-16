// Visionneuse d'images plein écran pour les galeries de projets.
(() => {
  const liens = Array.from(document.querySelectorAll('[data-visionneuse]'));
  if (!liens.length) return;

  const boite = document.createElement('div');
  boite.className = 'visionneuse';
  boite.hidden = true;
  boite.setAttribute('role', 'dialog');
  boite.setAttribute('aria-modal', 'true');
  boite.setAttribute('aria-label', 'Visionneuse d’images');
  boite.innerHTML = `
    <img alt="">
    <button class="fermer" type="button" aria-label="Fermer">×</button>
    <button class="precedente" type="button" aria-label="Image précédente">‹</button>
    <button class="suivante" type="button" aria-label="Image suivante">›</button>`;
  document.body.append(boite);

  const img = boite.querySelector('img');
  const [fermer, precedente, suivante] = boite.querySelectorAll('button');
  let index = 0;
  let declencheur = null;

  const afficher = (i) => {
    index = (i + liens.length) % liens.length;
    img.src = liens[index].href;
    img.alt = liens[index].querySelector('img')?.alt || '';
  };

  const ouvrir = (i) => {
    declencheur = document.activeElement;
    afficher(i);
    boite.hidden = false;
    document.body.style.overflow = 'hidden';
    fermer.focus();
  };

  const clore = () => {
    boite.hidden = true;
    document.body.style.overflow = '';
    declencheur?.focus();
  };

  liens.forEach((lien, i) =>
    lien.addEventListener('click', (e) => {
      e.preventDefault();
      ouvrir(i);
    }),
  );

  fermer.addEventListener('click', clore);
  precedente.addEventListener('click', () => afficher(index - 1));
  suivante.addEventListener('click', () => afficher(index + 1));
  boite.addEventListener('click', (e) => {
    if (e.target === boite) clore();
  });

  document.addEventListener('keydown', (e) => {
    if (boite.hidden) return;
    if (e.key === 'Escape') clore();
    if (e.key === 'ArrowLeft') afficher(index - 1);
    if (e.key === 'ArrowRight') afficher(index + 1);
  });
})();
