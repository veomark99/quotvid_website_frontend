import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-section-dark relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(39_76%_52%/0.08),transparent_70%)]" />
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-4 sm:mb-6 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-primary/20 bg-secondary px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-muted-foreground">
              ⚡ AI-Powered · 20+ Categories · Custom Studio · Live Preview
            </div>
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Your AI Quote Video{" "}
              <span className="text-gradient-gold">Studio.</span>
              <br />
              Built for Creators.
            </h1>
            <p className="mb-6 sm:mb-8 text-sm sm:text-lg leading-relaxed text-muted-foreground">
              QuotVid generates professional short-form quote videos for TikTok, Instagram Reels, and YouTube Shorts — automatically, every day. Set your brand once. Watch the content flow.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="https://app.quotvid.com/auth/signup"
                className="animate-pulse-soft rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground text-center transition-transform hover:scale-105"
              >
                Start Free — No Credit Card →
              </a>
              <a
                href="#how-it-works"
                className="rounded-xl border border-primary/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-foreground text-center transition-colors hover:bg-primary/10"
              >
                See How It Works ↓
              </a>
            </div>
            <p className="mt-4 sm:mt-6 text-xs text-muted-foreground">
              No credit card required · 2-minute setup · Your first videos are free
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero-phones.png"
              alt="QuotVid AI quote video generator — phone mockups showing branded short-form videos"
              width={480}
              height={600}
              className="animate-float w-full max-w-xs sm:max-w-md drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
