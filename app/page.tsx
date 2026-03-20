import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Niches from "@/components/home/Niches";
import Languages from "@/components/home/Languages";
import ProductPreview from "@/components/home/ProductPreview";
import FinalCTA from "@/components/home/FinalCTA";
import FAQ from "@/components/home/FAQ";
import ComingSoon from "@/components/home/ComingSoon";
import { WebsiteJsonLd, HomeFaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "QuotVid — AI Quote Video Studio for TikTok, Instagram & YouTube Shorts",
  description:
    "Generate professional 1080×1920 quote videos with live phone preview. 20 categories, 17 templates, 25 languages. Set your brand once — logo, colors, background, music. Free to start.",
  keywords: ["AI quote video generator", "quote video studio", "live video preview", "AI video maker", "TikTok content creator", "Instagram Reels automation", "YouTube Shorts generator", "custom video studio", "automated quote videos", "quote video templates"],
  alternates: { canonical: "https://www.quotvid.com" },
  openGraph: {
    title: "QuotVid — AI Quote Video Studio for TikTok, Instagram & YouTube Shorts",
    description: "Generate professional 1080×1920 quote videos with live phone preview. 20 categories, 17 templates, 25 languages. Free to start.",
    url: "https://www.quotvid.com",
    images: [{ url: "https://www.quotvid.com/og-image.png", width: 1200, height: 630 }],
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
