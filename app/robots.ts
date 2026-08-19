import { MetadataRoute } from "next";
import { getUnpublishedPostSlugs } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

/** AI crawlers we explicitly allow to index and cite QuotVid (in addition to *). */
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Google-Extended",
  "Googlebot",
  "Googlebot-Image",
  "PerplexityBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Applebot-Extended",
  "YouBot",
  "Diffbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const archivedBlogPaths = getUnpublishedPostSlugs().map((slug) => `/blog/${slug}`);
  const publicAllow = {
    allow: "/" as const,
    disallow: ["/api/", ...archivedBlogPaths] as string[],
  };
  return {
    rules: [
      { userAgent: "*", ...publicAllow },
      ...AI_USER_AGENTS.map((userAgent) => ({ userAgent, ...publicAllow })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
