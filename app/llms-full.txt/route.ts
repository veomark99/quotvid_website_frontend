import { getAllPosts } from "@/lib/blog";
import { getBlogTranslationGroups, langLabel } from "@/lib/blog-i18n";
import { APP_URL, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const posts = getAllPosts();
  const groups = getBlogTranslationGroups();

  const lines: string[] = [
    "# QuotVid — full site reference for AI assistants",
    "",
    "> QuotVid: AI quote video generator. Vertical 1080×1920 MP4. 25 languages. TikTok, Reels, Shorts, Pinterest.",
    "",
    "## App",
    `- Sign up: ${APP_URL}/auth/signup`,
    `- Login: ${APP_URL}/auth/login`,
    "",
    "## Marketing pages",
    `- Home: ${SITE_URL}`,
    `- Features: ${SITE_URL}/features`,
    `- Pricing: ${SITE_URL}/pricing`,
    `- Integrations: ${SITE_URL}/integrations`,
    `- Help: ${SITE_URL}/help`,
    `- Blog index: ${SITE_URL}/blog`,
    "",
    "## Solutions",
    `- ${SITE_URL}/solutions/quote-to-video`,
    `- ${SITE_URL}/solutions/text-to-video-quotes`,
    `- ${SITE_URL}/solutions/motivational-quote-video-maker`,
    "",
    "## All blog posts (" + String(posts.length) + ")",
    "",
  ];

  for (const [canonical, members] of groups) {
    const sorted = [...members].sort((a, b) => a.lang.localeCompare(b.lang));
    const en = sorted.find((p) => p.lang === "en") ?? sorted[0];
    lines.push(`### ${en.title}`);
    lines.push(`> ${en.description}`);
    for (const p of sorted) {
      lines.push(`- [${langLabel(p.lang)}] ${SITE_URL}/blog/${p.slug}`);
    }
    lines.push("");
  }

  lines.push("## Sitemap", `${SITE_URL}/sitemap.xml`, "");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
