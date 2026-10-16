#!/usr/bin/env python3
"""Download selected references from their authors. No archive or account is required."""
import argparse
import hashlib
import json
import os
import re
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MOTION = ROOT / "motion_reference"


def load(path):
    return json.loads(path.read_text(encoding="utf-8"))


def download(url, target, sha256=None, allow_updated=False):
    target = Path(target)
    if not target.resolve().is_relative_to(ROOT.resolve()):
        raise ValueError("Destination outside project")
    if target.is_file() and target.stat().st_size and (not sha256 or hashlib.sha256(target.read_bytes()).hexdigest() == sha256):
        return {"path": str(target.relative_to(ROOT)), "status": "cached"}
    if urllib.parse.urlparse(url).scheme != "https":
        raise ValueError("Only HTTPS asset URLs are accepted")
    target.parent.mkdir(parents=True, exist_ok=True)
    temp = target.with_name(target.name + ".part")
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "DesignParser/1.0", "Referer": "https://styles.refero.design/"})
            with urllib.request.urlopen(request, timeout=60) as response, temp.open("wb") as output:
                content_type = response.headers.get("Content-Type", "")
                if "text/html" in content_type and target.suffix.lower() not in (".html", ".htm"):
                    raise ValueError("Server returned a webpage instead of an asset")
                while chunk := response.read(1024 * 256):
                    output.write(chunk)
            if not temp.stat().st_size:
                raise ValueError("Empty download")
            actual_hash = hashlib.sha256(temp.read_bytes()).hexdigest()
            updated = bool(sha256 and actual_hash != sha256)
            if updated and not (allow_updated and target.suffix.lower() in (".mp4", ".webm", ".png", ".jpg", ".jpeg", ".webp")):
                raise ValueError("SHA-256 differs from the saved snapshot; inspect source and use --allow-updated for changed media")
            os.replace(temp, target)
            return {"path": str(target.relative_to(ROOT)), "status": "downloaded_updated" if updated else "downloaded",
                    "url": url, "sha256": actual_hash, "snapshot_sha256": sha256}
        except Exception:
            temp.unlink(missing_ok=True)
            if attempt == 2:
                raise
            time.sleep(attempt + 1)


def site_jobs(ids):
    sites = {s["id"]: s for s in load(ROOT / "all_styles.json")}
    chosen = list(sites) if ids == ["all"] else ids
    for sid in chosen:
        s = sites[sid]
        for key, folder, ext in [("previewVideoUrl", "videos", ".mp4"), ("previewVideoPosterUrl", "thumbs", ".jpg")]:
            url = s.get(key)
            if key == "previewVideoPosterUrl":
                url = url or s.get("screenshotUrl") or s.get("thumbnailUrl")
            if url:
                yield url, ROOT / "site-copy/media" / folder / (sid + ext), None


def motion_jobs(ids, media=True):
    examples = {e["id"]: e for e in load(MOTION / "motion_catalog.json")["examples"]}
    manifest = {a["local_path"]: a for a in load(MOTION / "assets_manifest.json")}
    chosen = list(examples) if ids == ["all"] else ids
    for eid in chosen:
        e = examples[eid]
        repo = e.get("repository_url", "").removeprefix("https://github.com/").rstrip("/")
        commit = e.get("upstream_commit")
        if e["provider"] in ("react-bits", "magic-ui") and repo and commit:
            prefix = "originals/" + e["provider"] + "/"
            paths = [*e.get("code_paths", []), e.get("license_path") or prefix + "LICENSE.md"]
            for local in paths:
                if local and local.startswith(prefix):
                    relative = local[len(prefix):]
                    yield f"https://raw.githubusercontent.com/{repo}/{commit}/{relative}", MOTION / local, manifest.get(local, {}).get("sha256")
        elif e["provider"] == "codrops" and repo and commit:
            # The saved catalog contains filtered text snapshots. Keep freshly downloaded upstream
            # archives separate: their checksum/contents must not be passed off as the old snapshot.
            local = MOTION / "upstream" / (repo.replace("/", "__") + "@" + commit + ".zip")
            yield f"https://codeload.github.com/{repo}/zip/{commit}", local, None
        if not media:
            continue
        for local in [*e.get("video_paths", []), e.get("poster_path")]:
            if not local:
                continue
            asset = manifest.get(local, {})
            url = asset.get("source_url", "")
            if e["provider"] == "react-bits":
                # MP4 and JPG were generated locally; download the author's original WebM.
                if not local.endswith(".webm"):
                    continue
                video = e.get("upstream_metadata", {}).get("videoUrl")
                if not video:
                    continue
                url = urllib.parse.urljoin("https://reactbits.dev/", video)
            if re.search(r"\.(mp4|webm|png|jpg|jpeg|webp)(?:\?|$)", url, re.I):
                yield url, MOTION / local, asset.get("sha256")


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--sites", nargs="+", default=[], help="Reference IDs, or all")
    p.add_argument("--motion", nargs="+", default=[], help="Example IDs (not pattern IDs), or all")
    p.add_argument("--sources-only", action="store_true")
    p.add_argument("--allow-updated", action="store_true", help="Accept changed author media and record actual SHA-256; never applies to source code")
    p.add_argument("--workers", type=int, default=4)
    args = p.parse_args()
    if not args.sites and not args.motion:
        p.error("Specify --sites <id|all> and/or --motion <example-id|all>")
    if not 1 <= args.workers <= 16:
        p.error("--workers must be 1–16")
    jobs = list(site_jobs(args.sites)) + list(motion_jobs(args.motion, not args.sources_only))
    jobs = list({str(job[1]): job for job in jobs}.values())
    def execute(job):
        try:
            return download(*job, allow_updated=args.allow_updated)
        except Exception as error:
            return {"path": str(job[1].relative_to(ROOT)), "url": job[0], "status": "failed", "error": str(error)}
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        results = list(pool.map(execute, jobs))
    out = ROOT / ".cache/downloads.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    failures = [r for r in results if r["status"] == "failed"]
    print(json.dumps({"files": len(results), "failed": failures, "report": str(out)}, ensure_ascii=False, indent=2))
    raise SystemExit(1 if failures else 0)


if __name__ == "__main__":
    main()
