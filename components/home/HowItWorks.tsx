import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Pick Your Niche",
    desc: "Choose from 20 content categories: stoic, business, psychology, finance, hustle, relationships, poetry, and more. Pick your language — 12 supported including Arabic and Urdu. Takes 60 seconds.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Choosing content niche for AI quote video generation",
  },
  {
    num: "02",
    title: "Set Your Style",
    desc: "Choose a video template, font, background, accent colors, and watermark. Upload your logo. Your brand. Your look. Saved permanently to your profile.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Setting brand style in AI video studio",
  },
  {
    num: "03",
    title: "Connect Your Platforms",
    desc: "Link Pinterest, YouTube, Instagram, TikTok, and Facebook with one click each. Secure OAuth login — we never see your password. Disconnect any platform instantly from your dashboard.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Connecting social media platforms securely",
  },
  {
    num: "04",
    title: "Set Your Schedule and Walk Away",
    desc: "QuotVid generates your videos with AI and posts them automatically at your chosen time, in your timezone, every day. YouTube at 9am. TikTok at 6pm. Pinterest at 10am. You don't touch anything.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Setting automated posting schedule by platform",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          From Zero to Auto-Posting{" "}
          <span className="text-gradient-gold">in 4 Minutes.</span>
        </h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="overflow-hidden rounded-xl border border-primary/20 bg-foreground/[0.02] transition-shadow hover:shadow-lg">
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
