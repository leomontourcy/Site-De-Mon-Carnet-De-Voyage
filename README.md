# Carnet de voyage — Léo Montourcy

Site web personnel qui présente mes voyages sur une **carte du monde interactive**, avec un album photo et vidéo pour chaque ville.

🔗 **Site en ligne : [leomontourcy.github.io/Site-De-Mon-Carnet-De-Voyage](https://leomontourcy.github.io/Site-De-Mon-Carnet-De-Voyage/)**

## Fonctionnalités

- **Carte interactive** ([Leaflet](https://leafletjs.com/)) : un repère par ville, aperçu vidéo au survol, ouverture de l'album au clic. Les noms des villes s'affichent à partir d'un certain niveau de zoom.
- **Statistiques calculées automatiquement** à partir des données : pays, villes, souvenirs, vidéos.
- **Albums par ville** (`ville.html?ville=...`) générés dynamiquement : grille de photos et de vidéos, visionneuse plein écran.
- **Performances** :
  - images converties en **WebP** (script `optimize_images.sh`) ;
  - chargement différé (`loading="lazy"`) ;
  - vidéos chargées et lues seulement quand elles sont visibles à l'écran (`IntersectionObserver`), puis déchargées.
- **Adapté au mobile** : sur écran tactile, une liste de destinations remplace le survol, la carte zoome sur la ville choisie puis propose d'ouvrir l'album.
- **Accessibilité** : respect de `prefers-reduced-motion`, attributs ARIA, textes alternatifs générés pour les images.

## Technologies

- **HTML5 / CSS3** : mise en page en Grid, animations
- **JavaScript (ES6+)** : sans framework
- **Leaflet** : cartographie

## Structure

```
├── index.html            # Accueil : carte, liste des destinations, galerie
├── ville.html            # Page album d'une ville
├── js/voyages.js         # Données des voyages et fonctions partagées
├── css/luxe.css          # Styles
├── photo_site/<ville>/   # Photos (WebP) et vidéos par ville
├── video/covers/         # Vidéos d'aperçu des cartes
└── optimize_images.sh    # Conversion des images en WebP (cwebp)
```

## Ajouter une destination

1. Placer les médias dans `photo_site/<ville>/`, puis lancer `./optimize_images.sh` pour générer les versions WebP.
2. Ajouter la ville dans `VOYAGES.data` (nom, pays, liste des fichiers) et dans `VOYAGES.places` (coordonnées) dans `js/voyages.js`.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

---

Réalisé par **Léo Montourcy**, étudiant en BUT Informatique · [Portfolio](https://leomontourcy.github.io/portfolio/)
