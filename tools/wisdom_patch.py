"""يربط حكمة اليوم الخاصّة بكلّ مادة (shared/wisdom.js) بتطبيقات العربية والإسلامية (العاشر والتاسع). آمن للتكرار."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TAG = '<script src="../../shared/wisdom.js"></script>\n'


def arabic(d: Path) -> str:
    f = d / "index.html"; s = f.read_text(encoding="utf-8")
    if "shared/wisdom.js" in s:
        return "تم سابقاً"
    a = '<script src="data/wisdom.js"></script>'
    assert s.count(a) == 1
    f.write_text(s.replace(a, TAG + a), encoding="utf-8")
    (d / "data" / "wisdom.js").write_text('/* حِكَم اللغة العربية اليومية: تأتي من shared/wisdom.js (مجموعة arabic). */\nwindow.WISDOM = (window.SahabaWisdom && window.SahabaWisdom.sets.arabic) || [];\n', encoding="utf-8")
    return "عُدّل"


def islamic(d: Path) -> str:
    f = d / "index.html"; s = f.read_text(encoding="utf-8")
    if "shared/wisdom.js" in s:
        return "تم سابقاً"
    a = '<script src="../../shared/durra.js"></script>\n'
    assert s.count(a) == 1
    s = s.replace(a, a + TAG)
    b = "    h += helloCard(pct, nm);\n"
    assert s.count(b) == 1
    s = s.replace(b, b + "    h += wisdomCard();\n")
    c = "  function vHome(app) {"
    assert s.count(c) == 1
    fn = '''  function wisdomCard() {   /* حكمة اليوم الخاصّة بالمادة */
    var w = (window.SahabaWisdom && window.SahabaWisdom.today("islamic")) || null; if (!w) return "";
    return '<div class="card" style="text-align:center"><small style="color:var(--mut)">💡 حكمة اليوم</small><p style="font-size:1.12rem;margin:8px 0;line-height:1.9">' + esc(w[0]) + '</p><small style="color:var(--mut)">— ' + esc(w[1]) + "</small></div>";
  }
'''
    s = s.replace(c, fn + c)
    f.write_text(s, encoding="utf-8")
    return "عُدّل"


def english(d: Path) -> str:
    f = d / "index.html"; s = f.read_text(encoding="utf-8")
    if "shared/wisdom.js" in s:
        return "تم سابقاً"
    a = '<script src="../../shared/intro.js"></script>'
    assert s.count(a) == 1
    s = s.replace(a, a + "\n" + TAG.strip())
    i = s.index('data-screen="home"')
    j = s.index("</main>", i)
    k = s.rindex("  </div>\n", i, j)     # إغلاق .wrap
    card = '    <div class="card" id="wisdomCard" style="text-align:center;margin-top:12px;padding:14px"><small style="color:var(--mut,#5f7a6e)">💡 حكمة اليوم</small><p dir="auto" style="margin:8px 0;line-height:1.8"></p><small class="src" style="color:var(--mut,#5f7a6e)"></small></div>\n'
    s = s[:k] + card + s[k:]
    z = s.rindex("</body>")
    init = '<script>(function(){var w=window.SahabaWisdom&&window.SahabaWisdom.today("english"),e=document.getElementById("wisdomCard");if(w&&e){e.querySelector("p").textContent=w[0];e.querySelector(".src").textContent="— "+w[1]}})();</script>\n'
    s = s[:z] + init + s[z:]
    f.write_text(s, encoding="utf-8")
    return "عُدّل"


def english_skip_welcome(d: Path) -> str:
    """الإنجليزية: لا شاشة ترحيب «ابدأ رحلتك الآن»: يدخل الطالب مباشرةً (تبقى حكمة اليوم في الرئيسية)."""
    f = d / "index.html"; s = f.read_text(encoding="utf-8")
    if "/*skip-welcome*/" in s:
        return "تم سابقاً"
    z = s.rindex("</body>")
    s = s[:z] + '<script>/*skip-welcome*/(function(){if(!location.hash||location.hash==="#"){setTimeout(function(){var b=document.getElementById("start");if(b)b.click()},0)}})();</script>\n' + s[z:]
    f.write_text(s, encoding="utf-8")
    return "عُدّل"


def bump(d: Path) -> None:
    sw = d / "sw.js"; t = sw.read_text(encoding="utf-8")
    m = re.search(r'const V = P \+ "v(\d+)"', t)
    if m:
        sw.write_text(t.replace(m.group(0), f'const V = P + "v{int(m.group(1)) + 1}"', 1), encoding="utf-8")


if __name__ == "__main__":
    for app, fn, gs in (("arabic", arabic, ("10", "9")), ("islamic", islamic, ("10", "9")), ("english", english, ("10",))):
        for g in gs:
            d = ROOT / app / g
            r = fn(d); print(app, g, r)
            if app == "english":
                r2 = english_skip_welcome(d); print(app, g, "welcome:", r2)
                r = r if r == "عُدّل" else r2
            if r == "عُدّل":
                bump(d)
