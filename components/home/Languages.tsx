const row1 = ["🇬🇧 English", "🇵🇰 Urdu", "🇸🇦 Arabic", "🇪🇸 Spanish", "🇮🇳 Hindi", "🇮🇷 Persian"];
const row2 = ["🇧🇷 Portuguese", "🇫🇷 French", "🇩🇪 German", "🇷🇺 Russian", "🇨🇳 Chinese", "🇯🇵 Japanese"];

export default function Languages() {
  return (
    <section className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 text-center md:px-8">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Your Audience Speaks Their Language.{" "}
          <span className="text-gradient-gold">So Does QuotVid.</span>
        </h2>
        <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-light-body">
          12 languages including full RTL support for Arabic, Urdu, and Persian. Fonts automatically selected per language. No manual formatting needed.
        </p>
        {[row1, row2].map((row, i) => (
          <div key={i} className="mb-3 sm:mb-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            {row.map((lang) => (
              <span key={lang} className="rounded-lg border border-[#1F2937] bg-[rgba(255,255,255,0.03)] px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-[#E5E7EB]">
                {lang}
              </span>
            ))}
          </div>
        ))}
        <div className="mx-auto mt-6 sm:mt-8 max-w-md rounded-[12px] border border-[rgba(226,161,40,0.25)] bg-[rgba(226,161,40,0.06)] px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-[#9CA3AF]">
          ✦ Arabic, Urdu & Persian text flows naturally right-to-left — no manual formatting required. Verified and tested.
        </div>
      </div>
    </section>
  );
}
