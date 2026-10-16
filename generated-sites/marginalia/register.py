import json
from pathlib import Path
P=Path(__file__).resolve().parent
p=P.parent/'projects.json'; projects=json.loads(p.read_text())
if not any(x['slug']=='marginalia' for x in projects):
    projects.append(dict(slug='marginalia',name='Marginalia',cat='мероприятия / конференции',cs='light',tagline='Фестиваль малых издательств: 32 стола и два дня на бумаге · EN/RU',cluster='monochrome broadside / continuous marquee',desc='По Henry: крупная сжатая типографика, книжная гравюра и инверсия бумаги/краски. Бегущая строка из Magic UI адаптирована к самостоятельному HTML/CSS. Программа скачивается.',date='2026-10-15',post='32 independent presses, two days, one print room.\nInstead of a conference template: a monochrome broadside, towering condensed type and a continuously moving announcement rail.',refs=[dict(name='Henry',id='ff4b9eff-dc0b-4886-bd65-c2f5e9069318',url='https://henry.codes')]))
    p.write_text(json.dumps(projects,ensure_ascii=False,indent=2)+'\n')
