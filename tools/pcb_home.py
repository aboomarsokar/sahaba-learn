"""الشاشة الرئيسية الجديدة لتطبيقات الفيزياء والكيمياء والأحياء (العاشر): عنوان المادة، بحث، لافتة ترحيب،
شبكة «المواضيع» بنسب الإنجاز لكلّ وحدةٍ فعلية، وشريط تنقّل سفلي.

الاستعمال:   python3 tools/pcb_home.py                (الثلاثة)    أو   python3 tools/pcb_home.py physics
آمن للتكرار (يستبدل الكتلة السابقة). يُستدعى بعد make_pcb_apps.py لأنّ المولِّد يعيد كتابة الملفّ.
الوحدات تُقرأ من بيانات التطبيق نفسها (U وDATA)، فلا شيء هنا يخصّ وحدةً بعينها.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APPS = ["physics", "chemistry", "biology"]
A, B = "<!--home-v1-->", "<!--/home-v1-->"

CSS = r""".h8{max-width:560px;margin:0 auto;padding:calc(14px + env(safe-area-inset-top,0px)) 16px 110px;display:flex;flex-direction:column;gap:14px}
.h8t{display:flex;align-items:center;gap:10px}.h8t h1{flex:1;margin:0;font-size:1.3rem;line-height:1.3;color:#113D2E;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.h8b{display:flex;align-items:center;gap:8px}.h8i{width:36px;height:36px;border-radius:12px;border:1px solid #e9dfc8;background:#fff;display:grid;place-items:center;font-size:1.15rem;color:#113D2E;text-decoration:none;cursor:pointer}
.h8s{display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid #e1d6bd;border-radius:999px;padding:9px 16px}.h8s svg{width:22px;height:22px;color:#1f7a45;flex:none}.h8s input{flex:1;border:0;outline:0;background:transparent;font:inherit;color:#113D2E;min-width:0}
.h8hero{display:flex;align-items:center;gap:8px;border-radius:24px;background:linear-gradient(135deg,#bfe3b4,#e6f3d3);padding:16px 18px;min-height:150px;box-shadow:0 8px 22px rgba(17,61,46,.1);overflow:hidden}
.h8hero .tx{flex:1;min-width:0}.h8hero h2{margin:0 0 4px;font-size:1.35rem;color:#0f4d2e;line-height:1.3}.h8hero p{margin:0 0 10px;font-size:.88rem;color:#1d4a30;line-height:1.6}
.h8hero button{border:0;border-radius:999px;background:#0e6b3c;color:#fff;padding:8px 18px;font:700 .95rem inherit;cursor:pointer}.h8hero svg{width:118px;height:118px;flex:none}
.h8sec{display:flex;align-items:center;justify-content:space-between}.h8sec b{font-size:1.2rem;color:#113D2E}.h8sec button{border:0;background:none;color:#1f7a45;font:700 .9rem inherit;cursor:pointer}
.h8grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.h8u{border:0;background:#fff;border-radius:20px;padding:13px 12px;text-align:right;box-shadow:0 4px 14px rgba(17,61,46,.08);display:flex;flex-direction:column;gap:5px;cursor:pointer;color:#113D2E;font:inherit;min-width:0}
.h8u .ic{width:46px;height:46px;border-radius:50%;background:#d9eed9;color:#1f7a45;display:grid;place-items:center;font:700 1rem/1 system-ui,serif;overflow:hidden}.h8u .ic img{width:100%;height:100%;object-fit:cover}
.h8u b{font-size:1rem;line-height:1.4}.h8u small{color:#5f7a6e;font-size:.8rem}.h8u .tr{height:7px;border-radius:99px;background:#e6ecdf;overflow:hidden}.h8u .tr i{display:block;height:100%;background:linear-gradient(90deg,#7fbf86,#1f7a45);border-radius:99px}
.h8r{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #e9dfc8;border-radius:16px;padding:11px 13px;margin-bottom:8px;width:100%;text-align:right;font:inherit;color:#113D2E;cursor:pointer}.h8r .ic{width:40px;height:40px;border-radius:50%;background:#d9eed9;color:#1f7a45;display:grid;place-items:center;font-weight:700;flex:none}.h8r b{display:block}.h8r small{color:#5f7a6e}
.h8nav{position:fixed;bottom:0;inset-inline:0;max-width:560px;margin:0 auto;background:#fffaf0;border-radius:26px 26px 0 0;box-shadow:0 -6px 20px rgba(17,61,46,.1);display:grid;grid-template-columns:repeat(5,1fr);padding:8px 6px calc(8px + env(safe-area-inset-bottom,0px));z-index:30}
.h8nav button{border:0;background:none;display:flex;flex-direction:column;align-items:center;gap:2px;color:#8a8f86;font:700 .8rem inherit;padding:4px 0;cursor:pointer}.h8nav button svg{width:26px;height:26px}.h8nav button.on{color:#0e6b3c}
.h8w{background:#fff;border:1px solid #e9dfc8;border-radius:18px;padding:12px 14px;text-align:center}.h8w p{margin:6px 0;line-height:1.9}.h8w small{color:#5f7a6e}
.h8e{text-align:center;color:#5f7a6e;padding:20px}"""

JS = r"""
(function(){
var CF=[{n:"الفيزياء",t:"اكتشف قوانين الكون",d:"ابدأ رحلتك في فهم القوانين والظواهر الفيزيائية اليوم",
 s:'<svg viewBox="0 0 120 120"><g fill="none" stroke="#1f7a45" stroke-width="3"><ellipse cx="60" cy="60" rx="52" ry="19"/><ellipse cx="60" cy="60" rx="52" ry="19" transform="rotate(60 60 60)"/><ellipse cx="60" cy="60" rx="52" ry="19" transform="rotate(120 60 60)"/></g><circle cx="60" cy="60" r="13" fill="#fff6c9" stroke="#e3b94d" stroke-width="3"/><circle cx="108" cy="52" r="5" fill="#1f7a45"/><circle cx="22" cy="42" r="5" fill="#1f7a45"/><circle cx="74" cy="104" r="5" fill="#1f7a45"/></svg>'},
 {n:"الكيمياء",t:"اكتشف عالم التفاعلات",d:"تعلّم الكيمياء خطوة بخطوة من خلال دروس تفاعلية وتجارب عملية",
 s:'<svg viewBox="0 0 120 120"><path d="M48 12h24v22c20 8 32 24 32 44a34 34 0 0 1-34 34h-20a34 34 0 0 1-34-34c0-20 12-36 32-44z" fill="#f4fbf1" stroke="#1f7a45" stroke-width="3"/><path d="M20 78c10-8 20 8 40 0s30-8 40 0a34 34 0 0 1-34 30h-12a34 34 0 0 1-34-30z" fill="#8fd49a" opacity=".85"/><circle cx="40" cy="92" r="4" fill="#fff"/><circle cx="62" cy="86" r="3" fill="#fff"/><g stroke="#1f7a45" stroke-width="2.5"><path d="M96 30l10 8M106 38l-4 12"/></g><circle cx="94" cy="28" r="6" fill="#1f7a45"/><circle cx="108" cy="38" r="5" fill="#2f9e6b"/><circle cx="100" cy="52" r="5" fill="#1f7a45"/></svg>'},
 {n:"الأحياء",t:"اكتشف عالم الحياة",d:"ابدأ رحلتك في علم الأحياء اليوم",
 s:'<svg viewBox="0 0 120 120"><path d="M38 8c30 14 -30 34 0 52s-30 34 0 52" fill="none" stroke="#1f7a45" stroke-width="5" stroke-linecap="round"/><path d="M82 8c-30 14 30 34 0 52s30 34 0 52" fill="none" stroke="#7fbf86" stroke-width="5" stroke-linecap="round"/><g stroke="#2f9e6b" stroke-width="3" stroke-linecap="round"><path d="M46 20h28M42 38h36M42 82h36M46 100h28"/></g><path d="M92 70c18-4 22-24 22-24s-22-2-28 14c-2 6 0 10 6 10z" fill="#8fd49a" stroke="#1f7a45" stroke-width="2"/></svg>'}];
var IC={home:'<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>',les:'<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z M12 6v14"/>',quiz:'<path d="M5 4h14v16H5z M9 9h6 M9 13h6 M9 17h3"/>',prog:'<path d="M4 20V10 M10 20V4 M16 20v-8 M22 20H2"/>',me:'<circle cx="12" cy="8" r="4.5"/><path d="M3.5 21c.8-4.6 4.3-6.5 8.5-6.5s7.7 1.9 8.5 6.5z"/>'};
var HQ="",ALL=false;
function css(){if(document.getElementById("h8css"))return;var st=document.createElement("style");st.id="h8css";st.textContent=__CSS__;document.head.appendChild(st)}
function S(){try{return typeof PCB_ACTIVE_SUBJECT!=="undefined"?PCB_ACTIVE_SUBJECT:0}catch(e){return 0}}
function done(u,j){try{var o=lsGet(),k=S()+"-"+u+"-"+j;return !!(o[k]&&o[k].b)}catch(e){return false}}
function cnt(u){var L=(DATA[S()]&&DATA[S()][u])||[],d=0;L.forEach(function(x,j){if(done(u,j))d++});return [d,L.length]}
function esc2(x){return String(x).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function dr(n){return n==1?'درس':n==2?'درسان':(n>=3&&n<=10)?n+' دروس':n+' درساً'}
function wis(){var w=null;try{w=window.SahabaWisdom&&SahabaWisdom.today(["physics","chemistry","biology"][S()])}catch(e){}return w?'<div class="h8w"><small>💡 حكمة اليوم</small><p dir="auto">'+esc2(w[0])+'</p><small>— '+esc2(w[1])+'</small></div>':""}
function nextL(){var D=DATA[S()]||[];for(var u=0;u<D.length;u++)for(var j=0;j<(D[u]||[]).length;j++)if(!done(u,j))return [u,j];return [0,0]}
function icon(u){var sy=(window.UIS&&UIS[S()]||[])[u];return esc2(sy||"•")}
function nav(on){var it=[["home","الرئيسية",IC.home,"tab('home')"],["les","الدروس",IC.les,"op(PCB_ACTIVE_SUBJECT)"],["quiz","الاختبارات",IC.quiz,"startQ()"],["prog","تقدّمي",IC.prog,"rpt()"],["me","الملف",IC.me,"mn(true)"]];
 return '<nav class="h8nav">'+it.map(function(x){return '<button type="button" class="'+(on==x[0]?"on":"")+'" onclick="'+x[3]+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">'+x[2]+'</svg>'+x[1]+'</button>'}).join("")+'</nav>'}
function results(){var q=HQ.trim(),r=document.getElementById("h8res"),m=document.getElementById("h8main");if(!r)return;if(!q){r.innerHTML="";m.style.display="";return}m.style.display="none";var out=[],D=DATA[S()]||[];
 D.forEach(function(L,u){(L||[]).forEach(function(x,j){if((x.t+" "+(U[S()][u]||"")).indexOf(q)>=0)out.push('<button type="button" class="h8r" onclick="smLes('+u+','+j+')"><span class="ic">'+icon(u)+'</span><span><b>'+esc2(x.t)+'</b><small>'+esc2(U[S()][u]||"")+'</small></span></button>')})});
 r.innerHTML=out.join("")||'<div class="h8e">لا نتائج لـ «'+esc2(q)+'»</div>'}
window.h8go=function(){var n=nextL();try{si=S()}catch(e){}smLes(n[0],n[1])};
window.h8all=function(){ALL=!ALL;window.hm()};
window.hm=function(){css();var s=S();try{si=s}catch(e){}var c=CF[s]||CF[0],us=(U&&U[s])||[],show=ALL?us.length:Math.min(6,us.length);
 var grid=us.slice(0,show).map(function(t,u){var k=cnt(u),p=k[1]?Math.round(k[0]*100/k[1]):0;return '<button type="button" class="h8u" onclick="ou('+u+')"><span class="ic">'+icon(u)+'</span><b>'+esc2(t)+'</b><small>'+(k[1]==1?'درس واحد':dr(k[1]))+' • '+p+'%</small><span class="tr"><i style="width:'+p+'%"></i></span></button>'}).join("");
 $("app").style.paddingBottom="0";
 $("app").innerHTML='<main class="h8"><header class="h8t"><h1>'+c.n+' — الصف العاشر</h1><span class="h8b"><span id="h8chip"></span><a class="h8i" href="../../index.html" aria-label="بوابة الصحابة التعليمية">🏠</a><button class="h8i" type="button" onclick="mn(true)" aria-label="القائمة">☰</button></span></header>'
 +'<label class="h8s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="h8q" type="search" placeholder="ابحث عن درس أو موضوع..." value="'+esc2(HQ)+'" autocomplete="off"></label><div id="h8res"></div>'
 +'<div id="h8main" style="display:flex;flex-direction:column;gap:14px"><section class="h8hero"><div class="tx"><h2>'+c.t+'</h2><p>'+c.d+'</p><button type="button" onclick="h8go()">ابدأ الآن ←</button></div>'+c.s+'</section>'
 +'<div class="h8sec"><b>المواضيع الرئيسية</b>'+(us.length>6?'<button type="button" onclick="h8all()">'+(ALL?'عرض أقل':'عرض الكل ›')+'</button>':'')+'</div><div class="h8grid">'+grid+'</div>'+wis()+'</div></main>'+nav("home");
 var inp=document.getElementById("h8q");inp.oninput=function(){HQ=this.value;results()};results();
 try{var ch=document.getElementById("h8chip");if(ch&&window.Durra)ch.appendChild(Durra.chip())}catch(e){}};
/* جولة كينيكس: خطواتٌ تناسب الشاشة الجديدة */
try{if(window.KX&&KX.steps&&KX.steps.length){var f=KX.steps[0],l=KX.steps[KX.steps.length-1];KX.steps=[f,
 {t:"🔎 ابحث عن درس",x:"اكتب اسم الدرس أو الموضوع لتصل إليه فوراً.",s:".h8s"},
 {t:"🚀 ابدأ من هنا",x:"يأخذك هذا الزرّ إلى أول درسٍ لم تُنجزه، فتتابع رحلتك.",s:".h8hero"},
 {t:"📚 مواضيع المادة",x:"كلّ وحدة تُظهر عدد دروسها ونسبة إنجازك فيها. اضغط وحدةً لتفتح دروسها.",s:".h8grid"},
 {t:"🧭 التنقّل",x:"من هنا تصل إلى الدروس والاختبارات وتقدّمك وملفّك.",s:".h8nav"},l]}}catch(e){}
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
    blk = A + "\n<script>" + JS.replace("__CSS__", repr(CSS).replace("\\n", "\\n")) + "</script>\n" + B + "\n"
    i = s.rfind("</body>")
    assert i > 0
    s = s[:i] + blk + s[i:]
    p.write_text(s, encoding="utf-8")
    return "✓"


if __name__ == "__main__":
    for a in (sys.argv[1:] or APPS):
        print(a, patch(a))
