# -*- coding: utf-8 -*-
"""把网站文案自动补齐中文 / 日文翻译（完全免费，无需注册或密钥）。

用法：
  双击「翻译.bat」，或命令行运行  python translate.py

原理：
  读取 js/content.js，只挑出"有英文、但中文或日文还空着"的文案，
  调用免费的 MyMemory 翻译后填回去。
  —— 已经翻好的内容一律不动，不会重新翻译、不会覆盖。
  —— 网址、标签、技能名、装饰文字等不会翻译。

额度：
  免费版约每天 5000 词，个人主页足够。若提示当天额度用尽，隔天再试即可
  （也可在下面把 EMAIL 填上你的邮箱，额度提到每天 5 万词）。
"""
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
CONTENT_JS = os.path.join(ROOT, "js", "content.js")
PREFIX = "const CONTENT ="
API = "https://api.mymemory.translated.net/get"
TARGETS = [("zh", "zh-CN"), ("ja", "ja")]   # 站内字段名 -> 翻译语言代码
EMAIL = ""   # 可选：填你的邮箱可把每日额度提到 5 万词，留空也能用


def read_content():
    text = open(CONTENT_JS, encoding="utf-8").read()
    raw = text[text.index("{"):text.rindex("}") + 1]
    raw = re.sub(r",(\s*[}\]])", r"\1", raw)   # 容忍多余的逗号
    return json.loads(raw)


def write_content(data):
    body = json.dumps(data, ensure_ascii=False, indent=2)
    open(CONTENT_JS, "w", encoding="utf-8").write(PREFIX + " " + body + ";\n")


def collect_jobs(data):
    """只找"缺翻译"的地方。返回 [(容器dict, 目标字段, 英文原文, 语言代码)]。
    已有翻译（非空）一律跳过，所以不会重翻旧内容。"""
    jobs = []

    def walk(node):
        if isinstance(node, dict):
            if "en" in node and isinstance(node["en"], (str, list)):
                for field, code in TARGETS:
                    src, cur = node["en"], node.get(field)
                    if isinstance(src, list):
                        missing = (not isinstance(cur, list) or len(cur) != len(src)
                                   or any(not c for c in cur))
                    else:
                        missing = not cur          # 只有为空才算缺
                    if missing and src:
                        jobs.append((node, field, src, code))
                return                              # en/zh/ja 是叶子，不再深入
            for key, val in node.items():
                if key != "ui":                     # ui 单独处理
                    walk(val)
        elif isinstance(node, list):
            for item in node:
                walk(item)

    walk(data)

    for en_key, val in (data.get("ui") or {}).items():
        if isinstance(val, dict):
            for field, code in TARGETS:
                if not val.get(field):
                    jobs.append((val, field, en_key, code))

    return jobs


def translate_one(text, code):
    """用 MyMemory 把一句英文翻成 code，返回译文。"""
    params = {"q": text, "langpair": "en|" + code}
    if EMAIL:
        params["de"] = EMAIL
    req = urllib.request.Request(
        API + "?" + urllib.parse.urlencode(params),
        headers={"User-Agent": "homepage-i18n/1.0"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            out = json.loads(resp.read().decode("utf-8"))
    except urllib.error.URLError as e:
        sys.exit(f"连不上翻译服务：{e}\n请检查网络后重试。")
    translated = (out.get("responseData") or {}).get("translatedText", "")
    if out.get("responseStatus") != 200 or not translated or "MYMEMORY WARNING" in translated.upper():
        sys.exit(f"翻译失败：{translated or out}\n"
                 f"多半是当天免费额度用尽，隔天再试；或在脚本里把 EMAIL 填上以提高额度。")
    return translated


def main():
    data = read_content()
    jobs = collect_jobs(data)
    if not jobs:
        print("没有需要翻译的内容，中文/日文都已就绪。")
        return

    total = sum(len(src) if isinstance(src, list) else 1 for _, _, src, _ in jobs)
    done = 0

    def do(text, code):
        nonlocal done
        out = translate_one(text, code)
        done += 1
        print(f"  ({done}/{total}) [{code}] {text[:24]} -> {out[:24]}")
        time.sleep(0.4)                             # 友好限速
        return out

    for cont, field, src, code in jobs:
        if isinstance(src, list):
            cont[field] = [do(s, code) for s in src]
        else:
            cont[field] = do(src, code)

    write_content(data)
    print(f"完成。已补全 {len(jobs)} 处翻译，写回 js/content.js。")
    print("打开网页确认无误后，提交并推送即可。")


if __name__ == "__main__":
    main()
