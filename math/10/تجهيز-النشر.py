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
ver = hashlib.sha256(src.encode()).hexdigest()[:10]

head = ('<link rel="manifest" href="manifest.json"><meta name="theme-color" content="#1f8a9e">'
        '<link rel="icon" href="icon-192.png"><link rel="apple-touch-icon" href="icon-192.png">'
        '<meta name="apple-mobile-web-app-capable" content="yes">')
reg = ("<script>if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))</script>")
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
""", encoding='utf-8')
logo = HERE / 'شعار-المدرسة.jpg'
for n in (192, 512):
    if not shutil.which('sips'):  # خادم النشر (لينكس) بلا sips: تبقى الأيقونات المحفوظة في «نشر»
        assert (OUT / f'icon-{n}.png').is_file(), f'icon-{n}.png مفقودة ولا sips لتوليدها'
        continue
    subprocess.run(['sips', '-s', 'format', 'png', '-z', str(n), str(n), str(logo), '--out', str(OUT / f'icon-{n}.png')], check=True, capture_output=True)
print('✔ نشر/:', ', '.join(sorted(p.name for p in OUT.iterdir())), f'— الإصدار {ver}')
