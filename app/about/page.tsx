import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About QuotVid — Built by a Solo Developer in 20 Days",
  description:
    "QuotVid was built by a mechanical engineer turned developer who got tired of spending hours creating daily social content. Learn the story, the mission, and why multilingual creators are at the center of everything we build.",
  alternates: { canonical: "https://www.quotvid.com/about" },
  openGraph: {
    title: "About QuotVid — Built by a Solo Developer in 20 Days",
    description:
      "A mechanical engineer built QuotVid in 20 days to solve one real problem: daily content creation that doesn't eat your life. Learn the story behind the tool.",
    url: "https://www.quotvid.com/about",
    images: [{ url: "https://www.quotvid.com/og-image.png", width: 1200, height: 630, alt: "About QuotVid" }],
  },
};

const values = [
  {
    title: "Automation over repetition",
    desc: "If a creator has to do the same thing twice, we automate it. Every manual step we eliminate is time given back to the person actually building the audience.",
  },
  {
    title: "Multilingual as default",
    desc: "Most tools treat non-English content as an edge case. We built Urdu, Arabic, and Persian support into the core — not as an add-on, not as beta. It works the same day you sign up.",
  },
  {
    title: "Professional output without professional tools",
    desc: "You shouldn't need Premiere Pro or After Effects to create a video that looks like it was made by a production team. QuotVid renders cinematic, broadcast-quality output from a single click.",
  },
  {
    title: "Honest pricing",
    desc: "Free is actually free — no trial countdown, no card required. Paid plans reflect real value: daily automation, no watermark, social posting. No dark patterns. No surprise charges.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.quotvid.com" },
          { name: "About", url: "https://www.quotvid.com/about" },
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary/70">
              Our Story
            </p>
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Daily Content Creation{" "}
              <span className="text-gradient-gold">Shouldn&apos;t Cost You Your Day</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              QuotVid was built by a solo developer who spent too many evenings manually editing quote videos
              while the content he actually wanted to create sat untouched. So he automated the whole thing.
            </p>
          </div>
        </section>

        {/* Founder story */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
              <div className="space-y-5 text-sm sm:text-base text-light-body leading-relaxed">
                <h2 className="text-xl sm:text-2xl font-bold text-light-heading">The Founder Story</h2>
                <p>
                  I am a mechanical engineer. I spent years designing physical things — stress calculations,
                  tolerances, material properties. Then I discovered content creation and fell into the same trap
                  everyone does: posting inconsistently, burning out, starting over.
                </p>
                <p>
                  I was running a motivational quotes page and spending 45 minutes every evening on what should
                  have been a 30-second task. Pick a quote. Find a background. Choose a font. Add music. Export.
                  Upload. Repeat. Every single day.
                </p>
                <p>
                  The engineering instinct kicked in: this is a system problem, not a willpower problem. So I
                  built a system. In 20 days of focused development, QuotVid went from a Python script on my
                  laptop to a full-stack web application that handles everything from AI quote generation to
                  final video render.
                </p>
                <p>
                  I built what I personally needed — and then made it available to everyone else who is stuck
                  in the same manual loop. If you run a quote page, a poetry channel, a motivation account, or
                  any page that posts short-form video content daily, QuotVid was built for you.
                </p>
              </div>

              {/* Visual — development / creator imagery */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80&auto=format&fit=crop"
                    alt="Developer writing code — building a content automation tool"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-primary/20 bg-foreground/[0.03] p-4 sm:p-5">
                    <p className="text-2xl sm:text-3xl font-extrabold text-gradient-gold">20</p>
                    <p className="mt-1 text-xs sm:text-sm text-light-body">Days to build v1 from scratch</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-foreground/[0.03] p-4 sm:p-5">
                    <p className="text-2xl sm:text-3xl font-extrabold text-gradient-gold">20</p>
                    <p className="mt-1 text-xs sm:text-sm text-light-body">Languages supported at launch</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-foreground/[0.03] p-4 sm:p-5">
                    <p className="text-2xl sm:text-3xl font-extrabold text-gradient-gold">9</p>
                    <p className="mt-1 text-xs sm:text-sm text-light-body">Content niches out of the box</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-foreground/[0.03] p-4 sm:p-5">
                    <p className="text-2xl sm:text-3xl font-extrabold text-gradient-gold">$0</p>
                    <p className="mt-1 text-xs sm:text-sm text-light-body">To start — no card required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-center">Our Mission</h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              <p>
                <strong className="text-foreground">
                  Give every creator — in every language — the ability to post daily professional short-form
                  content without technical knowledge, expensive software, or hours of editing.
                </strong>
              </p>
              <p>
                Content creation should not require a production team. It should not require After Effects. It
                should not require two hours a day. For creators who already know what they want to say, the
                only thing standing between them and consistent posting is the production bottleneck. We remove
                that bottleneck completely.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-10 text-xl sm:text-2xl font-bold text-light-heading text-center">What We Stand For</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-6 sm:p-7"
                >
                  <h3 className="mb-3 text-sm sm:text-base font-bold text-light-heading">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-light-body leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why multilingual */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Why Multilingual First?</h2>
                <p>
                  Most content tools are built for English creators and then retrofitted for other languages
                  as an afterthought. The result: Arabic text renders left-to-right. Urdu ligatures break.
                  Nastaliq fonts are not included. Persian creators use workarounds that corrupt on mobile.
                </p>
                <p>
                  Urdu poetry channels on Instagram and TikTok routinely hit millions of followers. Pakistani,
                  Indian, and Middle Eastern creators represent some of the fastest-growing audiences on short-form
                  platforms — and they are consistently underserved by the tools available to them.
                </p>
                <p>
                  QuotVid was built with full RTL support, proper Nastaliq and Naskh font rendering, and
                  language-aware layout from day one. Arabic flows right-to-left automatically. Urdu looks
                  like Urdu — not broken Latin characters trying to impersonate it.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&q=80&auto=format&fit=crop"
                  alt="Multilingual content creation — Arabic and Urdu text on screen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-section-light py-14 sm:py-20 border-t border-primary/5">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8 text-center">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold text-light-heading">Built to Last</h2>
            <p className="mb-10 text-sm sm:text-base text-light-body leading-relaxed max-w-xl mx-auto">
              QuotVid is actively developed. Features ship regularly. Every plan — including the free one —
              gets the same core generation pipeline. No feature gates on quality. No artificial limitations
              designed to force upgrades.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { stat: "1080×1920", label: "Export resolution — broadcast quality" },
                { stat: "No card", label: "Free plan requires zero payment info" },
                { stat: "Daily", label: "New features shipped continuously" },
              ].map((t) => (
                <div key={t.stat} className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-5 sm:p-6">
                  <p className="text-xl sm:text-2xl font-extrabold text-gradient-gold mb-1">{t.stat}</p>
                  <p className="text-xs sm:text-sm text-light-body">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-2xl px-3 sm:px-4 text-center md:px-8">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold">Try It for Free</h2>
            <p className="mb-8 text-sm sm:text-base text-muted-foreground">
              Generate your first 5 videos for free. No credit card. No setup complexity. See the output
              before you decide anything.
            </p>
            <a
              href="https://app.quotvid.com/auth/signup"
              className="inline-block rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Start Free — No Credit Card
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
