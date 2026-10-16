#!/usr/bin/env python3
"""Portable project commands: Python 3.9+, Windows/macOS/Linux."""
import argparse
import importlib.util
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import urllib.request
import webbrowser

ROOT = Path(__file__).resolve().parents[1]
NPM = shutil.which("npm.cmd" if os.name == "nt" else "npm")


def call(args):
    subprocess.run([str(a) for a in args], cwd=ROOT, check=True)


def doctor():
    failures = []
    print("Python:", sys.version.split()[0])
    if sys.version_info < (3, 9):
        failures.append("Python 3.9+ required")
    for name in ["node", "npm"]:
        executable = shutil.which(name + ".cmd" if name == "npm" and os.name == "nt" else name)
        if not executable:
            failures.append(name + " not found in PATH")
        else:
            call([executable, "--version"])
    if (ROOT / "node_modules").is_dir():
        try:
            call(["node", "-e", "const f=require('ffmpeg-static');if(!require('fs').existsSync(f))throw Error('FFmpeg missing');console.log('FFmpeg:',f);const b=require('playwright').chromium.executablePath();console.log('Optional browser:',require('fs').existsSync(b)?'available':'not installed; use your normal browser')"])
        except subprocess.CalledProcessError:
            failures.append("FFmpeg missing; run setup")
    else:
        failures.append("Run setup to install npm dependencies")
    for name in ["all_styles.json", "classification.json", "sections.json", "motion_reference/motion_catalog.json", "motion_reference/pattern_catalog.json"]:
        try:
            json.loads((ROOT / name).read_text(encoding="utf-8"))
        except (OSError, ValueError) as error:
            failures.append(f"{name}: {error}")
    sites = len(list((ROOT / "site-copy/media/videos").glob("*.mp4")))
    print(f"Local site preview videos: {sites}. Missing media can be downloaded on demand.")
    for error in failures:
        print("ERROR:", error)
    return 1 if failures else 0


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["setup", "doctor", "build", "start"])
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument("--no-open", action="store_true")
    parser.add_argument("--with-browser", action="store_true", help="Explicitly install optional Chromium for Playwright automation")
    args = parser.parse_args()
    if args.command == "doctor":
        return doctor()
    if args.command == "setup":
        if not NPM:
            raise SystemExit("Install Node.js 22+ (including npm), then restart your terminal.")
        call([NPM, "ci"])
        if args.with_browser:
            call([NPM, "exec", "--", "playwright", "install", "chromium"])
    if args.command in ("setup", "build"):
        for script in ["build_gallery.py", "build_generated.py", "build_sections.py", "build_motion.py"]:
            call([sys.executable, script])
        call(["node", "motion_reference/scripts/export-patterns.mjs"])
        call(["node", "motion_reference/scripts/check-patterns.mjs"])
        call([sys.executable, "scripts/package_demo.py"])
    if args.command == "start":
        url = f"http://localhost:{args.port}/"
        try:
            with urllib.request.urlopen(url + "api/ratings", timeout=1) as r:
                existing = "ratings" in json.load(r)
        except Exception:
            existing = False
        if existing:
            if not args.no_open:
                webbrowser.open(url)
            print("Design Parser already running:", url)
            return 0
        # New portable launcher is local-only; legacy serve.py LAN behavior is preserved.
        os.environ.setdefault("HOST", "127.0.0.1")
        if not args.no_open:
            import threading
            threading.Timer(1, lambda: webbrowser.open(url)).start()
        call([sys.executable, "serve.py", str(args.port)])
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except subprocess.CalledProcessError as error:
        raise SystemExit(error.returncode)
