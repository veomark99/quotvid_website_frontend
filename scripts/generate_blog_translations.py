#!/usr/bin/env python3
"""DEPRECATED: Creates near-duplicate translations via Google Translate.

For AdSense-quality unique localized articles, use:
  scripts/regenerate_unique_blog_localizations.py
"""from __future__ import annotations

import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator

BLOG_DIR = Path(__file__).resolve().parent.parent / "content" / "blog"

LANGS = ["es", "fr", "de", "pt", "it", "tr", "nl", "pl", "vi", "id", "th", "zh", "ja", "ko", "hi", "bn", "ur", "ar", "fa", "ta", "ru"]

# deep-translator target codes (Google)
LANG_MAP = {
    "es": "es", "fr": "fr", "de": "de", "pt": "pt", "it": "it", "tr": "tr",
    "nl": "nl", "pl": "pl", "vi": "vi", "id": "id", "th": "th", "zh": "zh-CN",
    "ja": "ja", "ko": "ko", "hi": "hi", "bn": "bn", "ur": "ur", "ar": "ar",
    "fa": "fa", "ta": "ta", "ru": "ru",
}

ARTICLES = {
    "faceless-youtube-channel-with-quote-videos": {
        "title": "Faceless YouTube Channel with Quote Videos: Full Setup Guide (2026)",
        "description": "How to start a faceless YouTube channel using quote videos and YouTube Shorts — niche ideas, upload schedule, SEO titles, monetization path, and automation tools for daily content.",
        "tags": ["YouTube", "Faceless Channel", "Quote Videos"],
    },
    "stoic-quote-videos-tiktok-instagram-strategy": {
        "title": "Stoic Quote Videos for TikTok and Instagram: Content Strategy (2026)",
        "description": "How to create stoic quote videos that perform on TikTok and Instagram — Marcus Aurelius-style hooks, visual templates, posting cadence, and AI tools for daily stoic content.",
        "tags": ["Stoic Quotes", "TikTok", "Content Strategy"],
    },
}

# Pre-translated tag sets for quality native SEO metadata
TAG_TRANSLATIONS = {
    "faceless-youtube-channel-with-quote-videos": {
        "es": ["YouTube", "Canal sin rostro", "Videos de citas"],
        "fr": ["YouTube", "Chaîne faceless", "Vidéos de citations"],
        "de": ["YouTube", "Faceless Kanal", "Zitat-Videos"],
        "pt": ["YouTube", "Canal faceless", "Vídeos de citações"],
        "it": ["YouTube", "Canale faceless", "Video di citazioni"],
        "tr": ["YouTube", "Yüzsüz kanal", "Alıntı videoları"],
        "nl": ["YouTube", "Faceless kanaal", "Quote-video's"],
        "pl": ["YouTube", "Kanał faceless", "Filmy z cytatami"],
        "vi": ["YouTube", "Kênh không lộ mặt", "Video quote"],
        "id": ["YouTube", "Channel faceless", "Video quote"],
        "th": ["YouTube", "ช่องไม่โชว์หน้า", "วิดีโอคำคม"],
        "zh": ["YouTube", "不露脸频道", "名言视频"],
        "ja": ["YouTube", "顔出しなし", "名言動画"],
        "ko": ["YouTube", "무얼굴 채널", "명언 영상"],
        "hi": ["YouTube", "फेसलेस चैनल", "कोट वीडियो"],
        "bn": ["YouTube", "ফেসলেস চ্যানেল", "কোট ভিডিও"],
        "ur": ["YouTube", "فیس لیس چینل", "اقتباس ویڈیوز"],
        "ar": ["YouTube", "قناة بدون وجه", "فيديوهات اقتباسات"],
        "fa": ["YouTube", "کانال بدون چهره", "ویدیوهای نقل‌قول"],
        "ta": ["YouTube", "முகம் காட்டாத சேனல்", "கோட் வீடியோக்கள்"],
        "ru": ["YouTube", "Faceless канал", "Видео с цитатами"],
    },
    "stoic-quote-videos-tiktok-instagram-strategy": {
        "es": ["Citas estoicas", "TikTok", "Estrategia de contenido"],
        "fr": ["Citations stoïques", "TikTok", "Stratégie de contenu"],
        "de": ["Stoische Zitate", "TikTok", "Content-Strategie"],
        "pt": ["Citações estoicas", "TikTok", "Estrategia de conteúdo"],
        "it": ["Citazioni stoiche", "TikTok", "Strategia di contenuto"],
        "tr": ["Stoik alıntılar", "TikTok", "İçerik stratejisi"],
        "nl": ["Stoïcijnse quotes", "TikTok", "Contentstrategie"],
        "pl": ["Stoickie cytaty", "TikTok", "Strategia treści"],
        "vi": ["Quote Khắc kỷ", "TikTok", "Chiến lược nội dung"],
        "id": ["Quote Stoik", "TikTok", "Strategi konten"],
        "th": ["คำคม Stoic", "TikTok", "กลยุทธ์เนื้อหา"],
        "zh": ["斯多葛名言", "TikTok", "内容策略"],
        "ja": ["ストア哲学", "TikTok", "コンテンツ戦略"],
        "ko": ["스토아 명언", "TikTok", "콘텐츠 전략"],
        "hi": ["Stoic quotes", "TikTok", "कंटेंट रणनीति"],
        "bn": ["Stoic quotes", "TikTok", "কনটেন্ট কৌশল"],
        "ur": ["Stoic quotes", "TikTok", "مواد کی حکمت عملی"],
        "ar": ["اقتباسات رواقية", "TikTok", "استراتيجية المحتوى"],
        "fa": ["نقل‌قول رواقی", "TikTok", "استراتژی محتوا"],
        "ta": ["Stoic quotes", "TikTok", "உள்ளடக்க உத்தி"],
        "ru": ["Стоические цитаты", "TikTok", "Контент-стратегия"],
    },
}

TITLE_TRANSLATIONS = {
    "faceless-youtube-channel-with-quote-videos": {
        "es": "Canal de YouTube sin rostro con videos de citas: guía completa (2026)",
        "fr": "Chaîne YouTube faceless avec vidéos de citations : guide complet (2026)",
        "de": "Faceless YouTube-Kanal mit Zitat-Videos: Kompletter Setup-Guide (2026)",
        "pt": "Canal faceless no YouTube com vídeos de citações: guia completo (2026)",
        "it": "Canale YouTube faceless con video di citazioni: guida completa (2026)",
        "tr": "Alıntı videolarıyla yüzsüz YouTube kanalı: tam kurulum rehberi (2026)",
        "nl": "Faceless YouTube-kanaal met quote-video's: complete setupgids (2026)",
        "pl": "Faceless kanał YouTube z filmami z cytatami: pełny przewodnik (2026)",
        "vi": "Kênh YouTube không lộ mặt với video quote: hướng dẫn đầy đủ (2026)",
        "id": "Channel YouTube faceless dengan video quote: panduan lengkap (2026)",
        "th": "ช่อง YouTube แบบไม่โชว์หน้าด้วยวิดีโอคำคม: คู่มือตั้งค่าแบบครบ (2026)",
        "zh": "用名言视频打造不露脸 YouTube 频道：完整设置指南（2026）",
        "ja": "名言動画で顔出しなしYouTubeチャンネルを作る：完全セットアップガイド（2026）",
        "ko": "명언 영상으로 만드는 무얼굴 YouTube 채널: 완전 설정 가이드 (2026)",
        "hi": "कोट वीडियो के साथ फेसलेस YouTube चैनल: पूरी सेटअप गाइड (2026)",
        "bn": "কোট ভিডিও দিয়ে ফেসলেস YouTube চ্যানেল: সম্পূর্ণ সেটআপ গাইড (2026)",
        "ur": "اقتباس ویڈیوز کے ساتھ فیس لیس YouTube چینل: مکمل سیٹ اپ گائیڈ (2026)",
        "ar": "قناة YouTube بدون وجه بفيديوهات اقتباسات: دليل الإعداد الكامل (2026)",
        "fa": "کانال YouTube بدون چهره با ویدیوهای نقل‌قول: راهنمای کامل راه‌اندازی (2026)",
        "ta": "கோட் வீடியோக்களுடன் முகம் காட்டாத YouTube சேனல்: முழு அமைப்பு வழிகாட்டி (2026)",
        "ru": "Faceless YouTube-канал с видео цитат: полное руководство (2026)",
    },
    "stoic-quote-videos-tiktok-instagram-strategy": {
        "es": "Videos de citas estoicas para TikTok e Instagram: estrategia de contenido (2026)",
        "fr": "Vidéos de citations stoïques pour TikTok et Instagram : stratégie de contenu (2026)",
        "de": "Stoische Zitat-Videos für TikTok und Instagram: Content-Strategie (2026)",
        "pt": "Vídeos de citações estoicas para TikTok e Instagram: estrategia de conteúdo (2026)",
        "it": "Video di citazioni stoiche per TikTok e Instagram: strategia di contenuto (2026)",
        "tr": "TikTok ve Instagram için stoik alıntı videoları: içerik stratejisi (2026)",
        "nl": "Stoïcijnse quote-video's voor TikTok en Instagram: contentstrategie (2026)",
        "pl": "Stoickie filmy z cytatami na TikTok i Instagram: strategia treści (2026)",
        "vi": "Video quote Khắc kỷ cho TikTok và Instagram: chiến lược nội dung (2026)",
        "id": "Video quote Stoik untuk TikTok dan Instagram: strategi konten (2026)",
        "th": "วิดีโอคำคม Stoic สำหรับ TikTok และ Instagram: กลยุทธ์เนื้อหา (2026)",
        "zh": "TikTok 与 Instagram 斯多葛名言视频：内容策略（2026）",
        "ja": "TikTok・Instagram向けストア哲学名言動画：コンテンツ戦略（2026）",
        "ko": "TikTok·Instagram용 스토아 명언 영상: 콘텐츠 전략 (2026)",
        "hi": "TikTok और Instagram के लिए Stoic कोट वीडियो: कंटेंट रणनीति (2026)",
        "bn": "TikTok ও Instagram-এর জন্য Stoic কোট ভিডিও: কনটেন্ট কৌশল (2026)",
        "ur": "TikTok aur Instagram ke liye Stoic quote videos: content strategy (2026)",
        "ar": "فيديوهات اقتباسات رواقية لـ TikTok وInstagram: استراتيجية المحتوى (2026)",
        "fa": "ویدیوهای نقل‌قول رواقی برای TikTok و Instagram: استراتژی محتوا (2026)",
        "ta": "TikTok மற்றும் Instagram-க்கான Stoic கோட் வீடியோக்கள்: உள்ளடக்க உத்தி (2026)",
        "ru": "Стоические видео с цитатами для TikTok и Instagram: контент-стратегия (2026)",
    },
}

DESC_TRANSLATIONS = {
    "faceless-youtube-channel-with-quote-videos": {
        "es": "Cómo iniciar un canal de YouTube sin rostro con videos de citas y Shorts: nichos, calendario de publicación, SEO, monetización y herramientas de automatización.",
        "fr": "Comment lancer une chaîne YouTube faceless avec des vidéos de citations et YouTube Shorts — niches, calendrier, SEO, monétisation et outils d'automatisation.",
        "de": "So startest du einen faceless YouTube-Kanal mit Zitat-Videos und Shorts — Nischen, Upload-Plan, SEO-Titel, Monetarisierung und Automatisierungstools.",
        "pt": "Como criar um canal faceless no YouTube com vídeos de citações e Shorts — nichos, cronograma, SEO, monetização e ferramentas de automação para conteúdo diário.",
        "it": "Come avviare un canale YouTube faceless con video di citazioni e Shorts — nicchie, calendario, SEO, monetizzazione e strumenti di automazione per contenuti quotidiani.",
        "tr": "Alıntı videoları ve YouTube Shorts ile yüzsüz bir YouTube kanalı nasıl kurulur — niş fikirler, yükleme takvimi, SEO, monetizasyon ve otomasyon araçları.",
        "nl": "Hoe je een faceless YouTube-kanaal start met quote-video's en Shorts — niche-ideeën, uploadschema, SEO, monetisatie en automatiseringstools voor dagelijkse content.",
        "pl": "Jak założyć faceless kanał YouTube z filmami z cytatami i Shorts — nisze, harmonogram publikacji, SEO, monetyzacja i narzędzia automatyzacji.",
        "vi": "Cách bắt đầu kênh YouTube không lộ mặt bằng video quote và Shorts — ý tưởng niche, lịch đăng, SEO, kiếm tiền và công cụ tự động hóa nội dung hàng ngày.",
        "id": "Cara memulai channel YouTube faceless dengan video quote dan Shorts — ide niche, jadwal upload, SEO, monetisasi, dan alat otomatisasi untuk konten harian.",
        "th": "วิธีเริ่มช่อง YouTube แบบไม่โชว์หน้าด้วยวิดีโอคำคมและ Shorts — ไอเดีย niche ตารางอัปโหลด SEO การสร้างรายได้ และเครื่องมืออัตโนมัติ",
        "zh": "如何用名言视频和 YouTube Shorts 启动不露脸频道——细分定位、发布节奏、SEO 标题、变现路径与日常内容自动化工具。",
        "ja": "名言動画とYouTube Shortsで顔出しなしチャンネルを始める方法——ニッチ選定、投稿スケジュール、SEO、収益化、日常投稿の自動化ツール。",
        "ko": "명언 영상과 YouTube Shorts로 무얼굴 채널을 시작하는 방법 — 니치 아이디어, 업로드 일정, SEO, 수익화, 일일 콘텐츠 자동화 도구.",
        "hi": "कोट वीडियो और YouTube Shorts से फेसलेस YouTube चैनल कैसे शुरू करें — niche, अपलोड शेड्यूल, SEO, monetization और automation टूल।",
        "bn": "কোট ভিডিও ও YouTube Shorts দিয়ে ফেসলেস চ্যানেল কীভাবে শুরু করবেন — niche, আপলোড সময়সূচি, SEO, monetization ও অটোমেশন টুল।",
        "ur": "اقتباس ویڈیوز اور YouTube Shorts سے فیس لیس چینل کیسے شروع کریں — niche، اپ لوڈ شیڈول، SEO، monetization اور آٹومیشن ٹولز۔",
        "ar": "كيف تبدأ قناة YouTube بدون وجه بفيديوهات اقتباسات وShorts — أفكار التخصص، جدول النشر، SEO، تحقيق الدخل وأدوات الأتمتة.",
        "fa": "چگونه با ویدیوهای نقل‌قول و Shorts یک کانال بدون چهره بسازید — ایده‌های niche، برنامه آپلود، SEO، درآمدزایی و ابزارهای خودکارسازی.",
        "ta": "கோட் வீடியோக்கள் மற்றும் YouTube Shorts மூலம் faceless சேனலை எப்படி தொடங்குவது — niche, பதிவேற்ற அட்டவணை, SEO, monetization மற்றும் automation கருவிகள்.",
        "ru": "Как запустить faceless YouTube-канал с видео цитат и Shorts — ниши, график публикаций, SEO, монетизация и инструменты автоматизации.",
    },
    "stoic-quote-videos-tiktok-instagram-strategy": {
        "es": "Cómo crear videos de citas estoicas que funcionen en TikTok e Instagram — ganchos al estilo Marco Aurelio, plantillas visuales, cadencia y herramientas de IA.",
        "fr": "Comment créer des vidéos de citations stoïques performantes sur TikTok et Instagram — accroches, modèles visuels, cadence de publication et outils IA.",
        "de": "So erstellst du stoische Zitat-Videos für TikTok und Instagram — Hooks, visuelle Templates, Posting-Rhythmus und KI-Tools für täglichen stoischen Content.",
        "pt": "Como criar vídeos de citações estoicas que performam no TikTok e Instagram — ganchos, templates visuais, cadência de postagem e ferramentas de IA.",
        "it": "Come creare video di citazioni stoiche che performano su TikTok e Instagram — hook, template visivi, cadenza di pubblicazione e strumenti AI.",
        "tr": "TikTok ve Instagram'da performans gösteren stoik alıntı videoları nasıl oluşturulur — hook'lar, görsel şablonlar, paylaşım sıklığı ve yapay zeka araçları.",
        "nl": "Hoe je stoïcijnse quote-video's maakt die presteren op TikTok en Instagram — hooks, visuele templates, postingcadans en AI-tools.",
        "pl": "Jak tworzyć stoickie filmy z cytatami, które działają na TikTok i Instagram — haki, szablony wizualne, harmonogram publikacji i narzędzia AI.",
        "vi": "Cách tạo video quote Khắc kỷ hiệu quả trên TikTok và Instagram — hook, template hình ảnh, nhịp đăng bài và công cụ AI cho nội dung hàng ngày.",
        "id": "Cara membuat video quote Stoik yang perform di TikTok dan Instagram — hook, template visual, jadwal posting, dan alat AI untuk konten harian.",
        "th": "วิธีสร้างวิดีโอคำคม Stoic ที่ทำผลงานบน TikTok และ Instagram — hook เทมเพลตภาพ จังหวะโพสต์ และเครื่องมือ AI",
        "zh": "如何制作在 TikTok 和 Instagram 上表现优异的斯多葛名言视频——钩子、视觉模板、发布节奏与 AI 日常创作工具。",
        "ja": "TikTokとInstagramで成果を出すストア哲学名言動画の作り方——フック、ビジュアルテンプレート、投稿頻度、AIツール。",
        "ko": "TikTok과 Instagram에서 성과를 내는 스토아 명언 영상 만드는 법 — 훅, 비주얼 템플릿, 게시 주기, AI 도구.",
        "hi": "TikTok और Instagram पर perform करने वाले Stoic कोट वीडियो कैसे बनाएं — hooks, visual templates, posting cadence और AI टूल।",
        "bn": "TikTok ও Instagram-এ ভালো পারফর্ম করা Stoic কোট ভিডিও কীভাবে তৈরি করবেন — hook, ভিজ্যুয়াল টেমপ্লেট, posting cadence ও AI টুল।",
        "ur": "TikTok aur Instagram par perform karne wali Stoic quote videos kaise banayein — hooks, visual templates, posting cadence aur AI tools.",
        "ar": "كيف تنشئ فيديوهات اقتباسات رواقية تنجح على TikTok وInstagram — خطافات، قوالب بصرية، إيقاع النشر وأدوات الذكاء الاصطناعي.",
        "fa": "چگونه ویدیوهای نقل‌قول رواقی بسازید که در TikTok و Instagram عملکرد خوبی داشته باشند — قلاب‌ها، قالب‌های بصری، ریتم انتشار و ابزار AI.",
        "ta": "TikTok மற்றும் Instagram-ல் சிறப்பாக செயல்படும் Stoic கோட் வீடியோக்களை எப்படி உருவாக்குவது — hooks, visual templates, posting cadence மற்றும் AI கருவிகள்.",
        "ru": "Как создавать стоические видео с цитатами для TikTok и Instagram — хуки, визуальные шаблоны, график публикаций и AI-инструменты.",
    },
}


def parse_mdx(path: Path) -> tuple[str, str]:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        raise ValueError(f"No frontmatter: {path}")
    end = text.index("---", 3)
    body = text[end + 3 :].lstrip("\n")
    return text[: end + 3], body


def split_chunks(text: str, max_len: int = 4500) -> list[str]:
    """Split on paragraph boundaries for API limits."""
    paras = text.split("\n\n")
    chunks: list[str] = []
    current: list[str] = []
    size = 0
    for p in paras:
        plen = len(p) + 2
        if size + plen > max_len and current:
            chunks.append("\n\n".join(current))
            current = [p]
            size = plen
        else:
            current.append(p)
            size += plen
    if current:
        chunks.append("\n\n".join(current))
    return chunks


def translate_text(text: str, target: str, retries: int = 4) -> str:
    if target == "en":
        return text
    code = LANG_MAP[target]
    for attempt in range(retries):
        try:
            translator = GoogleTranslator(source="en", target=code)
            parts = split_chunks(text)
            out_parts = []
            for part in parts:
                out_parts.append(translator.translate(part))
                time.sleep(0.35)
            return "\n\n".join(out_parts)
        except Exception as exc:
            if attempt == retries - 1:
                raise
            time.sleep(1.5 * (attempt + 1))
            print(f"  retry {attempt+1} for {target}: {exc}")
    return text


def sanitize_body(body: str) -> str:
    body = body.replace("{", "(").replace("}", ")")
    # Ensure CTA signup link present
    if "app.quotvid.com/auth/signup" not in body:
        body = body.rstrip() + "\n\n[QuotVid](https://app.quotvid.com/auth/signup)\n"
    return body


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text, flags=re.UNICODE))


def tags_yaml(tags: list[str]) -> str:
    escaped = [t.replace('"', '\\"') for t in tags]
    return "[" + ", ".join(f'"{t}"' for t in escaped) + "]"


def write_mdx(slug: str, lang: str, title: str, desc: str, tags: list[str], body: str) -> Path:
    out = BLOG_DIR / f"{slug}-{lang}.mdx"
    esc_title = title.replace('"', '\\"')
    esc_desc = desc.replace('"', '\\"')
    content = f"""---
title: "{esc_title}"
description: "{esc_desc}"
publishedAt: "2026-05-21"
author: "QuotVid Team"
lang: "{lang}"
translationOf: "{slug}"
tags: {tags_yaml(tags)}
---

{body}
"""
    out.write_text(content, encoding="utf-8")
    return out


def main() -> None:
    BLOG_DIR.mkdir(parents=True, exist_ok=True)
    created: list[str] = []
    skip_existing = {"faceless-youtube-channel-with-quote-videos-es.mdx"}

    for slug, meta in ARTICLES.items():
        src = BLOG_DIR / f"{slug}.mdx"
        _, body_en = parse_mdx(src)

        for lang in LANGS:
            fname = f"{slug}-{lang}.mdx"
            if fname in skip_existing and (BLOG_DIR / fname).exists():
                print(f"skip existing {fname}")
                created.append(fname)
                continue

            print(f"Translating {slug} -> {lang}...")
            body = translate_text(body_en, lang)
            body = sanitize_body(body)
            wc = word_count(body)
            print(f"  words: {wc}")

            title = TITLE_TRANSLATIONS[slug][lang]
            desc = DESC_TRANSLATIONS[slug][lang]
            tags = TAG_TRANSLATIONS[slug][lang]
            write_mdx(slug, lang, title, desc, tags, body)
            created.append(fname)
            time.sleep(0.5)

    print(f"\nCreated/updated {len(created)} files")
    for name in sorted(created):
        print(f"  {name}")


if __name__ == "__main__":
    main()
