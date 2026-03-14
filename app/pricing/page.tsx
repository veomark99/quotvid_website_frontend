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
  { q: "Is the free plan really free forever?", a: "Yes — the Free plan has no time limit. You get 5 videos per day with no credit card required, forever." },
  { q: "Do you offer a refund?", a: "Yes. We offer a 7-day money-back guarantee on all paid plans. Email hello@quotvid.com within 7 days of payment." },
  { q: "Can I upgrade or downgrade later?", a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings." },
  { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
  { q: "Is there an annual plan?", a: "Yes — the QuotVid Annual plan is $99/year and saves 18% vs monthly. It includes everything in Monthly plus unlimited video history, early access to new features, and priority support." },
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
