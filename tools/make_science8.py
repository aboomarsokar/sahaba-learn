"""يولّد تطبيق العلوم العامة للصف الثامن (science/8) بواجهةٍ جديدة من القالب tools/science8_app.html.

الاستعمال:   python3 tools/make_science8.py
المصدر:      tools/content8/{biology,physics,chemistry}.json (محتوى رزمة «العلوم والحياة») + tools/content8/links.json
المخرجات مولَّدة في science/8/ ولا تُعدَّل يدوياً: غيّر القالب أو ملفّات المحتوى وأعد التوليد.
المخطّط: tools/content8/SCHEMA.md ، والتحقّق: tools/content8/check.py
"""
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
C8 = ROOT / "tools" / "content8"
# وحدات الرزمة مرتّبة: (المصدر، فهرس الوحدة، مفتاح الأيقونة، لون البطاقة)
ORDER = [("biology", 0, "cell", "#8fd3fb"), ("biology", 1, "split", "#f9b8d0"), ("physics", 0, "bolt", "#f7e18a"), ("chemistry", 0, "atom", "#b9bdf7"),
         ("chemistry", 1, "mol", "#8fe0cf"), ("chemistry", 2, "flask", "#fbc473"), ("physics", 1, "wave", "#a7c8f5"), ("biology", 2, "plant", "#b3df8c")]

SW = '''/* عامل خدمة العلوم العامة (الثامن): يعمل بعد أول زيارة بلا إنترنت. يحذف ذاكرته وحدها (sci8-). */
const P = "sci8-";
const V = P + "v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "../../shared/icons/portal-192.png", "../../shared/icons/portal-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(P) && k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || !r.url.startsWith(self.location.origin)) return;
  if (r.cache === "no-store") return;
  if (r.mode === "navigate" || r.destination === "document") {
    e.respondWith((async () => { const hit = await caches.match(r, { ignoreSearch: true }), cached = hit && !hit.redirected ? hit : null; const net = fetch(r).then(x => { if (x.ok && !x.redirected) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }); if (!cached) return net.catch(() => caches.match("./index.html")); return Promise.race([net.catch(() => cached), new Promise(res => setTimeout(() => res(cached), 2500))]); })());
    return;
  }
  e.respondWith(caches.match(r).then(m => { const net = fetch(r).then(x => { if (x.ok) { const c = x.clone(); caches.open(V).then(ch => ch.put(r, c)); } return x; }).catch(() => m); return m || net; }));
});
async function precacheAll() {
  const c = await caches.open(V);
  let list = [];
  try { list = (await (await fetch("./precache.json", { cache: "no-store" })).json()).files; } catch (e) { return; }
  for (const u of list) { if (!(await c.match(u))) { try { const r = await fetch(u, { cache: "reload" }); if (r.ok) await c.put(u, r); } catch (e) {} } }
}
self.addEventListener("message", e => { if (e.data && e.data.type === "precache") e.waitUntil(precacheAll()); });
'''


def main() -> None:
    src = {x: json.load(open(C8 / f"{x}.json", encoding="utf-8")) for x in ("physics", "chemistry", "biology")}
    units = []
    for s, i, ic, col in ORDER:
        u = src[s]["units"][i]
        units.append({"title": u["title"], "ic": ic, "color": col, "uq": u["unit_quiz"],
                      "lessons": [{"t": l["t"], "e": l["e"], "q": l["q"], "quiz": l["quiz"], "hints": l.get("hints", {})} for l in u["lessons"]]})
    links = json.load(open(C8 / "links.json", encoding="utf-8"))
    data = {"units": units, "pack": links["science"]}
    out = ROOT / "science" / "8"
    shutil.rmtree(out, ignore_errors=True)
    out.mkdir(parents=True)
    html = (ROOT / "tools" / "science8_app.html").read_text(encoding="utf-8")
    assert html.count("/*DATA*/") == 1
    html = html.replace("/*DATA*/", "window.SCI=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";")
    (out / "index.html").write_text(html, encoding="utf-8")
    (out / "manifest.webmanifest").write_text(json.dumps({
        "name": "العلوم العامة — الصف الثامن", "short_name": "العلوم", "lang": "ar", "dir": "rtl", "start_url": "./", "scope": "./", "display": "standalone",
        "background_color": "#FAF6EB", "theme_color": "#113D2E",
        "icons": [{"src": "../../shared/icons/portal-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
                  {"src": "../../shared/icons/portal-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]}, ensure_ascii=False, indent=2), encoding="utf-8")
    (out / "sw.js").write_text(SW, encoding="utf-8")
    files = ["./index.html", "./manifest.webmanifest", "../../shared/durra.js", "../../shared/wisdom.js", "../../shared/intro.js", "../../shared/kinex.jpg",
             "../../shared/update-notify.js", "../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf",
             "../../shared/icons/portal-192.png", "../../shared/icons/portal-512.png"]
    (out / "precache.json").write_text(json.dumps({"files": files}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    n = sum(len(u["lessons"]) for u in units)
    print(f"▶ العلوم العامة (8): {len(units)} وحدات، {n} دروس، {(out / 'index.html').stat().st_size // 1024} ك.ب")


if __name__ == "__main__":
    main()
