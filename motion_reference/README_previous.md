# Личный справочник моушн-графики: сайты + видео
Проверка источников: 2026-10-14.

В справочнике 35 ресурсов, 96 паттернов, 16 тематических разделов и 59 первичных источников. Есть одна авторская спецификация пресета.

## Что это и чего здесь нет
Это стартовая база знаний, а не пакет скачанных анимаций. В ней нет чужих платных исходников, видеофайлов или готовых компонентов. Кандидаты-инструменты предложены для реализации паттернов: наличие инструмента рядом с эффектом не означает, что в нем уже найден готовый пресет.

Документация рассмотрена, но библиотеки не устанавливались и эффекты не рендерились. Проверены корректность JSON, целостность SQLite и связи записей. Пустые таблицы implementations и assets предназначены для следующего этапа: собственного кода, разрешенных материалов и проверенных экспортов.

## Файлы
- motion_catalog.json — полный каталог для импорта или передачи в проект Codex.
- motion_catalog.sqlite — та же информация в SQLite, с нормализованными тегами и связями.
- schema.sql — структура таблиц.
- example_queries.sql — примеры поисковых запросов.
- README.md — этот справочник.
- validation.json — результаты проверки данных.
- SHA256SUMS.txt — контрольные суммы файлов.

## Главный принцип базы
Разделять **паттерн**, **реализацию**, **источник** и **экспортированный материал**.

Например, «появление текста по словам» — паттерн typography.word-stagger. Его реализация для сайта может использовать Motion или GSAP, для ролика — Remotion, для монтажа в Premiere — отдельный MOGRT. Готовый MP4 является экспортом, а не редактируемым шаблоном.

Не создавать сотни почти одинаковых записей для направлений одного slide: хранить направление, амплитуду и длительность как параметры. При этом несколько смысловых паттернов могут использовать одинаковые примитивы.

## Как классифицировать
Предлагаемая схема — практическая, не универсальный отраслевой стандарт.

Задача, объект, триггер, метод расчета, рендерер, стиль и формат — независимые оси. Hover описывает условие запуска; spring — модель движения; SVG — способ представления графики; paper-cut — оформление. Одно не должно подменять другое.

Сохранять русское и английское имя, понятное описание, параметры, теги и проверенные ссылки. Превью в будущем полезно хранить отдельно от исходника. До появления настоящего файла preview_url остается null.

## Рабочая стратегия для сайтов и Remotion
Для собственного каталога рекомендована общая спецификация эффекта, а не обещание единого кода для любых сред. Сначала отдельно реализовать несколько простых эффектов для веба и Remotion, затем подтвердить совпадение ключевых состояний.

Remotion требует состояния, вычисляемого из кадра: state = f(frame, fps, props, prepared_assets). Автономные CSS-анимации, transition и setTimeout не являются корректным источником времени для такого рендера. Документация: https://www.remotion.dev/docs/troubleshooting/css-animations

Подходящие Lottie JSON имеют отдельную интеграцию @remotion/lottie. Это не обещание совместимости любой композиции, любого .lottie-контейнера и всех возможностей After Effects: https://www.remotion.dev/docs/lottie/lottie

В интерактивной анимации зафиксировать сценарий событий: когда произошел клик, где находился указатель и как менялась прокрутка. Для симуляции может потребоваться фиксированный шаг и предварительный расчет: одного seed не всегда достаточно.

## Форматы и обмен
Для веба сохранять редактируемую реализацию и ресурсы: код, SVG, Lottie JSON, .lottie, .riv или 3D-сцену. Их поддержку проверять в конкретном проигрывателе.

Для монтажа сохранять и исходный проект, и экспорт. Прозрачный слой требует подходящего кодека и альфа-канала, а не просто расширения MOV. Практический вариант — ProRes 4444 / 4444 XQ либо PNG-последовательность; WebM с alpha требует проверки среды. Обычный экспорт H.264 MP4 не считать прозрачным мастер-слоем. Документация: https://www.remotion.dev/docs/transparent-videos

У каждого экспорта фиксировать размеры, FPS, длительность, кодек, pixel format, alpha mode, color space, шрифты и исходные файлы. Изменяемый текст и числовые данные хранить как параметры, а не только внутри отрендерованных пикселей.

## Лицензии
У библиотеки, платного шаблона, шрифта, картинки и музыкального файла могут быть разные условия. Личное назначение базы не означает права автоматически копировать все материалы целого сервиса.

На этом этапе сохранены описания и ссылки, а не защищенные исходники. Не использовать их для массового скачивания. Добавляя разрешенный материал, сохранить автора, URL, дату получения, текст/снимок лицензии, требуемую атрибуцию и привязку к проекту.

null в license_label означает «отдельно не проверено», а не «нет ограничений». Примеры важных различий: у GSAP специальная лицензия, у публичного React Bits — MIT + Commons Clause, у Animate.css — Hippocratic License, у Remotion — собственная двухуровневая модель. У Lottie runtime и LottieFiles-анимаций разные лицензии. Подробности и источники указаны в карточках ресурсов.

## Как довести паттерн до переиспользуемого компонента
Выбрать описание и создать собственную реализацию либо законно получить исходник. Зафиксировать версии зависимостей и входные параметры. Добавить простое превью и проверить реальный видеорендер, а не только воспроизведение в браузере.

После теста заполнить implementations: package_version, entrypoint/code_path, time_driver, deterministic, seekable, tested_environment, license_url и test_evidence. Только после успешного рендера поставить статус render_tested.

Для веба проверить touch и клавиатуру, вариант reduced motion, возможность остановки бесконечной анимации, читабельность и производительность. Для видео — одинаковость повторного кадра, перемотку, шрифты, начало/конец эффекта и прозрачность. Рекомендации браузерной документации: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API

## Пример собственной спецификации
В JSON есть preset.word-stagger.soft.v1. Начальные значения 500 мс для слова, 70 мс между словами и 24 px смещения — предложенный вариант, не норматив. Там нет готового кода. Реализацию и измерения нужно добавить отдельно.

## Каталог ресурсов

### CSS / Web Animations API / View Transitions — `native-web`
Встроенные средства браузера для ключевых кадров, управления временем, анимации при прокрутке и переходов интерфейса.

Класс: browser_api. Доступ: Без отдельной платы за библиотеку.

Лицензия: отдельно не проверена. Лицензии кода из примеров и используемых материалов учитывать отдельно.

Повторное использование в видео: Для видео выразить состояние через номер кадра; совместимость браузерных API проверять отдельно.

Источники: [MDN — Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API); [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations); [MDN — View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API); [MDN — Animation performance and frame rate](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate).

### GSAP — `gsap`
Таймлайны, ScrollTrigger, SplitText, MorphSVG, DrawSVG, Flip и другие инструменты для сложной веб-анимации.

Класс: animation_engine. Доступ: Бесплатно, включая ранее платные плагины.

Лицензия: GSAP Standard No Charge. Не MIT; есть ограничения для конкурирующих визуальных конструкторов анимации.

Повторное использование в видео: Нужен управляемый таймлайн или перенос рецепта на покадровый движок; не считать autoplay совместимым с видеорендером.

Источники: [GSAP — Pricing and plugins](https://gsap.com/pricing/); [GSAP — Standard No Charge License](https://gsap.com/community/standard-license/).

### Motion — `motion`
Анимации интерфейсов, layout-переходы, жесты, пружины и прокрутка; ранее Framer Motion.

Класс: animation_engine. Доступ: Основная библиотека бесплатна; Motion+ отдельно.

Лицензия: MIT. MIT относится к библиотеке, а не автоматически ко всем платным продуктам и примерам.

Повторное использование в видео: Обычные компоненты Motion не являются готовыми Remotion-композициями; переносить визуальные правила.

Источники: [Motion — Library and products](https://motion.dev/).

### Anime.js — `animejs`
Таймлайны, stagger, SVG-морфинг, рисование линий, траектории, draggable и управление прокруткой.

Класс: animation_engine. Доступ: Бесплатная библиотека.

Лицензия: отдельно не проверена. Точное обозначение лицензии выбранной версии отдельно не проверялось.

Повторное использование в видео: Реализовать управление временем для видеорендера либо переписать движения через frame/progress.

Источники: [Anime.js — Animation engine](https://animejs.com/).

### React Spring — `react-spring`
Библиотека пружинных анимаций для React.

Класс: animation_engine. Доступ: Открытый проект; условия выбранной версии проверить.

Лицензия: отдельно не проверена. LICENSE выбранной версии отдельно не проверялся.

Повторное использование в видео: Пружина в реальном времени не заменяет покадровую spring-функцию Remotion.

Источники: [React Spring — Official site](https://www.react-spring.dev/); [Remotion — Frame-driven animation requirements](https://www.remotion.dev/docs/troubleshooting/css-animations).

### Animate.css — `animate-css`
Готовые CSS-классы для появлений, исчезновений и акцентных движений.

Класс: preset_library. Доступ: Доступен исходный код.

Лицензия: Hippocratic License. Не маркировать как MIT: репозиторий указывает Hippocratic License.

Повторное использование в видео: Для видео переносить ключевые состояния в покадровую анимацию.

Источники: [Animate.css — Official repository and license information](https://github.com/animate-css/animate.css/).

### Animista — `animista`
Визуальный выбор и настройка CSS-анимаций с копированием нужных keyframes.

Класс: preset_generator. Доступ: Бесплатно.

Лицензия: FreeBSD / BSD-2-Clause. Условия относятся к сгенерированному CSS; сохранять уведомления при распространении.

Повторное использование в видео: Удобный источник рецептов; CSS-анимации для Remotion нужно адаптировать.

Источники: [Animista — Generator and licensing](https://animista.net/).

### Hover.css — `hover-css`
Hover-эффекты для кнопок, ссылок, рамок, иконок и теней.

Класс: preset_library. Доступ: Личное использование и коммерческое лицензируются по-разному.

Лицензия: Custom / version-dependent. Официальная страница различает личную и коммерческую лицензии; не считать весь проект безусловно MIT.

Повторное использование в видео: Наведение в видео заменить запланированным событием; переносить визуальный эффект.

Источники: [Hover.css — Effects and licensing](https://ianlunn.github.io/Hover/).

### Magic UI — `magic-ui`
Готовые анимированные компоненты и эффекты для интерфейсов и лендингов.

Класс: component_library. Доступ: Бесплатное ядро; Pro отдельно.

Лицензия: MIT for public repository. У платных блоков отдельные условия; MIT бесплатного репозитория не переносится на Pro.

Повторное использование в видео: Код компонента обычно требует адаптации тайминга перед видеорендером.

Источники: [Magic UI — Component library](https://magicui.design/); [Magic UI — Repository license](https://github.com/magicuidesign/magicui/blob/main/LICENSE.md).

### React Bits — `react-bits`
Анимации текста, фоны, интерактивные компоненты и микровзаимодействия с доступным исходным кодом.

Класс: component_library. Доступ: Есть бесплатный каталог; Pro отдельно.

Лицензия: MIT + Commons Clause. Разрешено применение в продуктах, но ограничено распространение самих компонентов и их портов.

Повторное использование в видео: Рассматривать как веб-реализации и референсы; готовность к Remotion не подтверждена.

Источники: [React Bits — Component library](https://reactbits.dev/); [React Bits — MIT + Commons Clause](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md).

### Aceternity UI — `aceternity-ui`
Анимированные карточки, текстовые эффекты, фоны и блоки страниц.

Класс: component_library. Доступ: Бесплатные компоненты; платные блоки и шаблоны.

Лицензия: Aceternity License. Проверять условия конкретного материала; распространение исходников и конкурирующих наборов ограничено.

Повторное использование в видео: Переносить рецепт в видео, а не рассчитывать на прямой импорт с сохранением тайминга.

Источники: [Aceternity UI — Official component reference](https://ui.aceternity.com/llms-full.txt); [Aceternity UI — Licensing](https://ui.aceternity.com/licence).

### Lottie / lottie-web / Bodymovin — `lottie-web`
Воспроизведение экспортированной графической анимации; поддерживает переход к конкретному кадру.

Класс: animation_runtime. Доступ: Бесплатный runtime.

Лицензия: MIT for lottie-web. Лицензия runtime не предоставляет права на сторонние файлы анимаций.

Повторное использование в видео: Подходящие Lottie JSON можно подключать через @remotion/lottie; проверить эффекты, шрифты и изображения.

Источники: [Airbnb — Lottie Web repository](https://github.com/airbnb/lottie-web); [Remotion — Lottie component](https://www.remotion.dev/docs/lottie/lottie).

### dotLottie — `dotlottie`
Сжатый контейнер для Lottie-анимаций и ресурсов; может включать темы и определения интерактивности.

Класс: animation_format. Доступ: Открытый формат; сервисы и ресурсы имеют свои условия.

Лицензия: отдельно не проверена. Формат, лицензия проигрывателя и права на содержимое — разные сущности.

Повторное использование в видео: Проверить поддержку контейнера выбранным проигрывателем; не считать его обычным JSON или видео.

Источники: [LottieFiles — dotLottie format](https://docs.lottiefiles.com/en/format/dotlottie).

### LottieFiles — `lottiefiles`
Источник анимационных файлов и инструментов для работы с экосистемой Lottie.

Класс: asset_catalog. Доступ: Есть публичные материалы; услуги и другие материалы проверять отдельно.

Лицензия: Lottie Simple License for applicable public files. Публичные файлы лицензируются отдельно от runtime; лицензия запрещает создание аналогичного конкурирующего сервиса из коллекции файлов.

Повторное использование в видео: Использовать совместимый runtime или рендер в видео; конкретные ассеты в этот справочник не скачаны.

Источники: [LottieFiles — Lottie Simple License](https://lottiefiles.com/page/license); [LottieFiles — dotLottie format](https://docs.lottiefiles.com/en/format/dotlottie).

### Rive — `rive`
Редактор и runtimes для интерактивных анимаций, состояний и переходов.

Класс: interactive_editor_runtime. Доступ: Runtimes бесплатны; экспорт видео в редакторе относится к платным планам.

Лицензия: MIT for official runtimes. Редактор, облачный рендер и чужие работы не покрываются автоматически MIT runtime.

Повторное использование в видео: Видеоформаты экспортируются из редактора; интерактивные события нужно превратить в фиксированный сценарий.

Источники: [Rive — Web state machine playback](https://rive.app/docs/runtimes/web/state-machines); [Rive — Runtimes and MIT licensing](https://rive.app/docs/runtimes/getting-started); [Rive — Exporting Videos & Images](https://rive.app/docs/editor/exporting/exporting-for-video-and-static-design).

### Lordicon — `lordicon`
Каталог анимированных иконок для интерфейсов и роликов.

Класс: asset_catalog. Доступ: Бесплатная и платная лицензии.

Лицензия: Lordicon Free / Pro. Для бесплатного использования требуется атрибуция; есть ограничения на передачу и использование в шаблонах.

Повторное использование в видео: Импортировать или рендерить конкретный разрешенный формат; не распространять отдельные иконки как свой набор.

Источники: [Lordicon — Animated icons](https://lordicon.com/); [Lordicon — Licenses](https://lordicon.com/licenses); [Lordicon — Attribution](https://lordicon.com/docs/license/attribution).

### Three.js — `threejs`
3D-сцены, камеры, клипы анимации, скелетная анимация и morph targets.

Класс: rendering_engine. Доступ: Бесплатная библиотека.

Лицензия: MIT. Лицензии моделей, текстур и анимационных клипов проверяются отдельно.

Повторное использование в видео: Задать время сцены и камеры от кадра, обеспечить загрузку ресурсов и проверить рендер на целевом окружении.

Источники: [Three.js — Animation System](https://threejs.org/manual/pages/animation-system.html); [Three.js — MIT license](https://github.com/mrdoob/three.js/blob/dev/LICENSE).

### PixiJS — `pixijs`
GPU-рендеринг 2D-сцен; основа для спрайтов, фильтров и многослойных эффектов.

Класс: rendering_engine. Доступ: Открытый проект; лицензию версии проверить.

Лицензия: отдельно не проверена. LICENSE отдельно не проверялся; WebGPU и WebGL могут различаться по поддержке.

Повторное использование в видео: Не готовый видеоредактор: необходимы покадровое управление сценой и экспорт.

Источники: [PixiJS — Renderers](https://pixijs.com/8.x/guides/components/renderers).

### tsParticles — `tsparticles`
Частицы, интерактивные фоны, конфетти, фейерверки и готовые конфигурации.

Класс: specialized_engine. Доступ: Бесплатная библиотека.

Лицензия: MIT. Лицензии внешних картинок и форм учитывать отдельно.

Повторное использование в видео: Повторяемый видеорендер частиц потребует контролируемого времени и случайности; интеграция здесь не тестировалась.

Источники: [tsParticles — Engine and demos](https://particles.js.org/).

### D3 — `d3`
Визуализация данных и интерполяция переходов между состояниями элементов.

Класс: data_visualization_library. Доступ: Открытый проект; лицензию версии проверить.

Лицензия: отдельно не проверена. LICENSE выбранных модулей отдельно не проверялся.

Повторное использование в видео: Для Remotion использовать расчеты геометрии и интерполяции, а не автономные D3 transitions.

Источники: [D3 — Transitions](https://d3js.org/d3-transition); [Remotion — Frame-driven animation requirements](https://www.remotion.dev/docs/troubleshooting/css-animations).

### Remotion — `remotion`
Программное создание видео с состоянием, вычисляемым по номеру кадра; подходит для параметризуемых шаблонов.

Класс: video_framework. Доступ: Free License для индивидуального использования и подходящих небольших команд; иначе Company License.

Лицензия: Remotion License. Текущий FAQ: индивидуальные пользователи и команды до 3 человек могут подпадать под Free License; проверить условия совместной работы.

Повторное использование в видео: Основная среда для собственной покадровой видеобиблиотеки; не запускать CSS transitions и таймеры как источник времени.

Источники: [Remotion — Frame-driven animation requirements](https://www.remotion.dev/docs/troubleshooting/css-animations); [Remotion — Animating properties](https://www.remotion.dev/docs/animating-properties/); [Remotion — License FAQ](https://www.remotion.dev/docs/license/faq); [Remotion — Lottie component](https://www.remotion.dev/docs/lottie/lottie); [Remotion — Transparent videos](https://www.remotion.dev/docs/transparent-videos).

### Motion Canvas — `motion-canvas`
Программная анимация сцен через генераторы; визуальный предпросмотр и синхронизация по событиям.

Класс: video_framework. Доступ: Бесплатное ядро.

Лицензия: MIT. Лицензии сторонних ресурсов и экспортных зависимостей проверять отдельно.

Повторное использование в видео: Экспорт последовательности кадров или видео через FFmpeg exporter.

Источники: [Motion Canvas — Quickstart](https://motioncanvas.io/docs/quickstart/); [Motion Canvas — FFmpeg video exporter](https://motioncanvas.io/docs/rendering/video/); [Motion Canvas — MIT license](https://github.com/motion-canvas/motion-canvas/blob/main/LICENSE).

### Manim Community — `manim`
Математическая и объясняющая графика: формулы, диаграммы, геометрия и преобразования.

Класс: video_framework. Доступ: Бесплатно.

Лицензия: MIT. Сторонние шрифты, изображения и дополнения имеют собственные лицензии.

Повторное использование в видео: Результат использовать как видеослой; это не библиотека React-компонентов.

Источники: [Manim Community — Overview and examples](https://www.manim.community/).

### FFmpeg / libavfilter — `ffmpeg`
Монтаж и обработка через фильтры: переходы, zoompan, текст, наложения и визуализация аудио.

Класс: media_processing_tool. Доступ: Открытый инструмент; лицензия зависит от сборки.

Лицензия: отдельно не проверена. Конкретную сборку, кодеки и способ распространения проверить отдельно.

Повторное использование в видео: Сборка и преобразование результатов; не визуальный каталог сложных дизайнерских шаблонов.

Источники: [FFmpeg — Filters documentation](https://ffmpeg.org/ffmpeg-filters.html?from=20421&from_column=20421).

### After Effects / MOGRT — `after-effects`
Создание графических композиций и шаблонов с управляемыми текстом, цветом и другими параметрами.

Класс: authoring_tool. Доступ: Коммерческое приложение; точная цена не исследовалась.

Лицензия: Adobe terms; asset-specific. Зависимости шаблона, шрифты, плагины и лицензии исходников учитывать отдельно.

Повторное использование в видео: MOGRT предназначен для экосистемы Adobe; веб-версия требует отдельного экспорта или реализации.

Источники: [Adobe — Creating Motion Graphics templates](https://helpx.adobe.com/after-effects/desktop/motion-graphics/work-with-motion-graphics-templates/creating-motion-graphics-templates.html).

### DaVinci Resolve / Fusion — `fusion`
Узловой композитинг, 2D/3D-графика, титры, маски и пользовательские шаблоны.

Класс: authoring_tool. Доступ: Есть бесплатный DaVinci Resolve и платный Studio.

Лицензия: Blackmagic Design terms. Совместимость конкретного шаблона с Free/Studio и плагинами проверять отдельно.

Повторное использование в видео: Хранить исходную композицию и отрендеренный слой; универсального импорта в веб нет.

Источники: [Blackmagic Design — DaVinci Resolve Fusion](https://www.blackmagicdesign.com/ca/products/davinciresolve/fusion).

### Blender — `blender`
Анимация объектов и персонажей, риги, constraints, drivers и shape keys.

Класс: authoring_tool. Доступ: Открытое приложение; точная лицензия дополнений зависит от источника.

Лицензия: отдельно не проверена. Лицензии чужих моделей, текстур и Actions учитывать отдельно.

Повторное использование в видео: Использовать рендеры или поддерживаемые 3D-ассеты; материалы и процедурные эффекты не всегда переносимы.

Источники: [Blender — Animation & Rigging](https://www.blender.org/features/animation/).

### Jitter — `jitter`
Визуальная сборка моушн-графики с экспортом в веб- и видеоформаты.

Класс: authoring_tool. Доступ: Free/Pro/Max/Ultra; возможности экспорта зависят от плана.

Лицензия: Jitter terms. Бесплатные экспорты содержат watermark; прозрачность доступна на Max/Ultra согласно документации.

Повторное использование в видео: Lottie для совместимой графики, видео для монтажа; прозрачность и форматы зависят от плана.

Источники: [Jitter — Export your work](https://help.jitter.video/en/articles/5369843-export-your-work); [Jitter — Export transparent videos](https://help.jitter.video/en/articles/5405604-export-transparent-videos).

### Envato Elements — `envato`
Каталог шаблонов и творческих материалов для включения в конечные проекты.

Класс: asset_catalog. Доступ: Подписка; точная цена не исследовалась.

Лицензия: Envato Elements License. Лицензирование привязано к проектному использованию; перепродажа и распространение исходных материалов ограничены.

Повторное использование в видео: Проверять редактор, версию, плагины, права и требования каждого шаблона.

Источники: [Envato — Elements License](https://help.elements.envato.com/hc/en-us/articles/360000628966-Envato-Elements-License).

### Motion Array — `motion-array`
Видеошаблоны, пресеты, готовая графика и другие материалы для монтажа.

Класс: asset_catalog. Доступ: Подписка; точная цена не исследовалась.

Лицензия: Motion Array License. Готовые проекты сохраняют покрытие после отмены подписки; новые проекты требуют соблюдения актуальных условий.

Повторное использование в видео: Сохранять сведения о лицензии и проекте; сайт запрещает автоматические инструменты скачивания.

Источники: [Motion Array — Assets and platform](https://motionarray.com/); [Motion Array — License](https://motionarray.com/license/).

### Mixkit — `mixkit`
Бесплатные видеошаблоны для нескольких редакторов.

Класс: asset_catalog. Доступ: Бесплатные материалы.

Лицензия: Mixkit asset-type-specific license. Лицензии различаются по типам материалов; читать условия конкретного файла.

Повторное использование в видео: Шаблон должен соответствовать выбранному редактору и его версии.

Источники: [Mixkit — Video templates](https://mixkit.co/free-video-templates/); [Mixkit — Licenses by asset type](https://mixkit.co/license/).

### Osmo — `osmo`
Готовые веб-ресурсы, переходы, взаимодействия, компоненты и примеры.

Класс: component_catalog. Доступ: Платный доступ; есть демонстрационные ресурсы.

Лицензия: Osmo License. Ограничены передача исходников и создание конкурирующих наборов; условия доступа и хранения проверять перед копированием.

Повторное использование в видео: Веб-референсы и код; покадровый видеоэкспорт не подразумевается.

Источники: [Osmo — Web development resources](https://www.osmo.supply/); [Osmo — Licensing agreement](https://www.osmo.supply/legal/licensing-agreement).

### Codrops Demos — `codrops`
Демонстрации и разборы креативных веб-эффектов и экспериментальных интерфейсов.

Класс: reference_catalog. Доступ: Бесплатные downloadable demos.

Лицензия: MIT for demos unless otherwise stated. Отдельные исключения, дизайн-материалы и внешние зависимости проверять по каждому примеру.

Повторное использование в видео: Источник идей и реализаций для адаптации; демо не равно проверенному production-компоненту.

Источники: [Codrops — Demos Hub](https://tympanus.net/codrops/demos/); [Codrops — Licensing](https://tympanus.net/codrops/licensing/).

### Apple Motion — `apple-motion`
Создание титров, эффектов, переходов и генераторов для Final Cut Pro с публикуемыми параметрами.

Класс: authoring_tool. Доступ: Коммерческое приложение; точная цена не исследовалась.

Лицензия: Apple terms; asset-specific. Правила сторонних шаблонов и используемых материалов учитывать отдельно.

Повторное использование в видео: Шаблоны предназначены для Motion/Final Cut; в других средах использовать экспорт или отдельную реализацию.

Источники: [Apple — Final Cut Pro templates in Motion](https://support.apple.com/guide/motion/intro-to-final-cut-pro-templates-motn17691fe6/mac).

### Spline — `spline`
Визуальный редактор интерактивных 3D-сцен, состояний, событий и анимационных таймлайнов.

Класс: interactive_editor. Доступ: Тарифы и ограничения выбранной функции проверить.

Лицензия: отдельно не проверена. Лицензия сервиса и права на работы сообщества требуют отдельной проверки.

Повторное использование в видео: Документирован экспорт видео с длительностью, FPS и разрешением; интерактивность в файле видео не сохраняется.

Источники: [Spline — Interactive 3D design](https://spline.design/); [Spline — Exporting as Video](https://docs.spline.design/exporting-your-scene/files/exporting-as-video).

## Каталог паттернов
Связанные инструменты — кандидаты, а не проверенные реализации. Все записи первоначально имеют статус described_not_implemented.

### Появление и исчезновение
Направление и амплитуда — параметры варианта; для видео вычислять прогресс по кадру.

| ID | Название | Что происходит |
|---|---|---|
| `entrance_exit.fade` | Проявление / затухание / Fade in / out | Элемент становится видимым или исчезает без изменения положения. |
| `entrance_exit.slide` | Въезд / выезд / Slide in / out | Элемент смещается из-за края или из заданной точки к конечной позиции. |
| `entrance_exit.pop` | Появление с увеличением / Pop / scale reveal | Элемент увеличивается из малого масштаба, при необходимости с небольшим отскоком. |
| `entrance_exit.blur` | Появление из размытия / Blur reveal | Размытый элемент постепенно становится четким и видимым. |
| `entrance_exit.clip` | Открытие маской / Clip reveal | Область видимости расширяется, открывая неподвижный текст или изображение. |
| `entrance_exit.stagger` | Последовательное появление / Stagger reveal | Группа элементов появляется с небольшими смещениями времени начала. |

Технические источники раздела: [Animista — Generator and licensing](https://animista.net/); [Animate.css — Official repository and license information](https://github.com/animate-css/animate.css/); [Remotion — Animating properties](https://www.remotion.dev/docs/animating-properties/).

### Анимация текста
Учитывать кириллицу, переносы строк, загрузку шрифтов и целостность графем.

| ID | Название | Что происходит |
|---|---|---|
| `typography.typewriter` | Печатная машинка / Typewriter | Текст открывается постепенно, создавая впечатление набора символов. |
| `typography.word-stagger` | Анимация по словам / Word stagger | Слова появляются по очереди с собственным смещением или масштабом. |
| `typography.character-stagger` | Анимация по буквам / Character stagger | Отдельные графемы текста входят в композицию последовательно. |
| `typography.scramble` | Перебор символов / Text scramble | Случайные символы постепенно заменяются итоговым текстом. |
| `typography.text-morph` | Преобразование текста / Text morph | Один текстовый образ переходит в другой через формы, маски или переход между слоями. |
| `typography.marquee` | Бегущая строка / Marquee / ticker | Строка движется через окно просмотра и может повторяться без заметного стыка. |

Технические источники раздела: [Anime.js — Animation engine](https://animejs.com/); [Motion — Library and products](https://motion.dev/); [React Bits — Component library](https://reactbits.dev/); [Remotion — Animating properties](https://www.remotion.dev/docs/animating-properties/).

### Микровзаимодействия
В видео реальные действия пользователя заменить заранее записанным или заданным сценарием событий.

| ID | Название | Что происходит |
|---|---|---|
| `microinteraction.press` | Отклик на нажатие / Press feedback | Кнопка кратко уменьшается или смещается, подтверждая нажатие. |
| `microinteraction.hover-lift` | Подъем при наведении / Hover lift | Карточка немного приподнимается, меняя тень или масштаб. |
| `microinteraction.magnetic` | Магнитная кнопка / Magnetic attraction | Элемент следует за указателем в пределах ограниченной области. |
| `microinteraction.ripple` | Волна от нажатия / Click ripple | Круговая волна расширяется от точки клика и исчезает. |
| `microinteraction.toggle` | Переключение состояния / Toggle transition | Переключатель меняет позицию индикатора, цвет или форму. |
| `microinteraction.validation` | Подтверждение или ошибка / Validation feedback | Успех показывается галочкой, ошибка — коротким движением или изменением оформления. |

Технические источники раздела: [Motion — Library and products](https://motion.dev/); [Hover.css — Effects and licensing](https://ianlunn.github.io/Hover/); [Rive — Web state machine playback](https://rive.app/docs/runtimes/web/state-machines).

### Загрузка и прогресс
Индикатор реальной загрузки и декоративная петля должны иметь разные типы привязки к данным.

| ID | Название | Что происходит |
|---|---|---|
| `loading.spinner` | Вращающийся индикатор / Spinner | Графический элемент вращается, показывая ожидание. |
| `loading.dots` | Пульсирующие точки / Bouncing dots | Небольшая группа точек ритмично меняет положение или масштаб. |
| `loading.skeleton` | Скелетон с бликом / Skeleton shimmer | По временным заглушкам контента движется светлая полоса. |
| `loading.linear-progress` | Линейный прогресс / Linear progress | Длина полосы отражает известную долю завершения. |
| `loading.circular-progress` | Круговой прогресс / Circular progress | Доля дуги меняется в соответствии с прогрессом. |
| `loading.liquid-fill` | Заполнение жидкостью / Liquid fill | Уровень внутри силуэта повышается; поверхность может колебаться. |

Технические источники раздела: [Animista — Generator and licensing](https://animista.net/); [Lordicon — Animated icons](https://lordicon.com/); [MDN — Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

### Компоновка и навигация
В живом интерфейсе измеряется layout; в видео можно заранее задать обе геометрии.

| ID | Название | Что происходит |
|---|---|---|
| `layout.accordion` | Раскрытие аккордеона / Accordion expand | Панель раскрывается, сдвигая соседнее содержимое. |
| `layout.shared-element` | Переход общего элемента / Shared element transition | Карточка или изображение визуально сохраняется между двумя экранами и меняет геометрию. |
| `layout.flip-reorder` | Плавная перестановка / FLIP reorder | Элементы списка переходят из старых позиций в новые без мгновенного скачка. |
| `layout.card-expand` | Разворачивание карточки / Card expansion | Компактная карточка превращается в подробную панель. |
| `layout.menu` | Раскрытие меню / Menu reveal | Фон меню и его пункты появляются согласованной последовательностью. |
| `layout.carousel` | Переход карусели / Carousel transition | Набор карточек или изображений перемещается относительно окна просмотра. |

Технические источники раздела: [Motion — Library and products](https://motion.dev/); [GSAP — Pricing and plugins](https://gsap.com/pricing/); [MDN — View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

### Прокрутка и веб-сторителлинг
Видеоверсия требует траектории виртуальной прокрутки; настоящего scroll-события в готовом видео нет.

| ID | Название | Что происходит |
|---|---|---|
| `scroll.parallax` | Параллакс при прокрутке / Scroll parallax | Слои смещаются с разной скоростью, усиливая ощущение глубины. |
| `scroll.scrub` | Прокрутка управляет таймлайном / Scroll-scrubbed timeline | Позиция прокрутки задает момент многосоставной анимации. |
| `scroll.pinned-story` | Закрепленная сцена / Pinned storytelling | Один блок остается в видимой области, пока внутри него сменяются состояния. |
| `scroll.horizontal` | Горизонтальное движение секции / Horizontal scroll section | Вертикальная прокрутка преобразуется в горизонтальное перемещение содержимого. |
| `scroll.reading-progress` | Индикатор чтения / Reading progress | Линия или шкала показывает продвижение по странице. |
| `scroll.card-stack` | Стопка карточек / Sticky card stack | Карточки последовательно накладываются друг на друга при прокрутке. |

Технические источники раздела: [MDN — CSS scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations); [GSAP — Pricing and plugins](https://gsap.com/pricing/); [Motion — Library and products](https://motion.dev/).

### Вектор, линии и формы
Проверять топологию контуров, маски и возможности выбранного SVG/Lottie renderer.

| ID | Название | Что происходит |
|---|---|---|
| `vector.line-draw` | Прорисовка линии / Line drawing | Контур становится видимым вдоль своей длины. |
| `vector.motion-path` | Движение по траектории / Motion along path | Элемент следует заданному пути, при необходимости ориентируясь по касательной. |
| `vector.shape-morph` | Морфинг фигур / Shape morph | Контур одной фигуры плавно превращается в другой. |
| `vector.organic-blob` | Живая органическая форма / Organic blob | Контрольные точки контура меняются, создавая мягкую пульсацию. |
| `vector.trim-window` | Движущийся отрезок контура / Trim path window | По пути перемещается видимый отрезок с управляемыми началом и концом. |
| `vector.dashed-flow` | Бегущий пунктир / Dashed flow | Пунктир вдоль линии смещается, обозначая направление движения или потока. |

Технические источники раздела: [Anime.js — Animation engine](https://animejs.com/); [GSAP — Pricing and plugins](https://gsap.com/pricing/); [Airbnb — Lottie Web repository](https://github.com/airbnb/lottie-web).

### Данные, диаграммы и объяснения
Значения данных и единицы хранить отдельно от декоративного оформления.

| ID | Название | Что происходит |
|---|---|---|
| `data.bar-growth` | Рост столбцов / Bar growth | Столбцы диаграммы достигают заданных величин. |
| `data.chart-trace` | Прорисовка графика / Chart line trace | Линия графика раскрывается вдоль временной или числовой оси. |
| `data.donut` | Появление круговой диаграммы / Donut / pie reveal | Доли диаграммы раскрываются до значений из набора данных. |
| `data.counter` | Анимированный счетчик / Animated counter | Число меняется от начального до целевого значения, с заданным форматированием. |
| `data.ranking` | Перестановка рейтинга / Ranking reorder | Позиции участников и длины столбцов меняются вместе с данными. |
| `data.node-flow` | Поток между узлами / Node flow | Маркеры и подсветка показывают движение информации по схеме. |

Технические источники раздела: [D3 — Transitions](https://d3js.org/d3-transition); [Adobe — Creating Motion Graphics templates](https://helpx.adobe.com/after-effects/desktop/motion-graphics/work-with-motion-graphics-templates/creating-motion-graphics-templates.html); [Manim Community — Overview and examples](https://www.manim.community/); [Remotion — Animating properties](https://www.remotion.dev/docs/animating-properties/).

### Анимированные фоны
Декоративный фон не должен снижать читаемость; производительность измерять в реальной сцене.

| ID | Название | Что происходит |
|---|---|---|
| `background.gradient` | Движущийся градиент / Animated gradient | Положение и состав градиента плавно меняются. |
| `background.noise-flow` | Поток шума / Noise flow | Процедурное поле меняется во времени, формируя плавную текстуру. |
| `background.particle-field` | Поле частиц / Ambient particle field | Небольшие частицы медленно движутся и образуют фоновую среду. |
| `background.starfield` | Звездное поле / Starfield | Точки разного масштаба и скорости имитируют движение в глубину. |
| `background.metaballs` | Сливающиеся мягкие формы / Metaballs / fluid field | Близкие формы визуально объединяются и расходятся как вязкая среда. |
| `background.pattern-loop` | Бесшовный узор / Seamless pattern loop | Повторяющаяся графика смещается так, чтобы петля не имела заметного стыка. |

Технические источники раздела: [React Bits — Component library](https://reactbits.dev/); [Aceternity UI — Official component reference](https://ui.aceternity.com/llms-full.txt); [PixiJS — Renderers](https://pixijs.com/8.x/guides/components/renderers); [Codrops — Demos Hub](https://tympanus.net/codrops/demos/).

### Частицы и физические эффекты
Для воспроизводимости сохранять seed и фиксированный шаг симуляции либо предварительно рассчитывать результат.

| ID | Название | Что происходит |
|---|---|---|
| `particles_physics.confetti` | Выброс конфетти / Confetti burst | Частицы разлетаются из источника и опускаются с вращением. |
| `particles_physics.sparks` | Искры / Sparks emitter | Яркие короткоживущие частицы разлетаются и затухают. |
| `particles_physics.precipitation` | Дождь / снег / Rain / snow | Множество частиц движется по сцене с ветром и глубиной. |
| `particles_physics.logo-dissolve` | Логотип из частиц / Particle logo dissolve | Частицы собираются в силуэт логотипа или распадаются из него. |
| `particles_physics.cursor-trail` | След за указателем / Cursor trail | По траектории указателя появляются затухающие частицы или изображения. |
| `particles_physics.rigid-body` | Столкновения твердых объектов / Rigid-body motion | Фигуры падают, сталкиваются и отскакивают в физической сцене. |

Технические источники раздела: [tsParticles — Engine and demos](https://particles.js.org/); [Three.js — Animation System](https://threejs.org/manual/pages/animation-system.html); [Blackmagic Design — DaVinci Resolve Fusion](https://www.blackmagicdesign.com/ca/products/davinciresolve/fusion).

### Переходы между сценами
Это двухвходовый эффект: указать outgoing/incoming сцены, длительность перекрытия и способ их совмещения.

| ID | Название | Что происходит |
|---|---|---|
| `transitions.wipe` | Шторка / Directional wipe | Новая сцена открывается движущейся границей. |
| `transitions.iris` | Круговое раскрытие / Iris transition | Новая сцена открывается из круга или закрывается в круг. |
| `transitions.zoom` | Переход через приближение / Zoom transition | Первая сцена увеличивается, и в согласованный момент появляется следующая. |
| `transitions.whip-pan` | Резкая проводка / Whip-pan transition | Быстрое направленное смещение и размытие скрывают смену сцен. |
| `transitions.glitch` | Переход со сбоем / Glitch transition | Краткие разрывы, смещения каналов и полосы маскируют переключение. |
| `transitions.luma` | Переход по яркости / Luma transition | Яркость управляющего изображения определяет, где появляется следующая сцена. |

Технические источники раздела: [FFmpeg — Filters documentation](https://ffmpeg.org/ffmpeg-filters.html?from=20421&from_column=20421); [Blackmagic Design — DaVinci Resolve Fusion](https://www.blackmagicdesign.com/ca/products/davinciresolve/fusion); [Apple — Final Cut Pro templates in Motion](https://support.apple.com/guide/motion/intro-to-final-cut-pro-templates-motn17691fe6/mac); [Codrops — Demos Hub](https://tympanus.net/codrops/demos/).

### Камера и 3D-пространство
Хранить камеру, свет, геометрию, материалы и единицы сцены отдельно от траектории анимации.

| ID | Название | Что происходит |
|---|---|---|
| `spatial.orbit` | Облет объекта / Product orbit | Камера обходит объект или объект вращается перед неподвижной камерой. |
| `spatial.dolly` | Наезд / отъезд камеры / Camera dolly | Камера приближается к сцене или удаляется от нее. |
| `spatial.layered-parallax` | Параллакс плоских слоев / 2.5D layered parallax | Плоские изображения размещаются на разной глубине и движутся относительно камеры. |
| `spatial.extruded-text` | Объемный текст / Extruded 3D text | Объемные буквы появляются, вращаются или собираются в пространстве. |
| `spatial.exploded-view` | Разборка объекта / Exploded assembly | Части изделия расходятся или собираются, демонстрируя устройство. |
| `spatial.mesh-deform` | Деформация поверхности / Mesh deformation | Геометрия изгибается, растягивается или колеблется. |

Технические источники раздела: [Three.js — Animation System](https://threejs.org/manual/pages/animation-system.html); [Blender — Animation & Rigging](https://www.blender.org/features/animation/); [Spline — Interactive 3D design](https://spline.design/); [Spline — Exporting as Video](https://docs.spline.design/exporting-your-scene/files/exporting-as-video).

### Титры, плашки и наложения
Разделять фазы входа, удержания и выхода; для монтажа сохранять альфа-канал и safe area.

| ID | Название | Что происходит |
|---|---|---|
| `overlays.lower-third` | Именная плашка / Lower third | Имя и дополнительная строка появляются в отдельной графической плашке. |
| `overlays.callout` | Подпись с указателем / Animated callout | Подпись связана линией с точкой объекта или изображения. |
| `overlays.social-cta` | Призыв к действию / Social CTA | Кнопка, иконка и короткий текст появляются в заданной последовательности. |
| `overlays.frame-border` | Анимированная рамка / Animated border | Рамка или декоративная линия обводит содержимое. |
| `overlays.logo-reveal` | Заставка с логотипом / Logo reveal | Логотип собирается из частей, линий или маски. |
| `overlays.light-leak` | Световая засветка / Light leak overlay | Полупрозрачный световой слой проходит поверх изображения. |

Технические источники раздела: [Adobe — Creating Motion Graphics templates](https://helpx.adobe.com/after-effects/desktop/motion-graphics/work-with-motion-graphics-templates/creating-motion-graphics-templates.html); [Apple — Final Cut Pro templates in Motion](https://support.apple.com/guide/motion/intro-to-final-cut-pro-templates-motn17691fe6/mac); [Blackmagic Design — DaVinci Resolve Fusion](https://www.blackmagicdesign.com/ca/products/davinciresolve/fusion); [Jitter — Export your work](https://help.jitter.video/en/articles/5369843-export-your-work).

### Анимация по звуку и речи
Для повторяемого видео заранее рассчитать аудиоданные или сохранить временные метки; привязать их к FPS.

| ID | Название | Что происходит |
|---|---|---|
| `audio.waveform` | Звуковая волна / Waveform | Линия или заполненная форма отражает амплитуду аудиосигнала. |
| `audio.spectrum` | Частотный спектр / Audio spectrum | Столбцы или полосы изменяются по энергии частотных диапазонов. |
| `audio.beat-pulse` | Пульсация в такт / Beat pulse | Графический элемент меняет масштаб или яркость на ударах. |
| `audio.karaoke` | Подсветка слов / Karaoke / word highlighting | Активное слово или его часть выделяется по временным меткам речи. |
| `audio.beat-cuts` | Смена кадров по ритму / Beat-synced cuts | Границы сцен выбираются по подготовленным музыкальным меткам. |
| `audio.narration-sync` | Синхронизация с озвучкой / Narration markers | Схемы и подписи запускаются в отмеченные моменты объяснения. |

Технические источники раздела: [FFmpeg — Filters documentation](https://ffmpeg.org/ffmpeg-filters.html?from=20421&from_column=20421); [Motion Canvas — Quickstart](https://motioncanvas.io/docs/quickstart/); [Adobe — Creating Motion Graphics templates](https://helpx.adobe.com/after-effects/desktop/motion-graphics/work-with-motion-graphics-templates/creating-motion-graphics-templates.html).

### Персонажная анимация
Смежный с моушн-графикой раздел: риг, внешность и клипы движения хранить раздельно.

| ID | Название | Что происходит |
|---|---|---|
| `character.idle` | Ожидание / дыхание / Idle loop | Небольшие повторяющиеся движения поддерживают ощущение живого персонажа. |
| `character.walk` | Цикл ходьбы / Walk cycle | Ноги, руки и корпус повторяют согласованную фазу движения. |
| `character.puppet` | Кукольная анимация / Puppet animation | Связанные части 2D-персонажа поворачиваются вокруг суставов. |
| `character.facial` | Мимика / Facial expressions | Параметры лица переходят между выражениями. |
| `character.lip-sync` | Движения рта по речи / Lip sync | Формы рта выбираются или смешиваются по временной разметке звуков. |
| `character.gesture` | Жест персонажа / Gesture clip | Риг исполняет короткое действие: указать, поприветствовать или подтвердить. |

Технические источники раздела: [Blender — Animation & Rigging](https://www.blender.org/features/animation/); [Rive — Web state machine playback](https://rive.app/docs/runtimes/web/state-machines); [Three.js — Animation System](https://threejs.org/manual/pages/animation-system.html).

### Стилизация и композитные эффекты
Стиль — отдельная ось: один и тот же прием можно оформить минималистично, мультяшно или фотореалистично.

| ID | Название | Что происходит |
|---|---|---|
| `stylized.stop-motion` | Ступенчатое движение / Stepped / stop-motion timing | Положение обновляется дискретно, имитируя покадровую съемку. |
| `stylized.paper-cut` | Бумажная перекладка / Paper-cut motion | Плоские слои двигаются как вырезанные детали с небольшими тенями. |
| `stylized.line-boil` | Живой рисованный контур / Line boil | Несколько вариантов контура сменяются, создавая легкое рисованное дрожание. |
| `stylized.halftone` | Движущийся растр / Animated halftone | Размер или расположение точек формирует анимированную полутоновую поверхность. |
| `stylized.rgb-split` | Разведение цветовых каналов / RGB split | Цветовые каналы кратко смещаются относительно друг друга. |
| `stylized.displacement` | Искажение картой смещения / Displacement distortion | Текстура или поле управляет отклонением пикселей изображения. |

Технические источники раздела: [Blackmagic Design — DaVinci Resolve Fusion](https://www.blackmagicdesign.com/ca/products/davinciresolve/fusion); [Codrops — Demos Hub](https://tympanus.net/codrops/demos/); [Blender — Animation & Rigging](https://www.blender.org/features/animation/); [FFmpeg — Filters documentation](https://ffmpeg.org/ffmpeg-filters.html?from=20421&from_column=20421).

## Методы

**tween** — Интерполяция значения между началом и концом с заданной кривой изменения.

**keyframes** — Ключевые состояния задаются в определенные моменты времени.

**spring** — Движение задается моделью пружины, а не только длительностью.

**sequencing** — Несколько действий согласуются через последовательность, перекрытия и задержки.

**masking** — Изменяется область видимости содержимого.

**discrete_steps** — Состояние изменяется отдельными шагами, а не непрерывно.

**procedural** — Значения вычисляются формулами из времени, параметров и контролируемой случайности.

**morphing** — Одна форма преобразуется в другую через промежуточную геометрию.

**state_machine** — Анимации выбираются по состояниям и правилам перехода между ними.

**data_driven** — Визуальное состояние связано с данными или подготовленными временными метками.

**layout_interpolation** — Анимируется переход между вариантами размещения элементов.

**scroll_mapping** — Прокрутка преобразуется в нормализованный прогресс или время анимации.

**path** — Движение или раскрытие определяется геометрической траекторией.

**shader** — Изображение или геометрия изменяются программой обработки на графическом устройстве.

**particle_system** — Сцена состоит из множества частиц с индивидуальным состоянием.

**simulation** — Движение рассчитывается моделью взаимодействий и ограничений.

**compositing** — Результат собирается из нескольких изображений или слоев.

**audio_driven** — Движение связано с амплитудой, спектром, ритмом либо разметкой речи.

**rigging** — Формой или частями объекта управляет система связанных контроллеров.

**frame_by_frame** — Каждый кадр или ключевой рисунок задается как отдельное визуальное состояние.
