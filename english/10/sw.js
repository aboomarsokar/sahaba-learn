/* عامل خدمة اللغة الإنجليزية: يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (lex10-). */
const P = "lex10-";
const V = P + "v43";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png",
  "./images/logo.jpg", "./images/certificate.jpg", "./data/lessons.js", "./data/practice.js", "./data/rulecards.js", "./data/highlights.js", "./data/summaries-u1.js", "./data/summaries-u2.js", "./data/summaries-u3.js", "./data/summaries-u4.js", "./data/summaries-u5.js", "./data/summaries-u6.js", "./data/summaries-u7.js", "./data/summaries-u8.js", "./data/summaries-u9.js", "./data/summaries-u10.js",
  "./fonts/aref-ruqaa-arabic-700.woff2", "./fonts/cinzel-latin-700.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (r.cache === "no-store") return;                              /* فحص التحديث: يذهب إلى الشبكة مباشرةً */
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً بمهلة 2.5 ثانية ثم النسخة المحفوظة (تحديثٌ سليم وبلا انتظارٍ طويل) */
    e.respondWith((async () => { const hit = await caches.match(r, { ignoreSearch: true }), cached = hit && !hit.redirected ? hit : null; const net = fetch(r).then(x => { if (x.ok && !x.redirected) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }); if (!cached) return net.catch(() => caches.match("./index.html")); return Promise.race([net.catch(() => cached), new Promise(res => setTimeout(() => res(cached), 2500))]); })());
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});

/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت على الشاشة الرئيسية): فحصٌ دوريّ لنسخة الصفحة */
const UPD='upd-english10';
self.addEventListener('periodicsync',e=>{if(e.tag==='check-update')e.waitUntil(checkUpdate())});
async function checkUpdate(){try{const r=await fetch('./index.html',{cache:'no-store'});const sig=[r.headers.get('etag'),r.headers.get('last-modified'),r.headers.get('content-length')].join('|');
const c=await caches.open(UPD),old=await c.match('sig'),was=old?await old.text():null;await c.put('sig',new Response(sig));
if(was&&was!==sig)await self.registration.showNotification('تحديث جديد · اللغة الإنجليزية',{body:'صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.',icon:'./icons/icon-192.png',tag:'app-update',dir:'rtl',lang:'ar'})}catch(e){}}
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});

/* العمل بلا إنترنت: بعد أول فتح تطلب الصفحة تخزين كلّ ملفات التطبيق (القائمة في precache.json) */
async function precacheAll() {
  const c = await caches.open(V);
  let list = [];
  try { list = (await (await fetch("./precache.json", { cache: "no-store" })).json()).files; } catch (e) { return; }
  const todo = [];
  for (const u of list) if (!(await c.match(u))) todo.push(u);
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
