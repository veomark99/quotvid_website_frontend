"use client";

import { useState } from "react";

const faqs = [
  { q: "What type of videos does QuotVid create?", a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template." },
  { q: "How many videos do I get?", a: "Free plan users get 5 videos total — no credit card required, no time limit. Paid plan users (Monthly, Annual, Lifetime) get up to 20 videos per day." },
  { q: "Do I need video editing skills?", a: "No. QuotVid handles everything automatically. Set your persona once and videos are generated and ready to download. No design tools, no timelines, no rendering software." },
  { q: "What is the Custom Studio?", a: "Custom Studio is a full-width two-column interface where you control every aspect of your video: background (upload, YouTube URL, or personal library), watermark and logo, background music, accent colors, font size, and animation style. Everything updates a live phone preview before you generate." },
  { q: "What is the YouTube background feature?", a: "Paste any YouTube URL into the Custom Studio. The video loads right in the studio — watch it, pick your favourite 30-second clip, and QuotVid extracts and uses it as your video background automatically. No downloading required." },
  { q: "Can I use my own logo and branding?", a: "Yes. Upload your logo, choose its corner position, adjust size and opacity, and add your channel name badge. You can also set custom accent colors for your quote text and control font size. All paid plans include full branding control." },
  { q: "Can I set custom colors for my quote text?", a: "Yes. The accent color system lets you pick multiple brand colors for your quote text. You can also set a custom text shadow color for readability on bright backgrounds. All color settings are previewed live before you generate." },
  { q: "What is the background library?", a: "Every background video you upload or extract from YouTube is saved to your personal background library. On your next video, pick from your saved clips instead of uploading again — instant reuse across both AI Persona and Custom Studio modes." },
  { q: "Can I upload my own background music?", a: "Yes, on paid plans. Upload your own audio file in Custom Studio. You can also choose from the built-in music library with curated tracks for different moods. Audio is previewed before you select." },
  { q: "Is there really a free plan with no card required?", a: "Yes — get 5 videos completely free, no credit card required, no time limit. You see exactly what QuotVid produces for your niche before deciding anything." },
  { q: "Which languages are supported?", a: "QuotVid supports 25 languages including English, Urdu, Arabic, Spanish, Hindi, Persian, French, German, Russian, Chinese, Japanese, Korean, Turkish, and Indonesian. Arabic, Urdu, and Persian include full right-to-left text rendering with appropriate fonts." },
  { q: "Who is QuotVid best for?", a: "QuotVid is best for social media content creators, personal brand builders, poetry page owners, and anyone who wants to post consistently on TikTok, Instagram, or YouTube Shorts without spending hours on content creation." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-primary/20 bg-foreground/[0.02] px-4 sm:px-6">
              <button
                className="flex w-full items-center justify-between py-4 text-left text-xs sm:text-sm font-semibold text-light-heading"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="ml-4 shrink-0 text-primary">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="pb-4 text-xs sm:text-sm leading-relaxed text-light-body">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
