/* عامل خدمة LEXORA: يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (lex10-). */
const P = "lex10-";
const V = P + "v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png",
  "./images/logo.jpg", "./fonts/aref-ruqaa-arabic-700.woff2", "./fonts/great-vibes-latin-400.woff2", "./fonts/cinzel-latin-700.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً ثم النسخة المحفوظة */
    e.respondWith(fetch(r).then(x => { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); return x; }).catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});
