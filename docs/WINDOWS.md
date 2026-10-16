# Windows: установка и работа

## Установка

Нужны Windows с рабочим Python 3.9+ и Node.js 22+.
Скачай [Python для Windows](https://www.python.org/downloads/windows/), установи
Python Launcher (`py`) и добавление Python в PATH, если установщик предлагает
этот пункт. Скачай [Node.js](https://nodejs.org/en/download), включая npm.
После установки перезапусти PowerShell/терминал агента, чтобы обновился PATH.

Скачай ZIP репозитория через Code → Download ZIP. Распакуй полностью, например
в `C:\Projects\design-parser`. Не запускай файлы из окна просмотра ZIP.
Можно использовать путь с пробелами: запускатели заключают путь в кавычки.

Дважды нажми `setup-windows.cmd`. Установка запускает `npm ci`
и собирает три галереи и индекс паттернов. Первый запуск требует
интернета. Затем нажми `start-windows.cmd`: браузер откроет `http://localhost:8080/`.
Все разделы, включая анимации, доступны на одном сервере. Окно терминала должно
оставаться открытым. Ctrl+C завершает сервер; повторный запуск использует уже
работающий экземпляр Design Parser на этом порту.

Для одного просмотра достаточно `start-windows.cmd` и установленного Python.
Chromium не требуется и автоматически не устанавливается. Скрипты Playwright —
необязательный способ автоматизации для агента. Только если они нужны, установи
браузер явно: `py -3 scripts/project.py setup --with-browser`.

## Через PowerShell

Открой терминал внутри распакованной папки:

```powershell
py -3 --version
node --version
npm.cmd --version
py -3 scripts/project.py setup
py -3 scripts/project.py doctor
py -3 scripts/project.py start
```

Если PowerShell запрещает `npm.ps1`, используй `npm.cmd` и `npx.cmd`. Менять
ExecutionPolicy не требуется. Запускатель Python сам выбирает `npm.cmd`.
Если команды `py` нет, но `python --version` показывает Python 3, замени `py -3`
на `python` или переустанови Python с Launcher.

Для скачивания проекта через Git (если установлен [Git for Windows](https://git-scm.com/downloads/win)):

```powershell
git clone https://github.com/danilasylov/design-parser.git
cd design-parser
.\setup-windows.cmd
.\start-windows.cmd
```

Никаких симлинков, bash, Homebrew, административных прав для создания ссылок
или FFmpeg из чужой ОС для основного процесса не нужно. Сравнительный ролик
в старом процессе использует обычную копию файла, если Windows не разрешает симлинк.

## Работа с агентом

Открой корень проекта в агенте, где видны `AGENTS.md`, `README.md`, `scripts/`
и `motion_reference/`. Дай ему задачу:

> Прочитай AGENTS.md и .agents/skills/site-from-ref-motion/SKILL.md. Работаем на
> Windows: для Python используй py -3. Создай сайт про [тема], найди референсы
> по всему каталогу, изучи видео и полную страницу, добавь подходящие анимации.
> Не дублируй один паттерн разными направлениями. Проверь результат в браузере.

В Claude Code также доступна команда `/site-from-ref-motion`.
Если агент не имеет средства просмотра изображений, он не сможет честно завершить
визуальный QA: нужен агент с просмотром PNG/JPG и браузером либо ручной просмотр.

## Загрузка выбранных материалов

```powershell
py -3 scripts/select_references.py sites "музыкальный фестиваль dark typography" --limit 8
py -3 scripts/fetch_assets.py --sites 1a519123-071a-449f-b5df-0def73ed7f35
py -3 scripts/select_references.py motion "text reveal hover"
py -3 scripts/fetch_assets.py --motion react-bits.animated-content
```

Код и список карточек поставляются сразу, тяжёлые видео загружаются отдельно.
Сбой загрузки у конкретного автора указан в `.cache/downloads.json`; повторный
запуск пропускает исправные файлы. Не копируй каталог `node_modules` с Mac.
При изменении медиа на сайте автора после проверки источника можно повторить
команду с `--allow-updated`; оба хеша сохраняются в отчёте, источник не выдаётся
за точный старый снимок. Исходный код по этому флагу не обновляется.
FFmpeg скачивается под Windows автоматически через `npm ci`.

## Типичные проблемы

| Симптом | Что сделать |
|---|---|
| `py`/`node` не найден | Переоткрыть терминал после установки; проверить PATH |
| Запускатель закрывается с ошибкой | Выполнить его из PowerShell и прочитать сообщение |
| Chromium не найден | `npx.cmd playwright install chromium` |
| FFmpeg не скачался | Повторить `npm.cmd ci`, проверить сеть; либо указать `FFMPEG_PATH` |
| Порт 8080 занят другой программой | `py -3 scripts/project.py start --port 8090` |
| Нет превью/исходника | Скачать выбранный ID через `scripts/fetch_assets.py` |
| Кириллица в терминале искажена | `chcp 65001`; CMD-запускатели включают Python UTF-8 |
| Метки оценки не сохраняются | Открыть через наш сервер, а не `file://` или GitHub Pages |

Для собственного FFmpeg в PowerShell:

```powershell
$env:FFMPEG_PATH = 'C:\Tools\ffmpeg\bin\ffmpeg.exe'
node scripts/storyboard.cjs 'C:\Videos\reference.mp4' '.cache\reference'
```

## Первый демонстрационный сайт

Prism BI уже входит в скачанный проект: открой
`http://localhost:8080/generated-sites/prism-bi/` после запуска сервера.
Он также выделен на стартовой странице и показан первым в галерее.
Для просмотра только этого примера распакуй `demo/prism-bi.zip` и дважды нажми
`prism-bi/index.html`. Python, Node.js и Chromium для отдельного HTML не нужны.
Второй пример — VESPER: `http://localhost:8080/generated-sites/vesper/index.html`.
Его можно открыть отдельно: распакуй `demo/vesper.zip` и запусти
`vesper/index.html` в браузере с WebGL. Он закреплён вторым в галерее.

Второй способ установки всего проекта — стандартные команды, без CMD-файлов:
`npm.cmd ci`, затем
`py -3 scripts/project.py build` и `py -3 scripts/project.py start`.
