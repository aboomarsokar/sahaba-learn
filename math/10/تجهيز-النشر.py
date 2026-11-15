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
ver = hashlib.sha256((src + upd).encode()).hexdigest()[:10]

head = ('<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#1f8a9e">'
        '<link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png">'
        '<meta name="apple-mobile-web-app-capable" content="yes">')
reg = ("<script>if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))</script>")
reg += '<script data-app="الرياضيات" data-icon="icon-192.png">' + upd.replace('</script', '<\\/script') + '</script>'
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
html = src.replace('</head>', head + '</head>', 1)
i = html.rindex('</body>')
html = html[:i] + reg + html[i:]

OUT.mkdir(exist_ok=True)
(OUT / 'index.html').write_text(html, encoding='utf-8')
(OUT / 'manifest.json').write_text(json.dumps({
    'name': 'رياضيات الصف العاشر — مدرسة التابعين الشرعية (أ)', 'short_name': 'رياضيات العاشر',
    'lang': 'ar', 'dir': 'rtl', 'start_url': './index.html', 'scope': './', 'display': 'standalone',
    'background_color': '#f2f8fb', 'theme_color': '#1f8a9e',
    'icons': [{'src': 'icon-192.png', 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any maskable'},
              {'src': 'icon-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}]},
    ensure_ascii=False, indent=2), encoding='utf-8')
(OUT / 'sw.js').write_text(f"""const V='math10-{ver}',FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))}});
self.addEventListener('activate',e=>{{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('math10-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))}});
// من الذاكرة أولاً (يعمل بلا إنترنت)، وتُحدَّث النسخة في الخلفية كلّما وُجد اتصال
self.addEventListener('fetch',e=>{{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request,{{ignoreSearch:true}}).then(hit=>{{const net=fetch(e.request).then(r=>{{if(r&&r.ok)caches.open(V).then(c=>c.put(e.request,r.clone()));return r}}).catch(()=>hit);
return hit||net||caches.match('./index.html')}}))}});
""" + UPD_SW, encoding='utf-8')
logo = HERE / 'شعار-المدرسة.jpg'
for n in (192, 512):
    if not shutil.which('sips'):  # خادم النشر (لينكس) بلا sips: تبقى الأيقونات المحفوظة في «نشر»
        assert (OUT / f'icon-{n}.png').is_file(), f'icon-{n}.png مفقودة ولا sips لتوليدها'
        continue
    subprocess.run(['sips', '-s', 'format', 'png', '-z', str(n), str(n), str(logo), '--out', str(OUT / f'icon-{n}.png')], check=True, capture_output=True)
print('✔ نشر/:', ', '.join(sorted(p.name for p in OUT.iterdir())), f'— الإصدار {ver}')
