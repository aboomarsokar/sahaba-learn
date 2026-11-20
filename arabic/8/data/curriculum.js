/* هيكل كتاب اللغة العربية (الثامن). المحتوى (الوحدات والدروس) يُضاف لاحقاً من الكتاب المدرسي والرزمة.
   الدرس: items = [نوع، عنوان] والأنواع: read مطالعة، poem نص شعري، gram قواعد، rhet بلاغة، aruz عروض، expr تعبير، imla إملاء. */
window.CONTENT = {};
function U(id, n, pg, items) {
  return { id: id, n: n, pg: pg, items: items.map(function (i) { var c = CONTENT[id + "|" + i[1]] || {}; return { k: i[0], t: i[1], x: c.x || i[2] || "", ex: c.ex || [], sec: c.sec || null, rule: c.rule || null, jr: c.jr || null }; }) };
}
window.ARA = {
  links: { book1: "", book2: "", pack: "https://drive.google.com/file/d/1CX22ut7XjrsQYI6sEa62WXKd552IUBJc/view?usp=drivesdk" },
  semesters: [
    { id: 1, name: "الفصل الأول", book: "book1", units: [] },
    { id: 2, name: "الفصل الثاني", book: "book2", units: [] }
  ]
};
