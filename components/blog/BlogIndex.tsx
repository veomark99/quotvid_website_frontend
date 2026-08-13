"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getBlogLanguagesInUse, langLabel } from "@/lib/blog-lang";

export type BlogPostPreview = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  lang: string;
};

type BlogIndexProps = {
  posts: BlogPostPreview[];
};

function matchesQuery(post: BlogPostPreview, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    post.title.toLowerCase().includes(q) ||
    post.description.toLowerCase().includes(q) ||
    post.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("all");

  const languages = useMemo(() => getBlogLanguagesInUse(posts), [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      if (lang !== "all" && post.lang !== lang) return false;
      return matchesQuery(post, query);
    });
  }, [posts, lang, query]);

  if (posts.length === 0) {
    return <p className="text-center text-light-body">No posts yet. Check back soon.</p>;
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          <label htmlFor="blog-search" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-light-muted">
            Search articles
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-light-muted"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, topic, or keyword…"
              className="w-full rounded-[10px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] py-2.5 pl-10 pr-4 text-sm text-light-heading placeholder:text-light-muted focus:border-[#e2a128] focus:outline-none focus:ring-1 focus:ring-[#e2a128]"
            />
          </div>
        </div>

        <div className="sm:w-56">
          <label htmlFor="blog-language" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-light-muted">
            Language
          </label>
          <select
            id="blog-language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="w-full rounded-[10px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] px-3 py-2.5 text-sm text-light-heading focus:border-[#e2a128] focus:outline-none focus:ring-1 focus:ring-[#e2a128]"
          >
            <option value="all">All languages ({posts.length})</option>
            {languages.map((option) => (
              <option key={option.lang} value={option.lang}>
                {option.label} ({option.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-6 text-xs text-light-muted">
        {filtered.length === posts.length
          ? `${posts.length} articles`
          : `${filtered.length} of ${posts.length} articles`}
        {lang !== "all" ? ` · ${langLabel(lang)}` : ""}
        {query.trim() ? ` · “${query.trim()}”` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] px-6 py-12 text-center">
          <p className="text-sm font-semibold text-light-heading">No articles match your filters</p>
          <p className="mt-2 text-xs text-light-body">Try another language or clear your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setLang("all");
            }}
            className="mt-4 text-xs font-semibold text-[#e2a128] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6 transition-all hover:border-[#374151] hover:shadow-[var(--shadow-md)]"
            >
              <div className="mb-3 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-[rgba(96,165,250,0.12)] px-2.5 py-0.5 text-[10px] font-medium text-[#60A5FA]">
                  {langLabel(post.lang)}
                </span>
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[rgba(226,161,40,0.10)] px-2.5 py-0.5 text-[10px] font-medium text-[#e2a128]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-sm sm:text-base font-bold text-light-heading group-hover:text-[#e2a128] transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-light-body line-clamp-3">{post.description}</p>
              <p className="mt-3 text-[10px] text-light-muted">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
