import { getAdSensePublisherId } from "@/lib/adsense";

export const dynamic = "force-static";

/**
 * Google ads.txt — https://www.quotvid.com/ads.txt
 * Required for authorized digital sellers once AdSense is approved.
 */
export async function GET() {
  const publisherId = getAdSensePublisherId();

  const body = publisherId
    ? `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`
    : `# Add NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-XXXXXXXX) to enable ads.txt\n`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
