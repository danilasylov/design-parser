# -*- coding: utf-8 -*-
import json
from pathlib import Path
P=Path(__file__).resolve().parent.parent/'projects.json';a=json.loads(P.read_text())
if not any(x['slug']=='bench' for x in a):
 a.append(dict(slug='bench',name='Bench',cat='другое',cs='light',tagline='Общая мастерская: дерево, металл и сборка за одним адресом · EN/RU',cluster='swiss ruled broadsheet / masked intro + scroll entry',desc='По Traffic Productions: огромный вводный абзац, чёрные рамки, жёлтые метки и монохромное фото. SplitText и AnimatedContent из motion-animation адаптированы под подтверждённые load/scroll эффекты. Локальный калькулятор сессии.',date='2026-10-15',post='Three workshop zones, one roof, a bench by the hour.\nInstead of coworking cards: a ruled Swiss broadsheet, a yellow masked intro and a paragraph that enters with the scroll.',refs=[dict(name='Traffic Productions',id='657e55de-8cff-4d24-9a4e-17d3b7593a55',url='https://traffic.productions')]))
 P.write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
