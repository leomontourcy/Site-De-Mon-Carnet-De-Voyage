# Carnet de voyage — Léo Montourcy

Site web personnel qui présente mes voyages sur une **carte du monde interactive**, avec un album photo et vidéo pour chaque ville.

🔗 **Site en ligne : [leomontourcy.github.io/Site-De-Mon-Carnet-De-Voyage](https://leomontourcy.github.io/Site-De-Mon-Carnet-De-Voyage/)**

## Fonctionnalités

- **Carte interactive** ([Leaflet](https://leafletjs.com/) + OpenStreetMap) : un repère par ville, aperçu vidéo au survol, ouverture de l'album au clic. Les noms des villes s'affichent à partir d'un certain niveau de zoom.
- **Statistiques calculées automatiquement** à partir des données : pays, villes, photos, vidéos.
- **Albums par ville** (`ville.html?ville=...`) générés dynamiquement : grille de photos et de vidéos, visionneuse plein écran au clavier.
- **Performances** :
  - images en **WebP**, vidéos en **MP4 H.264 480p** (script `tools/preparer_medias.sh`) ;
  - chargement différé (`loading="lazy"`) ;
  - vidéos chargées seulement à l'approche de l'écran (`IntersectionObserver`), mises en pause quand elles en sortent.
- **Vie privée** : les originaux (avec coordonnées GPS) ne sont jamais publiés ; les fichiers en ligne n'ont aucune métadonnée.
- **Sécurité** : Content-Security-Policy, Subresource Integrity sur Leaflet, aucun `innerHTML`.
- **Adapté au mobile** : sur écran tactile, une liste de destinations remplace le survol, la carte zoome sur la ville choisie puis propose d'ouvrir l'album.
- **Accessibilité** : respect de `prefers-reduced-motion`, focus clavier visible, visionneuse accessible au clavier, textes alternatifs.

## Technologies

- **HTML5 / CSS3** : mise en page en Grid, animations
- **JavaScript (ES6+)** : sans framework
- **Leaflet** : cartographie

## Structure

```
├── index.html               # Accueil : carte, liste des destinations, galerie
├── ville.html               # Page album d'une ville
├── js/voyages.js            # Données des voyages et fonctions partagées
├── js/index.js              # Script de l'accueil
├── js/ville.js              # Script de la page album
├── css/luxe.css             # Styles
├── photo_site/<ville>/      # Médias publiés : .webp et .mp4 uniquement
├── video/covers/            # Vidéos d'aperçu des cartes
├── tools/preparer_medias.sh # Conversion des originaux en versions web sans GPS
├── tools/verifier.py        # Contrôle : fichiers manquants, GPS, tailles
└── _originaux/              # Originaux avec GPS — ignoré par git, jamais publié
```

## Ajouter une destination

1. Placer les originaux (`.jpg`, `.jpeg`, `.png`, `.MOV`, `.MP4`) dans `photo_site/<ville>/`.
2. Lancer `./tools/preparer_medias.sh` : les originaux partent dans `_originaux/`, les versions web sans GPS sont générées (macOS requis pour `avconvert`, plus `cwebp` : `brew install webp`).
3. Ajouter la ville dans `VOYAGES.data` (nom, pays, liste des fichiers `.webp` / `.mp4`) et dans `VOYAGES.places` (coordonnées) dans `js/voyages.js`.
4. Si des fichiers existants ont été remplacés, incrémenter `MEDIA_VERSION` dans `js/voyages.js`.
5. Vérifier : `python3 tools/verifier.py`.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

Réalisé par **Léo Montourcy**, étudiant en BUT Informatique · [Portfolio](https://leomontourcy.github.io/portfolio/)

Photos et vidéos © Léo Montourcy, tous droits réservés.
