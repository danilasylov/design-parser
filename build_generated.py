#!/usr/bin/env python3
"""Генерирует generated-sites/index.html — галерею «Мои сайты».

Источник правды — generated-sites/projects.json (список сгенерированных лендингов).
Каждая карточка показывает живое превью сайта (iframe со <slug>/index.html),
категорию, короткую строку «тэглайн · кластер» и ссылки на сайты-референсы.
Длинное поле `desc` в карточку НЕ выводится (остаётся в JSON как заметка о дизайн-системе).

Внизу карточки — статус двух артефактов сравнения, которые ищутся на диске:
  <slug>/comparison/ai-version.html      — ИИ-слоп клон (/site-slop)
  <slug>/comparison/comparison-final.mp4 — смонтированный ролик (/site-comparison)
Есть файл → зелёный чип-ссылка, нет → серый пунктирный «нет».
Категории берутся из taxonomy.py (общие с галереей-референсом).

Третий чип — «Пост»: раскрывает под карточкой готовый текст для X/Twitter к
сравнительному ролику. Уникальный крючок (первые строки под контекст сайта) лежит в
поле `post` записи projects.json, общий хвост-оффер — в generated-sites/post_template.txt
(плейсхолдер {hook}). Правка оффера — один файл на все 60 сайтов.

Метки светофора (⭐ топ / 🟢 хорошо / 🟡 средне / 🔴 плохо) живут в generated-sites/ratings.json
и вшиваются в страницу как стартовое состояние. Клик по метке уходит POST-ом на
/api/ratings — эндпоинт поднимает serve.py, он же и пишет файл. Без сервера (file://
или голый http.server) метки падают в localStorage, и в шапке загорается предупреждение.

Отдельно от метки — чип «🐦 Twitter»: независимая ручная отметка «этот сайт я уже
запостил в X/Twitter», для себя. Живёт в том же ratings.json (поле `posted`), но не
зависит от цветной метки — можно поставить и без неё. Фильтр в шапке по этому чипу
показывает наоборот — сайты, которые ЕЩЁ НЕ запощены (без активной отметки).
"""
import json, os

from taxonomy import CAT_ORDER

ROOT = os.path.dirname(os.path.abspath(__file__))
GEN = os.path.join(ROOT, "generated-sites")
projects = json.load(open(os.path.join(GEN, "projects.json"), encoding="utf-8"))

# Метки — отдельный файл: пересборка галереи их не трогает, а сервер пишет их независимо.
try:
    ratings = json.load(open(os.path.join(GEN, "ratings.json"), encoding="utf-8"))
    if not isinstance(ratings, dict):
        ratings = {}
except (OSError, ValueError):
    ratings = {}


def rating_of(slug):
    """'star' | 'green' | 'yellow' | 'red' | '' — терпимо к ручной правке файла."""
    rec = ratings.get(slug)
    if isinstance(rec, str):
        rec = {"rating": rec}
    r = (rec or {}).get("rating") or ""
    return r if r in ("star", "green", "yellow", "red") else ""


def note_of(slug):
    rec = ratings.get(slug)
    return (rec or {}).get("note", "") if isinstance(rec, dict) else ""


def posted_of(slug):
    """Отметка «запостил в X/Twitter» — независима от цветной метки."""
    rec = ratings.get(slug)
    return bool((rec or {}).get("posted")) if isinstance(rec, dict) else False


def esc(s):
    return (str(s or "").replace("&", "&amp;").replace("<", "&lt;")
            .replace(">", "&gt;").replace('"', "&quot;"))


# Шаблон поста: общий хвост-оффер один на все сайты, уникален только крючок ({hook}).
# Файла нет — берём вшитый дефолт, чтобы галерея собралась в любом случае.
POST_FALLBACK = """{hook}

Same prompt — completely different outcome once a custom design system is applied:
❌ Top: LLM defaults
✅ Bottom: Handcrafted design system

🚀 Building an MVP or landing page?
I'm taking 3 clients this month for a complete web design & build:
• $200 flat rate
• 3 unique UI concepts for FREE when you reach out

Drop me a DM to claim a spot! 📩"""
try:
    POST_TPL = open(os.path.join(GEN, "post_template.txt"), encoding="utf-8").read().strip("\n")
except OSError:
    POST_TPL = POST_FALLBACK


def post_of(p):
    """Готовый текст поста или '' — если крючок для сайта ещё не написан."""
    hook = (p.get("post") or "").strip()
    return POST_TPL.replace("{hook}", hook) if hook else ""


def refero(pid):
    return "https://styles.refero.design/style/" + pid


def plural(n, one, few, many):
    """24 лендинга, 16 категорий — счётчики в шапке склоняются."""
    n10, n100 = n % 10, n % 100
    if n10 == 1 and n100 != 11:
        return one
    if 2 <= n10 <= 4 and not 12 <= n100 <= 14:
        return few
    return many


# --- карточки ---------------------------------------------------------------
# Порядок: сначала новые. `date` — только день, поэтому сайты одного дня раньше
# разруливались порядком строк в projects.json и вставали задом наперёд (stanza выше
# более позднего rondo). Тай-брейк — время создания файла `<slug>/index.html`
# (st_birthtime на macOS, mtime как фолбэк): не зависит ни от порядка в JSON,
# ни от того, вспомнил ли кто-то дописать время в `date`.
def born(p):
    try:
        st = os.stat(os.path.join(GEN, p.get("slug", ""), "index.html"))
    except OSError:
        return 0.0
    return getattr(st, "st_birthtime", st.st_mtime)


projects.sort(key=lambda p: (p.get("date", ""), born(p)), reverse=True)

cat_counts = {}
for p in projects:
    c = p.get("cat", "")
    if c:
        cat_counts[c] = cat_counts.get(c, 0) + 1

# Артефакты сравнения существуют на диске или нет — статус берём из файловой системы,
# а не из projects.json: так он не может разъехаться с реальностью.
SLOP_REL = "comparison/ai-version.html"
VIDEO_REL = "comparison/comparison-final.mp4"


def has(slug, rel):
    f = os.path.join(GEN, slug, rel)
    return os.path.isfile(f) and os.path.getsize(f) > 0


RATE_TITLES = {
    "star": "Топ — сильнее «зелёной», личный фаворит: повторить в первую очередь",
    "green": "Хорошо — такие сайты и такие темы делать ещё",
    "yellow": "Средне — сойдёт, но не образец",
    "red": "Плохо — избегать эту тему (референс при этом не в бане)",
}

n_slop = n_video = n_post = n_posted = 0
rate_counts = {"star": 0, "green": 0, "yellow": 0, "red": 0, "none": 0}
cards_html = []
for idx, p in enumerate(projects):
    slug = p["slug"]
    href = f"{slug}/index.html"
    name = esc(p.get("name") or slug)
    cat = p.get("cat", "")
    cs = p.get("cs", "light")
    tagline = esc(p.get("tagline", ""))
    cluster = esc(p.get("cluster", ""))
    refs = p.get("refs", [])

    slop, video = has(slug, SLOP_REL), has(slug, VIDEO_REL)
    post = post_of(p)
    posted = posted_of(slug)
    n_slop += slop
    n_video += video
    n_post += bool(post)
    n_posted += posted
    status_html = (
        (f'<a class="st on" href="{slug}/{SLOP_REL}" target="_blank" rel="noopener noreferrer" '
         f'title="Открыть ИИ-слоп клон">ИИ-слоп</a>'
         if slop else '<span class="st off" title="Клона нет — /site-slop ' + slug + '">ИИ-слоп</span>')
        + (f'<a class="st on" href="{slug}/{VIDEO_REL}" target="_blank" rel="noopener noreferrer" '
           f'title="Открыть сравнительный ролик">Видео</a>'
           if video else '<span class="st off" title="Ролика нет — /site-comparison ' + slug + '">Видео</span>')
        + ('<button type="button" class="st on post-t" aria-expanded="false" '
           'title="Текст поста для X к сравнительному ролику">Пост</button>'
           if post else '<span class="st off" title="Крючка нет — допиши поле post в projects.json">Пост</span>')
        + (f'<button type="button" class="pin{" on" if posted else ""}" data-slug="{esc(slug)}" '
           f'title="{"Запощено в X — клик снимет отметку" if posted else "Отметить: сайт уже запощен в X/Twitter"}" '
           f'aria-pressed="{"true" if posted else "false"}">🐦 Twitter</button>')
    )
    post_html = (
        f'<div class="post">'
        f'<pre class="post-text">{esc(post)}</pre>'
        f'<div class="post-foot"><span class="post-len">{len(post)} симв.</span>'
        f'<button class="post-copy">Копировать ⧉</button></div></div>'
        if post else ""
    )

    ref_names = " ".join(r.get("name", "") for r in refs)
    # в поиск добавлены слова состояния: «слоп», «видео», «пост», «класс» и их отрицания
    state_words = (("слоп" if slop else "без слопа") + " " + ("видео" if video else "без видео")
                   + " " + ("пост" if post else "без поста")
                   + " " + ("твиттер запощено" if posted else "твиттер не запощено без твиттера"))
    search = esc(" ".join([p.get("name", ""), cat, tagline, cluster, ref_names, state_words]).lower())

    # чип ведёт на страницу дизайн-системы в Refero (источник вёрстки), а не на сайт-оригинал
    refs_html = "".join(
        f'<a class="ref" href="{esc(refero(r["id"]) if r.get("id") else r.get("url",""))}" '
        f'target="_blank" rel="noopener noreferrer" '
        f'title="Дизайн-система на Refero: {esc(r.get("name",""))}">{esc(r.get("name"))} ↗</a>'
        for r in refs
    )
    sub = " · ".join(x for x in [tagline, cluster] if x)

    rate = rating_of(slug)
    note = note_of(slug)
    rate_counts[rate or "none"] += 1
    dots = "".join(
        f'<button class="dot {k[0] if k != "star" else "star"}{" on" if rate == k else ""}" data-r="{k}" '
        f'title="{RATE_TITLES[k]}" aria-label="{RATE_TITLES[k]}" '
        f'aria-pressed="{"true" if rate == k else "false"}">{"★" if k == "star" else ""}</button>'
        for k in ("star", "green", "yellow", "red")
    )

    cards_html.append(f"""
    <article class="card" data-cat="{esc(cat)}" data-search="{search}" data-slug="{esc(slug)}"
             data-i="{idx}" data-name="{esc((p.get('name') or slug).lower())}"{f' data-rating="{rate}"' if rate else ''}>
      <div class="thumb-wrap">
        <a class="thumb" href="{href}" target="_blank" rel="noopener noreferrer" title="Открыть {name}">
          <iframe src="{href}" loading="lazy" scrolling="no" tabindex="-1" title="{name} preview"></iframe>
          <span class="scheme">{'тёмная' if cs == 'dark' else 'светлая'}</span>
          <span class="hint">Открыть ↗</span>
        </a>
        <div class="rate" role="group" aria-label="Оценка сайта">{dots}</div>
      </div>
      <div class="body">
        <div class="head">
          <h3 title="{name}">{name}</h3>
          {f'<span class="cat">{esc(cat)}</span>' if cat else ''}
        </div>
        {f'<div class="tagline">{sub}</div>' if sub else ''}
        {f'<div class="refs"><span class="refs-l">На основе:</span>{refs_html}</div>' if refs_html else ''}
        <input class="note" type="text" maxlength="200" value="{esc(note)}"
               title="Зачем: по красным меткам я должен понимать, какую именно тему обходить"
               placeholder="Заметка к метке: чем хорош / что не так с темой…">
        <div class="status">{status_html}
          <button class="del" data-slug="{esc(slug)}" title="Скопировать команду удаления сайта со всем, что с ним связано">Удалить ⧉</button>
        </div>
        {post_html}
      </div>
    </article>""")

# --- дропдаун категорий -----------------------------------------------------
options = ['<option value="">Все категории</option>']
for c in CAT_ORDER:
    if cat_counts.get(c):
        options.append(f'<option value="{esc(c)}">{esc(c)} ({cat_counts[c]})</option>')
cat_options = "\n      ".join(options)

n = len(projects)
n_cat = len(cat_counts)
# стартовое состояние меток для фронтенда; на загрузке страница освежит его с сервера
ratings_json = json.dumps(
    {s: {"rating": rating_of(s), "note": note_of(s), "posted": posted_of(s)}
     for s in (p["slug"] for p in projects) if rating_of(s) or posted_of(s)},
    ensure_ascii=False)

html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Мои сайты — сгенерированные лендинги</title>
<style>
  :root{{ --bg:#0b0b0d; --card:#15151a; --card2:#1d1d24; --txt:#f4f4f6; --mut:#9a9aa6; --acc:#6c8cff; --bd:#2a2a33;
         --green:#5fd39a; --yellow:#e8c65a; --red:#ff6b6b; --star:#ffb020; --tw:#1d9bf0;}}
  *{{box-sizing:border-box}}
  html,body{{margin:0;background:var(--bg);color:var(--txt);font:15px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}}
  /* Шапка прибита к верху и держится в двух плотных строках: навигация + статистика,
     под ней — поиск и фильтры. Чем ниже она, тем больше видно карточек при разметке. */
  header{{position:sticky;top:0;z-index:20;background:rgba(11,11,13,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--bd);padding:8px 20px}}
  .bar{{display:flex;gap:8px;align-items:center;flex-wrap:wrap;max-width:1600px;margin:0 auto}}
  .bar+.bar{{margin-top:7px}}
  .topnav{{display:flex;gap:6px;align-items:center;flex-shrink:0}}
  .nav-item{{text-decoration:none;color:var(--mut);font-size:12px;font-weight:600;padding:5px 12px;border-radius:999px;border:1px solid var(--bd);background:var(--card2);white-space:nowrap;transition:color .15s,border-color .15s,background .15s}}
  .nav-item:hover{{color:var(--txt);border-color:#3a3a48}}
  .nav-item.on{{background:var(--acc);color:#fff;border-color:var(--acc)}}
  .navToggle{{display:none;background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:999px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer;align-items:center;gap:6px;flex-shrink:0}}
  @media(max-width:680px){{
    #q,#catSel{{display:none}}
    .topnav{{display:none;flex-direction:column;align-items:stretch;background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:8px;gap:6px;width:100%;order:9}}
    .topnav.open{{display:flex}}
    .navToggle{{display:inline-flex}}
    .nav-item{{text-align:center}}
    #filterBar{{display:none}}
    #filterBar.open{{display:flex;flex-direction:column;align-items:stretch;gap:8px}}
    #filterBar select{{max-width:none}}
    #filterBar .rfilter{{justify-content:space-between}}
  }}
  h1{{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}}
  .sub{{color:var(--mut);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}}
  input[type=search]{{background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:9px;padding:7px 11px;font-size:13px;flex:1 1 180px;min-width:0;outline:none}}
  input[type=search]:focus{{border-color:var(--acc)}}
  select{{background:var(--card2);border:1px solid var(--bd);color:var(--txt);border-radius:9px;padding:7px 9px;font-size:12px;outline:none;max-width:240px;cursor:pointer}}
  select:focus{{border-color:var(--acc)}}
  .count{{color:var(--mut);font-size:12px;white-space:nowrap;flex-shrink:0}}
  /* Фильтр по метке: сегментированный переключатель с цветными точками */
  .rfilter{{display:flex;gap:3px;background:var(--card2);border:1px solid var(--bd);border-radius:9px;padding:2px;flex-shrink:0}}
  .rfilter button{{font:inherit;font-size:11px;line-height:1;color:var(--mut);background:transparent;border:0;
                   border-radius:7px;padding:5px 8px;cursor:pointer;display:flex;align-items:center;gap:4px;white-space:nowrap}}
  .rfilter button:hover{{color:var(--txt)}}
  .rfilter button.on{{background:var(--acc);color:#fff}}
  .rfilter .sw{{width:9px;height:9px;border-radius:50%;flex-shrink:0}}
  .rfilter .sw.s{{background:var(--star)}} .rfilter .sw.g{{background:var(--green)}} .rfilter .sw.y{{background:var(--yellow)}}
  .rfilter .sw.r{{background:var(--red)}} .rfilter .sw.n{{background:transparent;box-shadow:inset 0 0 0 1.5px var(--mut)}}
  /* Тумблер «показать только ещё НЕ запощенные в X» — тот же язык, что и чип «Twitter» на карточке */
  .pfilter{{font:inherit;font-size:12px;line-height:1;color:var(--mut);background:var(--card2);
            border:1px solid var(--bd);border-radius:9px;padding:7px 10px;cursor:pointer;flex-shrink:0;
            display:inline-flex;align-items:center;gap:5px;transition:color .15s,border-color .15s,background .15s}}
  .pfilter:hover{{color:var(--txt);border-color:#3a3a48}}
  .pfilter[aria-pressed="true"]{{color:#8ecbff;background:rgba(29,155,240,.16);border-color:rgba(29,155,240,.55)}}
  .pfilter span{{color:var(--mut);font-size:11px}}
  .pfilter[aria-pressed="true"] span{{color:#8ecbff}}
  /* Куда уходят метки: в ratings.json (сервер) или только в localStorage (file://) */
  #save{{font-size:12px;color:var(--mut);display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0;margin-left:auto}}
  #save::before{{content:"";width:7px;height:7px;border-radius:50%;background:var(--mut);flex-shrink:0}}
  #save.ok::before{{background:var(--green)}}
  #save.local{{color:var(--yellow)}} #save.local::before{{background:var(--yellow)}}
  main{{max-width:1600px;margin:0 auto;padding:22px 20px 80px}}
  .grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:22px}}
  .card{{background:var(--card);border:1px solid var(--bd);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .2s,transform .2s}}
  .card:hover{{border-color:#3a3a48;transform:translateY(-2px)}}
  /* Метка светофора видна при беглом пролистывании: рамка карточки + подсветка полоски сверху */
  .card[data-rating="star"]{{border-color:rgba(255,209,102,.6);box-shadow:0 0 0 1px rgba(255,209,102,.18)}}
  .card[data-rating="green"]{{border-color:rgba(95,211,154,.45)}}
  .card[data-rating="yellow"]{{border-color:rgba(232,198,90,.45)}}
  .card[data-rating="red"]{{border-color:rgba(255,107,107,.45)}}
  .card[data-rating="star"] .thumb-wrap::after,
  .card[data-rating="green"] .thumb-wrap::after,
  .card[data-rating="yellow"] .thumb-wrap::after,
  .card[data-rating="red"] .thumb-wrap::after{{content:"";position:absolute;left:0;right:0;bottom:0;height:3px;z-index:3}}
  .card[data-rating="star"] .thumb-wrap::after{{background:var(--star)}}
  .card[data-rating="green"] .thumb-wrap::after{{background:var(--green)}}
  .card[data-rating="yellow"] .thumb-wrap::after{{background:var(--yellow)}}
  .card[data-rating="red"] .thumb-wrap::after{{background:var(--red)}}
  .card[data-rating="red"] .thumb{{opacity:.62}}
  .card[data-rating="red"]:hover .thumb{{opacity:1}}
  .thumb-wrap{{position:relative}}
  .thumb{{position:relative;display:block;aspect-ratio:16/10;overflow:hidden;background:#0b0b0d;border-bottom:1px solid var(--bd);transition:opacity .2s}}
  .thumb iframe{{position:absolute;top:0;left:0;width:1440px;height:900px;border:0;transform-origin:top left;pointer-events:none;background:#fff}}
  .thumb .scheme{{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.6);color:#e8e8ef;font-size:11px;padding:3px 8px;border-radius:999px;backdrop-filter:blur(4px);z-index:2}}
  .thumb .hint{{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(8,8,12,.55);color:#fff;font-weight:600;font-size:15px;opacity:0;transition:opacity .18s;z-index:2}}
  .thumb:hover .hint{{opacity:1}}
  /* Светофор: три точки поверх превью. Приглушены, пока карточка не оценена и мышь не над ней. */
  .rate{{position:absolute;top:10px;right:10px;z-index:4;display:flex;gap:5px;padding:5px;border-radius:999px;
         background:rgba(0,0,0,.55);backdrop-filter:blur(6px);opacity:.3;transition:opacity .15s}}
  .thumb-wrap:hover .rate,.card[data-rating] .rate,.rate:focus-within{{opacity:1}}
  .dot{{width:17px;height:17px;border-radius:50%;border:1.5px solid currentColor;background:transparent;
        cursor:pointer;padding:0;font-size:0;line-height:1;transition:transform .12s,background .12s}}
  .dot:hover{{transform:scale(1.18)}}
  .dot.g{{color:var(--green)}} .dot.y{{color:var(--yellow)}} .dot.r{{color:var(--red)}}
  .dot.on{{background:currentColor;box-shadow:0 0 0 2px rgba(255,255,255,.22)}}
  /* Звезда — верхняя метка, «сильнее зелёной»: рисуется глифом, а не залитым кругом */
  .dot.star{{border:0;background:transparent;color:rgba(255,255,255,.4);font-size:15px;
             display:inline-flex;align-items:center;justify-content:center}}
  .dot.star.on{{color:var(--star);background:transparent;box-shadow:none;text-shadow:0 0 7px rgba(255,209,102,.85)}}
  /* visibility, а не display: карточка держит высоту с самого начала, чтобы при появлении
     заметки (после оценки) не «прыгала» сама и не сдвигала соседние карточки в ряду грида */
  .note{{visibility:hidden;box-sizing:border-box;font:inherit;font-size:12px;color:var(--txt);background:var(--card2);
         border:1px solid var(--bd);border-radius:8px;padding:6px 9px;outline:none;width:100%}}
  .card[data-rating] .note{{visibility:visible}}
  .note:focus{{border-color:var(--acc)}}
  .note.saved{{border-color:rgba(95,211,154,.55)}}
  .body{{padding:15px 16px 17px;display:flex;flex-direction:column;gap:8px;flex:1}}
  .head{{display:flex;align-items:center;gap:10px;justify-content:space-between}}
  .head h3{{margin:0;font-size:17px;font-weight:650;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
  .cat{{background:rgba(108,140,255,.16);color:#aebfff;font-size:11px;padding:3px 9px;border-radius:999px;white-space:nowrap;flex-shrink:0}}
  .tagline{{color:var(--txt);font-size:13px;opacity:.85}}
  .refs{{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:2px}}
  .refs-l{{color:var(--mut);font-size:12px;margin-right:2px}}
  .ref{{font-size:12px;color:var(--txt);text-decoration:none;border:1px solid var(--bd);background:var(--card2);border-radius:7px;padding:3px 9px;transition:border-color .15s,color .15s}}
  .ref:hover{{border-color:var(--acc);color:var(--acc)}}
  /* статус артефактов сравнения: зелёный чип-ссылка = файл есть, пунктирный серый = нет */
  .status{{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-top:auto;padding-top:9px;border-top:1px solid var(--bd)}}
  .st{{font-size:12px;line-height:1;border-radius:7px;padding:5px 9px;border:1px solid var(--bd);display:inline-flex;align-items:center;gap:6px;text-decoration:none;transition:border-color .15s,background .15s}}
  .st::before{{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}}
  .st.on{{color:#5fd39a;background:rgba(95,211,154,.1);border-color:rgba(95,211,154,.32)}}
  .st.on:hover{{border-color:#5fd39a;background:rgba(95,211,154,.18)}}
  .st.off{{color:var(--mut);border-style:dashed;background:transparent}}
  .st.off::before{{background:transparent;box-shadow:inset 0 0 0 1px currentColor}}
  /* «🐦 Twitter» — ручная отметка «уже запостил в X», не связана с цветной меткой рейтинга */
  .pin{{font:inherit;font-size:12px;line-height:1;border-radius:7px;padding:5px 9px;border:1px dashed var(--bd);
        display:inline-flex;align-items:center;gap:5px;background:transparent;color:var(--mut);
        cursor:pointer;touch-action:manipulation;transition:color .15s,border-color .15s,background .15s}}
  .pin:hover{{color:var(--txt);border-color:#3a3a48}}
  .pin.on{{color:#8ecbff;background:rgba(29,155,240,.16);border:1px solid rgba(29,155,240,.55)}}
  /* Чип «Пост» — кнопка-вкладка: раскрывает под карточкой готовый текст для X.
     Состояние держит класс .post-open на карточке, а не атрибут hidden: в мобильном
     Safari переключение hidden через toggleAttribute срабатывало не всегда. */
  /* font:inherit тянет и размер body (15px) — возвращаем 12px из .st, иначе чип шире соседних */
  button.st{{font:inherit;font-size:12px;line-height:1;cursor:pointer;touch-action:manipulation}}
  .card.post-open .st.post-t{{color:#aebfff;background:rgba(108,140,255,.14);border-color:rgba(108,140,255,.45)}}
  .post{{display:none;border:1px solid var(--bd);border-radius:10px;background:var(--card2);
         padding:10px 11px;flex-direction:column;gap:8px}}
  .card.post-open .post{{display:flex}}
  .post-text{{margin:0;font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:var(--txt);
              white-space:pre-wrap;word-break:break-word;max-height:230px;overflow:auto;
              -webkit-overflow-scrolling:touch;-webkit-user-select:text;user-select:text}}
  .post-foot{{display:flex;align-items:center;gap:8px}}
  .post-len{{color:var(--mut);font-size:11px}}
  .post-copy{{margin-left:auto;font:inherit;font-size:12px;line-height:1;color:var(--txt);background:transparent;
              border:1px solid var(--bd);border-radius:7px;padding:5px 9px;cursor:pointer;touch-action:manipulation;
              transition:color .15s,border-color .15s,background .15s}}
  .post-copy:hover{{color:var(--acc);border-color:var(--acc)}}
  .post-copy.copied{{color:#5fd39a;border-color:rgba(95,211,154,.5);background:rgba(95,211,154,.1)}}
  /* Удаление: страница открыта по file:// и сама стереть файлы не может — кнопка кладёт
     в буфер команду `python3 delete_site.py <slug>`, удаляет уже скрипт (он ещё раз спросит). */
  .del{{margin-left:auto;font:inherit;font-size:12px;line-height:1;color:var(--mut);background:transparent;
        border:1px solid var(--bd);border-radius:7px;padding:5px 9px;cursor:pointer;
        transition:color .15s,border-color .15s,background .15s}}
  .del:hover{{color:#ff8f8f;border-color:rgba(255,143,143,.5);background:rgba(255,143,143,.08)}}
  .del.copied{{color:#5fd39a;border-color:rgba(95,211,154,.5);background:rgba(95,211,154,.1)}}
  #empty{{color:var(--mut);text-align:center;padding:60px 0;display:none}}
  footer{{max-width:1600px;margin:0 auto;padding:0 20px 60px;color:var(--mut);font-size:13px;line-height:1.6}}
  footer a{{color:var(--acc);text-decoration:none}}
  @media(max-width:640px){{.grid{{grid-template-columns:1fr}}}}
</style>
</head>
<body>
<header>
  <h1>Мои сайты</h1>
  <div class="bar">
    <button class="navToggle" id="navToggle" type="button" aria-expanded="false" aria-controls="topnav">☰ Меню</button>
    <nav class="topnav" id="topnav">
      <a class="nav-item" href="../site-copy/index.html">← Референсы</a>
      <a class="nav-item on" href="index.html">Мои сайты</a>
      <a class="nav-item" href="../sections/index.html">Секции</a>
      <a class="nav-item" href="../motion_reference/index.html">Анимации</a>
    </nav>
    <div class="sub">{n} {plural(n, 'лендинг', 'лендинга', 'лендингов')} · {n_cat} {plural(n_cat, 'категория', 'категории', 'категорий')} · ИИ-слоп {n_slop} · ролик {n_video} · пост {n_post} · твиттер {n_posted} · <span id="rated"></span></div>
    <span id="save" title="Где сохраняются метки"></span>
  </div>
  <div class="bar" id="filterBar">
    <input type="search" id="q" placeholder="Поиск: название, категория, референс, «без видео»…" autocomplete="off">
    <select id="catSel" title="Категория">
      {cat_options}
    </select>
    <select id="sortSel" title="Сортировка">
      <option value="new">Сначала новые</option>
      <option value="old">Сначала старые</option>
      <option value="rate">Метка: топ → красные</option>
      <option value="rate-">Метка: красные → топ</option>
      <option value="name">Название А-Я</option>
    </select>
    <div class="rfilter" id="rfilter" role="group" aria-label="Фильтр по метке">
      <button data-r="" class="on">Все</button>
      <button data-r="star" title="Топ — фавориты"><i class="sw s"></i><span></span></button>
      <button data-r="green" title="Хорошие"><i class="sw g"></i><span></span></button>
      <button data-r="yellow" title="Средние"><i class="sw y"></i><span></span></button>
      <button data-r="red" title="Плохие"><i class="sw r"></i><span></span></button>
      <button data-r="none" title="Ещё не оценены"><i class="sw n"></i><span></span></button>
    </div>
    <button type="button" class="pfilter" id="pfilter" aria-pressed="false"
            title="Показать только сайты, которые ещё НЕ запощены в X/Twitter">🐦 Twitter<span></span></button>
    <span class="count" id="count"></span>
  </div>
</header>
<main>
  <div class="grid" id="grid">{''.join(cards_html)}
  </div>
  <div id="empty">Ничего не найдено</div>
</main>
<footer>
  Каждая карточка — самодостаточный <code>index.html</code> в своей папке. Собрано из
  <code>generated-sites/projects.json</code> скриптом <code>build_generated.py</code>.
  Зелёные чипы внизу карточки — ИИ-слоп клон и смонтированный ролик; пунктирный серый значит,
  что файла ещё нет (сделать: <code>/site-slop &lt;slug&gt;</code>, затем
  <code>/site-comparison &lt;slug&gt;</code>). В поиске работают слова «без слопа», «без видео» и «без поста».
  <br><br>
  <b>Чип «Пост»</b> раскрывает готовый текст для X к сравнительному ролику. Первые строки —
  свои у каждого сайта (поле <code>post</code> в <code>projects.json</code>), дальше общий
  хвост-оффер из <code>generated-sites/post_template.txt</code> (плейсхолдер
  <code>{{hook}}</code>): поменял цену или число клиентов в одном файле — обновилось на всех
  карточках после <code>python3 build_generated.py</code>.
  <br><br>
  <b>Метки светофора</b> (точки на превью): ⭐ топ — личный фаворит, сильнее «зелёной», делать ещё
  такое в первую очередь; 🟢 хорошо — делать ещё такое, 🟡 средне,
  🔴 плохо — <i>избегать эту тему</i>. Красная метка не отправляет референс в бан: дизайн-система
  остаётся доступной, обходить надо тему и её подачу. Заметка под карточкой объясняет мне, что
  именно понравилось или не сработало. Метки лежат в <code>generated-sites/ratings.json</code> и
  пишутся туда сразу — но только если страница открыта через <code>python3 serve.py</code>
  (<code>http://localhost:8080/generated-sites/</code>). По <code>file://</code> они осядут в
  localStorage, и в шапке загорится жёлтое предупреждение.
  <br><br>
  <b>Чип «🐦 Twitter»</b> — независимая ручная отметка «этот сайт я уже запостил в X/Twitter», для
  себя. К цветной метке отношения не имеет: можно поставить и без неё. Клик снимает отметку так же,
  как повторный клик по светофору. Фильтр «🐦 Twitter» в шапке — наоборот, показывает сайты
  <i>без</i> этой отметки (ещё не запощенные).
  Кнопка «Удалить ⧉» копирует в буфер <code>python3 delete_site.py &lt;slug&gt;</code> — сама страница
  файлы стереть не может; скрипт удалит папку сайта вместе со слопом и роликами, вычистит запись
  из <code>projects.json</code> и пересоберёт галерею, спросив подтверждение.
  Референсы ведут на страницы дизайн-систем · вернуться к <a href="../site-copy/index.html">галерее-референсу →</a>
</footer>
<script>
// Живое превью: iframe рендерит сайт в натуральную ширину 1440px и масштабируется
// под ширину карточки. ResizeObserver держит масштаб при ресайзе/показе карточки.
const IFRAME_W = 1440;
const ro = new ResizeObserver(entries => {{
  for(const e of entries){{
    const f = e.target.querySelector('iframe');
    const w = e.target.clientWidth;
    if(f && w) f.style.transform = 'scale(' + (w / IFRAME_W) + ')';
  }}
}});
document.querySelectorAll('.thumb').forEach(t => ro.observe(t));

// Мобильное меню: на узких экранах нав-ссылки и панель сортировки/фильтров (поиск и
// категории туда не входят — на мобильном их нет вообще) прячутся за кнопку «☰ Меню»
// и раскрываются вместе, каждая на своём месте в потоке (без абсолютного позиционирования —
// так высота не зависит от того, сколько в rfilter активных фильтров).
(function(){{
  const btn = document.getElementById('navToggle');
  const panels = [document.getElementById('topnav'), document.getElementById('filterBar')].filter(Boolean);
  if(!btn || !panels.length) return;
  function setOpen(open){{
    panels.forEach(p => p.classList.toggle('open', open));
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }}
  btn.addEventListener('click', () => setOpen(!panels.some(p => p.classList.contains('open'))));
  document.addEventListener('click', e => {{
    if(e.target === btn) return;
    if(panels.some(p => p.classList.contains('open')) && !panels.some(p => p.contains(e.target))) setOpen(false);
  }});
}})();

// ── Метки светофора ────────────────────────────────────────────────────────
// Стартовое состояние вшито при сборке из ratings.json; на загрузке страница ещё раз
// спрашивает сервер (файл могли поменять после сборки). Клик → POST /api/ratings,
// который поднимает serve.py и пишет ratings.json. Нет сервера (file:// или голый
// http.server) → падаем в localStorage и честно говорим об этом в шапке.
const API = new URL('/api/ratings', location.href).href;
const LS_KEY = 'gen_ratings';
let ratings = {ratings_json};
let online = false;

const saveEl = document.getElementById('save');
function setMode(mode){{
  online = mode === 'server';
  saveEl.className = online ? 'ok' : 'local';
  saveEl.textContent = online ? '→ ratings.json' : '⚠ метки только в браузере';
  saveEl.title = online
    ? 'Клик по метке сразу пишется в generated-sites/ratings.json'
    : 'Страница открыта без serve.py: метки лежат в localStorage, из файлов их не видно.\\n'
      + 'Запусти python3 serve.py и открой http://localhost:8080/generated-sites/ — метки перенесутся.';
}}
function readLocal(){{ try {{ return JSON.parse(localStorage.getItem(LS_KEY) || '{{}}'); }} catch(e) {{ return {{}}; }} }}
function writeLocal(){{ try {{ localStorage.setItem(LS_KEY, JSON.stringify(ratings)); }} catch(e) {{}} }}
function ratingOf(slug){{ const r = ratings[slug]; return (r && r.rating) || ''; }}
function postedOf(slug){{ const r = ratings[slug]; return !!(r && r.posted); }}

function paint(card){{
  const slug = card.dataset.slug, r = ratingOf(slug), posted = postedOf(slug);
  if(r) card.dataset.rating = r; else delete card.dataset.rating;
  card.querySelectorAll('.dot').forEach(d => {{
    const on = d.dataset.r === r;
    d.classList.toggle('on', on);
    d.setAttribute('aria-pressed', on ? 'true' : 'false');
  }});
  const pin = card.querySelector('.pin');
  if(pin){{
    pin.classList.toggle('on', posted);
    pin.setAttribute('aria-pressed', posted ? 'true' : 'false');
    pin.title = posted ? 'Запощено в X — клик снимет отметку' : 'Отметить: сайт уже запощен в X/Twitter';
  }}
  const note = card.querySelector('.note');
  if(note && document.activeElement !== note) note.value = (ratings[slug] && ratings[slug].note) || '';
}}
function paintAll(){{ cards.forEach(paint); }}

// Одна точка отправки: метка, заметка и отметка «запощено» — все три сразу.
// rating:null стирает цветную метку (сама запись выживает, пока жив posted).
async function persist(slug, rating, note, posted){{
  if(rating || posted) ratings[slug] = {{rating: rating || null, note: note || '', posted: !!posted, ts: new Date().toISOString()}};
  else delete ratings[slug];
  try{{
    const res = await fetch(API, {{
      method: 'POST', headers: {{'Content-Type': 'application/json'}},
      body: JSON.stringify({{slug: slug, rating: rating, note: note || '', posted: !!posted}})
    }});
    if(!res.ok) throw new Error(res.status);
    const data = await res.json();
    if(data && data.ratings) ratings = data.ratings;
    setMode('server');
  }}catch(e){{
    writeLocal();
    setMode('local');
  }}
  paintAll(); render();
}}

// ── Фильтр по категории/метке + поиск + сортировка ─────────────────────────
// Карточки уже в DOM: фильтр прячет через display, сортировка двигает CSS-свойством
// `order`. Переставлять узлы нельзя — перенос <iframe> в DOM перезагружает превью.
const cards = [...document.querySelectorAll('.card')];
const qEl = document.getElementById('q');
const catSel = document.getElementById('catSel');
const sortSel = document.getElementById('sortSel');
const rfilter = document.getElementById('rfilter');
const pfilter = document.getElementById('pfilter');
const countEl = document.getElementById('count');
const ratedEl = document.getElementById('rated');
const emptyEl = document.getElementById('empty');
let query = '', cat = '', rate = '', sort = 'new', unpostedOnly = false;

const RANK = {{star: 0, green: 1, yellow: 2, red: 3}};   // звезда — топ, неоценённые всегда в хвосте
function rankOf(c, rev){{
  const r = ratingOf(c.dataset.slug);
  if(!r) return 9;
  return rev ? 3 - RANK[r] : RANK[r];
}}

function render(){{
  const q = query.trim().toLowerCase();
  const vis = [];
  const counts = {{star: 0, green: 0, yellow: 0, red: 0, none: 0}};
  let unpostedN = 0;
  for(const c of cards){{
    const r = ratingOf(c.dataset.slug);
    const posted = postedOf(c.dataset.slug);
    counts[r || 'none']++;
    if(!posted) unpostedN++;
    const okCat = !cat || c.dataset.cat === cat;
    const okQ = !q || (c.dataset.search || '').includes(q);
    const okR = !rate || (rate === 'none' ? !r : r === rate);
    const okP = !unpostedOnly || !posted;
    const show = okCat && okQ && okR && okP;
    c.style.display = show ? '' : 'none';
    if(show) vis.push(c);
  }}
  const i = c => +c.dataset.i;                       // порядок сборки = сначала новые
  const cmp = {{
    new:    (a, b) => i(a) - i(b),
    old:    (a, b) => i(b) - i(a),
    name:   (a, b) => a.dataset.name.localeCompare(b.dataset.name, 'ru'),
    'rate': (a, b) => rankOf(a, false) - rankOf(b, false) || i(a) - i(b),
    'rate-':(a, b) => rankOf(a, true) - rankOf(b, true) || i(a) - i(b),
  }}[sort];
  vis.sort(cmp).forEach((c, n) => {{ c.style.order = n; }});

  countEl.textContent = vis.length + ' / ' + cards.length;
  emptyEl.style.display = vis.length ? 'none' : 'block';
  ratedEl.textContent = 'оценено ' + (cards.length - counts.none) + ' из ' + cards.length;
  rfilter.querySelectorAll('button[data-r]').forEach(b => {{
    const k = b.dataset.r;
    if(k) b.querySelector('span').textContent = counts[k] || 0;
  }});
  pfilter.querySelector('span').textContent = unpostedN;
}}
qEl.addEventListener('input', e => {{ query = e.target.value; render(); }});
catSel.addEventListener('change', e => {{ cat = e.target.value; render(); }});
sortSel.addEventListener('change', e => {{ sort = e.target.value; render(); }});
pfilter.addEventListener('click', () => {{
  unpostedOnly = !unpostedOnly;
  pfilter.setAttribute('aria-pressed', unpostedOnly ? 'true' : 'false');
  render();
}});
rfilter.addEventListener('click', e => {{
  const b = e.target.closest('button[data-r]');
  if(!b) return;
  rate = b.dataset.r;
  rfilter.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  render();
}});

// Клик по точке: повторный клик по горящей метке её снимает. Заметка и «Twitter» переносятся как есть.
document.querySelectorAll('.card .dot').forEach(d => {{
  d.addEventListener('click', () => {{
    const card = d.closest('.card'), slug = card.dataset.slug;
    const next = ratingOf(slug) === d.dataset.r ? null : d.dataset.r;
    persist(slug, next, next ? (card.querySelector('.note').value || '') : '', postedOf(slug));
  }});
}});
// Заметка сохраняется по Enter/уходу фокуса и только если метка уже стоит.
document.querySelectorAll('.card .note').forEach(nEl => {{
  const save = () => {{
    const card = nEl.closest('.card'), slug = card.dataset.slug, r = ratingOf(slug);
    if(!r || nEl.value === ((ratings[slug] && ratings[slug].note) || '')) return;
    persist(slug, r, nEl.value, postedOf(slug)).then(() => {{
      nEl.classList.add('saved');
      setTimeout(() => nEl.classList.remove('saved'), 1200);
    }});
  }};
  nEl.addEventListener('change', save);
  nEl.addEventListener('blur', save);
  nEl.addEventListener('keydown', e => {{ if(e.key === 'Enter') nEl.blur(); }});
}});
// «🐦 Twitter»: независимый тумблер «уже запостил в X», не трогает цветную метку и заметку.
document.querySelectorAll('.card .pin').forEach(pin => {{
  pin.addEventListener('click', () => {{
    const card = pin.closest('.card'), slug = card.dataset.slug;
    const note = card.querySelector('.note');
    persist(slug, ratingOf(slug), note ? note.value : '', !postedOf(slug));
  }});
}});

// Свежие метки с сервера (файл мог измениться после сборки страницы). Нет сервера —
// поднимаем то, что успело осесть в localStorage, и предупреждаем в шапке.
setMode('local');
fetch(API).then(r => r.ok ? r.json() : Promise.reject()).then(d => {{
  ratings = (d && d.ratings) || {{}};
  setMode('server');
  paintAll(); render();
}}).catch(() => {{
  ratings = Object.assign({{}}, ratings, readLocal());
  setMode('local');
  paintAll(); render();
}});
render();

// Кнопка «Удалить»: страница статическая и файлы стирать не умеет, поэтому кладёт в буфер
// готовую команду. Само удаление (папка + слоп + ролики + запись в projects.json + пересборка)
// делает delete_site.py, и он ещё раз просит подтверждение — стереть случайно нельзя.
function copyText(text){{
  if(navigator.clipboard && window.isSecureContext){{
    return navigator.clipboard.writeText(text).then(() => true).catch(() => fallback(text));
  }}
  return Promise.resolve(fallback(text));
}}
function fallback(text){{
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
  document.body.appendChild(ta); ta.select();
  let ok = false;
  try {{ ok = document.execCommand('copy'); }} catch(e) {{ ok = false; }}
  document.body.removeChild(ta);
  if(!ok) window.prompt('Скопируйте команду вручную:', text);
  return ok;
}}
document.querySelectorAll('.del').forEach(b => {{
  b.addEventListener('click', () => {{
    const cmd = 'python3 delete_site.py ' + b.dataset.slug;
    copyText(cmd).then(() => {{
      const was = b.textContent;
      b.textContent = 'Команда скопирована';
      b.classList.add('copied');
      setTimeout(() => {{ b.textContent = was; b.classList.remove('copied'); }}, 2200);
    }});
  }});
}});

// ── Вкладка «Пост» ─────────────────────────────────────────────────────────
// Текст (уникальный крючок из projects.json + общий оффер из post_template.txt) уже
// вшит в карточку; чип только раскрывает панель, кнопка кладёт текст в буфер.
// Обработчик делегирован на document и висит на click+touchend: в мобильном Safari
// клик по кнопке внутри карточки долетал не всегда.
function togglePost(b){{
  const card = b.closest('.card');
  const open = !card.classList.contains('post-open');
  card.classList.toggle('post-open', open);
  b.setAttribute('aria-expanded', open ? 'true' : 'false');
}}
// Текст поста длинный: на мобильном буфер часто недоступен (страница отдаётся по http,
// значит navigator.clipboard нет, а execCommand в WebKit не копирует из textarea).
// Тогда выделяем сам <pre> — остаётся тап «Скопировать» в системном меню.
function copyPost(pre){{
  const text = pre.textContent;
  if(navigator.clipboard && window.isSecureContext){{
    return navigator.clipboard.writeText(text).then(() => 'copy').catch(() => selectNode(pre));
  }}
  const range = document.createRange();
  range.selectNodeContents(pre);
  const sel = window.getSelection();
  sel.removeAllRanges(); sel.addRange(range);
  let ok = false;
  try {{ ok = document.execCommand('copy'); }} catch(e) {{ ok = false; }}
  if(ok) sel.removeAllRanges();
  return Promise.resolve(ok ? 'copy' : 'select');
}}
function selectNode(pre){{
  const range = document.createRange();
  range.selectNodeContents(pre);
  const sel = window.getSelection();
  sel.removeAllRanges(); sel.addRange(range);
  return 'select';
}}
function flash(b, label){{
  const was = b.dataset.label || b.textContent;
  b.dataset.label = was;
  b.textContent = label;
  b.classList.add('copied');
  setTimeout(() => {{ b.textContent = was; b.classList.remove('copied'); }}, 2000);
}}
let lastTap = 0;
function onTap(e){{
  if(e.type === 'touchend'){{ lastTap = Date.now(); }}
  else if(Date.now() - lastTap < 700){{ return; }}   // click вслед за touchend — не дублируем
  const chip = e.target.closest('.post-t');
  if(chip){{ e.preventDefault(); togglePost(chip); return; }}
  const cp = e.target.closest('.post-copy');
  if(cp){{
    e.preventDefault();
    const pre = cp.closest('.post').querySelector('.post-text');
    copyPost(pre).then(r => flash(cp, r === 'copy' ? 'Скопировано' : 'Выделено — «Скопировать»'));
  }}
}}
document.addEventListener('click', onTap);
document.addEventListener('touchend', onTap, {{passive: false}});
</script>
</body>
</html>"""

out = os.path.join(GEN, "index.html")
open(out, "w", encoding="utf-8").write(html)
print(f"wrote {out}  ({n} sites, {n_cat} categories, {len(html)//1024} KB)")
