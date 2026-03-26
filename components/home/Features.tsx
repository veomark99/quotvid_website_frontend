import Image from "next/image";

const features = [
  {
    icon: "🤖",
    title: "AI Persona — Daily Videos on Autopilot",
    desc: "Pick from 20 categories and 10+ video styles. Set your accent colors, font size, background, and music. QuotVid generates fresh branded videos every day — no editing required.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imgAlt: "AI generating automated daily quote videos",
  },
  {
    icon: "🎬",
    title: "Custom Studio + Live Phone Preview",
    desc: "Full-width two-column studio with a real-time phone mockup on the right. Every change — background, watermark, colors, font — updates the preview instantly. See it before you generate it.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Custom video studio interface with live phone preview",
  },
  {
    icon: "▶️",
    title: "YouTube Backgrounds + Background Library",
    desc: "Paste any YouTube URL, watch it in-studio, and pick your 30-second clip. Or choose from your saved background library — clips you've already uploaded reuse instantly.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop",
    imgAlt: "YouTube video background picker in quote video studio",
  },
  {
    icon: "🌍",
    title: "25 Languages — Including RTL",
    desc: "Generate in English, Urdu, Arabic, Hindi, Spanish, Persian, French, Russian, Chinese, Turkish, and 15 more. Arabic, Urdu, and Persian include full right-to-left rendering with proper fonts.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Multilingual quote video generation in 25 languages",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Every Tool You Need to{" "}
          <span className="text-gradient-gold">Automate Your Content</span>
        </h2>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="overflow-hidden rounded-xl border border-primary/20 bg-foreground/[0.02] transition-all hover:border-primary/30 hover:shadow-lg">
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
