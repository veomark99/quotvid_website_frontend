import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO_LANDING_PAGES, solutionPath } from "@/lib/seo-landing-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap — QuotVid",
  description: "Browse all pages on QuotVid — the AI quote video generator for TikTok, Reels, and YouTube Shorts.",
  alternates: { canonical: `${SITE_URL}/sitemap-page` },
};

const sections = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Solutions overview", href: "/solutions" },
      ...SEO_LANDING_PAGES.map((p) => ({ label: p.h1, href: solutionPath(p.slug) })),
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Blog Posts",
    links: [
      { label: "Best Fonts for Quote Videos on TikTok and Instagram", href: "/blog/best-fonts-for-quote-videos" },
      { label: "How to Grow TikTok with Quote Videos", href: "/blog/how-to-grow-tiktok-with-quote-videos" },
      { label: "How to Make Quote Videos for Instagram", href: "/blog/how-to-make-quote-videos-for-instagram" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "How to Create Your First Video", href: "/help#create-first-video" },
      { label: "Setting Up Your Content Persona", href: "/help#setup-persona" },
      { label: "What the Free Plan Includes", href: "/help#free-plan" },
      { label: "RTL Languages (Arabic, Persian, and similar)", href: "/help#rtl-languages" },
      { label: "Connecting TikTok", href: "/help#connect-tiktok" },
      { label: "Daily Auto-Schedule", href: "/help#auto-schedule" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "Sign In", href: "https://app.quotvid.com/auth/signin", external: true },
      { label: "Create Account (Free)", href: "https://app.quotvid.com/auth/signup", external: true },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              <span className="text-gradient-gold">Sitemap</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              All pages on QuotVid, organized for easy navigation.
            </p>
          </div>
        </section>

        <section className="bg-section-light py-12 sm:py-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{section.title}</h2>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-light-body hover:text-primary transition-colors"
                          >
                            <span className="text-primary/40">›</span>
                            {link.label}
                            <svg className="h-3 w-3 text-muted-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="flex items-center gap-2 text-sm text-light-body hover:text-primary transition-colors"
                          >
                            <span className="text-primary/40">›</span>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
