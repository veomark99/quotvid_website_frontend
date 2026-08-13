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

export function langLabel(lang: string): string {
  return LANG_LABELS[lang] ?? lang.toUpperCase();
}

export type BlogLanguageOption = {
  lang: string;
  label: string;
  count: number;
};

/** Languages present in a post list, sorted with English first. */
export function getBlogLanguagesInUse(
  posts: { lang: string }[],
): BlogLanguageOption[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    counts.set(post.lang, (counts.get(post.lang) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([lang, count]) => ({ lang, label: langLabel(lang), count }))
    .sort((a, b) => {
      if (a.lang === "en") return -1;
      if (b.lang === "en") return 1;
      return a.label.localeCompare(b.label);
    });
}
