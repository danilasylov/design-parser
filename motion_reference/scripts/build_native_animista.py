"""Extract the saved original Animista objects and parameters for native mounting."""
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
source = (root / 'live/animista.html').read_text()
variants = json.loads(re.search(r'const VARIANTS=(.*?);const cardMode=', source).group(1))
template = source[source.index('<div id="anim-stage">'):source.index('<div class="view-controls">')]
template = template.replace('../originals/', 'originals/')
(root / 'native-animista.js').write_text('window.NATIVE_ANIMISTA=' + json.dumps({'variants': variants, 'template': template}, ensure_ascii=False) + ';\n')
