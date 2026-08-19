import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import BlogLanguageSwitcher from "@/components/BlogLanguageSwitcher";
import { getAllPostsIncludingUnpublished, getPostBySlug } from "@/lib/blog";
import { getBlogHreflangAlternates } from "@/lib/blog-i18n";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import { getBlogBottomSlot, getBlogInArticleSlot } from "@/lib/adsense";
import BlogAd from "@/components/ads/BlogAd";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  // Include unpublished posts so legacy Instagram/TikTok URLs do not 404.
  return getAllPostsIncludingUnpublished().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const base = buildMetadata({
    title: post.title,
    description: post.description,
    keywords: post.tags,
    path: `/blog/${post.slug}`,
  });
  const hreflang = getBlogHreflangAlternates(params.slug);
  const canonical = `${SITE_URL}/blog/${params.slug}`;
  const isPublished = post.published;

  return {
    ...base,
    robots: isPublished
      ? undefined
      : { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
    alternates: {
      canonical,
      languages: isPublished && Object.keys(hreflang).length > 0 ? hreflang : undefined,
    },
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      url: canonical,
      locale: post.lang === "en" ? "en_US" : undefined,
    },
    twitter: {
      ...base.twitter,
      card: "summary_large_image",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const showAds = post.published;
  const inArticleSlot = showAds ? getBlogInArticleSlot() : null;
  const bottomSlot = showAds ? getBlogBottomSlot() : null;

  return (
    <>
      {post.published && (
        <ArticleJsonLd title={post.title} description={post.description} publishedAt={post.publishedAt} slug={post.slug} lang={post.lang} />
      )}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]}
      />
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[rgba(226,161,40,0.15)] px-3 py-1 text-xs font-medium text-[#e2a128]">{tag}</span>
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
            {inArticleSlot && <BlogAd slot={inArticleSlot} />}

            {!post.published && (
              <p className="mb-8 rounded-[10px] border border-[#374151] bg-[#111827] px-4 py-3 text-xs text-light-muted">
                This article is archived and no longer part of the live QuotVid blog.
              </p>
            )}

            <article lang={post.lang} className="prose prose-sm sm:prose-base max-w-none text-light-body prose-headings:text-light-heading prose-strong:text-light-heading prose-a:text-[#e2a128] prose-a:no-underline hover:prose-a:underline prose-img:rounded-[12px] prose-img:border prose-img:border-[#1F2937] prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-h2:scroll-mt-28 prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-xl prose-h3:font-semibold prose-h4:text-base prose-h4:font-semibold" dir={["ar", "ur", "fa"].includes(post.lang) ? "rtl" : undefined}>
              <MDXRemote source={post.content} />
            </article>

            {bottomSlot && <BlogAd slot={bottomSlot} />}

            {post.published && <BlogLanguageSwitcher slug={post.slug} />}

            <div className="mt-12 rounded-[14px] border border-[rgba(226,161,40,0.30)] bg-[rgba(226,161,40,0.06)] p-6 sm:p-8 text-center">
              <p className="mb-2 text-sm font-bold text-light-heading">Ready to start creating daily videos?</p>
              <p className="mb-4 text-xs text-light-body">Pick YouTube trial, Pinterest trial, or $10 lifetime — then create your account.</p>
              <a
                href="/pricing"
                className="inline-block rounded-[10px] bg-gradient-gold px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)]"
              >
                View plans →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
