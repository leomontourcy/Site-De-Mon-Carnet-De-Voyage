#!/usr/bin/env python3
"""Affiche la rotation horaire (0, 90, 180, 270) à appliquer à un JPEG selon sa balise EXIF Orientation.

Utilisé par preparer_medias.sh : cwebp et sips ignorent cette balise, d'où des photos couchées.
Les orientations miroir (2, 4, 5, 7) sont traitées comme leur rotation la plus proche.
"""
import struct
import sys

ROTATION = {1: 0, 2: 0, 3: 180, 4: 180, 5: 90, 6: 90, 7: 270, 8: 270}


def orientation(path):
    with open(path, "rb") as f:
        data = f.read(256 * 1024)
    start = data.find(b"Exif\x00\x00")
    if start < 0:
        return 1
    tiff = start + 6
    endian = ">" if data[tiff:tiff + 2] == b"MM" else "<"
    ifd = tiff + struct.unpack(endian + "I", data[tiff + 4:tiff + 8])[0]
    count = struct.unpack(endian + "H", data[ifd:ifd + 2])[0]
    for k in range(count):
        entry = data[ifd + 2 + 12 * k: ifd + 14 + 12 * k]
        if len(entry) < 12:
            break
        if struct.unpack(endian + "H", entry[:2])[0] == 0x0112:
            return struct.unpack(endian + "H", entry[8:10])[0]
    return 1


if __name__ == "__main__":
    try:
        print(ROTATION.get(orientation(sys.argv[1]), 0))
    except (OSError, struct.error):
        print(0)
