import Image from "next/image";

const features = [
  {
    icon: "🤖",
    title: "AI Persona — Set It and Forget It",
    desc: "Choose your niche, language, and style. QuotVid generates fresh quote videos every day without you lifting a finger. Supports 20+ content categories.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imgAlt: "AI generating automated daily quote videos",
  },
  {
    icon: "🎬",
    title: "Custom Studio — Your Brand, Your Control",
    desc: "Upload your logo, pick a YouTube background, set your watermark position — and see it all live on a phone preview before generating a single video.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Custom video studio interface with live phone preview",
  },
  {
    icon: "▶️",
    title: "YouTube Backgrounds in One Click",
    desc: "Paste any YouTube URL. Watch it right in the studio. Pick your perfect 30-second clip. That's your background — extracted and saved automatically.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format&fit=crop",
    imgAlt: "YouTube video used as quote video background",
  },
  {
    icon: "🏷️",
    title: "Watermark & Branding System",
    desc: "Upload your logo, choose its corner position, adjust size and opacity, and add your channel name badge — all previewed live before you generate.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Logo watermark overlay on branded quote video",
  },
  {
    icon: "🎵",
    title: "Built-In Music Library + Upload Your Own",
    desc: "Choose from curated preset tracks or upload your own music on paid plans. Preview audio before selecting — no surprises in the final video.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Background music library for quote videos",
  },
  {
    icon: "📐",
    title: "Download and Post Anywhere",
    desc: "Every video is 1080×1920 — the standard vertical format, ready for TikTok, Instagram Reels, and YouTube Shorts. Download individually or in bulk.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Vertical 1080x1920 video format for TikTok Instagram YouTube Shorts",
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
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
