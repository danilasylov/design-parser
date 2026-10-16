#!/usr/bin/env python3
"""Удаляет сгенерированный сайт целиком: папку, ИИ-слоп, все ролики и запись в галерее.

    python3 delete_site.py <slug>          # покажет, что уйдёт, и спросит подтверждение
    python3 delete_site.py <slug> --yes    # без вопросов (для скриптов)
    python3 delete_site.py <slug> --dry    # только показать, ничего не трогать

Что удаляется:
  generated-sites/<slug>/                  — сам лендинг + comparison/ (ai-version.html,
                                             *-scroll.mp4, симлинк comparison-final.mp4) целиком
  generated-sites/_videos/<дата>/<slug>.mp4 — сам смонтированный ролик (в папке сайта на него
                                             только симлинк, поэтому удалять надо отдельно;
                                             ролики лежат по датам генерации, ищем во всех
                                             подпапках — а заодно и по старому плоскому пути)
  запись <slug> в generated-sites/projects.json
  метка светофора <slug> в generated-sites/ratings.json
затем пересобирается generated-sites/index.html.

Отменить нельзя — git в этой папке не ведётся. Поэтому по умолчанию скрипт требует
ввести slug руками.
"""
import glob, json, os, re, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
GEN = os.path.join(ROOT, "generated-sites")
PROJECTS = os.path.join(GEN, "projects.json")
RATINGS = os.path.join(GEN, "ratings.json")
VIDEOS = os.path.join(GEN, "_videos")
# служебные папки внутри generated-sites, которые сайтами не являются
RESERVED = {"comparison-video", "_videos"}
SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9._-]*$")


def find_videos(slug):
    """Ролик лежит в _videos/<дата>/<slug>.mp4 (по датам генерации); на всякий случай
    проверяем и старый плоский путь _videos/<slug>.mp4 из-до-датной схемы."""
    hits = glob.glob(os.path.join(VIDEOS, "*", slug + ".mp4"))
    flat = os.path.join(VIDEOS, slug + ".mp4")
    if os.path.isfile(flat):
        hits.append(flat)
    return hits


def die(msg):
    print("✗ " + msg)
    sys.exit(1)


def human(n):
    for u in ("Б", "КБ", "МБ", "ГБ"):
        if n < 1024:
            return f"{n:.0f} {u}"
        n /= 1024
    return f"{n:.1f} ТБ"


def tree_size(path):
    total = files = 0
    for dirpath, _, names in os.walk(path):
        for nm in names:
            try:
                # lstat, а не getsize: comparison-final.mp4 — симлинк в _videos, и вес
                # самого ролика тут считать нельзя (он снимается отдельной строкой)
                total += os.lstat(os.path.join(dirpath, nm)).st_size
                files += 1
            except OSError:
                pass
    return files, total


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    flags = {a for a in sys.argv[1:] if a.startswith("--")}
    if len(args) != 1:
        die("нужен ровно один аргумент — slug. См. шапку файла.")
    slug = args[0].strip().strip("/")

    if not SLUG_RE.match(slug):
        die(f"недопустимый slug: {slug!r}")
    if slug in RESERVED:
        die(f"{slug} — служебная папка галереи, а не сайт")

    target = os.path.join(GEN, slug)
    # защита от ../ и симлинков: удаляемое обязано лежать НЕПОСРЕДСТВЕННО в generated-sites
    real = os.path.realpath(target)
    if os.path.dirname(real) != os.path.realpath(GEN):
        die(f"путь вне generated-sites: {real}")

    videos = find_videos(slug)
    has_video = bool(videos)

    projects = json.load(open(PROJECTS, encoding="utf-8"))
    record = next((p for p in projects if p.get("slug") == slug), None)
    has_dir = os.path.isdir(real)
    if not has_dir and record is None and not has_video:
        die(f"сайта {slug} нет ни на диске, ни в projects.json")

    # ── что уйдёт ──
    print(f"\nУДАЛЕНИЕ САЙТА: {slug}")
    if record:
        print(f"  запись в галерее : {record.get('name','')} · {record.get('cat','')} · {record.get('date','')}")
    else:
        print("  запись в галерее : нет (только файлы на диске)")
    if has_dir:
        files, size = tree_size(real)
        print(f"  папка            : generated-sites/{slug}/  — {files} файлов, {human(size)}")
        for rel in ("index.html", "comparison/ai-version.html", "comparison/comparison-final.mp4",
                    "comparison/ai-version-scroll.mp4", "comparison/design-system-scroll.mp4"):
            mark = "✓" if os.path.isfile(os.path.join(real, rel)) else "—"
            print(f"      {mark} {rel}")
    else:
        print("  папка            : нет (только запись в projects.json)")
    if has_video:
        for v in videos:
            print(f"  ролик            : {os.path.relpath(v, ROOT)} — {human(os.path.getsize(v))}")
    else:
        print("  ролик            : нет")

    if "--dry" in flags:
        print("\n--dry: ничего не удалено.")
        return

    if "--yes" not in flags:
        print("\nОтменить будет нельзя (git тут не ведётся).")
        try:
            answer = input(f"Введите slug ещё раз для подтверждения [{slug}]: ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            die("отменено")
        if answer != slug:
            die("не совпало — ничего не удалено")

    # ── удаление ──
    if has_dir:
        shutil.rmtree(real)
        print(f"✓ удалена папка generated-sites/{slug}/")
    for v in videos:
        os.remove(v)
        print(f"✓ удалён ролик {os.path.relpath(v, ROOT)}")
    if record is not None:
        projects = [p for p in projects if p.get("slug") != slug]
        with open(PROJECTS, "w", encoding="utf-8") as f:
            json.dump(projects, f, ensure_ascii=False, indent=2)
            f.write("\n")
        print(f"✓ запись удалена из projects.json (осталось {len(projects)})")

    # метка светофора: иначе ключ повиснет в ratings.json и сервер начнёт его отвергать
    try:
        ratings = json.load(open(RATINGS, encoding="utf-8"))
    except (OSError, ValueError):
        ratings = None
    if isinstance(ratings, dict) and slug in ratings:
        ratings.pop(slug)
        with open(RATINGS, "w", encoding="utf-8") as f:
            json.dump(ratings, f, ensure_ascii=False, indent=2, sort_keys=True)
            f.write("\n")
        print("✓ метка удалена из ratings.json")

    subprocess.run([sys.executable, os.path.join(ROOT, "build_generated.py")], check=True)


if __name__ == "__main__":
    main()
