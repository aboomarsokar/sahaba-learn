/* يستخرج كلّ نصٍّ ينطقه تطبيق LEXORA (الإنجليزية — العاشر) إلى قائمة JSON: [[lang, text], …]
   الاستعمال:  node tools/audio-list.js > /مسار/list.json
   ثم يولّد tools/gen_audio.py الملفّات الصوتية من هذه القائمة. */
const path = require('path');
const D = path.join(__dirname, '..', 'english', '10', 'data');
global.window = {};
const lexNorm = require(path.join(D, 'audio-norm.js'));
require(path.join(D, 'lessons.js'));
require(path.join(D, 'practice.js'));
require(path.join(D, 'rulecards.js'));
const DATA = window.LEXORA_DATA, PR = window.LEXORA_PRACTICE, RC = window.LEXORA_RULECARDS;

const seen = new Set(), out = [];
function add(lang, text) {
  const n = lexNorm(text, lang);
  if (!n || !/[\p{L}\p{N}]/u.test(n)) return;
  const k = lang + '|' + n;
  if (seen.has(k)) return;
  seen.add(k); out.push([lang, n]);
}
const kplain = t => String(t).replace(/\{[stvn]\|([^}]*)\}/g, '$1');
const sentences = en => (en.match(/[^.!?]+[.!?"]*\s*/g) || [en]).map(s => s.trim());
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function questionAudio(q) {
  if (!q) return;
  if (q.type === 'match') (q.pairs || []).forEach(p => add('en', p[0]));
  if (q.type === 'order') add('en', q.words.join(' '));
}

Object.keys(DATA.units).forEach(n => {
  const u = DATA.units[n];
  (u.lessons || []).forEach((L, li) => {
    (L.vocab || []).forEach(w => { add('en', w.en); add('ar', w.ar); add('en', w.ex); add('ar', w.exAr); });
    const R = L.reading || { paras: [] };
    R.paras.forEach(p => {
      add('en', p.en); add('ar', p.ar);
      sentences(p.en).forEach(s => add('en', s));
      (L.vocab || []).forEach(w => {                      /* الكلمة المميّزة داخل القصّة عند الضغط عليها */
        const re = new RegExp('\\b(' + esc(w.en) + '[a-z]*)\\b', 'gi');
        let m; while ((m = re.exec(p.en))) { add('en', m[1]); add('ar', w.ar); }
      });
    });
    (L.rules || []).forEach(r => (r.questions || []).forEach(questionAudio));
    (L.mastery || []).forEach(questionAudio);
    (L.rules || []).forEach((r, k) => {                   /* أمثلة بطاقات القواعد */
      (RC[(L.id || (n + '-' + (li + 1))) + '#' + k] || []).forEach(c => (c.examples || []).forEach(x => {
        const parts = x.en.split(' → ');
        add('en', kplain(parts.length === 2 ? parts.join('. ') : x.en));
      }));
    });
  });
});
Object.values(PR.worksheets).forEach(w => w.sections.forEach(s => s.questions.forEach(questionAudio)));
PR.tests.forEach(t => (t.sections || []).forEach(s => s.questions.forEach(questionAudio)));
/* عبارات الواجهة */
add('en', 'Hello! Welcome to LEXORA.'); add('ar', 'أهلاً بك في ليكسورا');
add('en', 'Hello! This is my voice.'); add('ar', 'مرحباً، هذا صوتي');
process.stdout.write(JSON.stringify(out));
