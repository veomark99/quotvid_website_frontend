import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quotvid.com"),
  title: {
    default: "QuotVid — AI Quote Video Generator",
    template: "%s | QuotVid",
  },
  description:
    "Turn quotes into viral short-form videos daily. AI-powered quote video generator for TikTok, Instagram Reels, and YouTube Shorts. 20 languages. No editing required.",
  keywords: [
    "quote video generator",
    "AI video maker",
    "TikTok automation",
    "Instagram Reels generator",
    "YouTube Shorts automation",
    "quote video creator",
    "content creator tools",
    "AI content generation",
  ],
  authors: [{ name: "QuotVid", url: "https://www.quotvid.com" }],
  creator: "QuotVid",
  publisher: "QuotVid",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "QuotVid",
    locale: "en_US",
    type: "website",
    url: "https://www.quotvid.com",
    title: "QuotVid — AI Quote Video Generator",
    description:
      "Turn quotes into viral short-form videos daily. AI-powered. 20 languages. Start free.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuotVid — AI Quote Video Generator for TikTok, Reels & YouTube Shorts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    creator: "@quotvid",
    title: "QuotVid — AI Quote Video Generator",
    description: "Turn quotes into viral short-form videos daily. 20 languages. Start free.",
    images: ["/og-image.png"],
  },
  // ⚠️  Replace the value below with your Google Search Console verification code.
  // Go to search.google.com/search-console → Add Property → HTML tag → copy the content="..." value.
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://www.quotvid.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <body>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
