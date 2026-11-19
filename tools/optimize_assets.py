#!/usr/bin/env python3
"""ضغط صور المنصّة بأمان: يعيد ترميز الصورة فقط إن وفّر ≥12% مع حفظ الجودة (PSNR).
الاستعمال:  python3 tools/optimize_assets.py [--apply] [مسار ...]
بلا --apply يطبع التقرير فقط. الأصل محفوظٌ في git. لا يغيّر الأبعاد إلا للصور الأكبر من MAX px."""
import os, sys, io
from PIL import Image
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'.git', '_site', 'node_modules'}
MAX = 1600          # أقصى ضلع (الأكبر يُصغَّر، ونادر)
MIN_SAVE = 0.12     # أقلّ توفير مقبول
PSNR_MIN = 37.0     # حدّ الجودة مقابل الأصل
QUALITIES = (82, 76, 70)
SCI = ('physics/', 'chemistry/', 'biology/')   # صور علمية: لا تصغير أبعاد، حدّ جودة أعلى


def psnr(a, b):
    a = np.asarray(a.convert('RGBA'), dtype=np.float32)
    b = np.asarray(b.convert('RGBA'), dtype=np.float32)
    if a.shape != b.shape:
        return 0
    m = ((a - b) ** 2).mean()
    return 99 if m == 0 else 10 * np.log10(255 * 255 / m)


def encode(im, ext, q):
    buf = io.BytesIO()
    if ext == '.webp':
        im.save(buf, 'WEBP', quality=q, method=6)
    elif ext in ('.jpg', '.jpeg'):
        im.convert('RGB').save(buf, 'JPEG', quality=q, optimize=True, progressive=True)
    else:
        im.save(buf, 'PNG', optimize=True)
    return buf.getvalue()


def process(path, rel):
    ext = os.path.splitext(path)[1].lower()
    raw = open(path, 'rb').read()
    im = Image.open(io.BytesIO(raw)); im.load()
    if getattr(im, 'is_animated', False):
        return None
    sci = rel.startswith(SCI)
    base = im
    if not sci and max(im.size) > MAX:
        k = MAX / max(im.size)
        base = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
    need = PSNR_MIN + (2 if sci else 0)
    best = None
    for q in (QUALITIES if ext != '.png' else (0,)):
        data = encode(base, ext, q)
        if len(data) > len(raw) * (1 - MIN_SAVE):
            continue
        ref = im if base.size == im.size else im.resize(base.size, Image.LANCZOS)
        if ext == '.png' or psnr(ref, Image.open(io.BytesIO(data))) >= need:
            best = data
            break
    return best, len(raw)


def main():
    apply = '--apply' in sys.argv
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    roots = [os.path.join(ROOT, a) for a in args] or [ROOT]
    tot0 = tot1 = n = 0
    for r in roots:
        for dp, dn, fn in os.walk(r):
            dn[:] = [d for d in dn if d not in SKIP_DIRS]
            for f in sorted(fn):
                if not f.lower().endswith(('.webp', '.png', '.jpg', '.jpeg')):
                    continue
                p = os.path.join(dp, f)
                rel = os.path.relpath(p, ROOT)
                try:
                    res = process(p, rel)
                except Exception as e:
                    print('تخطّي', rel, e); continue
                if not res:
                    continue
                best, old = res
                if best is None:
                    continue
                n += 1; tot0 += old; tot1 += len(best)
                if apply:
                    open(p, 'wb').write(best)
    print(f"{'طُبّق' if apply else 'تقرير'}: {n} صورة، {tot0/1e6:.2f} MB → {tot1/1e6:.2f} MB (وفّر {(tot0-tot1)/1e6:.2f} MB)")


if __name__ == '__main__':
    main()
