import Script from "next/script";
import { getAdSenseClient } from "@/lib/adsense";

/** Site-wide AdSense loader in <head> (required for Google verification + ad units). */
export default function AdSenseScript() {
  const client = getAdSenseClient();
  if (!client) return null;

  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
