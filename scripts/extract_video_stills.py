"""Extract visually unique stills from local + CDN QuotVid videos.

Skips third-party / copyrighted clips. Keeps a few frames per source video
at different timestamps so quote-text stages differ, then writes still-01.png…
"""
from __future__ import annotations

import subprocess
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
VIDEOS = ROOT / "public" / "videos"
CACHE = ROOT / "scripts" / ".video-cache"
OUT = ROOT / "public" / "screenshots" / "stills"

SKIP_NAME_PARTS = ("villain", "dark knight", "harvey")
CDN_VIDEOS = [
    "https://media.quotvid.com/videos/49/426.mp4",
    "https://media.quotvid.com/videos/49/768.mp4",
    "https://media.quotvid.com/videos/49/777.mp4",
    "https://media.quotvid.com/videos/49/827.mp4",
]
# Fractions of duration — early / building text / mid / near end
SAMPLE_FRACS = (0.12, 0.38, 0.62, 0.84)
HAMMING_DUP_THRESHOLD = 12
HASH_SIZE = 16


def duration(path: Path) -> float:
    r = subprocess.run(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ],
        capture_output=True,
        text=True,
        check=True,
    )
    return float(r.stdout.strip())


def extract(path: Path, t: float, dest: Path) -> None:
    subprocess.run(
        [
            "ffmpeg",
            "-y",
            "-ss",
            f"{t:.2f}",
            "-i",
            str(path),
            "-frames:v",
            "1",
            "-vf",
            "scale=720:-2",
            "-q:v",
            "2",
            str(dest),
        ],
        check=True,
        capture_output=True,
    )


def ahash(path: Path) -> int:
    im = Image.open(path).convert("L").resize((HASH_SIZE, HASH_SIZE), Image.Resampling.LANCZOS)
    pixels = list(im.getdata())
    avg = sum(pixels) / len(pixels)
    bits = 0
    for i, p in enumerate(pixels):
        if p >= avg:
            bits |= 1 << i
    return bits


def hamming(a: int, b: int) -> int:
    return (a ^ b).bit_count()


def is_duplicate(h: int, seen: list[int]) -> bool:
    return any(hamming(h, prev) <= HAMMING_DUP_THRESHOLD for prev in seen)


def should_skip(path: Path) -> bool:
    name = path.name.lower()
    return any(part in name for part in SKIP_NAME_PARTS)


def download_cdn() -> list[Path]:
    CACHE.mkdir(parents=True, exist_ok=True)
    paths: list[Path] = []
    for url in CDN_VIDEOS:
        dest = CACHE / Path(url).name
        if dest.exists() and dest.stat().st_size > 50_000:
            print(f"cached {dest.name}")
        else:
            print(f"download {url}")
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                    "Referer": "https://www.quotvid.com/",
                    "Accept": "*/*",
                },
            )
            with urllib.request.urlopen(req, timeout=120) as resp, dest.open("wb") as out:
                out.write(resp.read())
        paths.append(dest)
    return paths


def collect_sources() -> list[Path]:
    local = [p for p in sorted(VIDEOS.glob("*.mp4")) if not should_skip(p)]
    return local + download_cdn()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob("still-*.png"):
        old.unlink()

    sources = collect_sources()
    if not sources:
        raise SystemExit("No usable videos")

    tmp = OUT / "_tmp"
    tmp.mkdir(exist_ok=True)
    for old in tmp.glob("*.png"):
        old.unlink()

    n = 0
    seen: list[int] = []
    kept: list[Path] = []

    for video in sources:
        dur = duration(video)
        print(f"\n{video.name}  ({dur:.1f}s)")
        for frac in SAMPLE_FRACS:
            t = max(0.4, min(dur - 0.35, dur * frac))
            n += 1
            dest = tmp / f"cand-{n:03d}.png"
            extract(video, t, dest)
            h = ahash(dest)
            if is_duplicate(h, seen):
                dest.unlink()
                print(f"  skip t={t:5.1f}s  duplicate")
            else:
                seen.append(h)
                kept.append(dest)
                print(f"  keep t={t:5.1f}s  -> still {len(kept):02d}")

    for i, src in enumerate(kept, start=1):
        dest = OUT / f"still-{i:02d}.png"
        src.replace(dest)

    tmp.rmdir()
    print(f"\nWrote {len(kept)} unique stills to {OUT}")


if __name__ == "__main__":
    main()
