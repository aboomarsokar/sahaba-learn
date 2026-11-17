"""يولّد قائمة الملفات التي يخزّنها عامل الخدمة ليعمل التطبيق بلا إنترنت.

الاستعمال (من جذر المستودع، قبل كلّ دفع يغيّر ملفات تطبيقٍ):
    python3 tools/gen_precache.py            # كل التطبيقات التي فيها sw.js
    python3 tools/gen_precache.py english/10 # تطبيقٌ بعينه

الناتج: <التطبيق>/precache.json بصيغة {"files": ["./index.html", ...]}.
يطلبه عامل الخدمة بعد أوّل فتح ويخزّن كلّ ما فيه، فلا يحتاج الطالب إلى فتح كلّ صفحةٍ مرّة بإنترنت.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {"audio", "tools", "dist", "__pycache__", ".git", "node_modules"}
SKIP_FILES = {"sw.js", "precache.json", ".gitignore", ".DS_Store", "CLAUDE.md", "README.md", "OFL.txt", "build.py"}
SKIP_EXT = {".md", ".py", ".txt"}
# ملفّاتٌ مشتركة خارج مجلّد التطبيق تحتاجها صفحاته
EXTRAS = {
    "english/10": ["../../shared/update-notify.js", "../../shared/intro.js", "../../shared/kinex.jpg", "../../shared/covers/english.webp", "../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf"],
    "science/10": ["../../shared/update-notify.js"],
    "islamic/10": ["../../shared/update-notify.js", "../../shared/intro.js", "../../shared/kinex.jpg", "../../shared/covers/islamic.webp", "../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf", "../../shared/fonts/aref-ruqaa-arabic-700.woff2"],
}


def gen(app: str) -> None:
    d = ROOT / app
    files = []
    for p in sorted(d.rglob("*")):
        if not p.is_file():
            continue
        rel = p.relative_to(d)
        if set(rel.parts[:-1]) & SKIP_DIRS or rel.name in SKIP_FILES or rel.suffix in SKIP_EXT:
            continue
        files.append("./" + rel.as_posix())
    files += EXTRAS.get(app, [])
    for f in EXTRAS.get(app, []):
        assert (d / f).resolve().is_file(), f"ملف مشترك مفقود: {f}"
    total = sum((d / f).stat().st_size for f in files)
    (d / "precache.json").write_text(json.dumps({"files": files}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    print(f"✔ {app}/precache.json — {len(files)} ملفاً، {total / 1024 / 1024:.1f} م.ب")


if __name__ == "__main__":
    apps = sys.argv[1:] or [str(p.parent.relative_to(ROOT)) for p in sorted(ROOT.glob("*/*/sw.js")) if (p.parent / "index.html").is_file() and p.parent.parent.name in ("english", "science", "islamic")]
    for a in apps:
        gen(a)
