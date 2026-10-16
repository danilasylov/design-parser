import json
from pathlib import Path
P=Path(__file__).resolve().parent.parent/'projects.json'; a=json.loads(P.read_text())
if not any(x['slug']=='cult' for x in a):
 a.append(dict(slug='cult',name='Cult',cat='еда и напитки',cs='light',tagline='Три живые культуры в возвратном стекле: йогурт, кефир, лабне · EN/RU',cluster='creamery billboard / rotating circular seals',desc='По Hartzler Dairy: предметное фото, крупная бирюзовая и масляно-жёлтая типографика, лесной зелёный. Печати вращаются по описанию референса; CircularText из motion-animation адаптирован в SVG/CSS. Локальный калькулятор набора.',date='2026-10-15',post='Three live cultures in returnable glass: yogurt, kefir and labneh.\nInstead of generic food cards: enormous turquoise type, photographed glass and slowly rotating creamery seals.',refs=[dict(name='Hartzler Family Dairy',id='14efe0a8-5abf-441c-919d-add271317bf9',url='https://www.hartzlerdairy.com')]))
 P.write_text(json.dumps(a,ensure_ascii=False,indent=2)+'\n')
