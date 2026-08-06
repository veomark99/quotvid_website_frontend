/**
 * Google AdSense config from env.
 * Set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. ca-pub-XXXXXXXX) to enable.
 * Ad units are rendered on blog posts only.
 */

export function getAdSenseClient(): string | null {
  const raw = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();
  if (!raw) return null;
  // Accept either ca-pub-… or pub-…
  if (raw.startsWith("ca-pub-") || raw.startsWith("pub-")) return raw.startsWith("ca-") ? raw : `ca-${raw}`;
  return null;
}

/** Publisher ID for ads.txt (pub-… without ca- prefix). */
export function getAdSensePublisherId(): string | null {
  const client = getAdSenseClient();
  if (!client) return null;
  return client.replace(/^ca-/, "");
}

export function getBlogInArticleSlot(): string | null {
  const slot = (process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_IN_ARTICLE ?? "").trim();
  return slot || null;
}

export function getBlogBottomSlot(): string | null {
  const slot = (process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM ?? "").trim();
  return slot || null;
}

export function isAdSenseEnabled(): boolean {
  return Boolean(getAdSenseClient());
}
