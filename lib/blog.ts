import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  tags: string[];
  lang: string;
  translationOf?: string;
  /** When false, hidden from indexes/sitemaps but still reachable by URL. */
  published: boolean;
  /** True when this lang edition was rewritten as original localized content (not a direct translation). */
  localizedEdition?: boolean;
  contentVersion?: number;
  content: string;
}

function mapPost(slug: string, data: Record<string, unknown>, content: string): BlogPost {
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    publishedAt: data.publishedAt as string,
    author: data.author as string,
    tags: (data.tags as string[]) ?? [],
    lang: (data.lang as string) ?? "en",
    translationOf: data.translationOf as string | undefined,
    published: data.published !== false,
    localizedEdition: data.localizedEdition as boolean | undefined,
    contentVersion: data.contentVersion as number | undefined,
    content,
  };
}

/** Published posts only — use for blog index, sitemap, and LLM listings. */
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return mapPost(slug, data as Record<string, unknown>, content);
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/** All posts including unpublished — use for static path generation so old URLs keep working. */
export function getAllPostsIncludingUnpublished(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return mapPost(slug, data as Record<string, unknown>, content);
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return mapPost(slug, data as Record<string, unknown>, content);
}
