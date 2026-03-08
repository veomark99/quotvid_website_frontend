const features = [
  {
    icon: "🌍",
    title: "20 Languages, Zero Compromise",
    desc: "Post in English, Urdu, Arabic, Spanish, Hindi, Persian, and 14 more. Full RTL support built in.",
  },
  {
    icon: "🎨",
    title: "9 Professional Video Templates",
    desc: "Pure, Structured, Cinematic, Poetry, Gradient and more. Every template looks professionally designed.",
  },
  {
    icon: "🤖",
    title: "AI Quote Writer That Never Repeats",
    desc: "Powered by advanced LLMs. Every quote is original, unique, never duplicated.",
  },
  {
    icon: "🎵",
    title: "Curated Background Music",
    desc: "Cinematic, calm, epic, melancholic — choose your mood or let QuotVid pick automatically.",
  },
  {
    icon: "⚡",
    title: "Set Once, Run Forever",
    desc: "Configure your persona once. QuotVid generates daily videos on autopilot. No buttons to press.",
  },
  {
    icon: "📐",
    title: "Platform-Perfect Format",
    desc: "1080×1920 vertical format. Sized for TikTok, Reels, and YouTube Shorts.",
  },
];

const Features = () => (
  <section id="features" className="bg-section-light py-14 sm:py-20 md:py-28">
    <div className="container mx-auto px-3 sm:px-4 md:px-8">
      <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
        Everything You Need to Dominate{" "}
        <span className="text-gradient-gold">Short-Form Content</span>
      </h2>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-primary/10 bg-foreground/[0.02] p-5 sm:p-8 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="text-2xl sm:text-3xl">{f.icon}</span>
            <h3 className="mt-3 sm:mt-4 mb-2 text-base sm:text-lg font-bold text-light-heading">{f.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-light-body">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
