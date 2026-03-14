const comingFeatures = [
  {
    title: "Auto-posting on connected social media — the secure way",
    desc: "Post your quote videos to TikTok, Instagram, and YouTube automatically. We use a secure, reliable connection to your accounts so your content goes live without compromising safety. For paid users.",
  },
];

export default function ComingSoon() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28 border-t border-primary/20">
      <div className="container mx-auto px-3 sm:px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Coming soon
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            We&apos;re continuously improving
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            New features for paid users are on the way. Here&apos;s what we&apos;re building next.
          </p>
        </div>
        <ul className="space-y-4">
          {comingFeatures.map((f) => (
            <li
              key={f.title}
              className="rounded-xl border border-primary/20 bg-card p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-lg" aria-hidden>
                📤
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
