"""يجمع الصفحة الرئيسية وكلّ الدروس الجاهزة في ملفّ HTML واحد يعمل بلا إنترنت.

التشغيل من داخل مجلّد الدروس:
    python3 بناء-الملف-الواحد.py

الناتج: «دروس-الرياضيات-العاشر.html» — هو الذي يُرسَل للطلاب.
عند إضافة درس جديد: أضِفه إلى LESSONS هنا، وإلى L وU1/U2 في الرئيسية.html.
"""
import base64
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
HUB = HERE / 'الرئيسية.html'
LOGO = HERE / 'شعار-المدرسة.jpg'
OUT = HERE / 'دروس-الرياضيات-العاشر.html'
LESSONS = {
    'corr': 'نشاط-الارتباط.html',
    'count': 'نشاط-العد-والتباديل.html',
    'binom': 'نشاط-ذات-الحدين.html',
    'test2': 'اختبار-الوحدة-الثانية.html',
    'explog': 'نشاط-الأسس-واللوغاريتمات.html',
    'expf': 'نشاط-الاقتران-الأسي.html',
    'logf': 'نشاط-الاقتران-اللوغاريتمي.html',
    'trans': 'نشاط-الانسحاب-والانعكاس.html',
    'sign': 'نشاط-إشارة-الاقتران.html',
    'pw': 'نشاط-متعدد-القاعدة.html',
    'abs': 'نشاط-القيمة-المطلقة.html',
    'flr': 'نشاط-أكبر-عدد-صحيح.html',
    'test1': 'اختبار-الوحدة-الأولى.html',
    'ws1': 'ورقة-عمل-الوحدة-الأولى.html',
    'ang': 'نشاط-الزوايا.html',
    'deckcorr': 'عرض-الارتباط.html',
    'test4': 'اختبار-الوحدة-الرابعة.html',
    'ws4': 'ورقة-عمل-الوحدة-الرابعة.html',
    'ins': 'نشاط-التأمين.html',
    'shr': 'نشاط-الأسهم.html',
    'cong': 'نشاط-تكافؤ-الأشكال.html',
    'tri': 'نشاط-المثلث.html',
    'c42': 'نشاط-الإنشاءات-الهندسية-2.html',
    'c41': 'نشاط-الإنشاءات-الهندسية-1.html',
    'test3': 'اختبار-الوحدة-الثالثة.html',
    'ws3': 'ورقة-عمل-الوحدة-الثالثة.html',
    'tid': 'نشاط-المتطابقات-والمعادلات-المثلثية.html',
    'tgr': 'نشاط-التمثيل-البياني-للمثلثية.html',
    'trig': 'نشاط-الاقترانات-المثلثية.html',
}

LOGO_URI = 'data:image/jpeg;base64,' + base64.b64encode(LOGO.read_bytes()).decode()
hub = HUB.read_text(encoding='utf-8')
if '__LOGO__' in hub:  # الصفحة الرئيسية تحتاج الشعار أيضاً حين تُفتح من المجلّد
    uri = 'data:image/jpeg;base64,' + base64.b64encode(LOGO.read_bytes()).decode()
    hub = hub.replace('__LOGO__', uri)
    HUB.write_text(hub, encoding='utf-8')

pages = {}
for key, name in LESSONS.items():
    html = (HERE / name).read_text(encoding='utf-8')
    if '__LOGO__' in html:
        raise SystemExit(f'الشعار غير مضمَّن في {name}')
    # الشعار مضمَّن مرّةً واحدة في الصفحة الرئيسية، وتعيده إلى الدرس عند فتحه (‎__LOGOSRC__‎)
    html = html.replace(LOGO_URI, '__LOGOSRC__')
    # الخطّ مضمَّن مرّةً واحدة في الصفحة الرئيسية، وهي تعيده إلى الدرس عند فتحه (‎/*FONT*/‎)
    html, n = re.subn(r'(<style id="plexfont">).*?(</style>)', r'\1/*FONT*/\2', html, count=1, flags=re.S)
    if not n:
        raise SystemExit(f'الخطّ غير مضمَّن في {name}: شغّل تضمين-الخط.py أوّلاً')
    pages[key] = html

# ‎<‎ بدل «<» حتى لا تُنهي أيُّ ‎</script>‎ داخل الدروس وسمَ السكربت في الصفحة الرئيسية
payload = json.dumps(pages, ensure_ascii=False).replace('<', '\\u003c')
if '/*LESSONS*/' not in hub:
    raise SystemExit('لم أجد موضع الدروس /*LESSONS*/ في الرئيسية.html')
OUT.write_text(hub.replace('/*LESSONS*/', 'window.LESSONS=' + payload + ';'), encoding='utf-8')
print(f'✔ {OUT.name}: {OUT.stat().st_size / 1024:.0f} ك.ب، فيه {len(pages)} دروس')
