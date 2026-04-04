import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Pick Your Mode",
    desc: "Choose AI Persona for hands-off daily generation across 20 categories, or open Custom Studio for full brand control with a live phone preview. Takes 2 minutes either way.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Person setting up AI quote video persona on a mobile phone",
  },
  {
    num: "02",
    title: "Set Your Brand",
    desc: "Upload your logo, paste a YouTube URL for your background, set your watermark, choose background music, pick your accent colors and font size. All saved to your profile.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Customizing brand style in AI video studio with live preview",
  },
  {
    num: "03",
    title: "Preview Live on Your Phone",
    desc: "Every setting instantly updates a live phone mockup — see exactly how your video will look, with your background, colors, watermark, and typography, before you generate a single frame.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Live phone preview of quote video in Custom Studio",
  },
  {
    num: "04",
    title: "Generate and Download",
    desc: "Click generate. Your video is ready in minutes in 1080×1920 format. Download it anytime, or let QuotVid post it automatically — to TikTok, Instagram Reels, YouTube Shorts, Pinterest, and Facebook Pages — on your schedule, at your time, in your timezone.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80&auto=format&fit=crop",
    imgAlt: "Downloading AI-generated quote video and posting to social media",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          From Idea to <span className="text-gradient-gold">Viral Video</span> in 4 Simple Steps
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
