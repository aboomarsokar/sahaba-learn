/* التحديث التلقائي لتطبيقات المنصّة: بلا أيّ موافقةٍ أو شريطٍ أو إشعار.
   - يعمل التطبيق بلا إنترنت من النسخة المحفوظة في الجهاز.
   - كلّما فُتح التطبيق أو عاد إلى الواجهة وكان الإنترنت متاحاً، يتحقّق من وجود نسخةٍ أحدث، فإن وُجدت حُدِّثت الصفحة وحدها:
     فوراً إن كان التطبيق قد فُتح للتوّ، وإلا عند مغادرة الطالب للتطبيق (فلا تنقطع عليه مراجعةٌ أو اختبار).
   - يخزّن ملفّات العمل بلا إنترنت بصمتٍ في الخلفية بعد أن تهدأ الصفحة. */
(function () {
  if (!('serviceWorker' in navigator) || !/^https?:/.test(location.protocol)) return;
  var T0 = Date.now(), SIG = 'upd-sig:' + location.pathname, pending = false, had = !!navigator.serviceWorker.controller;
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function apply() {
    /* التطبيق فُتح للتوّ: نحدّث فوراً. وإلا ننتظر مغادرته */
    if (document.hidden || Date.now() - T0 < 15000) location.reload(); else pending = true;
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden && pending) location.reload(); });

  /* نسخةٌ جديدة من عامل الخدمة تسلّمت التحكّم */
  navigator.serviceWorker.addEventListener('controllerchange', function () { if (!had) { had = true; return; } apply(); });

  /* بصمة الصفحة: تغيّرها يعني صدور نسخةٍ أحدث */
  function checkPage() {
    if (navigator.onLine === false) return;
    fetch(location.pathname, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) return;
      var sig = [r.headers.get('etag'), r.headers.get('last-modified'), r.headers.get('content-length')].join('|');
      if (sig === '||') return;
      var old = lsGet(SIG); lsSet(SIG, sig);
      if (old && old !== sig) apply();
    }).catch(function () {});
  }

  function requestPrecache(r) {
    var w = r.active || navigator.serviceWorker.controller, c = navigator.connection;
    if (!w || (c && c.saveData)) return;
    setTimeout(function () { var go = function () { w.postMessage({ type: 'precache' }); }; if (window.requestIdleCallback) requestIdleCallback(go, { timeout: 8000 }); else go(); }, 2500);
  }
  navigator.serviceWorker.ready.then(function (r) {
    requestPrecache(r);
    function check() { r.update().catch(function () {}); checkPage(); }
    setTimeout(check, 1500);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
  });
})();
