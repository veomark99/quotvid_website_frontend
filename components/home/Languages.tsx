const row1 = ["🇬🇧 English", "🇵🇰 Urdu", "🇸🇦 Arabic", "🇪🇸 Spanish", "🇮🇳 Hindi", "🇮🇷 Persian", "🇧🇷 Portuguese", "🇫🇷 French"];
const row2 = ["🇩🇪 German", "🇷🇺 Russian", "🇨🇳 Chinese", "🇯🇵 Japanese", "🇰🇷 Korean", "🇹🇷 Turkish", "🇮🇩 Indonesian", "🇻🇳 Vietnamese"];

export default function Languages() {
  return (
    <section className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 text-center md:px-8">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Your Audience Speaks Their Language.{" "}
          <span className="text-gradient-gold">So Does QuotVid.</span>
        </h2>
        <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-light-body">
          20 languages. Full RTL support for Arabic, Urdu, and Persian. Fonts automatically selected per language.
        </p>
        {[row1, row2].map((row, i) => (
          <div key={i} className="mb-3 sm:mb-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {row.map((lang) => (
              <span key={lang} className="rounded-lg border border-primary/10 bg-foreground/[0.03] px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-light-heading">
                {lang}
              </span>
            ))}
          </div>
        ))}
        <div className="mx-auto mt-6 sm:mt-8 max-w-md rounded-xl border border-primary/20 bg-primary/5 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-light-body">
          ✦ Arabic, Urdu & Persian text flows naturally right-to-left — no manual formatting required.
        </div>
      </div>
    </section>
  );
}
