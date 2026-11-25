#!/usr/bin/env python3
"""Vérifie la cohérence du site (sans dépendance).

- chaque média listé dans js/voyages.js existe ;
- chaque destination de `places` a ses données, et inversement ;
- aucun fichier inutilisé ni original (jpg/MOV...) dans photo_site/ ;
- aucune métadonnée GPS dans les fichiers publiés ;
- tailles : < 50 Mo par fichier, < 1 Go au total (limites GitHub / Pages).

Usage : python3 tools/verifier.py   (code de sortie 1 si erreur)
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_FILE = 50 * 1024 * 1024
MAX_SITE = 1024 * 1024 * 1024
WEB_EXT = {".webp", ".mp4"}

errors = []


def err(msg):
    errors.append(msg)


def parse_voyages():
    src = open(os.path.join(ROOT, "js", "voyages.js"), encoding="utf-8").read()
    data_block = src[src.index("data: {"):src.index("places: [")]
    places_block = src[src.index("places: ["):src.index("TILE_URL")]

    cities = {}
    entry = re.compile(
        r"^\s{4}'?([a-z-]+)'?:\s*\{.*?photos:\s*\[(.*?)\],\s*photoDir:\s*'([^']+)'",
        re.S | re.M,
    )
    for m in entry.finditer(data_block):
        cities[m.group(1)] = (m.group(3), re.findall(r"'([^']+)'", m.group(2)))
    keys = re.findall(r"key:\s*'([^']+)'", places_block)
    return cities, keys


def has_gps(path):
    with open(path, "rb") as f:
        blob = f.read()
    if path.endswith(".webp"):
        # Parcourt les blocs RIFF : un bloc EXIF ou XMP peut contenir le GPS.
        pos = 12
        while pos + 8 <= len(blob):
            tag = blob[pos:pos + 4]
            size = int.from_bytes(blob[pos + 4:pos + 8], "little")
            if tag in (b"EXIF", b"XMP "):
                return True
            pos += 8 + size + (size & 1)
        return False
    return b"ISO6709" in blob or b"\xa9xyz" in blob


def main():
    cities, keys = parse_voyages()

    for k in keys:
        if k not in cities:
            err(f"place '{k}' sans données dans VOYAGES.data")
    if len(keys) != len(set(keys)):
        err("clé en double dans places")
    for k in cities:
        if k not in keys:
            err(f"données '{k}' absentes de places (invisible sur la carte)")

    referenced = set()
    for k, (photo_dir, files) in cities.items():
        if not files:
            err(f"{k} : aucune photo")
        if len(files) != len(set(files)):
            err(f"{k} : fichier listé deux fois")
        for f in files:
            rel = os.path.join(photo_dir, f)
            referenced.add(os.path.normpath(rel))
            if os.path.splitext(f)[1] not in WEB_EXT:
                err(f"{rel} : format non web (attendu .webp ou .mp4)")
            if not os.path.isfile(os.path.join(ROOT, rel)):
                err(f"{rel} : fichier manquant")

    total = 0
    for base in ("photo_site", "video"):
        for root, _, files in os.walk(os.path.join(ROOT, base)):
            for name in files:
                if name == ".DS_Store":
                    continue
                path = os.path.join(root, name)
                rel = os.path.normpath(os.path.relpath(path, ROOT))
                size = os.path.getsize(path)
                total += size
                if size > MAX_FILE:
                    err(f"{rel} : {size // 2**20} Mo (> 50 Mo)")
                if base == "photo_site" and rel not in referenced:
                    err(f"{rel} : fichier inutilisé")
                if os.path.splitext(name)[1] in WEB_EXT and has_gps(path):
                    err(f"{rel} : contient des métadonnées GPS")

    if total > MAX_SITE:
        err(f"médias : {total // 2**20} Mo au total (> 1 Go)")

    for e in errors:
        print("ERREUR", e)
    print(f"{len(cities)} villes, {len(referenced)} médias, {total / 2**20:.0f} Mo — "
          f"{'OK' if not errors else str(len(errors)) + ' erreur(s)'}")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
