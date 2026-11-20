"""الوحدة ← بطاقات الدروس، والدرس ← شرحه التفاعلي بداخله (الفيزياء والكيمياء والأحياء للعاشر).

قبل: بعض الوحدات كانت تفتح صفحةً تفاعلية واحدة للوحدة كلّها بلا قائمة دروس.
بعد: كلّ وحدةٍ تعرض دروسها كبطاقاتٍ منفصلة (الرقم والعنوان وعدد الأسئلة وحالة الوسام)، وكلّ درسٍ يفتح صفحته وفيها
«الشرح التفاعلي» (إن وُجد لذلك الدرس) ثم الشرح النصّي والمراجعة والمستويات.
الربط: LX[وحدة] قائمة ← ملفّ لكلّ درس بحسب رقمه؛ نصٌّ واحد ← ملفّ الوحدة يظهر في أول درسٍ فيها.

الاستعمال:   python3 tools/pcb_lessons.py              (الثلاثة)   أو   python3 tools/pcb_lessons.py physics
آمن للتكرار. يُستدعى من make_pcb_apps.py بعد pcb_home.py.
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APPS = ["physics", "chemistry", "biology"]
A, B = "<!--lessons-v1-->", "<!--/lessons-v1-->"

CSS = r""".l8c{display:flex;align-items:center;gap:12px;width:100%;text-align:right;background:#fff;border:2px solid var(--c);border-radius:20px;padding:12px 13px;margin-bottom:12px;box-shadow:0 5px 0 var(--c);font:inherit;color:#113D2E;cursor:pointer}
.l8c .n{width:46px;height:46px;border-radius:14px;background:linear-gradient(145deg,var(--c),var(--d));color:#fff;display:grid;place-items:center;font:800 1.2rem system-ui;flex:none}
.l8c .tx{flex:1;min-width:0}.l8c b{display:block;font-size:1.02rem;line-height:1.45}.l8c small{color:#5f7a6e;font-size:.82rem}
.l8c .tg{display:inline-block;background:linear-gradient(135deg,#ff6d00,#ffab00);color:#fff;border-radius:99px;padding:0 9px;font-size:.72rem;font-weight:700;margin-inline-start:6px}
.l8c .st{font-size:1.5rem;flex:none;color:var(--c);font-weight:800}
.l8i{background:#fff;border:2.5px solid #00c853;border-radius:20px;padding:10px;margin:0 0 12px}
.l8i .hd{display:flex;align-items:center;justify-content:space-between;width:100%;border:0;background:none;font:700 1.05rem inherit;color:#113D2E;padding:4px 6px 8px;cursor:pointer}
.l8i .hd i{font-style:normal;font-size:.8rem;color:#fff;background:#00c853;border-radius:99px;padding:1px 10px}
.l8i .cxf{display:block;width:100%;margin:0;height:min(78dvh,640px);border:0;border-radius:14px;background:var(--bg,#FAF6EB)}"""

JS = r"""
(function(){
function css(){if(document.getElementById("l8css"))return;var st=document.createElement("style");st.id="l8css";st.textContent=__CSS__;document.head.appendChild(st)}
var PAL=[["#00c853","#009624"],["#ff6d00","#e65100"],["#2979ff","#1c54b2"],["#e91e63","#ad1457"],["#7c4dff","#5e35b1"],["#00bfa5","#00897b"],["#ffab00","#ff8f00"],["#f44336","#c62828"],["#00b0ff","#0277bd"]];
function esc2(x){return String(x).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function hasLX(u,j){var v=window.LX&&LX[si+"-"+u];return Array.isArray(v)?!!v[j]:(typeof v==="string"&&j==0)}
window.ou=function(i){ui=i;nav("unit")};
window.cxOnlyReview=function(){};
function unitCards(){css();var col=document.querySelector("#app .col");if(!col)return;var rows=[].slice.call(col.querySelectorAll('.ui[onclick^="ol("]'));if(!rows.length)return;var L=(DATA[si]&&DATA[si][ui])||[],o={};try{o=lsGet()}catch(e){}
 rows.forEach(function(r,j){var x=L[j]||{},k=si+"-"+ui+"-"+j,q=(window.LESSONQ&&LESSONQ[k])||[],dn=!!(o[k]&&o[k].b);
  var pc=PAL[ui%PAL.length],b=document.createElement("button");b.type="button";b.className="l8c";b.style.setProperty("--c",pc[0]);b.style.setProperty("--d",pc[1]);b.setAttribute("onclick","ol("+j+")");
  b.innerHTML='<span class="n">'+(j+1)+'</span><span class="tx"><b>'+esc2(x.t||"")+'</b><small>'+(q.length?q.length+" سؤالاً":"شرح ومراجعة")+(hasLX(ui,j)?'<span class="tg">شرح تفاعلي</span>':"")+'</small></span><span class="st">'+(dn?"🏅":"‹")+'</span>';
  r.replaceWith(b)})}
function mount(){var v=LX[si+"-"+ui],f=Array.isArray(v)?v[li]:v,h=document.getElementById("cxh");if(!f||!h)return;var fr=document.createElement("iframe");fr.id="cxf";fr.className="cxf";fr.title="الشرح التفاعلي";fr.setAttribute("loading","eager");fr.onload=function(){try{window.cxTheme()}catch(e){}};fr.src=f;h.replaceWith(fr)}
function lessonInt(){css();var old=document.querySelector("#app .l8i");if(old)old.remove();if(!hasLX(ui,li))return;var col=document.querySelector("#app .col")||document.getElementById("app");if(!col)return;
 var d=document.createElement("div");d.className="l8i";d.innerHTML='<button type="button" class="hd"><span>🎮 الشرح التفاعلي</span><i>إخفاء</i></button><div id="cxh"></div>';col.insertBefore(d,col.children[1]||null);
 mount();
 d.querySelector(".hd").onclick=function(){var f=d.querySelector(".cxf"),i=this.querySelector("i");if(!f)return;var h=f.style.display==="none";f.style.display=h?"block":"none";i.textContent=h?"إخفاء":"إظهار"}}
var _d=draw;draw=function(){var r=_d.apply(this,arguments);try{if(V=="unit")unitCards();else if(V=="lesson")lessonInt()}catch(e){try{console.error(e)}catch(x){}}return r};
try{draw()}catch(e){}
})();
"""


def patch(app: str) -> str:
    p = ROOT / app / "10" / "index.html"
    s = p.read_text(encoding="utf-8")
    if A in s:
        a = s.index(A)
        b = s.index(B, a) + len(B)
        s = s[:a] + s[b:].lstrip("\n")
    blk = A + "\n<script>" + JS.replace("__CSS__", repr(CSS)) + "</script>\n" + B + "\n"
    i = s.rfind("</body>")
    assert i > 0
    s = s[:i] + blk + s[i:]
    p.write_text(s, encoding="utf-8")
    return "✓"


if __name__ == "__main__":
    for a in (sys.argv[1:] or APPS):
        print(a, patch(a))
