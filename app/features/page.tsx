import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "QuotVid Features — Custom Studio, YouTube Backgrounds & Live Preview",
  description:
    "Explore QuotVid's full feature set: AI persona mode, Custom Studio with live preview, YouTube background picker, watermark system, and background music library.",
  keywords: ["quote video maker for TikTok Instagram Reels YouTube Shorts", "custom video branding tool", "quote video studio", "YouTube video background", "automated quote video generator", "add watermark to video automatically", "AI content creator tool"],
  alternates: { canonical: "https://www.quotvid.com/features" },
  openGraph: {
    title: "QuotVid Features — Custom Studio, YouTube Backgrounds & Live Preview",
    description: "Explore QuotVid's full feature set: AI persona mode, Custom Studio with live preview, YouTube background picker, watermark system, and background music library.",
    url: "https://www.quotvid.com/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuotVid Features" }],
  },
};

const featureSections = [
  {
    icon: "🤖",
    badge: "Free + Paid",
    title: "Fully Automatic Daily Video Generation",
    desc: "AI Persona mode is the hands-off way to post every day. Set your content category, language, and animation style once. QuotVid's AI writes a fresh original quote, renders your 1080×1920 video, adds background music, and queues it for download — automatically, every day. No buttons. No editing. Just content. Powered by Groq LLM for fast, reliable quote generation across 20+ content categories including Stoic, Discipline, Business, Psychology, Mindset, and more.",
    points: ["20+ content categories", "AI quote generation — never repeated", "Daily automated generation", "6 animation styles"],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Automated daily AI quote video generation for content creators",
  },
  {
    icon: "🎬",
    badge: "Paid",
    title: "The Custom Studio — Your Brand in Full Control",
    desc: "Custom Studio is a full-width two-column interface purpose-built for brand-focused creators. On the left, you control every aspect of your video: background source, watermark, music, animation style, and quote content. On the right, a live phone mockup updates in real time so you see exactly what your video looks like before generating. No more wasted generations — no more trial and error. What you see is what you get.",
    points: ["Two-column studio layout", "Live phone preview — updates as you edit", "Full background, watermark, and music controls", "6 video animation templates"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Custom video studio interface with live phone preview for quote videos",
  },
  {
    icon: "▶️",
    badge: "Paid",
    title: "Use Any YouTube Video as Your Background",
    desc: "Paste any YouTube URL directly into Custom Studio. The video loads in an iframe preview right inside the studio — watch it, scrub through, and pick your perfect 30-second clip. QuotVid extracts that exact clip and saves it to your personal background library in Cloudflare R2 cloud storage. It persists permanently — no re-uploading, no link expiry, no broken backgrounds. This is the fastest way to find engaging motion backgrounds without downloading anything yourself.",
    points: ["Paste YouTube URL → preview in studio", "Pick exact 30-second clip", "One-click extraction — no downloading", "Saved permanently to your background library"],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format&fit=crop",
    imgAlt: "YouTube video background picker for quote video maker",
  },
  {
    icon: "🏷️",
    badge: "Paid",
    title: "Your Logo. Your Position. Your Opacity.",
    desc: "The watermark system in Custom Studio gives you precise control over your brand identity on every video. Upload your logo (PNG recommended for transparency), choose its corner position, set its size as a percentage of the frame, and adjust opacity from subtle to bold. Add a channel name text badge as an alternative or complement to your logo. Every adjustment reflects instantly in the live phone preview — so you dial in your brand before generating a single video.",
    points: ["Upload your logo (PNG with transparency)", "4 corner position options", "Size control (5–30% of frame)", "Opacity control (10–100%) + channel name badge"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Logo watermark overlay on branded short-form video",
  },
  {
    icon: "🎵",
    badge: "Free + Paid",
    title: "Built-In Music Library + Upload Your Own",
    desc: "Every QuotVid video includes background music. Choose from a library of curated preset tracks — cinematic, calm, epic, melancholic — each with an audio player preview so you hear exactly what you are selecting. Paid plan users can upload their own audio files for a fully custom sound that matches their brand. The audio player lets you preview before confirming — no more generating a video only to discover the music doesn't fit.",
    points: ["Curated preset music library", "Audio player preview before selecting", "Upload your own music (paid plans)", "Mood categories: cinematic, calm, epic, melancholic"],
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Background music library for automated quote video generator",
  },
  {
    icon: "📐",
    badge: "Free + Paid",
    title: "Perfect for Every Short-Form Platform",
    desc: "Every video QuotVid generates is 1080×1920 — the vertical format that TikTok, Instagram Reels, and YouTube Shorts are built for. Six animation templates give you variety across your content: from clean minimal typography to dynamic kinetic text and cinematic overlay styles. All videos are rendered with FFmpeg and MoviePy for professional-quality output that looks like you spent hours in a video editor.",
    points: ["1080×1920 — TikTok, Reels, Shorts ready", "6 animation templates", "FFmpeg + MoviePy rendering", "MP4 download, no extra conversion needed"],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Vertical 1080x1920 short-form video format for TikTok Instagram YouTube",
  },
];

const badgeColor: Record<string, string> = {
  Free: "bg-green-100 text-green-800",
  Paid: "bg-primary/10 text-primary",
  "Free + Paid": "bg-blue-100 text-blue-800",
};

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.quotvid.com" }, { name: "Features", url: "https://www.quotvid.com/features" }]} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Everything You Need to{" "}
              <span className="text-gradient-gold">Automate Your Quote Video Content</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              AI Persona mode for hands-off daily generation. Custom Studio for full brand control. YouTube backgrounds, live preview, watermark system, and more — all in one quote video maker for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
          </div>
        </section>

        {/* Feature sections */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8 space-y-16 sm:space-y-24">
            {featureSections.map((f, i) => (
              <div key={f.title} className={`grid gap-8 md:grid-cols-2 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl">{f.icon}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeColor[f.badge]}`}>{f.badge}</span>
                  </div>
                  <h2 className="mb-4 text-xl sm:text-2xl font-bold text-light-heading">{f.title}</h2>
                  <p className="mb-6 text-sm sm:text-base text-light-body leading-relaxed">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs sm:text-sm text-light-body">
                        <span className="text-primary font-bold">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-lg aspect-[4/3]">
                  <Image
                    src={f.img}
                    alt={f.imgAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-10 text-center text-2xl sm:text-3xl font-bold">Free vs Monthly vs Annual vs Lifetime</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-3 text-left text-muted-foreground font-medium">Feature</th>
                    <th className="py-3 text-center font-semibold">Free</th>
                    <th className="py-3 text-center font-semibold">Monthly<br /><span className="text-primary text-xs">$10/mo</span></th>
                    <th className="py-3 text-center font-semibold text-primary">Annual<br /><span className="text-xs">$99/yr</span></th>
                    <th className="py-3 text-center font-semibold">Lifetime<br /><span className="text-xs">$269</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {[
                    ["Videos", "5 total", "20/day", "20/day", "20/day"],
                    ["AI quote generation", "✓", "✓", "✓", "✓"],
                    ["20+ content categories", "✓", "✓", "✓", "✓"],
                    ["6 animation templates", "✓", "✓", "✓", "✓"],
                    ["Download MP4", "✓", "✓", "✓", "✓"],
                    ["Watermark", "QuotVid", "None", "None", "None"],
                    ["Custom Studio + live preview", "—", "✓", "✓", "✓"],
                    ["YouTube background picker", "—", "✓", "✓", "✓"],
                    ["Upload own backgrounds", "—", "✓", "✓", "✓"],
                    ["Upload own music", "—", "✓", "✓", "✓"],
                    ["Logo watermark + channel name", "—", "✓", "✓", "✓"],
                    ["Unlimited video history", "—", "—", "✓", "✓"],
                    ["Early access to new features", "—", "—", "✓", "✓"],
                    ["Priority support", "—", "—", "✓", "✓"],
                  ].map(([feature, free, monthly, annual, lifetime]) => (
                    <tr key={feature}>
                      <td className="py-3 text-muted-foreground">{feature}</td>
                      <td className="py-3 text-center">{free}</td>
                      <td className="py-3 text-center">{monthly}</td>
                      <td className="py-3 text-center text-primary font-medium">{annual}</td>
                      <td className="py-3 text-center">{lifetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <a
                href="/pricing"
                className="inline-block rounded-xl border border-primary/30 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
              >
                View Full Pricing →
              </a>
            </div>
          </div>
        </section>

        {/* Who is QuotVid for? */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-10 text-center text-2xl sm:text-3xl font-bold text-light-heading">Who Is QuotVid For?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Daily Quote Page Owners",
                  desc: "You run a TikTok or Instagram page in stoic, discipline, mindset, sigma, or motivational content. You need a new high-quality video every day. QuotVid generates it automatically.",
                },
                {
                  title: "Urdu & Arabic Creators",
                  desc: "You create Urdu poetry videos or Arabic quote content and every video tool you have tried renders the text incorrectly. QuotVid supports Nastaliq, Naskh, and RTL rendering natively.",
                },
                {
                  title: "Multilingual Page Managers",
                  desc: "You manage pages in multiple languages — one in English, one in Urdu, one in Arabic. Create a separate persona for each. Each generates correctly in its language.",
                },
                {
                  title: "Social Media Managers",
                  desc: "You manage content for multiple clients or brands. Bulk generation and multiple persona support lets you produce daily content for several accounts from one dashboard.",
                },
                {
                  title: "Creators Who Want to Post, Not Edit",
                  desc: "You have content ideas. You know your niche. You just do not want to spend 45 minutes in a video editor every evening. Set your persona once. Wake up to a ready video.",
                },
                {
                  title: "Creators Testing a New Niche",
                  desc: "You want to launch a new quote page but are not sure which niche will resonate. Free plan lets you test 5 videos across different niches before committing.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-5 sm:p-6">
                  <h3 className="mb-2 text-sm sm:text-base font-bold text-light-heading">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-light-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QuotVid vs alternatives */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl sm:text-3xl font-bold">QuotVid vs Alternatives</h2>
            <p className="mb-10 text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              How QuotVid compares to Canva, CapCut, and manual production for the daily quote video workflow.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-3 text-left text-muted-foreground font-medium">Capability</th>
                    <th className="py-3 text-center font-semibold text-primary">QuotVid</th>
                    <th className="py-3 text-center font-semibold">Canva</th>
                    <th className="py-3 text-center font-semibold">CapCut</th>
                    <th className="py-3 text-center font-semibold">Manual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {[
                    ["AI writes the quote", "✓", "—", "—", "—"],
                    ["YouTube video as background", "✓ (paid)", "—", "Manual", "—"],
                    ["1080×1920 video output", "✓", "✓", "✓", "✓"],
                    ["Daily automation", "✓", "—", "—", "—"],
                    ["Auto-post to TikTok/Instagram", "✓ (paid)", "—", "—", "—"],
                    ["Urdu Nastaliq rendering", "✓", "Partial", "—", "Manual"],
                    ["Arabic RTL support", "✓", "Partial", "Partial", "Manual"],
                    ["Music library included", "✓", "✓ (limited)", "✓", "Separate"],
                    ["Production time per video", "0 min", "20–40 min", "15–30 min", "30–60 min"],
                    ["No credit card to start", "✓", "✓", "✓", "N/A"],
                  ].map(([feature, quotvid, canva, capcut, manual]) => (
                    <tr key={feature}>
                      <td className="py-3 text-muted-foreground">{feature}</td>
                      <td className="py-3 text-center text-primary font-semibold">{quotvid}</td>
                      <td className="py-3 text-center">{canva}</td>
                      <td className="py-3 text-center">{capcut}</td>
                      <td className="py-3 text-center">{manual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
