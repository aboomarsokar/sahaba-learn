"""يربط محتوى التربية الإسلامية للصف التاسع (الفصل الثاني) بالتطبيق: islamic/9.

الاستعمال:   python3 tools/islamic9_wire.py
المدخل:      islamic/9/data/u7.js … u12.js (محتوى الدروس) و u<N>.meta.json (عنوان الوحدة وأيقونتها)
يفعل:        يملأ الفصل الثاني في data/curriculum.js، ويضيف وسوم <script> في index.html، وملفات الوحدات إلى sw.js (CORE) ثم يعيد precache.json ويرفع V.
آمن للتكرار. الفصل الأول يبقى «قريباً» إلى أن يصل كتابه.
"""
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
D = ROOT / "islamic" / "9"

# الفصل الثاني: وحدات ٧–١٢ ← دروس الكتاب (رقم الدرس، عنوانه، صفحة الكتاب)
UNITS = {
    7: [("7-1", "المثل في القرآن الكريم", 5), ("7-2", "سورة الكهف (32-44)", 11), ("7-3", "سورة آل عمران (45-55)", 17)],
    8: [("8-4", "العبودية والاستخلاف", 26), ("8-5", "التكليف والمسؤولية", 31), ("8-6", "التقليد الأعمى", 35)],
    9: [("9-7", "مؤلفات في الحديث الشريف", 41), ("9-8", "الحلال والحرام", 45), ("9-9", "المحافظة على البيئة", 50)],
    10: [("10-10", "غزوة مؤتة (8هـ)", 56), ("10-11", "فتح مكة (8هـ)", 61), ("10-12", "آل البيت النبوي الشريف", 65), ("10-13", "من صحابة رسول الله ﷺ: خالد بن الوليد", 70)],
    11: [("11-14", "الوديعة", 77), ("11-15", "الرهن", 81), ("11-16", "القرض الحسن", 85)],
    12: [("12-17", "السيادة والحكم في الإسلام", 91), ("12-18", "حقوق الإنسان في الإسلام", 96), ("12-19", "عزّة المسلم", 101)],
}


def q(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def main() -> None:
    cur = (D / "data" / "curriculum.js").read_text(encoding="utf-8")
    units = []
    for n, ls in UNITS.items():
        meta = json.load(open(D / "data" / f"u{n}.meta.json", encoding="utf-8"))
        lines = ",\n".join('          { id: %s, t: %s, p: %d }' % (q(i), q(t), p) for i, t, p in ls)
        units.append('        { id: %d, no: %d, t: %s, ic: %s, lessons: [\n%s] }' % (n, n - 6, q(meta["t"]), q(meta["ic"]), lines))
    new2 = "units: [\n" + ",\n".join(units) + "\n      ] }"
    m = re.search(r'(\{ id: 2, name: "الفصل الثاني", book: "[^"]*", )units: \[[^\n]*?\] \}|(\{ id: 2, name: "الفصل الثاني", book: "[^"]*", )units: \[.*?\n      \] \}', cur, re.S)
    assert m, "لم أجد الفصل الثاني في curriculum.js"
    head = m.group(1) or m.group(2)
    cur = cur[:m.start()] + head + new2 + cur[m.end():]
    (D / "data" / "curriculum.js").write_text(cur, encoding="utf-8")

    idx = D / "index.html"
    s = idx.read_text(encoding="utf-8")
    s = re.sub(r'<script src="data/u\d+\.js"></script>\n?', "", s)
    tags = "".join('<script src="data/u%d.js"></script>\n' % n for n in UNITS)
    s = s.replace('<script src="data/curriculum.js"></script>\n', '<script src="data/curriculum.js"></script>\n' + tags, 1)
    idx.write_text(s, encoding="utf-8")

    sw = D / "sw.js"
    t = sw.read_text(encoding="utf-8")
    t = re.sub(r'"\./data/u\d+\.js", ', "", t)
    t = t.replace('"./data/curriculum.js"', '"./data/curriculum.js", ' + ", ".join('"./data/u%d.js"' % n for n in UNITS), 1)
    m = re.search(r'const V = P \+ "v(\d+)"', t)
    t = t.replace(m.group(0), 'const V = P + "v%d"' % (int(m.group(1)) + 1))
    sw.write_text(t, encoding="utf-8")
    subprocess.run(["python3", str(ROOT / "tools" / "gen_precache.py"), "islamic/9"], check=True, cwd=ROOT)
    print("▶ التربية الإسلامية (9): الفصل الثاني —", sum(len(v) for v in UNITS.values()), "درساً في", len(UNITS), "وحدات")


if __name__ == "__main__":
    main()
