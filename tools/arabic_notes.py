"""ملاحظات المستخدم على تطبيقَي العربية (العاشر والتاسع): آمن للتكرار، يُشغَّل على الملفّين.
1) أزرار «أظهر المفردات والمعاني…» أوضح وأكبر.
2) إلغاء «أسئلة الدرس» واستبدالها باختبار للوحدة كاملة بأسئلة متنوّعة (اختيار/إكمال/صواب-خطأ/مفردات) غير أسئلة «اختبر نفسك».
3) إلغاء صفحة «ابدأ يا بطل» عند أوّل دخول (تبقى حكمة اليوم المتجدّدة في الرئيسية).
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MARK = "/*notes-v1*/"


def rep(s, a, b, cnt=1):
    assert s.count(a) == cnt, (s.count(a), a[:80])
    return s.replace(a, b)


QSCARD_NEW = '''  function qsCard(u, i, goBack) {   /* اختبار الوحدة كاملة بدل أسئلة كلّ درس */
    var kids = [h("h2", { t: "اختبار الوحدة", style: "margin-bottom:8px" }), h("p", { cls: "sub", t: "أسئلة متنوّعة من كلّ دروس الوحدة." }), h("button", { cls: "btn", style: "margin-top:0", t: "📝 ابدأ اختبار الوحدة", on: { click: function () { location.hash = "uq/" + encodeURIComponent(u.id); } } })];
    if (goBack) kids.push(h("button", { cls: "btn alt", t: "إعادة الدرس", on: { click: goBack } }));
    return h("div", { cls: "card" }, kids);
  }
'''

UNIT_QS_BLOCK_OLD = '''    if (cur[0] === "qs") {
      u.items.forEach(function (i) { if (lessonQs(u.id + "|" + i.t).length) cards.push(h("div", null, [h("div", { cls: "lbl", t: KIND[i.k] + " — " + i.t }), qsCard(u, i, null)])); });
      if (!cards.length) cards.push(h("div", { cls: "empty", t: "ستُضاف أسئلة دروس هذه الوحدة قريباً." }), bookBtn());
    } else {'''
UNIT_QS_BLOCK_NEW = '''    if (cur[0] === "qs") {
      var uqn = unitPool(u).length, best = S.q["uq" + u.id];
      if (uqn < 5) cards.push(h("div", { cls: "empty", t: "ستُضاف أسئلة اختبار هذه الوحدة قريباً." }), bookBtn());
      else cards.push(h("div", { cls: "card" }, [h("h2", { t: "اختبار الوحدة: " + u.n, style: "margin-bottom:8px" }), h("p", { cls: "sub", t: "حتى ١٥ سؤالاً متنوّعاً (اختيار وإكمال وصواب أم خطأ وفهم مفردات) تُسحب عشوائياً في كلّ مرة من دروس الوحدة." + (best != null ? " أفضل نتيجة لك: " + best : "") }), h("button", { cls: "btn", t: "📝 ابدأ اختبار الوحدة", on: { click: function () { location.hash = "uq/" + encodeURIComponent(u.id); } } })]));
    } else {'''

UNIT_TEST_FUNCS = '''  /* ===== اختبار الوحدة: أسئلة متنوّعة من دروس الوحدة (دون أسئلة رحلات «اختبر نفسك») ===== */
  function unitPool(u) {
    var out = [], pre = u.id + "|";
    [1, 2].forEach(function (s) { allQs(s).forEach(function (q) { if (q.k && q.k.indexOf(pre) === 0 && String(q.c).indexOf("jr") !== 0) out.push(q); }); });
    return out;
  }
  function tfOf(q) {
    var stem, truth = Math.random() < 0.5, x = truth ? q.ans : q.wr[0];
    if (!x) return null;
    if (q.t === "fill" && q.q.indexOf("____") >= 0) stem = q.q.replace("____", x);
    else if (/[:：]\\s*$/.test(q.q)) stem = q.q.replace(/\\s*[:：]\\s*$/, " ") + x;
    else return null;
    return { t: "tf", q: "صواب أم خطأ؟  «" + stem + "»", o: ["صواب", "خطأ"], a: truth ? 0 : 1, c: q.c, k: q.k };
  }
  function unitQs(u) {
    var pool = shuf(unitPool(u), Math.random), per = {}, ordered = [], i = 0, more = true;
    pool.forEach(function (q) { (per[q.k] = per[q.k] || []).push(q); });
    var keys = Object.keys(per);
    while (more && ordered.length < 60) { more = false; keys.forEach(function (k) { if (per[k][i]) { ordered.push(per[k][i]); more = true; } }); i++; }
    var out = [], tf = 0;
    ordered.forEach(function (q) {
      if (out.length >= 15) return;
      var t = null; if (tf < 4 && out.length % 4 === 3) { t = tfOf(q); if (t) tf++; }
      out.push(t || build(q, "uq" + u.id + out.length + Math.random()));
    });
    return shuf(out, Math.random);
  }
  function unitTest(id) {
    var u = findUnit(id); if (!u) return home();
    var qs = unitQs(u); if (qs.length < 5) { location.hash = "unit/" + id; return; }
    runQuiz("اختبار الوحدة — " + u.n, qs, "uq" + id, "unit/" + id + "/qs");
  }
'''


def patch(path: Path) -> str:
    s = path.read_text(encoding="utf-8")
    if MARK in s:
        return "تم سابقاً"
    # 2) اختبار الوحدة
    a = s.index("  function qsCard(u, i, goBack) {")
    b = s.index("  function blocks(x) {")
    s = s[:a] + QSCARD_NEW + s[b:]
    s = rep(s, 'groups.push(["qs", "أسئلة الدرس", []]);', 'groups.push(["qs", "اختبار الوحدة", []]);')
    s = rep(s, UNIT_QS_BLOCK_OLD, UNIT_QS_BLOCK_NEW)
    s = rep(s, "  function linksPage(title, rows) {", MARK + "\n" + UNIT_TEST_FUNCS + "  function linksPage(title, rows) {")
    s = rep(s, 'st === n - 1 ? "انتهيت — اختبر نفسك ›" : "التالي ›"', 'st === n - 1 ? "انتهيت ›" : "التالي ›"')
    s = rep(s, "أحسنت! أنهيتَ أقسام الدرس. اضغط «التالي» لتصل إلى أسئلة هذا الدرس من الكتاب والرزمة.", "أحسنت! أنهيتَ أقسام الدرس. اضغط «التالي» لتصل إلى اختبار الوحدة كاملة.")
    s = rep(s, 'h("div", { cls: "big", t: "اختبر نفسك" })', 'h("div", { cls: "big", t: "أحسنت 🎉" })')
    s = rep(s, '"انتهى الشرح — اختبر نفسك ›"', '"انتهى الشرح ›"')
    s = rep(s, '(q.t === "fill" ? "أكمل الفراغ" : "اختر الإجابة الصحيحة")', '(q.t === "fill" ? "أكمل الفراغ" : q.t === "tf" ? "صواب أم خطأ" : "اختر الإجابة الصحيحة")')
    s = rep(s, 'else if (p[0] === "lq")', 'else if (p[0] === "uq") unitTest(decodeURIComponent(p[1])); else if (p[0] === "lq")')
    # صفحة الاختبارات: اختبارات الوحدات
    old = '    app.replaceChildren.apply(app, [top("الاختبارات")].concat(rows)); nav("quizzes");'
    new = '''    ARA.semesters.forEach(function (s) {
      var us = s.units.filter(function (u) { return unitPool(u).length >= 5; });
      if (!us.length) return;
      rows.push(h("div", { cls: "lbl", t: "اختبارات الوحدات — " + s.name }));
      us.forEach(function (u) { var best = S.q["uq" + u.id]; rows.push(h("button", { cls: "card qx", on: { click: function () { location.hash = "uq/" + encodeURIComponent(u.id); } } }, [h("div", { cls: "n", t: "📝" }), h("div", null, [h("b", { t: u.n }), h("small", { t: "حتى ١٥ سؤالاً متنوّعاً من دروس الوحدة" })]), h("span", { cls: "sc", t: best != null ? String(best) : "" })])); });
    });
''' + old
    s = rep(s, old, new)
    s = rep(s, 'if (p[0] === "unit") unit(p[1]);', 'if (p[0] === "unit") unit(p[1], p[2]);')
    # 3) لا صفحة «ابدأ يا بطل»
    s = rep(s, "(S.done = 1, save(), route()) : stepWisdom(); }", "(S.done = 1, save(), route()) : stepName(false); }")
    # 1) أزرار الإظهار أوضح
    css = '''.rv-b{font-size:1.05rem!important;font-weight:700!important;color:var(--ink)!important;border-width:2px!important;padding:13px 12px!important;background:var(--card)!important;text-align:center}
.rv-b::before{content:"👁️ ";font-size:1.1rem}.rv-b:disabled{opacity:1!important;color:var(--mut)!important;border-style:dashed!important;font-weight:400!important;font-size:.92rem!important}.rv-b:disabled::before{content:""}
'''
    s = rep(s, ".rv-b{margin-top:8px!important}", ".rv-b{margin-top:8px!important}\n" + css.rstrip("\n"))
    path.write_text(s, encoding="utf-8")
    return "عُدّل"


if __name__ == "__main__":
    for p in sys.argv[1:] or ["arabic/10", "arabic/9"]:
        print(p, patch(ROOT / p / "index.html"))
