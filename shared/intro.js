/* مدخل التطبيقات: غلاف المادة (صورةٌ فقط، ثم «ابدأ الآن») + جولة كينيكس الموحَّدة.
   الاستعمال:  SahabaIntro.run({id:"math10", cover:"…/math.webp", kinex:"…/kinex.jpg", steps:[…], ready:function(){return true}, onStart:function(){}})
   خطوة الجولة: {t:"العنوان", x:"النص", s:"محدِّد العنصر المُضاء أو null", i:1 للخطوة الافتتاحية}. في النصّ {name} = اسم الطالب الأول. */
(function () {
  var D = document, W = window, tourBusy = false;
  function $(s) { return D.querySelector(s); }
  function st(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function sset(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function ses(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) {} return null; }
  function firstName() { try { var p = JSON.parse(st("sahaba-portal-profile") || "null"); return p && p.first ? p.first : ""; } catch (e) { return ""; } }

  /* موضع زرّ «ابدأ الآن» داخل كلّ صورة: [يسار، أعلى، عرض، ارتفاع] كنسبةٍ من الصورة */
  var HOT = { math: [0.22, 0.775, 0.56, 0.09], physics: [0.24, 0.83, 0.54, 0.11], islamic: [0.23, 0.825, 0.55, 0.12], arabic: [0.15, 0.84, 0.70, 0.11],
    english: [0.23, 0.82, 0.56, 0.12], chemistry: [0.16, 0.815, 0.62, 0.12], biology: [0.23, 0.815, 0.56, 0.125] };
  var CSS = "#shc{position:fixed;inset:0;z-index:2147483000;background:#0b1a1f;overflow:hidden;-webkit-tap-highlight-color:transparent;animation:shin .35s ease;touch-action:manipulation}" +
    "#shc .bg,#shc .mn{position:absolute;inset:0;width:100%;height:100%;display:block;-webkit-user-select:none;user-select:none;pointer-events:none}" +
    "#shc .mn{object-fit:cover;object-position:center}" +
    "#shc .hot{position:absolute;background:transparent;border:0;border-radius:999px;padding:0;cursor:pointer;-webkit-tap-highlight-color:rgba(255,255,255,.25)}" +
    "#shc .hot:active{background:rgba(255,255,255,.18)}" +
    "#shc.out{opacity:0;transition:opacity .35s}@keyframes shin{from{opacity:0}to{opacity:1}}" +
    "#kxt{position:fixed;inset:0;z-index:2147482000;pointer-events:none;direction:rtl;font-family:inherit}" +
    "#kxt .hl{position:absolute;border-radius:16px;border:3px solid #19d3ff;box-shadow:0 0 0 9999px rgba(5,10,25,.72),0 0 22px #19d3ff;transition:all .3s;pointer-events:none}" +
    "#kxt .full{position:absolute;inset:0;background:rgba(5,10,25,.8);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);pointer-events:auto}" +
    "#kxt .tb{position:fixed;left:50%;transform:translateX(-50%);width:calc(100% - 20px);box-sizing:border-box;bottom:calc(10px + env(safe-area-inset-bottom,0px));max-width:460px;background:#fff;color:#1b2a3a;border:2px solid #19d3ff;border-radius:22px;padding:12px 14px 14px;box-shadow:0 10px 34px rgba(0,0,0,.55),0 0 22px rgba(25,211,255,.25);pointer-events:auto;animation:shin .3s ease}" +
    "#kxt .tb.top{bottom:auto;top:calc(10px + env(safe-area-inset-top,0px))}" +
    "#kxt .tb.intro{bottom:auto;top:54%;transform:translate(-50%,-50%);text-align:center;padding:78px 18px 16px}" +
    "#kxt .th{display:flex;align-items:center;gap:10px;margin-bottom:8px}" +
    "#kxt .ms{width:46px;height:46px;flex:none;border-radius:50%;overflow:hidden;background:#0d1630;border:2px solid #19d3ff;box-shadow:0 0 10px rgba(25,211,255,.55)}" +
    "#kxt .ms img,#kxt .big img{width:100%;height:100%;display:block;object-fit:cover}" +
    "#kxt .nm b{display:block;font-family:Arial,sans-serif;font-size:16px;letter-spacing:.8px;color:#19a8d6}#kxt .nm small{display:block;color:#667;font-size:12px}" +
    "#kxt .dt{margin-inline-start:auto;font-size:12px;color:#667}" +
    "#kxt .big{position:absolute;top:-62px;left:50%;margin-left:-62px;width:124px;height:124px;border-radius:50%;overflow:hidden;background:#0d1630;border:4px solid #19d3ff;box-shadow:0 0 30px rgba(25,211,255,.7);animation:kfl 3s ease-in-out infinite}@keyframes kfl{50%{transform:translateY(-6px)}}" +
    "#kxt .nm2{font-family:Arial,sans-serif;font-weight:800;font-size:22px;letter-spacing:1.5px;color:#19a8d6;margin-bottom:2px}" +
    "#kxt .tx b{display:block;color:#1565c0;font-size:17px;margin-bottom:2px}#kxt .tx p{margin:0 0 8px;font-size:14.5px;line-height:1.8}" +
    "#kxt .pgb{height:4px;border-radius:2px;background:rgba(127,127,127,.25);margin:2px 0 10px;overflow:hidden}#kxt .pgb i{display:block;height:100%;background:linear-gradient(90deg,#19d3ff,#1f6fd1);transition:width .3s}" +
    "#kxt .bt{display:flex;gap:8px;align-items:center;justify-content:center}" +
    "#kxt .bt button{border:0;border-radius:12px;padding:10px 18px;font:inherit;font-weight:700;font-size:15px;cursor:pointer;color:#fff;background:linear-gradient(135deg,#19a8d6,#1f6fd1)}" +
    "#kxt .bt .pv{background:rgba(127,127,127,.18);color:#1b2a3a}#kxt .bt .sk{background:none;color:#667;font-weight:600;padding:10px 8px}" +
    ".kx-replay{display:flex;align-items:center;justify-content:center;gap:8px;margin:14px auto 4px;padding:9px 16px;border:1.5px solid #19d3ff;border-radius:14px;background:rgba(25,211,255,.08);color:inherit;font:inherit;font-weight:700;font-size:14px;cursor:pointer}" +
    ".kx-replay img{width:26px;height:26px;border-radius:50%;object-fit:cover}";

  function css() { if ($("#sh-intro-css")) return; var e = D.createElement("style"); e.id = "sh-intro-css"; e.textContent = CSS; D.head.appendChild(e); }

  function vis(el) { if (!el) return false; var r = el.getBoundingClientRect(); return r.width > 4 && r.height > 4; }
  function pick(sel) { if (!sel) return null; var l = [].concat(sel); for (var i = 0; i < l.length; i++) { var e = null; try { e = D.querySelector(l[i]); } catch (x) {} if (vis(e)) return e; } return null; }
  function sub(s) { var n = ""; try { n = (cur && cur.userName && cur.userName()) || ""; } catch (e) {} return String(s || "").split("{name}").join(n || firstName() || "يا صديقي").replace("يا يا صديقي", "يا صديقي"); }

  /* ===== الغلاف ===== */
  function cover(o, done) {
    if (!o.cover || ses("sahaba-cover:" + o.id) === "1") { done(); return; }
    css();
    var c = D.createElement("div"); c.id = "shc"; c.setAttribute("aria-label", "ابدأ الآن");
    var im = D.createElement("img"); im.className = "mn"; im.alt = ""; im.draggable = false;
    var hot = D.createElement("button"); hot.type = "button"; hot.className = "hot"; hot.setAttribute("aria-label", "ابدأ الآن");
    var bg = D.createElement("img"); bg.className = "bg"; bg.alt = ""; bg.draggable = false; bg.style.cssText = "object-fit:cover;filter:blur(26px) brightness(.8);transform:scale(1.12)";
    c.appendChild(bg); c.appendChild(im); c.appendChild(hot);
    var fin = false;
    /* الصورة تملأ شاشة الجهاز، وزرّ «ابدأ الآن» المرسوم فيها هو وحده المنطقة القابلة للّمس */
    var key = (String(o.cover).split("/").pop() || "").replace(/\.\w+$/, ""), H = HOT[key] || [0.2, 0.82, 0.6, 0.12];
    function lay() {
      var W = c.clientWidth || innerWidth, Hh = c.clientHeight || innerHeight, iw = im.naturalWidth, ih = im.naturalHeight; if (!iw) return;
      var wide = W / Hh > iw / ih;   /* الشاشة أعرض من الصورة (حاسوب/تابلت): نعرض الصورة كاملة بلا قصّ ليبقى زرّ «ابدأ الآن» ظاهراً */
      im.style.objectFit = wide ? "contain" : "cover";
      var k = wide ? Math.min(W / iw, Hh / ih) : Math.max(W / iw, Hh / ih), dw = iw * k, dh = ih * k, ox = (W - dw) / 2, oy = (Hh - dh) / 2;
      hot.style.left = (ox + H[0] * dw) + "px"; hot.style.top = (oy + H[1] * dh) + "px"; hot.style.width = (H[2] * dw) + "px"; hot.style.height = (H[3] * dh) + "px";
    }
    function go() { if (fin) return; fin = true; ses("sahaba-cover:" + o.id, "1"); c.classList.add("out"); setTimeout(function () { if (c.parentNode) c.parentNode.removeChild(c); }, 360); removeEventListener("resize", lay); try { o.onStart && o.onStart(); } catch (e) {} done(); }
    /* إن تعذّر تحميل الصورة لا نترك شاشةً فارغة: ندخل التطبيق مباشرةً */
    im.onerror = function () { if (!fin) go(); };
    im.onload = lay; addEventListener("resize", lay);
    setTimeout(function () { if (!fin && !(im.complete && im.naturalWidth)) go(); }, 6000);
    hot.addEventListener("click", function (e) { e.stopPropagation(); go(); });
    im.src = o.cover; bg.src = o.cover;
    (D.body || D.documentElement).appendChild(c);
  }

  /* ===== الجولة ===== */
  var cur = null, idx = 0;
  function seen(o) { return !!(st("kx-tour:" + o.id) || ses("kx-tour:" + o.id)); }
  function mark(o) { sset("kx-tour:" + o.id, "1"); ses("kx-tour:" + o.id, "1"); }
  function pos() {
    var s = cur.steps[idx], t = $("#kxt"); if (!t) return;
    var hl = t.querySelector(".hl"), fu = t.querySelector(".full"), tb = t.querySelector(".tb"), el = pick(s.s);
    if (el) { try { el.scrollIntoView({ block: "center" }); } catch (e) {} var r = el.getBoundingClientRect(); hl.style.display = "block"; fu.style.display = "none"; hl.style.left = (r.left - 4) + "px"; hl.style.top = (r.top - 4) + "px"; hl.style.width = (r.width + 8) + "px"; hl.style.height = (r.height + 8) + "px"; tb.classList.toggle("top", r.top > innerHeight * 0.45); }
    else { hl.style.display = "none"; fu.style.display = "block"; tb.classList.remove("top"); }
  }
  function draw() {
    var t = $("#kxt"); if (!t) return;
    var s = cur.steps[idx], n = cur.steps.length, last = idx === n - 1, first = idx === 0, tb = t.querySelector(".tb"), K = cur.kinex;
    tb.classList.toggle("intro", !!s.i);
    tb.innerHTML = (s.i ? '<div class="big"><img alt="" src="' + K + '"></div><div class="nm2">Kinex</div>'
      : '<div class="th"><div class="ms"><img alt="" src="' + K + '"></div><div class="nm"><b>Kinex</b><small>كينيكس • مساعدك الذكي</small></div><span class="dt" dir="ltr">' + (idx + 1) + ' / ' + n + '</span></div>') +
      '<div class="tx"><b>' + sub(s.t) + '</b><p>' + sub(s.x) + '</p></div><div class="pgb"><i style="width:' + Math.round((idx + 1) * 100 / n) + '%"></i></div>' +
      '<div class="bt">' + (idx > 0 ? '<button class="pv" data-a="p">› السابق</button>' : '') + '<button data-a="n">' + (first ? "ابدأ الجولة ‹" : last ? "ابدأ الآن 🚀" : "التالي ‹") + '</button>' + (last ? "" : '<button class="sk" data-a="e">تخطي</button>') + '</div>';
    setTimeout(pos, 60);
  }
  function end() { if (cur) mark(cur); var t = $("#kxt"); if (t) t.remove(); tourBusy = false; try { W.scrollTo(0, 0); } catch (e) {} var f = cur && cur.onEnd; cur = null; if (f) try { f(); } catch (e) {} }
  function tour(o) {
    if (tourBusy || !o.steps || !o.steps.length) return; css(); tourBusy = true; cur = o; idx = 0;
    var t = D.createElement("div"); t.id = "kxt"; t.innerHTML = '<div class="full"></div><div class="hl" style="display:none"></div><div class="tb"></div>';
    t.addEventListener("click", function (e) { var tg = e.target && e.target.closest ? e.target.closest("[data-a]") : null, a = tg && tg.getAttribute("data-a"); if (!a) return; if (a === "n") { if (idx >= cur.steps.length - 1) end(); else { idx++; draw(); } } else if (a === "p") { if (idx > 0) { idx--; draw(); } } else end(); });
    D.body.appendChild(t); draw();
    if (o.onStartTour) try { o.onStartTour(); } catch (e) {}
  }
  function wait(o) {
    if (seen(o)) return;
    var n = 0, iv = setInterval(function () {
      if (seen(o) || ++n > 600) { clearInterval(iv); return; }
      if ($("#shc") || $("#kxt")) return;
      var ok = true; try { ok = o.ready ? !!o.ready() : true; } catch (e) {}
      if (ok) { clearInterval(iv); setTimeout(function () { if (!seen(o) && !$("#shc")) tour(o); }, 700); }
    }, 500);
  }
  function run(o) {
    css();
    cover(o, function () { wait(o); });
  }
  /* زرّ «أعد جولة كينيكس» يُضاف إلى حاويةٍ في التطبيق */
  function replay(o, parent, label) {
    if (!parent || parent.querySelector(".kx-replay")) return; css();
    var b = D.createElement("button"); b.type = "button"; b.className = "kx-replay"; b.innerHTML = '<img alt="" src="' + o.kinex + '"><span>' + (label || "أعد جولة كينيكس") + '</span>';
    b.addEventListener("click", function () { tour(o); }); parent.appendChild(b);
  }
  W.SahabaIntro = { run: run, tour: tour, cover: cover, replay: replay, seen: seen };
})();
