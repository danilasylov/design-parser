import hashlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
import zipfile

MODULE = Path(__file__).resolve().parents[1] / "scripts/install_reference_media.py"
spec = importlib.util.spec_from_file_location("reference_media", MODULE)
media = importlib.util.module_from_spec(spec)
spec.loader.exec_module(media)


class MediaInstallTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix="reference media spaces-")
        self.addCleanup(self.tmp.cleanup)
        self.base = Path(self.tmp.name)
        self.root = self.base / "project"
        self.archives = self.base / "archives"
        self.root.mkdir()
        self.archives.mkdir()
        self.payloads = {"site-copy/media/videos/sample.mp4": b"sample video bytes",
                         "site-copy/media/thumbs/sample.jpg": b"sample poster bytes"}
        archive = self.archives / "part.zip"
        with zipfile.ZipFile(archive, "w") as output:
            for name, content in self.payloads.items():
                output.writestr(name, content)
        self.part = {"name": "part.zip", "size": archive.stat().st_size, "sha256": media.digest(archive),
                     "url": "https://github.com/danilasylov/design-parser/releases/download/test/part.zip"}
        self.manifest = {"version": 1, "counts": {"videos": 1, "posters": 1}, "archives": [self.part],
                         "files": [{"path": name, "size": len(content),
                                    "sha256": hashlib.sha256(content).hexdigest(), "archive": "part.zip"}
                                   for name, content in self.payloads.items()]}

    def test_restore_complete_archive_and_repair_corrupted_video(self):
        media.install(self.manifest, self.root, self.archives)
        for name, content in self.payloads.items():
            self.assertEqual((self.root / name).read_bytes(), content)
        (self.root / "site-copy/media/videos/sample.mp4").write_bytes(b"broken")
        with self.assertRaisesRegex(ValueError, "missing or corrupted"):
            media.install(self.manifest, self.root, verify_only=True)
        media.install(self.manifest, self.root, self.archives)
        self.assertEqual(media.install(self.manifest, self.root, verify_only=True)["verified"], 2)
        self.assertTrue((self.archives / "part.zip").exists(), "Never remove a user's manual archive")
        self.assertFalse(list(self.root.rglob("*.part")))

    def test_reject_corrupted_archive_and_path_traversal(self):
        (self.archives / "part.zip").write_bytes(b"corrupt")
        with self.assertRaisesRegex(ValueError, "corrupted local archive"):
            media.install(self.manifest, self.root, self.archives)
        bad = {"path": "../escape.mp4", "size": 0, "sha256": "x"}
        with self.assertRaisesRegex(ValueError, "Unsafe"):
            media.installed(self.root, bad)

    def test_resume_and_restart_when_range_is_ignored(self):
        data = (self.archives / "part.zip").read_bytes()
        for honors_range in (True, False):
            target = self.base / ("download-resume.zip" if honors_range else "download-reset.zip")
            partial = target.with_name(target.name + ".part")
            partial.write_bytes(data[:11])

            class Response(io.BytesIO):
                status = 206 if honors_range else 200
                headers = {"Content-Range": f"bytes 11-{len(data)-1}/{len(data)}"} if honors_range else {}

            with patch.object(media.urllib.request, "urlopen", return_value=Response(data[11:] if honors_range else data)) as request:
                media.download_archive(self.part, target)
                self.assertEqual(request.call_args.args[0].get_header("Range"), "bytes=11-")
            self.assertEqual(target.read_bytes(), data)
            self.assertFalse(partial.exists())

    def test_exact_file_list_required_before_extraction(self):
        archive = self.archives / "unexpected.zip"
        with zipfile.ZipFile(archive, "w") as output:
            output.writestr("site-copy/media/videos/extra.mp4", b"unexpected")
        with self.assertRaisesRegex(ValueError, "contents do not match"):
            media.restore_archive(archive, self.manifest["files"], self.root)
        self.assertFalse(list(self.root.rglob("*.mp4")))


if __name__ == "__main__":
    unittest.main()
