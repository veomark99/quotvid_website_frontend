"use client";

import Image from "next/image";
import RealVideosCarousel from "@/components/home/RealVideosCarousel";

export default function ProductPreview() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
            Real Videos. Real Creators.{" "}
            <span className="text-gradient-gold">Real Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Every video is 1080×1920 — the standard format for Pinterest and YouTube Shorts. Ready to post the moment it renders.
          </p>
        </div>

        <div className="relative mb-10 sm:mb-16">
          <RealVideosCarousel />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#1F2937] shadow-xl">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="/hero-phones.png"
              alt="Creator working remotely while content runs automatically in the background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-16">
            <div className="max-w-lg">
              <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#e2a128]">
                Built for Daily Creators
              </p>
              <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Post Every Day Without Burning Out.
              </h3>
              <p className="mb-6 text-xs sm:text-sm text-white/80 leading-relaxed">
                QuotVid runs in the background while you live your life. Every morning, a fresh professional video is waiting in your dashboard — already generated, already rendered, already posted to your platforms automatically.
              </p>
              <a
                href="/pricing"
                className="inline-block rounded-[10px] bg-gradient-gold px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)]"
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
