import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About QuotVid — Our Mission & Story",
  description:
    "QuotVid was built to make daily content creation effortless for creators worldwide. Learn about our mission, what we built, and why multilingual creators are our priority.",
  alternates: { canonical: "https://www.quotvid.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              We Built QuotVid Because Daily Content{" "}
              <span className="text-gradient-gold">Shouldn&apos;t Be a Full-Time Job</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              We are a small team obsessed with one problem: how do content creators post high-quality videos every single day without burning out? QuotVid is our answer.
            </p>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-light-heading">Our Mission</h2>
            <div className="space-y-4 text-sm sm:text-base text-light-body leading-relaxed">
              <p>Content creation is broken. Creators spend more time editing than creating. They burn out posting the same type of video every day. Multilingual creators face even harder challenges — finding the right fonts, RTL text support, language-specific styles.</p>
              <p>We built QuotVid to remove all of that friction. Our mission is simple: <strong className="text-light-heading">give every creator in every language the ability to post daily, professional short-form content without technical knowledge, expensive tools, or hours of editing.</strong></p>
              <p>We believe consistent content is the single biggest lever for growing on social media. QuotVid makes consistency effortless.</p>
            </div>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20 border-t border-primary/5">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-light-heading">What We Actually Built</h2>
            <div className="space-y-4 text-sm sm:text-base text-light-body leading-relaxed">
              <p>QuotVid is not a template editor. It is a full automation engine.</p>
              <p>You set your persona once — your niche, your language, your style. Every morning, our AI writes original quotes, designs your video, adds music, and renders a ready-to-post 1080×1920 vertical video. You open your dashboard, hit download, and post.</p>
              <p>We support 20 languages with proper font rendering. Arabic, Urdu, and Persian content flows right-to-left automatically. Nine video templates. Nine content niches. Curated music library. All running on autopilot.</p>
            </div>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20 border-t border-primary/5">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-xl sm:text-2xl font-bold text-light-heading">Why This Matters for Multilingual Creators</h2>
            <div className="space-y-4 text-sm sm:text-base text-light-body leading-relaxed">
              <p>Most content tools are built for English. Urdu poetry creators have to manually find Nastaliq fonts. Arabic page owners struggle with RTL rendering. Persian creators use workarounds that break on mobile.</p>
              <p>QuotVid was built with multilingual creators as the primary use case — not an afterthought. Every language is a first-class citizen. The right font is selected automatically. Text flows in the right direction. The output looks native.</p>
            </div>
          </div>
        </section>

        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-2xl px-3 sm:px-4 text-center md:px-8">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold">See QuotVid in Action</h2>
            <p className="mb-8 text-sm sm:text-base text-muted-foreground">Create your free account and generate your first videos in under 2 minutes. No credit card. No setup complexity.</p>
            <a
              href="https://app.quotvid.com/auth/signup"
              className="inline-block rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Start Your Free Trial →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
