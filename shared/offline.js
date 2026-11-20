/* العمل بلا إنترنت (كل التطبيقات والبوابة).
   - SahabaOffline.status(dir) ← {have,total} من ملفّات precache.json المحفوظة فعلاً في الجهاز.
   - SahabaOffline.ensure(dir) يسجّل عامل خدمة التطبيق ويأمره بتخزين ملفّاته.
   - SahabaOffline.download(dirs, cb) يحمّل عدّة تطبيقاتٍ بالتتابع ويُبلغ بالتقدّم.
   - داخل التطبيق: علامةٌ صغيرة على الحافّة اليسرى (✓ جاهز · ⏳ نسبة التحميل · ⚠ المتصفّح لا يدعم). تُعطَّل بالسمة data-no-badge. */
(function (g) {
  var S = document.currentScript || [].slice.call(document.scripts).filter(function (s) { return /offline\.js/.test(s.src); }).pop();
  var ROOT = new URL("../", S ? S.src : location.href).href, RP = new URL(ROOT).pathname;
  var SUP = "serviceWorker" in navigator && "caches" in g && /^https?:/.test(location.protocol);

  function files(dir) {
    return fetch(ROOT + dir + "/precache.json", { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { return j && j.files ? j.files.map(function (f) { return new URL(f, ROOT + dir + "/").href; }) : [ROOT + dir + "/"]; })
      .catch(function () { return null; });
  }
  function status(dir) {
    if (!SUP) return Promise.resolve(null);
    return files(dir).then(function (fs) {
      if (!fs) return null;
      return Promise.all(fs.map(function (u) { return caches.match(u, { ignoreSearch: true }).then(function (m) { return !!m; }, function () { return false; }); }))
        .then(function (a) { return { have: a.filter(Boolean).length, total: fs.length }; });
    });
  }
  function ensure(dir) {
    if (!SUP) return Promise.resolve(false);
    var base = ROOT + dir + "/";
    return navigator.serviceWorker.register(base + "sw.js", { scope: base }).then(function (reg) {
      return new Promise(function (res) {
        function go(w) { try { w.postMessage({ type: "precache" }); } catch (e) {} res(true); }
        if (reg.active && !reg.installing) { go(reg.active); return; }
        var w = reg.installing || reg.waiting;
        if (!w) { res(false); return; }
        if (w.state === "activated") { go(reg.active || w); return; }
        w.addEventListener("statechange", function () { if (w.state === "activated") go(reg.active || w); });
        setTimeout(function () { res(false); }, 20000);
      });
    }).catch(function () { return false; });
  }
  /* يحمّل تطبيقاً ويراقب التقدّم حتى يكتمل أو يتوقّف التقدّم نحو ٤٥ ثانية */
  function one(dir, cb) {
    return ensure(dir).then(function () {
      return new Promise(function (res) {
        var last = -1, still = 0;
        (function poll() {
          status(dir).then(function (st) {
            if (!st) { res(null); return; }
            cb && cb(dir, st);
            if (st.have >= st.total) { res(st); return; }
            still = st.have > last ? 0 : still + 1; last = st.have;
            if (still > 30) { res(st); return; }
            if (navigator.onLine === false) { res(st); return; }
            setTimeout(poll, 1500);
          });
        })();
      });
    });
  }
  function download(dirs, cb) {
    var out = {};
    return dirs.reduce(function (p, d) { return p.then(function () { return one(d, cb).then(function (st) { out[d] = st; }); }); }, Promise.resolve()).then(function () { return out; });
  }
  g.SahabaOffline = { supported: SUP, status: status, ensure: ensure, download: download, root: ROOT };

  /* ---------- العلامة داخل التطبيق ---------- */
  if (S && S.hasAttribute("data-no-badge")) return;
  var dir = location.pathname.slice(RP.length).replace(/index\.html$/, "").replace(/\/$/, "");
  if (!dir || !/^https?:/.test(location.protocol)) return;
  var el, msgT;
  function ui() {
    if (el) return el;
    var st = document.createElement("style");
    st.textContent = "#sahaba-off{position:fixed;left:6px;bottom:calc(92px + env(safe-area-inset-bottom,0px));z-index:2147483000;display:flex;align-items:center;gap:5px;min-width:24px;height:24px;padding:0 7px;border-radius:99px;border:1.5px solid #0e6b3c;background:rgba(255,255,255,.9);color:#0e6b3c;font:700 11px/1 system-ui,Tahoma,sans-serif;opacity:.72;cursor:pointer;direction:rtl;box-shadow:0 1px 4px rgba(0,0,0,.15);max-width:70vw}#sahaba-off.w{border-color:#b8902f;color:#8a6d1f}#sahaba-off.x{border-color:#a24b2b;color:#a24b2b}#sahaba-off span{display:none;white-space:nowrap}#sahaba-off.open span{display:inline}";
    document.head.appendChild(st);
    el = document.createElement("button"); el.id = "sahaba-off"; el.type = "button"; el.setAttribute("aria-label", "حالة العمل بلا إنترنت");
    el.innerHTML = "<b></b><span></span>"; (document.body || document.documentElement).appendChild(el);
    el.onclick = function () { open(true); if (state !== "ok") run(); };
    return el;
  }
  var state = "w", text = "";
  function show(s, icon, t, flash) {
    state = s; text = t; var e = ui(); e.className = s === "ok" ? "" : s === "w" ? "w" : "x";
    e.firstChild.textContent = icon; e.lastChild.textContent = t; e.title = t;
    if (flash) open(true);
  }
  function open(on) { var e = ui(); clearTimeout(msgT); e.classList.add("open"); msgT = setTimeout(function () { e.classList.remove("open"); }, on ? 4500 : 3500); }
  function pct(st) { return Math.round(st.have * 100 / Math.max(1, st.total)); }
  var running = false;
  function run() {
    if (running) return; running = true;
    if (!SUP) { show("x", "⚠", "هذا المتصفح لا يدعم العمل بلا إنترنت — افتح الرابط في متصفح كروم", true); running = false; return; }
    status(dir).then(function (st) {
      if (st && st.have >= st.total) { show("ok", "✓", "جاهز للعمل بلا إنترنت", false); running = false; return; }
      if (navigator.onLine === false) { show("x", "⚠", "التحميل غير مكتمل — افتح التطبيق مع الإنترنت مرة واحدة", true); running = false; return; }
      show("w", "⏳", "جارٍ التجهيز للعمل بلا إنترنت…", false);
      one(dir, function (d, s2) { show("w", "⏳", "جارٍ التجهيز " + pct(s2) + "٪", false); }).then(function (s3) {
        running = false;
        if (s3 && s3.have >= s3.total) show("ok", "✓", "جاهز للعمل بلا إنترنت", true);
        else show("x", "⚠", "لم يكتمل التحميل — تأكّد من الإنترنت ثم اضغط هنا", true);
      });
    });
  }
  function start() { setTimeout(run, 2500); }   /* بعد أن تهدأ الصفحة */
  if (document.readyState === "complete") start(); else addEventListener("load", start);
  addEventListener("online", function () { if (state !== "ok") run(); });
})(window);
