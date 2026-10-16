#!/usr/bin/env python3
"""Search every reference and every semantic motion pattern without loading the corpus into an agent."""
import argparse
import json
import math
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# Search expansion is a convenience, not a semantic-model verdict.
SYNONYMS = {
    "saas": "software dashboard SaaS приложение", "финтех": "finance financial bank финтех банки",
    "банк": "finance financial bank финтех", "агентство": "agency studio агентство студия",
    "портфолио": "portfolio personal портфолио", "магазин": "shop store commerce e-commerce",
    "отель": "hotel hospitality travel путешествия отели", "ресторан": "restaurant food еда напитки",
    "типографика": "typography text editorial", "темный": "dark дарк", "тёмный": "dark дарк",
    "появление": "entrance reveal fade scroll content", "кнопка": "button hover microinteraction",
    "фон": "background gradient grid", "текст": "text typography", "курсор": "cursor pointer",
    "скролл": "scroll reveal parallax", "минимализм": "minimal minimalist clean минимализм",
}


def read(path):
    return json.loads((ROOT / path).read_text(encoding="utf-8"))


def tokens(value):
    return re.findall(r"[\w-]+", str(value).lower(), re.UNICODE)


def rank(rows, query):
    words = set(tokens(query))
    words |= {t for w in list(words) for t in tokens(SYNONYMS.get(w, ""))}
    documents = [Counter(tokens(row.pop("_text"))) for row in rows]
    frequencies = Counter(t for document in documents for t in document)
    for row, document in zip(rows, documents):
        matches = sorted(words & document.keys())
        row["score"] = round(sum((1 + math.log(document[t])) * math.log(1 + len(rows) / frequencies[t]) for t in matches), 3)
        row["matched_terms"] = matches
    return sorted(rows, key=lambda row: (-row["score"], row["id"]))


def sites(query, category=None, limit=12):
    classification = read("classification.json")
    sections = read("sections.json")
    used = {r.get("id") for p in read("generated-sites/projects.json") for r in p.get("refs", [])}
    rows = []
    for site in read("all_styles.json"):
        sid = site["id"]
        cls = classification.get(sid, {})
        if category and category.casefold() not in cls.get("cat", "").casefold():
            continue
        anatomy = sections.get(sid, {}).get("sections", [])
        rows.append({"id": sid, "name": site["siteName"], "url": site["url"],
                     "category": cls.get("cat"), "tags": cls.get("tags", []),
                     "color_scheme": site.get("colorScheme"), "north_star": site.get("northStar"),
                     "used_as_reference": sid in used, "section_count": len(anatomy),
                     "video_available": (ROOT / f"site-copy/media/videos/{sid}.mp4").is_file(),
                     "_text": " ".join([site["siteName"], site["url"], site.get("northStar", ""),
                                           cls.get("cat", ""), *cls.get("tags", []),
                                           *[s.get("heading", "") for s in anatomy]])})
    ranked = rank(rows, query)
    return {"scanned": len(rows), "method": "lexical ranking with RU/EN expansion; agent must inspect candidates",
            "results": ranked if limit == 0 else ranked[:limit]}


def motions(query, limit=12, trigger=None):
    examples = {e["id"]: e for e in read("motion_reference/motion_catalog.json")["examples"]}
    patterns = read("motion_reference/pattern_catalog.json")["patterns"]
    rows = []
    for pattern in patterns:
        variants = [examples[v["id"]] for v in pattern["variants"]]
        if trigger:
            variants = [v for v in variants if trigger in v.get("triggers", [])]
        if not variants:
            continue
        # Choose an implementation within a pattern, never list direction variants as independent results.
        candidates = rank([{"id": e["id"], "_text": json.dumps(e, ensure_ascii=False)} for e in variants], query)
        chosen = examples[candidates[0]["id"]]
        rows.append({"id": pattern["id"], "name": pattern["name"], "type": pattern["type_id"],
                     "variant_count": len(variants), "example_id": chosen["id"],
                     "demo_url": chosen.get("demo_url"), "code_paths": chosen.get("code_paths", []),
                     "video_paths": chosen.get("video_paths", []), "license_path": chosen.get("license_path"),
                     "triggers": chosen.get("triggers", []), "technology": chosen.get("technology", []),
                     "_text": pattern["name"] + " " + pattern["key"] + " " + " ".join(
                         " ".join([e["name"], e.get("description_en", ""), e.get("description_ru", ""),
                                   *e.get("source_tags", []), *e.get("triggers", [])]) for e in variants)})
    ranked = rank(rows, query)
    return {"scanned_patterns": len(rows), "scanned_variants": len(examples),
            "results": ranked if limit == 0 else ranked[:limit]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("kind", choices=["sites", "motion"])
    parser.add_argument("query")
    parser.add_argument("--limit", type=int, default=12, help="0 = all ranked results")
    parser.add_argument("--category")
    parser.add_argument("--trigger")
    parser.add_argument("--out", type=Path)
    args = parser.parse_args()
    if args.limit < 0:
        parser.error("--limit must be >= 0")
    result = sites(args.query, args.category, args.limit) if args.kind == "sites" else motions(args.query, args.limit, args.trigger)
    output = json.dumps(result, ensure_ascii=False, indent=2)
    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(output + "\n", encoding="utf-8")
    else:
        print(output)


if __name__ == "__main__":
    main()
