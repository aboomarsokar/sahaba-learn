"""يبني تطبيق مادةٍ علميةٍ للصف العاشر (فيزياء/كيمياء/أحياء) من ملف HTML الذي يرسله صاحب المشروع (PCB-Physics.html …).

الاستعمال:   python3 tools/make_pcb_apps.py <PCB-Physics.html> [<PCB-Chemistry.html> …]
المادة تُعرف من الملف نفسه (PCB_ACTIVE_SUBJECT = 0 فيزياء، 1 كيمياء، 2 أحياء) ويُكتب التطبيق في <المادة>/10/.

ما يفعله (دون حذف أيّ محتوى للمادة نفسها):
  1) يفكّ الصور والدروس والمكتبات والفيديوهات المدمجة إلى ملفّات تُحمَّل عند الحاجة (tools/unpack_pcb.py).
  2) يحذف بياناتِ المادتين الأخريين فعلياً: دروسها التفاعلية ومكتباتها وصورها.
  3) يربطه بالبوابة: غلاف المادة، دخولٌ من ملف البوابة بلا تسجيل، زرّ العودة للبوابة، نشر الإنجازات، تحديثٌ تلقائي، عمل بلا إنترنت.
  4) يضيف مستوى «الفصل الأول والثاني» (tools/pcb_semesters.py) والهوية الموحَّدة (tools/pcb_identity.py).
المخرجات مولَّدة: لا تُعدَّل يدوياً؛ أعد التوليد من ملف المصدر.
"""
import subprocess
import json
import re
import shutil
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from unpack_pcb import find_obj, main as unpack  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
SUBJECTS = {  # k: (المجلّد، الاسم، بادئة التخزين، بادئة الذاكرة)
    0: ("physics", "الفيزياء", "phy10:", "phy10-"),
    1: ("chemistry", "الكيمياء", "che10:", "che10-"),
    2: ("biology", "الأحياء", "bio10:", "bio10-"),
}


def rep(s: str, a: str, b: str) -> str:
    assert s.count(a) == 1, (s.count(a), a[:90])
    return s.replace(a, b)


DEBUG = r"""<script>/* تشخيص: افتح الصفحة بإضافة ?debug=1 فتظهر أيّ أخطاءٍ برمجية أسفل الشاشة */
if(/[?&]debug=1/.test(location.search))addEventListener('error',function(e){try{var d=document.getElementById('__err');if(!d){d=document.createElement('pre');d.id='__err';d.style.cssText='position:fixed;z-index:2147483647;left:0;right:0;bottom:0;margin:0;background:#400;color:#fff;font:11px/1.4 monospace;padding:8px;direction:ltr;text-align:left;max-height:45vh;overflow:auto;white-space:pre-wrap';(document.body||document.documentElement).appendChild(d)}var t=e.target&&e.target!==window?('LOAD FAIL '+(e.target.src||e.target.href||e.target.tagName)):((e.message||'')+' @'+String(e.filename||'').split('/').pop()+':'+e.lineno);d.textContent+=t+'\n'}catch(x){}},true);</script>
"""

HEAD = r"""<script>var LV=null;</script>
<script>
/* تطبيق مستقلّ: بيانات الطالب (التقدّم والمفضّلة والملاحظات) تُحفظ باسمٍ خاصّ بهذه المادة. والدخول من ملف الطالب في البوابة فلا تسجيل هنا */
(function(P){
 var G=Storage.prototype.getItem,S=Storage.prototype.setItem,R=Storage.prototype.removeItem;
 function k(x){return typeof x=="string"&&x.slice(0,3)=="pcb"?P+x:x}
 Storage.prototype.getItem=function(x){return G.call(this,k(x))};
 Storage.prototype.setItem=function(x,v){return S.call(this,k(x),v)};
 Storage.prototype.removeItem=function(x){return R.call(this,k(x))};
 try{var pp=JSON.parse(G.call(localStorage,"sahaba-portal-profile")||"null");
  if(pp&&pp.first){var cur=null;try{cur=JSON.parse(G.call(localStorage,P+"pcb"))}catch(e){}
   S.call(localStorage,P+"pcb",JSON.stringify({n:[pp.first,pp.father,pp.family].filter(Boolean).join(" "),s:cur&&cur.s>=0?cur.s:0}))}}catch(e){}
})("__P__");
</script>
"""

ACH = r"""
<script>
/* الكتب والرزم لمادة هذا التطبيق وحدها */
libGo=function(k){libKind=k?"packs":"books";libSubj=PCB_ACTIVE_SUBJECT;nav("libi")};
</script>
<script>
/* ملخّص الإنجاز للبوابة (إنجازاتي وشهاداتي): الدرس يُحسب منجزاً بنيل وسامه لا بفتحه */
(function(){var K=PCB_ACTIVE_SUBJECT;
 function ac(){try{var p=PG(),L=lsGet(),tl=0,vis=0,done=0,un=0,badges=[],certs=[];
  (DATA[K]||[]).forEach(function(u,ui){var c=0;(u||[]).forEach(function(x,li){tl++;var key=K+"-"+ui+"-"+li;if(p.d&&p.d[key])vis++;
    if(L[key]&&L[key].b){done++;c++;var ls=lessonOf(key);badges.push({i:"🏅",t:ls&&ls.t?ls.t:key})}});
    if((u||[]).length&&c==(u||[]).length)un++});
  if(L["S"+K]&&L["S"+K].b)certs.push({t:"إتمام مادة __NAME__",d:new Date(L["S"+K].b).toLocaleDateString("ar")});
  localStorage.setItem("sahaba-ach:__DIR__/10",JSON.stringify({pct:tl?Math.round(done*100/tl):0,units:{done:un,total:U[K].length},certs:certs,badges:badges,extra:["👁️ دروس زرتَها: "+vis+" من "+tl],updated:new Date().toISOString()}))}catch(e){}}
 ac();var _d=draw;draw=function(){var r=_d.apply(this,arguments);ac();return r}})();
</script>
"""

SW = r'''/* عامل خدمة __NAME__: يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (__PRE__). */
const P = "__PRE__";
const V = P + "v11";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "../../shared/icons/portal-192.png", "../../shared/icons/portal-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية تمرّ كما هي */
  if (r.cache === "no-store") return;                              /* فحص التحديث: يذهب إلى الشبكة مباشرةً */
  if (/\.mp4$/.test(r.url)) { e.respondWith(videoFromCache(r).catch(() => fetch(r))); return; }
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً بمهلة 2.5 ثانية ثم النسخة المحفوظة */
    e.respondWith((async () => { const hit = await caches.match(r, { ignoreSearch: true }), cached = hit && !hit.redirected ? hit : null; const net = fetch(r).then(x => { if (x.ok && !x.redirected) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }); if (!cached) return net.catch(() => caches.match("./index.html")); return Promise.race([net.catch(() => cached), new Promise(res => setTimeout(() => res(cached), 2500))]); })());
    return;
  }
  /* بقية الملفات (دروس وصور ومكتبات): نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});

/* الفيديو: المتصفّح يطلبه بنطاقات (Range) فنخدمه من الذاكرة بردّ 206 ليعمل بلا إنترنت */
async function videoFromCache(r) {
  const c = await caches.open(V);
  let full = await caches.match(r.url);
  if (!full) { full = await fetch(r.url); if (full.ok) c.put(r.url, full.clone()); }
  const range = r.headers.get("range");
  if (!range || !full.ok) return full;
  const buf = await full.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(range);
  const start = m && m[1] ? +m[1] : 0, end = m && m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), { status: 206, headers: { "Content-Type": "video/mp4", "Accept-Ranges": "bytes",
    "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`, "Content-Length": String(end - start + 1) } });
}

/* العمل بلا إنترنت: بعد أول فتح (وبصمت) تُخزَّن ملفات التطبيق من precache.json */
async function precacheAll() {
  const c = await caches.open(V);
  let list = [];
  try { list = (await (await fetch("./precache.json", { cache: "no-store" })).json()).files; } catch (e) { return; }
  const todo = [];
  for (const u of list) if (!(await c.match(u))) todo.push(u);
  let i = 0;
  await Promise.all(Array.from({ length: 2 }, async () => {
    while (i < todo.length) { const u = todo[i++]; try { const r = await fetch(u, { cache: "reload" }); if (r.ok) await c.put(u, r); } catch (e) {} }
  }));
}
self.addEventListener("message", e => { if (e.data && e.data.type === "precache") e.waitUntil(precacheAll()); });
'''


STEPS = [
    {"t": "أهلاً بك، أنا كينيكس", "x": "أهلاً بك يا {name}! أنا مرشدك في بوابة الصحابة التعليمية، وهذا تطبيق __SUB__ للصف العاشر. سأعرّفك عليه في دقيقة، وبعدها أبقى معك في كل درس حتى تتفوّق بإذن الله.", "s": None, "i": 1},
    {"t": "📚 مادة __SUB__", "x": "هذه مادتك بوحداتها ودروسها وأسئلتها. كل ما فيها مأخوذ من منهاجك، وكل شيء يعمل بلا إنترنت بعد أول فتح (عدا الكتب والرزم).", "s": ".pcb-subject"},
    {"t": "📈 تقدّمك الحقيقي", "x": "هنا نسبة إنجازك في __SUB__. الدرس لا يُحسب مكتملاً بفتحه، بل بعد أن تنال وسامه بحلّ أسئلته، فتحدَّ نفسك كل يوم!", "s": ".pcb-progress"},
    {"t": "📖 الوحدات والدروس", "x": "اضغط لتدخل وحدات __SUB__: في كل وحدة دروس مرتبة، وداخل كل درس شرح وصور توضيحية وملاحظات وأسئلة. ركّز، فالفهم أهم من الحفظ!", "s": ".pcb-main-action"},
    {"t": "📝 اختبر نفسك", "x": "اختبر نفسك في __SUB__ بمستويات سهل ومتوسط وصعب. الخطأ ليس فشلاً، هو درس يقرّبك من النجاح، فلا تخف من المحاولة.", "s": ".pcb-tile:nth-child(1)"},
    {"t": "🖼️ الصور التوضيحية", "x": "رسومات ومخططات لتفهم الفكرة بالصورة. اضغط على أي صورة لتكبيرها.", "s": ".pcb-tile:nth-child(3)"},
    {"t": "📚 الكتب والرزم المدرسية", "x": "من هنا تفتح كتاب __SUB__ ورزمتها لتراجع منها متى شئت (تحتاج إنترنت).", "s": ".pcb-tile:nth-child(4)"},
    {"t": "⚙️ الإعدادات", "x": "من هنا تغيّر اللغة والوضع الليلي، وتنزّل التطبيق وتثبّته على شاشة هاتفك، وتعيد هذه الجولة متى شئت.", "s": ".pcb-tile:nth-child(6)"},
    {"t": "🏠 العودة إلى البوابة", "x": "هذا الزرّ يرجعك إلى بوابة الصحابة التعليمية حيث موادّك كلّها وإنجازاتك وشهاداتك.", "s": ".pcb-top a.pcb-menu"},
    {"t": "جاهز للانطلاق؟ 🚀", "x": "المذاكرة اليومية القليلة أفضل من الكثيرة المتقطعة. ابدأ بدرس واحد اليوم، وأنا معك في كل خطوة. بالتوفيق دائماً! ✨", "s": None},
]

def prune(out: Path, k: int) -> dict:
    """يحذف بيانات المادتين الأخريين من المجلّد المفكوك ويعيد إحصاءً."""
    idx = (out / "index.html").read_text(encoding="utf-8")
    pre = f"{k}-"
    # الدروس التفاعلية
    r = find_obj(idx, "LX")
    lx = json.loads(r[2])
    keep = {key: v for key, v in lx.items() if key.startswith(pre)}
    keepf = {Path(x).name for v in keep.values() for x in (v if isinstance(v, list) else [v])}
    removed_l = 0
    for f in (out / "lessons").glob("*.html"):
        if f.name not in keepf:
            f.unlink()
            removed_l += 1
    idx = idx[: r[0]] + "var LX=" + json.dumps(keep, ensure_ascii=False) + idx[r[1] :]
    # الصور التوضيحية (INFD) المرتبطة بدروس المادة فقط
    rm = find_obj(idx, "INFMAP")
    infmap = json.loads(rm[2])
    used = {i for key, v in infmap.items() if key.startswith(pre) for i in v}
    rd = find_obj(idx, "INFD")
    infd = {key: v for key, v in json.loads(rd[2]).items() if key in used}
    idx = idx[: rd[0]] + "var INFD=" + json.dumps(infd, ensure_ascii=False) + idx[rd[1] :]
    rm = find_obj(idx, "INFMAP")
    idx = idx[: rm[0]] + "var INFMAP=" + json.dumps({key: v for key, v in infmap.items() if key.startswith(pre)}, ensure_ascii=False) + idx[rm[1] :]
    # صور وحدات المواد الأخرى
    m = re.search(r"var UIMG\s*=\s*(\[\[.*?\]\]);", idx, re.S)
    if m:
        ui = json.loads(m.group(1))
        ui = [x if n == k else [] for n, x in enumerate(ui)]
        idx = idx[: m.start(1)] + json.dumps(ui, ensure_ascii=False) + idx[m.end(1) :]
    m = re.search(r"var SUBIMG\s*=\s*(\[.*?\]);", idx, re.S)
    if m:
        si = json.loads(m.group(1))
        si = [x if n == k else "" for n, x in enumerate(si)]
        idx = idx[: m.start(1)] + json.dumps(si, ensure_ascii=False) + idx[m.end(1) :]
    # الفيديوهات تخصّ تجارب الكيمياء وحدها
    if k != 1:
        rv = find_obj(idx, "VID")
        idx = idx[: rv[0]] + "var VID={}" + idx[rv[1] :]
        shutil.rmtree(out / "videos", ignore_errors=True)
    # المكتبات: ما تحتاجه الدروس المتبقّية فقط
    lessons_txt = "".join(f.read_text(encoding="utf-8") for f in (out / "lessons").glob("*.html"))
    needed = set(re.findall(r"lib/([\w.-]+)", lessons_txt)) | set(re.findall(r"lib/([\w.-]+)", idx))
    removed_lib = 0
    for f in (out / "lib").glob("*"):
        if f.name not in needed:
            f.unlink()
            removed_lib += 1
    # الصور: ما لا يُشار إليه من الصفحة أو الدروس أو المكتبات يُحذف
    libs_txt = "".join(f.read_text(encoding="utf-8", errors="ignore") for f in (out / "lib").glob("*.js"))
    refd = set(re.findall(r"images/([0-9a-f]{12}\.\w+)", idx + lessons_txt + libs_txt))
    removed_img = 0
    for f in (out / "images").glob("*"):
        if f.name not in refd:
            f.unlink()
            removed_img += 1
    (out / "index.html").write_text(idx, encoding="utf-8")
    return {"lessons": removed_l, "libs": removed_lib, "images": removed_img}


def patch(out: Path, k: int, d: str, name: str, store: str, pre: str) -> None:
    s = (out / "index.html").read_text(encoding="utf-8")
    s = re.sub(r"<title>.*?</title>", f"<title>{name} — الصف العاشر</title>", s, count=1, flags=re.S)
    s = s.replace("(LV.u&&LVN[q.l]", "(LV&&LV.u&&LVN[q.l]")   # إصلاح: اختبارٌ عامّ بلا LV كان يتعطّل (LV=null)
    s = re.sub(r'<link rel="manifest" href="manifest-\w+\.webmanifest">', '<link rel="manifest" href="manifest.webmanifest">', s, count=1)
    s = s.replace('href="icons/apple-touch-icon.png"', 'href="../../shared/icons/portal-180.png"').replace('href="icons/icon-192.png"', 'href="../../shared/icons/portal-192.png"')
    s = re.sub(r'register\("\./sw-\w+\.js"\)', 'register("./sw.js")', s, count=1)
    i = s.index("<head>")
    assert i < 600, i
    s = s[: i + 6] + "\n" + DEBUG + HEAD.replace("__P__", store) + s[i + 6 :]
    # الآية اليومية: لا شاشة وسيطة بعد الغلاف، فندخل الواجهة الرئيسية مباشرةً
    s = rep(s, '_vNext=V;V="verse";draw();', "draw();")
    # نسبة التقدّم: الدرس منجزٌ بنيل وسامه (لا بزيارته)، والعدد الكلّي من دروس المادة لا من أطوال عناوينها
    s = rep(s, 'done=Object.keys((p&&p.d)||{}).filter(function(k){return k.indexOf(pre)===0}).length;(U[PCB_ACTIVE_SUBJECT]||[]).forEach(function(x){total+=x.length})',
            'var L2=lsGet();(DATA[PCB_ACTIVE_SUBJECT]||[]).forEach(function(u,ui){(u||[]).forEach(function(x,li){total++;var kk=PCB_ACTIVE_SUBJECT+"-"+ui+"-"+li;if(L2[kk]&&L2[kk].b)done++})})')
    s = rep(s, "درساً تمت زيارته", "درساً مكتملاً")
    # الصور التوضيحية: مادة هذا التطبيق وحدها
    s = rep(s, "GAL.map(function(s,i){return'<div class=\"gc\"", "GAL.map(function(s,i){if(i!=PCB_ACTIVE_SUBJECT)return\"\";return'<div class=\"gc\"")
    # «اختبر نفسك»: شاشة مستويات اختبارات المادة (startQ(1) كانت تنهار بسبب LV)
    s = rep(s, 'onclick="startQ(1)"><span>📝</span>', 'onclick="startQ()"><span>📝</span>')
    # بطاقتا الكتب والرزم في الرئيسية (الشيفرة موجودة في التطبيق ولم يكن لها مدخل)
    s = rep(s, '<button class="pcb-tile" onclick="mn(true)"><span>⚙️</span>',
            '<button class="pcb-tile" onclick="libGo(0)"><span>📚</span><b>الكتب المدرسية</b><small>كتاب المادة (يحتاج إنترنت)</small></button><button class="pcb-tile" onclick="libGo(1)"><span>📦</span><b>الرزم المدرسية</b><small>رزمة المادة (تحتاج إنترنت)</small></button><button class="pcb-tile" onclick="mn(true)"><span>⚙️</span>')
    # زرّ العودة إلى البوابة في الترويسة وفي القائمة، ولا خروج (الدخول من البوابة)
    s = rep(s, '<button class="pcb-menu" onclick="mn(true)">☰</button></header>',
            '<span style="display:flex;gap:8px;align-items:center"><a class="pcb-menu" href="../../index.html" aria-label="الرجوع إلى بوابة الصحابة التعليمية" style="display:grid;place-items:center;text-decoration:none">🏠</a><button class="pcb-menu" onclick="mn(true)">☰</button></span></header>')
    s = rep(s, """$("menu").innerHTML='<h2>'+t.menu+'</h2><div class="mi" onclick="tl()">""",
            """$("menu").innerHTML='<h2>'+t.menu+'</h2><div class="mi" onclick="location.href=\\'../../index.html\\'"><span>🏠 بوابة الصحابة التعليمية</span></div><div class="mi" onclick="tl()">""")
    s = rep(s, """<div class="mi" onclick="lo()"><span>🚪 تسجيل الخروج / Log out</span></div>""", "")
    # الغلاف: صورةٌ فقط ثم «ابدأ الآن»
    assert s.count("<body>") == 1
    kx = {"id": d + "10", "kinex": "../../shared/kinex.jpg",
          "steps": json.loads(json.dumps(STEPS, ensure_ascii=False).replace("__SUB__", name))}
    s = s.replace("<body>", '<body>\n<script src="../../shared/wisdom.js"></script>\n<script src="../../shared/intro.js"></script>\n<script>var KX=' + json.dumps(kx, ensure_ascii=False) + ';KX.ready=function(){return typeof V!=="undefined"&&V==="home"&&!document.getElementById("shc")};(window.SahabaWisdom?SahabaWisdom.gate("' + d + '",function(){SahabaIntro.run(KX)}):SahabaIntro.run(KX))</script>', 1)
    s = rep(s, 'onclick="tourStart()"><span>🎓', 'onclick="mn(false);SahabaIntro.tour(KX)"><span>🎓')
    # هوية الصحابة البصرية: كريمي وأخضر وبني (يبقى لون المادة المميِّز للتمييز بين الموادّ فقط)
    s = rep(s, ":root{--bg:#EFE3CC;--card:#FBF5E8;--text:#2A2016;--muted:#5C4B38;--bd:#C9B28C;--pri:#5A3E1A;--ink:#2A2016;--c1:#1565C0;--c1b:#E6D3AE;",
            ":root{--bg:#FAF6EB;--card:#FFFFFF;--text:#113D2E;--muted:#5f7a6e;--bd:#EEE4DB;--pri:#113D2E;--ink:#113D2E;--c1:#1565C0;--c1b:#EEE4DB;")
    s = rep(s, "</body>", ACH.replace("__DIR__", d).replace("__NAME__", name) + '<script src="../../shared/update-notify.js" data-app="' + name + '" data-icon="../../shared/icons/portal-192.png" defer></script>\n<script src="../../shared/offline.js" defer></script>\n</body>')
    (out / "index.html").write_text(s, encoding="utf-8")
    (out / "manifest.webmanifest").write_text(json.dumps({
        "name": f"{name} — الصف العاشر", "short_name": name, "lang": "ar", "dir": "rtl", "start_url": "./", "scope": "./", "display": "standalone",
        "background_color": "#FAF6EB", "theme_color": "#FAF6EB",
        "icons": [{"src": "../../shared/icons/portal-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
                  {"src": "../../shared/icons/portal-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]}, ensure_ascii=False, indent=2), encoding="utf-8")
    (out / "sw.js").write_text(SW.replace("__PRE__", pre).replace("__NAME__", name), encoding="utf-8")
    files = ["./index.html", "./manifest.webmanifest"]
    for sub in ("lessons", "lib", "images", "videos"):
        files += [f"./{sub}/{p.name}" for p in sorted((out / sub).glob("*")) if p.is_file()] if (out / sub).exists() else []
    files += ["../../shared/update-notify.js", "../../shared/offline.js", "../../shared/durra.js", "../../shared/intro.js", "../../shared/kinex.jpg", f"../../shared/covers/{d}.webp"]
    (out / "precache.json").write_text(json.dumps({"files": files}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    total = sum((out / f).stat().st_size for f in files if (out / f).is_file())
    print(f"   {d}/10: {len(files)} ملفاً في قائمة التخزين، {total / 1048576:.1f} م.ب")


def build(src: Path) -> None:
    txt = src.read_text(encoding="utf-8")
    m = re.search(r"PCB_ACTIVE_SUBJECT\s*=\s*(\d)", txt)
    assert m, "لم أجد PCB_ACTIVE_SUBJECT في الملف"
    k = int(m.group(1))
    d, name, store, pre = SUBJECTS[k]
    print(f"▶ {name} ({src.name})")
    out = ROOT / d / "10"
    if out.exists():
        shutil.rmtree(out)
    with tempfile.TemporaryDirectory() as tmp:
        unpack(src, Path(tmp) / "u")
        shutil.copytree(Path(tmp) / "u", out)
    st = prune(out, k)
    print(f"   حُذف من المادتين الأخريين: {st['lessons']} درساً، {st['libs']} مكتبة، {st['images']} صورة")
    patch(out, k, d, name, store, pre)
    inject_tools(out, d)
    # مستوى الفصل الأول/الثاني (tools/pcb_semesters.py)
    subprocess.run([sys.executable, '-I', str(ROOT / 'tools' / 'pcb_semesters.py'), d], check=True)
    # الهوية البصرية الموحَّدة مع تطبيق العربية (tools/pcb_identity.py)
    subprocess.run([sys.executable, '-I', str(ROOT / 'tools' / 'pcb_identity.py'), d], check=True)
    # الشاشة الرئيسية الجديدة (عنوان وبحث ولافتة وشبكة المواضيع وتنقّل سفلي)
    subprocess.run([sys.executable, '-I', str(ROOT / 'tools' / 'pcb_home.py'), d], check=True)
    # الوحدة ← بطاقات الدروس والدرس ← شرحه التفاعلي بداخله
    subprocess.run([sys.executable, '-I', str(ROOT / 'tools' / 'pcb_lessons.py'), d], check=True)
    # ضغط صور التطبيق بأمان (يتجاوز ما لا يوفّر ≥12% مع حفظ الجودة)
    subprocess.run([sys.executable, '-I', str(ROOT / 'tools' / 'optimize_assets.py'), '--apply', f'{d}/10'], check=True)


def inject_tools(out: Path, d: str) -> None:
    """أدوات الطالب (بحث/مفضّلة/ملاحظات/حاسبة) من tools/sci_tools.js؛ آمنة للتكرار."""
    f = out / "index.html"
    s = f.read_text(encoding="utf-8")
    a = s.find("<script>/* أدوات الطالب:")
    if a >= 0:                       # أعد الحقن بأحدث نسخة
        b = s.index("</script>", a) + len("</script>")
        s = s[:a] + s[b:].lstrip("\n")
    s = s.replace('<div class="mi" onclick="bgPick()"><span>🎨 لون الخلفية</span></div>', '<div class="mi" onclick="Durra.store()"><span>🪙 متجر دُرّة</span></div>')   # لا ألوان مجانية: كلّها من المتجر
    js = (ROOT / "tools" / "sci_tools.js").read_text(encoding="utf-8").replace("__DIR__", f"{d}/10")
    s = rep(s, "</body>", js + "</body>")
    f.write_text(s, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    if sys.argv[1] == "--tools-only":
        for _d in ("physics", "chemistry", "biology"):
            inject_tools(ROOT / _d / "10", _d)
        sys.exit(0)
    for a in sys.argv[1:]:
        build(Path(a))
