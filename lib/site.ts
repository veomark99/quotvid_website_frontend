/**
 * Single source of truth for public marketing site URL.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://www.quotvid.com) for previews and staging.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quotvid.com"
).replace(/\/$/, "");

export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quotvid.com").replace(
  /\/$/,
  "",
);

export const OG_IMAGE_PATH = "/og-image.png";

export function absoluteUrl(path = ""): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
