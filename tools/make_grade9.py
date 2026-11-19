"""يولّد هياكل تطبيقات الصف التاسع (العربية، الإسلامية، …) من تطبيقات العاشر بنسقها نفسه: فصلان، وفي كلّ فصلٍ
تبويبات الوحدات والكتاب المدرسي والرزمة (روابط Drive). المحتوى (الوحدات والدروس والأسئلة) يُضاف لاحقاً لكلّ مادة.

الاستعمال:   python3 tools/make_grade9.py arabic islamic        (أو أيّ مادة معرَّفة في SUBJECTS)
كلّ تشغيلٍ يعيد بناء <المادة>/9/ من <المادة>/10/، فلا تعدّل مجلّد 9 يدوياً قبل إضافة المحتوى؛
وبعد إضافة المحتوى الحقيقي أوقف استعمال المولِّد لتلك المادة (وإلا يُمحى).
"""
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DRIVE = "https://drive.google.com/file/d/{}/view?usp=drivesdk"
LINKS = {   # روابط الكتب والرزم (Drive) للصف التاسع
    "arabic": {"book1": "1Zl3bOMdtzizFQm8Wl_LMDxhxqpjPdiAq", "book2": "1IX3x9WWqR2iFcj-jIPyaKEOasxCoL2zH", "pack": "1Fh9M-2l6WjuL-YiqQeDfrM3dDcctz1Lm"},
    "islamic": {"book1": "1aGJvx_RstPWocn7a8GorCd9_iq_f4_jd", "book2": "1DgNUrMMjM_WkuuG_IBCogl3vxfl1z0-R", "pack": None},
    "math": {"book1": "1l3Oef6-LnKoSCjORqCThSXhxxZWtrQab", "book2": "11XKSsuqZ9dmsCj3FjdthPlHIvtvtCy67", "pack": "1ScL9ZAxetJN6Vr8rVLRNcqI7cwhGlbFr"},
    "english": {"book1": None, "book2": None, "pack": "1kzp44BYIsbqhM9o2v8i1XUUa8PuvBgyl"},
}


def link(subject: str, k: str) -> str:
    i = LINKS[subject][k]
    return DRIVE.format(i) if i else ""


def swap_grade(s: str, subject: str, old_key: str, new_key: str) -> str:
    """استبدالات الصف: العاشر ← التاسع، والمفاتيح المحلية."""
    s = s.replace(f"{subject}/10", f"{subject}/9").replace(old_key, new_key)
    s = s.replace("العاشر", "التاسع").replace("عاشر", "تاسع")
    return s


def bump_sw(d: Path, old_pre: str, new_pre: str) -> None:
    sw = d / "sw.js"
    t = sw.read_text(encoding="utf-8").replace(old_pre, new_pre)
    t = re.sub(r'(const V = P \+ ")v\d+"', r'\1v1"', t)
    sw.write_text(t, encoding="utf-8")


def copy_app(subject: str) -> Path:
    src, dst = ROOT / subject / "10", ROOT / subject / "9"
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    return dst


def arabic() -> None:
    d = copy_app("arabic")
    idx = d / "index.html"
    s = swap_grade(idx.read_text(encoding="utf-8"), "arabic", "ara10", "ara9")
    s = s.replace("var EX = { 1: 5, 2: 5 };", "var EX = { 1: 0, 2: 0 };")
    old = "body = sem.units.map("
    assert s.count(old) == 1
    s = s.replace(old, 'body = !sem.units.length ? [h("div", { cls: "card", t: "ستُضاف وحدات هذا الفصل قريباً بإذن الله." })] : sem.units.map(')
    old = "if (!lu) { nextU = all[0]; }"
    assert s.count(old) == 1
    s = s.replace(old, 'if (!lu) { nextU = all[0] || [{ name: "" }, { id: "", n: "" }]; }')
    old = "app.replaceChildren(head, resume, stats,"
    assert s.count(old) == 1
    s = s.replace(old, "app.replaceChildren(head, all.length ? resume : h(\"div\"), stats,")
    idx.write_text(s, encoding="utf-8")
    cur = f'''/* هيكل كتاب اللغة العربية (التاسع). المحتوى (الوحدات والدروس) يُضاف لاحقاً من الكتاب المدرسي والرزمة.
   الدرس: items = [نوع، عنوان] والأنواع: read مطالعة، poem نص شعري، gram قواعد، rhet بلاغة، aruz عروض، expr تعبير، imla إملاء. */
window.CONTENT = {{}};
function U(id, n, pg, items) {{
  return {{ id: id, n: n, pg: pg, items: items.map(function (i) {{ var c = CONTENT[id + "|" + i[1]] || {{}}; return {{ k: i[0], t: i[1], x: c.x || i[2] || "", ex: c.ex || [], sec: c.sec || null, rule: c.rule || null, jr: c.jr || null }}; }}) }};
}}
window.ARA = {{
  links: {{
    book1: "{link("arabic", "book1")}",   /* الكتاب المدرسي: الفصل الأول (Drive) */
    book2: "{link("arabic", "book2")}",   /* الفصل الثاني */
    pack: "{link("arabic", "pack")}"    /* الرزمة التعليمية (Drive) */
  }},
  semesters: [
    {{ id: 1, name: "الفصل الأول", book: "book1", units: [] }},
    {{ id: 2, name: "الفصل الثاني", book: "book2", units: [] }}
  ]
}};
'''
    (d / "data" / "curriculum.js").write_text(cur, encoding="utf-8")
    (d / "data" / "dict.js").write_text("/* القاموس المعجمي للتاسع: يُضاف لاحقاً. */\nwindow.DICT = { 1: [], 2: [] };\n", encoding="utf-8")
    (d / "data" / "quiz.js").write_text("/* أسئلة الاختبارات للتاسع: تُضاف لاحقاً. */\nwindow.QUIZ = [];\n", encoding="utf-8")
    bump_sw(d, 'const P = "ara10-"', 'const P = "ara9-"')
    sw = d / "sw.js"
    sw.write_text(sw.read_text(encoding="utf-8").replace("(ara10-)", "(ara9-)"), encoding="utf-8")
    m = d / "manifest.webmanifest"
    m.write_text(m.read_text(encoding="utf-8").replace("العاشر", "التاسع"), encoding="utf-8")


def islamic() -> None:
    d = copy_app("islamic")
    idx = d / "index.html"
    s = swap_grade(idx.read_text(encoding="utf-8"), "islamic", "isl10", "isl9").replace("islamic10", "islamic9")
    s = re.sub(r'<script src="data/u\d+\.js"></script>\n?', "", s)
    s = s.replace("محتوى الكتاب المدرسي (الجزء الأول، الوحدة الأولى حالياً)، وتُضاف بقية الوحدات تباعاً.", "الكتاب المدرسي والرزمة، ويُضاف المحتوى التفاعلي تباعاً.")
    old = "المحتوى التفاعلي للفصل الثاني سيُضاف قريباً"
    assert s.count(old) == 1
    s = s.replace(old, "المحتوى التفاعلي لهذا الفصل سيُضاف قريباً")
    idx.write_text(s, encoding="utf-8")
    for f in (d / "data").glob("u*.js"):
        f.unlink()
    cur = f'''/* هيكل منهج التربية الإسلامية للصف التاسع (فلسطين): فصلان. المحتوى (الوحدات والدروس) يُضاف لاحقاً من الكتاب والرزمة.
   الوحدة: {{ id, t, ic, lessons: [{{ id: "رقم-رقم", t, p }}] }} ومحتوى كلّ وحدة في ملفٍّ منفصل data/uN.js كما في العاشر. */
window.ISL_LESSONS = window.ISL_LESSONS || {{}};
window.ISL = {{
  terms: [
    {{ id: 1, name: "الفصل الأول", book: "{link("islamic", "book1")}", units: [] }},
    {{ id: 2, name: "الفصل الثاني", book: "{link("islamic", "book2")}", units: [] }}
  ]
}};
'''
    (d / "data" / "curriculum.js").write_text(cur, encoding="utf-8")
    bump_sw(d, 'const P = "isl10-"', 'const P = "isl9-"')
    sw = d / "sw.js"
    t = sw.read_text(encoding="utf-8").replace("(isl10-)", "(isl9-)").replace("(العاشر)", "(التاسع)")
    t = re.sub(r', "\./data/u\d+\.js"', "", t)
    sw.write_text(t, encoding="utf-8")
    m = d / "manifest.webmanifest"
    m.write_text(m.read_text(encoding="utf-8").replace("العاشر", "التاسع"), encoding="utf-8")



SHELL_HTML = r"""<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>__NAME__ — الصف التاسع</title>
<meta name="theme-color" content="#FAF6EB">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-192.png">
<style>
@font-face{font-family:"Plex Arabic";src:url("../../shared/fonts/IBMPlexSansArabic-Regular.ttf") format("truetype");font-weight:400;font-display:swap}
@font-face{font-family:"Plex Arabic";src:url("../../shared/fonts/IBMPlexSansArabic-Bold.ttf") format("truetype");font-weight:700;font-display:swap}
:root{--bg:#FAF6EB;--card:#fff;--ink:#113D2E;--mut:#5f7a6e;--g:#0e6b3c;--y:#E3B94D;--bd:#e9dfc8}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:"Plex Arabic",system-ui,Tahoma,sans-serif;line-height:1.8;min-height:100vh}
#app{max-width:640px;margin:0 auto;padding:16px 16px 40px}
.top{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.av{width:52px;height:52px;border-radius:16px;background:#e3efe6;color:var(--g);border:1px solid var(--y);display:grid;place-items:center;font-weight:700;font-size:1.4rem;overflow:hidden;flex:none}.av img{width:100%;height:100%;object-fit:cover}
.hi{flex:1;min-width:0}.hi b{display:block;font-size:1.25rem}.hi small{color:var(--mut)}
.ib{width:46px;height:46px;border-radius:14px;border:1px solid var(--bd);background:#fff;display:grid;place-items:center;text-decoration:none;font-size:1.3rem;color:var(--ink);cursor:pointer}
.card,.row{background:var(--card);border:1px solid var(--bd);border-radius:18px;padding:14px;margin-bottom:12px}
.row{display:flex;align-items:center;gap:12px;width:100%;text-align:right;cursor:pointer;font:inherit;color:inherit;text-decoration:none}
.chip{width:56px;height:56px;border-radius:16px;background:#fbf0c8;color:var(--g);border:1px solid var(--y);display:grid;place-items:center;font:700 1.5rem Georgia,serif;flex:none}
.row b{display:block;font-size:1.15rem}.row small{color:var(--mut)}.row .go{margin-inline-start:auto;color:var(--mut)}
.q{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:200px;width:100%;border:1px solid var(--y);border-radius:24px;background:#fff;color:var(--ink);font:inherit;cursor:default;margin-top:4px}
.q i{font-style:normal;font-size:3.2rem}.q b{font-size:2.2rem;color:#134e3a}.q small{font-size:1rem;color:var(--mut)}
.tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px}
.tab{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:84px;border-radius:16px;border:1.5px solid #b5d4be;background:#fff;color:var(--g);font:700 1rem inherit;cursor:pointer}.tab i{font-style:normal;font-size:1.8rem}
.tab.on{background:var(--g);color:#fff;border-color:var(--g);box-shadow:0 3px 0 var(--y)}
.btn{display:block;text-align:center;text-decoration:none;background:linear-gradient(135deg,#1a8350,var(--g));color:#fff;border-radius:14px;padding:12px;font-weight:700;margin-top:10px}
.sub{color:var(--mut)}
h1{font-size:1.2rem;margin:0}.hd{display:flex;align-items:center;gap:10px;margin-bottom:14px}.hd h1{flex:1}
</style>
</head>
<body>
<div id="app"></div>
<script src="../../shared/wisdom.js"></script>
<script>
var CFG = __CFG__;
var $ = function (s) { return document.querySelector(s); };
function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function profile() { try { return JSON.parse(localStorage.getItem("sahaba-portal-profile") || "null"); } catch (e) { return null; } }
var tab = "units";
function hdr(title, back) {
  var p = profile() || {}, first = p.first || "";
  if (back) return '<div class="hd"><a class="ib" href="#home" aria-label="رجوع">›</a><h1>' + esc(title) + '</h1><a class="ib" href="../../index.html" aria-label="بوابة الصحابة التعليمية">🏠</a></div>';
  var av = p.photo ? '<img alt="" src="' + p.photo + '">' : esc((first || "؟").charAt(0));
  return '<div class="top"><div class="av">' + av + '</div><div class="hi"><b>مرحباً' + (first ? "، " + esc(first) : "") + '</b><small>' + esc(CFG.name) + ' · تاسع</small></div><a class="ib" href="../../index.html" aria-label="بوابة الصحابة التعليمية">🏠</a></div>';
}
function lnk(url, label, sub, ic) {
  return url ? '<a class="row" href="' + esc(url) + '" target="_blank" rel="noopener"><span class="chip" style="font-size:1.6rem">' + ic + '</span><span><b>' + esc(label) + '</b><small>' + sub + '</small></span><span class="go">‹</span></a>'
             : '<div class="card"><b>' + esc(label) + '</b><div class="sub">سيُضاف قريباً.</div></div>';
}
function home() {
  var h = hdr() + CFG.sems.map(function (s, i) { return '<a class="row" href="#sem' + (i + 1) + '"><span class="chip">' + (i ? "II" : "I") + '</span><span><b>' + s.name + '</b><small>الوحدات قريباً • الكتاب' + (CFG.pack ? " والرزمة" : "") + '</small></span><span class="go">‹</span></a>'; }).join("");
  h += '<button class="q" type="button"><i>📝</i><b>الاختبارات</b><small>ستُضاف قريباً</small></button>';
  var w = window.SahabaWisdom && window.SahabaWisdom.today(CFG.id);
  if (w) h += '<div class="card" style="text-align:center;margin-top:12px"><small class="sub">💡 حكمة اليوم</small><p dir="auto" style="margin:8px 0;line-height:1.9">' + esc(w[0]) + '</p><small class="sub">— ' + esc(w[1]) + '</small></div>';
  $("#app").innerHTML = h;
}
function sem(i) {
  var s = CFG.sems[i], body;
  if (tab === "units") body = '<div class="card"><b>الوحدات</b><div class="sub">ستُضاف وحدات هذا الفصل ودروسه قريباً بإذن الله.</div></div>';
  else if (tab === "book") body = lnk(s.book, "كتاب " + CFG.name + " — " + s.name, "الكتاب المدرسي (يحتاج إنترنت)", "📖") + '<p class="sub">يفتح الكتاب على Google Drive.</p>';
  else body = lnk(CFG.pack, "رزمة " + CFG.name, "الرزمة التعليمية للفصلين (يحتاج إنترنت)", "📦");
  var tabs = [["units", "📚", "الوحدات"], ["book", "📖", "الكتاب"], ["pack", "📦", "الرزمة"]].map(function (t) { return '<div class="tab' + (tab === t[0] ? " on" : "") + '" onclick="setTab(\'' + t[0] + '\')"><i>' + t[1] + "</i>" + t[2] + "</div>"; }).join("");
  $("#app").innerHTML = hdr(s.name, true) + '<div class="tabs">' + tabs + "</div>" + body;
}
function setTab(t) { tab = t; route(); }
function route() { var m = /^#sem(\d)$/.exec(location.hash || ""); if (m && CFG.sems[+m[1] - 1]) sem(+m[1] - 1); else home(); }
addEventListener("hashchange", function () { tab = "units"; route(); });
route();
if (window.SahabaWisdom) window.SahabaWisdom.gate(CFG.id, function () {});
if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(function () {});
</script>
</body>
</html>
"""

SHELL_SW = """/* عامل خدمة __NAME__ (التاسع): يعمل بعد أول زيارة بلا إنترنت. يحذف ذاكرته وحدها (__PRE__-). */
const P = "__PRE__-";
const V = P + "v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png",
  "../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf", "../../shared/wisdom.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const c = res.clone(); caches.open(V).then(ch => ch.put(e.request, c)).catch(() => {}); return res; }).catch(() => caches.match("./index.html"))));
});
"""


def shell(subject: str, name: str, pre: str) -> None:
    """هيكلٌ بسيط (فصلان + كتاب ورزمة) للمواد التي تُبنى لاحقاً بمحتواها (الرياضيات والإنجليزية)."""
    import json
    d = ROOT / subject / "9"
    if d.exists():
        shutil.rmtree(d)
    d.mkdir(parents=True)
    cfg = {"id": subject, "name": name, "pack": link(subject, "pack"),
           "sems": [{"name": "الفصل الأول", "book": link(subject, "book1")}, {"name": "الفصل الثاني", "book": link(subject, "book2")}]}
    (d / "index.html").write_text(SHELL_HTML.replace("__NAME__", name).replace("__CFG__", json.dumps(cfg, ensure_ascii=False)), encoding="utf-8")
    (d / "sw.js").write_text(SHELL_SW.replace("__NAME__", name).replace("__PRE__", pre), encoding="utf-8")
    (d / "manifest.webmanifest").write_text(json.dumps({"name": f"{name} — الصف التاسع", "short_name": name, "lang": "ar", "dir": "rtl", "start_url": "./", "scope": "./", "display": "standalone", "background_color": "#FAF6EB", "theme_color": "#0e6b3c",
        "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"}, {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]}, ensure_ascii=False, indent=2), encoding="utf-8")
    for n in ("192", "512"):
        shutil.copyfile(ROOT / "shared" / "icons" / f"portal-{n}.png", d / f"icon-{n}.png")


def math() -> None:
    shell("math", "الرياضيات", "math9")


def english() -> None:
    shell("english", "اللغة الإنجليزية", "eng9")


# arabic/9 صار بمحتوى حقيقي (من الكتاب والرزمة): أُوقف توليده حتى لا يُمحى. للتجديد من الصفر استعمل arabic() يدوياً.
SUBJECTS = {"islamic": islamic, "math": math, "english": english}


def main(names):
    for n in names:
        SUBJECTS[n]()
        print("✔", n, "→", f"{n}/9")
        if n in ("arabic", "islamic"):
            subprocess.run([sys.executable, str(ROOT / "tools" / "gen_precache.py"), f"{n}/9"], check=True)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1:])
