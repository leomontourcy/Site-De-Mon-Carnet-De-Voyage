#!/usr/bin/env bash
# Prépare les médias pour le web.
#  1. Déplace les originaux (jpg/jpeg/png/MOV/MP4) déposés dans photo_site/ et video/covers/
#     vers _originaux/ (ignoré par git). Rien n'est supprimé.
#  2. Génère depuis _originaux/ les versions web manquantes, sans métadonnées (GPS retiré) :
#       images -> .webp (cwebp)
#       vidéos -> .mp4 H.264 léger (avconvert, intégré à macOS)
# Usage : ./tools/preparer_medias.sh          (FORCE=1 pour tout régénérer, JOBS=n pour le parallélisme)
set -euo pipefail

cd "$(dirname "$0")/.."
export ORIG="_originaux"
export FORCE="${FORCE:-0}"
JOBS="${JOBS:-4}"

command -v cwebp >/dev/null || { echo "cwebp manquant : brew install webp" >&2; exit 1; }
command -v avconvert >/dev/null || { echo "avconvert manquant (macOS requis)" >&2; exit 1; }

# Fichier original -> chemin de sa version web (hors _originaux/).
web_path() {
  local rel="${1#"$ORIG"/}" base
  base="${rel%.*}"
  case "${rel##*.}" in
    [Mm][Oo][Vv]|[Mm][Pp]4) printf '%s.mp4\n' "$base" ;;
    *)                      printf '%s.webp\n' "$base" ;;
  esac
}

build_one() {
  local src="$1" out tmp preset
  out="$(web_path "$src")"
  [[ "$FORCE" != 1 && -f "$out" ]] && return 0
  mkdir -p "$(dirname "$out")"
  case "$out" in
    *.webp)
      # cwebp ignore la balise EXIF Orientation (photos iPhone couchées) :
      # on fait pivoter les pixels avant conversion.
      local deg
      deg="$(python3 -I tools/exif_rotation.py "$src")"
      if [[ "$deg" != 0 ]]; then
        tmp="${out%.webp}.tmp.png"
        sips -s format png -r "$deg" "$src" --out "$tmp" >/dev/null
        cwebp -q 75 -mt -quiet -metadata none "$tmp" -o "$out"
        rm -f "$tmp"
      else
        cwebp -q 75 -mt -quiet -metadata none "$src" -o "$out"
      fi ;;
    *.mp4)
      # Couvertures : 540p. Galerie : 480p (~1,5 Mb/s), bon compromis qualité / poids.
      [[ "$out" == video/covers/* ]] && preset=Preset960x540 || preset=PresetAppleM4V480pSD
      # Les presets M4V exigent l'extension .m4v (même conteneur MP4).
      tmp="${out%.mp4}.tmp.m4v"
      avconvert --preset "$preset" --source "$src" --output "$tmp" --replace >/dev/null
      mv -f "$tmp" "$out" ;;
  esac
  echo "  ok $out"
}
export -f web_path build_one

echo "1/2 Archivage des originaux..."
# -name est sensible à la casse : les .mp4 web (minuscules) restent en place.
find photo_site video/covers -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -name '*.MOV' -o -name '*.mov' -o -name '*.MP4' \) \
  -print0 | while IFS= read -r -d '' f; do
    mkdir -p "$ORIG/$(dirname "$f")"
    mv -n "$f" "$ORIG/$f"
  done

echo "2/2 Génération des versions web..."
find "$ORIG/photo_site" "$ORIG/video" -type f \
  \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' -o -iname '*.mov' -o -iname '*.mp4' \) -print0 \
  | xargs -0 -n1 -P "$JOBS" bash -c 'build_one "$0"'

echo "Terminé. Vérifie avec : python3 tools/verifier.py"
