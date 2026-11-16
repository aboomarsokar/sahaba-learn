/* عامل خدمة البوابة: تعمل قائمة الصفوف والمواد بلا إنترنت بعد أوّل فتح. يحذف ذاكرته وحدها (portal-).
   لا يتدخّل في صفحات التطبيقات: لكلّ تطبيقٍ عامل خدمته وذاكرته. */
const P = "portal-";
const V = P + "v2";
const CORE = ["./", "./index.html", "./subjects.json", "./shared/fonts/IBMPlexSansArabic-Regular.ttf", "./shared/fonts/IBMPlexSansArabic-Bold.ttf", "./shared/fonts/aref-ruqaa-700.woff2", "./shared/img/splash.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url), base = new URL("./", self.location).pathname;
  if (r.method !== "GET" || u.origin !== self.location.origin) return;
  const rel = u.pathname.slice(base.length);
  if (!(rel === "" || rel === "index.html" || rel === "subjects.json" || rel.startsWith("shared/fonts/") || rel.startsWith("shared/img/"))) return;   /* غير ملفات البوابة: تمرّ كما هي */
  /* الشبكة أولاً (لتصل التحديثات) ثم النسخة المحفوظة عند انقطاع الإنترنت */
  e.respondWith(fetch(r.url, { cache: "reload" }).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match("./index.html"))));
});
