#!/usr/bin/env python3
"""Restore all saved video previews/posters from this project's GitHub Release."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import sys
import time
import urllib.request
import zipfile

ROOT = Path(__file__).resolve().parents[1]
CHUNK = 1024 * 1024


def digest(path):
    result = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(CHUNK), b""):
            result.update(chunk)
    return result.hexdigest()


def target_path(root, entry):
    target = (root / entry["path"]).resolve()
    allowed = (root / "site-copy/media").resolve()
    if not target.is_relative_to(allowed) or target.suffix not in {".mp4", ".jpg"}:
        raise ValueError("Unsafe media manifest path")
    return target


def installed(root, entry):
    target = target_path(root, entry)
    return target.is_file() and target.stat().st_size == entry["size"] and digest(target) == entry["sha256"]


def download_archive(part, destination):
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.is_file() and destination.stat().st_size == part["size"] and digest(destination) == part["sha256"]:
        return
    if not part["url"].startswith("https://github.com/danilasylov/design-parser/releases/download/"):
        raise ValueError("Unexpected release asset URL")
    temporary = destination.with_name(destination.name + ".part")
    for attempt in range(3):
        try:
            offset = temporary.stat().st_size if temporary.exists() else 0
            if offset > part["size"]:
                temporary.unlink()
                offset = 0
            if offset != part["size"]:
                headers = {"User-Agent": "DesignParser-MediaInstaller/1.0"}
                if offset:
                    headers["Range"] = f"bytes={offset}-"
                # A newly published asset can inherit a cached 404 from its draft URL.
                # Use GitHub's explicit download query, also supported by manual links.
                url = part["url"] + ("&" if "?" in part["url"] else "?") + "download=1"
                request = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(request, timeout=60) as response:
                    append = offset > 0 and response.status == 206
                    if append and not response.headers.get("Content-Range", "").startswith(f"bytes {offset}-"):
                        raise ValueError("Unexpected download range")
                    received = offset if append else 0
                    last_report = received
                    with temporary.open("ab" if append else "wb") as output:
                        while chunk := response.read(CHUNK):
                            output.write(chunk)
                            received += len(chunk)
                            if received > part["size"]:
                                raise ValueError("Release asset exceeds declared size")
                            if received - last_report >= 32 * CHUNK:
                                print(f"  {part['name']}: {received // CHUNK}/{part['size'] // CHUNK} MiB", flush=True)
                                last_report = received
            if temporary.stat().st_size != part["size"] or digest(temporary) != part["sha256"]:
                temporary.unlink(missing_ok=True)
                raise ValueError("Release archive checksum mismatch")
            os.replace(temporary, destination)
            return
        except Exception:
            if attempt == 2:
                raise
            print(f"Retry {attempt + 1}/2: {part['name']} (partial downloads are resumed)", flush=True)
            time.sleep(attempt + 1)


def restore_archive(archive, entries, root):
    by_name = {entry["path"]: entry for entry in entries}
    with zipfile.ZipFile(archive) as source:
        if len(source.infolist()) != len(by_name) or set(source.namelist()) != set(by_name):
            raise ValueError("Archive contents do not match the manifest")
        for member in source.infolist():
            entry = by_name[member.filename]
            target = target_path(root, entry)
            if member.is_dir() or member.file_size != entry["size"]:
                raise ValueError("Archive file size differs from manifest")
            if installed(root, entry):
                continue
            target.parent.mkdir(parents=True, exist_ok=True)
            temporary = target.with_name(target.name + ".part")
            try:
                checksum = hashlib.sha256()
                with source.open(member) as input_file, temporary.open("wb") as output:
                    for chunk in iter(lambda: input_file.read(CHUNK), b""):
                        output.write(chunk)
                        checksum.update(chunk)
                if checksum.hexdigest() != entry["sha256"]:
                    raise ValueError("Extracted media checksum mismatch: " + member.filename)
                os.replace(temporary, target)
            finally:
                temporary.unlink(missing_ok=True)


def install(manifest, root, archive_dir=None, verify_only=False, keep_archives=False):
    if manifest.get("version") != 1:
        raise ValueError("Unsupported media manifest version")
    if len({e["path"] for e in manifest["files"]}) != len(manifest["files"]):
        raise ValueError("Duplicate media path")
    known = {p["name"] for p in manifest["archives"]}
    if any(e["archive"] not in known for e in manifest["files"]):
        raise ValueError("Unknown archive in manifest")
    cached = sum(installed(root, entry) for entry in manifest["files"])
    print(f"Verified local media: {cached}/{len(manifest['files'])}", flush=True)
    if verify_only:
        if cached != len(manifest["files"]):
            raise ValueError("Some reference previews are missing or corrupted")
        return {"verified": cached, "downloaded_archives": 0, "counts": manifest["counts"]}
    downloads = 0
    for part in manifest["archives"]:
        if Path(part["name"]).name != part["name"]:
            raise ValueError("Unsafe archive name")
        entries = [e for e in manifest["files"] if e["archive"] == part["name"]]
        if all(installed(root, entry) for entry in entries):
            print(f"Already installed: {part['name']}", flush=True)
            continue
        archive = (archive_dir or root / ".cache/reference-media") / part["name"]
        if archive_dir:
            if not archive.is_file() or archive.stat().st_size != part["size"] or digest(archive) != part["sha256"]:
                raise ValueError("Missing or corrupted local archive: " + str(archive))
        else:
            print("Downloading " + part["url"], flush=True)
            download_archive(part, archive)
            downloads += 1
        print("Restoring " + part["name"], flush=True)
        restore_archive(archive, entries, root)
        if not archive_dir and not keep_archives:
            archive.unlink()
    return {"verified": len(manifest["files"]), "downloaded_archives": downloads, "counts": manifest["counts"]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--archive-dir", type=Path, help="Use the four manually downloaded release ZIPs without network")
    parser.add_argument("--verify-only", action="store_true", help="Verify installed files; never download")
    parser.add_argument("--keep-archives", action="store_true")
    args = parser.parse_args()
    manifest = json.loads((ROOT / "assets/reference-media.json").read_text(encoding="utf-8"))
    result = install(manifest, ROOT, args.archive_dir, args.verify_only, args.keep_archives)
    report = ROOT / ".cache/reference-media-install.json"
    report.parent.mkdir(exist_ok=True)
    report.write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result, indent=2))
    print("Ready: http://localhost:8080/site-copy/")


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print("Media installation failed: " + str(error), file=sys.stderr)
        raise SystemExit(1)
