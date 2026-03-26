import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { SEO_LANDING_PAGES, solutionPath } from "@/lib/seo-landing-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Solutions — Quote to Video, Text to Video & Motivation | QuotVid",
  description:
    "Browse QuotVid solution guides: quote to video, text to video quotes, and motivational quote video maker. AI-powered 1080×1920 shorts for TikTok, Reels, and YouTube Shorts.",
  keywords: [
    "quote to video",
    "text to video quotes",
    "motivational quote video maker",
    "AI quote video",
  ],
  path: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Solutions", url: `${SITE_URL}/solutions` },
        ]}
      />
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Solutions for <span className="text-gradient-gold">quote video</span> workflows
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Keyword-focused guides to how QuotVid fits search intents like quote-to-video automation, text-to-video quotes, and motivational channels—each page is written for humans first and structured for search clarity.
            </p>
          </div>
        </section>
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8 space-y-6">
            {SEO_LANDING_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={solutionPath(p.slug)}
                className="block rounded-xl border border-primary/20 bg-foreground/[0.02] p-6 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <h2 className="mb-2 text-lg font-bold text-light-heading">{p.h1}</h2>
                <p className="text-sm text-light-body line-clamp-2">{p.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary">Read guide →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
