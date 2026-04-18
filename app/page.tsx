import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ProblemPain from "@/components/home/ProblemPain";
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
const AutoPosting = dynamic(() => import("@/components/home/AutoPosting"), {
  loading: () => <div className="min-h-[200px]" aria-hidden />,
});

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Quote Video Generator — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
  },
  description:
    "QuotVid generates branded AI quote videos in 1080×1920 and auto-posts them to YouTube Shorts, Instagram Reels, TikTok, Pinterest, and Facebook Pages. Set your schedule once. 20 categories. 25 languages. Free trial.",
  keywords: [
    "AI quote video generator",
    "auto-post quote videos",
    "quote video studio",
    "YouTube Shorts auto-posting",
    "Instagram Reels automation",
    "TikTok auto-posting",
    "Pinterest video pins automation",
    "Facebook Pages video posting",
    "automated quote videos",
    "quote video templates",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "AI Quote Video Generator — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
    description:
      "QuotVid generates branded AI quote videos in 1080×1920 and auto-posts them to YouTube Shorts, Instagram Reels, TikTok, Pinterest, and Facebook Pages. Free to start.",
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
      "AI Quote Video Generator — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
    description:
      "QuotVid generates branded AI quote videos in 1080×1920 and auto-posts them to YouTube Shorts, Instagram Reels, TikTok, Pinterest, and Facebook Pages. Free to start.",
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
        <ProblemPain />
        <ProblemSolution />
        <AutoPosting />
        <HowItWorks />
        <Features />
        <ProductPreview />
        <Niches />
        <Languages />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
