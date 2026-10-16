"""Register the standalone site in the gallery. Does not modify user ratings."""
import json
from pathlib import Path

site = Path(__file__).resolve().parent
root = site.parent.parent
ref = '1b44386e-31a8-40b0-a577-27c088b51264'
def write(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')

projects = json.loads((root / 'generated-sites/projects.json').read_text())
record = {
    'slug': 'vesper', 'name': 'VESPER®', 'cat': 'агентство / студия', 'cs': 'light',
    'tagline': 'Студия кинетических скульптур и световых инсталляций · EN/RU',
    'cluster': 'кинетическая галерея / 3D / непрерывное движение',
    'desc': 'Холодный светлый холст Lusion, электрический синий и полированный металл. Четыре живые WebGL-сцены, три сменяемые формы, орбитальная лаборатория, типографические циклы и интерактивные проекты.',
    'date': '2026-10-16',
    'post': 'Seven moving orbits, thirteen petals, one restless kinetic art studio.\nA default landing page would explain movement in cards. Lusion’s pale gallery canvas lets cobalt and polished metal do the moving.',
    'refs': [{'name': 'Lusion', 'id': ref, 'url': 'https://lusion.co'}]
}
projects = [p for p in projects if p['slug'] != 'vesper']
projects.append(record)
write(root / 'generated-sites/projects.json', projects)
print('VESPER registered.')
