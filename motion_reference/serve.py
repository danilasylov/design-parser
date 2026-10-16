#!/usr/bin/env python3
"""Open the saved motion reference collection on this computer."""
from pathlib import Path
import http.server, socketserver, webbrowser, zipfile, json

ROOT=Path(__file__).resolve().parent
for directory in [ROOT,ROOT.parent]:
    for archive in sorted(directory.glob('codrops_previews_part*.zip')):
        with zipfile.ZipFile(archive) as z:
            for item in z.infolist():
                if item.is_dir():continue
                target=(ROOT.parent/item.filename).resolve()
                if not target.is_relative_to(ROOT):raise ValueError('Unexpected archive path')
                if target.exists() and target.stat().st_size==item.file_size:continue
                print('Добавляю видеопревью из',archive.name)
                z.extract(item,ROOT.parent)
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
    def log_message(self,*args):pass
with socketserver.ThreadingTCPServer(('127.0.0.1',0),Handler) as server:
    url=f'http://127.0.0.1:{server.server_address[1]}/'
    print('Справочник открыт:',url)
    print('Чтобы закрыть справочник, нажми Ctrl+C в этом окне.')
    webbrowser.open(url)
    try:server.serve_forever()
    except KeyboardInterrupt:pass
