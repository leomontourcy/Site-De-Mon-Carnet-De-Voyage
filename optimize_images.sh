#!/bin/bash
echo "Optimisation des images en WebP en cours..."
count=0
total=$(find photo_site -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" \) | wc -l | tr -d ' ')

find photo_site -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" \) | while read -r img; do
    webp_path="${img%.*}.webp"
    if [ ! -f "$webp_path" ]; then
        cwebp -q 75 -mt -quiet "$img" -o "$webp_path"
    fi
    count=$((count+1))
    if [ $((count % 50)) -eq 0 ]; then
        echo "$count / $total images traitées..."
    fi
done

echo "Toutes les images ont été traitées avec succès !"
