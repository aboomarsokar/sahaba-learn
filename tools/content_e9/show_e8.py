"""يعرض شريحة الوحدة N من ملفات إنجليزي الثامن لاقتباس صيغتها:  python3 tools/content_e9/show_e8.py 6"""
import json, sys
N = sys.argv[1] if len(sys.argv) > 1 else "1"
D = "/home/user/sahaba-learn/english/8/data/"
def obj(p, var):
    s = open(D + p, encoding="utf-8").read(); i = s.index(var + " = ") + len(var) + 3
    return json.JSONDecoder().raw_decode(s[i:])[0]
L = obj("lessons.js", "window.LEXORA_DATA")["units"][N]
print("=== LESSONS (unit %s) ===" % N); print(json.dumps(L, ensure_ascii=False, indent=1))
R = obj("rulecards.js", "window.LEXORA_RULECARDS")
print("=== RULECARDS ==="); print(json.dumps({k: v for k, v in R.items() if k.startswith(N + "-")}, ensure_ascii=False, indent=1))
P = obj("practice.js", "window.LEXORA_PRACTICE")["worksheets"][N]
print("=== WORKSHEET ==="); print(json.dumps(P, ensure_ascii=False, indent=1))
s = open(D + "summaries-u%s.js" % N, encoding="utf-8").read()
print("=== SUMMARY ==="); print(json.dumps(json.JSONDecoder().raw_decode(s[s.index("= {") + 2:])[0], ensure_ascii=False, indent=1))
