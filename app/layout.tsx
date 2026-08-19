import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";
import { getGaId } from "@/lib/analytics";
import { getAdSenseClient } from "@/lib/adsense";
import { PostHogProvider } from "@/components/PostHogProvider";
import AdSenseScript from "@/components/ads/AdSenseScript";
import ClarityScript from "@/components/analytics/ClarityScript";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const adsenseClient = getAdSenseClient();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QuotVid — AI Quote Video Generator",
    template: "%s | QuotVid",
  },
  description:
    "Turn quotes into viral short-form videos daily. AI-powered quote video generator for YouTube Shorts and Pinterest. 25 languages. No editing required.",
  keywords: [
    "quote video generator",
    "AI video maker",
    "YouTube Shorts automation",
    "Pinterest video pins",
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
        alt: "QuotVid — AI Quote Video Generator for YouTube Shorts & Pinterest",
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
  ...(adsenseClient
    ? { other: { "google-adsense-account": adsenseClient } }
    : {}),
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = getGaId();
  return (
    <html lang="en">
      <head>
        {/* AdSense + analytics: afterInteractive so they coexist and Google still sees the ads snippet */}
        <AdSenseScript />
        <ClarityScript />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
