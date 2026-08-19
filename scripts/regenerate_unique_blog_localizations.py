#!/usr/bin/env python3
"""
Regenerate published blog localizations as unique native-language articles.

Unlike generate_blog_translations.py (Google Translate), this script uses an LLM to
write original articles in each language on the same topic with different structure,
examples, and wording — better for SEO and AdSense quality guidelines.

Preserves: slug, lang, translationOf, publishedAt, author, published status.
"""
from __future__ import annotations

import argparse
import os
import re
import sys
import time
from pathlib import Path

import yaml
from dotenv import dotenv_values

BLOG_DIR = Path(__file__).resolve().parent.parent / "content" / "blog"
BACKEND_ENV = Path(__file__).resolve().parent.parent.parent / "quotvid_backend" / ".env"
SITE_PRICING = "https://www.quotvid.com/pricing"

LANGS = [
    "es", "fr", "de", "pt", "it", "tr", "nl", "pl", "vi", "id", "th",
    "zh", "ja", "ko", "hi", "bn", "ur", "ar", "fa", "ta", "ru",
]

LANG_NAMES = {
    "es": "Spanish", "fr": "French", "de": "German", "pt": "Portuguese",
    "it": "Italian", "tr": "Turkish", "nl": "Dutch", "pl": "Polish",
    "vi": "Vietnamese", "id": "Indonesian", "th": "Thai", "zh": "Chinese (Simplified)",
    "ja": "Japanese", "ko": "Korean", "hi": "Hindi", "bn": "Bengali",
    "ur": "Urdu", "ar": "Arabic", "fa": "Persian (Farsi)", "ta": "Tamil", "ru": "Russian",
}

RTL_LANGS = {"ar", "ur", "fa"}

SOURCES = [
    "how-to-make-motivational-quote-videos-for-youtube-shorts",
    "how-to-automate-quote-videos-on-pinterest",
    "text-to-video-quote-generator-complete-guide",
    "faceless-youtube-channel-with-quote-videos",
]

SYSTEM_PROMPT = """You are an expert content writer for social-media creators.
Write original, high-quality blog articles — never direct translations.
Follow the exact output format requested."""


def load_env() -> dict[str, str]:
    env = dict(os.environ)
    if BACKEND_ENV.exists():
        env.update({k: v for k, v in dotenv_values(BACKEND_ENV).items() if v})
    return env


def parse_mdx(path: Path) -> tuple[dict, str]:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not match:
        raise ValueError(f"Invalid MDX frontmatter: {path}")
    meta = yaml.safe_load(match.group(1)) or {}
    return meta, match.group(2)


def word_count(text: str, lang: str = "en") -> int:
    if lang in {"zh", "ja", "ko"}:
        # CJK scripts are not space-delimited; use meaningful character count.
        chars = re.findall(r"[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]", text)
        return len(chars)
    return len(re.findall(r"\b\w+\b", text, flags=re.UNICODE))


def min_content_ok(text: str, lang: str) -> tuple[bool, int]:
    count = word_count(text, lang)
    minimum = 450 if lang in {"zh", "ja", "ko"} else 700
    return count >= minimum, count


def build_prompt(en_meta: dict, lang: str, lang_name: str) -> str:
    rtl_note = (
        "Use natural RTL prose appropriate for the script."
        if lang in RTL_LANGS
        else ""
    )
    en_body_preview = ""  # topic brief only from metadata — avoids translation copying

    return f"""Write an ORIGINAL blog article in {lang_name} (language code: {lang}).

Topic brief (reference only — do NOT translate or copy any English draft):
- English title: {en_meta.get("title", "")}
- English description: {en_meta.get("description", "")}
- Topic tags: {", ".join(en_meta.get("tags") or [])}

{rtl_note}

Requirements:
1. Write 100% in {lang_name}. Native-quality, conversational expert tone.
2. Same general topic as the brief, but use a DIFFERENT outline, headings, examples, and narrative flow.
3. Body length: at least 900 words in the article body (excluding title line).
4. Markdown body starting with a single # H1 title line, then ## / ### sections, bullet lists, and optionally one table.
5. Focus platforms: YouTube Shorts and Pinterest only. Do NOT mention TikTok, Instagram, or Facebook.
6. Include practical, locale-relevant tips where natural (posting habits, typography, examples creators in that language community would recognize).
7. End with a short FAQ section (3-4 questions).
8. Mention QuotVid once near the end as one tool option with link: {SITE_PRICING}
9. Do NOT use app.quotvid.com/auth/signup links.
10. Do not mention that this is a translation or localized edition.

Use EXACTLY this output format (keep the markers on their own lines):

===TITLE===
(title here, max 120 chars)
===DESCRIPTION===
(meta description, max 160 chars)
===TAGS===
tag1 | tag2 | tag3
===BODY===
(full markdown article starting with # H1)
"""


GROQ_MODELS = [
    "qwen/qwen3.6-27b",
    "openai/gpt-oss-20b",
    "openai/gpt-oss-120b",
    "groq/compound-mini",
]


def call_groq(prompt: str, env: dict[str, str]) -> str:
    from groq import Groq

    keys = []
    if env.get("GROQ_API_KEYS"):
        keys.extend(k.strip() for k in env["GROQ_API_KEYS"].split(",") if k.strip())
    if env.get("GROQ_API_KEY"):
        keys.append(env["GROQ_API_KEY"].strip())
    if not keys:
        raise RuntimeError("No GROQ_API_KEY configured")

    preferred = env.get("GROQ_MODEL")
    models = ([preferred] if preferred else []) + [m for m in GROQ_MODELS if m != preferred]
    last_err: Exception | None = None

    for model in models:
        for key in keys:
            try:
                client = Groq(api_key=key)
                resp = client.chat.completions.create(
                    model=model,
                    messages=[
                        {"role": "system", "content": SYSTEM_PROMPT},
                        {"role": "user", "content": prompt},
                    ],
                    temperature=0.85,
                    max_tokens=8192,
                )
                content = resp.choices[0].message.content or ""
                if content.strip():
                    print(f"    Groq model: {model}")
                    return content
            except Exception as exc:
                last_err = exc
                time.sleep(1)
    raise last_err or RuntimeError("Groq call failed")


def call_gemini(prompt: str, env: dict[str, str]) -> str:
    import google.generativeai as genai

    api_key = env.get("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("No GEMINI_API_KEY configured")
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel(env.get("GEMINI_MODEL", "gemini-2.5-flash"))
    resp = model.generate_content(
        SYSTEM_PROMPT + "\n\n" + prompt,
        generation_config={
            "temperature": 0.85,
            "max_output_tokens": 8192,
        },
    )
    return resp.text or ""


def sanitize_mdx_body(body: str) -> str:
    body = re.sub(
        r"<(https?://[^>\s]+)>",
        lambda m: f"[{m.group(1)}]({m.group(1)})",
        body,
    )
    body = re.sub(r"<br\s*/?>", "<br />", body, flags=re.IGNORECASE)
    body = re.sub(
        r"<\s*(\d+(?:[.,]\d+)?)\s*(seconds?|sec|s|minutes?|min|hours?|hrs?|days?|detik|giây|Stunden|Minuten)\b",
        r"under \1 \2",
        body,
        flags=re.IGNORECASE,
    )
    body = re.sub(r"<\s*(\d+(?:[.,]\d+)?)\s*%", r"under \1%", body)
    body = re.sub(r"<\s*(\d+(?:[.,]\d+)?)", r"under \1", body)
    return body


def parse_llm_response(raw: str) -> dict:
    parts = re.split(r"===TITLE===|===DESCRIPTION===|===TAGS===|===BODY===", raw)
    if len(parts) < 5:
        raise ValueError("LLM response missing required sections")
    title = parts[1].strip()
    description = parts[2].strip()
    tags = [t.strip() for t in parts[3].split("|") if t.strip()]
    body = parts[4].strip()
    return {"title": title, "description": description, "tags": tags, "body": body}


def generate_article(en_meta: dict, lang: str, env: dict[str, str]) -> dict:
    lang_name = LANG_NAMES[lang]
    prompt = build_prompt(en_meta, lang, lang_name)
    raw = ""
    for attempt in range(3):
        try:
            raw = call_groq(prompt, env)
            break
        except Exception as groq_err:
            print(f"    Groq failed ({groq_err}), trying Gemini...")
            try:
                raw = call_gemini(prompt, env)
                break
            except Exception as gem_err:
                if attempt == 2:
                    raise RuntimeError(f"All providers failed: {groq_err} / {gem_err}") from gem_err
                time.sleep(3 * (attempt + 1))
    data = parse_llm_response(raw)
    for key in ("title", "description", "tags", "body"):
        if key not in data:
            raise ValueError(f"Missing key {key} in LLM response")
    body = str(data["body"]).strip()
    body = sanitize_mdx_body(body)
    body = body.replace("app.quotvid.com/auth/signup", "www.quotvid.com/pricing")
    if SITE_PRICING not in body and "quotvid.com/pricing" not in body.lower():
        body += f"\n\n---\n\n[QuotVid]({SITE_PRICING})\n"
    wc = word_count(body, lang)
    ok, wc = min_content_ok(body, lang)
    if not ok:
        raise ValueError(f"Body too short ({wc} units for {lang})")
    return data


def write_mdx(
    out_path: Path,
    meta: dict,
    generated: dict,
    lang: str,
    source_slug: str,
) -> None:
    tags = generated["tags"]
    if not isinstance(tags, list):
        tags = [str(tags)]
    frontmatter = {
        "title": generated["title"],
        "description": generated["description"],
        "publishedAt": meta.get("publishedAt", "2026-05-21"),
        "author": meta.get("author", "QuotVid Team"),
        "lang": lang,
        "translationOf": source_slug,
        "localizedEdition": True,
        "contentVersion": 2,
        "tags": tags,
    }
    if meta.get("published") is False:
        frontmatter["published"] = False

    yaml_block = yaml.dump(frontmatter, allow_unicode=True, sort_keys=False).strip()
    content = f"---\n{yaml_block}\n---\n\n{generated['body'].strip()}\n"
    out_path.write_text(content, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--slug", action="append", help="English source slug (repeatable)")
    parser.add_argument("--lang", action="append", help="Language code (repeatable)")
    parser.add_argument("--force", action="store_true", help="Regenerate even if localizedEdition exists")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    env = load_env()
    sources = args.slug or SOURCES
    langs = args.lang or LANGS

    jobs: list[tuple[str, str]] = []
    for slug in sources:
        en_path = BLOG_DIR / f"{slug}.mdx"
        if not en_path.exists():
            print(f"Skip missing source: {slug}")
            continue
        for lang in langs:
            jobs.append((slug, lang))

    print(f"Planned jobs: {len(jobs)}")
    done = 0
    errors: list[str] = []

    for slug, lang in jobs:
        out_path = BLOG_DIR / f"{slug}-{lang}.mdx"
        en_meta, _ = parse_mdx(BLOG_DIR / f"{slug}.mdx")

        if out_path.exists() and not args.force:
            existing_meta, _ = parse_mdx(out_path)
            if existing_meta.get("localizedEdition") and existing_meta.get("contentVersion", 0) >= 2:
                print(f"skip {out_path.name} (already localized v2)")
                done += 1
                continue

        print(f"[{done + 1}/{len(jobs)}] {slug} -> {lang}")
        if args.dry_run:
            continue

        try:
            generated = generate_article(en_meta, lang, env)
            existing_meta = {}
            if out_path.exists():
                existing_meta, _ = parse_mdx(out_path)
            merged = {**existing_meta, **en_meta}
            write_mdx(out_path, merged, generated, lang, slug)
            wc = word_count(generated["body"], lang)
            print(f"  wrote {out_path.name} ({wc} words)")
            done += 1
            time.sleep(1.2)
        except Exception as exc:
            msg = f"{slug}-{lang}: {exc}"
            print(f"  ERROR: {msg}")
            errors.append(msg)
            time.sleep(2)

    print(f"\nFinished. Success: {done}/{len(jobs)}")
    if errors:
        print(f"Errors ({len(errors)}):")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
