"""يولّد هيكل تطبيق العربية للصف الثامن (arabic/8) من تطبيق العاشر بنسقه (فصلان وكتاب ورزمة والمحتوى «قريباً»).

الاستعمال:   python3 tools/make_grade8_arabic.py
عند إضافة المحتوى الفعلي في arabic/8 أوقف تشغيل هذا المولِّد (وإلا يُمحى). الرزمة من tools/content8/links.json.
"""
import json
import re
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
ROOT = Path(__file__).resolve().parent.parent


def rep(s: str, a: str, b: str) -> str:
    assert s.count(a) == 1, (s.count(a), a[:70])
    return s.replace(a, b)


def main() -> None:
    src, dst = ROOT / "arabic" / "10", ROOT / "arabic" / "8"
    shutil.rmtree(dst, ignore_errors=True)
    shutil.copytree(src, dst)
    pack = json.load(open(ROOT / "tools" / "content8" / "links.json", encoding="utf-8"))["arabic"]
    idx = dst / "index.html"
    s = idx.read_text(encoding="utf-8").replace("arabic/10", "arabic/8").replace("ara10", "ara8").replace("العاشر", "الثامن").replace("عاشر", "ثامن")
    s = s.replace("var EX = { 1: 5, 2: 5 };", "var EX = { 1: 0, 2: 0 };")
    s = rep(s, "body = sem.units.map(", 'body = !sem.units.length ? [h("div", { cls: "card", t: "ستُضاف وحدات هذا الفصل قريباً بإذن الله." })] : sem.units.map(')
    s = rep(s, "if (!lu) { nextU = all[0]; }", 'if (!lu) { nextU = all[0] || [{ name: "" }, { id: "", n: "" }]; }')
    s = rep(s, "app.replaceChildren(head, resume, stats,", 'app.replaceChildren(head, all.length ? resume : h("div"), stats,')
    idx.write_text(s, encoding="utf-8")
    cur = f'''/* هيكل كتاب اللغة العربية (الثامن). المحتوى (الوحدات والدروس) يُضاف لاحقاً من الكتاب المدرسي والرزمة.
   الدرس: items = [نوع، عنوان] والأنواع: read مطالعة، poem نص شعري، gram قواعد، rhet بلاغة، aruz عروض، expr تعبير، imla إملاء. */
window.CONTENT = {{}};
function U(id, n, pg, items) {{
  return {{ id: id, n: n, pg: pg, items: items.map(function (i) {{ var c = CONTENT[id + "|" + i[1]] || {{}}; return {{ k: i[0], t: i[1], x: c.x || i[2] || "", ex: c.ex || [], sec: c.sec || null, rule: c.rule || null, jr: c.jr || null }}; }}) }};
}}
window.ARA = {{
  links: {{ book1: "", book2: "", pack: "{pack}" }},
  semesters: [
    {{ id: 1, name: "الفصل الأول", book: "book1", units: [] }},
    {{ id: 2, name: "الفصل الثاني", book: "book2", units: [] }}
  ]
}};
'''
    (dst / "data" / "curriculum.js").write_text(cur, encoding="utf-8")
    (dst / "data" / "dict.js").write_text("/* القاموس المعجمي للثامن: يُضاف لاحقاً. */\nwindow.DICT = { 1: [], 2: [] };\n", encoding="utf-8")
    (dst / "data" / "quiz.js").write_text("/* أسئلة الاختبارات للثامن: تُضاف لاحقاً. */\nwindow.QUIZ = [];\n", encoding="utf-8")
    sw = (dst / "sw.js").read_text(encoding="utf-8").replace("ara10-", "ara8-")
    sw = re.sub(r'(const V = P \+ ")v\d+"', r'\1v1"', sw)
    (dst / "sw.js").write_text(sw, encoding="utf-8")
    m = dst / "manifest.webmanifest"
    m.write_text(m.read_text(encoding="utf-8").replace("العاشر", "الثامن"), encoding="utf-8")
    print("▶ arabic/8 (هيكل)")


if __name__ == "__main__":
    main()
