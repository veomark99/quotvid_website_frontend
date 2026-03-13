import Image from "next/image";

const features = [
  {
    icon: "🌍",
    title: "20 Languages, Zero Compromise",
    desc: "Post in English, Urdu, Arabic, Spanish, Hindi, Persian, and 14 more. Full RTL support built in.",
    img: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=600&q=80&auto=format&fit=crop",
    imgAlt: "World map showing global language support",
  },
  {
    icon: "🎨",
    title: "9 Professional Video Templates",
    desc: "Pure, Structured, Cinematic, Poetry, Gradient and more. Every template looks professionally designed.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Professional video design templates",
  },
  {
    icon: "🤖",
    title: "AI Quote Writer That Never Repeats",
    desc: "Powered by advanced LLMs. Every quote is original, unique, never duplicated.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imgAlt: "AI generating unique quote content",
  },
  {
    icon: "🎵",
    title: "Curated Background Music",
    desc: "Cinematic, calm, epic, melancholic — choose your mood or let QuotVid pick automatically.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Music waveform representing curated background music",
  },
  {
    icon: "⚡",
    title: "Set Once, Run Forever",
    desc: "Configure your persona once. QuotVid generates daily videos on autopilot. No buttons to press.",
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Automated scheduling on phone",
  },
  {
    icon: "📐",
    title: "Platform-Perfect Format",
    desc: "1080×1920 vertical format. Sized for TikTok, Reels, and YouTube Shorts.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Vertical video format on mobile phone for social media",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Everything You Need to Dominate{" "}
          <span className="text-gradient-gold">Short-Form Content</span>
        </h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="overflow-hidden rounded-xl border border-primary/10 bg-foreground/[0.02] transition-all hover:border-primary/30 hover:shadow-lg">
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.imgAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-3 text-2xl drop-shadow-lg">{f.icon}</span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mb-2 text-base sm:text-lg font-bold text-light-heading">{f.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-light-body">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
