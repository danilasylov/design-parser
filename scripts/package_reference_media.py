#!/usr/bin/env python3
"""Package the existing site previews into bounded GitHub Release assets."""
import hashlib
import json
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / ".cache/reference-media-release"
MANIFEST = ROOT / "assets/reference-media.json"
TAG = "reference-media-v1"
PART_LIMIT = 384 * 1024 * 1024


def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def main():
    styles = json.loads((ROOT / "all_styles.json").read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    files, missing = [], []
    for site in styles:
        for kind, suffix, expected in [("videos", ".mp4", bool(site.get("previewVideoUrl"))),
                                       ("thumbs", ".jpg", True)]:
            path = ROOT / "site-copy/media" / kind / (site["id"] + suffix)
            if path.is_file() and path.stat().st_size:
                files.append(path)
            elif expected:
                missing.append(path.relative_to(ROOT).as_posix())
    if missing:
        raise ValueError(f"Missing {len(missing)} expected local files: {missing[:5]}")
    groups, current, size = [], [], 0
    for path in sorted(files):
        n = path.stat().st_size
        if n > PART_LIMIT:
            raise ValueError(f"Single asset exceeds part limit: {path.name}")
        if current and size + n > PART_LIMIT:
            groups.append(current)
            current, size = [], 0
        current.append(path)
        size += n
    if current:
        groups.append(current)
    manifest = {"version": 1, "release_tag": TAG,
                "release_url": f"https://github.com/danilasylov/design-parser/releases/tag/{TAG}",
                "description": "Saved Refero site preview videos and posters; copyright belongs to their authors.",
                "counts": {"sites": len(styles), "videos": sum(p.suffix == ".mp4" for p in files),
                           "posters": sum(p.suffix == ".jpg" for p in files)},
                "total_unpacked_bytes": sum(p.stat().st_size for p in files),
                "archives": [], "files": []}
    for number, paths in enumerate(groups, 1):
        name = f"reference-media-part-{number:02d}.zip"
        archive = OUT / name
        with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_STORED) as output:
            for path in paths:
                relative = path.relative_to(ROOT).as_posix()
                output.write(path, relative)
                manifest["files"].append({"path": relative, "size": path.stat().st_size,
                                          "sha256": digest(path), "archive": name})
        manifest["archives"].append({"name": name, "size": archive.stat().st_size,
                                     "sha256": digest(archive), "file_count": len(paths),
                                     "url": f"https://github.com/danilasylov/design-parser/releases/download/{TAG}/{name}"})
        print(f"Packaged {name}: {len(paths)} files, {archive.stat().st_size} bytes", flush=True)
    MANIFEST.parent.mkdir(exist_ok=True)
    text = json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    MANIFEST.write_text(text, encoding="utf-8")
    (OUT / MANIFEST.name).write_text(text, encoding="utf-8")
    checksums = "".join(f"{part['sha256']}  {part['name']}\n" for part in manifest["archives"])
    (OUT / "SHA256SUMS.txt").write_text(checksums, encoding="utf-8")
    print(json.dumps({"counts": manifest["counts"], "bytes": manifest["total_unpacked_bytes"]}))


if __name__ == "__main__":
    main()
