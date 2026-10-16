#!/usr/bin/env python3
"""Локальный сервер галереи: раздаёт репозиторий и СОХРАНЯЕТ метки светофора на диск.

    python3 serve.py            # http://localhost:8080/generated-sites/
    python3 serve.py 9000       # другой порт

Зачем отдельный сервер вместо `python3 -m http.server`: страница, открытая по file://
(или через голый http.server), может держать метки только в localStorage — а туда
Claude не заглянет. Здесь клик по метке уходит POST-ом и тут же ложится в
`generated-sites/ratings.json`, который читают и человек, и агент.

API (тот же origin, что и страница):
    GET  /api/ratings                     → {"ratings": {...}}
    POST /api/ratings                     ← {"slug": "...", "rating": "star|green|yellow|red|null",
                                             "note": "почему", "posted": true|false}
                                             (note и posted опциональны)
                                          → {"ok": true, "ratings": {...}}

Формат ratings.json (ключ — slug из projects.json):
    {"bivak": {"rating": "green", "note": "", "posted": false, "ts": "2026-08-10T12:00:00"}}

`rating: "star"` — верхняя метка, сильнее «зелёной» (мой личный фаворит, эту тему и подачу
повторить в первую очередь). `posted` — независимая отметка «запостил в X/Twitter», к цвету
метки отношения не имеет: можно поставить и без рейтинга, и вместе с любым из них.

Оценка `null` (или "") стирает рейтинг. Слаг, которого нет в projects.json, отклоняется —
чтобы в файл не попадал мусор от старых вкладок. Запись атомарная (.tmp + os.replace)
и под локом, так что две вкладки не затрут файл друг друга. Запись целиком стирается,
когда в ней не осталось ни рейтинга, ни отметки `posted` (одна заметка без них смысла не имеет).
"""
import json, os, socket, sys, threading
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlsplit

ROOT = os.path.dirname(os.path.abspath(__file__))
GEN = os.path.join(ROOT, "generated-sites")
RATINGS = os.path.join(GEN, "ratings.json")
PROJECTS = os.path.join(GEN, "projects.json")
VALID = {"star", "green", "yellow", "red"}
MAX_BODY = 64 * 1024
_lock = threading.Lock()


def load_ratings():
    try:
        with open(RATINGS, encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {}


def save_ratings(data):
    tmp = RATINGS + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")
    os.replace(tmp, RATINGS)


def known_slugs():
    """Слаги из projects.json — единственные допустимые ключи ratings.json."""
    try:
        with open(PROJECTS, encoding="utf-8") as f:
            return {p.get("slug") for p in json.load(f) if p.get("slug")}
    except (OSError, ValueError):
        return set()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    # Галерея пересобирается скриптом прямо во время работы сервера — кэш только мешает.
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _private_path(self):
        parts = unquote(urlsplit(self.path).path).replace("\\", "/").split("/")
        return any(p in {".git", ".cache", ".stfolder"} or p.startswith(".env") or p == "settings.local.json" for p in parts)

    def do_HEAD(self):
        if self._private_path():
            return self.send_error(404)
        return super().do_HEAD()

    def do_GET(self):
        if self._private_path():
            return self._json(404, {"error": "not found"})
        if self.path.split("?")[0] == "/api/motion-availability":
            try:
                base = os.path.join(ROOT, "motion_reference")
                with open(os.path.join(base, "motion_catalog.json"), encoding="utf-8") as f:
                    examples = json.load(f)["examples"]
                available = {}
                for example in examples:
                    paths = example.get("video_paths", []) + [example.get("poster_path")]
                    available[example["id"]] = [p for p in paths if p and os.path.isfile(os.path.join(base, p))]
                return self._json(200, available)
            except (OSError, ValueError, KeyError):
                return self._json(503, {"error": "motion catalog unavailable"})
        if self.path.split("?")[0] == "/api/ratings":
            with _lock:
                return self._json(200, {"ratings": load_ratings()})
        return super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/api/ratings":
            return self._json(404, {"ok": False, "error": "нет такого эндпоинта"})
        try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            return self._json(400, {"ok": False, "error": "плохой размер тела запроса"})
        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            return self._json(400, {"ok": False, "error": "тело не JSON"})

        slug = (payload.get("slug") or "").strip()
        rating = payload.get("rating") or None
        note = (payload.get("note") or "").strip()[:500]
        posted = bool(payload.get("posted"))
        if slug not in known_slugs():
            return self._json(400, {"ok": False, "error": f"нет сайта {slug!r} в projects.json"})
        if rating is not None and rating not in VALID:
            return self._json(400, {"ok": False, "error": f"метка {rating!r} не star/green/yellow/red"})

        with _lock:
            data = load_ratings()
            if rating is None and not posted:          # заметка сама по себе смысла не имеет
                data.pop(slug, None)
            else:                                       # клиент всегда шлёт полное состояние — доверяем ему
                data[slug] = {
                    "rating": rating,
                    "note": note,
                    "posted": posted,
                    "ts": datetime.now().isoformat(timespec="seconds"),
                }
            save_ratings(data)
            out = dict(data)
        marks = {"star": "⭐", "green": "🟢", "yellow": "🟡", "red": "🔴"}
        tag = marks.get(rating, '— снята')
        print(f"  метка: {slug} → {tag}" + ("  🐦класс" if posted else "") + (f"  «{note}»" if note else ""))
        return self._json(200, {"ok": True, "ratings": out})

    def log_message(self, fmt, *args):     # тише: интересны только метки, а не каждый .mp4
        pass


def lan_ips():
    """Адреса, по которым сервер видно с других устройств (Wi-Fi и Tailscale)."""
    out = []
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ip = info[4][0]
            if not ip.startswith("127.") and ip not in out:
                out.append(ip)
    except OSError:
        pass
    return out


def main():
    port = 8080
    for a in sys.argv[1:]:
        if a.isdigit():
            port = int(a)
    # 0.0.0.0 — чтобы галерея открывалась с телефона (Tailscale / домашний Wi-Fi).
    # Только localhost: HOST=127.0.0.1 python3 serve.py
    host = os.environ.get("HOST", "0.0.0.0")
    if not os.path.exists(RATINGS):
        save_ratings({})
    srv = ThreadingHTTPServer((host, port), Handler)
    print(f"Галерея: http://localhost:{port}/generated-sites/   (референсы — /site-copy/, секции — /sections/)")
    if host == "0.0.0.0":
        for ip in lan_ips():
            print(f"  с телефона: http://{ip}:{port}/generated-sites/")
    print(f"Метки пишутся в {os.path.relpath(RATINGS, ROOT)}. Ctrl+C — стоп.\n")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nостановлено")
        srv.server_close()


if __name__ == "__main__":
    main()
