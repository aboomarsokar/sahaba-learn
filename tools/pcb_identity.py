"""يوحّد الهوية البصرية لتطبيقات الفيزياء والكيمياء والأحياء (العاشر) مع تطبيق العربية:
خلفية كريمية، بطاقات بيضاء بحدود بيج رقيقة، أخضر غامق للعناوين والأزرار، بلا تدرّجات ولا ألوان لكلّ مادة، وخطّ Plex Arabic.

الاستعمال:   python3 tools/pcb_identity.py            (الثلاثة)
             python3 tools/pcb_identity.py physics     (مادة واحدة)
آمن للتكرار، ويُستدعى من make_pcb_apps.py بعد التوليد. يُحقن قبل </body> فيتغلّب على ما سبقه.
الوضع الغامق (يختاره الطالب) لا يتأثّر باللون الأخضر إلا في الأزرار والتبويبات.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APPS = ("physics", "chemistry", "biology")
MARK = "<style id=\"ident-v1\">"

CSS = MARK + r"""
/* هوية «الصحابة» النظيفة (كما في تطبيق العربية) */
@font-face{font-family:"Plex Arabic";src:url("../../shared/fonts/IBMPlexSansArabic-Regular.ttf") format("truetype");font-weight:400;font-display:swap}
@font-face{font-family:"Plex Arabic";src:url("../../shared/fonts/IBMPlexSansArabic-Bold.ttf") format("truetype");font-weight:700;font-display:swap}
:root{--c1:#00a152;--c2:#00a152;--c3:#00a152}
:root:not([data-theme="dark"]){--bd:#e9dfc8;--pri:#00a152;--c1b:#d3f5de;--c2b:#d3f5de;--c3b:#d3f5de}
body{font-family:"Plex Arabic","PCB Naskh","Noto Naskh Arabic",system-ui,sans-serif;font-weight:400}
b,h1,h2,h3,h4,.hd,.tab,.btn,.ban b,.sc b{font-weight:700}
.ban{background:linear-gradient(135deg,#00c853,#00a152)!important;animation:none!important;border:0!important;box-shadow:none!important;color:#fff}
.sc{background:var(--card)!important;color:var(--text)!important;border:1px solid var(--bd);box-shadow:none}
.sc .cir{background:#d3f5de;color:#00a152}.sc small{color:var(--muted);opacity:1}
.btn:not(.o):not(.w){background:linear-gradient(135deg,#00c853,#00a152)!important;color:#fff!important;box-shadow:none}
.btn.o{color:#00a152;border-color:#00a152}
.tab{color:#00a152!important;border:1px solid #7fe0a2!important;background:var(--card)!important}
.tab.on{background:#00a152!important;color:#fff!important;border-color:#00a152!important}
.card,.ui,.opt,.fm,.q4 div,.ic{border-width:1px;box-shadow:none}
.card.rd{--k:#00a152!important}
.ui .ib,.ui .ib.im{background:#d3f5de}
.pg i{background:#00a152}
.nv div.on{color:#00a152}
body.sp{background:linear-gradient(160deg,#FAF6EB,#d3f5de)}
.sp h1,.sp p,.sp .cl,.sp h2{color:#0a5230!important;text-shadow:none}
.sp .chip{background:#d3f5de;color:#00a152}
.sp .btn.w{background:linear-gradient(135deg,#00c853,#00a152);color:#fff}
.sp .cir{background:#fff;border:1px solid #e9dfc8}
:root{--pcb-sub:#00a152}
.sch-hero{background:linear-gradient(135deg,#00c853,#00a152)!important;box-shadow:none!important}
.sch-cta,.sch-cta a,.tchb,a.sch-cta{background:#00a152!important;color:#fff!important;box-shadow:none!important}
#go.btn.w{background:linear-gradient(135deg,#00c853,#00a152)!important;color:#fff!important;border:0;text-shadow:none}
.lvk{background:#d3f5de;color:#00a152}
.ban{border-bottom:4px solid #ffc107!important}
.tab.on{box-shadow:0 3px 0 #ffc107}
.nv div.on{box-shadow:inset 0 3px 0 #ffc107}
.sch-av,.sch-q{border-color:#ffc107!important}
.ui .ib{border:1px solid #ffc107}
</style>
"""


def patch(d: Path) -> str:
    f = d / "index.html"
    s = f.read_text(encoding="utf-8")
    if MARK in s:                       # حدّث الكتلة القديمة بالجديدة
        a = s.index(MARK)
        b = s.index("</style>", a) + len("</style>\n")
        if s[a:b] == CSS:
            return "تم سابقاً"
        f.write_text(s[:a] + CSS + s[b:], encoding="utf-8")
        return "حُدّث"
    assert s.count("</body>") >= 1
    i = s.rindex("</body>")
    f.write_text(s[:i] + CSS + s[i:], encoding="utf-8")
    # الخطّ يُخزَّن للعمل بلا إنترنت
    pj = d / "precache.json"
    if pj.exists():
        j = json.loads(pj.read_text(encoding="utf-8"))
        for x in ("../../shared/fonts/IBMPlexSansArabic-Regular.ttf", "../../shared/fonts/IBMPlexSansArabic-Bold.ttf", "../../shared/wisdom.js"):
            if x not in j["files"]:
                j["files"].append(x)
        pj.write_text(json.dumps(j, ensure_ascii=False, indent=1), encoding="utf-8")
    sw = d / "sw.js"
    if sw.exists():
        t = sw.read_text(encoding="utf-8")
        m = re.search(r'(const V = P \+ "v)(\d+)"', t)
        if m:
            sw.write_text(t.replace(m.group(0), f'{m.group(1)}{int(m.group(2)) + 1}"', 1), encoding="utf-8")
    return "عُدّل"


if __name__ == "__main__":
    for n in (sys.argv[1:] or APPS):
        print(n, patch(ROOT / n / "10"))
