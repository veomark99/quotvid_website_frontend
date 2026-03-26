import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — QuotVid Tips, Guides & Creator Resources",
  description:
    "Learn how to grow on TikTok, Instagram Reels, and YouTube Shorts with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — QuotVid Tips, Guides & Creator Resources",
    description: "Learn how to grow on TikTok, Instagram Reels, and YouTube Shorts with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
    url: `${SITE_URL}/blog`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "QuotVid Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "Blog — QuotVid Tips, Guides & Creator Resources",
    description:
      "Learn how to grow on TikTok, Instagram Reels, and YouTube Shorts with daily quote videos. Creator guides, video tips, and content strategy from the QuotVid team.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Creator <span className="text-gradient-gold">Resources & Tips</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">Guides to grow your social media with daily video content.</p>
          </div>
        </section>

        <section className="bg-section-light py-12 sm:py-20">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8">
            {posts.length === 0 ? (
              <p className="text-center text-light-body">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-xl border border-primary/20 bg-foreground/[0.02] p-5 sm:p-6 transition-all hover:border-primary/30 hover:shadow-lg">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">{tag}</span>
                      ))}
                    </div>
                    <h2 className="mb-2 text-sm sm:text-base font-bold text-light-heading group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-xs text-light-body line-clamp-3">{post.description}</p>
                    <p className="mt-3 text-[10px] text-light-muted">{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
