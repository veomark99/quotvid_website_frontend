import Image from "next/image";

const examples = [
  {
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Content creator filming vertical video on phone",
    label: "Discipline & Focus",
  },
  {
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Hands showing social media video on phone",
    label: "Stoic Philosophy",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Young creator sharing content from phone",
    label: "Business & Success",
  },
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Creator recording motivational content",
    label: "Growth Mindset",
  },
];

export default function ProductPreview() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            Real Videos. Real Creators.{" "}
            <span className="text-gradient-gold">Real Growth.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Every video is 1080×1920 — ready to post on TikTok, Instagram Reels, or YouTube Shorts the moment it renders.
          </p>
        </div>

        {/* Creator photo strip */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4 mb-10 sm:mb-16">
          {examples.map((ex) => (
            <div key={ex.label} className="group relative overflow-hidden rounded-2xl aspect-[9/16] shadow-lg border border-primary/20">
              <Image
                src={ex.img}
                alt={ex.imgAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="inline-block rounded-full bg-primary/80 px-3 py-1 text-[10px] font-bold text-primary-foreground backdrop-blur-sm">
                  {ex.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Wide creator lifestyle image */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop"
              alt="Content creator team working on social media strategy"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-16">
            <div className="max-w-lg">
              <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
                Built for Daily Creators
              </p>
              <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Post Every Day Without Burning Out
              </h3>
              <p className="mb-6 text-xs sm:text-sm text-white/80 leading-relaxed">
                QuotVid runs in the background while you live your life. Every morning, a fresh professional video is waiting in your dashboard — already designed, already rendered, already ready to post.
              </p>
              <a
                href="https://app.quotvid.com/auth/signup"
                className="inline-block rounded-xl bg-gradient-gold px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Start Free — No Card →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
