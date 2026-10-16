// Génère les pages HTML statiques du site à partir de src/donnees.mjs.
// Utilisation : node outils/construire.mjs

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, aPropos, projets, redirections } from '../src/donnees.mjs';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
// Empreinte des fichiers statiques, pour forcer le rafraîchissement du cache quand ils changent.
const VERSION = createHash('sha1')
  .update(readFileSync(join(RACINE, 'assets/style.css')))
  .update(readFileSync(join(RACINE, 'assets/site.js')))
  .digest('hex')
  .slice(0, 8);

const echapper = (texte) =>
  String(texte)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Si l'image a été téléchargée par outils/telecharger-images.mjs, on sert la copie locale.
const fichierLocal = (url) => 'images/' + basename(new URL(url).pathname);
const image = (url, prefixe) => {
  const local = fichierLocal(url);
  return existsSync(join(RACINE, local)) ? prefixe + local : url;
};

const icones = {
  linkedin:
    '<path d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z"/>',
  medium:
    '<path d="M23.5,7.4L23.5,7.4l-5.2-2.6c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.2,0-0.4,0.1-0.5,0.3l-3,4.8l3.7,6.1L23.5,7.4z"/><polygon points="13,8.8 13,14.3 17.9,16.7"/><path d="M18.6,17.1l4,2c0.5,0.3,0.9,0.1,0.9-0.4V9L18.6,17.1z"/><path d="M12.1,7.4l-5-2.5C7,4.9,6.9,4.8,6.8,4.8C6.6,4.8,6.4,5,6.4,5.3v10.9c0,0.3,0.2,0.6,0.5,0.8l4.4,2.2c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.6L12.1,7.4z"/>',
  github:
    '<path d="M15,4c-4.5,0-8.2,3.7-8.2,8.2c0,3.6,2.4,6.7,5.6,7.8c0.4,0.1,0.6-0.2,0.6-0.4c0-0.2,0-0.8,0-1.5c-2.3,0.5-2.8-1-2.8-1c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5c0.8,0.1,1.3,0.8,1.3,0.8c0.7,1.3,1.9,0.9,2.4,0.7c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.7-0.9-3.7-4.1c0-0.9,0.3-1.6,0.8-2.2c-0.1-0.2-0.4-1,0.1-2.2c0,0,0.7-0.2,2.3,0.8C13.6,8.1,14.3,8,15,8c0.7,0,1.4,0.1,2.1,0.3c1.6-1.1,2.3-0.8,2.3-0.8c0.4,1.1,0.2,2,0.1,2.2c0.5,0.6,0.8,1.3,0.8,2.2c0,3.2-1.9,3.8-3.7,4c0.3,0.3,0.6,0.8,0.6,1.5c0,1.1,0,2,0,2.3c0,0.2,0.1,0.5,0.6,0.4c3.3-1.1,5.6-4.2,5.6-7.8C23.2,7.7,19.5,4,15,4z"/>',
  courriel:
    '<path d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1V8.8L15,14.8z"/>',
};

const reseaux = () =>
  `<ul class="reseaux">${site.reseaux
    .map(
      (r) =>
        `<li><a href="${r.url}"${r.url.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} aria-label="${r.nom}" title="${r.nom}"><svg viewBox="0 0 30 24" aria-hidden="true">${icones[r.icone]}</svg></a></li>`,
    )
    .join('')}</ul>`;

const gabarit = ({ titre, description, prefixe, actif, contenu, imageOg, chemin }) => `<!doctype html>
<html lang="fr-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${echapper(titre ? `${titre} — ${site.nom}` : site.nom)}</title>
<meta name="description" content="${echapper(description)}">
<link rel="canonical" href="${site.url}/${chemin}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_CA">
<meta property="og:title" content="${echapper(titre || site.nom)}">
<meta property="og:description" content="${echapper(description)}">
${imageOg ? `<meta property="og:image" content="${echapper(imageOg)}">\n<meta name="twitter:card" content="summary_large_image">` : ''}
<link rel="icon" href="${site.favicon}">
<link rel="apple-touch-icon" href="${site.appleTouchIcon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap">
<link rel="stylesheet" href="${prefixe}assets/style.css?v=${VERSION}">
<script src="${prefixe}assets/site.js?v=${VERSION}" defer></script>
</head>
<body>
<a class="evitement" href="#contenu">Aller au contenu</a>
<header class="entete">
  <a class="logo" href="${prefixe || './'}">${site.nom}</a>
  <nav class="menu" aria-label="Navigation principale">
    <a href="${prefixe || './'}"${actif === 'portfolio' ? ' aria-current="page"' : ''}>Portfolio</a>
    <a href="${prefixe}a-propos/"${actif === 'a-propos' ? ' aria-current="page"' : ''}>À propos</a>
  </nav>
  ${reseaux()}
</header>
<main id="contenu">
${contenu}
</main>
<footer class="pied">
  <a class="haut" href="#contenu"><span aria-hidden="true">↑</span> Haut de page</a>
  <p>© ${new Date().getFullYear()} ${site.nom} · <a href="mailto:${site.courriel}">${site.courriel}</a></p>
</footer>
</body>
</html>
`;

const carte = (p, prefixe, niveauTitre = 'h2') => `<a class="carte" href="${prefixe}${p.slug}/">
  <div class="carte-image"><img src="${image(p.couverture, prefixe)}" alt="" loading="lazy" decoding="async"></div>
  <div class="carte-texte"><${niveauTitre} class="carte-titre">${echapper(p.titre)}</${niveauTitre}><span class="carte-annee">${p.annee}</span></div>
</a>`;

const grille = (liste, prefixe, classe = '', niveauTitre) =>
  `<div class="grille ${classe}">${liste.map((p) => carte(p, prefixe, niveauTitre)).join('\n')}</div>`;

const paragraphes = (textes = []) => textes.map((t) => `<p>${echapper(t)}</p>`).join('\n');

const video = (v) => {
  const params = new URLSearchParams({ dnt: '1', title: '0', byline: '0', portrait: '0' });
  if (v.hash) params.set('h', v.hash);
  return `<div class="video" style="aspect-ratio:${v.ratio.toFixed(4)}">
  <iframe src="https://player.vimeo.com/video/${v.vimeo}?${params}" title="${echapper(v.titre)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>`;
};

const galerieImages = (images = [], titre, prefixe) =>
  images.length
    ? `<div class="images">${images
        .map(
          (url, i) =>
            `<a class="image" href="${image(url, prefixe)}" data-visionneuse><img src="${image(url, prefixe)}" alt="${echapper(titre)} — image ${i + 1}" loading="lazy" decoding="async"></a>`,
        )
        .join('\n')}</div>`
    : '';

const generique = (sections) =>
  sections
    ? `<details class="generique">
  <summary>Générique complet</summary>
  ${sections
    .map(
      (s) => `<section>
    ${s.titre ? `<h3>${echapper(s.titre)}</h3>` : ''}
    <dl>${s.lignes.map(([role, noms]) => `<div><dt>${echapper(role)}</dt><dd>${echapper(noms)}</dd></div>`).join('')}</dl>
  </section>`,
    )
    .join('\n')}
</details>`
    : '';

const enTeteProjet = (p) => `<header class="projet-entete">
  <h1>${echapper(p.titre)}</h1>
  ${p.roles ? `<p class="roles">— ${p.roles.map(echapper).join(' — ')} —</p>` : ''}
  ${p.artiste ? `<p class="roles">${echapper(p.artiste)}</p>` : ''}
  ${p.supervision ? `<p class="supervision">${echapper(p.supervision)}</p>` : ''}
  <div class="description">${paragraphes(p.description)}</div>
  <p class="annee">${p.annee}</p>
</header>`;

const autres = (titre, liste, prefixe) => `<section class="autres">
  <h2>${titre}</h2>
  ${grille(liste, prefixe, 'grille-4', 'h3')}
</section>`;

const ecrire = (chemin, html) => {
  const fichier = join(RACINE, chemin);
  mkdirSync(dirname(fichier), { recursive: true });
  writeFileSync(fichier, html);
  console.log('✓', chemin);
};

const resume = (p) => (p.description?.[0] || p.texte?.[0] || site.description).slice(0, 300);

// Accueil
ecrire(
  'index.html',
  gabarit({
    titre: null,
    description: site.description,
    prefixe: '',
    actif: 'portfolio',
    chemin: '',
    imageOg: projets[0].couverture,
    contenu: `<h1 class="visuellement-cache">Portfolio de ${site.nom}</h1>\n${grille(projets, '', 'grille-2')}`,
  }),
);

// À propos
ecrire(
  'a-propos/index.html',
  gabarit({
    titre: 'À propos',
    description: aPropos.texte,
    prefixe: '../',
    actif: 'a-propos',
    chemin: 'a-propos/',
    imageOg: aPropos.portrait,
    contenu: `<section class="a-propos">
  <img class="portrait" src="${image(aPropos.portrait, '../')}" alt="Portrait de ${site.nom}">
  <div>
    <h1>À propos</h1>
    <p class="intro">${echapper(aPropos.texte)}</p>
    <p>Pour me joindre : <a href="mailto:${site.courriel}">${site.courriel}</a></p>
    ${reseaux()}
  </div>
</section>`,
  }),
);

// Projets
for (const p of projets) {
  const prefixe = '../';
  const contenu = [
    `<article class="projet">`,
    enTeteProjet(p),
    ...(p.videos || []).map(video),
    galerieImages(p.images, p.titre, prefixe),
    p.galerie ? `<section class="sous-galerie"><h2 class="visuellement-cache">Les œuvres de l’exposition</h2>${grille(p.galerie, prefixe, 'grille-3', 'h3')}</section>` : '',
    generique(p.generique),
    `</article>`,
    autres('Vous aimerez aussi', projets.filter((x) => x !== p), prefixe),
  ].join('\n');
  ecrire(
    `${p.slug}/index.html`,
    gabarit({ titre: p.titre, description: resume(p), prefixe, actif: 'portfolio', chemin: `${p.slug}/`, imageOg: p.couverture, contenu }),
  );

  for (const g of p.galerie || []) {
    const contenuGalerie = [
      `<article class="projet">`,
      `<p class="fil"><a href="${prefixe}${p.slug}/">← ${echapper(p.titre)}</a></p>`,
      enTeteProjet({ ...g, description: g.texte }),
      galerieImages(g.images, g.titre, prefixe),
      `</article>`,
      autres(`Autres œuvres de l’exposition ${p.titre}`, p.galerie.filter((x) => x !== g), prefixe),
    ].join('\n');
    ecrire(
      `${g.slug}/index.html`,
      gabarit({
        titre: g.titre,
        description: `${g.titre}, ${g.artiste} — photographies de l’exposition ${p.titre} (${g.annee}).`,
        prefixe,
        actif: 'portfolio',
        chemin: `${g.slug}/`,
        imageOg: g.couverture,
        contenu: contenuGalerie,
      }),
    );
  }
}

// Redirections des anciennes adresses
for (const r of redirections) {
  ecrire(
    `${r.de}/index.html`,
    `<!doctype html>
<html lang="fr-CA">
<head>
<meta charset="utf-8">
<title>Redirection — ${site.nom}</title>
<meta http-equiv="refresh" content="0; url=../${r.vers}">
<link rel="canonical" href="${site.url}/${r.vers}">
<meta name="robots" content="noindex">
</head>
<body><p>Cette page a déménagé : <a href="../${r.vers}">continuer</a>.</p></body>
</html>
`,
  );
}

// 404 (servie depuis n'importe quelle profondeur : chemins absolus)
ecrire(
  '404.html',
  gabarit({
    titre: 'Page introuvable',
    description: 'Cette page n’existe pas.',
    prefixe: '/',
    actif: null,
    chemin: '404.html',
    contenu: `<section class="introuvable"><h1>Page introuvable</h1><p>La page demandée n’existe pas ou a été déplacée.</p><p><a href="/">Retour au portfolio</a></p></section>`,
  }),
);

// Plan du site
const pages = ['', 'a-propos/', ...projets.flatMap((p) => [`${p.slug}/`, ...(p.galerie || []).map((g) => `${g.slug}/`)])];
ecrire(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}/${p}</loc></url>`).join('\n')}
</urlset>
`,
);
ecrire('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
