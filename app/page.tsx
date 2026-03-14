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
  title: "QuotVid — AI Quote Video Generator for TikTok, Reels & YouTube Shorts",
  description:
    "Turn quotes into viral short-form videos daily. AI-powered generator for content creators. 20 languages, 9 niches, zero editing. Start free — no credit card required.",
  keywords: ["quote video generator", "AI video maker", "TikTok content creator", "Instagram Reels automation", "YouTube Shorts generator"],
  alternates: { canonical: "https://www.quotvid.com" },
  openGraph: {
    title: "QuotVid — AI Quote Video Generator",
    description: "Turn quotes into viral videos daily. No editing. 20 languages. Start free.",
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
