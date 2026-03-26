import type { Metadata } from "next";
import { APP_URL, OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

const OG_IMAGE = absoluteUrl(OG_IMAGE_PATH);

export { APP_URL, SITE_URL };

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
      site: "@quotvid",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@quotvid",
    },
    robots: { index: true, follow: true },
  };
}
