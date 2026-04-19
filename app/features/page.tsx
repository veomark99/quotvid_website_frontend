import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — AI Video Generation, 5-Platform Auto-Posting & Scheduling | QuotVid",
  description:
    "QuotVid features: AI quote generation in 20 categories, 10+ video styles, auto-posting to YouTube, Instagram, TikTok, Pinterest and Facebook, per-platform scheduling, Custom Studio, brand kit, and bulk generation.",
  keywords: [
    "AI quote video generator features",
    "social media auto-posting",
    "YouTube Shorts auto-post",
    "Instagram Reels automation",
    "TikTok auto-posting",
    "Pinterest video pins",
    "Facebook pages video posting",
    "custom quote video studio",
    "live video preview",
    "YouTube background picker",
    "multilingual quote video",
  ],
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    title: "Features — AI Video Generation, 5-Platform Auto-Posting & Scheduling | QuotVid",
    description:
      "Auto-posting to YouTube, Instagram, TikTok, Pinterest and Facebook. Two persona modes, live phone preview, YouTube background picker, 25 languages, 10+ video styles, and more.",
    url: `${SITE_URL}/features`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "QuotVid Features" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "Features — AI Video Generation, 5-Platform Auto-Posting & Scheduling | QuotVid",
    description:
      "Auto-posting to YouTube, Instagram, TikTok, Pinterest and Facebook. Two persona modes, live phone preview, YouTube background picker, 25 languages, 10+ video styles, and more.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

const featureSections = [
  {
    icon: "📲",
    badge: "Paid",
    title: "Social Media Auto-Posting — 5 Platforms, One Dashboard",
    desc: "Connect your YouTube, Instagram, TikTok, Pinterest, and Facebook accounts to QuotVid and post directly — without ever leaving the app. Your video goes live on schedule, on every platform you choose, automatically. Connect each platform once using a secure login. Set your posting schedule — daily, three times a week, or five days a week. Set a posting time per platform in your local timezone. QuotVid handles everything else.",
    points: [
      "YouTube Shorts — uploaded with custom title, description, and hashtags to your YouTube channel",
      "Instagram Reels — published directly to your Creator or Business account",
      "TikTok — posted to your TikTok profile via TikTok's official publishing API",
      "Pinterest Video Pins — pinned to any board you manage, with custom description",
      "Facebook Pages — posted to any Facebook Page you manage",
      "Post to all 5 platforms in one click, or choose per video which platforms to post to",
      "Cancel any scheduled post before it goes live from the Scheduled tab",
      "Custom posting time per platform (e.g. YouTube at 9 AM, TikTok at 6 PM)",
      "Your timezone — QuotVid converts to UTC so posts land at your local time",
      "Generation schedules: Daily, 3×/week (Mon-Wed-Fri), 5×/week (Mon-Fri)",
      "Zero manual steps — wake up to published content",
    ],
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Social media auto-posting dashboard showing YouTube, Instagram, TikTok, Pinterest and Facebook",
  },
  {
    icon: "🔀",
    badge: "Free + Paid",
    title: "Two Persona Modes — AI Persona and Custom Studio",
    desc: "QuotVid gives you two distinct ways to create. AI Persona is the hands-off mode: pick your category, language, and style once, and QuotVid generates fresh branded videos every day automatically. Custom Studio is the full-control mode: a two-column workspace where you control every detail of a single video in real time. You can switch between modes at any time — or use both. Each mode has its own persona profile so your brand settings are always separate.",
    points: [
      "AI Persona — automated daily generation",
      "Custom Studio — manual per-video control",
      "Switch between modes at any time",
      "Separate brand profile per mode",
    ],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Two persona modes in QuotVid AI quote video generator",
  },
  {
    icon: "🎬",
    badge: "Paid",
    title: "Custom Studio — Full Brand Control with Live Phone Preview",
    desc: "Custom Studio is a full-width two-column interface built for brand-focused creators. On the left, you control everything: background source, watermark, background music, accent colors, font size, text shadow, and the quote itself. On the right, a live phone mockup updates in real time — every change you make reflects instantly. See exactly how your video looks before generating. No wasted generations, no guesswork.",
    points: [
      "Real-time phone mockup — updates as you edit",
      "Full two-column studio layout",
      "Control: background, watermark, colors, font, music, quote",
      "What you see is what you get",
    ],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Custom video studio interface with live phone preview for quote videos",
  },
  {
    icon: "▶️",
    badge: "Paid",
    title: "YouTube Background Picker — In-Studio Video Preview",
    desc: "Paste any YouTube URL directly into the studio. The video loads right there — watch it, scrub through it, and pick your perfect 30-second clip. QuotVid extracts that exact clip and saves it to your personal background library automatically. No downloading, no re-uploading. You get full motion video backgrounds from any YouTube source in seconds.",
    points: [
      "Paste YouTube URL → preview plays inside studio",
      "Pick any 30-second clip precisely",
      "One-click extraction — no external tools needed",
      "Saved permanently to your background library",
    ],
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format&fit=crop",
    imgAlt: "YouTube video background picker for quote video maker",
  },
  {
    icon: "🏷️",
    badge: "Paid",
    title: "Watermark & Branding — Logo, Position, Opacity, Channel Badge",
    desc: "Upload your logo (PNG with transparency recommended), choose its corner position, set its size as a percentage of the frame, and adjust opacity from subtle watermark to bold overlay. Add a channel name text badge as a complement or alternative to your logo. Every change reflects in the live phone preview. Your brand appears exactly the same on every video — consistent, professional, unmistakable.",
    points: [
      "Upload logo (PNG with transparency)",
      "4 corner positions",
      "Size control (5–30% of frame) + opacity (10–100%)",
      "Optional channel name text badge",
    ],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Logo watermark overlay on branded short-form video",
  },
  {
    icon: "🗂️",
    badge: "Paid",
    title: "Background Library — Reuse Clips Without Re-Uploading",
    desc: "Every background you upload or extract from YouTube is saved to your personal background library in cloud storage. On any future video — whether in AI Persona or Custom Studio — pick from your library instead of uploading again. Clips persist indefinitely. No expiry, no broken links, no re-uploading the same clip repeatedly. Your library grows with every video you make.",
    points: [
      "All uploaded and extracted clips saved automatically",
      "Reuse instantly across AI Persona and Custom Studio",
      "Stored in Cloudflare R2 — no expiry",
      "Thumbnail gallery for easy browsing",
    ],
    img: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Background video library for reusing clips in quote video maker",
  },
  {
    icon: "🎵",
    badge: "Free + Paid",
    title: "Music Library + Upload Your Own Custom Audio",
    desc: "Every video includes background music. Choose from a curated library of preset tracks — cinematic, calm, epic, melancholic — each with an in-app audio player so you hear it before you select it. On paid plans, upload your own audio file for a fully branded sound. Music is mixed into the final video automatically at the right level — no post-processing needed.",
    points: [
      "Curated preset music library",
      "In-app audio preview before selecting",
      "Upload your own music (paid plans)",
      "Auto-mixed into final video at correct level",
    ],
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Background music library and custom audio upload for quote videos",
  },
  {
    icon: "🎨",
    badge: "Free + Paid",
    title: "Accent Colors, Font Size & Text Shadow Control",
    desc: "Set up to 4 custom accent colors for your quote text — your brand palette applied to every video automatically. Choose from 5 font size presets (Auto, Small, Medium, Large, X-Large) for the right visual weight on your background. Add a custom text shadow color to ensure readability on bright or complex backgrounds. All color and typography settings are previewed live in the phone mockup.",
    points: [
      "Up to 4 custom accent colors",
      "5 font size presets",
      "Custom text shadow color for readability",
      "All settings previewed live",
    ],
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Accent colors and font size control for branded quote videos",
  },
  {
    icon: "📂",
    badge: "Free + Paid",
    title: "20 Categories, 10+ Video Styles — Matched Automatically",
    desc: "Choose from 20 content categories — Stoic, Discipline, Business, Psychology, Mindset, Urdu Poetry, Humor, Faith, Fitness, Family, Creativity, Leadership, and more. QuotVid automatically recommends the best-matching styles for your category, so you never choose a look that clashes with your content. 10+ video styles give you a full range from clean minimal text to dynamic kinetic motion and cinematic looks.",
    points: [
      "20 content categories",
      "10+ video styles",
      "Category → style matching built in",
      "Unique AI-generated quotes per category",
    ],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop",
    imgAlt: "20 content categories and 10+ video styles in QuotVid",
  },
  {
    icon: "🌍",
    badge: "Free + Paid",
    title: "25 Languages — Including Full RTL Support",
    desc: "Generate quote videos in 25 languages: English, Urdu, Arabic, Hindi, Spanish, Persian, French, German, Russian, Chinese, Japanese, Korean, Turkish, Indonesian, Swahili, Bengali, Punjabi, Tamil, and more. Arabic, Urdu, and Persian render with full right-to-left text layout using Nastaliq and Naskh fonts — a capability most video tools do not support at all. All generated videos are ready to download with a custom file name for easy organization.",
    points: [
      "25 languages supported",
      "Full RTL rendering for Arabic, Urdu, Persian",
      "Nastaliq and Naskh font support",
      "Download with custom file name",
    ],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Multilingual quote video generation in 25 languages with RTL support",
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Features", url: `${SITE_URL}/features` },
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Every Feature You Need to{" "}
              <span className="text-gradient-gold">Create, Brand, and Automate</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Two persona modes. Live phone preview. YouTube background picker. Background library. Accent colors. 25 languages. 20 categories. 10+ video styles. Custom audio. Cloud storage. Everything built into one quote video studio for TikTok, Instagram Reels, and YouTube Shorts.
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
                  {i === 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href="/integrations" className="rounded-lg border border-primary/30 px-4 py-2 text-xs sm:text-sm font-semibold text-light-heading transition-colors hover:bg-primary/10">
                        Learn how each integration works →
                      </Link>
                      <Link href="/pricing" className="rounded-lg border border-primary/30 px-4 py-2 text-xs sm:text-sm font-semibold text-light-heading transition-colors hover:bg-primary/10">
                        View pricing plans →
                      </Link>
                    </div>
                  )}
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
                    ["20 categories · 10+ video styles", "✓", "✓", "✓", "✓"],
                    ["25 languages + RTL", "✓", "✓", "✓", "✓"],
                    ["Download MP4 with custom name", "✓", "✓", "✓", "✓"],
                    ["Watermark", "QuotVid", "None", "None", "None"],
                    ["Custom Studio + live preview", "—", "✓", "✓", "✓"],
                    ["YouTube background picker", "—", "✓", "✓", "✓"],
                    ["Background library", "—", "✓", "✓", "✓"],
                    ["Upload own backgrounds", "—", "✓", "✓", "✓"],
                    ["Custom accent colors + font size", "—", "✓", "✓", "✓"],
                    ["Upload own music", "—", "✓", "✓", "✓"],
                    ["Logo watermark + channel name badge", "—", "✓", "✓", "✓"],
                    ["Cloud video storage", "—", "✓", "✓", "✓"],
                    ["Social auto-posting (5 platforms: YouTube, Instagram, TikTok, Pinterest, Facebook)", "—", "✓", "✓", "✓"],
                    ["Per-platform posting schedule", "—", "✓", "✓", "✓"],
                    ["Timezone scheduling", "—", "✓", "✓", "✓"],
                    ["AI video retention", "7 days", "7 days", "7 days", "7 days"],
                    ["Studio video retention", "—", "Forever", "Forever", "Forever"],
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
                  desc: "You create Urdu poetry videos or Arabic quote content and every video tool you have tried renders the text incorrectly. QuotVid supports Nastaliq, Naskh, and full RTL rendering natively.",
                },
                {
                  title: "Multilingual Page Managers",
                  desc: "You manage pages in multiple languages — one in English, one in Urdu, one in Arabic. Create a separate persona for each. Each generates correctly in its language with the right font.",
                },
                {
                  title: "Social Media Managers",
                  desc: "You manage content for multiple clients or brands. Bulk generation and multiple persona support lets you produce daily content for several accounts from one dashboard.",
                },
                {
                  title: "Creators Who Want to Post, Not Edit",
                  desc: "You have content ideas and know your niche. You just do not want to spend 45 minutes in a video editor every evening. Set your persona once. Wake up to a ready video.",
                },
                {
                  title: "Creators Testing a New Niche",
                  desc: "You want to launch a new quote page but are not sure which niche will resonate. The free plan gives you 5 videos to test across different categories before committing.",
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
                    ["Live phone preview before generate", "✓", "—", "—", "—"],
                    ["1080×1920 video output", "✓", "✓", "✓", "✓"],
                    ["Daily automation", "✓", "—", "—", "—"],
                    ["Social auto-posting (5 platforms)", "✓ (paid)", "—", "—", "—"],
                    ["25 languages + RTL", "✓", "Partial", "Partial", "Manual"],
                    ["Custom accent colors", "✓ (paid)", "✓", "Limited", "Manual"],
                    ["Background library", "✓ (paid)", "—", "—", "—"],
                    ["Music library included", "✓", "✓ (limited)", "✓", "Separate"],
                    ["Upload own music", "✓ (paid)", "✓ (paid)", "✓", "—"],
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
