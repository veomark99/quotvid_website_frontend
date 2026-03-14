import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.quotvid.com";
  const now = new Date().toISOString();

  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/features`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`,           lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,              lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/help`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sitemap-page`,      lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
