"""يضيف إلى تطبيقات الفيزياء والكيمياء والأحياء (العاشر) مستوى «الفصل الأول / الفصل الثاني».

الاستعمال:   python3 tools/pcb_semesters.py            (يعدّل الثلاثة)
             python3 tools/pcb_semesters.py physics     (مادة واحدة)

الشاشة الرئيسية للمادة تعرض بطاقتَي الفصلين، وكلّ فصلٍ فيه تبويبات: الوحدات | الكتاب المدرسي | الرزمة التعليمية
(الكتاب والرزمة تُفتحان داخل التطبيق بقارئه). المحتوى كما هو، وإنما يُعاد ترتيبه.
التقسيم في SEMS: لكلّ مادة قائمتان بأرقام الوحدات (من صفر) للفصل الأول ثم الثاني.
الأمر آمن للتكرار (يتجاهل ما عُدّل) ويُستدعى بعد make_pcb_apps.py لأنّ المولِّد يعيد كتابة الملفّ.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APPS = {"physics": 0, "chemistry": 1, "biology": 2}
# الفيزياء: 1-3 | 4-5 ، الكيمياء: 1-4 | 5-6 ، الأحياء: 1-5 | 6-9
SEMS = [[[0, 1, 2], [3, 4]], [[0, 1, 2, 3], [4, 5]], [[0, 1, 2, 3, 4], [5, 6, 7, 8]]]
MARK = "/*sem-v1*/"

JS = r"""
/*sem-v1*/
var SEMS=__SEMS__,SEMN=["الفصل الأول","الفصل الثاني"],sm=0,smt=0;
function semUnits(k){var n=U[si].length,L=(SEMS[si][k]||[]).filter(function(i){return i<n});if(k==SEMS[si].length-1){var mx=-1;SEMS[si].forEach(function(a){a.forEach(function(i){if(i>mx)mx=i})});for(var i=mx+1;i<n;i++)L.push(i)}return L}
function unitRow(u,i){var t=T(),c=["c1","c2","c3"],nl=(DATA[si]&&DATA[si][i])?DATA[si][i].length:0;return '<div class="ui" style="--cb:var(--'+c[si]+'b)" onclick="ou('+i+')"><div class="ib'+((UIMG[si]||[])[i]?' im':'')+'">'+((UIMG[si]||[])[i]?'<img alt="" src="'+UIMG[si][i]+'">':LG((UIS[si]||UI)[i],si))+'</div><div class="x"><b>'+t.unit+' '+(t.ord[i]||(i+1))+'</b><small>'+u+(nl?' • '+nl+' دروس':'')+'</small></div><span>'+(rtl()?'‹':'›')+'</span></div>'}
function semCards(){var c=["c1","c2","c3"],t=T();return [0,1].map(function(k){var L=semUnits(k),nl=0;L.forEach(function(i){nl+=(DATA[si]&&DATA[si][i])?DATA[si][i].length:0});return '<div class="ui" style="--cb:var(--'+c[si]+'b)" onclick="smOpen('+k+')"><div class="ib" style="font-weight:700;font-size:20px">'+(k?"II":"I")+'</div><div class="x"><b>'+SEMN[k]+'</b><small>'+L.length+' '+t.units+' • '+nl+' دروس</small></div><span>'+(rtl()?'‹':'›')+'</span></div>'}).join("")}
function smOpen(k){sm=k;smt=0;nav("sem")}
function smTab(i){smt=i;draw()}
function smLib(kind,id){libKind=kind;libOpen(id)}
function semBody(){var t=T(),c=["c1","c2","c3"];if(smt==0)return semUnits(sm).map(function(i){return unitRow(U[si][i],i)}).join("")||'<div class="card">'+t.soon+'</div>';var kind=smt==1?"books":"packs",its=(libData()[kind]||[]).filter(function(x){return x.s==si});return (its.length?its.map(function(x){return '<div class="ui" style="--cb:var(--'+c[si]+'b)" onclick="smLib(\''+kind+'\',\''+x.id+'\')"><div class="ib">'+(smt==1?"📖":"📄")+'</div><div class="x"><b>'+x.t+'</b><small>'+(smt==1?"الكتاب المدرسي (يُفتح داخل التطبيق)":"الرزمة التعليمية (تُفتح داخل التطبيق)")+'</small></div><span>'+(rtl()?'‹':'›')+'</span></div>'}).join(""):'<div class="card"><b>سيُضاف قريباً</b></div>')+'<p class="sub">الكتاب والرزمة يشملان الفصلين معاً. تحتاج إنترنت لفتحهما.</p>'}
function semView(){var t=T(),c=["c1","c2","c3"],tabs=["📚 الوحدات","📖 الكتاب","📦 الرزمة"];return bar(SEMN[sm],1)+'<div class="col"><div class="ban" style="background:var(--'+c[si]+')"><b>'+SEMN[sm]+'</b>'+t.sub[si]+' • '+t.cls[sel]+'</div><div class="tabs">'+tabs.map(function(a,i){return '<div class="tab'+(smt==i?' on':'')+'" onclick="smTab('+i+')">'+a+'</div>'}).join("")+'</div>'+semBody()+'</div>'+nvb("subs")}
"""


def patch(path: Path, k: int) -> str:
    s = path.read_text(encoding="utf-8")
    if MARK in s:
        return "تم سابقاً"
    # 1) قائمة الوحدات في شاشة المادة تُستبدل ببطاقتَي الفصلين
    a = s.index("U[si].map(function(u,i){return '<div class=\"ui\"")
    b = s.index('}).join("")', a) + len('}).join("")')
    s = s[:a] + "semCards()" + s[b:]
    # 2) شاشة الفصل
    old = '}else if(V=="unit"){var L=DATA[si]?DATA[si][ui]:null;'
    assert s.count(old) == 1
    s = s.replace(old, '}else if(V=="sem"){h=semView();' + old)
    # 3) الدوال
    anchor = "function ou(i){ui=i;nav(\"unit\")}"
    assert s.count(anchor) == 1
    s = s.replace(anchor, anchor + JS.replace("__SEMS__", repr(SEMS).replace(" ", "")))
    path.write_text(s, encoding="utf-8")
    return "عُدّل"


def bump(sw: Path) -> None:
    t = sw.read_text(encoding="utf-8")
    m = re.search(r'(const V = P \+ "v)(\d+)"', t)
    if m:
        sw.write_text(t.replace(m.group(0), f'{m.group(1)}{int(m.group(2)) + 1}"', 1), encoding="utf-8")


def main(names):
    for n in names:
        d = ROOT / n / "10"
        r = patch(d / "index.html", APPS[n])
        if r == "عُدّل" and (d / "sw.js").exists():
            bump(d / "sw.js")
        print(f"{n}: {r}")


if __name__ == "__main__":
    main(sys.argv[1:] or list(APPS))
