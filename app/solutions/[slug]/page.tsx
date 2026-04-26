import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd, SolutionLandingJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getAllSeoLandingSlugs,
  getSeoLandingBySlug,
  solutionPath,
  solutionAbsoluteUrl,
} from "@/lib/seo-landing-pages";
import { APP_URL, SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return getAllSeoLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = getSeoLandingBySlug(params.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    path: solutionPath(page.slug),
  });
}

export default function SolutionLandingPage({ params }: { params: { slug: string } }) {
  const page = getSeoLandingBySlug(params.slug);
  if (!page) notFound();

  const others = getAllSeoLandingSlugs()
    .filter((s) => s !== page.slug)
    .map((slug) => getSeoLandingBySlug(slug)!);

  const pageUrl = solutionAbsoluteUrl(page.slug);

  return (
    <>
      <SolutionLandingJsonLd page={page} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Solutions", url: `${SITE_URL}/solutions` },
          { name: page.h1, url: pageUrl },
        ]}
      />
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[#e2a128]">Solutions</p>
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">{page.h1}</h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">{page.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/auth/signup`}
                className="inline-flex justify-center rounded-[10px] bg-gradient-gold px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)]"
              >
                Start free — no card
              </a>
              <Link
                href="/features"
                className="inline-flex justify-center rounded-[10px] border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:bg-[#1F2937] hover:border-[#4B5563]"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8 space-y-12 sm:space-y-16">
            {page.sections.map((s) => (
              <article key={s.heading}>
                <h2 className="mb-4 text-xl sm:text-2xl font-bold text-light-heading">{s.heading}</h2>
                <p className="text-sm sm:text-base text-light-body leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-8 text-xl sm:text-2xl font-bold text-center">Questions</h2>
            <div className="space-y-4">
              {page.faqs.map((f) => (
                <div key={f.q} className="rounded-[12px] border border-[#1F2937] bg-card p-4 sm:p-6 transition-colors hover:border-[#374151]">
                  <p className="mb-2 text-sm font-semibold text-foreground">{f.q}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20 border-t border-[rgba(226,161,40,0.10)]">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 text-lg font-bold text-light-heading">Related pages</h2>
            <ul className="space-y-3 text-sm text-light-body">
              <li>
                <Link href="/features" className="text-[#e2a128] hover:underline">
                  Features — Custom Studio, live preview, languages
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[#e2a128] hover:underline">
                  Pricing — Free, monthly, annual, lifetime
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#e2a128] hover:underline">
                  Blog — growth tips for short-form video
                </Link>
              </li>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={solutionPath(o.slug)} className="text-[#e2a128] hover:underline">
                    {o.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-xl px-3 text-center">
            <p className="mb-4 text-sm text-muted-foreground">Ready to automate quote videos?</p>
            <a
              href={`${APP_URL}/auth/signup`}
              className="inline-block rounded-[10px] bg-gradient-gold px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)]"
            >
              Create your free account
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
