import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — How QuotVid Protects Your Data & Social Media Connections | QuotVid",
  description:
    "QuotVid's privacy policy covers how we handle your data, OAuth tokens for YouTube, Instagram, TikTok, Pinterest, and Facebook integrations, AES-256 encryption, video retention, and your GDPR rights.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Introduction",
    content: `QuotVid ("we", "our", "us") operates the website quotvid.com and the web application at app.quotvid.com. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services — including our social media auto-posting integrations with YouTube, Instagram, TikTok, Pinterest, and Facebook.\n\nBy using QuotVid, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `Information you provide directly:\n- Full name and email address (collected at registration)\n- Password (stored in hashed form using bcrypt — we never store plain text passwords)\n- Billing information (processed by Lemon Squeezy — we do not store card details)\n- Persona settings (content category, language, video style, watermark, color preferences)\n- Uploaded content (background videos, background images, audio files, logo images)\n\nFrom social platform connections (only when you connect a platform):\n- Platform display name and account/channel ID (display only — shown in your dashboard)\n- OAuth access and refresh tokens (encrypted with AES-256-GCM before storage — never logged, never visible in API responses)\n- Facebook Pages list (for the page selector UI)\n- Pinterest board list (for the board selector UI)\n\nWe do NOT collect: social media passwords, follower or friend lists, direct messages, post history outside QuotVid, video analytics, audience demographic data.\n\nInformation collected automatically:\n- Usage data (pages visited, features used, videos generated)\n- Device and browser information\n- IP address (stored only as part of OAuth state validation records, not logged persistently)\n- JWT authentication tokens (stored in browser memory — no persistent cookies)`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information to:\n- Create and manage your QuotVid account\n- Generate AI quote videos based on your persona settings\n- Post videos to connected social media platforms on your behalf and on your schedule\n- Send transactional emails (account verification, password reset, billing receipts)\n- Improve our AI models and video generation quality\n- Respond to support requests\n- Comply with legal obligations\n\nWe do not sell your personal data to third parties. We do not use your data for advertising purposes.`,
  },
  {
    title: "4. Social Media Platform Integrations",
    content: `When you connect a social media account, we use that connection only to post your generated videos. Here is exactly what we access per platform:\n\nYouTube: We use the videos.insert API to upload your videos as YouTube Shorts. We store your channel_id and channel_title for display in your dashboard. We do not access your video library, subscriber list, playlists, or analytics.\n\nInstagram: We use the media container and publish API to post your videos as Instagram Reels. We store your ig_user_id. We do not access DMs, follower lists, stories, or post performance data.\n\nTikTok: We use the publish API to post your videos. We store your open_id and display name. We do not access follower lists, video history, messages, or analytics.\n\nPinterest: We use the pins API to create Video Pins on your boards. We store your user_id and board list (for the board selector). The board list is fetched at connection time and refreshed as needed.\n\nFacebook Pages: We use the Page video API to post videos to your selected Page. We store a Page access token (encrypted with AES-256-GCM), page_id, and page_name. We do not access your personal timeline, friend lists, messages, or Page analytics.\n\nDisconnecting: When you disconnect a platform from your Integrations screen, your token is immediately and permanently deleted from our systems. We lose all access to that account. Posts already published on the platform remain there per that platform's policies.`,
    link: { text: "View all integrations →", href: "/integrations" },
  },
  {
    title: "5. Third-Party Services",
    content: `QuotVid uses the following third-party services that may process your data:\n\nLemon Squeezy — Payment processing and subscription management.\n\nCloudflare R2 — Secure cloud storage and CDN for your generated videos, uploaded backgrounds, and audio files.\n\nOpenAI / Anthropic — AI language model APIs used to generate quote content. Only prompt text (category, language, style) is sent — no personal data is included.\n\nRailway — Cloud hosting provider where our application and database are hosted.\n\nResend — Transactional email delivery.\n\nYouTube / Meta / TikTok / Pinterest APIs — Used only when you have connected those platforms. No data is sent to these APIs beyond what is required to post your video.\n\nNo data is sold to advertisers or data brokers.`,
  },
  {
    title: "6. Data Storage & Security",
    content: `Your data is stored on secure servers hosted by Railway. We implement the following security measures:\n- Encrypted connections (HTTPS/TLS for all traffic)\n- Hashed password storage (bcrypt with cost factor 12)\n- AES-256-GCM encryption for all OAuth platform tokens\n- JWT-based authentication with refresh token rotation\n- HMAC-SHA256 signed state parameters for OAuth flows\n- PKCE (Proof Key for Code Exchange) on TikTok OAuth\n- Regular security reviews`,
  },
  {
    title: "7. Video Retention",
    content: `AI-generated videos (created via AI Persona mode): Automatically soft-deleted after 7 days. The expiry date is visible in your Generated Videos list. Download your favorites before they expire.\n\nCustom Studio videos (created via Custom Studio): Stored indefinitely until you delete them. These are never auto-deleted.\n\nAccount deletion: All your videos are deleted from Cloudflare R2 storage within 30 days of account deletion.\n\nNote: Videos already published to social media platforms remain on those platforms after deletion from QuotVid. To remove them from a platform, you must delete them directly on that platform.`,
  },
  {
    title: "8. Data Retention",
    content: `We retain your account data for as long as your account is active. If you delete your account:\n- Your account is soft-deleted immediately (you lose access)\n- Personal data and videos are hard-deleted within 90 days\n- OAuth tokens for connected platforms are deleted immediately upon account deletion\n\nWe may retain some data longer where required by law (e.g., billing records for tax purposes).`,
  },
  {
    title: "9. Your Rights (GDPR and Similar)",
    content: `Depending on your location, you may have the following rights:\n- Access: Request a copy of your personal data\n- Correction: Request correction of inaccurate data\n- Deletion: Request deletion of your account and data\n- Portability: Request your data in a portable format\n- Objection: Object to certain types of data processing\n- Withdraw consent: Disconnect any social platform at any time\n\nTo exercise any of these rights, email us at: hello@quotvid.com`,
  },
  {
    title: "10. Cookies",
    content: `QuotVid uses JWT-based authentication stored in browser memory. We do not use persistent session cookies for authentication.\n\nWe do not use advertising cookies, tracking pixels, or third-party analytics cookies. Only strictly necessary functional tokens are used.`,
  },
  {
    title: "11. Children's Privacy",
    content: `QuotVid is not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us immediately at hello@quotvid.com.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by displaying a notice in the application. Continued use of QuotVid after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "13. Contact",
    content: `For privacy-related questions or to exercise your rights:\nhello@quotvid.com\nquotvid.com`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: April 2026</p>
          </div>
        </section>
        <section className="bg-section-light py-12 sm:py-16">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8 space-y-10 sm:space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 text-lg sm:text-xl font-bold text-light-heading">{s.title}</h2>
                <p className="text-xs sm:text-sm leading-relaxed text-light-body whitespace-pre-line">{s.content}</p>
                {"link" in s && s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-3 inline-block text-xs sm:text-sm text-primary hover:underline"
                  >
                    {s.link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
