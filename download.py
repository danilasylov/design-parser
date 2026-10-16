#!/usr/bin/env python3
"""Скачивает превью-видео (standard) и постеры/скриншоты для галереи refero styles.
Резюмируемый: пропускает уже скачанные непустые файлы. Параллельный, с ретраями.
"""
import json, os, sys, time, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(ROOT, "site-copy")
VID = os.path.join(SITE, "media", "videos")
THM = os.path.join(SITE, "media", "thumbs")
for d in (VID, THM):
    os.makedirs(d, exist_ok=True)

HDR = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
       "Referer": "https://styles.refero.design/"}

styles = json.load(open(os.path.join(ROOT, "all_styles.json"), encoding="utf-8"))

def thumb_url(s):
    return (s.get("previewVideoPosterUrl") or s.get("screenshotUrl")
            or s.get("thumbnailUrl"))

# Build download jobs: (url, dest)
jobs = []
for s in styles:
    sid = s["id"]
    if s.get("previewVideoUrl"):
        jobs.append((s["previewVideoUrl"], os.path.join(VID, sid + ".mp4")))
    t = thumb_url(s)
    if t:
        ext = ".jpg"
        jobs.append((t, os.path.join(THM, sid + ext)))

def need(dest):
    return not (os.path.exists(dest) and os.path.getsize(dest) > 0)

jobs = [(u, d) for (u, d) in jobs if need(d)]
total = len(jobs)
print(f"to download: {total} files", flush=True)

done = 0
failed = []
lock_t0 = time.time()

def fetch(job):
    url, dest = job
    tmp = dest + ".part"
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=HDR)
            with urllib.request.urlopen(req, timeout=120) as r, open(tmp, "wb") as f:
                while True:
                    chunk = r.read(65536)
                    if not chunk:
                        break
                    f.write(chunk)
            if os.path.getsize(tmp) == 0:
                raise IOError("empty")
            os.replace(tmp, dest)
            return (True, url)
        except Exception as e:
            if os.path.exists(tmp):
                try: os.remove(tmp)
                except OSError: pass
            if attempt == 3:
                return (False, f"{url} :: {e}")
            time.sleep(1.5 * (attempt + 1))
    return (False, url)

with ThreadPoolExecutor(max_workers=16) as ex:
    futs = [ex.submit(fetch, j) for j in jobs]
    for fut in as_completed(futs):
        ok, info = fut.result()
        done += 1
        if not ok:
            failed.append(info)
        if done % 50 == 0 or done == total:
            rate = done / max(time.time() - lock_t0, 1e-6)
            print(f"{done}/{total}  ok={done-len(failed)} fail={len(failed)}  {rate:.1f}/s", flush=True)

json.dump(failed, open(os.path.join(ROOT, "download_failed.json"), "w", encoding="utf-8"), indent=1)
print(f"DONE. ok={total-len(failed)} failed={len(failed)} (see download_failed.json)", flush=True)
