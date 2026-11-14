/* توحيد النصّ قبل البحث عن تسجيله الصوتي: المتصفّح ومولّد الصوتيات (tools/gen_audio.py) يستعملان هذه الدالة نفسها.
   المفتاح في data/audio-manifest.js:  <اللغة>|<النصّ بعد التوحيد> */
(function (g) {
  function lexNorm(t, lang) {
    t = String(t == null ? '' : t);
    t = t.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
    t = t.replace(/"/g, ' ');
    if (lang === 'ar') {
      t = t.replace(/\([^)]*[A-Za-z][^)]*\)/g, ' ');   /* لا ننطق الأقواس الإنجليزية داخل العربي */
      t = t.replace(/[«»·→…]/g, ' ');
    } else {
      t = t.replace(/\.\.\./g, ' ').replace(/…/g, ' ');
    }
    return t.replace(/\s+/g, ' ').trim();
  }
  g.lexNorm = lexNorm;
  if (typeof module !== 'undefined' && module.exports) module.exports = lexNorm;
})(typeof window !== 'undefined' ? window : globalThis);
