/* انتقالات ناعمة موحّدة لكل التطبيقات والبوابة (خفيفة، بلا مكتبات، وتحترم «تقليل الحركة»).
   1) بين الصفحات (بوابة ↔ تطبيق): View Transitions للتنقّل عبر الصفحات في كروم/إيدج، وتُتجاهل في غيرهما بلا أثر.
   2) داخل التطبيق: كلّما استُبدلت شاشةٌ كاملة (#app أو #stage) تدخل بظهورٍ وصعودٍ قصير.
   3) البوابة: كلّ شاشةٍ تُكشف (قسم .scr) تدخل بالحركة نفسها.
   4) ضغطة الأزرار: تصغير طفيف لمسيّاً (بوزن صفر فلا يتغلّب على تنسيق التطبيق). */
(function () {
  var rm = false; try { rm = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  if (rm) return;
  var st = document.createElement("style");
  st.textContent =
    "@view-transition{navigation:auto}" +
    "::view-transition-old(root){animation:mo-out .16s ease both}::view-transition-new(root){animation:mo-in .28s cubic-bezier(.2,.8,.2,1) both}" +
    "@keyframes mo-in{from{opacity:0;transform:translateY(12px) scale(.995)}to{opacity:1;transform:none}}@keyframes mo-out{to{opacity:0}}" +
    ":where(button,a.gb,.card,.row,.mu,.uc,.h8u,.l8c,.ptile):active{transform:scale(.97)}" +
    ":where(button,a.gb,.card,.row,.mu,.uc,.h8u,.l8c,.ptile){transition:transform .12s ease}";
  (document.head || document.documentElement).appendChild(st);

  function pop(el) {
    if (!el || !el.animate) return;
    try { el.getAnimations().forEach(function (a) { if (a.id === "mo") a.cancel(); }); } catch (e) {}
    var a = el.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" });
    a.id = "mo";
  }
  function watch(el) {
    if (!el) return;
    var t = 0;
    new MutationObserver(function (ms) {
      var swap = ms.some(function (m) { return m.addedNodes.length && m.removedNodes.length; });
      if (!swap) return;
      clearTimeout(t); t = setTimeout(function () { pop(el); }, 0);
    }).observe(el, { childList: true });
  }
  function init() {
    watch(document.getElementById("app")); watch(document.getElementById("stage"));
    /* البوابة: شاشةٌ تُكشف */
    var scr = document.querySelectorAll("section.scr[hidden], section.scr");
    if (scr.length) scr.forEach(function (s) {
      new MutationObserver(function () { if (!s.hidden) pop(s); }).observe(s, { attributes: true, attributeFilter: ["hidden"] });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
