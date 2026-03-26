import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { helpCategories } from "@/lib/help-center-content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Help Center — QuotVid Support",
  description:
    "Step-by-step help for QuotVid: getting started, billing, video generation, social posting, branding, and troubleshooting.",
  alternates: { canonical: `${SITE_URL}/help` },
  openGraph: {
    title: "Help Center — QuotVid Support",
    description:
      "Step-by-step help for QuotVid: getting started, billing, video generation, social posting, branding, and troubleshooting.",
    url: `${SITE_URL}/help`,
  },
};

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Help <span className="text-gradient-gold">Center</span>
            </h1>
            <p className="mb-8 text-sm sm:text-lg text-muted-foreground">
              Six topic areas below. Open any question to read a short answer. Video walkthroughs can be added later; written guides stay here for quick scanning.
            </p>
            <Link
              href="/contact"
              className="mx-auto flex max-w-lg items-center gap-3 rounded-xl border border-primary/30 bg-secondary px-4 py-3 text-sm text-muted-foreground hover:border-primary/60 transition-colors"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <span>Still stuck? Contact us</span>
            </Link>
          </div>
        </section>

        {/* Jump links */}
        <section className="bg-section-light border-b border-primary/10 py-8">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-light-muted">Jump to a topic</p>
            <nav className="flex flex-wrap gap-2" aria-label="Help topics">
              {helpCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-primary/25 bg-foreground/[0.03] px-3 py-1.5 text-xs font-medium text-light-heading hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Six sections: unique articles only */}
        <section className="bg-section-light pb-14 sm:pb-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8 space-y-14 sm:space-y-16">
            {helpCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28">
                <div className="mb-6 flex flex-wrap items-start gap-3">
                  <span className="text-2xl" aria-hidden>
                    {cat.icon}
                  </span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-light-heading">{cat.title}</h2>
                    <p className="mt-1 text-sm text-light-body">{cat.desc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {cat.articles.map((article) => (
                    <details
                      key={article.slug}
                      id={article.slug}
                      className="group rounded-xl border border-primary/20 bg-foreground/[0.02] px-4 py-3 transition-colors open:border-primary/35 open:bg-foreground/[0.04]"
                    >
                      <summary className="cursor-pointer list-none font-medium text-light-heading text-sm sm:text-base [&::-webkit-details-marker]:hidden flex items-start justify-between gap-2">
                        <span>{article.title}</span>
                        <span className="text-primary/60 text-lg leading-none shrink-0 group-open:rotate-180 transition-transform">
                          ▾
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-light-body leading-relaxed border-t border-primary/10 pt-3">
                        {article.body}
                      </p>
                      <p className="mt-2 text-[10px] text-light-muted">
                        <a href={`#${article.slug}`} className="text-primary hover:underline">
                          Link to this answer
                        </a>
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-2xl px-3 sm:px-4 text-center md:px-8">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold">Need more help?</h2>
            <p className="mb-6 text-sm sm:text-base text-muted-foreground">
              We read and reply to every message within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-gold px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 text-center"
              >
                Contact support
              </Link>
              <a
                href="mailto:support@quotvid.com"
                className="rounded-xl border border-primary/30 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 text-center"
              >
                support@quotvid.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
