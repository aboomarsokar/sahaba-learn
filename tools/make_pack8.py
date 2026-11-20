"""يولّد تطبيقَي العلوم العامة والرياضيات للصف الثامن (science/8 و math/8) من القالب tools/pack8_app.html.

الاستعمال:   python3 tools/make_pack8.py [science] [math]
المصدر:      tools/content8/{biology,physics,chemistry}.json (محتوى رزمة «العلوم والحياة») + tools/content8/links.json
المخرجات مولَّدة في science/8/ ولا تُعدَّل يدوياً: غيّر القالب أو ملفّات المحتوى وأعد التوليد.
المخطّط: tools/content8/SCHEMA.md ، والتحقّق: tools/content8/check.py
"""
import json
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
C8 = ROOT / "tools" / "content8"
LINKS = json.load(open(C8 / "links.json", encoding="utf-8"))

# ترتيب وحدات العلوم العامة: (المصدر، فهرس الوحدة، مفتاح الأيقونة، لون البطاقة)
SCI_ORDER = [("biology", 0, "cell", "#8fd3fb"), ("biology", 1, "split", "#f9b8d0"), ("physics", 0, "bolt", "#f7e18a"), ("chemistry", 0, "atom", "#b9bdf7"),
             ("chemistry", 1, "mol", "#8fe0cf"), ("chemistry", 2, "flask", "#fbc473"), ("physics", 1, "wave", "#a7c8f5"), ("biology", 2, "plant", "#b3df8c")]
MATH_ICONS = ["frac", "root", "alg", "tri", "stat", "eq", "cyl"]
# فهرس رزمة الرياضيات (لمعاينة الشكل قبل اكتمال المحتوى)
MATH_TOC = [("الأعداد النسبية", ["العدد النسبي", "الجذر التربيعي والجذر التكعيبي لعدد نسبي", "مقارنة الأعداد النسبية", "جمع الأعداد النسبية وطرحها", "ضرب الأعداد النسبية وقسمتها"]),
            ("الأعداد غير النسبية", ["العدد غير النسبي", "العمليات على الأعداد غير النسبية"]),
            ("المقادير الجبرية", ["جمع المقادير الجبرية وطرحها", "ضرب المقادير الجبرية", "تحليل المقادير الجبرية بإخراج العامل المشترك", "تحليل العبارة التربيعية", "تحليل الفرق بين مربعين", "قسمة المقادير الجبرية"]),
            ("فيثاغورس والتطابق والتشابه", ["نظرية فيثاغورس", "عكس نظرية فيثاغورس", "تطابق المثلثات", "تشابه المثلثات"]),
            ("الإحصاء", ["تمثيل البيانات بطريقة القطاعات الدائرية", "مقاييس التشتت"]),
            ("المعادلات", ["حل المعادلة التربيعية بالتحليل", "حل المعادلة التربيعية بإكمال المربع", "حل المعادلة التربيعية بالقانون العام", "تحليل الفرق بين مكعبين ومجموع مكعبين", "حل معادلتين خطيتين بمتغيرين"]),
            ("القياس والأشكال", ["متوازي الأضلاع", "القطاع الدائري والقطعة الدائرية", "الأسطوانة", "المخروط"])]

SUBJ = {
    "science": {"dir": "science/8", "name": "العلوم العامة", "short": "العلوم", "hello": "أهلاً يا بطل العلوم!", "unitsTitle": "وحدات العلوم", "theme": "sci", "key": "sci8:st", "wid": "science",
                "kxid": "science8", "student": "طالب العلوم", "packT": "رزمة العلوم والحياة", "pack": LINKS["science"], "pre": "sci8-",
                "unitsHint": "ثماني وحدات تغطّي الخلية والطاقة والذرّة والكيمياء والأمواج وتصنيف الكائنات. اضغط وحدة لترى دروسها."},
    "math": {"dir": "math/8", "name": "الرياضيات", "short": "الرياضيات", "hello": "مرحباً", "unitsTitle": "الوحدات الدراسية", "theme": "math", "key": "math8:st", "wid": "math",
             "kxid": "math8", "student": "طالب الرياضيات", "packT": "رزمة الرياضيات", "pack": LINKS["math"], "pre": "math8-",
             "unitsHint": "سبع وحدات: الأعداد، والجبر، والهندسة، والإحصاء، والمعادلات، والقياس. اضغط وحدة لترى دروسها."},
}


def science_units() -> list:
    src = {x: json.load(open(C8 / f"{x}.json", encoding="utf-8")) for x in ("physics", "chemistry", "biology")}
    out = []
    for s, i, ic, col in SCI_ORDER:
        u = src[s]["units"][i]
        out.append({"title": u["title"], "ic": ic, "color": col, "uq": u["unit_quiz"],
                    "lessons": [{"t": l["t"], "e": l["e"], "q": l["q"], "quiz": l["quiz"], "hints": l.get("hints", {})} for l in u["lessons"]]})
    return out


def math_units() -> list:
    raw = []
    for part in "abcd":
        f = C8 / f"math-{part}.json"
        if f.exists():
            raw += json.load(open(f, encoding="utf-8"))["units"]
    if len(raw) == len(MATH_TOC):
        return [{"title": u["title"], "ic": MATH_ICONS[i], "color": "#cfe2b0", "uq": u["unit_quiz"],
                 "lessons": [{"t": l["t"], "e": l["e"], "q": l["q"], "quiz": l["quiz"], "hints": l.get("hints", {})} for l in u["lessons"]]} for i, u in enumerate(raw)]
    print("⚠ محتوى الرياضيات غير مكتمل: أستعمل الفهرس بمحتوى «قريباً» للمعاينة فقط")
    return [{"title": t, "ic": MATH_ICONS[i], "color": "#cfe2b0", "uq": [],
             "lessons": [{"t": l, "e": ["# قريباً", "سيُضاف شرح هذا الدرس وأنشطته بإذن الله."], "q": [], "quiz": [], "hints": {}} for l in ls]} for i, (t, ls) in enumerate(MATH_TOC)]


SW = '''/* عامل خدمة العلوم العامة (الثامن): يعمل بعد أول زيارة بلا إنترنت. يحذف ذاكرته وحدها (sci8-). */
const P = "sci8-";
const V = P + "v2";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "../../shared/icons/portal-192.png", "../../shared/icons/portal-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;
  if (r.cache === "no-store") return;
  if (r.mode === "navigate" || r.destination === "document") {
    e.respondWith((async () => { const hit = await caches.match(r, { ignoreSearch: true }), cached = hit && !hit.redirected ? hit : null; const net = fetch(r).then(x => { if (x.ok && !x.redirected) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }); if (!cached) return net.catch(() => caches.match("./index.html")); return Promise.race([net.catch(() => cached), new Promise(res => setTimeout(() => res(cached), 2500))]); })());
    return;
  }
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});
async function precacheAll() {
  const c = await caches.open(V);
  let list = [];
  try { list = (await (await fetch("./precache.json", { cache: "no-store" })).json()).files; } catch (e) { return; }
  for (const u of list) { if (!(await c.match(u))) { try { const r = await fetch(u, { cache: "reload" }); if (r.ok) await c.put(u, r); } catch (e) {} } }
}
self.addEventListener("message", e => { if (e.data && e.data.type === "precache") e.waitUntil(precacheAll()); });
'''


def build(sid: str) -> None:
    c = SUBJ[sid]
    units = science_units() if sid == "science" else math_units()
    cfg = {k: c[k] for k in ("name", "hello", "unitsTitle", "unitsHint", "theme", "key", "wid", "kxid", "student", "packT", "dir")}
    data = {"cfg": cfg, "units": units, "pack": c["pack"]}
    out = ROOT / c["dir"]
    shutil.rmtree(out, ignore_errors=True)
    out.mkdir(parents=True)
    html = (ROOT / "tools" / "pack8_app.html").read_text(encoding="utf-8")
    assert html.count("/*DATA*/") == 1
    html = html.replace("/*DATA*/", "window.SCI=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";").replace("__NAME__", c["name"])
    (out / "index.html").write_text(html, encoding="utf-8")
    (out / "manifest.webmanifest").write_text(json.dumps({
        "name": f"{c['name']} — الصف الثامن", "short_name": c["short"], "lang": "ar", "dir": "rtl", "start_url": "./", "scope": "./", "display": "standalone",
        "background_color": "#FAF6EB", "theme_color": "#113D2E",
        "icons": [{"src": "../../shared/icons/portal-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
                  {"src": "../../shared/icons/portal-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]}, ensure_ascii=False, indent=2), encoding="utf-8")
    (out / "sw.js").write_text(SW.replace("sci8-", c["pre"]).replace("العلوم العامة", c["name"]), encoding="utf-8")
    files = ["./index.html", "./manifest.webmanifest", "../../shared/durra.js", "../../shared/wisdom.js", "../../shared/intro.js", "../../shared/kinex.jpg",
             "../../shared/update-notify.js", "../../shared/offline.js", "../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf",
             "../../shared/icons/portal-192.png", "../../shared/icons/portal-512.png"]
    (out / "precache.json").write_text(json.dumps({"files": files}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    n = sum(len(u["lessons"]) for u in units)
    print(f"▶ {c['name']} (8): {len(units)} وحدات، {n} دروس، {(out / 'index.html').stat().st_size // 1024} ك.ب")


if __name__ == "__main__":
    for a in (sys.argv[1:] or ["science", "math"]):
        build(a)
