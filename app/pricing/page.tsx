import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingJsonLd, PricingFaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "QuotVid Pricing — Start Free, Upgrade When Ready",
  description:
    "QuotVid starts free. Upgrade to Monthly ($10), Annual ($99), or Lifetime ($269) for unlimited daily videos, custom branding, and YouTube backgrounds.",
  keywords: ["affordable AI video generator pricing", "QuotVid pricing", "quote video price", "AI video generator pricing", "content creator subscription"],
  alternates: { canonical: "https://www.quotvid.com/pricing" },
  openGraph: {
    title: "QuotVid Pricing — Start Free, Upgrade When Ready",
    description: "QuotVid starts free. Upgrade to Monthly ($10), Annual ($99), or Lifetime ($269) for unlimited daily videos, custom branding, and YouTube backgrounds.",
    url: "https://www.quotvid.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuotVid Pricing Plans" }],
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
      "Watermark on all videos",
      "AI Persona mode only",
      "All content categories",
      "6 animation templates",
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
      "20 videos per day",
      "No watermark",
      "AI Persona + Custom Studio",
      "YouTube background feature",
      "Upload custom backgrounds",
      "Upload custom music",
      "Logo watermark + channel name",
      "Priority support",
    ],
  },
  {
    name: "QuotVid Annual",
    price: "$99",
    period: "/ year",
    billing: "Billed annually. Save $21 vs monthly.",
    desc: "Everything in Monthly — best value for committed creators.",
    cta: "Start Annual Plan",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=annual",
    highlight: true,
    features: [
      "Everything in Monthly",
      "Unlimited video history",
      "Early access to new features",
      "Priority support",
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
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.quotvid.com" }, { name: "Pricing", url: "https://www.quotvid.com/pricing" }]} />
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
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                    plan.highlight
                      ? "border-2 border-primary bg-card shadow-[0_0_40px_hsl(39_76%_52%/0.15)]"
                      : "border border-primary/20 bg-card"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-primary-foreground">
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
                    className={`mb-6 block rounded-xl px-6 py-3 text-center text-sm font-bold transition-transform hover:scale-105 ${
                      plan.highlight
                        ? "bg-gradient-gold text-primary-foreground"
                        : "border border-primary/30 text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span className="text-primary font-bold shrink-0 mt-0.5">✓</span> {f}
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
              animating text, adding music, exporting. At $10/month and 20 videos per day, QuotVid costs less than
              one dollar per week. The 15–30 hours of production time you reclaim per month is the actual value.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                { metric: "30–45 min", label: "Saved per video vs. manual production" },
                { metric: "$0.017", label: "Cost per video on the monthly plan" },
                { metric: "0 minutes", label: "Production time once your persona is set" },
              ].map((item) => (
                <div key={item.metric} className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-5 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-gradient-gold mb-1">{item.metric}</p>
                  <p className="text-xs sm:text-sm text-light-body">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm sm:text-base text-light-body leading-relaxed">
              <p>
                <strong className="text-light-heading">For daily posters:</strong> the monthly plan at $10 is straightforward.
                You post every day, which means 300+ videos per month. The cost per video is a rounding error.
              </p>
              <p>
                <strong className="text-light-heading">For committed creators:</strong> the annual plan at $99/year saves 18%
                and adds unlimited video history — useful if you want to reference or repost older content.
              </p>
              <p>
                <strong className="text-light-heading">For long-term builders:</strong> the lifetime plan at $269 pays for itself
                in 27 months vs monthly. If you are building a serious content operation, the math on lifetime is clear.
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
                <div key={f.q} className="rounded-xl border border-primary/20 bg-card p-4 sm:p-6">
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
