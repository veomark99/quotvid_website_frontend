import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://www.quotvid.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://www.quotvid.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <ArticleJsonLd title={post.title} description={post.description} publishedAt={post.publishedAt} slug={post.slug} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://www.quotvid.com" }, { name: "Blog", url: "https://www.quotvid.com/blog" }, { name: post.title, url: `https://www.quotvid.com/blog/${post.slug}` }]} />
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">{tag}</span>
              ))}
            </div>
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-4xl">{post.title}</h1>
            <p className="text-sm text-muted-foreground">
              By {post.author} · {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        <section className="bg-section-light py-12 sm:py-16">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <article className="prose prose-sm sm:prose-base max-w-none text-light-body prose-headings:text-light-heading prose-strong:text-light-heading prose-a:text-primary">
              <MDXRemote source={post.content} />
            </article>

            <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center">
              <p className="mb-2 text-sm font-bold text-light-heading">Ready to start creating daily videos?</p>
              <p className="mb-4 text-xs text-light-body">Join QuotVid — free trial, no credit card required.</p>
              <a
                href="https://app.quotvid.com/auth/signup"
                className="inline-block rounded-xl bg-gradient-gold px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Start Free →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
