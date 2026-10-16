#!/usr/bin/env python3
"""Update the motion viewer's shared navigation without changing its catalog data."""
from pathlib import Path
import re
from gallery_ui import navigation

ROOT = Path(__file__).resolve().parent
target = ROOT / "motion_reference/index.html"
html = target.read_text(encoding="utf-8")
start, end = "<!-- library-navigation:start -->", "<!-- library-navigation:end -->"
markup = start + '<header class="gallery-nav"><div class="bar">' + navigation("motion") + '</div></header>' + end
pattern = re.escape(start) + r".*?" + re.escape(end)
if start not in html:
    pattern = r'<nav style="[^"]*" aria-label="Design Parser">.*?</nav>'
html, replacements = re.subn(pattern, lambda _: markup, html, count=1, flags=re.S)
if replacements != 1:
    raise ValueError("Motion navigation marker missing")
style = '<link rel="stylesheet" href="../ui/gallery.css">'
if style not in html:
    html = html.replace('</head>', style + '\n</head>')
target.write_text(html, encoding="utf-8")
print("Motion navigation updated")
