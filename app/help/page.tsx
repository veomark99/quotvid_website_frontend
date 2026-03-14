import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Help Center — QuotVid Support",
  description:
    "Find answers to common questions about QuotVid. Get help with getting started, billing, video generation, and more.",
  alternates: { canonical: "https://www.quotvid.com/help" },
};

const categories = [
  {
    icon: "🚀",
    title: "Getting Started",
    desc: "New to QuotVid? Start here.",
    articles: [
      { title: "How to create your first video", slug: "create-first-video" },
      { title: "Setting up your content persona", slug: "setup-persona" },
      { title: "Understanding content niches", slug: "content-niches" },
      { title: "Supported languages guide", slug: "supported-languages" },
      { title: "How to download your videos", slug: "download-videos" },
    ],
  },
  {
    icon: "💳",
    title: "Account & Billing",
    desc: "Plans, payments, and account management.",
    articles: [
      { title: "Free plan — what's included", slug: "free-plan" },
      { title: "How to upgrade your plan", slug: "upgrade-plan" },
      { title: "Canceling your subscription", slug: "cancel-subscription" },
      { title: "7-day money-back guarantee", slug: "refund-policy" },
      { title: "Accepted payment methods", slug: "payment-methods" },
    ],
  },
  {
    icon: "🎬",
    title: "Video Generation",
    desc: "Everything about how QuotVid creates your videos.",
    articles: [
      { title: "How AI generates unique quotes", slug: "ai-quote-generation" },
      { title: "Choosing and changing video templates", slug: "video-templates" },
      { title: "Background music options", slug: "background-music" },
      { title: "RTL support for Arabic, Urdu & Persian", slug: "rtl-languages" },
      { title: "Video format specs (1080×1920)", slug: "video-specs" },
    ],
  },
  {
    icon: "📲",
    title: "Social Media Posting",
    desc: "Auto-posting and schedule setup.",
    articles: [
      { title: "Connecting your TikTok account", slug: "connect-tiktok" },
      { title: "Connecting Instagram for Reels", slug: "connect-instagram" },
      { title: "Setting up YouTube Shorts posting", slug: "connect-youtube" },
      { title: "How daily auto-schedule works", slug: "auto-schedule" },
      { title: "Bulk video generation guide", slug: "bulk-generation" },
    ],
  },
  {
    icon: "🏷️",
    title: "Brand Kit",
    desc: "Add your logo and branding to every video.",
    articles: [
      { title: "Adding your logo watermark", slug: "logo-watermark" },
      { title: "Setting your channel name overlay", slug: "channel-name" },
      { title: "Controlling position and opacity", slug: "brand-position" },
      { title: "Per-persona brand settings", slug: "persona-brand" },
    ],
  },
  {
    icon: "🛠️",
    title: "Technical Help",
    desc: "Troubleshooting and technical questions.",
    articles: [
      { title: "Why is my video taking long to generate?", slug: "slow-generation" },
      { title: "Video quality and MP4 download issues", slug: "download-quality" },
      { title: "Account access and login problems", slug: "login-issues" },
      { title: "Contact support", slug: "contact-support" },
    ],
  },
];

const popularArticles = [
  { title: "How to create your first video", category: "Getting Started", slug: "create-first-video" },
  { title: "Free plan — what's included", category: "Account & Billing", slug: "free-plan" },
  { title: "RTL support for Arabic, Urdu & Persian", category: "Video Generation", slug: "rtl-languages" },
  { title: "How daily auto-schedule works", category: "Social Media Posting", slug: "auto-schedule" },
  { title: "7-day money-back guarantee", category: "Account & Billing", slug: "refund-policy" },
  { title: "How AI generates unique quotes", category: "Video Generation", slug: "ai-quote-generation" },
];

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              How Can We <span className="text-gradient-gold">Help?</span>
            </h1>
            <p className="mb-8 text-sm sm:text-lg text-muted-foreground">
              Browse guides, tutorials, and answers to common questions about QuotVid.
            </p>
            {/* Visual search bar (no functionality — links to contact page) */}
            <Link
              href="/contact"
              className="mx-auto flex max-w-lg items-center gap-3 rounded-xl border border-primary/30 bg-secondary px-4 py-3 text-sm text-muted-foreground hover:border-primary/60 transition-colors"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <span>Search or ask a question — contact us →</span>
            </Link>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="bg-section-light py-12 sm:py-16">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 sm:mb-8 text-lg sm:text-xl font-bold text-light-heading">Popular Articles</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularArticles.map((a) => (
                <div
                  key={a.slug}
                  className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-4 sm:p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{a.category}</p>
                  <p className="text-xs sm:text-sm font-medium text-light-heading">{a.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-section-light pb-14 sm:pb-20">
          <div className="container mx-auto max-w-5xl px-3 sm:px-4 md:px-8">
            <h2 className="mb-6 sm:mb-10 text-lg sm:text-xl font-bold text-light-heading">Browse by Topic</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <div key={cat.title} className="rounded-2xl border border-primary/20 bg-foreground/[0.02] p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-light-heading">{cat.title}</h3>
                      <p className="text-[11px] text-light-body">{cat.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {cat.articles.map((article) => (
                      <li key={article.slug}>
                        <span className="flex items-center gap-2 text-xs sm:text-sm text-light-body hover:text-primary transition-colors cursor-default">
                          <span className="text-primary/50 shrink-0">›</span>
                          {article.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still need help */}
        <section className="bg-section-dark py-14 sm:py-20">
          <div className="container mx-auto max-w-2xl px-3 sm:px-4 text-center md:px-8">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold">Still Need Help?</h2>
            <p className="mb-6 text-sm sm:text-base text-muted-foreground">
              Can't find what you're looking for? We read and reply to every message within 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-gold px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 text-center"
              >
                Contact Support →
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
