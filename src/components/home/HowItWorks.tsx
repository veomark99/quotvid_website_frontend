const steps = [
  {
    num: "01",
    title: "Set Your Persona",
    desc: "Choose your content category, language, and video style. Takes 2 minutes. Set it once and never touch it again.",
  },
  {
    num: "02",
    title: "AI Does Everything",
    desc: "Our AI writes unique quotes, designs your 1080×1920 video, adds background music, and renders a professional result — automatically, every day.",
  },
  {
    num: "03",
    title: "Download & Post",
    desc: "Videos are ready in your dashboard every morning. Download and post to TikTok, Instagram Reels, or YouTube Shorts instantly.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="bg-section-light py-14 sm:py-20 md:py-28">
    <div className="container mx-auto px-3 sm:px-4 md:px-8">
      <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
        From Idea to <span className="text-gradient-gold">Viral Video</span> in 3 Simple Steps
      </h2>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.num} className="rounded-xl border border-primary/10 bg-foreground/[0.02] p-5 sm:p-8 transition-shadow hover:shadow-lg">
            <span className="text-2xl sm:text-3xl font-black text-gradient-gold">{s.num}</span>
            <h3 className="mt-3 sm:mt-4 mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-light-heading">{s.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-light-body">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 text-center">
        <a
          href="https://app.quotvid.com/auth/signup"
          className="inline-block rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          Generate My First Video →
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
