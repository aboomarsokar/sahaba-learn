/* فحص بنية محتوى التربية الإسلامية: node tools/check_islamic.js */
const fs = require("fs"), path = require("path");
global.window = {};
const dir = path.join(__dirname, "..", "islamic", "10", "data");
require(path.join(dir, "curriculum.js"));
fs.readdirSync(dir).filter(f => /^u\d+\.js$/.test(f)).forEach(f => require(path.join(dir, f)));
const L = window.ISL_LESSONS, bad = [];
const ids = []; window.ISL.terms.forEach(t => t.units.forEach(u => u.lessons.forEach(l => ids.push(l.id))));
function chk(id, set, qs) {
  qs.forEach((q, i) => {
    const w = (m) => bad.push(`${id}.${set}[${i}] ${m}`);
    if (!q.q) w("no q");
    if (q.t === "mc" || q.t === "fill") { if (!Array.isArray(q.o) || q.o.length < 2) w("options"); else if (!(q.a >= 0 && q.a < q.o.length)) w("answer index"); if (q.o && new Set(q.o).size !== q.o.length) w("duplicate options"); if (q.t === "fill" && !/_{3,}/.test(q.q)) w("fill without blank"); }
    else if (q.t === "tf") { if (typeof q.a !== "boolean") w("tf answer"); }
    else if (q.t === "match") { if (!Array.isArray(q.pairs) || q.pairs.length < 2) w("pairs"); else { if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length) w("dup right"); if (new Set(q.pairs.map(p => p[0])).size !== q.pairs.length) w("dup left"); } }
    else if (q.t === "order") { if (!Array.isArray(q.items) || q.items.length < 3) w("order items"); }
    else w("unknown type " + q.t);
  });
}
ids.forEach(id => {
  const d = L[id]; if (!d) { console.log("— بلا محتوى:", id); return; }
  if (!d.learn || d.learn.length < 5) bad.push(id + " learn short");
  d.learn.forEach((b, i) => { if (!["text", "verse", "terms", "list", "think"].includes(b.k)) bad.push(`${id}.learn[${i}] kind ${b.k}`); if (b.k === "verse" && (!b.v || !Array.isArray(b.v.a))) bad.push(`${id}.learn[${i}] verse`); if (b.k === "terms" && !Array.isArray(b.t)) bad.push(`${id}.learn[${i}] terms`); });
  chk(id, "ch", d.ch || []); chk(id, "ms", d.ms || []);
  console.log(id, "learn", d.learn.length, "ch", (d.ch || []).length, "ms", (d.ms || []).length);
});
console.log(bad.length ? "\nمشاكل:\n" + bad.join("\n") : "\n✔ بنية المحتوى سليمة");
process.exit(bad.length ? 1 : 0);
