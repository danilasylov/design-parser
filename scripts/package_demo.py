#!/usr/bin/env python3
"""Package the included demo websites without recordings or dependency folders."""
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DEMOS = ("prism-bi", "vesper")


def main():
    for slug in DEMOS:
        package(slug)


def package(slug):
    source = ROOT / "generated-sites" / slug
    output = ROOT / "demo" / (slug + ".zip")
    output.parent.mkdir(exist_ok=True)
    sources = [p for p in sorted(source.rglob("*")) if p.is_file()
               and not any(part in {"qa", "comparison", "node_modules", ".cache", ".git"}
                           for part in p.relative_to(source).parts)
               and not p.name.startswith(".")]
    if not (source / "index.html").is_file():
        raise FileNotFoundError(slug + " index.html missing")
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for file in sources:
            entry = zipfile.ZipInfo(slug + "/" + file.relative_to(source).as_posix(), (2026, 10, 16, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.external_attr = 0o644 << 16
            archive.writestr(entry, file.read_bytes())
    print(f"Demo: {output.relative_to(ROOT)} ({len(sources)} files)")


if __name__ == "__main__":
    main()
