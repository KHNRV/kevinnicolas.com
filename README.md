# kevinnicolas.com

Portfolio de Kevin Nicolas, reconstruit en français à partir de l’ancien site Adobe Portfolio.
Site entièrement statique : aucune dépendance, aucun cadriciel.

## Structure

| Chemin | Rôle |
| --- | --- |
| `src/donnees.mjs` | **Tout le contenu** : textes, projets, images, vidéos Vimeo, liens. C’est le seul fichier à modifier pour mettre le site à jour. |
| `outils/construire.mjs` | Génère les pages HTML à partir des données. |
| `outils/telecharger-images.mjs` | Copie les images du CDN d’Adobe dans `images/`. |
| `assets/` | Feuille de style et petit script (visionneuse d’images). |
| `index.html`, `a-propos/`, `<projet>/` … | Pages générées : ne pas les modifier à la main. |
| `en/` | Anciennes notes en anglais (non publiées par le générateur). |

Les adresses de l’ancien site sont conservées (`/follow-on-the-road`, `/hexagram`, etc.).
`/work`, `/about` et `/diffraction` redirigent vers leurs nouvelles pages.

## Mettre le site à jour

```sh
# 1. modifier src/donnees.mjs
# 2. regénérer les pages
npm run construire
# 3. prévisualiser sur http://localhost:3000
npm run apercu
```

## Avant de résilier Adobe Portfolio

Les images sont pour l’instant servies depuis `cdn.myportfolio.com`. Pour les rapatrier dans le dépôt :

```sh
npm run images
```

Le script télécharge chaque image dans `images/`, puis regénère les pages pour qu’elles
utilisent les copies locales. Il suffit ensuite de commiter le dossier `images/`.

## Mise en ligne

N’importe quel hébergeur statique convient (GitHub Pages, Netlify, Cloudflare Pages…) :
il suffit de publier la racine du dépôt. Pour GitHub Pages avec le domaine personnalisé,
ajouter un fichier `CNAME` contenant `kevinnicolas.com`.
