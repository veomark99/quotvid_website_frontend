const FinalCTA = () => (
  <section className="bg-section-dark relative overflow-hidden py-16 sm:py-24 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(39_76%_52%/0.12),transparent_60%)]" />
    <div className="container relative mx-auto px-3 sm:px-4 text-center md:px-8">
      <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        Start Creating Today.{" "}
        <span className="text-gradient-gold">Your First Videos Are Free.</span>
      </h2>
      <p className="mx-auto mb-8 sm:mb-10 max-w-xl text-sm sm:text-base text-muted-foreground">
        No credit card required. Set up in 2 minutes. See QuotVid generate videos for your exact niche before paying anything.
      </p>
      <a
        href="https://app.quotvid.com/auth/signup"
        className="animate-pulse-soft inline-block rounded-xl bg-gradient-gold px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-primary-foreground transition-transform hover:scale-105"
      >
        Get Started Free →
      </a>
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
        ✓ 7-day free trial · ✓ No credit card · ✓ Cancel anytime
      </p>
    </div>
  </section>
);

export default FinalCTA;
