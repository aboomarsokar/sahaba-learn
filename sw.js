/* عامل خدمة البوابة: تعمل قائمة الصفوف والمواد بلا إنترنت بعد أوّل فتح. يحذف ذاكرته وحدها (portal-).
   لا يتدخّل في صفحات التطبيقات: لكلّ تطبيقٍ عامل خدمته وذاكرته. */
const P = "portal-";
const V = P + "v10";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./shared/intro.js", "./shared/update-notify.js", "./shared/kinex.jpg", "./shared/covers/arabic.webp", "./shared/covers/islamic.webp", "./shared/icons/portal-192.png", "./shared/icons/portal-512.png", "./shared/icons/portal-180.png", "./subjects.json", "./shared/logo.webp", "./shared/fonts/IBMPlexSansArabic-Regular.ttf", "./shared/fonts/IBMPlexSansArabic-Bold.ttf", "./shared/fonts/aref-ruqaa-arabic-700.woff2",
  "./shared/grades/g1.webp", "./shared/grades/g2.webp", "./shared/grades/g3.webp", "./shared/grades/g4.webp", "./shared/grades/g5.webp", "./shared/grades/g6.webp", "./shared/grades/g7.webp", "./shared/grades/g8.webp", "./shared/grades/g9.webp", "./shared/grades/g10.webp",
  "./shared/subjects/english.webp", "./shared/subjects/arabic.webp", "./shared/subjects/math.webp", "./shared/subjects/science.webp", "./shared/subjects/islamic.webp", "./shared/subjects/physics.webp", "./shared/subjects/chemistry.webp", "./shared/subjects/biology.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url), base = new URL("./", self.location).pathname;
  if (r.method !== "GET" || u.origin !== self.location.origin) return;
  const rel = u.pathname.slice(base.length);
  if (!(rel === "" || rel === "index.html" || rel === "subjects.json" || rel === "manifest.webmanifest" || rel === "shared/intro.js" || rel === "shared/update-notify.js" || rel === "shared/kinex.jpg" || rel.startsWith("shared/covers/") || rel.startsWith("shared/icons/") || rel.startsWith("shared/grades/") || rel.startsWith("shared/subjects/") || rel === "shared/logo.webp" || rel.startsWith("shared/fonts/"))) return;   /* غير ملفات البوابة: تمرّ كما هي */
  /* النسخة المحفوظة فوراً ثم تحديثها في الخلفية: لا انتظار للشبكة البطيئة */
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m || caches.match("./index.html")); return m || net; }));
});

/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت): فحصٌ دوريّ لنسخة الصفحة */
const UPD = "upd-portal";
self.addEventListener("periodicsync", e => { if (e.tag === "check-update") e.waitUntil(checkUpdate()); });
async function checkUpdate() { try { const r = await fetch("./index.html", { cache: "no-store" }); const sig = [r.headers.get("etag"), r.headers.get("last-modified"), r.headers.get("content-length")].join("|");
  const c = await caches.open(UPD), old = await c.match("sig"), was = old ? await old.text() : null; await c.put("sig", new Response(sig));
  if (was && was !== sig) await self.registration.showNotification("تحديث جديد · بوابة الصحابة التعليمية", { body: "صدرت نسخة جديدة. افتح التطبيق لتحصل على آخر التعديلات.", icon: "shared/icons/portal-192.png" }); } catch (e) {} }
self.addEventListener("notificationclick", e => { e.notification.close(); e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(l => { for (const c of l) { if ("focus" in c) return c.focus(); } return self.clients.openWindow("./"); })); });
