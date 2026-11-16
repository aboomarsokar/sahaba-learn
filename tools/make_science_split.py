"""يولّد تطبيقات الفيزياء والكيمياء والأحياء (الصف العاشر) من تطبيق العلوم science/10.

الاستعمال (من جذر المستودع، بعد أيّ تعديلٍ في science/10/index.html أو دروسه):
    python3 tools/make_science_split.py

كلّ تطبيقٍ مستقلّ: مجلّده وعامل خدمته وmanifest وذاكرته، وتقدّمه محفوظٌ باسمٍ خاصّ (phy10:/che10:/bio10:)،
ويعرض مادته وحدها (كتبها ورزمها واختباراتها وتقدّمها). أمّا الملفّات الثقيلة (الصور والدروس والمكتبات والفيديو)
فيقرؤها من science/10 بمسارٍ نسبيّ، فلا تتكرّر في المستودع.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "science" / "10"
SHARED = "../../science/10/"
APPS = [
    # k, المجلّد، الاسم، بادئة التخزين، بادئة الذاكرة، اللون
    (0, "physics", "الفيزياء", "phy10:", "phy10-", "#1565C0"),
    (1, "chemistry", "الكيمياء", "che10:", "che10-", "#D32F2F"),
    (2, "biology", "الأحياء", "bio10:", "bio10-", "#2E7D32"),
]


STEPS_TPL = """var STEPS=[
{t:"أهلاً بك، أنا كينيكس",x:"مرشدك في بوابة الصحابة التعليمية، وهذا تطبيق __SUB__ للصف العاشر. سأعرّفك عليه في دقيقة، وبعدها أبقى معك في كل درس حتى تتفوّق بإذن الله.",s:null,i:1},
{t:"📚 مادة __SUB__",x:"اضغط على بطاقة المادة لتدخل وحداتها، وفي كل وحدة دروس مرتبة. وداخل كل درس تبويبات: الشرح، وصور توضيحية، وملاحظات، وأسئلة. ونسبة إنجازك الحقيقية تظهر على البطاقة. ركّز، فالفهم أهم من الحفظ!",s:".sc.im"},
{t:"📕 الكتب والرزم المدرسية",x:"من هنا تفتح كتب __SUB__ والرزم المدرسية لتراجع منها متى شئت.",s:".q2"},
{t:"📝 الاختبارات",x:"اختبر نفسك في __SUB__ بمستويات سهل ومتوسط وصعب وشامل. الخطأ ليس فشلاً، هو درس يقرّبك من النجاح، فلا تخف من المحاولة.",s:".q4>div:nth-child(1)"},
{t:"📤 مشاركة التطبيق",x:"أرسل التطبيق لزملائك ليستفيدوا معك. من علّم غيره ثبّت علمه، وأجر العلم يتضاعف بنشره. 🌟",s:".q4>div:nth-child(2)"},
{t:"📈 تقدمي",x:"هنا ترى نسبة إنجازك في __SUB__ ودروسك المنجزة ونتائج اختباراتك. الدرس لا يُحسب مكتملاً إلا بعد أن تنال وسامه، فتحدَّ نفسك كل يوم!",s:".q4>div:nth-child(3)"},
{t:"⚙️ الإعدادات",x:"من هنا تغيّر اللغة والوضع الليلي، وتنزّل التطبيق وتثبّته على شاشة هاتفك، وتعيد هذه الجولة متى شئت.",s:".q4>div:nth-child(4)"},
{t:"🖼️ صورتك الشخصية",x:"اضغط على دائرة صورتك لتختار صورة جاهزة أو من الاستوديو أو تلتقط واحدة بالكاميرا، وتجعل التطبيق تطبيقك أنت.",s:".avh .av"},
{t:"🤖 اسأل كينيكس",x:"عندما يصعب عليك سؤال، اضغط على دائرتي التي تظهر على جانب الشاشة في الاختبارات وأسئلة المراجعة. سأشرح لك الفكرة وطريقة التفكير، أما الحلّ فعليك أنت!",s:null,k:1},
{t:"جاهز للانطلاق؟ 🚀",x:"المذاكرة اليومية القليلة أفضل من الكثيرة المتقطعة. ابدأ بدرس واحد اليوم، وأنا معك في كل خطوة، وإذا أردت العودة إلى بوابة الصحابة التعليمية فهي تنتظرك بجميع موادك. بالتوفيق دائماً! ✨",s:null}];
"""


def rep(s: str, a: str, b: str) -> str:
    assert s.count(a) == 1, (s.count(a), a[:80])
    return s.replace(a, b)


HEAD = r"""<script>
/* تطبيق مستقلّ: التقدّم يُحفظ باسمٍ خاصّ، ويُستورد مرّةً واحدة ما أنجزه الطالب في تطبيق العلوم القديم لهذه المادة فقط */
(function(K,P){
 var G=Storage.prototype.getItem,S=Storage.prototype.setItem,R=Storage.prototype.removeItem;
 function k(x){return typeof x=="string"&&x.slice(0,3)=="pcb"?P+x:x}
 Storage.prototype.getItem=function(x){return G.call(this,k(x))};
 Storage.prototype.setItem=function(x,v){return S.call(this,k(x),v)};
 Storage.prototype.removeItem=function(x){return R.call(this,k(x))};
 window.PCB_K=K;
 try{if(!G.call(localStorage,P+"pcbImp")){
  var g=function(x){try{return JSON.parse(G.call(localStorage,x))}catch(e){return null}},s=function(x,v){S.call(localStorage,P+x,typeof v=="string"?v:JSON.stringify(v))};
  var pr=G.call(localStorage,"pcb");if(pr)s("pcb",pr);
  ["pcbAv","pcbLang","pcbFs"].forEach(function(x){var v=G.call(localStorage,x);if(v!=null)S.call(localStorage,P+x,v)});
  var A=g("pcbA");if(A)s("pcbA",A);
  var L=g("pcbL"),o={},d={};if(L){Object.keys(L).forEach(function(x){if(x.charAt(0)==String(K)||x=="S"+K){o[x]=L[x];if(L[x]&&L[x].b&&x.indexOf(K+"-")==0)d[x]=1}});s("pcbL",o)}
  var U=g("pcbU");if(U){var u={};Object.keys(U).forEach(function(x){if(x.charAt(0)==String(K))u[x]=U[x]});s("pcbU",u)}
  var Pp=g("pcbP"),m=[null,null,null];if(Pp&&Pp.m)m[K]=Pp.m[K];
  s("pcbP",{d:d,m:m});
  S.call(localStorage,P+"pcbImp","1");
 }}catch(e){}
})(__K__,"__P__");
</script>
"""

LOCK = r"""
<script>
/*PCB-SPLIT: يقصر التطبيق على مادةٍ واحدة*/
(function(){var K=window.PCB_K;
 si=K;
 libGo=function(k){libKind=k?"packs":"books";libSubj=K;nav("libi")};
 var _sq0=startQ;startQ=function(b){if(b)return _sq0(b);H=["home"];QSB=K;QCUR=K;V="qlev";draw()};
 window.PCB_KEY=function(k){return k=="AFK"||k=="S"+K||k.charAt(0)==String(K)};
 window.pcbUnitsLine=function(i){var p=PG(),n=0,tl=0,done=0;(DATA[i]||[]).forEach(function(u,ui){var c=0;(u||[]).forEach(function(x,li){tl++;if(p.d[i+"-"+ui+"-"+li]){c++;done++}});if((u||[]).length&&c==(u||[]).length)n++});
  return n+" من "+U[i].length+" وحدات مكتملة • "+(tl?Math.round(done*100/tl):0)+"%"};
 try{var pp=JSON.parse(localStorage.getItem("sahaba-portal-profile")||"null");if(pp&&!nm&&pp.first)nm=[pp.first,pp.father,pp.family].filter(Boolean).join(" ")}catch(e){}
 try{var ac=function(){var p=PG(),L=lsGet(),cert=[],bd=[],tl=0,dn=0,un=0;(DATA[K]||[]).forEach(function(u,ui){var c=0;(u||[]).forEach(function(x,li){tl++;if(p.d[K+"-"+ui+"-"+li]){c++;dn++}});if((u||[]).length&&c==(u||[]).length)un++});
   Object.keys(L).forEach(function(k){if(L[k]&&L[k].b&&(k.indexOf(K+"-")==0||k=="S"+K)){var ls=lessonOf(k);bd.push({i:"🏅",t:ls&&ls.t?ls.t:k})}});
   if(L["S"+K]&&L["S"+K].b)cert.push({t:"إتمام مادة "+["الفيزياء","الكيمياء","الأحياء"][K],d:new Date(L["S"+K].b).toLocaleDateString("ar")});
   localStorage.setItem("sahaba-ach:__DIR__/10",JSON.stringify({pct:tl?Math.round(dn*100/tl):0,units:{done:un,total:U[K].length},certs:cert,badges:bd,updated:new Date().toISOString()}))};
  ac();var _d9=draw;draw=function(){_d9();try{ac()}catch(e){}}}catch(e){}
})();
</script>
"""

SW = r'''/* عامل خدمة __NAME__: يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (__PRE__). الملفّات الثقيلة من science/10. */
const P = "__PRE__";
const V = P + "v5";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "../../science/10/icons/icon-192.png", "../../science/10/icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (/\.mp4$/.test(r.url)) { e.respondWith(videoFromCache(r).catch(() => fetch(r))); return; }
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: النسخة المحفوظة فوراً ثم تحديثها في الخلفية (لا انتظار للشبكة) */
    e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m || caches.match("./index.html")); return m || net; }));
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
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

/* العمل بلا إنترنت: بعد أول فتح تطلب الصفحة تخزين الملفات (القائمة في precache.json)؛ ما خُزّن في أيّ تطبيقٍ علميٍّ آخر لا يُنزَّل مرّتين */
async function precacheAll() {
  const c = await caches.open(V);
  let list = [];
  try { list = (await (await fetch("./precache.json", { cache: "no-store" })).json()).files; } catch (e) { return; }
  const todo = [];
  for (const u of list) if (!(await caches.match(u))) todo.push(u);
  const total = list.length;
  let done = total - todo.length, failed = 0;
  const say = async (type) => { for (const cl of await self.clients.matchAll()) cl.postMessage({ type, done, total, failed }); };
  await say("precache-progress");
  let i = 0;
  await Promise.all(Array.from({ length: 2 }, async () => {
    while (i < todo.length) {
      const u = todo[i++];
      try { const r = await fetch(u, { cache: "reload" }); if (r.ok) await c.put(u, r); else failed++; } catch (e) { failed++; }
      done++; if (done % 6 === 0) await say("precache-progress");
    }
  }));
  await say("precache-done");
}
self.addEventListener("message", e => { if (e.data && e.data.type === "precache") e.waitUntil(precacheAll()); });

/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت على الشاشة الرئيسية): فحصٌ دوريّ لنسخة الصفحة */
const UPD = "upd-__DIR__10";
self.addEventListener("periodicsync", e => { if (e.tag === "check-update") e.waitUntil(checkUpdate()); });
async function checkUpdate() { try { const r = await fetch("./index.html", { cache: "no-store" }); const sig = [r.headers.get("etag"), r.headers.get("last-modified"), r.headers.get("content-length")].join("|");
  const c = await caches.open(UPD), old = await c.match("sig"), was = old ? await old.text() : null; await c.put("sig", new Response(sig));
  if (was && was !== sig) await self.registration.showNotification("تحديث جديد · __NAME__", { body: "صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.", icon: "../../science/10/icons/icon-192.png", tag: "app-update", dir: "rtl", lang: "ar" }); } catch (e) {} }
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(l => { for (const c of l) { if ("focus" in c) return c.focus(); } return self.clients.openWindow("./"); })); });
'''


def make(k, d, name, store, pre, color):
    s = (SRC_DIR / "index.html").read_text(encoding="utf-8")
    # 1) الملفّات الثقيلة تُقرأ من science/10
    s = re.sub(r"""(["'(])(images|videos|lib|fonts|lessons|books|icons)/""", lambda m: m.group(1) + SHARED + m.group(2) + "/", s)
    # 2) عنوان التطبيق
    s = re.sub(r"<title>.*?</title>", f"<title>{name} — الصف العاشر</title>", s, count=1, flags=re.S)
    # 3) التخزين المستقلّ أوّل شيءٍ في الصفحة
    i = s.index("<head>")
    assert i < 600, i   # رأس الصفحة الحقيقي لا نصٌّ داخل المحتوى
    s = s[:i] + "<head>\n" + HEAD.replace("__K__", str(k)).replace("__P__", store) + s[i + len("<head>"):]
    # 4) البطاقة الرئيسية: مادّةٌ واحدة بتقدّمها الحقيقي
    s = rep(s, "t.sub.map(function(s,i){return'<div class=\"sc im\"", "t.sub.map(function(s,i){if(i!=window.PCB_K)return\"\";return'<div class=\"sc im\"")
    assert s.count("<small>'+U[i].length+' '+t.units+'</small>") >= 1
    s = s.replace("<small>'+U[i].length+' '+t.units+'</small>", "<small>'+pcbUnitsLine(i)+'</small>")
    # 5) شاشة البداية: المادة وحدها
    s = rep(s, "IC.map(function(e,i){return '<div><div class=\"cir\">'+e+'</div><div class=\"cl\">'+t.sub[i]+'</div></div>'})", "IC.map(function(e,i){if(i!=window.PCB_K)return\"\";return '<div><div class=\"cir\">'+e+'</div><div class=\"cl\">'+t.sub[i]+'</div></div>'})")
    # 6) تقدّمي: المادة وحدها
    s = rep(s, "dn=Object.keys(p.d).length,qd=p.m.filter(function(x){return x!=null}).length,hi=p.m.filter(function(x){return x!=null&&x>=7}).length,tot=0;",
            "dn=Object.keys(p.d).filter(function(k){return k.indexOf(window.PCB_K+\"-\")==0}).length,qd=[p.m[window.PCB_K]].filter(function(x){return x!=null}).length,hi=[p.m[window.PCB_K]].filter(function(x){return x!=null&&x>=7}).length,tot=0;")
    s = rep(s, "(DATA||[]).forEach(function(s){(s||[]).forEach(function(u){tot+=(u||[]).length})});\nvar pc=tot?", "[DATA[window.PCB_K]].forEach(function(s){(s||[]).forEach(function(u){tot+=(u||[]).length})});\nvar pc=tot?")
    s = rep(s, "nm3.forEach(function(n,i){h+='<div class=\"sh\"", "nm3.forEach(function(n,i){if(i!=window.PCB_K)return;h+='<div class=\"sh\"")
    # 7) مكتبة الأوسمة: أوسمة هذه المادة وحدها
    s = rep(s, "ks=Object.keys(o).filter(function(k){return k!=\"AFKU\"&&o[k].b&&(", "ks=Object.keys(o).filter(function(k){return k!=\"AFKU\"&&PCB_KEY(k)&&o[k].b&&(")
    s = rep(s, "tot=0;DATA.forEach(function(s){(s||[]).forEach(function(u){tot+=(u||[]).length})});\nvar h='<h3 class=\"blh\">", "tot=0;[DATA[window.PCB_K]].forEach(function(s){(s||[]).forEach(function(u){tot+=(u||[]).length})});\nvar h='<h3 class=\"blh\">")
    # 7ب) جولة كينيكس خاصّة بالمادة (الجولة نفسها وتصميمها كما في تطبيق العلوم)
    m = re.search(r"var STEPS=\[.*?\];\n(?=window\.KXMS)", s, re.S)
    assert m and s.count("var STEPS=[") == 1
    s = s[:m.start()] + STEPS_TPL.strip().replace("__SUB__", name) + "\n" + s[m.end():]
    # 7ب2) زرّ العودة إلى بوابة الصحابة في القائمة الجانبية
    s = rep(s, """$("menu").innerHTML='<h2>'+t.menu+'</h2><div class="mi" onclick="tl()">""", """$("menu").innerHTML='<h2>'+t.menu+'</h2><div class="mi" onclick="location.href=\\'../../index.html\\'"><span>🏠 بوابة الصحابة التعليمية</span></div><div class="mi" onclick="tl()">""")
    # 7ج) غلاف المادة: صورةٌ فقط ثم «ابدأ الآن»
    assert s.count("<body>") == 1
    s = s.replace("<body>", "<body>\n<script src=\"../../shared/intro.js\"></script>\n<script>SahabaIntro.cover({id:\"" + d + "10\",cover:\"../../shared/covers/" + d + ".webp\"},function(){})</script>", 1)
    # 8) طبقة القفل في آخر الصفحة
    s = rep(s, "</body>", LOCK.replace("__DIR__", d) + '<script src="../../shared/update-notify.js" data-app="' + name + '" data-icon="../../science/10/icons/icon-192.png" defer></script>\n</body>')
    out = ROOT / d / "10"
    out.mkdir(parents=True, exist_ok=True)
    (out / "index.html").write_text(s, encoding="utf-8")
    # manifest
    mf = json.loads((SRC_DIR / "manifest.webmanifest").read_text(encoding="utf-8"))
    mf["name"] = f"{name} — الصف العاشر"
    mf["short_name"] = name
    mf["start_url"] = "./"
    mf["scope"] = "./"
    mf["theme_color"] = color
    for ic in mf.get("icons", []):
        ic["src"] = SHARED + ic["src"].lstrip("./")
    (out / "manifest.webmanifest").write_text(json.dumps(mf, ensure_ascii=False, indent=2), encoding="utf-8")
    # عامل الخدمة
    (out / "sw.js").write_text(SW.replace("__PRE__", pre).replace("__NAME__", name).replace("__DIR__", d), encoding="utf-8")
    # قائمة التخزين: دروس هذه المادة + كلّ الصور والمكتبات والخطوط والفيديو (من science/10)
    lessons = set(re.findall(r'"lessons/([\w.-]+\.html)"', s.replace(SHARED, "")))
    # الدروس المسندة إلى مادةٍ بعينها حسب مفاتيح LX («k-u»)
    lx = re.search(r"var LX=(\{.*?\});", (SRC_DIR / "index.html").read_text(encoding="utf-8"), re.S)
    mine = set()
    if lx:
        for key, v in json.loads(lx.group(1)).items():
            if key.split("-")[0] == str(k):
                for x in (v if isinstance(v, list) else [v]):
                    mine.add(Path(x).name)
    files = ["./index.html", "./manifest.webmanifest"]
    for sub in ("images", "lib", "fonts", "videos", "books", "icons"):
        for p in sorted((SRC_DIR / sub).glob("*")):
            if p.is_file():
                files.append(f"{SHARED}{sub}/{p.name}")
    files += [f"{SHARED}lessons/{n}" for n in sorted(mine)]
    files += ["../../shared/update-notify.js", "../../shared/intro.js", f"../../shared/covers/{d}.webp"]
    (out / "precache.json").write_text(json.dumps({"files": files}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    print(f"✔ {d}/10 — {len(files)} ملفاً في قائمة التخزين، {len(mine)} درساً")


if __name__ == "__main__":
    for a in APPS:
        make(*a)
