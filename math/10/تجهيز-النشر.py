"""يجهّز مجلّد «نشر» للرفع على استضافةٍ ثابتة (Vercel وغيرها): صفحةٌ واحدة + عامل خدمة + manifest + أيقونات.

التشغيل بعد بناء الحزمة:
    python3 -I تضمين-الخط.py && python3 -I بناء-الملف-الواحد.py && python3 -I تجهيز-النشر.py

أوّل فتحٍ مع إنترنت يخزّن الصفحة في الجهاز، وما بعده يعمل بلا إنترنت، وكلّ تحديثٍ منشور يصل عند أوّل اتصالٍ تالٍ.
"""
import hashlib, json, shutil, subprocess
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE / 'نشر'
src = (HERE / 'دروس-الرياضيات-العاشر.html').read_text(encoding='utf-8')
upd = (HERE.parent.parent / 'shared' / 'update-notify.js').read_text(encoding='utf-8')   # إشعار التحديث المشترك بين التطبيقات
ver = hashlib.sha256(('r3' + src + upd + (HERE.parent.parent / 'shared' / 'intro.js').read_text(encoding='utf-8')).encode()).hexdigest()[:10]

head = ('<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#1f8a9e">'
        '<link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png">'
        '<meta name="apple-mobile-web-app-capable" content="yes">')
reg = ("<script>if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))</script>")
reg += '<script data-app="الرياضيات" data-icon="icon-192.png">' + upd.replace('</script', '<\\/script') + '</script>'
# غلاف المادة + جولة كينيكس (مشتركان في shared/): الصورتان تُنسخان إلى «نشر» لتعملا بلا إنترنت
intro = (HERE.parent.parent / 'shared' / 'intro.js').read_text(encoding='utf-8')
STEPS = [
    {"t": "أهلاً بك، أنا كينيكس", "x": "أهلاً بك يا {name}! أنا مرشدك في بوابة الصحابة التعليمية، وهذا تطبيق رياضيات الصف العاشر. سأعرّفك عليه في دقيقة، وبعدها أبقى معك في كل درس حتى تتفوّق بإذن الله.", "s": None, "i": 1},
    {"t": "📘 رياضيات الصف العاشر", "x": "تطبيق دروس الرياضيات لمدرسة التابعين الشرعية (أ) بإشراف المعلّم الفاضل أ. محمد فارس هاشم، وهو جزءٌ من بوابة الصحابة التعليمية التي تجمع موادّك كلّها في مكانٍ واحد.", "s": ".hero"},
    {"t": "🧩 أربع وحدات", "x": "الدروس مرتّبةٌ في أربع وحدات: الاقترانات، ثم الأسس واللوغاريتمات والارتباط والعدّ، ثم المثلثات، ثم الإنشاءات الهندسية. ابدأ من الأولى وتدرّج.", "s": ".unit.u1"},
    {"t": "📖 الدروس", "x": "اضغط على أي درسٍ لتفتحه: شرحٌ تفاعلي، ثم أمثلة وتمارين تحلّها بنفسك. الشريط الأخضر يريك مقدار ما أنجزته من الدرس.", "s": "#u1 .ls"},
    {"t": "✎ ورقة العمل والاختبار الذاتي", "x": "في آخر الوحدة ورقة عملٍ واختبارٌ ذاتي تقيس بهما فهمك، ويُحفظ أفضل نتيجةٍ لك. الخطأ ليس فشلاً، بل درسٌ يقرّبك من النجاح.", "s": "#u1 .ls:last-child"},
    {"t": "📶 بلا إنترنت", "x": "بعد أول فتحٍ مع الإنترنت تعمل الدروس بلا إنترنت، ويُحفظ تقدّمك على هذا الجهاز. وللعودة من أي درسٍ إلى هذه الصفحة اضغط زرّ 🏠 أو زرّ الرجوع.", "s": ".note"},
    {"t": "جاهز للانطلاق؟ 🚀", "x": "المذاكرة اليومية القليلة أفضل من الكثيرة المتقطّعة. ابدأ بدرسٍ واحد اليوم، وأنا معك في كل خطوة. وإذا أردت أن أعيد لك الجولة فستجد زرّها أسفل هذه الصفحة. بالتوفيق دائماً! ✨", "s": None},
]
CFG = ('<script>(function(){var o={id:"math10",cover:"cover.webp",kinex:"kinex.jpg",steps:' + json.dumps(STEPS, ensure_ascii=False)
       + ',ready:function(){var h=document.getElementById("hub");return h&&!h.hidden}};'
       + '(function(){var a=document.createElement("a");a.href="../../../index.html";a.textContent="🏠 الرجوع للبوابة";a.setAttribute("aria-label","الرجوع إلى بوابة الصحابة التعليمية");a.style.cssText="position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;background:#123C46;color:#fff;text-decoration:none;font-weight:700;font-size:13px;box-shadow:0 3px 10px rgba(0,0,0,.25);z-index:5";function m(){var h=document.querySelector(".hero");if(h&&!h.querySelector("a[href$=\'index.html\']")){h.style.position="relative";h.appendChild(a)}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",m);else m()})();'
       + 'SahabaIntro.run(o);document.addEventListener("DOMContentLoaded",function(){SahabaIntro.replay(o,document.querySelector(".note"))});'
       + 'if(document.readyState!=="loading")SahabaIntro.replay(o,document.querySelector(".note"))})()</script>')
UPD_SW = '''
/* إشعار التحديث وهو مغلق (أندرويد/كروم لتطبيقٍ مثبَّت على الشاشة الرئيسية): فحصٌ دوريّ لنسخة الصفحة */
const UPD='upd-math10';
self.addEventListener('periodicsync',e=>{if(e.tag==='check-update')e.waitUntil(checkUpdate())});
async function checkUpdate(){try{const r=await fetch('./index.html',{cache:'no-store'});const sig=[r.headers.get('etag'),r.headers.get('last-modified'),r.headers.get('content-length')].join('|');
const c=await caches.open(UPD),old=await c.match('sig'),was=old?await old.text():null;await c.put('sig',new Response(sig));
if(was&&was!==sig)await self.registration.showNotification('تحديث جديد · الرياضيات',{body:'صدرت نسخة جديدة من التطبيق. افتحه لتحصل على آخر التعديلات.',icon:'./icon-192.png',tag:'app-update',dir:'rtl',lang:'ar'})}catch(e){}}
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});
'''
assert '</head>' in src and '</body>' in src
# الدروس (1.5 م.ب) في ملفٍ مستقلّ يُحمَّل بعد ظهور الرئيسية، فتفتح الصفحة فوراً
k0 = src.index('<script>window.LESSONS=')
k1 = src.index('</script>', k0)
lessons_js = src[k0 + len('<script>'):k1]
src = src[:k0] + '<script src="lessons.js" defer></script>' + src[k1 + len('</script>'):]
assert src.count('function openL(id){') == 1
src = src.replace('function openL(id){', 'function openL(id){if(!window.LESSONS){setTimeout(()=>openL(id),120);return}', 1)
html = src.replace('</head>', head + '</head>', 1)
i = html.rindex('</body>')
html = html[:i] + reg + html[i:]
j = html.index('<body>') + len('<body>')   # الغلاف أوّلاً كي لا تُرى الصفحة قبله
html = html[:j] + '<script>' + intro.replace('</script', '<\\/script') + '</script>' + CFG + html[j:]

OUT.mkdir(exist_ok=True)
(OUT / 'index.html').write_text(html, encoding='utf-8')
(OUT / 'lessons.js').write_text(lessons_js, encoding='utf-8')
(OUT / 'manifest.json').write_text(json.dumps({
    'name': 'رياضيات الصف العاشر — مدرسة التابعين الشرعية (أ)', 'short_name': 'رياضيات العاشر',
    'lang': 'ar', 'dir': 'rtl', 'start_url': './index.html', 'scope': './', 'display': 'standalone',
    'background_color': '#f2f8fb', 'theme_color': '#1f8a9e',
    'icons': [{'src': 'icon-192.png', 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any maskable'},
              {'src': 'icon-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}]},
    ensure_ascii=False, indent=2), encoding='utf-8')
(OUT / 'sw.js').write_text(f"""const V='math10-{ver}',FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./cover.webp','./kinex.jpg','./lessons.js'];
self.addEventListener('install',e=>{{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))}});
self.addEventListener('activate',e=>{{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('math10-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))}});
// من الذاكرة أولاً (يعمل بلا إنترنت)، وتُحدَّث النسخة في الخلفية كلّما وُجد اتصال
self.addEventListener('fetch',e=>{{if(e.request.method!=='GET'||e.request.cache==='no-store')return;
e.respondWith(caches.match(e.request,{{ignoreSearch:true}}).then(hit=>{{const net=fetch(e.request).then(r=>{{if(r&&r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));return r}}).catch(()=>hit);
return hit||net||caches.match('./index.html')}}))}});
""" + UPD_SW, encoding='utf-8')
shutil.copyfile(HERE.parent.parent / 'shared' / 'covers' / 'math.webp', OUT / 'cover.webp')
shutil.copyfile(HERE.parent.parent / 'shared' / 'kinex.jpg', OUT / 'kinex.jpg')
logo = HERE / 'شعار-المدرسة.jpg'
for n in (192, 512):
    if not shutil.which('sips'):  # خادم النشر (لينكس) بلا sips: تبقى الأيقونات المحفوظة في «نشر»
        assert (OUT / f'icon-{n}.png').is_file(), f'icon-{n}.png مفقودة ولا sips لتوليدها'
        continue
    subprocess.run(['sips', '-s', 'format', 'png', '-z', str(n), str(n), str(logo), '--out', str(OUT / f'icon-{n}.png')], check=True, capture_output=True)
print('✔ نشر/:', ', '.join(sorted(p.name for p in OUT.iterdir())), f'— الإصدار {ver}')
