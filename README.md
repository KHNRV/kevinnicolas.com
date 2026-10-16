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

## Mise en ligne (GitHub Pages)

Le workflow `.github/workflows/pages.yml` regénère et publie le site à chaque poussée sur `main`
(seules les pages publiques sont mises en ligne, pas `src/`, `outils/` ni `en/`).

Réglage à faire une seule fois : **Settings → Pages → Build and deployment → Source : GitHub Actions**.

Adresse : <https://khnrv.github.io/kevinnicolas.com/>

### Passer au domaine kevinnicolas.com

1. Ajouter à la racine un fichier `CNAME` contenant `kevinnicolas.com`.
2. Chez le registraire, faire pointer le domaine vers GitHub Pages
   (enregistrements A vers 185.199.108.153, .109.153, .110.153 et .111.153,
   et `www` en CNAME vers `khnrv.github.io`).
3. Dans Settings → Pages, saisir le domaine et cocher « Enforce HTTPS ».

Ne pas ajouter le `CNAME` avant d’avoir changé le DNS : l’adresse github.io redirigerait
alors vers l’ancien site Adobe.
