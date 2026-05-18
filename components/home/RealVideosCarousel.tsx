"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { PinterestPinVideoChrome } from "@/components/marketing/ShortFormVideoChrome";
import {
  marketingVideoSlides,
  type MarketingVideoSlide,
} from "@/lib/marketing-video-slides";
import "@/styles/marketing-video-carousel.css";

const MOBILE_MQ = "(max-width: 768px)";

function syncInViewVideos(
  viewport: HTMLElement | null,
  slideNodes: HTMLElement[],
  inViewIndices: readonly number[],
) {
  if (!viewport) return;
  const inView = new Set(inViewIndices);
  viewport.querySelectorAll<HTMLVideoElement>("video.qv-pin-video").forEach((v) => {
    void v.pause();
  });
  slideNodes.forEach((slide, i) => {
    if (!inView.has(i)) return;
    slide.querySelectorAll<HTMLVideoElement>("video.qv-pin-video").forEach((v) => {
      void v.play().catch(() => {
        /* autoplay blocked */
      });
    });
  });
}

function VideoSlide({ slide }: { slide: MarketingVideoSlide }) {
  return (
    <article className="qv-pin">
      <div className="qv-pin-img qv-pin-img--video">
        <video
          className="qv-pin-video"
          src={slide.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <PinterestPinVideoChrome />
        <div className="qv-pin-img-content">
          <div className="qv-pin-auto">✦ Auto</div>
          <div className="qv-pin-label">{slide.dayLabel}</div>
        </div>
      </div>
      <footer className="qv-pin-footer">
        <p className="qv-pin-stat">{slide.statLabel}</p>
      </footer>
    </article>
  );
}

export default function RealVideosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    dragFree: false,
  });

  const [activeDot, setActiveDot] = useState(0);

  const onCarouselSettle = useCallback(() => {
    if (!emblaApi) return;
    const slides = emblaApi.slideNodes();
    const viewport = emblaApi.rootNode() as HTMLElement | null;
    setActiveDot(emblaApi.selectedScrollSnap());
    syncInViewVideos(viewport, slides, emblaApi.slidesInView());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onCarouselSettle();
    emblaApi.on("select", onCarouselSettle);
    emblaApi.on("reInit", onCarouselSettle);
    emblaApi.on("slidesInView", onCarouselSettle);
    return () => {
      emblaApi.off("select", onCarouselSettle);
      emblaApi.off("reInit", onCarouselSettle);
      emblaApi.off("slidesInView", onCarouselSettle);
    };
  }, [emblaApi, onCarouselSettle]);

  useEffect(() => {
    if (!emblaApi || typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia(MOBILE_MQ);
    const applyAlign = () => {
      emblaApi.reInit({ align: mq.matches ? "center" : "start" });
    };
    applyAlign();
    mq.addEventListener("change", applyAlign);
    return () => mq.removeEventListener("change", applyAlign);
  }, [emblaApi]);

  useEffect(() => {
    let cancelled = false;
    window.requestAnimationFrame(() => {
      if (cancelled) return;
      emblaApi?.reInit();
    });
    return () => {
      cancelled = true;
    };
  }, [emblaApi]);

  return (
    <div className="qv-video-carousel">
      <div
        ref={emblaRef}
        className="qv-carousel-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Real QuotVid video examples"
        aria-live="polite"
      >
        <div className="qv-carousel-container">
          {marketingVideoSlides.map((slide) => (
            <div key={slide.videoSrc} className="qv-carousel-slide">
              <VideoSlide slide={slide} />
            </div>
          ))}
        </div>
      </div>
      <div className="qv-carousel-dots" aria-hidden>
        {marketingVideoSlides.map((_, i) => (
          <span
            key={i}
            className={`qv-dot ${i === activeDot ? "qv-dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
