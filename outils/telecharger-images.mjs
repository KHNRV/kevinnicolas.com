// Télécharge dans images/ toutes les images encore hébergées sur le CDN d'Adobe Portfolio,
// pour que le site ne dépende plus de cdn.myportfolio.com une fois l'abonnement résilié.
// Utilisation : node outils/telecharger-images.mjs && node outils/construire.mjs

import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as donnees from '../src/donnees.mjs';

const RACINE = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOSSIER = join(RACINE, 'images');
mkdirSync(DOSSIER, { recursive: true });

// Récupère toutes les adresses du CDN présentes dans les données, peu importe leur emplacement.
const urls = new Set(
  JSON.stringify(donnees).match(/https:\/\/cdn\.myportfolio\.com\/[^"\\]+/g) || [],
);

let ok = 0;
let echecs = 0;
for (const url of urls) {
  const fichier = join(DOSSIER, basename(new URL(url).pathname));
  if (existsSync(fichier)) {
    ok++;
    continue;
  }
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    writeFileSync(fichier, Buffer.from(await reponse.arrayBuffer()));
    console.log('✓', basename(fichier));
    ok++;
  } catch (erreur) {
    console.error('✗', url, erreur.message);
    echecs++;
  }
}

console.log(`\n${ok} image(s) disponibles localement, ${echecs} échec(s).`);
if (echecs) process.exitCode = 1;
