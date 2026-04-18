import Image from "next/image";

const features = [
  {
    icon: "🤖",
    title: "AI Quote Generation — Daily, On Autopilot",
    desc: "20 content categories. Quotes generated fresh every day — never repeated, never generic. Banned word filters and cliché detection built in. You never touch the content.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imgAlt: "AI generating automated daily quote videos",
  },
  {
    icon: "📲",
    title: "Auto-Post to 5 Platforms",
    desc: "Pinterest, YouTube Shorts, Instagram Reels, TikTok, and Facebook Pages. Set a different posting time per platform. Your timezone. Your rules. Posts go live while you sleep.",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7f119?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Phone showing multiple social apps for auto-posting",
  },
  {
    icon: "🎨",
    title: "Custom Studio + Live Phone Preview",
    desc: "Write your own quote. Upload your background. Add your logo. Every change updates a live phone mockup instantly. See exactly what your video looks like before generating a single frame.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Design workspace and creative tools for branded video",
  },
  {
    icon: "🌍",
    title: "12 Languages + Full RTL Support",
    desc: "English, Arabic, Urdu, Hindi, Spanish, French, Persian, Russian, Chinese, Japanese, and more. Arabic, Urdu, and Persian render right-to-left automatically with correct fonts.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Diverse group representing global languages and audiences",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Everything You Need.{" "}
          <span className="text-gradient-gold">Nothing You Don&apos;t.</span>
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
