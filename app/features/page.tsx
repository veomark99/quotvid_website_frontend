import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Features — AI Quote Video Generation, Templates & Multi-Language Support",
  description:
    "Explore QuotVid features: AI quote generation, 9 video templates, 20 languages, social media auto-posting, daily scheduling, brand kit, and bulk video generation.",
  keywords: ["quote video features", "AI content generation", "social media automation", "video templates", "multilingual content"],
  alternates: { canonical: "https://www.quotvid.com/features" },
  openGraph: {
    title: "Features — AI Quote Video Generation, Templates & Multi-Language Support",
    description: "Explore QuotVid features: AI quote generation, 9 video templates, 20 languages, social media auto-posting, daily scheduling, brand kit, and bulk video generation.",
    url: "https://www.quotvid.com/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuotVid Features" }],
  },
};

const featureSections = [
  {
    icon: "🤖",
    badge: "Free",
    title: "AI Quote Generation",
    desc: "Our AI writes original quotes tailored to your niche every day. Powered by state-of-the-art LLMs, every quote is unique — never repeated, never generic. Choose from 9 content niches: Stoic, Discipline, Business, Psychology, Sigma, Mindset, Poetry, and more.",
    points: ["9 content niches", "Duplicate detection", "Engagement scoring", "Custom tone per niche"],
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Person using laptop and phone to create written content",
  },
  {
    icon: "🎨",
    badge: "Free",
    title: "Video Customization",
    desc: "9 professional video templates designed for short-form content. From cinematic black-and-white to vibrant gradients — every template is optimized for 1080×1920 vertical format, the standard for TikTok, Instagram Reels, and YouTube Shorts.",
    points: ["9 video templates", "Custom fonts & colors", "Background images or video", "Watermark & logo overlay"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Creative design workspace with colorful design tools",
  },
  {
    icon: "📲",
    badge: "Paid",
    title: "Social Media Auto-Posting",
    desc: "Connect your TikTok, Instagram, and YouTube accounts and post directly from QuotVid. No manual downloading, no uploading. Your video goes live on schedule, automatically.",
    points: ["TikTok direct posting", "Instagram Reels posting", "YouTube Shorts posting", "Multi-platform in one click"],
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Hands holding phone showing social media apps",
  },
  {
    icon: "🗓️",
    badge: "Paid",
    title: "Daily Auto-Schedule",
    desc: "Set your posting time once. Every day at your chosen time, QuotVid generates your video and posts it automatically. Wake up to a posted video — every morning.",
    points: ["Custom posting time", "Daily automation", "Platform selection per schedule", "Zero manual steps"],
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Phone showing daily schedule and alarm",
  },
  {
    icon: "⚡",
    badge: "Paid",
    title: "Bulk Generation",
    desc: "Need a week's content in one go? Generate multiple videos at once. Set your persona, pick your count, and QuotVid renders everything in the background.",
    points: ["Generate up to 20 videos at once", "Background processing", "Download as batch", "Queue management"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Content analytics dashboard showing multiple content pieces",
  },
  {
    icon: "🏷️",
    badge: "Paid",
    title: "Brand Kit",
    desc: "Add your logo, channel name, and custom watermark to every video. Control positioning, size, and opacity. Your brand is always front and center.",
    points: ["Logo watermark", "Channel name overlay", "Position & opacity control", "Per-persona brand settings"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80&auto=format&fit=crop",
    imgAlt: "Brand identity design with logo and color palette",
  },
];

const badgeColor: Record<string, string> = {
  Free: "bg-green-100 text-green-800",
  Paid: "bg-primary/10 text-primary",
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
              Every Feature You Need to{" "}
              <span className="text-gradient-gold">Dominate Short-Form Content</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              From AI quote writing to automatic social posting — QuotVid handles your entire content workflow.
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
                <div className="relative overflow-hidden rounded-2xl border border-primary/10 shadow-lg aspect-[4/3]">
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
                    ["Content categories", "✓", "✓", "✓", "✓"],
                    ["Video styles", "10+", "All", "All", "All"],
                    ["Download MP4", "✓", "✓", "✓", "✓"],
                    ["Watermark", "QuotVid", "None", "None", "None"],
                    ["Social auto-posting", "—", "✓", "✓", "✓"],
                    ["Daily auto-schedule & bulk", "—", "✓", "✓", "✓"],
                    ["Brand kit", "—", "✓", "✓", "✓"],
                    ["Priority generation", "—", "✓", "✓", "✓"],
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

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
