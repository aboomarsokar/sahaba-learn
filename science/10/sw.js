/* عامل خدمة: يجعل التطبيق يعمل بعد أول زيارة حتى بلا إنترنت (النسخة المنشورة فقط) */
const V = "pcb-v5";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("pcb-") && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (r.url.includes("/books/manifest.json")) { e.respondWith(fetch(r).then(x => { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); return x; }).catch(() => caches.match(r))); return; }
  if (/\.mp4$/.test(r.url)) { e.respondWith(videoFromCache(r).catch(() => fetch(r))); return; }
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً ثم النسخة المحفوظة */
    e.respondWith(fetch(r.url, { cache: "reload" }).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match("./index.html"))));
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});

/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت على الشاشة الرئيسية): فحصٌ دوريّ لنسخة الصفحة */
const UPD='upd-science10';
self.addEventListener('periodicsync',e=>{if(e.tag==='check-update')e.waitUntil(checkUpdate())});
async function checkUpdate(){try{const r=await fetch('./index.html',{cache:'no-store'});const sig=[r.headers.get('etag'),r.headers.get('last-modified'),r.headers.get('content-length')].join('|');
const c=await caches.open(UPD),old=await c.match('sig'),was=old?await old.text():null;await c.put('sig',new Response(sig));
if(was&&was!==sig)await self.registration.showNotification('تحديث جديد · العلوم',{body:'صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.',icon:'./icons/icon-192.png',tag:'app-update',dir:'rtl',lang:'ar'})}catch(e){}}
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
  await Promise.all(Array.from({ length: 5 }, async () => {
    while (i < todo.length) {
      const u = todo[i++];
      try { const r = await fetch(u, { cache: "reload" }); if (r.ok) await c.put(u, r); else failed++; } catch (e) { failed++; }
      done++; if (done % 6 === 0) await say("precache-progress");
    }
  }));
  await say("precache-done");
}
self.addEventListener("message", e => { if (e.data && e.data.type === "precache") e.waitUntil(precacheAll()); });

/* الفيديو: المتصفّح يطلبه بنطاقات (Range) فنخدمه من الذاكرة بردّ 206 ليعمل بلا إنترنت */
async function videoFromCache(r) {
  const c = await caches.open(V);
  let full = await c.match(r.url);
  if (!full) { full = await fetch(r.url); if (full.ok) c.put(r.url, full.clone()); }
  const range = r.headers.get("range");
  if (!range || !full.ok) return full;
  const buf = await full.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(range);
  const start = m && m[1] ? +m[1] : 0, end = m && m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), { status: 206, headers: { "Content-Type": "video/mp4", "Accept-Ranges": "bytes",
    "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`, "Content-Length": String(end - start + 1) } });
}
