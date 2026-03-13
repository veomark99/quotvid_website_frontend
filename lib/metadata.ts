import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quotvid.com";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quotvid.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export { SITE_URL, APP_URL };

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = OG_IMAGE,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("QuotVid") ? title : `${title} | QuotVid`;

  return {
    title: fullTitle,
    description,
    keywords: ["quote videos", "AI video generator", "content creator tools", "short form video", ...keywords],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "QuotVid",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@quotvid",
    },
    robots: { index: true, follow: true },
  };
}
