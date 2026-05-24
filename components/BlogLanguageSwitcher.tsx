import Link from "next/link";
import { getBlogTranslationLinks } from "@/lib/blog-i18n";

export default function BlogLanguageSwitcher({ slug }: { slug: string }) {
  const links = getBlogTranslationLinks(slug);
  if (links.length <= 1) return null;

  return (
    <nav
      className="mt-10 rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6"
      aria-label="Article translations"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-light-muted">
        Read in your language
      </p>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.slug}>
            {link.current ? (
              <span className="inline-block rounded-full bg-[rgba(226,161,40,0.20)] px-3 py-1 text-xs font-semibold text-[#e2a128]">
                {link.label}
              </span>
            ) : (
              <Link
                href={`/blog/${link.slug}`}
                hrefLang={link.lang}
                className="inline-block rounded-full border border-[#374151] px-3 py-1 text-xs font-medium text-light-body transition-colors hover:border-[#e2a128] hover:text-[#e2a128]"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
