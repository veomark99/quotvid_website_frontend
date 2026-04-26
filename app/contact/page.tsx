import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { OG_IMAGE_PATH, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — QuotVid Support & Inquiries",
  description:
    "Get in touch with the QuotVid team. We reply to all support, billing, and partnership inquiries within 24–48 hours.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us — QuotVid Support & Inquiries",
    description: "Get in touch with the QuotVid team. We reply to all support, billing, and partnership inquiries within 24–48 hours.",
    url: `${SITE_URL}/contact`,
    images: [{ url: absoluteUrl(OG_IMAGE_PATH), width: 1200, height: 630, alt: "Contact QuotVid" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotvid",
    title: "Contact Us — QuotVid Support & Inquiries",
    description:
      "Get in touch with the QuotVid team. We reply to all support, billing, and partnership inquiries within 24–48 hours.",
    images: [absoluteUrl(OG_IMAGE_PATH)],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              We&apos;d Love to <span className="text-gradient-gold">Hear From You</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Questions, feedback, bug reports, or partnership ideas — we read every message and reply within 24–48 hours.
            </p>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8">
            <div className="mb-12 sm:mb-16 grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                { label: "Support Inquiries", desc: "Account issues, billing, or technical problems", email: "support@quotvid.com" },
                { label: "General & Partnerships", desc: "Press, partnerships, or general questions", email: "hello@quotvid.com" },
              ].map((c) => (
                <div key={c.email} className="rounded-[14px] border border-[#1F2937] bg-[rgba(255,255,255,0.02)] p-5 sm:p-8 transition-colors hover:border-[#374151]">
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-light-heading">{c.label}</h3>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-light-body">{c.desc}</p>
                  <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#e2a128] hover:text-[#f0b94a] hover:underline break-all">
                    ✉ {c.email}
                  </a>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
