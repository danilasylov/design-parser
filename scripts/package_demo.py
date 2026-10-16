#!/usr/bin/env python3
"""Package the included Prism BI website without recordings or development files."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "generated-sites/prism-bi"
OUTPUT = ROOT / "demo/prism-bi.zip"


def main():
    OUTPUT.parent.mkdir(exist_ok=True)
    sources = [p for p in sorted(SOURCE.rglob("*")) if p.is_file()
               and not any(part in {"qa", "comparison", "node_modules", ".cache", ".git"}
                           for part in p.relative_to(SOURCE).parts)
               and not p.name.startswith(".")]
    if not (SOURCE / "index.html").is_file():
        raise FileNotFoundError("Prism BI index.html missing")
    with zipfile.ZipFile(OUTPUT, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for file in sources:
            entry = zipfile.ZipInfo("prism-bi/" + file.relative_to(SOURCE).as_posix(), (2026, 10, 16, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.external_attr = 0o644 << 16
            archive.writestr(entry, file.read_bytes())
    print(f"Demo: {OUTPUT.relative_to(ROOT)} ({len(sources)} files)")


if __name__ == "__main__":
    main()
