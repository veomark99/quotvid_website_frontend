export default function FinalCTA() {
  return (
    <section className="bg-section-dark relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,161,40,0.12),transparent_60%)]" />
      <div className="container relative mx-auto px-3 sm:px-4 text-center md:px-8">
        <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Your Content Should Work{" "}
          <span className="text-gradient-gold">While You Sleep.</span>
        </h2>
        <p className="mx-auto mb-8 sm:mb-10 max-w-xl text-sm sm:text-base text-muted-foreground">
          Stop uploading manually. Stop missing days. Stop watching consistent creators grow while you fall behind. QuotVid generates, renders, and posts your videos automatically — while you focus on everything else.
        </p>
        <a
          href="https://app.quotvid.com/auth/signup"
          className="animate-pulse-soft inline-block rounded-[10px] bg-gradient-gold px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)]"
        >
          Start Your Free Trial — No Credit Card Required →
        </a>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
          ✓ 7 days free · ✓ 5 platforms · ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
