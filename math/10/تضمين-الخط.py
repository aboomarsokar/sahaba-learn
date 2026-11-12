"""يضمّن خطّ IBM Plex Sans Arabic (العادي والعريض) وشعار المدرسة داخل صفحات الدروس، فتعمل بلا إنترنت.

التشغيل من داخل مجلّد الدروس (ويُعاد تشغيله بأمان عند إضافة درسٍ جديد إلى PAGES):
    python3 تضمين-الخط.py

يحوّل ملفّات ‎.ttf‎ إلى ‎WOFF‎ (مضغوطة بـ zlib) بمكتبة بايثون المدمجة وحدها، بلا fonttools.
الخطّ مرخَّص بـ SIL Open Font License، ونصّ الرخصة في خطوط/OFL.txt.
"""
import base64
import re
import struct
import zlib
from pathlib import Path

HERE = Path(__file__).resolve().parent
FONTS = {400: 'IBMPlexSansArabic-Regular.ttf', 700: 'IBMPlexSansArabic-Bold.ttf'}
PAGES = ['الرئيسية.html', 'نشاط-الارتباط.html', 'نشاط-العد-والتباديل.html', 'نشاط-ذات-الحدين.html', 'اختبار-الوحدة-الثانية.html', 'نشاط-الأسس-واللوغاريتمات.html',
         'نشاط-الاقتران-الأسي.html', 'نشاط-الاقتران-اللوغاريتمي.html',
         'نشاط-الانسحاب-والانعكاس.html', 'نشاط-إشارة-الاقتران.html',
         'نشاط-متعدد-القاعدة.html', 'نشاط-القيمة-المطلقة.html',
         'نشاط-أكبر-عدد-صحيح.html',
         'اختبار-الوحدة-الأولى.html', 'ورقة-عمل-الوحدة-الأولى.html', 'نشاط-الزوايا.html', 'نشاط-الاقترانات-المثلثية.html', 'نشاط-التمثيل-البياني-للمثلثية.html', 'نشاط-المتطابقات-والمعادلات-المثلثية.html', 'اختبار-الوحدة-الثالثة.html', 'ورقة-عمل-الوحدة-الثالثة.html', 'نشاط-الإنشاءات-الهندسية-1.html', 'نشاط-الإنشاءات-الهندسية-2.html', 'نشاط-المثلث.html', 'نشاط-تكافؤ-الأشكال.html', 'نشاط-الأسهم.html', 'نشاط-التأمين.html', 'اختبار-الوحدة-الرابعة.html', 'ورقة-عمل-الوحدة-الرابعة.html', 'عرض-الارتباط.html']
LOGO = 'data:image/jpeg;base64,' + base64.b64encode((HERE / 'شعار-المدرسة.jpg').read_bytes()).decode()
FAMILY = "'IBM Plex Sans Arabic'"


def ttf_to_woff(sfnt: bytes) -> bytes:
    """WOFF 1.0: رأسٌ ثم دليل الجداول ثم كلّ جدولٍ مضغوطاً إن صغُر، بمحاذاة أربعة بايتات."""
    flavor, num = struct.unpack('>IH', sfnt[:6])
    recs = [struct.unpack('>4sIII', sfnt[12 + 16 * i:28 + 16 * i]) for i in range(num)]
    body, dirs, off = b'', [], 44 + 20 * num
    for tag, checksum, toff, length in sorted(recs):
        raw = sfnt[toff:toff + length]
        comp = zlib.compress(raw, 9)
        data = comp if len(comp) < length else raw
        dirs.append(struct.pack('>4sIIII', tag, off + len(body), len(data), length, checksum))
        body += data + b'\0' * (-len(data) % 4)
    total_sfnt = 12 + 16 * num + sum(r[3] + (-r[3] % 4) for r in recs)
    header = struct.pack('>4sIIHHIHHIIIII', b'wOFF', flavor, 44 + 20 * num + len(body), num, 0,
                         total_sfnt, 1, 0, 0, 0, 0, 0, 0)
    return header + b''.join(dirs) + body


faces = ''
for weight, name in FONTS.items():
    woff = ttf_to_woff((HERE / 'خطوط' / name).read_bytes())
    faces += (f"@font-face{{font-family:{FAMILY};font-weight:{weight};font-style:normal;font-display:swap;"
              f"src:url(data:font/woff;base64,{base64.b64encode(woff).decode()}) format('woff')}}")
    print(f'{name}: {len(woff) / 1024:.0f} ك.ب بعد الضغط')
block = f'<style id="plexfont">{faces}</style>'

for name in PAGES:
    p = HERE / name
    s = p.read_text(encoding='utf-8').replace('__LOGO__', LOGO)
    if 'id="plexfont"' in s:
        s = re.sub(r'<style id="plexfont">.*?</style>', lambda m: block, s, count=1, flags=re.S)
    else:
        s = s.replace('<style>', block + '\n<style>', 1)
    # الخطّ أوّلاً في كلّ تعريف، ثم خطوط الجهاز احتياطاً
    s = s.replace("font-family:'Segoe UI',Tahoma,Arial,sans-serif", f"font-family:{FAMILY},Tahoma,Arial,sans-serif")
    s = re.sub(r"(font:[^;}]*?px) Tahoma,Arial,sans-serif", rf"\1 {FAMILY},Tahoma,Arial,sans-serif", s)
    p.write_text(s, encoding='utf-8')
    print(f'✔ {name}: {p.stat().st_size / 1024:.0f} ك.ب')
