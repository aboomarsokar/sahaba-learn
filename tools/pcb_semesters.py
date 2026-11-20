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
MARK = "/*sem-v6*/"
OLD_MARKS = ("/*sem-v1*/", "/*sem-v2*/", "/*sem-v3*/", "/*sem-v4*/", "/*sem-v5*/")

JS = r"""
/*sem-v6*/
var SEMS=__SEMS__,SEMN=["الفصل الأول","الفصل الثاني"],sm=0,smt=0;
function semUnits(k){var n=U[si].length,L=(SEMS[si][k]||[]).filter(function(i){return i<n});if(k==SEMS[si].length-1){var mx=-1;SEMS[si].forEach(function(a){a.forEach(function(i){if(i>mx)mx=i})});for(var i=mx+1;i<n;i++)L.push(i)}return L}
function smDone(u,j){try{return !!PG().d[si+"-"+u+"-"+j]}catch(e){return false}}
function smCount(u){var L=(DATA[si]&&DATA[si][u])||[],d=0;L.forEach(function(x,j){if(smDone(u,j))d++});return [d,L.length]}
function smTotals(k){var d=0,t=0;semUnits(k).forEach(function(u){var c=smCount(u);d+=c[0];t+=c[1]});return [d,t]}
function unitRow(u,i){var t=T(),c=["c1","c2","c3"],cn=smCount(i);return '<div class="ui" style="--cb:var(--'+c[si]+'b)" onclick="ou('+i+')"><div class="ib'+((UIMG[si]||[])[i]?' im':'')+'">'+((UIMG[si]||[])[i]?'<img alt="" src="'+UIMG[si][i]+'">':LG((UIS[si]||UI)[i],si))+'</div><div class="x"><b>'+t.unit+' '+(t.ord[i]||(i+1))+'</b><small>'+u+(cn[1]?' • '+cn[0]+'/'+cn[1]+' دروس':'')+'</small></div><span>'+(rtl()?'‹':'›')+'</span></div>'}
function semCards(){var c=["c1","c2","c3"],t=T();return [0,1].map(function(k){var L=semUnits(k),tt=smTotals(k);return '<div class="ui" style="--cb:var(--'+c[si]+'b)" onclick="smOpen('+k+')"><div class="ib" style="font-weight:700;font-size:20px">'+(k?"II":"I")+'</div><div class="x"><b>'+SEMN[k]+'</b><small>'+L.length+' '+t.units+' • '+tt[1]+' دروس'+(tt[0]?' • أنجزت '+tt[0]:'')+'</small></div><span>'+(rtl()?'‹':'›')+'</span></div>'}).join("")}
function smOpen(k){sm=k;smt=0;nav("sem")}
function smTab(i){smt=i;draw()}
function smLib(kind,id){libKind=kind;libOpen(id)}
function smLes(u,j){ui=u;ol(j)}
function smLq(u,j){ui=u;ol(j)}
function smIsFav(u,j){try{return !!(window.__sciIsFav&&window.__sciIsFav(u,j))}catch(e){return false}}
function smFav(u,j){try{window.__sciFavK(u,j)}catch(e){}draw()}
function smPts(x){var a=[];(x.e||[]).forEach(function(l){if(a.length>=6)return;if(l.slice(0,2)=="- "&&l.indexOf("|")<0)a.push(l.slice(2));});if(!a.length)(x.e||[]).forEach(function(l){if(a.length<3&&l.charAt(0)!="#"&&l.charAt(0)!="!"&&l.charAt(0)!="@"&&l.indexOf("|")<0&&l.length>20)a.push(l)});return a}
function smCss(){if(document.getElementById("smcss"))return;var st=document.createElement("style");st.id="smcss";st.textContent=".stabs{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}.stab{grid-column:span 2}.stab:nth-child(n+4){grid-column:span 3}.fv{font-size:1.3rem;padding:0 6px}.stab{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:86px;padding:8px 2px;border-radius:16px;border:1.5px solid #7fe0a2;background:var(--card);color:#00a152;font:700 1rem inherit;cursor:pointer;text-align:center;line-height:1.2}.stab i{font-style:normal;font-size:1.8rem;line-height:1}.stab.on{background:#00a152;color:#fff;border-color:#00a152;box-shadow:0 3px 0 #ffc107}.sprg{background:var(--card);border:1px solid var(--bd);border-radius:16px;padding:12px 14px}.sprg .r{display:flex;justify-content:space-between;font-weight:700;margin-bottom:8px}.sprg .t{height:9px;border-radius:9px;background:#d3f5de;overflow:hidden}.sprg .t i{display:block;height:100%;background:#00a152;border-radius:9px}.sgh{font-weight:700;color:#00a152;margin:10px 2px 2px}.ui.dn{border-color:#ffc107}.ui .ck{color:#00a152;font-weight:700}";document.head.appendChild(st)}
function semBody(){var t=T(),c=["c1","c2","c3"],cb='style="--cb:var(--'+c[si]+'b)"',ar=rtl()?'‹':'›';
if(smt==0)return semUnits(sm).map(function(i){return unitRow(U[si][i],i)}).join("")||'<div class="card">'+t.soon+'</div>';
if(smt==1){var h="";semUnits(sm).forEach(function(u){var L=(DATA[si]&&DATA[si][u])||[];h+='<div class="sgh">'+t.unit+' '+(t.ord[u]||(u+1))+' — '+U[si][u]+'</div>'+L.map(function(x,j){var dn=smDone(u,j);return '<div class="ui'+(dn?' dn':'')+'" '+cb+' onclick="smLes('+u+','+j+')"><div class="ib">'+(dn?'✅':'📖')+'</div><div class="x"><b>'+x.t+'</b></div><span class="fv" onclick="event.stopPropagation();smFav('+u+','+j+')" title="مفضّلة">'+(smIsFav(u,j)?'⭐':'☆')+'</span><span>'+ar+'</span></div>'}).join("")});return h||'<div class="card">'+t.soon+'</div>'}
if(smt==2){var h='<p class="sub">ملخّص سريع لنقاط كل درس قبل الاختبار. اضغط على الدرس لتفتحه.</p>';semUnits(sm).forEach(function(u){var L=(DATA[si]&&DATA[si][u])||[];h+='<div class="sgh">'+t.unit+' '+(t.ord[u]||(u+1))+' — '+U[si][u]+'</div>'+L.map(function(x,j){var p=smPts(x);return '<details class="card" style="padding:10px 14px;margin-bottom:8px"><summary style="font-weight:700;cursor:pointer">'+x.t+'</summary>'+(p.length?'<ul style="margin:8px 0 8px;padding-inline-start:20px;line-height:1.9">'+p.map(function(l){return '<li>'+l+'</li>'}).join("")+'</ul>':'<p class="sub">لا ملخّص لهذا الدرس بعد.</p>')+'<button class="btn o" style="padding:9px" onclick="smLes('+u+','+j+')">افتح الدرس ‹</button></details>'}).join("")});return h}
if(smt==3){var h='<p class="sub">اختر درساً ثم اضغط «الأسئلة» في آخره لتختبر نفسك.</p>';semUnits(sm).forEach(function(u){var L=(DATA[si]&&DATA[si][u])||[];h+='<div class="sgh">'+t.unit+' '+(t.ord[u]||(u+1))+' — '+U[si][u]+'</div>'+L.map(function(x,j){return '<div class="ui" '+cb+' onclick="smLq('+u+','+j+')"><div class="ib">🎯</div><div class="x"><b>'+x.t+'</b><small>افتح الدرس واختبر نفسك في آخره</small></div><span>'+ar+'</span></div>'}).join("")});return h+'<div class="sgh">اختبارات عامة</div><div class="ui" '+cb+' onclick="startQN(si)"><div class="ib">📝</div><div class="x"><b>اختبارات المادة كلها</b><small>سهل ومتوسط وصعب — ٩ أسئلة عشوائية</small></div><span>'+ar+'</span></div>'}
var out="";["books","packs"].forEach(function(kind){var its=(libData()[kind]||[]).filter(function(x){return x.s==si});its.forEach(function(x){out+='<div class="ui" '+cb+' onclick="smLib(\''+kind+'\',\''+x.id+'\')"><div class="ib">'+(kind=="books"?"📖":"📄")+'</div><div class="x"><b>'+x.t+'</b><small>'+(kind=="books"?"الكتاب المدرسي":"الرزمة التعليمية")+' (يُفتح داخل التطبيق)</small></div><span>'+ar+'</span></div>'})});
return (out||'<div class="card"><b>سيُضاف قريباً</b></div>')+'<p class="sub">الكتاب والرزمة يشملان الفصلين معاً، ويحتاجان إنترنت.</p>'}
function semView(){smCss();var t=T(),c=["c1","c2","c3"],tabs=[["📚","الوحدات"],["📖","الدروس"],["💡","المراجعة"],["📝","الاختبارات"],["🗂️","المصادر"]],tt=smTotals(sm),pc=tt[1]?Math.round(tt[0]*100/tt[1]):0;return bar(SEMN[sm],1)+'<div class="col"><div class="ban" style="background:var(--'+c[si]+')"><b>'+SEMN[sm]+'</b>'+t.sub[si]+' • '+t.cls[sel]+'</div><div class="sprg"><div class="r"><span>تقدّمك في الفصل</span><span>'+tt[0]+' / '+tt[1]+' درساً'+(tt[1]>tt[0]?' • بقي '+(tt[1]-tt[0]==1?'درس':tt[1]-tt[0]==2?'درسان':(tt[1]-tt[0])):'')+'</span></div><div class="t"><i style="width:'+pc+'%"></i></div></div><div class="stabs">'+tabs.map(function(a,i){return '<div class="stab'+(smt==i?' on':'')+'" onclick="smTab('+i+')"><i>'+a[0]+'</i>'+a[1]+'</div>'}).join("")+'</div>'+semBody()+'</div>'+nvb("subs")}
"""


def patch(path: Path, k: int) -> str:
    s = path.read_text(encoding="utf-8")
    js = JS.replace("__SEMS__", repr(SEMS).replace(" ", ""))
    if MARK in s:
        return "تم سابقاً"
    om = next((m for m in OLD_MARKS if m in s), None)
    if om:                               # ترقية من نسخةٍ أقدم
        a = s.index("\n" + om)
        b = s.index("function semView(){", a)
        e = s.index("\n", b)
        s = s[:a] + js + s[e + 1:] if False else s[:a] + js.rstrip("\n") + s[e:]
        path.write_text(s, encoding="utf-8")
        return "رُقّي"
    # 1) قائمة الوحدات في شاشة المادة تُستبدل ببطاقتَي الفصلين
    a = s.index("U[si].map(function(u,i){return '<div class=\"ui\"")
    b = s.index('}).join("")', a) + len('}).join("")')
    s = s[:a] + "semCards()" + s[b:]
    old = '}else if(V=="unit"){var L=DATA[si]?DATA[si][ui]:null;'
    assert s.count(old) == 1
    s = s.replace(old, '}else if(V=="sem"){h=semView();' + old)
    anchor = "function ou(i){ui=i;nav(\"unit\")}"
    assert s.count(anchor) == 1
    s = s.replace(anchor, anchor + js)
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
        if r in ("عُدّل", "رُقّي") and (d / "sw.js").exists():
            bump(d / "sw.js")
        print(f"{n}: {r}")


if __name__ == "__main__":
    main(sys.argv[1:] or list(APPS))
