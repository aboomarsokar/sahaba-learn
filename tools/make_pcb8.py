"""يولّد تطبيقات علوم الصف الثامن (الفيزياء/الكيمياء/الأحياء) باستنساخ تطبيق العاشر لكلّ مادةٍ ثم استبدال المحتوى.

الاستعمال:   python3 tools/make_pcb8.py physics chemistry biology      (أو أيّ منها)
المصدر:      <المادة>/10/ (التطبيق المولَّد) + tools/content8/<المادة>.json (محتوى رزمة «العلوم والحياة» للثامن)
المخرجات مولَّدة في <المادة>/8/ ولا تُعدَّل يدوياً: غيّر ملف المحتوى أو هذا المولِّد وأعد التوليد.
المخطّط: tools/content8/SCHEMA.md ، والتحقّق: tools/content8/check.py
"""
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from unpack_pcb import find_obj  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
SUBJ = {  # k، الاسم، بادئة التخزين، بادئة الذاكرة، اسم مصفوفة المحتوى، اسم بنك الأسئلة
    "physics": (0, "الفيزياء", "phy8:", "phy8-", "PHYS", "QP"),
    "chemistry": (1, "الكيمياء", "che8:", "che8-", "CHEM", "QC"),
    "biology": (2, "الأحياء", "bio8:", "bio8-", "BIO", "QB"),
    "science": (0, "العلوم العامة", "sci8:", "sci8-", "PHYS", "QP"),   # مادة واحدة تجمع الثلاث بترتيب الرزمة؛ تُستنسخ من قالب الفيزياء
}
BASE = {"science": "physics"}      # مجلّد العاشر الذي يُستنسخ منه
# العلوم العامة: وحدات الرزمة مرتّبة (المصدر، فهرس الوحدة في ملفّه)
SCI_ORDER = [("biology", 0), ("biology", 1), ("physics", 0), ("chemistry", 0), ("chemistry", 1), ("chemistry", 2), ("physics", 1), ("biology", 2)]
SCI_SEMS = [[0, 1, 2, 3], [4, 5, 6, 7]]


def load_content(d: str) -> dict:
    base = Path(os.environ.get("CONTENT8_DIR", ROOT / "tools" / "content8"))
    if d != "science":
        return json.load(open(base / f"{d}.json", encoding="utf-8"))
    src = {x: json.load(open(base / f"{x}.json", encoding="utf-8")) for x in ("physics", "chemistry", "biology")}
    return {"subject": "science", "units": [src[a]["units"][i] for a, i in SCI_ORDER], "sems": SCI_SEMS,
            "bank": src["physics"]["bank"] + src["chemistry"]["bank"] + src["biology"]["bank"]}



def find_arr(s: str, name: str):
    """(بداية، نهاية، نصّ) لـ var NAME=[...]; مع مراعاة السلاسل النصّية."""
    m = re.search(r"\bvar " + re.escape(name) + r"\s*=\s*\[", s)
    if not m:
        raise ValueError("لم أجد المصفوفة " + name)
    i = m.end() - 1
    depth, j, q = 0, i, None
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\":
                j += 1
            elif c == q:
                q = None
        elif c in "\"'":
            q = c
        elif c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return m.start(), j + 1, s[i : j + 1]
        j += 1
    raise ValueError("مصفوفة غير مغلقة: " + name)


def set_arr(s: str, name: str, js: str) -> str:
    a, b, _ = find_arr(s, name)
    return s[:a] + f"var {name}=" + js + s[b:]


def set_obj(s: str, name: str, js: str) -> str:
    r = find_obj(s, name)
    if not r:
        raise ValueError("لم أجد الكائن " + name)
    return s[: r[0]] + f"var {name}=" + js + s[r[1] :]


def J(x) -> str:
    return json.dumps(x, ensure_ascii=False)


PATCH = re.compile(r"^(?:PHYS|CHEM|BIO)\[\d+\](?:\[\d+\])?(?:\.e\.push|\.push|\s*=)", re.M)


def strip_patches(s: str) -> str:
    """يحذف عبارات الترقيع التي تعدّل دروس العاشر بعد تعريفها (PHYS[1]=[...]; BIO[0].push(...); …)."""
    while True:
        m = PATCH.search(s)
        if not m:
            return s
        i, depth, q = m.start(), 0, None
        j = i
        while j < len(s):
            c = s[j]
            if q:
                if c == "\\":
                    j += 1
                elif c == q:
                    q = None
            elif c in "\"'":
                q = c
            elif c in "([{":
                depth += 1
            elif c in ")]}":
                depth -= 1
            elif c == ";" and depth == 0:
                break
            j += 1
        s = s[:i] + s[j + 1 :]


def lesson_js(l: dict) -> dict:
    return {"t": l["t"], "e": l["e"], "q": l["q"]}


def build(d: str) -> None:
    k, name, store, pre, arr, bank = SUBJ[d]
    c = load_content(d)
    assert c["subject"] == d
    base = BASE.get(d, d)
    src, out = ROOT / base / "10", ROOT / d / "8"
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(src, out)
    shutil.rmtree(out / "lessons", ignore_errors=True)
    (out / "lessons").mkdir()
    shutil.rmtree(out / "videos", ignore_errors=True)
    s = (out / "index.html").read_text(encoding="utf-8")

    units = c["units"]
    s = strip_patches(s)
    # --- تحويل الصف: العاشر ← الثامن ---
    s = s.replace("العاشر", "الثامن").replace("عاشر", "ثامن").replace("Grade 10", "Grade 8")
    s = s.replace(base + "/10", d + "/8").replace(f'"{base}10"', f'"{d}8"')
    s = s.replace(f'"{SUBJ[base][2].replace("8", "10")}"', f'"{store}"')
    if d != base:     # اسم المادة وبوابة الحكمة
        s = s.replace(f'("{base}"', f'("{d}"').replace('["physics","chemistry","biology"][PCB_ACTIVE_SUBJECT]', f'"{d}"').replace(SUBJ[base][1], name)
    # --- المحتوى الأساسي: وحدات ودروس ---
    for a in ("PHYS", "CHEM", "BIO"):
        s = set_arr(s, a, J([[lesson_js(l) for l in u["lessons"]] for u in units]) if a == arr else "[]")
    s = set_arr(s, "U", J([[u["title"] for u in units] if n == k else [] for n in range(3)]))
    s = set_arr(s, "UIS", J([[u["sym"] for u in units] if n == k else [] for n in range(3)]))
    s = set_arr(s, "UIMG", J([[], [], []]))
    s = re.sub(r"var SEMS=\[\[.*?\]\],SEMN", lambda m: "var SEMS=" + J([c["sems"] if n == k else [[0], [1]] for n in range(3)]) + ",SEMN", s, count=1, flags=re.S)
    for b in ("QP", "QC", "QB"):
        s = set_arr(s, b, J(c["bank"]) if b == bank else "[]")
    # --- أسئلة الدروس والوحدات والتلميحات ---
    lq, kh, ux = {}, {}, {}
    for ui, u in enumerate(units):
        for li, l in enumerate(u["lessons"]):
            lq[f"{k}-{ui}-{li}"] = l["quiz"]
            kh.update(l.get("hints", {}))
        ux[f"{k}-{ui}"] = [{"l": r[0], "q": r[1], "o": r[2], "a": r[3]} for r in u["unit_quiz"]]
    s = set_obj(s, "LESSONQ", J(lq))
    s = set_obj(s, "UNITX", J(ux))
    s = set_obj(s, "KH", J(kh))
    for o in ("LQ", "SOL", "INFD", "INFMAP", "VID", "LX", "IMG", "BADGE_IMG"):
        if find_obj(s, o):
            s = set_obj(s, o, "{}")
    s = set_arr(s, "AFKQ", "[]")
    s = set_arr(s, "GAL", J([{"n": x, "e": e, "c": "c1", "g": []} for x, e in (("الفيزياء", "⚡"), ("الكيمياء", "🧪"), ("الأحياء", "🧬"))])) if re.search(r"var GAL=\[", s) else s
    s = set_arr(s, "EXP", "[]") if re.search(r"var EXP=\[", s) else s
    # الكتب والرزم: رزمة العلوم والحياة للثامن (الرابط في tools/content8/links.json)
    link = json.load(open(ROOT / "tools" / "content8" / "links.json", encoding="utf-8"))["science"]
    s = set_obj(s, "LIBM", J({"books": [], "packs": [{"id": f"{d}8-pack", "s": k, "t": "رزمة العلوم والحياة – الصف الثامن", "u": link}]}))
    (out / "index.html").write_text(s, encoding="utf-8")
    # الصور والمكتبات التي لم تعد مشار إليها
    txt = s + "".join(f.read_text(encoding="utf-8", errors="ignore") for f in (out / "lib").glob("*.js"))
    refd = set(re.findall(r"images/([0-9a-f]{12}\.\w+)", txt))
    for f in (out / "images").glob("*"):
        if f.name not in refd:
            f.unlink()
    needed = set(re.findall(r"lib/([\w.-]+)", s))
    for f in (out / "lib").glob("*"):
        if f.name not in needed:
            f.unlink()
    # --- ملفّات التطبيق ---
    mf = json.load(open(out / "manifest.webmanifest", encoding="utf-8"))
    mf["name"] = f"{name} — الصف الثامن"
    (out / "manifest.webmanifest").write_text(json.dumps(mf, ensure_ascii=False, indent=2), encoding="utf-8")
    sw = (out / "sw.js").read_text(encoding="utf-8")
    sw = sw.replace(SUBJ[base][3].replace("8", "10"), pre)
    sw = re.sub(r'(const V = P \+ ")v\d+"', r'\1v1"', sw)
    (out / "sw.js").write_text(sw, encoding="utf-8")
    pc = json.load(open(out / "precache.json", encoding="utf-8"))["files"]
    keep = [f for f in pc if (f.startswith("../../") and (out / f).resolve().exists()) or f in ("./index.html", "./manifest.webmanifest")]
    keep = [f for f in keep if "/covers/" not in f]
    keep += [f"./{sub}/{p.name}" for sub in ("lib", "images") for p in sorted((out / sub).glob("*")) if p.is_file()]
    (out / "precache.json").write_text(json.dumps({"files": keep}, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    n = sum(len(u["lessons"]) for u in units)
    print(f"▶ {name} (8): {len(units)} وحدات، {n} دروس، {(out / 'index.html').stat().st_size // 1024} ك.ب")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    for a in sys.argv[1:]:
        build(a)
