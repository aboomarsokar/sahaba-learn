"""ملفّ HTML واحد جامع لمادةٍ عبر عدّة صفوف (الرياضيات: ٨ و٩ و١٠؛ العربية: ٨ و٩) (يعمل بلا إنترنت): شريط علوي لاختيار الصف، وكلّ صفٍّ في إطارٍ مضمَّن.

الاستعمال:   python3 tools/make_math_bundle.py [<ملف الناتج>]      (الافتراضي: _single/رياضيات-الصفوف.html)
المصدر:      math/8 وmath/9 (index.html المولَّد عبر make_single) وmath/10/دروس-الرياضيات-العاشر.html (بعد حذف ترويسته: الشعار والإشراف والإعداد).
الخطّ يُضمَّن مرّةً واحدة ويُشارَك بين الإطارات.
"""
import base64
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from make_single import render  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
GRADES = [("8", "الثامن", "math/8"), ("9", "التاسع", "math/9"), ("10", "العاشر", None)]


def hub10() -> str:
    s = (ROOT / "math" / "10" / "دروس-الرياضيات-العاشر.html").read_text(encoding="utf-8")
    a = s.index('<div class="hero">')
    b = s.index('<div class="wrap">', a)
    i = s.index("<img", a)
    img = s[i:s.index(">", i) + 1]        # الشعار يبقى مخفياً: سكربت الصفحة يمرّره إلى شاشات الدروس والشهادة
    return s[:a] + '<div class="hero" hidden style="display:none">' + img + "</div>\n" + s[b:]


def main() -> None:
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "_single" / "رياضيات-الصفوف.html"
    fonts = {k: base64.b64encode((ROOT / "shared" / "fonts" / f"IBMPlexSansArabic-{k}.ttf").read_bytes()).decode() for k in ("Regular", "Bold")}
    apps = {}
    for g, _n, path in GRADES:
        h = render(path, fonts=False) if path else hub10()
        # روابط التنقّل «#unit/0» داخل srcdoc تُحَلّ على رابط الملفّ الأمّ فتُحمِّله داخل الإطار؛ القاعدة تُبقيها داخل الصفحة نفسها
        h = h.replace("<head>", '<head><base href="about:srcdoc">', 1)
        apps[g] = h
    js = json.dumps(apps, ensure_ascii=False).replace("</", "<\\/")
    page = f"""<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>الرياضيات — الصفوف الثامن والتاسع والعاشر</title><meta name="theme-color" content="#0a5230">
<style>
*{{box-sizing:border-box}}html,body{{margin:0;height:100%;background:#FAF6EB;font-family:system-ui,Tahoma,sans-serif}}
#bar{{position:fixed;top:0;inset-inline:0;z-index:5;display:flex;gap:8px;padding:calc(8px + env(safe-area-inset-top,0px)) 10px 8px;background:linear-gradient(135deg,#0a5230,#00a152);box-shadow:0 3px 0 #007a3d}}
#bar b{{color:#fff;align-self:center;font-size:.95rem;white-space:nowrap;margin-inline-end:4px}}
#bar button{{flex:1;border:0;border-radius:12px;padding:9px 4px;font:800 1rem inherit;background:rgba(255,255,255,.2);color:#fff;cursor:pointer;transition:.15s}}
#bar button.on{{background:#ffc107;color:#3b2a00;box-shadow:0 3px 0 #b36400}}
#bar button:active{{transform:scale(.96)}}
iframe{{position:fixed;top:var(--h,56px);inset-inline:0;bottom:0;width:100%;height:calc(100% - var(--h,56px));border:0;background:#FAF6EB;display:none}}
iframe.on{{display:block}}
</style></head><body>
<div id="bar"><b>📐 الرياضيات</b>{''.join(f'<button type="button" data-g="{g}">{n}</button>' for g, n, _ in GRADES)}</div>
<script>
var APPS={js},F={{REG:"{fonts['Regular']}",BOLD:"{fonts['Bold']}"}},blobs={{}};
function blob(k){{if(!blobs[k]){{var b=atob(F[k]),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);blobs[k]=URL.createObjectURL(new Blob([u],{{type:"font/ttf"}}))}}return blobs[k]}}
function html(g){{var h=APPS[g];if(h.indexOf("@@FONT_REG@@")>=0)h=h.split("@@FONT_REG@@").join(blob("REG")).split("@@FONT_BOLD@@").join(blob("BOLD"));return h}}
var bar=document.getElementById("bar"),fr={{}};
function fit(){{document.documentElement.style.setProperty("--h",bar.offsetHeight+"px")}}
function pick(g){{
  [].forEach.call(bar.querySelectorAll("button"),function(b){{b.classList.toggle("on",b.dataset.g==g)}});
  for(var k in fr)fr[k].classList.remove("on");
  if(!fr[g]){{var f=document.createElement("iframe");f.title="رياضيات الصف "+g;f.srcdoc=html(g);document.body.appendChild(f);fr[g]=f}}
  fr[g].classList.add("on");try{{localStorage.setItem("math-bundle-grade",g)}}catch(e){{}}
}}
[].forEach.call(bar.querySelectorAll("button"),function(b){{b.onclick=function(){{pick(b.dataset.g)}}}});
fit();addEventListener("resize",fit);
var last="8";try{{last=localStorage.getItem("math-bundle-grade")||"8"}}catch(e){{}}if(!APPS[last])last="8";pick(last);
</script></body></html>"""
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(page, encoding="utf-8")
    print(f"✔ {out} ({out.stat().st_size // 1024} ك.ب)")


if __name__ == "__main__":
    main()
