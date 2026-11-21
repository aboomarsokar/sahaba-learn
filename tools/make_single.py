"""يبني ملف HTML واحداً مستقلاً لتطبيقٍ (يعمل بلا إنترنت وبلا خادم) من index.html المولَّد: السكربتات والخطوط وصورة كينيكس مضمَّنة.

الاستعمال:   python3 tools/make_single.py math/8 math/9 [--out <مجلّد>]
الناتج:      <مجلّد>/<اسم>.html (الافتراضي: _single/). لا يُودَع في المستودع (هو للإرسال المباشر).
الفرق عن الموقع: لا عامل خدمة ولا تحديث تلقائي (الملفّ المحلي لا يستطيع ذلك)؛ وزرّ البوابة يفتح رابط الموقع.
"""
import base64
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORTAL = "https://aboomarsokar.github.io/sahaba-learn/"
DROP = ("offline.js", "update-notify.js")


def b64(p: Path, mime: str) -> str:
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()


def build(app: str, out: Path, fonts: bool = True) -> Path:
    s = render(app, fonts)
    out.mkdir(parents=True, exist_ok=True)
    f = out / (app.replace("/", "-") + ".html")
    f.write_text(s, encoding="utf-8")
    return f


def render(app: str, fonts: bool = True) -> str:
    """نصّ الملف المستقل لتطبيق. fonts=False يترك @@FONT_REG@@ و@@FONT_BOLD@@ ليُستبدلا لاحقاً (للحزمة الجامعة)."""
    d = ROOT / app
    s = (d / "index.html").read_text(encoding="utf-8")

    def script(m):
        src = m.group(1)
        name = src.rsplit("/", 1)[-1]
        if name in DROP:
            return ""
        f = (d / src).resolve()
        if not f.exists():
            raise SystemExit(f"مفقود: {src}")
        return "<script>" + f.read_text(encoding="utf-8").replace("</script", "<\\/script") + "</script>"

    s = re.sub(r'<script src="(\.\./\.\./shared/[^"]+)"[^>]*></script>', script, s)
    if fonts:
        s = re.sub(r'url\("(\.\./\.\./shared/fonts/[^"]+\.ttf)"\)', lambda m: f'url("{b64((d / m.group(1)).resolve(), "font/ttf")}")', s)
    else:
        s = s.replace('url("../../shared/fonts/IBMPlexSansArabic-Regular.ttf")', 'url("@@FONT_REG@@")').replace('url("../../shared/fonts/IBMPlexSansArabic-Bold.ttf")', 'url("@@FONT_BOLD@@")')
    s = re.sub(r'(["\'])\.\./\.\./shared/kinex\.jpg\1', lambda m: m.group(1) + b64(ROOT / "shared" / "kinex.jpg", "image/jpeg") + m.group(1), s)
    s = re.sub(r'<link rel="(?:manifest|icon|apple-touch-icon)"[^>]*>', "", s)
    s = "\n".join(("" if ("serviceWorker" in ln and "register(" in ln and len(ln) < 400) else ln) for ln in s.split("\n"))
    s = s.replace('href="../../index.html"', f'href="{PORTAL}" target="_blank" rel="noopener"')
    s = s.replace("'../../index.html'", f"'{PORTAL}'").replace('"../../index.html"', f'"{PORTAL}"')
    left = sorted(set(re.findall(r'(?:src|href)=["\'](\.\./[^"\']+)["\']', s)))
    if left:
        print("  تنبيه: مراجع خارجية متبقّية:", left)
    return s


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    out = ROOT / "_single"
    if "--out" in sys.argv:
        out = Path(sys.argv[sys.argv.index("--out") + 1])
        args = [a for a in args if a != str(out)]
    for a in args:
        f = build(a, out)
        print(f"✔ {a} → {f} ({f.stat().st_size // 1024} ك.ب)")
