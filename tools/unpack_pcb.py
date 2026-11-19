"""يفكّ نسخة تطبيق PCB الواحدة (ملف HTML ضخم بصوره ودروسه ومكتباته وفيديوهاته مدمجة base64) إلى مجلّد تطبيقٍ منظّم:

    index.html          الشيفرة والبيانات الصغيرة فقط
    images/<hash>.ext   كلّ الصور (تُحمَّل عند ظهورها)
    lessons/<k>.html    كلّ درس تفاعلي (يُحمَّل عند فتحه)
    lib/<name>          مكتبات الدروس
    videos/<name>.mp4   الفيديوهات

الاستعمال:  python3 tools/unpack_pcb.py <ملف.html> <مجلّد الإخراج>
لا يحذف شيئاً من المحتوى: كلّ ما كان مدمجاً صار ملفاً يُشار إليه بمسارٍ نسبي، والشيفرة تدعم الصيغتين.
"""
import base64
import hashlib
import json
import re
import sys
from pathlib import Path

DATA_URL = re.compile(r"data:image/(webp|jpeg|png|gif);base64,([A-Za-z0-9+/=]+)")
EXT = {"webp": "webp", "jpeg": "jpg", "png": "png", "gif": "gif"}


def find_obj(s: str, name: str):
    """يعيد (بداية، نهاية، نصّ الكائن) لـ var NAME={...}; مع مراعاة السلاسل النصّية."""
    m = re.search(r"\bvar " + re.escape(name) + r"\s*=\s*\{", s)
    if not m:
        return None
    i = m.end() - 1
    depth, j, q = 0, i, None
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\":
                j += 1
            elif c == q:
                q = None
        elif c in "\"'":
            q = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return m.start(), j + 1, s[i : j + 1]
        j += 1
    raise ValueError("كائن غير مغلق: " + name)


def save_images(text: str, out: Path, prefix: str, stats: dict) -> str:
    def sub(m):
        raw = base64.b64decode(m.group(2))
        h = hashlib.sha1(raw).hexdigest()[:12]
        name = f"{h}.{EXT[m.group(1)]}"
        p = out / "images" / name
        if not p.exists():
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_bytes(raw)
            stats["images"] += 1
            stats["image_bytes"] += len(raw)
        return prefix + "images/" + name
    return DATA_URL.sub(sub, text)


def main(src: Path, out: Path) -> None:
    s = src.read_text(encoding="utf-8")
    stats = {"images": 0, "image_bytes": 0, "lessons": 0, "lesson_bytes": 0, "libs": 0, "lib_bytes": 0, "videos": 0, "video_bytes": 0}
    out.mkdir(parents=True, exist_ok=True)

    # 1) المكتبات
    libs = {}
    r = find_obj(s, "LIBJS")
    if r:
        d = json.loads(r[2])
        (out / "lib").mkdir(exist_ok=True)
        for k, v in d.items():
            raw = base64.b64decode(v)
            (out / "lib" / k).write_bytes(raw)
            libs[k] = 1
            stats["libs"] += 1
            stats["lib_bytes"] += len(raw)
        s = s[: r[0]] + "var LIBJS={};" + s[r[1] :]   # لا حاجة إليها: الدروس تحمّل مكتباتها بمسارها
        if s[r[0] + len("var LIBJS={};") : r[0] + len("var LIBJS={};") + 1] == ";":
            s = s[: r[0] + len("var LIBJS={};")] + s[r[0] + len("var LIBJS={};") + 1 :]

    # 2) الدروس التفاعلية
    r = find_obj(s, "LX")
    if r:
        d = json.loads(r[2])
        (out / "lessons").mkdir(exist_ok=True)
        newd = {}
        for key, val in d.items():
            items = val if isinstance(val, list) else [val]
            paths = []
            for n, it in enumerate(items):
                if isinstance(it, str) and it.startswith("b64html:"):
                    raw = base64.b64decode(it[8:]).decode("utf-8")
                    raw = re.sub(r"<!--LIB:([\w.-]+)-->", lambda m: f'<script src="../lib/{m.group(1)}"></script>', raw)
                    raw = save_images(raw, out, "../", stats)
                    name = f"{key}" + (f"-{n}" if isinstance(val, list) and len(items) > 1 else "") + ".html"
                    (out / "lessons" / name).write_text(raw, encoding="utf-8")
                    stats["lessons"] += 1
                    stats["lesson_bytes"] += len(raw.encode("utf-8"))
                    paths.append("lessons/" + name)
                else:
                    paths.append(it)
            newd[key] = paths if isinstance(val, list) else paths[0]
        s = s[: r[0]] + "var LX=" + json.dumps(newd, ensure_ascii=False) + s[r[1] :]

    # 3) الفيديوهات
    r = find_obj(s, "VID")
    if r:
        d = json.loads(r[2])
        (out / "videos").mkdir(exist_ok=True)
        newd = {}
        for k, v in d.items():
            if re.search(r"\.mp4$", v):
                newd[k] = v
                continue
            raw = base64.b64decode(v)
            (out / "videos" / f"{k}.mp4").write_bytes(raw)
            newd[k] = f"videos/{k}.mp4"
            stats["videos"] += 1
            stats["video_bytes"] += len(raw)
        s = s[: r[0]] + "var VID=" + json.dumps(newd, ensure_ascii=False) + s[r[1] :]

    # 4) الصور المدمجة في الصفحة نفسها
    s = save_images(s, out, "", stats)
    (out / "index.html").write_text(s, encoding="utf-8")
    mb = lambda b: round(b / 1048576, 2)
    print(f"✔ index.html {mb(len(s.encode('utf-8')))} م.ب | صور {stats['images']} ({mb(stats['image_bytes'])}) | دروس {stats['lessons']} ({mb(stats['lesson_bytes'])}) | مكتبات {stats['libs']} ({mb(stats['lib_bytes'])}) | فيديو {stats['videos']} ({mb(stats['video_bytes'])})")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(Path(sys.argv[1]), Path(sys.argv[2]))
