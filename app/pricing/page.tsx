import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingJsonLd, PricingFaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "QuotVid Pricing — Free Plan, $10/mo, $99/yr, $269 Lifetime",
  description:
    "QuotVid starts free — 5 videos, no card. Upgrade to Monthly ($10), Annual ($99), or Lifetime ($269) for unlimited daily videos, Custom Studio with live preview, YouTube backgrounds, accent colors, background library, and 25 languages.",
  keywords: ["QuotVid pricing", "AI quote video generator price", "quote video subscription", "custom video studio pricing", "content creator subscription", "TikTok video maker price"],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "QuotVid Pricing — Free Plan, $10/mo, $99/yr, $269 Lifetime",
    description: "Start free with 5 videos. Upgrade for unlimited daily videos, Custom Studio, live preview, YouTube backgrounds, accent colors, and 25 languages.",
    url: `${SITE_URL}/pricing`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "QuotVid Pricing Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "QuotVid Pricing — Free Plan, $10/mo, $99/yr, $269 Lifetime",
    description:
      "Start free with 5 videos. Upgrade for unlimited daily videos, Custom Studio, live preview, YouTube backgrounds, accent colors, and 25 languages.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    billing: null,
    desc: "5 videos to try the full pipeline. No credit card needed.",
    cta: "Start Free",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=free",
    highlight: false,
    features: [
      "5 videos total",
      "QuotVid watermark on all videos",
      "AI Persona mode",
      "20 content categories",
      "10+ pre-built animation templates",
      "25 languages + RTL support",
      "Download in MP4",
    ],
  },
  {
    name: "QuotVid Monthly",
    price: "$10",
    period: "/ month",
    billing: "Billed monthly. Cancel anytime.",
    desc: "Daily videos, no watermark, full Custom Studio access.",
    cta: "Start Monthly Plan",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=monthly",
    highlight: false,
    features: [
      "Unlimited videos per day",
      "No watermark",
      "AI Persona + Custom Studio",
      "Live phone preview before generating",
      "YouTube background picker",
      "Personal background library",
      "Upload custom backgrounds",
      "Upload custom music",
      "Custom accent colors + font size",
      "Logo watermark + channel name badge",
      "25 languages · 20 categories · 10+ video styles",
    ],
  },
  {
    name: "QuotVid Annual",
    price: "$99",
    period: "/ year",
    billing: "Billed annually. Save $21 vs 12 months at $10/mo ($120/yr).",
    desc: "Same features as Monthly, lower total cost for creators who post all year.",
    cta: "Start Annual Plan",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=annual",
    highlight: true,
    features: [
      "Everything in the Monthly plan (unlimited daily videos, Custom Studio, no watermark)",
      "About 17% less than paying monthly for a year ($99 vs $120 at $10/mo)",
      "Roughly $8.25 / month when averaged over the year",
      "Priority support for faster answers when you need help",
      "One invoice per year (simpler for teams and tax records)",
    ],
  },
  {
    name: "QuotVid Lifetime",
    price: "$269",
    period: " one-time",
    billing: "One-time payment. No recurring charges ever.",
    desc: "Pay once. Use forever. Every future feature included.",
    cta: "Get Lifetime Access",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=lifetime",
    highlight: false,
    features: [
      "Everything in Annual",
      "No recurring payments",
      "All future features included",
      "Pay once, yours forever",
    ],
  },
];

const faqs = [
  { q: "Do I need video editing skills?", a: "No. QuotVid handles everything automatically. Set your persona once — category, language, style, watermark — and videos are generated and ready to download. No design tools, no timelines, no rendering software required." },
  { q: "What platforms are the videos made for?", a: "TikTok, Instagram Reels, and YouTube Shorts. All videos are 1080×1920 vertical format — the standard for every major short-form platform." },
  { q: "Can I use my own logo and branding?", a: "Yes. Upload your logo, choose its corner position, adjust size and opacity, and add your channel name badge. All paid plans include full branding control. Everything previews live on a phone mockup before you generate." },
  { q: "What is the YouTube background feature?", a: "Paste any YouTube URL into the Custom Studio. The video loads right in the studio — watch it, pick your favourite 30-second clip, and QuotVid extracts and uses it as your video background automatically. No downloading required." },
  { q: "What is the live phone preview?", a: "Custom Studio shows a real-time phone mockup that updates as you edit. Change your background, watermark position, accent colors, font size, or quote text — the preview reflects each change instantly. You see exactly how your final video will look before you generate it." },
  { q: "Can I set custom colors for my quote text?", a: "Yes. Paid plans include an accent color system where you can set up to 4 brand colors applied to your quote text. You can also set a text shadow color for readability on bright backgrounds. All changes are visible in the live preview." },
  { q: "What is the background library?", a: "Every background you upload or extract from a YouTube video is saved to your personal background library. On your next video, pick from your saved clips instead of uploading again. Clips are stored in the cloud with no expiry — instant reuse across AI Persona and Custom Studio." },
  { q: "Can I upload my own background music?", a: "Yes, on paid plans. Upload your own audio file in Custom Studio. You can also choose from the curated built-in music library. The in-app audio player lets you preview tracks before selecting." },
  { q: "How many categories and templates are there?", a: "QuotVid has 20 content categories (Stoic, Discipline, Business, Psychology, Mindfulness, Faith, Humor, Fitness, poetry, and more). There are 10+ pre-built animation templates, and the studio recommends templates that fit your category." },
  { q: "Is there a free trial?", a: "Yes — the free plan lets you generate your first 5 videos with no credit card needed. The full pipeline runs — AI quote writing, video render, music, MP4 export. You see exactly what paid users get, in smaller quantity." },
  { q: "Can I cancel anytime?", a: "Yes. Monthly plans cancel anytime from your billing settings. You retain access until the end of your billing period. Annual plans include a 7-day money-back guarantee." },
  { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
  { q: "Can I upgrade or downgrade later?", a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings." },
];

export default function PricingPage() {
  return (
    <>
      <PricingJsonLd />
      <PricingFaqJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Pricing", url: `${SITE_URL}/pricing` },
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Simple, <span className="text-gradient-gold">Transparent Pricing</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Start free, upgrade when you're ready. No contracts, no hidden fees.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-section-dark py-12 sm:py-20">
          <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-[14px] p-6 sm:p-8 flex flex-col transition-[border-color,box-shadow] duration-200 ${
                    plan.highlight
                      ? "border-2 border-[#e2a128] bg-card shadow-[0_0_40px_rgba(226,161,40,0.18)]"
                      : "border border-[#1F2937] bg-card hover:border-[#374151]"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-foreground">{plan.name}</h2>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="mb-1 text-xs text-muted-foreground">{plan.period}</span>
                    </div>
                    {plan.billing && (
                      <p className="mt-1 text-xs text-muted-foreground">{plan.billing}</p>
                    )}
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{plan.desc}</p>
                  </div>

                  <a
                    href={plan.ctaHref}
                    className={`mb-6 block rounded-[10px] px-6 py-3 text-center text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-gradient-gold text-white hover:brightness-90 shadow-[var(--shadow-brand)]"
                        : "border border-[#374151] text-[#E5E7EB] hover:bg-[#1F2937] hover:border-[#4B5563]"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-[#e2a128] font-bold shrink-0 mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Is QuotVid worth it? */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-light-heading text-center">Is QuotVid Worth It?</h2>
            <p className="mb-8 text-sm sm:text-base text-light-body leading-relaxed text-center max-w-2xl mx-auto">
              Here is the real math: creating one quote video manually takes 30–45 minutes — writing the quote, designing the frame,
              animating text, adding music, exporting. At $10/month with unlimited daily videos, QuotVid costs less than
              thirty-five cents per day. The 15–30 hours of production time you reclaim per month is the actual value.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                { metric: "30–45 min", label: "Saved per video vs. manual production" },
                { metric: "~$0.02", label: "Approx. cost per video on the monthly plan" },
                { metric: "0 minutes", label: "Production time once your persona is set" },
              ].map((item) => (
                <div key={item.metric} className="rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] p-5 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-gradient-gold mb-1">{item.metric}</p>
                  <p className="text-xs sm:text-sm text-light-body">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm sm:text-base text-light-body leading-relaxed">
              <p>
                <strong className="text-light-heading">For daily posters:</strong> the monthly plan at $10 is straightforward.
                You post every day, which means 600+ videos per month. The cost per video is negligible.
              </p>
              <p>
                <strong className="text-light-heading">For committed creators:</strong> the annual plan at $99/year saves $21
                compared with twelve months billed monthly at $10 ($120), and includes priority support.
              </p>
              <p>
                <strong className="text-light-heading">For long-term builders:</strong> the lifetime plan at $269 pays for itself
                in under 27 months vs staying on Monthly at $10. If you are building a serious content operation, the math on lifetime is clear.
              </p>
              <p>
                Not sure yet? The free plan gives you 5 videos to evaluate the output quality with zero financial commitment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-8 text-center text-xl sm:text-2xl font-bold">Pricing FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-[12px] border border-[#1F2937] bg-card p-4 sm:p-6 transition-colors hover:border-[#374151]">
                  <p className="mb-2 text-sm font-semibold text-foreground">{f.q}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
