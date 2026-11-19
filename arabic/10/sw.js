/* عامل خدمة اللغة العربية (العاشر): يعمل التطبيق بعد أول زيارة حتى بلا إنترنت. يحذف ذاكرته وحدها (ara10-). */
const P = "ara10-";
const V = P + "v26";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./data/curriculum.js", "./data/dict.js", "./data/wisdom.js", "./data/quiz.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;   /* الروابط الخارجية (Drive) تمرّ كما هي */
  if (r.cache === "no-store") return;                              /* فحص التحديث: يذهب إلى الشبكة مباشرةً */
  const isDoc = r.mode === "navigate" || r.destination === "document";
  if (isDoc) {                                                     /* الصفحة: الشبكة أولاً بمهلة 2.5 ثانية ثم النسخة المحفوظة */
    e.respondWith((async () => { const hit = await caches.match(r, { ignoreSearch: true }), cached = hit && !hit.redirected ? hit : null; const net = fetch(r).then(x => { if (x.ok && !x.redirected) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }); if (!cached) return net.catch(() => caches.match("./index.html")); return Promise.race([net.catch(() => cached), new Promise(res => setTimeout(() => res(cached), 2500))]); })());
    return;
  }
  /* بقية الملفات: نعرض المحفوظ فوراً ونحدّثه في الخلفية */
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});

/* العمل بلا إنترنت: بعد أول فتح تطلب الصفحة تخزين الملفات (القائمة في precache.json) بصمت */
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
