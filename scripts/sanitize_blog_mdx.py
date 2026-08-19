#!/usr/bin/env python3
"""Fix common MDX syntax issues in generated blog localizations."""
from __future__ import annotations

import re
from pathlib import Path

import yaml

BLOG_DIR = Path(__file__).resolve().parent.parent / "content" / "blog"


def parse_mdx(path: Path) -> tuple[dict, str]:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not match:
        raise ValueError(path)
    return yaml.safe_load(match.group(1)) or {}, match.group(2)


def sanitize_mdx_body(body: str) -> str:
    body = re.sub(
        r"<(https?://[^>\s]+)>",
        lambda m: f"[{m.group(1)}]({m.group(1)})",
        body,
    )
    body = re.sub(r"<br\s*/?>", "<br />", body, flags=re.IGNORECASE)
    body = re.sub(
        r"<\s*(\d+(?:[.,]\d+)?)\s*(seconds?|sec|s|minutes?|min|hours?|hrs?|days?|detik|giây|Stunden|Minuten|detik)\b",
        r"under \1 \2",
        body,
        flags=re.IGNORECASE,
    )
    # Catch remaining comparison operators like "< 60" or "< 45 %" in prose/tables.
    body = re.sub(r"<\s*(\d+(?:[.,]\d+)?)\s*%", r"under \1%", body)
    body = re.sub(r"<\s*\$(\d+(?:[.,]\d+)?)", r"under $\1", body)
    body = re.sub(r"<\s*(\d+(?:[.,]\d+)?)", r"under \1", body)
    return body


def main() -> None:
    fixed = 0
    for path in sorted(BLOG_DIR.glob("*.mdx")):
        meta, body = parse_mdx(path)
        if not meta.get("localizedEdition"):
            continue
        cleaned = sanitize_mdx_body(body)
        if cleaned == body:
            continue
        yaml_block = yaml.dump(meta, allow_unicode=True, sort_keys=False).strip()
        path.write_text(f"---\n{yaml_block}\n---\n\n{cleaned.lstrip()}\n", encoding="utf-8")
        fixed += 1
        print(f"fixed {path.name}")
    print(f"Done. Fixed {fixed} files.")


if __name__ == "__main__":
    main()
