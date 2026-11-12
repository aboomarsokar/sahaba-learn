"""يجمع الموقع كلَّه في مجلّد _site للنشر على GitHub Pages.

الاستعمال:  python3 tools/build_site.py
- ينسخ البوابة (index.html وsubjects.json وshared/).
- لكلّ مادةٍ وصفٍّ جاهزٍ في subjects.json: يشغّل أوامر build داخل مجلّده إن وُجدت،
  ثم ينسخ مجلّد publish (أو المجلّد كلَّه) إلى _site/<dir>/.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "_site"
SKIP = shutil.ignore_patterns(".git", "dist", "__pycache__", ".DS_Store", "*.zip", ".vercel")


def main() -> None:
    data = json.loads((ROOT / "subjects.json").read_text(encoding="utf-8"))
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    for name in ("index.html", "subjects.json"):
        shutil.copy2(ROOT / name, OUT / name)
    shutil.copytree(ROOT / "shared", OUT / "shared", ignore=SKIP)
    (OUT / ".nojekyll").write_text("")

    for subj in data["subjects"]:
        for grade, entry in subj.get("grades", {}).items():
            src = ROOT / entry["dir"]
            if not src.is_dir():
                sys.exit(f"مجلّدٌ مفقود: {entry['dir']} ({subj['name']} — الصف {grade})")
            for cmd in entry.get("build", []):
                print(f"▶ {entry['dir']}: {cmd}")
                subprocess.run(cmd, shell=True, cwd=src, check=True)
            pub = src / entry["publish"] if entry.get("publish") else src
            if not (pub / "index.html").is_file():
                sys.exit(f"لا index.html في {pub.relative_to(ROOT)}")
            shutil.copytree(pub, OUT / entry["dir"], ignore=SKIP)
            print(f"✔ {subj['name']} — الصف {grade} → /{entry['dir']}/")

    size = sum(p.stat().st_size for p in OUT.rglob("*") if p.is_file()) / 1024 / 1024
    print(f"الموقع جاهز في _site ({size:.1f} م.ب من حدّ 1024 م.ب)")


if __name__ == "__main__":
    main()
