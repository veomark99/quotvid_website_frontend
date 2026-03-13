import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "QuotVid Privacy Policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.quotvid.com/privacy" },
  robots: { index: true, follow: false },
};

const sections = [
  { title: "1. Introduction", content: `QuotVid ("we", "our", "us") operates the website quotvid.com and the web application at app.quotvid.com. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services.\n\nBy using QuotVid, you agree to the collection and use of information in accordance with this policy.` },
  { title: "2. Information We Collect", content: `Information you provide directly:\n- Full name and email address (collected at registration)\n- Password (stored in hashed form — we never store plain text passwords)\n- Billing information (processed by Lemon Squeezy — we do not store card details)\n- Persona preferences (content category, language, video style settings)\n\nInformation collected automatically:\n- Usage data (pages visited, features used, videos generated)\n- Device and browser information\n- IP address\n- Session data and authentication tokens` },
  { title: "3. How We Use Your Information", content: `We use your information to:\n- Create and manage your QuotVid account\n- Generate AI quote videos based on your persona settings\n- Send transactional emails (account verification, password reset, billing receipts)\n- Improve our AI models and video generation quality\n- Respond to support requests\n- Comply with legal obligations\n\nWe do not sell your personal data to third parties. We do not use your data for advertising purposes.` },
  { title: "4. Third-Party Services", content: `QuotVid uses the following third-party services that may process your data:\n\nLemon Squeezy — Payment processing and subscription management.\n\nResend — Transactional email delivery.\n\nGroq — AI language model API used to generate quote content.\n\nRailway — Cloud hosting provider where our application and database are hosted.` },
  { title: "5. Data Storage & Security", content: `Your data is stored on secure servers hosted by Railway. We implement industry-standard security measures including:\n- Encrypted connections (HTTPS/TLS)\n- Hashed password storage (bcrypt)\n- JWT-based authentication with expiry\n- Regular security reviews` },
  { title: "6. Data Retention", content: `We retain your account data for as long as your account is active. If you delete your account, your personal data is deleted within 30 days, except where retention is required by law.\n\nGenerated videos stored on our servers are deleted after 90 days. Downloaded videos you have saved locally are yours to keep.` },
  { title: "7. Your Rights", content: `Depending on your location, you may have the following rights:\n- Access: Request a copy of your personal data\n- Correction: Request correction of inaccurate data\n- Deletion: Request deletion of your account and data\n- Portability: Request your data in a portable format\n- Objection: Object to certain types of data processing\n\nTo exercise any of these rights, email us at: hello@quotvid.com` },
  { title: "8. Cookies", content: `QuotVid uses essential cookies only:\n- Authentication session cookies (required for login)\n- Security tokens\n\nWe do not use advertising cookies or third-party tracking cookies.` },
  { title: "9. Children's Privacy", content: `QuotVid is not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, contact us immediately.` },
  { title: "10. Changes to This Policy", content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by displaying a notice in the application. Continued use of QuotVid after changes constitutes acceptance of the updated policy.` },
  { title: "11. Contact", content: `For privacy-related questions or to exercise your rights:\nhello@quotvid.com\nquotvid.com` },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last Updated: March 2026</p>
          </div>
        </section>
        <section className="bg-section-light py-12 sm:py-16">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8 space-y-10 sm:space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-4 text-lg sm:text-xl font-bold text-light-heading">{s.title}</h2>
                <p className="text-xs sm:text-sm leading-relaxed text-light-body whitespace-pre-line">{s.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
