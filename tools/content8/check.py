"""يتحقّق من ملف محتوى الثامن: python3 tools/content8/check.py <ملف.json>"""
import json, sys
f = sys.argv[1]
PART = "--part" in sys.argv
d = json.load(open(f, encoding="utf-8"))
err = []
def need(c, m):
    if not c: err.append(m)
need(d.get("subject") in ("physics", "chemistry", "biology", "math"), "subject")
nl = 0
for ui, u in enumerate(d["units"]):
    need(u.get("title") and u.get("icon") and u.get("sym"), f"وحدة {ui}: title/icon/sym")
    for li, l in enumerate(u["lessons"]):
        nl += 1; p = f"{ui}-{li} {l.get('t')}"
        need(l.get("t"), p + ": t")
        need(len(l.get("e", [])) >= 12 and sum(1 for x in l["e"] if x.startswith("# ")) >= 2, p + ": e قصير/بلا أقسام")
        need(3 <= len(l.get("q", [])) <= 6, p + ": q")
        qz = l.get("quiz", [])
        for lv in (0, 1, 2):
            need(sum(1 for q in qz if q["l"] == lv) == 8, p + f": مستوى {lv} ليس ٨ أسئلة")
        for q in qz:
            need(q["k"] in "np" and len(q["o"]) == 4 and 0 <= q["a"] <= 3 and len(set(q["o"])) == 4 and q["q"].strip(), p + ": سؤال معيب: " + q["q"][:40])
        need(len({q["a"] for q in qz}) == 4, p + ": مواضع الإجابة غير موزّعة")
        qs = {q["q"] for q in qz}
        need(all(h in qs for h in l.get("hints", {})) and len(l.get("hints", {})) >= 3, p + ": hints")
    uq = u.get("unit_quiz", [])
    need(9 <= len(uq) <= 12 and all(len(r) == 4 and len(r[2]) == 4 and 0 <= r[3] <= 3 for r in uq), f"وحدة {ui}: unit_quiz")
if not PART:
    need(sorted(i for g in d["sems"] for i in g) == list(range(len(d["units"]))), "sems لا تغطّي الوحدات")
    need(15 <= len(d["bank"]) <= 20 and all(len(b["o"]) == 4 and 0 <= b["a"] <= 3 for b in d["bank"]), "bank")
print("دروس:", nl, "| أخطاء:", len(err))
for e in err: print(" ✗", e)
sys.exit(1 if err else 0)
