import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SocialPlatformIcon } from "@/components/marketing/SocialPlatformIcon";
import { SITE_URL } from "@/lib/site";

const HERO_PLATFORMS: { id: string; label: string }[] = [
  { id: "youtube", label: "YouTube" },
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "pinterest", label: "Pinterest" },
  { id: "facebook", label: "Facebook" },
];

export const metadata: Metadata = {
  title: "Social Media Integrations — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
  description:
    "Connect QuotVid to YouTube, Instagram, TikTok, Pinterest, and Facebook. Auto-post your AI quote videos to 5 platforms automatically. Secure OAuth 2.0 connection. AES-256 encrypted tokens. No password stored.",
  alternates: { canonical: `${SITE_URL}/integrations` },
  openGraph: {
    title: "Social Media Integrations — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
    description:
      "Connect QuotVid to YouTube, Instagram, TikTok, Pinterest, and Facebook. Secure OAuth 2.0. AES-256 encrypted tokens. Auto-post on your schedule.",
    url: `${SITE_URL}/integrations`,
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "Social Media Integrations — Auto-Post to YouTube, TikTok, Instagram, Pinterest & Facebook | QuotVid",
    description:
      "Connect QuotVid to YouTube, Instagram, TikTok, Pinterest, and Facebook. Secure OAuth 2.0. AES-256 encrypted tokens.",
  },
};

const platforms = [
  {
    id: "youtube",
    title: "YouTube Shorts Auto-Posting",
    whatWePost: "Short-form vertical video (1080×1920), custom title and description, posted as YouTube Shorts.",
    howWeConnect: "Google OAuth 2.0. Two permissions only:",
    permissions: [
      "Upload videos to your channel",
      "Read your channel name (display only)",
    ],
    neverAccess: "We never access: subscribers, video library, playlists, analytics.",
  },
  {
    id: "instagram",
    title: "Instagram Reels Auto-Posting",
    whatWePost: "Vertical video (1080×1920) published as an Instagram Reel, caption from Persona settings.",
    requirements: "Professional account (Creator or Business), linked to a Facebook Page.",
    howWeConnect: "Meta's Facebook Login. Three permissions:",
    permissions: [
      "Access Instagram account info (ig_user_id)",
      "Publish content on behalf of user",
      "Read Page info (required by Meta's API)",
    ],
    neverAccess: "We do not access: DMs, followers, stories, post performance data.",
  },
  {
    id: "tiktok",
    title: "TikTok Auto-Posting",
    whatWePost: "Vertical video (1080×1920), caption from Persona or Custom Studio settings.",
    howWeConnect: "TikTok OAuth 2.0 with PKCE security. Two permissions:",
    permissions: [
      "Upload and publish videos on behalf of user",
      "Read display name (dashboard display only)",
    ],
    neverAccess: "We never access: followers, video history, messages, analytics.",
  },
  {
    id: "pinterest",
    title: "Pinterest Video Pin Auto-Posting",
    whatWePost: "Video Pin on chosen board, title and description from Persona/custom settings.",
    howWeConnect: "Pinterest OAuth 2.0. Permissions:",
    permissions: [
      "Read boards (board selector UI)",
      "Create pins",
      "Read username (display only)",
    ],
    neverAccess: "",
  },
  {
    id: "facebook",
    title: "Facebook Pages Auto-Posting",
    requirements: "Must be an admin of at least one Facebook Page.",
    whatWePost: "Video post on selected Page, caption from Persona/custom text.",
    howWeConnect: "Meta Facebook Login. Permissions:",
    permissions: [
      "List managed Pages (page selector UI)",
      "Post videos and content to selected Page",
    ],
    neverAccess:
      "We never access: personal profile posts, friend lists, messages, Page analytics.",
  },
];

const securityPoints = [
  "We never store your social media passwords. We only receive a secure token from each platform after you log in.",
  "All tokens are encrypted with AES-256-GCM before being stored. They are never shown in logs or API responses.",
  "We only request the minimum permissions needed to post your videos. Nothing more.",
  "You can disconnect any platform at any time from your Integrations screen. We immediately delete your token.",
  "You can also revoke access directly from each platform's security settings (Google, Meta, TikTok, or Pinterest).",
  "We never post without your permission. Posting only happens when you enable auto-posting on your Persona, or when you manually click \"Share Now\".",
];

export default function IntegrationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "QuotVid Social Media Integrations",
            description: "Social media platforms supported by QuotVid auto-posting",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "YouTube Shorts", url: `${SITE_URL}/integrations#youtube` },
              { "@type": "ListItem", position: 2, name: "Instagram Reels", url: `${SITE_URL}/integrations#instagram` },
              { "@type": "ListItem", position: 3, name: "TikTok", url: `${SITE_URL}/integrations#tiktok` },
              { "@type": "ListItem", position: 4, name: "Pinterest Video Pins", url: `${SITE_URL}/integrations#pinterest` },
              { "@type": "ListItem", position: 5, name: "Facebook Pages", url: `${SITE_URL}/integrations#facebook` },
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Integrations", url: `${SITE_URL}/integrations` },
        ]}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              Connect Your Accounts.{" "}
              <span className="text-gradient-gold">Post Everywhere.</span>{" "}
              Automatically.
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              QuotVid integrates with YouTube, Instagram, TikTok, Pinterest, and Facebook using each platform&apos;s official login system. Your credentials are never stored. Connect once. Post forever.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {HERO_PLATFORMS.map(({ id, label }) => (
                <span
                  key={id}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(226,161,40,0.25)] bg-[rgba(226,161,40,0.06)] px-4 py-2 text-xs sm:text-sm font-medium text-[#E5E7EB]"
                >
                  <SocialPlatformIcon platform={id} size={22} className="rounded-md" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Platform sections */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8 space-y-12 sm:space-y-16">
            {platforms.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-28 rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] p-6 sm:p-8 transition-colors hover:border-[#374151]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <SocialPlatformIcon platform={p.id} size={32} className="rounded-lg" />
                  <h2 className="text-xl sm:text-2xl font-bold text-light-heading">{p.title}</h2>
                </div>

                {p.requirements && (
                  <p className="mb-3 text-xs sm:text-sm text-light-body">
                    <span className="font-semibold text-light-heading">Requirements:</span> {p.requirements}
                  </p>
                )}

                <p className="mb-3 text-xs sm:text-sm text-light-body">
                  <span className="font-semibold text-light-heading">What we post:</span> {p.whatWePost}
                </p>

                <p className="mb-2 text-xs sm:text-sm font-semibold text-light-heading">{p.howWeConnect}</p>
                <ul className="mb-3 space-y-1 pl-1">
                  {p.permissions.map((perm) => (
                    <li key={perm} className="flex items-start gap-2 text-xs sm:text-sm text-light-body">
                      <span className="text-[#e2a128] font-bold mt-0.5">✓</span>
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>

                {p.neverAccess && (
                  <p className="text-xs sm:text-sm text-muted-foreground italic">{p.neverAccess}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Security section */}
        <section id="security" className="bg-section-dark py-14 sm:py-20 scroll-mt-28">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Your Account Security — How We Protect Your Connections
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Security is the foundation of every integration we build.
              </p>
            </div>
            <ul className="space-y-4">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                  <span className="text-[#e2a128] font-bold text-lg leading-none mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-2xl px-3 sm:px-4 text-center md:px-8">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold text-light-heading">
              Ready to post automatically?
            </h2>
            <p className="mb-6 text-sm sm:text-base text-light-body">
              Start free, then connect your accounts on any paid plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.quotvid.com/auth/signup"
                className="rounded-[10px] bg-gradient-gold px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:brightness-90 hover:scale-[1.02] shadow-[var(--shadow-brand)] text-center"
              >
                Start Free — No Credit Card →
              </a>
              <Link
                href="/features"
                className="rounded-[10px] border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:bg-[#1F2937] hover:border-[#4B5563] text-center"
              >
                See all features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
