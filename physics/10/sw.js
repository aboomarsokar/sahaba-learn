/* تطبيقٌ مُتقاعد: يمسح ذاكرته القديمة ويُلغي تسجيل عامل الخدمة */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (/^(phy10-|che10-|bio10-|pcb-)/.test(k)) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll()) try { c.navigate(c.url); } catch (e) {}
})()));
