"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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

/** Centers a child inside the horizontal scroll container (handles flex + gap + padding). */
function scrollChildToCenter(
  container: HTMLDivElement,
  child: HTMLElement,
  behavior: ScrollBehavior
) {
  const c = container.getBoundingClientRect();
  const s = child.getBoundingClientRect();
  const childCenter = s.left + s.width / 2;
  const viewportCenter = c.left + c.width / 2;
  const delta = childCenter - viewportCenter;
  const maxScroll = container.scrollWidth - container.clientWidth;
  const next = Math.max(0, Math.min(container.scrollLeft + delta, maxScroll));
  container.scrollTo({ left: next, behavior });
}

function nearestIndexToCenter(container: HTMLDivElement) {
  const c = container.getBoundingClientRect();
  const viewportCenter = c.left + c.width / 2;
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < container.children.length; i++) {
    const child = container.children[i] as HTMLElement;
    const r = child.getBoundingClientRect();
    const mid = r.left + r.width / 2;
    const d = Math.abs(mid - viewportCenter);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

export default function ProductPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const programmaticRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const updateFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const best = nearestIndexToCenter(el);
    setIndex(best);
    setCanPrev(best > 0);
    setCanNext(best < slides.length - 1);
  }, []);

  const scrollToIndex = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(i, slides.length - 1));
      const child = el.children[clamped] as HTMLElement | undefined;
      if (!child) return;

      programmaticRef.current = true;
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

      // Snap fights programmatic scrollTo(); turn off until the scroll completes.
      el.style.setProperty("scroll-snap-type", "none");

      const smooth: ScrollBehavior = reducedMotion ? "auto" : "smooth";
      scrollChildToCenter(el, child, smooth);

      setIndex(clamped);
      setCanPrev(clamped > 0);
      setCanNext(clamped < slides.length - 1);

      const durationMs = reducedMotion ? 80 : 520;
      let finished = false;
      const cleanupAndFinish = () => {
        if (finished) return;
        finished = true;
        if (scrollEndTimerRef.current) {
          clearTimeout(scrollEndTimerRef.current);
          scrollEndTimerRef.current = null;
        }
        el.removeEventListener("scrollend", onScrollEnd);
        el.style.removeProperty("scroll-snap-type");
        programmaticRef.current = false;
        updateFromScroll();
      };

      function onScrollEnd() {
        cleanupAndFinish();
      }

      el.addEventListener("scrollend", onScrollEnd);
      scrollEndTimerRef.current = setTimeout(cleanupAndFinish, durationMs);
    },
    [reducedMotion, updateFromScroll]
  );

  /** Center first slide on mount (padding makes scrollLeft=0 misaligned). */
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || el.children.length === 0) return;
    const child = el.children[0] as HTMLElement;
    el.style.setProperty("scroll-snap-type", "none");
    scrollChildToCenter(el, child, "auto");
    el.style.removeProperty("scroll-snap-type");
    updateFromScroll();
  }, [updateFromScroll]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      if (programmaticRef.current) return;
      updateFromScroll();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFromScroll);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
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
            className="flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain px-10 py-2 sm:px-14 sm:gap-5 md:px-16 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x]"
            style={{ WebkitOverflowScrolling: "touch" }}
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
                className="shrink-0 w-[min(100%,17.5rem)] snap-center sm:w-[min(100%,19rem)] md:w-[min(100%,20rem)]"
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
