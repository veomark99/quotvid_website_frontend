export default function ComingSoon() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28 border-t border-primary/20">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            Now live — auto-posting
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Your videos now go live on social media automatically. Available on all paid plans.
          </p>
        </div>
        <ul className="space-y-4">
          <li className="rounded-xl border border-primary/20 bg-card p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg" aria-hidden>
              📤
            </span>
            <div>
              <h3 className="font-semibold text-foreground">
                Auto-Post to YouTube, TikTok, Instagram, Pinterest &amp; Facebook
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Post your quote videos automatically. We use a secure OAuth connection to your accounts — your credentials are never stored. Set your schedule, pick your timezone, and wake up to published content. Available on all paid plans.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
