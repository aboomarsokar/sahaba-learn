/* دُرّة: محفظة واحدة ومتجر واحد لكل مواد بوابة الصحابة التعليمية.
   الحالة في localStorage['sahaba-durra'] على الجهاز نفسه. يُحمَّل في كلّ تطبيق: Durra.init({dir, vars(theme) , frames:'<محدّد>' , dark:false})
   الكسب: يراقب sahaba-ach:<dir> (وحدة منجزة +٢٠، وسام جديد +١٥، شهادة +٥٠)، ومكافأة دخول يومية +٥، وسلسلة ٧ أيام +٣٠. */
(function (g) {
  var KEY = "sahaba-durra", D = document, R = D.documentElement;
  var THEMES = [
    { id: "emerald", n: "ألوان الصحابة (الأساسي)", price: 0, v: { pri: "#113D2E", pri2: "#0b2c21", bg: "#FAF6EB", bg2: "#F4EDE5", card: "#ffffff", ink: "#113D2E", mut: "#5f7a6e", gold: "#8B4200", gold2: "#a85a14", bd: "#EEE4DB", onpri: "#ffffff", soft: "#E2ECE1" } },
    { id: "royalemerald", n: "الزمردي الملكي", price: 60, v: { pri: "#0b8a5e", pri2: "#064e36", bg: "#f2efe0", bg2: "#e8e4cf", card: "#fffdf6", ink: "#073b2a", mut: "#5b7568", gold: "#a8861f", gold2: "#d4af37", bd: "#e0d7b4", onpri: "#ffffff", soft: "#e6f2ea" } },
    { id: "royalblue", n: "الأزرق الملكي", price: 60, v: { pri: "#1d3f8a", pri2: "#122a63", bg: "#eef2f9", bg2: "#e1e8f4", card: "#ffffff", ink: "#12234a", mut: "#5d6b8a", gold: "#5a6c93", gold2: "#aab6cc", bd: "#d3dbe9", onpri: "#ffffff", soft: "#e4ebf7" } },
    { id: "purple", n: "البنفسجي الراقي", price: 80, v: { pri: "#6b3fa0", pri2: "#4a2a73", bg: "#faf7ff", bg2: "#efe8fa", card: "#ffffff", ink: "#2c1a47", mut: "#74658c", gold: "#8a63c2", gold2: "#b79be0", bd: "#e4daf2", onpri: "#ffffff", soft: "#f0e9fa" } },
    { id: "olive", n: "الزيتي الطبيعي", price: 80, v: { pri: "#6b7a2e", pri2: "#4a5620", bg: "#f5f1e4", bg2: "#ebe6d2", card: "#fffef9", ink: "#2d3412", mut: "#6f7655", gold: "#8f7a3d", gold2: "#b59a5b", bd: "#e1dcc3", onpri: "#ffffff", soft: "#eef0dc" } },
    { id: "night", n: "الليلي", price: 100, dark: true, v: { pri: "#d4af37", pri2: "#f0d58a", bg: "#0c1322", bg2: "#070c17", card: "#151e33", ink: "#eef1f8", mut: "#9aa6c0", gold: "#d4af37", gold2: "#f0d58a", bd: "#27324d", onpri: "#1a1400", soft: "#1c2742" } },
    { id: "sand", n: "الرملي", price: 60, v: { pri: "#8b6b4a", pri2: "#5f4630", bg: "#f3e8d6", bg2: "#e9dbc2", card: "#fff9ee", ink: "#3b2a18", mut: "#836e58", gold: "#a8803a", gold2: "#c9a45c", bd: "#e3d3b8", onpri: "#ffffff", soft: "#f1e6d2" } },
    { id: "turquoise", n: "الفيروزي", price: 80, v: { pri: "#0f9fa0", pri2: "#0a6e70", bg: "#f2fbfb", bg2: "#e0f3f3", card: "#ffffff", ink: "#0a3a3b", mut: "#5b8283", gold: "#0d8283", gold2: "#5fc6c7", bd: "#cfe7e7", onpri: "#ffffff", soft: "#e2f4f4" } }
  ];
  var GEO = "url(\"data:image/svg+xml;utf8," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><g fill='none' stroke='#8a7a3a' stroke-opacity='.17' stroke-width='1.2'><rect x='16' y='16' width='32' height='32'/><rect x='16' y='16' width='32' height='32' transform='rotate(45 32 32)'/></g></svg>") + "\")";
  var BG = [
    { id: "plain", n: "الخلفية الأساسية", price: 0, css: "none" },
    { id: "calm", n: "هادئة فاتحة", price: 30, css: "radial-gradient(circle at 15% 8%,rgba(255,255,255,.75),transparent 55%),radial-gradient(circle at 90% 90%,rgba(255,255,255,.5),transparent 50%)" },
    { id: "geo", n: "هندسية إسلامية", price: 40, css: GEO },
    { id: "emerald", n: "زمردية متدرّجة", price: 50, css: "linear-gradient(180deg,rgba(14,122,85,.20),rgba(14,122,85,0) 60%)" },
    { id: "dunes", n: "كثبان ذهبية", price: 60, css: "linear-gradient(180deg,rgba(201,162,74,.22),rgba(201,162,74,0) 55%),radial-gradient(circle at 80% 100%,rgba(201,162,74,.25),transparent 55%)" }
  ];
  var FRAMES = [
    { id: "plain", n: "بسيط (الأساسي)", price: 0, col: "#8B4200", glow: "none" },
    { id: "silver", n: "فضّي", price: 40, col: "#cfd6e4", glow: "0 0 0 3px rgba(207,214,228,.45)" },
    { id: "emeraldglow", n: "زمردي مضيء", price: 50, col: "#3ddc97", glow: "0 0 14px 3px rgba(61,220,151,.55)" },
    { id: "royal", n: "ذهبي مزدوج", price: 70, col: "#f2d675", glow: "0 0 0 3px #b8902f,0 0 0 6px rgba(242,214,117,.5)" }
  ];
  var TITLES = [
    { id: "none", n: "بلا لقب", price: 0 }, { id: "seeker", n: "طالب علمٍ نشيط", price: 25 }, { id: "numbers", n: "فارس الأرقام", price: 35 },
    { id: "streak", n: "صاحب الهمّة العالية", price: 45 }, { id: "star", n: "نجم الصفّ", price: 60 }, { id: "scholar", n: "العالِم الصغير", price: 80 }, { id: "legend", n: "أسطورة الصحابة", price: 150 }
  ];
  var STICKERS = [
    { id: "s1", n: "🌟 نجمة", price: 15 }, { id: "s2", n: "🚀 صاروخ", price: 20 }, { id: "s3", n: "🦅 صقر", price: 25 }, { id: "s4", n: "📚 كتب", price: 20 },
    { id: "s5", n: "🧠 عقل", price: 30 }, { id: "s6", n: "🏆 كأس", price: 50 }, { id: "s7", n: "🔥 شعلة", price: 25 }, { id: "s8", n: "💎 جوهرة", price: 70 }
  ];
  var KINDS = { theme: THEMES, bg: BG, frame: FRAMES, title: TITLES, stk: STICKERS };
  var CFG = { dir: "", vars: null, frames: "", dark: false }, subs = [];

  function def() { return { bal: 0, earned: 0, spent: 0, own: { theme: ["emerald"], bg: ["plain"], frame: ["plain"], title: ["none"], stk: [] }, sel: { theme: "emerald", bg: "plain", frame: "plain", title: "none", stk: [] }, log: [], days: [], seen: {}, mig: {} }; }
  var W = def();
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v) { var d = def(); Object.keys(v).forEach(function (k) { d[k] = v[k]; }); ["own", "sel"].forEach(function (k) { var b = def()[k]; Object.keys(b).forEach(function (x) { if (d[k][x] == null) d[k][x] = b[x]; }); }); W = d; } } catch (e) {} }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(W)); } catch (e) {} subs.forEach(function (f) { try { f(); } catch (e) {} }); chips(); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ar(n) { return String(n).replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; }); }
  function item(kind, id) { return KINDS[kind].filter(function (x) { return x.id === id; })[0]; }
  function owned(kind, id) { return W.own[kind].indexOf(id) >= 0; }
  function toast(html) { var o = D.getElementById("drToast"); if (o) o.remove(); var d = D.createElement("div"); d.id = "drToast"; d.style.cssText = "position:fixed;left:50%;bottom:calc(88px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#113D2E;color:#fff;padding:10px 18px;border-radius:999px;font:700 .9rem system-ui,sans-serif;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.3);direction:rtl;white-space:nowrap"; d.innerHTML = html; D.body.appendChild(d); setTimeout(function () { if (d.parentNode) d.remove(); }, 2600); }

  function earn(n, why, quiet) { if (!(n > 0)) return; W.bal += n; W.earned += n; W.log.push({ d: Date.now(), t: why, a: n }); if (W.log.length > 80) W.log.shift(); save(); if (!quiet && D.body) toast("🪙 +" + ar(n) + " دُرّة — " + esc(why)); }
  function buy(kind, id) { var it = item(kind, id); if (!it) return false; if (owned(kind, id)) return true; if (W.bal < it.price) { toast("رصيدك لا يكفي — تحتاج " + ar(it.price - W.bal) + " دُرّة إضافية"); return false; } W.bal -= it.price; W.spent += it.price; W.own[kind].push(id); W.log.push({ d: Date.now(), t: "شراء: " + (it.n || ""), a: -it.price }); select(kind, id, 1); return true; }
  function select(kind, id, noSave) { if (kind === "stk") { var i = W.sel.stk.indexOf(id); if (i >= 0) W.sel.stk.splice(i, 1); else if (W.sel.stk.length < 3) W.sel.stk.push(id); else toast("حدّ أقصى ٣ ملصقات"); } else W.sel[kind] = id; save(); apply(); }

  /* ===== تطبيق المظهر ===== */
  function theme() { return item("theme", W.sel.theme) || THEMES[0]; }
  function apply() {
    var t = theme(), v = t.v, st = R.style;
    if (CFG.vars) { try { var o = CFG.vars(t); Object.keys(o || {}).forEach(function (k) { st.setProperty(k, o[k]); }); } catch (e) {} }
    st.colorScheme = t.dark ? "dark" : "light";
    var m = D.querySelector("meta[name=theme-color]"); if (m) m.setAttribute("content", t.dark ? v.bg : v.bg);
    var bgid = W.sel.bg, b = item("bg", bgid) || BG[0], ov = D.getElementById("drBg");
    if (b.css === "none") { if (ov) ov.remove(); } else { if (!ov) { ov = D.createElement("div"); ov.id = "drBg"; ov.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:-1"; (D.body || R).appendChild(ov); } ov.style.backgroundImage = b.css; ov.style.backgroundSize = b.id === "geo" ? "64px 64px" : "cover"; }
    var f = item("frame", W.sel.frame) || FRAMES[0];
    if (CFG.frames) { try { D.querySelectorAll(CFG.frames).forEach(function (e) { e.style.borderColor = f.col; e.style.boxShadow = f.glow; }); } catch (e) {} }
  }
  function badgeText() { var t = item("title", W.sel.title); return { title: t && t.id !== "none" ? t.n : "", stk: W.sel.stk.map(function (s) { var x = item("stk", s); return x ? x.n.split(" ")[0] : ""; }).join(" ") }; }

  /* ===== الكسب (من ملفّات الإنجاز التي ينشرها كلّ تطبيق) ===== */
  function iso(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function daily() {
    var t = iso(new Date()); if (W.days.indexOf(t) >= 0) return; W.days.push(t); W.days = W.days.slice(-60);
    var s = 0, d = new Date(); while (W.days.indexOf(iso(d)) >= 0) { s++; d.setDate(d.getDate() - 1); }
    earn(5, "مكافأة الدخول اليومية"); if (s > 0 && s % 7 === 0) earn(30, "مواظبة " + ar(s) + " أيام متتالية");
  }
  function watchAll() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i); if (!k || k.indexOf("sahaba-ach:") !== 0) continue;
        var a = JSON.parse(localStorage.getItem(k) || "null"); if (!a) continue;
        var cur = { u: (a.units && a.units.done) || 0, b: (a.badges || []).length, c: (a.certs || []).length }, old = W.seen[k];
        if (!old) { W.seen[k] = cur; continue; }          /* أوّل مرّة: نسجّل خطّ الأساس بلا مكافأة بأثر رجعيّ */
        var gain = Math.max(0, cur.u - old.u) * 20 + Math.max(0, cur.b - old.b) * 15 + Math.max(0, cur.c - old.c) * 50;
        W.seen[k] = cur; if (gain > 0) earn(gain, "إنجازك في " + k.slice(11).split("/")[0]);
      }
    } catch (e) {}
    save();
  }

  /* ===== الشارة الصغيرة (رصيد) ===== */
  function chips() { D.querySelectorAll(".dr-chip b").forEach(function (b) { b.textContent = ar(W.bal); }); }
  function chip(cls) { var b = D.createElement("button"); b.type = "button"; b.className = "dr-chip " + (cls || ""); b.setAttribute("aria-label", "متجر دُرّة"); b.style.cssText = "display:inline-flex;align-items:center;gap:5px;border:1px solid rgba(139,66,0,.35);background:#fff;color:#8B4200;border-radius:999px;padding:4px 11px;font:700 .85rem inherit;cursor:pointer"; b.innerHTML = "<span>🪙</span><b>" + ar(W.bal) + "</b>"; b.onclick = store; return b; }

  /* ===== المتجر ===== */
  var CSS = '<style>#drs{position:fixed;inset:0;z-index:9500;background:var(--drbg,#FAF6EB);color:#113D2E;display:flex;flex-direction:column;direction:rtl;font-family:"Plex Arabic",system-ui,sans-serif}#drs *{box-sizing:border-box}#drs .h{display:flex;align-items:center;gap:10px;padding:12px 14px;background:#fff;border-bottom:1px solid #EEE4DB}#drs .h b{flex:1;font-size:1.1rem}#drs .h button{border:0;background:#EEE4DB;width:38px;height:38px;border-radius:12px;font-size:1.1rem;color:#113D2E}#drs .b{flex:1;overflow:auto;padding:14px;max-width:640px;width:100%;margin:0 auto}#drs .w{background:linear-gradient(120deg,#8B4200,#a85a14);color:#fff;border-radius:20px;padding:16px;display:flex;align-items:center;gap:14px;margin-bottom:12px}#drs .w .n{font-size:2rem;font-weight:700}#drs .w small{opacity:.9}#drs .tabs{display:flex;gap:6px;overflow:auto;margin-bottom:12px}#drs .tabs button{flex:none;border:1.5px solid #EEE4DB;background:#fff;color:#113D2E;border-radius:999px;padding:8px 14px;font:700 .85rem inherit}#drs .tabs button.on{background:#113D2E;color:#fff;border-color:#113D2E}#drs .it{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #EEE4DB;border-radius:16px;padding:12px;margin-bottom:8px}#drs .it .pv{flex:none;display:flex;gap:3px}#drs .it .pv i{width:22px;height:22px;border-radius:50%;border:1px solid #0002}#drs .it .tx{flex:1}#drs .it .tx b{display:block}#drs .it .tx small{color:#5f7a6e}#drs .it button{border:0;border-radius:12px;padding:8px 14px;font:700 .85rem inherit;background:#8B4200;color:#fff}#drs .it button.g{background:#EEE4DB;color:#113D2E}#drs .it button.on{background:#2e9e5b;color:#fff}#drs .how{background:#fff;border:1px dashed #d9c9b2;border-radius:16px;padding:12px;margin-top:12px;font-size:.88rem;line-height:1.9}#drs .how b{color:#8B4200}#drs .lg{font-size:.82rem;color:#5f7a6e;margin-top:6px}</style>';
  var TABS = [["theme", "🎨 الألوان"], ["bg", "🖼️ الخلفيات"], ["frame", "🔲 الإطارات"], ["title", "🏅 الألقاب"], ["stk", "✨ الملصقات"], ["earn", "🪙 كيف أكسب؟"]];
  var curTab = "theme";
  function row(kind, it) {
    var own = owned(kind, it.id), act = kind === "stk" ? W.sel.stk.indexOf(it.id) >= 0 : W.sel[kind] === it.id, pv = "";
    if (kind === "theme") pv = '<span class="pv"><i style="background:' + it.v.pri + '"></i><i style="background:' + it.v.gold + '"></i><i style="background:' + it.v.bg + '"></i></span>';
    else if (kind === "frame") pv = '<span class="pv"><i style="border:3px solid ' + it.col + ';box-shadow:' + it.glow + '"></i></span>';
    else if (kind === "bg") pv = '<span class="pv"><i style="background:' + (it.css === "none" ? "#FAF6EB" : it.css) + ',#FAF6EB"></i></span>';
    var st = act ? "مفعّل الآن ✓" : own ? "مملوك" : ar(it.price) + " دُرّة";
    var btn = own ? (act && kind !== "stk" ? "" : '<button data-a="sel" data-k="' + kind + '" data-i="' + it.id + '" class="' + (act ? "on" : "g") + '">' + (kind === "stk" ? (act ? "إزالة" : "استعمال") : "تفعيل") + "</button>") : '<button data-a="buy" data-k="' + kind + '" data-i="' + it.id + '">شراء</button>';
    return '<div class="it">' + pv + '<span class="tx"><b>' + esc(it.n) + "</b><small>" + st + "</small></span>" + btn + "</div>";
  }
  function store() {
    var o = D.getElementById("drs"); if (o) o.remove();
    var d = D.createElement("div"); d.id = "drs"; d.innerHTML = CSS + '<div class="h"><button aria-label="إغلاق" id="drx">✕</button><b>🪙 متجر دُرّة</b></div><div class="b" id="drb"></div>'; D.body.appendChild(d);
    function draw() {
      var b = D.getElementById("drb"), h = '<div class="w"><span style="font-size:2.2rem">🪙</span><div><div class="n">' + ar(W.bal) + ' دُرّة</div><small>ربحتَ ' + ar(W.earned) + " • أنفقتَ " + ar(W.spent) + "</small></div></div>";
      h += '<div class="tabs">' + TABS.map(function (t) { return '<button data-t="' + t[0] + '" class="' + (curTab === t[0] ? "on" : "") + '">' + t[1] + "</button>"; }).join("") + "</div>";
      if (curTab === "earn") {
        h += '<div class="how"><b>طرق كسب الدُّرّات في كل المواد:</b><br>• 🎓 <b>٢٠</b> دُرّة على كل وحدة تُنجزها<br>• 🏅 <b>١٥</b> دُرّة على كل وسام جديد<br>• 📜 <b>٥٠</b> دُرّة على كل شهادة<br>• 📅 <b>٥</b> دُرّات مكافأة دخول كل يوم<br>• 🔥 <b>٣٠</b> دُرّة عند إكمال ٧ أيام متتالية<br>• ✅ في التربية الإسلامية: دُرّات على الأسئلة والتحدّيات.<br><br>رصيدك واحد لكل المواد، وما تشتريه يظهر في كل التطبيقات.</div>';
        h += '<div class="lg"><b>آخر الحركات</b><br>' + (W.log.slice(-8).reverse().map(function (l) { return (l.a > 0 ? "+" : "") + ar(l.a) + " — " + esc(l.t); }).join("<br>") || "لا حركات بعد") + "</div>";
      } else { h += KINDS[curTab].map(function (it) { return row(curTab, it); }).join(""); }
      b.innerHTML = h;
      b.querySelectorAll("[data-t]").forEach(function (x) { x.onclick = function () { curTab = x.dataset.t; draw(); }; });
      b.querySelectorAll("[data-a]").forEach(function (x) { x.onclick = function () { if (x.dataset.a === "buy") buy(x.dataset.k, x.dataset.i); else select(x.dataset.k, x.dataset.i); draw(); }; });
    }
    D.getElementById("drx").onclick = function () { d.remove(); };
    draw();
  }

  /* ===== تكامل التربية الإسلامية: محفظتها وألوانها هي المشتركة ===== */
  function syncIn(S) {
    if (!W.mig.isl) { W.mig.isl = 1; W.bal += S.coins || 0; W.earned += S.earned || 0; W.spent += S.spent || 0; (S.owned || []).forEach(function (x) { if (W.own.theme.indexOf(x) < 0 && item("theme", x)) W.own.theme.push(x); }); ["bg", "frame"].forEach(function (k) { ((S.own && S.own[k]) || []).forEach(function (x) { if (W.own[k].indexOf(x) < 0 && item(k, x)) W.own[k].push(x); }); if (S.sel && S.sel[k] && item(k, S.sel[k])) W.sel[k] = S.sel[k]; }); if (S.theme && item("theme", S.theme)) W.sel.theme = S.theme; save(); }
    S.coins = W.bal; S.earned = W.earned; S.spent = W.spent; S.owned = W.own.theme.slice(); if (item("theme", W.sel.theme)) S.theme = W.sel.theme;
    S.own = S.own || {}; S.sel = S.sel || {}; ["bg", "frame"].forEach(function (k) { S.own[k] = W.own[k].slice(); S.sel[k] = W.sel[k]; });
  }
  function syncOut(S) { W.bal = S.coins; W.earned = S.earned; W.spent = S.spent; W.own.theme = (S.owned || []).filter(function (x) { return item("theme", x); }); if (item("theme", S.theme)) W.sel.theme = S.theme; ["bg", "frame"].forEach(function (k) { if (S.own && S.own[k]) W.own[k] = S.own[k].slice(); if (S.sel && item(k, S.sel[k])) W.sel[k] = S.sel[k]; }); try { localStorage.setItem(KEY, JSON.stringify(W)); } catch (e) {} chips(); }

  function init(o) {
    CFG = { dir: o.dir || "", vars: o.vars || null, frames: o.frames || "" };
    load();
    function go() { daily(); watchAll(); apply(); chips(); }
    if (D.readyState === "loading") D.addEventListener("DOMContentLoaded", go); else go();
    D.addEventListener("visibilitychange", function () { if (!D.hidden) { load(); watchAll(); apply(); } });
    setInterval(function () { if (!D.hidden) watchAll(); }, 20000);
    window.addEventListener("storage", function (e) { if (e.key === KEY) { load(); apply(); chips(); } });
  }
  g.Durra = { init: init, store: store, chip: chip, earn: earn, buy: buy, apply: apply, badge: badgeText, bal: function () { return W.bal; }, state: function () { load(); return W; }, syncIn: function (S) { load(); syncIn(S); }, syncOut: syncOut, onChange: function (f) { subs.push(f); }, ar: ar, THEMES: THEMES, FRAMES: FRAMES, TITLES: TITLES, STICKERS: STICKERS };
})(window);
