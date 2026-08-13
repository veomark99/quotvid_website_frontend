import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingJsonLd, PricingFaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { APP_URL, OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "QuotVid Pricing — 5-Day YouTube & Pinterest Trials, $10 Lifetime",
  description:
    "Start a free 5-day YouTube or Pinterest automation trial — no credit card. After your trial, upgrade to $10 lifetime access for unlimited videos, Custom Studio, and all platforms.",
  keywords: ["QuotVid pricing", "YouTube automation trial", "Pinterest video trial", "quote video lifetime deal", "AI quote video generator"],
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "QuotVid Pricing — 5-Day YouTube & Pinterest Trials, $10 Lifetime",
    description: "Try QuotVid free for 5 days on YouTube or Pinterest. Then upgrade once for $10 lifetime access.",
    url: `${SITE_URL}/pricing`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "QuotVid Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "QuotVid Pricing — 5-Day YouTube & Pinterest Trials, $10 Lifetime",
    description: "Try QuotVid free for 5 days on YouTube or Pinterest. Then upgrade once for $10 lifetime access.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

const trialPlans = [
  {
    name: "YouTube 5-Day Trial",
    platform: "YouTube",
    price: "$0",
    period: "for 5 days",
    desc: "Auto-generate and post daily quote videos to YouTube Shorts. No credit card required.",
    cta: "Start YouTube Trial",
    ctaHref: `${APP_URL}/auth/signup?trial=youtube`,
    features: [
      "5-day automation trial",
      "1 video per day auto-generated",
      "Auto-post to YouTube Shorts only",
      "Connect YouTube to start the clock",
      "Full AI quote + video pipeline",
    ],
  },
  {
    name: "Pinterest 5-Day Trial",
    platform: "Pinterest",
    price: "$0",
    period: "for 5 days",
    desc: "Auto-generate and post daily quote videos as Pinterest Video Pins. No credit card required.",
    cta: "Start Pinterest Trial",
    ctaHref: `${APP_URL}/auth/signup?trial=pinterest`,
    highlight: true,
    features: [
      "5-day automation trial",
      "1 video per day auto-generated",
      "Auto-post to Pinterest only",
      "Connect Pinterest to start the clock",
      "Full AI quote + video pipeline",
    ],
  },
];

const lifetimePlan = {
  name: "Lifetime Deal",
  price: "$10",
  period: " one-time",
  desc: "After your trial, pay once for unlimited videos, all platforms, and every future feature.",
  cta: "Get Lifetime Access — $10",
  ctaHref: `${APP_URL}/pricing`,
  compareAt: "$269",
  features: [
    "Unlimited videos per day",
    "YouTube & Pinterest unlocked",
    "Custom Studio + live preview",
    "No watermark",
    "Never pay again",
  ],
};

const faqs = [
  { q: "Is the trial really free?", a: "Yes. Pick YouTube or Pinterest, create your account, and connect your platform. You get 5 days of automated daily video generation and posting. No credit card required." },
  { q: "When does the 5-day clock start?", a: "The trial clock starts when you connect your chosen platform (YouTube or Pinterest) via OAuth — not when you sign up. Your first video begins generating as soon as your account is created." },
  { q: "Can I switch platforms during the trial?", a: "Each trial is locked to one platform — YouTube or Pinterest. Upgrade to the $10 lifetime plan to unlock both platforms." },
  { q: "What happens after 5 days?", a: "Your trial ends and automation stops. Upgrade to the $10 lifetime plan to keep auto-generating and posting, unlock both platforms, and get unlimited daily videos." },
  { q: "What payment methods do you accept for lifetime?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
  { q: "Is there a refund policy?", a: "All sales are final. The $10 lifetime plan is non-refundable. Use the free 5-day trial to evaluate QuotVid before purchasing." },
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
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Try free for <span className="text-gradient-gold">5 days</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Pick YouTube or Pinterest. No credit card. After your trial, upgrade once for $10 lifetime access.
            </p>
          </div>
        </section>

        <section className="bg-section-dark py-12 sm:py-16">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {trialPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-[14px] p-6 sm:p-8 flex flex-col ${
                    plan.highlight
                      ? "border-2 border-[#e2a128] bg-card shadow-[0_0_40px_rgba(226,161,40,0.18)]"
                      : "border border-[#1F2937] bg-card"
                  }`}
                >
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#e2a128] mb-1">{plan.platform}</p>
                    <h2 className="text-lg font-bold text-foreground">{plan.name}</h2>
                    <div className="mt-2 flex items-end gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="mb-1 text-xs text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  <a
                    href={plan.ctaHref}
                    className={`mb-6 block rounded-[10px] px-6 py-3 text-center text-sm font-bold transition-all duration-200 hover:scale-[1.02] ${
                      plan.highlight
                        ? "bg-gradient-gold text-white hover:brightness-90 shadow-[var(--shadow-brand)]"
                        : "border border-[#374151] text-[#E5E7EB] hover:bg-[#1F2937]"
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

        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-lg px-3 sm:px-4 md:px-8">
            <h2 className="mb-2 text-center text-xl sm:text-2xl font-bold text-light-heading">After your trial</h2>
            <p className="mb-8 text-center text-sm text-light-body">One payment. Full access forever.</p>
            <div className="relative rounded-[14px] border-2 border-[#e2a128] bg-card p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-base text-muted-foreground line-through">{lifetimePlan.compareAt}</span>
                <span className="rounded-full bg-[#e2a128]/15 px-2 py-0.5 text-xs font-semibold text-[#e2a128]">Save 96%</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{lifetimePlan.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-[#e2a128]">{lifetimePlan.price}</span>
                <span className="mb-1 text-xs text-muted-foreground">{lifetimePlan.period}</span>
              </div>
              <p className="mt-3 text-sm text-light-body">{lifetimePlan.desc}</p>
              <a
                href={lifetimePlan.ctaHref}
                className="mt-6 block rounded-[10px] bg-gradient-gold px-6 py-3 text-center text-sm font-bold text-white hover:brightness-90"
              >
                {lifetimePlan.cta}
              </a>
              <ul className="mt-6 space-y-2">
                {lifetimePlan.features.map((f) => (
                  <li key={f} className="text-sm text-light-body flex gap-2">
                    <span className="text-[#e2a128]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-8 text-center text-xl sm:text-2xl font-bold">Pricing FAQ</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-[12px] border border-[#1F2937] bg-card p-4 sm:p-6">
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
