"""يولّد تطبيق الإنجليزية للصف التاسع (english/9) من تطبيق الثامن (english/8) ومحتوى tools/content_e9/u<1..12>.json.

الاستعمال:   python3 tools/make_english9.py
المصدر:      tools/content_e9/u1.json … u12.json (كلّ وحدة: n, title, titleEn, lesson, rulecards, worksheet, summary)
              ترقيم التطبيق ١–١٢ ← وحدات الكتاب ١–٦ ثم ٨–١٣ (وحدتا المراجعة ٧ و١٤ لا تُعرَضان).
الناتج مولَّد في english/9/ ولا يُعدَّل يدوياً؛ غيّر ملفات المحتوى أو هذا المولِّد وأعد التوليد.
"""
import json
import random
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "english" / "8"
OUT = ROOT / "english" / "9"
CONTENT = ROOT / "tools" / "content_e9"
LINKS = {  # روابط Drive
    "book1": "https://drive.google.com/file/d/1rQYrCNq9ubWQKguVobv5zE7o1aptAhkc/view?usp=drivesdk",
    "book2": "https://drive.google.com/file/d/1lAuux_fYewpgPbpe2fFnvZIJ7MmzE6AB/view?usp=drivesdk",
    "pack": "https://drive.google.com/file/d/1kzp44BYIsbqhM9o2v8i1XUUa8PuvBgyl/view?usp=drivesdk",
}


def obj(path: Path, var: str):
    s = path.read_text(encoding="utf-8")
    i = s.index(var + " = ") + len(var) + 3
    return json.JSONDecoder().raw_decode(s[i:])[0], s, i


def dump(x) -> str:
    return json.dumps(x, ensure_ascii=False, indent=1)


def main() -> None:
    units = {}
    for n in range(1, 13):
        f = CONTENT / f"u{n}.json"
        if not f.exists():
            sys.exit(f"ينقص الملف {f.name}")
        units[n] = json.load(open(f, encoding="utf-8"))

    shutil.rmtree(OUT, ignore_errors=True)
    shutil.copytree(SRC, OUT)
    D8, D9 = SRC / "data", OUT / "data"

    # ---------- بيانات الدروس ----------
    head = (D8 / "lessons.js").read_text(encoding="utf-8").split("window.LEXORA_DATA")[0]
    data = {"units": {str(n): {"title": u["title"], "titleEn": u["titleEn"], "lessons": [u["lesson"]]} for n, u in units.items()}}
    (D9 / "lessons.js").write_text(head + "window.LEXORA_DATA = " + dump(data) + ";\n", encoding="utf-8")

    # ---------- بطاقات القواعد (ونُبقي قاموس الكلمات الدالّة) ----------
    _, s, i = obj(D8 / "rulecards.js", "window.LEXORA_RULECARDS")
    old, _ = json.JSONDecoder().raw_decode(s[i:])
    tail = s[s.index("/* معاني الكلمات الدالّة"):]
    rc = {}
    for n in range(1, 13):
        rc.update(units[n]["rulecards"])
    (D9 / "rulecards.js").write_text(s[:s.index("window.LEXORA_RULECARDS")] + "window.LEXORA_RULECARDS = " + dump(rc) + ";\n\n" + tail, encoding="utf-8")

    # ---------- أوراق المراجعة والاختبارات ----------
    pr, s, i = obj(D8 / "practice.js", "window.LEXORA_PRACTICE")
    ws = {str(n): units[n]["worksheet"] for n in range(1, 13)}

    def secq(n, k):
        for sec in ws[str(n)]["sections"]:
            if sec["k"] == k:
                return sec["questions"]
        return []

    rnd = random.Random(9)
    tests = []
    for tid, (a, b), rf in (("t1", (1, 3), 3), ("t2", (4, 6), 5), ("t3", (7, 9), 9), ("t4", (10, 12), 11)):
        vq = [q for n in range(a, b + 1) for q in secq(n, "vocab")]
        gq = [q for n in range(a, b + 1) for q in secq(n, "grammar")]
        rnd.shuffle(vq), rnd.shuffle(gq)
        tests.append({"id": tid, "title": f"اختبار شامل: الوحدات {a}–{b}", "titleEn": f"Comprehensive Test: Units {a}–{b}", "units": [a, b], "readingFrom": rf,
                      "sections": [{"k": "reading", "questions": secq(rf, "reading")[:4]}, {"k": "vocab", "questions": vq[:6]}, {"k": "grammar", "questions": gq[:8]}]})
    tests.append(pr["tests"][-1])
    new = {"worksheets": ws, "tests": tests}
    (D9 / "practice.js").write_text(s[:s.index("window.LEXORA_PRACTICE")] + "window.LEXORA_PRACTICE = " + dump(new) + ";\n", encoding="utf-8")

    # ---------- التلخيصات ومعالم التلوين ----------
    for n in range(1, 13):
        (D9 / f"summaries-u{n}.js").write_text("(window.LEXORA_SUM = window.LEXORA_SUM || {})[%d] = %s;\n" % (n, dump(units[n]["summary"])), encoding="utf-8")
    hl = (D8 / "highlights.js").read_text(encoding="utf-8").split("window.LEXORA_HL")[0]
    (D9 / "highlights.js").write_text(hl + "window.LEXORA_HL = {};\n", encoding="utf-8")

    # ---------- الواجهة ----------
    h = (SRC / "index.html").read_text(encoding="utf-8")
    for a, b in (("english8", "english9"), ("lex8-", "lex9-"), ("English for Palestine 8", "English for Palestine 9"), ("Grade 8", "Grade 9"), ("الصف الثامن", "الصف التاسع"),
                 ("للصف الثامن", "للصف التاسع"), ("Learn Grade 8", "Learn Grade 9")):
        h = h.replace(a, b)
    old_links = re.search(r"var LINKS=\{.*?\n  \};", h, re.S)
    assert old_links
    h = h.replace(old_links.group(0), "var LINKS={\n    book:{1:'%s',2:'%s'},\n    pack:{all:'%s'}\n  };" % (LINKS["book1"], LINKS["book2"], LINKS["pack"]))
    h = re.sub(r"\{date:'2026-11-20',title:'إطلاق تطبيق اللغة الإنجليزية للصف التاسع',items:\[.*?\]\}", "{date:'2026-11-20',title:'إطلاق تطبيق اللغة الإنجليزية للصف التاسع',items:['12 وحدة من كتاب English for Palestine 9 (الفصل الأول: الوحدات 1–6، والثاني: 7–12)','كلّ وحدة: مفردات، وقراءة، وقواعد، وأسئلة إتقان، وشهادة','تلخيص لكلّ وحدة، وأوراق مراجعة، واختبارات شاملة']}", h, count=1, flags=re.S)
    (OUT / "index.html").write_text(h, encoding="utf-8")

    sw = (SRC / "sw.js").read_text(encoding="utf-8")
    for a, b in (("lex8-", "lex9-"), ("upd-english8", "upd-english9"), ("(الثامن)", "(التاسع)")):
        sw = sw.replace(a, b)
    sw = re.sub(r'const V = P \+ "v\d+";', 'const V = P + "v1";', sw)
    (OUT / "sw.js").write_text(sw, encoding="utf-8")
    mf = (SRC / "manifest.webmanifest").read_text(encoding="utf-8").replace("الثامن", "التاسع").replace("english/8", "english/9")
    (OUT / "manifest.webmanifest").write_text(mf, encoding="utf-8")
    print("▶ الإنجليزية (9): 12 وحدة،", sum(len(u["lesson"]["vocab"]) for u in units.values()), "كلمة،", len(rc), "مجموعة بطاقات قواعد")


if __name__ == "__main__":
    main()
