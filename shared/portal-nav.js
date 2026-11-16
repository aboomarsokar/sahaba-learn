/* زر «البوابة» وجولة كينيكس لتطبيقات الصف العاشر (رياضيات / إنجليزي).
   الاستعمال:  <script src="../../shared/portal-nav.js" data-app="math|english" defer></script>
   - زر صغير يعيد الطالب إلى بوابة الصحابة التعليمية (مواد الصف العاشر).
   - زر «؟» يعيد جولة كينيكس، وتظهر الجولة تلقائياً أوّل مرة لكلّ تطبيق. */
(function () {
  var cs = document.currentScript, APP = (cs && cs.dataset.app) || 'app';
  var HOME = (cs && cs.dataset.home) || '../../?home=1&g=10';
  var IMG = (cs && cs.dataset.kinex) || '../../shared/img/kinex.jpg';
  var KEY = 'sahaba-tour:' + APP, BOT = (cs && cs.dataset.bottom) || '14px';
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var TOURS = {
    math: [
      ['أهلاً بك في تطبيق الرياضيات', 'أنا كينيكس. سأعرّفك على أقسام هذا التطبيق وكيف تتنقل بينها وتصل إلى دروسك وأنشطتك واختباراتك.'],
      ['📘 الوحدات', 'في الصفحة الرئيسية أربع وحدات. اضغط على أي وحدة لتفتح دروسها وأنشطتها التفاعلية مرتّبة.'],
      ['🧩 الدروس والأنشطة', 'كل درس نشاط تفاعلي بخطوات واضحة وأمثلة. وفي أعلى الدرس زر 🏠 يعيدك إلى صفحة الوحدات.'],
      ['📝 الاختبارات وأوراق العمل', 'في كل وحدة اختبار شامل وورقة عمل. جرّبها بعد أن تنهي دروس الوحدة لتقيس مستواك.'],
      ['📶 بلا إنترنت', 'تعمل الدروس بلا إنترنت بعد أول فتح، ويُحفظ تقدّمك على هذا الجهاز.'],
      ['🧭 التنقل', 'زر الرجوع في الجوال يرجعك خطوة، وزر «البوابة» أسفل الشاشة يعيدك إلى بوابة الصحابة التعليمية، وزر «؟» يعيد هذه الجولة.'],
      ['جاهز للانطلاق؟ 🚀', 'ابدأ بدرس واحد اليوم، وأنا معك. بالتوفيق دائماً! ✨']
    ],
    english: [
      ['أهلاً بك في LEXORA', 'أنا كينيكس. سأعرّفك على أقسام تطبيق اللغة الإنجليزية وكيف تصل إلى دروسك واختباراتك وإنجازاتك.'],
      ['📚 الوحدات', 'عشر وحدات في فصلين: الفصل الأول (1–5) والفصل الثاني (6–10). اختر وحدة لتفتح دروسها.'],
      ['🧪 Worksheet والاختبارات', 'تدرّب على أوراق العمل، ثم اختبر نفسك في قسم الاختبارات وراجع نتائجك السابقة.'],
      ['🏆 تحدياتي', 'تحدّ نفسك بتحديات يومية وسلسلة متابعة تحافظ على حماسك.'],
      ['👤 ملفي الشخصي', 'فيه قاموسك الخاص، وسجل التعلّم، وإنجازاتك وشهاداتك، وخطة الدراسة.'],
      ['📖 الكتب والرزمة', 'الكتب المدرسية والرزمة التعليمية وتلخيص الوحدات «قريباً».'],
      ['🧭 التنقل', 'زر الرجوع في الجوال يرجعك خطوة، وزر «البوابة» يعيدك إلى بوابة الصحابة التعليمية، وزر «؟» يعيد هذه الجولة.'],
      ['جاهز للانطلاق؟ 🚀', 'ابدأ بدرس واحد اليوم، وأنا معك. Good luck!']
    ]
  };
  var steps = TOURS[APP] || [];

  var css = document.createElement('style');
  css.textContent =
    '#sbNav{position:fixed;z-index:2147482000;left:12px;bottom:calc(' + BOT + ' + env(safe-area-inset-bottom,0px));display:flex;gap:8px;direction:rtl;font-family:"Plex Arabic",system-ui,sans-serif}' +
    '#sbNav button{display:flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.35);background:rgba(18,60,70,.92);color:#fff;border-radius:999px;padding:8px 14px;font:700 13px/1.2 inherit;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35)}' +
    '#sbNav button svg{width:18px;height:18px}#sbNav .q{padding:8px 13px}' +
    '#sbTour{position:fixed;inset:0;z-index:2147483200;background:rgba(0,0,0,.62);display:flex;align-items:flex-end;justify-content:center;padding:14px;direction:rtl;font-family:"Plex Arabic",system-ui,sans-serif}' +
    '#sbTour .c{position:relative;width:100%;max-width:460px;background:#F9F5EE;color:#2A2016;border:2px solid #19d3ff;border-radius:22px;padding:56px 18px 16px;box-shadow:0 14px 40px rgba(0,0,0,.5);margin-bottom:4vh}' +
    '#sbTour .k{position:absolute;top:-38px;left:50%;transform:translateX(-50%);width:84px;height:84px;border-radius:50%;overflow:hidden;border:4px solid #19d3ff;background:#0a1b2a}#sbTour .k img{width:100%;height:100%;object-fit:cover}' +
    '#sbTour .n{text-align:center;font:800 18px/1.4 Arial,sans-serif;color:#19a8d6;letter-spacing:1px}' +
    '#sbTour h3{margin:2px 0 6px;text-align:center;font-size:18px}#sbTour p{margin:0 0 10px;line-height:1.8;text-align:center;font-size:15px}' +
    '#sbTour .pg{height:5px;border-radius:3px;background:rgba(127,127,127,.25);margin:4px 0 12px;overflow:hidden}#sbTour .pg i{display:block;height:100%;background:linear-gradient(90deg,#19d3ff,#1f6fd1)}' +
    '#sbTour .b{display:flex;gap:8px;justify-content:center;align-items:center}#sbTour .b button{border:0;border-radius:12px;padding:10px 18px;font:700 15px inherit;cursor:pointer;color:#fff;background:linear-gradient(110deg,#1f6fd1,#19a8d6)}' +
    '#sbTour .b .s{background:none;color:#6a5a48;font-weight:500;padding:10px 6px}#sbTour .b .v{background:none;color:#1f6fd1;border:2px solid #1f6fd1;padding:8px 14px}';
  document.head.appendChild(css);

  var i = 0;
  function tour() {
    if (!steps.length) return;
    var t = document.getElementById('sbTour'); if (t) t.remove();
    i = 0; t = document.createElement('div'); t.id = 'sbTour'; document.body.appendChild(t); draw();
  }
  function draw() {
    var t = document.getElementById('sbTour'); if (!t) return;
    var s = steps[i], last = i === steps.length - 1;
    t.innerHTML = '<div class="c"><div class="k"><img alt="" src="' + IMG + '"></div><div class="n">Kinex</div><h3>' + s[0] + '</h3><p>' + s[1] + '</p>' +
      '<div class="pg"><i style="width:' + Math.round((i + 1) * 100 / steps.length) + '%"></i></div><div class="b">' +
      (i > 0 ? '<button class="v" data-a="p">› السابق</button>' : '') +
      '<button data-a="n">' + (i === 0 ? 'ابدأ الجولة ‹' : (last ? 'ابدأ الآن 🚀' : 'التالي ‹')) + '</button>' +
      (last ? '' : '<button class="s" data-a="x">تخطي</button>') + '</div></div>';
    t.onclick = function (e) {
      var a = e.target && e.target.getAttribute && e.target.getAttribute('data-a');
      if (a === 'n') { if (i >= steps.length - 1) end(); else { i++; draw(); } }
      else if (a === 'p') { i--; draw(); }
      else if (a === 'x') end();
    };
  }
  function end() { lsSet(KEY, '1'); var t = document.getElementById('sbTour'); if (t) t.remove(); }

  function mount() {
    if (document.getElementById('sbNav')) return;
    var n = document.createElement('div'); n.id = 'sbNav';
    n.innerHTML = '<button type="button" id="sbHome" aria-label="بوابة الصحابة التعليمية"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-6h4v6"/></svg>البوابة</button>' +
      (steps.length ? '<button type="button" class="q" id="sbQ" aria-label="جولة كينيكس">؟</button>' : '');
    document.body.appendChild(n);
    document.getElementById('sbHome').onclick = function () { location.href = HOME; };
    var q = document.getElementById('sbQ'); if (q) q.onclick = tour;
    if (steps.length && !lsGet(KEY)) setTimeout(tour, 900);
  }
  window.sahabaTour = tour;
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
