"""Shared navigation for all four library views."""
from html import escape

TABS = (
    ("references", "site-copy/index.html", "Референсы"),
    ("generated", "generated-sites/index.html", "Мои сайты"),
    ("sections", "sections/index.html", "Анатомия страниц"),
    ("motion", "motion_reference/index.html", "Анимации"),
)


def navigation(active):
    links = []
    for key, target, label in TABS:
        selected = key == active
        links.append(f'<a class="nav-item{" on" if selected else ""}" href="../{escape(target)}"'
                     + (' aria-current="page"' if selected else '') + f'>{escape(label)}</a>')
    return '<nav class="topnav" id="topnav" aria-label="Разделы библиотеки">' + "".join(links) + '</nav>'
