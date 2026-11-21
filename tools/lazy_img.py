"""يضيف loading="lazy" decoding="async" إلى كلّ وسم <img> لا يحملهما (التطبيقات ودروسها وقوالب المولِّدات).

الاستعمال:   python3 tools/lazy_img.py            (يطبّق)       python3 tools/lazy_img.py --dry
آمن للتكرار. يُستدعى من make_pcb_apps.py وmake_pack8.py بعد التوليد. لا يمسّ index.html الجذر (فيه لافتاته بقياساتها).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RX = re.compile(r"<img\b(?![^>]*\bloading=)", re.I)
SKIP = {".git", "_site", "node_modules", "content8"}


def files():
    for p in ROOT.rglob("*.html"):
        rel = p.relative_to(ROOT)
        if set(rel.parts) & SKIP or str(rel) == "index.html" or rel.parts[0] == "shared" or rel.parts[:2] == ("math", "10"):
            continue
        yield p
    yield ROOT / "tools" / "pack8_app.html"


def main() -> None:
    dry = "--dry" in sys.argv
    n = tot = 0
    for p in files():
        if not p.exists():
            continue
        s = p.read_text(encoding="utf-8", errors="ignore")
        c = len(RX.findall(s))
        if not c:
            continue
        n += 1
        tot += c
        if not dry:
            p.write_text(RX.sub('<img loading="lazy" decoding="async"', s), encoding="utf-8")
    print(("سيُعدَّل " if dry else "عُدِّل ") + f"{n} ملفّاً، {tot} وسماً")


if __name__ == "__main__":
    main()
