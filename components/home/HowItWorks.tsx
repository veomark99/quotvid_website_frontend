import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Set Your Persona",
    desc: "Choose your content category, language, and video style. Takes 2 minutes. Set it once and never touch it again.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Person setting up their content persona on a mobile phone",
  },
  {
    num: "02",
    title: "AI Does Everything",
    desc: "Our AI writes unique quotes, designs your 1080×1920 video, adds background music, and renders a professional result — automatically, every day.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&auto=format&fit=crop",
    imgAlt: "AI automation generating video content",
  },
  {
    num: "03",
    title: "Download & Post",
    desc: "Videos are ready in your dashboard every morning. Download and post to TikTok, Instagram Reels, or YouTube Shorts instantly.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Content creator sharing video on social media from phone",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          From Idea to <span className="text-gradient-gold">Viral Video</span> in 3 Simple Steps
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="overflow-hidden rounded-xl border border-primary/10 bg-foreground/[0.02] transition-shadow hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.imgAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 left-4 text-3xl font-black text-white drop-shadow-lg">{s.num}</span>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-light-heading">{s.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-light-body">{s.desc}</p>
              </div>
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
}
