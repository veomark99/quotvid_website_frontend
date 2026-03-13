import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "QuotVid — AI Quote Video Generator",
    template: "%s | QuotVid",
  },
  description:
    "Turn quotes into viral short-form videos daily. AI-powered quote video generator for TikTok, Instagram Reels, and YouTube Shorts. 20 languages. No editing required.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quotvid.com"),
  openGraph: {
    siteName: "QuotVid",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@quotvid" },
  robots: { index: true, follow: true },
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
