import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingJsonLd, PricingFaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing — Free, Monthly, Annual & Lifetime",
  description:
    "QuotVid pricing: Free plan with 5 videos, no credit card needed. Monthly $10, Annual $99/year, Lifetime $269 one-time. Start free, upgrade when you're ready.",
  keywords: ["QuotVid pricing", "quote video price", "AI video generator pricing", "content creator subscription"],
  alternates: { canonical: "https://www.quotvid.com/pricing" },
  openGraph: {
    title: "Pricing — Free, Monthly, Annual & Lifetime",
    description: "QuotVid pricing: Free plan with 5 videos, no credit card needed. Monthly $10, Annual $99/year, Lifetime $269 one-time. Start free, upgrade when you're ready.",
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
    desc: "5 videos for free. No credit card needed. Perfect for testing.",
    cta: "Get Started Free",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=free",
    highlight: false,
    features: [
      "5 videos free",
      "All content categories",
      "10+ video styles",
      "Download in MP4",
    ],
  },
  {
    name: "QuotVid Monthly — Unlimited Videos",
    price: "$10",
    period: "/ month",
    billing: "Billed monthly. Cancel anytime.",
    desc: "Unlimited videos for creators who post daily.",
    cta: "Get Started",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=monthly",
    highlight: false,
    features: [
      "Up to 20 videos per day",
      "All content categories",
      "All video styles & backgrounds",
      "YouTube & video URL backgrounds",
      "No watermark",
      "Priority generation",
    ],
  },
  {
    name: "QuotVid Annual — Best Value",
    price: "$99",
    period: "/ year",
    billing: "Billed annually. Save 18%.",
    desc: "Best value for creators committed to daily content.",
    cta: "Get Started",
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
    name: "QuotVid Lifetime — Early Bird",
    price: "$269",
    period: " one-time",
    billing: "One-time payment for lifetime access.",
    desc: "Pay once, use forever. No recurring charges.",
    cta: "Get Started",
    ctaHref: "https://app.quotvid.com/auth/signup?plan=lifetime",
    highlight: false,
    features: [
      "Everything in Annual",
      "Pay once, use forever",
      "No recurring charges",
    ],
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. Cancel your subscription at any time from your billing settings. You retain access until the end of your billing period." },
  { q: "Is the free plan really free forever?", a: "Yes — the Free plan gives you 5 videos total with no time limit and no credit card required. They are yours to generate whenever you want." },
  { q: "Do you offer a refund?", a: "Yes. We offer a 7-day money-back guarantee on all paid plans. Email hello@quotvid.com within 7 days of payment." },
  { q: "Can I upgrade or downgrade later?", a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings." },
  { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
  { q: "Is there an annual plan?", a: "Yes — the QuotVid Annual plan is $99/year and saves 18% vs monthly. It includes everything in Monthly plus unlimited video history, early access to new features, and priority support." },
  { q: "Can I use YouTube videos as video backgrounds?", a: "Yes — on all paid plans. Paste any YouTube, TikTok, Instagram, Vimeo, or Facebook URL, choose your clip (up to 60 seconds), and QuotVid downloads and stores it in the cloud. Your background persists across all future videos without re-uploading." },
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
