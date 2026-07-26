import { getAllPosts, getPostBySlug, type BlogPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

/** ISO 639-1 codes with full blog translation sets (English source + these). */
export const BLOG_TRANSLATION_LANGS = [
  "es",
  "fr",
  "de",
  "pt",
  "it",
  "tr",
  "nl",
  "pl",
  "vi",
  "id",
  "th",
  "zh",
  "ja",
  "ko",
  "hi",
  "bn",
  "ur",
  "ar",
  "fa",
  "ta",
  "ru",
] as const;

/** English slugs that have 21-language translation sets. */
export const TRANSLATED_BLOG_SOURCES = new Set([
  "how-to-make-motivational-quote-videos-for-youtube-shorts",
  "how-to-automate-quote-videos-on-pinterest",
  "text-to-video-quote-generator-complete-guide",
  "faceless-youtube-channel-with-quote-videos",
]);

const HREFLANG_MAP: Record<string, string> = {
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
  pt: "pt-BR",
  it: "it",
  tr: "tr",
  nl: "nl",
  pl: "pl",
  vi: "vi",
  id: "id",
  th: "th",
  zh: "zh-Hans",
  ja: "ja",
  ko: "ko",
  hi: "hi",
  bn: "bn",
  ur: "ur",
  ar: "ar",
  fa: "fa",
  ta: "ta",
  ru: "ru",
};

const LANG_LABELS: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
  tr: "Türkçe",
  nl: "Nederlands",
  pl: "Polski",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
  th: "ไทย",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  bn: "বাংলা",
  ur: "اردو",
  ar: "العربية",
  fa: "فارسی",
  ta: "தமிழ்",
  ru: "Русский",
};

export function langToHreflang(lang: string): string {
  return HREFLANG_MAP[lang] ?? lang;
}

export function langLabel(lang: string): string {
  return LANG_LABELS[lang] ?? lang.toUpperCase();
}

function blogUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

/** Resolve the English canonical slug for a post in a translation group. */
export function getCanonicalBlogSlug(post: BlogPost): string | null {
  if (post.translationOf) return post.translationOf;
  if (TRANSLATED_BLOG_SOURCES.has(post.slug)) return post.slug;
  return null;
}

/** hreflang → absolute URL for Google / Bing international SEO. */
export function getBlogHreflangAlternates(slug: string): Record<string, string> {
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonicalSlug = getCanonicalBlogSlug(post);
  if (!canonicalSlug) {
    const hl = langToHreflang(post.lang);
    const url = blogUrl(slug);
    return { [hl]: url, "x-default": url };
  }

  const alternates: Record<string, string> = {
    [langToHreflang("en")]: blogUrl(canonicalSlug),
  };

  for (const lang of BLOG_TRANSLATION_LANGS) {
    const transSlug = `${canonicalSlug}-${lang}`;
    if (getPostBySlug(transSlug)) {
      alternates[langToHreflang(lang)] = blogUrl(transSlug);
    }
  }

  alternates["x-default"] = blogUrl(canonicalSlug);
  return alternates;
}

export type BlogTranslationLink = {
  lang: string;
  label: string;
  slug: string;
  href: string;
  current: boolean;
};

/** Sibling translations for UI language switcher + internal linking. */
export function getBlogTranslationLinks(slug: string): BlogTranslationLink[] {
  const post = getPostBySlug(slug);
  if (!post) return [];

  const canonicalSlug = getCanonicalBlogSlug(post);
  if (!canonicalSlug) {
    return [
      {
        lang: post.lang,
        label: langLabel(post.lang),
        slug: post.slug,
        href: blogUrl(post.slug),
        current: true,
      },
    ];
  }

  const slugs = [canonicalSlug, ...BLOG_TRANSLATION_LANGS.map((l) => `${canonicalSlug}-${l}`)];
  const links: BlogTranslationLink[] = [];

  for (const s of slugs) {
    const p = getPostBySlug(s);
    if (!p) continue;
    links.push({
      lang: p.lang,
      label: langLabel(p.lang),
      slug: s,
      href: blogUrl(s),
      current: s === slug,
    });
  }

  return links;
}

/** All posts grouped by canonical slug (for sitemap / llms-full). */
export function getBlogTranslationGroups(): Map<string, BlogPost[]> {
  const groups = new Map<string, BlogPost[]>();
  const all = getAllPosts();

  for (const post of all) {
    const key = getCanonicalBlogSlug(post) ?? post.slug;
    const list = groups.get(key) ?? [];
    list.push(post);
    groups.set(key, list);
  }

  return groups;
}
