/* عامل خدمة: يجعل التطبيق يعمل بعد أول زيارة حتى بلا إنترنت (النسخة المنشورة فقط) */
const V = "pcb-v3";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("pcb-") && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (r.url.includes("/books/manifest.json")) { e.respondWith(fetch(r).then(x => { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); return x; }).catch(() => caches.match(r))); return; }
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً ثم النسخة المحفوظة */
    e.respondWith(fetch(r).then(x => { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); return x; }).catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
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
