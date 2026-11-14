#!/usr/bin/env python3
"""يولّد الملفّات الصوتية لتطبيق LEXORA (الإنجليزية — العاشر) بصوت رجل عميق، ويكتب فهرس التسجيلات.

المتطلّبات (أوبونتو/ديبيان):   apt-get install espeak-ng mbrola mbrola-us2 mbrola-ar1 ffmpeg
الاستعمال من جذر المستودع:     python3 tools/gen_audio.py            (يتجاوز ما وُلّد سابقاً)
                              python3 tools/gen_audio.py --force    (يعيد توليد الكلّ)

المخرجات:  english/10/audio/en/*.mp3  وenglish/10/audio/ar/*.mp3
           english/10/data/audio-manifest.js  (النصّ ← اسم الملفّ)

لاستبدال الصوت بصوتٍ أطبع: ضع ملفّاً بالاسم نفسه (تجده في الفهرس) فوق الملفّ الحالي، أو غيّر الدالة synth() أدناه.
المفتاح في الفهرس هو النصّ بعد دالة lexNorm في english/10/data/audio-norm.js (يستعملها المتصفّح أيضاً). """
import concurrent.futures as cf, hashlib, json, os, subprocess, sys, tempfile, wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, 'english', '10')
OUT = os.path.join(APP, 'audio')
VOICES = {'en': ('mb-us2', 125), 'ar': ('mb-ar1', 145)}   # (الصوت، السرعة بالكلمة/الدقيقة)
DEEP = 0.84                                               # < 1 أعمق وأخشن
FORCE = '--force' in sys.argv

def fname(lang, text):
    return hashlib.sha1((lang + '|' + text).encode('utf-8')).hexdigest()[:10] + '.mp3'

def synth(lang, text, dst):
    voice, speed = VOICES[lang]
    with tempfile.TemporaryDirectory() as td:
        wav = os.path.join(td, 'a.wav')
        subprocess.run(['espeak-ng', '-v', voice, '-s', str(speed), '-w', wav, '--stdin'],
                       input=text.encode('utf-8'), check=True, stderr=subprocess.DEVNULL)
        with wave.open(wav) as w:
            sr = w.getframerate()
        trim = 'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse'
        flt = f'{trim},asetrate={int(sr * DEEP)},aresample=22050,atempo={round(1 / DEEP, 4)},loudnorm=I=-16:TP=-1.5:LRA=11'
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-af', flt, '-ac', '1', '-ar', '22050', '-b:a', '32k', dst], check=True)

def main():
    items = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools', 'audio-list.js')]))
    for lang in VOICES:
        os.makedirs(os.path.join(OUT, lang), exist_ok=True)
    jobs, manifest = [], {'en': {}, 'ar': {}}
    for lang, text in items:
        f = fname(lang, text)
        manifest[lang][text] = f
        dst = os.path.join(OUT, lang, f)
        if FORCE or not (os.path.exists(dst) and os.path.getsize(dst) > 500):
            jobs.append((lang, text, dst))
    print(f'{len(items)} نصّاً، المطلوب توليده: {len(jobs)}', flush=True)
    bad = []
    def run(j):
        try:
            synth(*j); return None
        except Exception as e:
            return (j[0], j[1], str(e))
    with cf.ThreadPoolExecutor(max_workers=max(2, (os.cpu_count() or 2))) as ex:
        for i, r in enumerate(ex.map(run, jobs), 1):
            if r: bad.append(r)
            if i % 100 == 0: print(f'  {i}/{len(jobs)}', flush=True)
    for lang, text, err in bad:
        print('فشل:', lang, text[:40], err[:80])
        manifest[lang].pop(text, None)
    body = json.dumps(manifest, ensure_ascii=False, indent=0, sort_keys=True)
    with open(os.path.join(APP, 'data', 'audio-manifest.js'), 'w', encoding='utf-8') as fh:
        fh.write('/* فهرس التسجيلات الصوتية: النصّ ← الملفّ. يولّده tools/gen_audio.py */\nwindow.LEXORA_AUDIO = ' + body + ';\n')
    total = sum(os.path.getsize(os.path.join(OUT, l, f)) for l in manifest for f in manifest[l].values() if os.path.exists(os.path.join(OUT, l, f)))
    print(f'تمّ: {sum(len(v) for v in manifest.values())} ملفّاً، الحجم {total / 1e6:.1f} م.ب، الإخفاقات {len(bad)}')

if __name__ == '__main__':
    main()
