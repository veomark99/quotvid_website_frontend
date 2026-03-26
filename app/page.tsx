import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import { WebsiteJsonLd, HomeFaqJsonLd } from "@/components/JsonLd";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

const StatsBar = dynamic(() => import("@/components/home/StatsBar"), {
  loading: () => <div className="min-h-[80px]" aria-hidden />,
});
const ProblemSolution = dynamic(() => import("@/components/home/ProblemSolution"), {
  loading: () => <div className="min-h-[200px]" aria-hidden />,
});
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"), {
  loading: () => <div className="min-h-[240px]" aria-hidden />,
});
const Features = dynamic(() => import("@/components/home/Features"), {
  loading: () => <div className="min-h-[200px]" aria-hidden />,
});
const Niches = dynamic(() => import("@/components/home/Niches"), {
  loading: () => <div className="min-h-[180px]" aria-hidden />,
});
const Languages = dynamic(() => import("@/components/home/Languages"), {
  loading: () => <div className="min-h-[160px]" aria-hidden />,
});
const ProductPreview = dynamic(() => import("@/components/home/ProductPreview"), {
  loading: () => <div className="min-h-[280px]" aria-hidden />,
});
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"), {
  loading: () => <div className="min-h-[120px]" aria-hidden />,
});
const FAQ = dynamic(() => import("@/components/home/FAQ"), {
  loading: () => <div className="min-h-[200px]" aria-hidden />,
});
const ComingSoon = dynamic(() => import("@/components/home/ComingSoon"), {
  loading: () => <div className="min-h-[80px]" aria-hidden />,
});

export const metadata: Metadata = {
  title: {
    absolute:
      "QuotVid — AI Quote Video Studio for TikTok, Instagram & YouTube Shorts",
  },
  description:
    "Generate professional 1080×1920 quote videos with live phone preview. 20 categories, 10+ video styles, 25 languages. Set your brand once — logo, colors, background, music. Free to start.",
  keywords: [
    "AI quote video generator",
    "quote video studio",
    "live video preview",
    "AI video maker",
    "TikTok content creator",
    "Instagram Reels automation",
    "YouTube Shorts generator",
    "custom video studio",
    "automated quote videos",
    "quote video templates",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "QuotVid — AI Quote Video Studio for TikTok, Instagram & YouTube Shorts",
    description:
      "Generate professional 1080×1920 quote videos with live phone preview. 20 categories, 10+ video styles, 25 languages. Free to start.",
    url: SITE_URL,
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: 1200,
        height: 630,
        alt: "QuotVid — AI quote video studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title:
      "QuotVid — AI Quote Video Studio for TikTok, Instagram & YouTube Shorts",
    description:
      "Generate professional 1080×1920 quote videos with live phone preview. 20 categories, 10+ video styles, 25 languages. Free to start.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />
      <HomeFaqJsonLd />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSolution />
        <HowItWorks />
        <ProductPreview />
        <Features />
        <Niches />
        <Languages />
        <ComingSoon />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
