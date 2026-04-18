"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Which platforms can QuotVid post to?",
    a: "QuotVid auto-posts to YouTube Shorts, Instagram Reels, TikTok, Pinterest Video Pins, and Facebook Pages. Connect each platform once via secure OAuth login. Auto-posting is available on all paid plans.",
  },
  {
    q: "Is it safe to connect my social media accounts?",
    a: "Yes. QuotVid uses each platform's official OAuth 2.0 login — the same system used by Buffer, Hootsuite, and every major scheduling tool. We never see or store your password. Your tokens are encrypted with AES-256. Disconnect any platform instantly from your dashboard.",
  },
  {
    q: "Can I post to different platforms at different times?",
    a: "Yes. Set a separate posting time per platform in your local timezone. YouTube at 9am, TikTok at 6pm, Pinterest at 10am — QuotVid converts everything to UTC and handles the rest automatically.",
  },
  {
    q: "What type of videos does QuotVid create?",
    a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for Pinterest, TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template.",
  },
  {
    q: "Do I need video editing skills?",
    a: "None. QuotVid generates and renders everything. Set your persona once — niche, language, style, platforms — and fresh videos are generated and posted automatically every day. No design tools, no timelines, no rendering software.",
  },
  {
    q: "What is the Custom Studio?",
    a: "Custom Studio lets you write your own quote, upload your own background image or video, add custom audio, drag your text anywhere on the canvas, and preview everything on a live phone mockup before generating. Studio videos are stored forever — never auto-deleted.",
  },
  {
    q: "What happens to my videos after 7 days?",
    a: "AI-generated videos auto-delete after 7 days to keep your storage clean. Download them anytime before then. Custom Studio videos are kept forever until you manually delete them.",
  },
  {
    q: "What is the free trial?",
    a: "7 days free. 5 videos per day. All 5 platforms. Full auto-posting included. No credit card required. You see exactly what QuotVid produces for your niche before deciding anything.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing settings in one click. You keep access until your current period ends. 7-day money-back guarantee on all paid plans — no questions asked. Email hello@quotvid.com.",
  },
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
