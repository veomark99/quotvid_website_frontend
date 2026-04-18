"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Local MP4s in /public/videos — swap filenames or add your own 1080×1920 exports */
const slides = [
  {
    label: "Stoic & mindset quotes",
    src: "/videos/preview-short-a.mp4",
    poster:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=540&q=80&auto=format&fit=crop",
    alt: "Vertical quote-style video preview — stoic mindset niche",
  },
  {
    label: "Business & success",
    src: "/videos/preview-short-b.mp4",
    poster:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=540&q=80&auto=format&fit=crop",
    alt: "Vertical quote-style video preview — business niche",
  },
  {
    label: "Poetry & inspiration",
    src: "/videos/preview-short-a.mp4",
    poster:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=540&q=80&auto=format&fit=crop",
    alt: "Vertical quote-style video preview — poetry inspiration niche",
  },
  {
    label: "Daily motivation",
    src: "/videos/preview-short-b.mp4",
    poster:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=540&q=80&auto=format&fit=crop",
    alt: "Vertical quote-style video preview — daily motivation niche",
  },
];

export default function ProductPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const fn = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const syncVideos = useCallback(
    (active: number) => {
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i === active && !reducedMotion) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    },
    [reducedMotion]
  );

  useEffect(() => {
    syncVideos(index);
  }, [index, syncVideos]);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    const child = el.children[clamped] as HTMLElement | undefined;
    if (!child) return;
    const target = child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    setIndex(clamped);
  }, []);

  const updateFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const c = el.children[i] as HTMLElement;
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    setIndex(best);
    setCanPrev(best > 0);
    setCanNext(best < slides.length - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateFromScroll();
    el.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      el.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [updateFromScroll]);

  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            Real Videos. Real Creators.{" "}
            <span className="text-gradient-gold">Real Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Every video is 1080×1920 — the standard format for Pinterest, TikTok, Instagram Reels, and YouTube Shorts. Ready to post the moment it renders.
          </p>
        </div>

        <div
          className="relative mb-10 sm:mb-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Quote video previews"
        >
          <button
            type="button"
            onClick={() => scrollToIndex(index - 1)}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-primary/30 bg-background/90 p-2.5 text-foreground shadow-lg backdrop-blur-sm transition-opacity hover:bg-primary/10 disabled:pointer-events-none disabled:opacity-30 sm:left-1 md:left-2"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(index + 1)}
            disabled={!canNext}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-primary/30 bg-background/90 p-2.5 text-foreground shadow-lg backdrop-blur-sm transition-opacity hover:bg-primary/10 disabled:pointer-events-none disabled:opacity-30 sm:right-1 md:right-2"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-10 py-2 sm:px-14 sm:gap-5 md:px-16 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollToIndex(index - 1);
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollToIndex(index + 1);
              }
            }}
          >
            {slides.map((s, i) => (
              <div
                key={`${s.label}-${i}`}
                data-slide
                className="snap-center shrink-0 w-[min(100%,17.5rem)] sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-primary/20 shadow-lg aspect-[9/16] bg-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                    src={s.src}
                    poster={s.poster}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    aria-label={s.alt}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 px-3 text-center">
                    <span className="inline-block rounded-full bg-primary/85 px-3 py-1 text-[10px] font-bold text-primary-foreground backdrop-blur-sm sm:text-xs">
                      {s.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
            {slides.map((s, i) => (
              <button
                key={`dot-${s.label}-${i}`}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${s.label}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Wide lifestyle block — image matches “runs in the background” copy */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop"
              alt="Creator working remotely while content runs automatically in the background"
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
                Post Every Day Without Burning Out.
              </h3>
              <p className="mb-6 text-xs sm:text-sm text-white/80 leading-relaxed">
                QuotVid runs in the background while you live your life. Every morning, a fresh professional video is waiting in your dashboard — already generated, already rendered, already posted to your platforms automatically.
              </p>
              <a
                href="https://app.quotvid.com/auth/signup"
                className="inline-block rounded-xl bg-gradient-gold px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Start Free Trial — No Card →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
