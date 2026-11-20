"""يشبّع ألوان هوية المنصّة في كلّ ملفّات التطبيقات والمولِّدات (الأخضر الأساسي والداكن والذهبي والفاتح).

الاستعمال:   python3 tools/vivid.py            (يطبّق)       python3 tools/vivid.py --dry    (يعدّ الملفّات فقط)
آمن للتكرار: يبدّل القيم القديمة بالمشبَّعة فقط. بعده شغّل gen_precache وارفع V إن لزم.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAP = {   # قديم (بأحرف صغيرة) ← مشبَّع
    "#0e6b3c": "#00a152", "#1a8350": "#00c853", "#113d2e": "#0a5230", "#0b2c21": "#073d22",
    "#e3b94d": "#ffc107", "#e3efe6": "#d3f5de", "#e2ece1": "#d3f5de", "#b5d4be": "#7fe0a2",
    "#134e3a": "#0a5230", "#5f7a6e": "#4b7a5f", "#2c5044": "#1d7a45",
}
RX = re.compile("|".join(re.escape(k) for k in MAP), re.I)
EXT = {".html", ".js", ".css", ".py", ".webmanifest"}
SKIP = {".git", "_site", "node_modules", "content8"}


def files():
    for p in ROOT.rglob("*"):
        if not p.is_file() or p.suffix not in EXT or set(p.relative_to(ROOT).parts) & SKIP:
            continue
        if p.name == "vivid.py" or "/data/" in str(p) or p.name in ("lessons.js", "curriculum.js", "wisdom.js"):
            continue
        yield p


def main() -> None:
    dry = "--dry" in sys.argv
    n = tot = 0
    for p in files():
        try:
            s = p.read_text(encoding="utf-8")
        except Exception:
            continue
        c = len(RX.findall(s))
        if not c:
            continue
        n += 1
        tot += c
        if not dry:
            p.write_text(RX.sub(lambda m: MAP[m.group(0).lower()], s), encoding="utf-8")
    print(("سيُعدَّل " if dry else "عُدِّل ") + f"{n} ملفّاً، {tot} قيمة")


if __name__ == "__main__":
    main()
