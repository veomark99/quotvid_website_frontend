import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — QuotVid Tips, Guides & Creator Resources",
  description:
    "Learn how to grow on YouTube Shorts and Pinterest with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — QuotVid Tips, Guides & Creator Resources",
    description: "Learn how to grow on YouTube Shorts and Pinterest with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
    url: `${SITE_URL}/blog`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "QuotVid Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "Blog — QuotVid Tips, Guides & Creator Resources",
    description:
      "Learn how to grow on YouTube Shorts and Pinterest with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    tags: post.tags,
    lang: post.lang,
  }));

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Creator <span className="text-gradient-gold">Resources & Tips</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Guides to grow your social media with daily video content. Search or filter by language.
            </p>
          </div>
        </section>

        <section className="bg-section-light py-12 sm:py-20">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8">
            <BlogIndex posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
