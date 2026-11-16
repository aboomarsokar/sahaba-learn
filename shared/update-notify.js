/* إشعار التحديث لتطبيقات المنصّة (رياضيات / علوم / إنجليزي): يعمل بلا خادم.
   - عند الفتح أو العودة إلى التطبيق يبحث عن نسخة جديدة، فإذا طُبّقت يظهر شريط «أعد التحميل» وإشعارٌ على الجهاز.
   - وعلى أندرويد (كروم) لتطبيقٍ مثبَّت على الشاشة الرئيسية يفحص عامل الخدمة دورياً ولو كان التطبيق مغلقاً (periodicsync). */
(function () {
  if (!('serviceWorker' in navigator) || !/^https?:/.test(location.protocol)) return;
  var cs = document.currentScript, APP = (cs && cs.dataset.app) || 'التطبيق';
  var ASK = 'upd-ask:' + location.pathname;
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function bar(text, buttons) {
    var old = document.getElementById('updBar'); if (old) old.remove();
    var d = document.createElement('div'); d.id = 'updBar'; d.setAttribute('role', 'status'); d.dir = 'rtl';
    d.style.cssText = 'position:fixed;z-index:2147483000;left:12px;right:12px;bottom:calc(88px + env(safe-area-inset-bottom,0px));max-width:520px;margin:0 auto;display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:12px 14px;border-radius:16px;background:rgba(27,11,58,.96);color:#fff;border:1px solid rgba(243,201,105,.6);box-shadow:0 10px 30px rgba(0,0,0,.45);font:600 14px/1.6 "Plex Arabic",system-ui,sans-serif';
    var t = document.createElement('span'); t.style.flex = '1 1 160px'; t.textContent = text; d.appendChild(t);
    buttons.forEach(function (b) {
      var x = document.createElement('button'); x.type = 'button'; x.textContent = b[0];
      x.style.cssText = 'border:0;border-radius:999px;padding:8px 16px;font:700 13px system-ui,sans-serif;cursor:pointer;' + (b[2] ? 'background:linear-gradient(180deg,#ffe7a8,#f3c969);color:#2a1250' : 'background:rgba(255,255,255,.14);color:#fff');
      x.addEventListener('click', function () { d.remove(); b[1](); });
      d.appendChild(x);
    });
    document.body.appendChild(d);
  }

  var had = !!navigator.serviceWorker.controller;   // كان للصفحة عاملٌ يتحكّم بها قبل هذه الجلسة
  var reg = null;
  function notifyUpdate() {
    if (!('Notification' in window) || Notification.permission !== 'granted' || !reg) return;
    reg.showNotification('تحديث جديد · ' + APP, { body: 'صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.', icon: (cs && cs.dataset.icon) || 'icons/icon-192.png', tag: 'app-update', dir: 'rtl', lang: 'ar' }).catch(function () {});
  }
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (!had) { had = true; return; }
    notifyUpdate();
    bar('تم تحديث «' + APP + '» إلى نسخة جديدة', [['أعد التحميل', function () { location.reload(); }, true], ['لاحقاً', function () {}]]);
  });

  function enablePeriodic() {
    try {
      if (reg && reg.periodicSync) reg.periodicSync.register('check-update', { minInterval: 12 * 3600 * 1000 }).catch(function () {});
    } catch (e) {}
  }
  function askOnce() {
    if (!('Notification' in window) || Notification.permission !== 'default' || lsGet(ASK)) return;
    setTimeout(function () {
      bar('هل تريد إشعاراً على جهازك عند صدور تحديث جديد لـ «' + APP + '»؟', [
        ['نعم، فعّل', function () { lsSet(ASK, '1'); Notification.requestPermission().then(function (p) { if (p === 'granted') enablePeriodic(); }); }, true],
        ['لاحقاً', function () { lsSet(ASK, '1'); }]]);
    }, 8000);
  }

  /* تجهيز التطبيق للعمل بلا إنترنت: شريطٌ صغير يظهر فقط أوّل مرّة حين يكون هناك ما يُخزَّن */
  var offShown = false;
  function pill(text, ok) {
    var d = document.getElementById('offBar');
    if (!d) {
      d = document.createElement('div'); d.id = 'offBar'; d.dir = 'rtl'; d.setAttribute('role', 'status');
      d.style.cssText = 'position:fixed;z-index:2147482999;left:50%;transform:translateX(-50%);bottom:calc(150px + env(safe-area-inset-bottom,0px));padding:8px 16px;border-radius:999px;background:rgba(27,11,58,.95);color:#fff;border:1px solid rgba(243,201,105,.6);font:600 13px "Plex Arabic",system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.4);white-space:nowrap';
      document.body.appendChild(d);
    }
    d.textContent = text; d.style.borderColor = ok ? '#2fbf71' : 'rgba(243,201,105,.6)';
    return d;
  }
  navigator.serviceWorker.addEventListener('message', function (e) {
    var m = e.data || {};
    if (m.type === 'precache-progress' && m.done < m.total) { offShown = true; pill('جارٍ تجهيز التطبيق للعمل بدون إنترنت… ' + Math.round(m.done / m.total * 100) + '%'); }
    if (m.type === 'precache-done' && offShown) {
      if (m.failed) { var f = document.getElementById('offBar'); if (f) f.remove(); return; }
      var d = pill('✅ التطبيق جاهز للعمل بدون إنترنت', true); setTimeout(function () { d.remove(); }, 4500);
    }
  });
  function requestPrecache(r) {
    var w = r.active || navigator.serviceWorker.controller;
    /* لا ننافس فتح الصفحة: نؤجّل التخزين الخلفي حتى تهدأ الصفحة، ونتجنّب وضع توفير البيانات */
    var c = navigator.connection; if (c && c.saveData) return;
    setTimeout(function () { var go = function () { w.postMessage({ type: 'precache' }); }; if (window.requestIdleCallback) requestIdleCallback(go, { timeout: 8000 }); else go(); }, 12000);
  }
  navigator.serviceWorker.ready.then(function (r) {
    reg = r; requestPrecache(r);
    if ('Notification' in window && Notification.permission === 'granted') enablePeriodic();
    function check() { r.update().catch(function () {}); }
    check();
    document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
    askOnce();
  });
})();
