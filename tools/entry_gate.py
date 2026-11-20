"""شاشة الدخول الموحَّدة لكلّ المواد: لا غلاف ولا ترحيب؛ حكمة اليوم الخاصّة بالمادة ثم «التالي» فالدخول.
1) يحذف خاصّية cover من إعداد الجولة (فلا يظهر الغلاف حتى لو كانت نسخة intro.js قديمة في ذاكرة الجهاز).
2) يلفّ SahabaIntro.run بـ SahabaWisdom.gate(<المادة>, …). آمن للتكرار.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MARK = "SahabaWisdom.gate("
WTAG = '<script src="../../shared/wisdom.js"></script>'
APPS = {  # المسار: (معرّف الحكمة، نمط الاستدعاء)
    "arabic/10": ("arabic", "SahabaIntro.run(KX)"), "arabic/9": ("arabic", "SahabaIntro.run(KX)"), "arabic/8": ("arabic", "SahabaIntro.run(KX)"),
    "islamic/10": ("islamic", "SahabaIntro.run(KX)"), "islamic/9": ("islamic", "SahabaIntro.run(KX)"),
    "english/10": ("english", "SahabaIntro.run(o)"),
    "english/8": ("english", "SahabaIntro.run(o)"),
    "physics/10": ("physics", "SahabaIntro.run(KX)"), "chemistry/10": ("chemistry", "SahabaIntro.run(KX)"), "biology/10": ("biology", "SahabaIntro.run(KX)"),
}


def strip_cover(s: str) -> str:
    return re.sub(r'"?cover"?\s*:\s*"[^"]*"\s*,\s*', "", s)


def patch(app: str) -> str:
    sid, call = APPS[app]
    f = ROOT / app / "index.html"; s = f.read_text(encoding="utf-8")
    before = s
    s = strip_cover(s)
    if MARK not in s:
        assert s.count(call) == 1, (app, s.count(call))
        s = s.replace(call, f'(window.SahabaWisdom?SahabaWisdom.gate("{sid}",function(){{{call}}}):{call})')
    if app.split("/")[0] in ("physics", "chemistry", "biology"):
        # الوحدة تُحمَّل قبل intro.js في أوّل <body> (وتُزال النسخة المتأخّرة)
        s = s.replace(WTAG + "\n", "")
        it = '<script src="../../shared/intro.js"></script>'
        assert s.count(it) == 1
        s = s.replace(it, WTAG + "\n" + it)
    if s == before:
        return "تم سابقاً"
    f.write_text(s, encoding="utf-8")
    sw = ROOT / app / "sw.js"; t = sw.read_text(encoding="utf-8")
    m = re.search(r'const V = P \+ "v(\d+)"', t)
    sw.write_text(t.replace(m.group(0), f'const V = P + "v{int(m.group(1)) + 1}"', 1), encoding="utf-8")
    return "عُدّل"


if __name__ == "__main__":
    for a in (sys.argv[1:] or APPS):
        print(a, patch(a))
