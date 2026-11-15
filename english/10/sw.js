/* عامل خدمة LEXORA: يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (lex10-). */
const P = "lex10-";
const V = P + "v16";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png",
  "./images/logo.jpg", "./images/certificate.jpg", "./data/lessons.js", "./data/practice.js", "./data/rulecards.js",
  "./data/audio-norm.js", "./data/audio-manifest.js", "./fonts/aref-ruqaa-arabic-700.woff2", "./fonts/cinzel-latin-700.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

/* الصوت: المتصفّح يطلبه بنطاقات (Range) ويحتاج ردّ 206، فنخدمه من الذاكرة بالطريقة نفسها. يُحفظ كلّ مقطع بعد أوّل تشغيل. */
async function audioResponse(r) {
  const c = await caches.open(V);
  let full = await c.match(r.url);
  if (!full) {
    full = await fetch(r.url);
    if (full.ok) c.put(r.url, full.clone());
  }
  const range = r.headers.get("range");
  if (!range || !full.ok) return full;
  const buf = await full.arrayBuffer(), m = /bytes=(\d*)-(\d*)/.exec(range);
  const start = m && m[1] ? +m[1] : 0, end = m && m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
  return new Response(buf.slice(start, end + 1), { status: 206, headers: {
    "Content-Type": "audio/mpeg", "Accept-Ranges": "bytes",
    "Content-Range": `bytes ${start}-${end}/${buf.byteLength}`, "Content-Length": String(end - start + 1) } });
}

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (/\/audio\/(en|ar)\/[^/]+\.mp3$/.test(r.url)) {
    e.respondWith(audioResponse(r).catch(() => fetch(r)));
    return;
  }
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً ثم النسخة المحفوظة */
    e.respondWith(fetch(r).then(x => { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); return x; }).catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});
