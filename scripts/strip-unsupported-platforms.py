#!/usr/bin/env python3
"""
Strip Facebook / Instagram / TikTok product claims from the marketing site.
Keep Pinterest + YouTube only. Unpublish IG/TikTok-centric blog posts from
indexes/sitemaps while leaving MDX files so old URLs still resolve.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "content" / "blog"

# Ordered replacements (longest / most specific first)
REPLACEMENTS: list[tuple[str, str]] = [
    # Common platform lists
    (
        "YouTube, Instagram, TikTok, Pinterest, and Facebook",
        "YouTube and Pinterest",
    ),
    (
        "YouTube, Instagram, TikTok, Pinterest and Facebook",
        "YouTube and Pinterest",
    ),
    (
        "YouTube Shorts, Instagram Reels, TikTok, Pinterest Video Pins, and Facebook Pages",
        "YouTube Shorts and Pinterest Video Pins",
    ),
    (
        "YouTube Shorts, Instagram Reels, TikTok, Pinterest, and Facebook",
        "YouTube Shorts and Pinterest",
    ),
    (
        "Pinterest, YouTube Shorts, Instagram Reels, TikTok, and Facebook Pages",
        "Pinterest and YouTube Shorts",
    ),
    (
        "Pinterest, YouTube, Instagram, TikTok, and Facebook",
        "Pinterest and YouTube",
    ),
    (
        "YouTube, TikTok, Instagram, Pinterest & Facebook",
        "YouTube & Pinterest",
    ),
    (
        "YouTube, TikTok, Instagram, Pinterest and Facebook",
        "YouTube and Pinterest",
    ),
    (
        "YouTube, Instagram, TikTok, Pinterest & Facebook",
        "YouTube & Pinterest",
    ),
    (
        "TikTok, Instagram Reels, and YouTube Shorts",
        "YouTube Shorts and Pinterest",
    ),
    (
        "TikTok, Instagram Reels, YouTube Shorts, and Pinterest",
        "YouTube Shorts and Pinterest",
    ),
    (
        "for TikTok, Instagram Reels, and YouTube Shorts",
        "for YouTube Shorts and Pinterest",
    ),
    (
        "for TikTok, Reels & YouTube Shorts",
        "for YouTube Shorts & Pinterest",
    ),
    (
        "Pinterest, TikTok, Instagram Reels, and YouTube Shorts",
        "Pinterest and YouTube Shorts",
    ),
    (
        "TikTok, Instagram Reels, YouTube Shorts",
        "YouTube Shorts, Pinterest",
    ),
    (
        "TikTok, Reels, Shorts, Pinterest video pins",
        "YouTube Shorts and Pinterest video pins",
    ),
    (
        "for TikTok, Reels, Shorts",
        "for YouTube Shorts and Pinterest",
    ),
    (
        "Instagram Reels, TikTok, Pinterest, and Facebook",
        "Pinterest and YouTube Shorts",
    ),
    (
        "Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook",
        "Auto-Post to YouTube & Pinterest",
    ),
    (
        "Auto-Post to YouTube, TikTok, Instagram, Pinterest &amp; Facebook",
        "Auto-Post to YouTube &amp; Pinterest",
    ),
    (
        "YouTube at 9am, TikTok at 6pm, Pinterest at 10am",
        "YouTube at 9am, Pinterest at 10am",
    ),
    (
        "YouTube at 9am. TikTok at 6pm. Pinterest at 10am",
        "YouTube at 9am. Pinterest at 10am",
    ),
    (
        "YouTube at 9 AM, TikTok at 6 PM",
        "YouTube at 9 AM, Pinterest at 10 AM",
    ),
    (
        "Google, Meta, TikTok, or Pinterest",
        "Google or Pinterest",
    ),
    (
        "YouTube / Meta / TikTok / Pinterest APIs",
        "YouTube / Pinterest APIs",
    ),
    # Count language
    ("Auto-Post to 5 Platforms", "Auto-Post to 2 Platforms"),
    ("auto-posting to 5 platforms", "auto-posting to 2 platforms"),
    ("5-Platform Auto-Posting", "2-Platform Auto-Posting"),
    ("5 Platforms, One Dashboard", "2 Platforms, One Dashboard"),
    ("5 Platforms — Auto-Posting", "2 Platforms — Auto-Posting"),
    ("5 Platforms ·", "2 Platforms ·"),
    ("· 5 Platforms ·", "· 2 Platforms ·"),
    ("All 5 platforms", "Both platforms"),
    ("all 5 platforms", "both platforms"),
    ("all five platforms", "both platforms"),
    ("All five platforms", "Both platforms"),
    ("Post to all 5 platforms", "Post to both platforms"),
    ("unlock all five platforms", "unlock both platforms"),
    ("unlock all platforms", "unlock both platforms"),
    ("All platforms unlocked", "YouTube & Pinterest unlocked"),
    ("✓ 5 platforms", "✓ 2 platforms"),
    ("5 platforms ·", "2 platforms ·"),
    ("5 platforms.", "2 platforms."),
    ("5 platforms,", "2 platforms,"),
    ("5 platforms ", "2 platforms "),
    ("Five platforms", "Two platforms"),
    ("five platforms", "two platforms"),
    ("One video. Five platforms.", "One video. Two platforms."),
    ("upload it five times", "upload it twice"),
    ("to every platform at once", "to YouTube and Pinterest"),
    # Help / connect copy fragments
    ("(Pinterest, TikTok, Instagram, YouTube, Facebook)", "(YouTube, Pinterest)"),
    ("suitable for Instagram Reels and similar platforms", "suitable for YouTube Shorts and Pinterest"),
    (
        "TikTok, Instagram Reels, YouTube Shorts, and Pinterest Pins accept vertical MP4",
        "YouTube Shorts and Pinterest Pins accept vertical MP4",
    ),
]

# Filename patterns → unpublish from indexes (URLs still work via getPostBySlug)
UNPUBLISH_SLUG_RE = re.compile(
    r"(instagram|tiktok|facebook)",
    re.IGNORECASE,
)

# Still keep pure YouTube / Pinterest guides even if they mention IG in body
KEEP_PUBLISHED_PREFIXES = (
    "how-to-automate-quote-videos-on-pinterest",
    "how-to-make-motivational-quote-videos-for-youtube-shorts",
    "faceless-youtube-channel-with-quote-videos",
    "text-to-video-quote-generator-complete-guide",
    "how-to-use-youtube-videos-as-background-for-quote-videos",
    "youtube-background-quote-videos",
    "ai-quote-video-generator",
    "quotvid-vs-canva",
    "best-fonts-for-quote-videos",
)


def apply_replacements(text: str) -> str:
    out = text
    for old, new in REPLACEMENTS:
        out = out.replace(old, new)
    return out


def ensure_unpublished_frontmatter(raw: str) -> str:
    if re.search(r"^published:\s*false\s*$", raw, re.MULTILINE):
        return raw
    if raw.startswith("---"):
        end = raw.find("\n---", 3)
        if end != -1:
            fm = raw[: end + 4]
            body = raw[end + 4 :]
            if "published:" not in fm:
                fm = fm.replace("\n---", "\npublished: false\n---", 1)
                return fm + body
            fm = re.sub(r"^published:\s*.*$", "published: false", fm, count=1, flags=re.MULTILINE)
            return fm + body
    return "---\npublished: false\n---\n" + raw


def should_unpublish(slug: str) -> bool:
    if not UNPUBLISH_SLUG_RE.search(slug):
        return False
    for prefix in KEEP_PUBLISHED_PREFIXES:
        if slug == prefix or slug.startswith(prefix + "-"):
            return False
    return True


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8")
    updated = apply_replacements(original)

    if path.suffix == ".mdx" and path.parent == BLOG_DIR:
        slug = path.stem
        if should_unpublish(slug):
            updated = ensure_unpublished_frontmatter(updated)

    if updated != original:
        path.write_text(updated, encoding="utf-8", newline="\n")
        return True
    return False


def main() -> None:
    patterns = ("*.tsx", "*.ts", "*.txt", "*.mdx")
    skip_parts = {"node_modules", ".next", "scripts"}
    changed = []
    for pattern in patterns:
        for path in ROOT.rglob(pattern):
            if not path.is_file():
                continue
            if any(p in path.parts for p in skip_parts):
                continue
            if path.name.startswith("_audit"):
                continue
            if process_file(path):
                changed.append(str(path.relative_to(ROOT)))

    print(f"Updated {len(changed)} files")
    for c in changed[:30]:
        print(f"  - {c}")
    if len(changed) > 30:
        print(f"  ... and {len(changed) - 30} more")


if __name__ == "__main__":
    main()
