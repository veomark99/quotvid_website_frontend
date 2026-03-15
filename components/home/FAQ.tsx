"use client";

import { useState } from "react";

const faqs = [
  { q: "What type of videos does QuotVid create?", a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template." },
  { q: "How many videos do I get?", a: "Free plan users get 5 videos total — no credit card required, no time limit. Paid plan users (Monthly, Annual, Lifetime) get up to 20 videos per day." },
  { q: "Which languages are supported?", a: "QuotVid supports 20 languages including English, Urdu, Arabic, Spanish, Hindi, Persian, French, German, Russian, Chinese, Japanese, Korean, Turkish, and Indonesian. Arabic, Urdu, and Persian include full right-to-left text rendering with appropriate fonts." },
  { q: "Do I need design or video editing skills?", a: "None at all. Set your persona once (language, niche, template, music), and QuotVid generates everything. Videos are ready to download and post." },
  { q: "Can I change my content style after signing up?", a: "Yes, any time. Visit your Persona Settings page to update your category, language, template, background, or music preferences." },
  { q: "Is there really a free plan with no card required?", a: "Yes — get 5 videos completely free, no credit card required, no time limit. You see exactly what QuotVid produces for your niche before deciding anything." },
  { q: "Can I use YouTube videos as backgrounds?", a: "Yes — on paid plans. Paste any YouTube, TikTok, Instagram, or Vimeo URL, choose a clip (up to 60 seconds), and QuotVid downloads and stores it in the cloud. It persists permanently — no re-uploading after server restarts." },
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
