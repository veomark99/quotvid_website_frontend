import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: "QuotVid", url: SITE_URL }],
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
    url: SITE_URL,
    title: "QuotVid — AI Quote Video Generator",
    description:
      "Turn quotes into viral short-form videos daily. AI-powered. 20 languages. Start free.",
    images: [
      {
        url: absoluteUrl(OG_IMAGE_PATH),
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
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  alternates: {
    canonical: SITE_URL,
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
