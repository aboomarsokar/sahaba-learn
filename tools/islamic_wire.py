"""يربط ملفّات محتوى التربية الإسلامية (islamic/10/data/u*.js) بالتطبيق وعامل الخدمة: python3 tools/islamic_wire.py"""
import re
from pathlib import Path
D = Path(__file__).resolve().parent.parent / "islamic" / "10"
files = sorted((p.name for p in (D / "data").glob("u*.js") if re.fullmatch(r"u\d+\.js", p.name)), key=lambda n: int(n[1:-3]))
idx = (D / "index.html").read_text(encoding="utf-8")
tags = "<!--DATA-->\n" + "\n".join(f'<script src="data/{f}"></script>' for f in files) + "\n<!--/DATA-->"
if "<!--DATA-->" in idx:
    idx = re.sub(r"<!--DATA-->.*?<!--/DATA-->", tags, idx, flags=re.S)
else:
    idx = idx.replace('<script src="data/u1.js"></script>', tags, 1)
(D / "index.html").write_text(idx, encoding="utf-8")
sw = (D / "sw.js").read_text(encoding="utf-8")
core = '"./data/curriculum.js", ' + ", ".join(f'"./data/{f}"' for f in files)
sw = re.sub(r'"\./data/curriculum\.js"[^\]]*\]', core + "]", sw, count=1)
(D / "sw.js").write_text(sw, encoding="utf-8")
print("✔", len(files), "ملف محتوى:", ", ".join(files))
