/* هيكل كتاب اللغة العربية (التاسع). المحتوى (الوحدات والدروس) يُضاف لاحقاً من الكتاب المدرسي والرزمة.
   الدرس: items = [نوع، عنوان] والأنواع: read مطالعة، poem نص شعري، gram قواعد، rhet بلاغة، aruz عروض، expr تعبير، imla إملاء. */
window.CONTENT = {};
function U(id, n, pg, items) {
  return { id: id, n: n, pg: pg, items: items.map(function (i) { var c = CONTENT[id + "|" + i[1]] || {}; return { k: i[0], t: i[1], x: c.x || i[2] || "", ex: c.ex || [], sec: c.sec || null, rule: c.rule || null, jr: c.jr || null }; }) };
}
window.ARA = {
  links: {
    book1: "https://drive.google.com/file/d/1Zl3bOMdtzizFQm8Wl_LMDxhxqpjPdiAq/view?usp=drivesdk",   /* الكتاب المدرسي: الفصل الأول (Drive) */
    book2: "https://drive.google.com/file/d/1IX3x9WWqR2iFcj-jIPyaKEOasxCoL2zH/view?usp=drivesdk",   /* الفصل الثاني */
    pack: "https://drive.google.com/file/d/1Fh9M-2l6WjuL-YiqQeDfrM3dDcctz1Lm/view?usp=drivesdk"    /* الرزمة التعليمية (Drive) */
  },
  semesters: [
    { id: 1, name: "الفصل الأول", book: "book1", units: [] },
    { id: 2, name: "الفصل الثاني", book: "book2", units: [] }
  ]
};
