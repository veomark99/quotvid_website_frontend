import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "General Question", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-section-dark pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto max-w-3xl px-3 sm:px-4 text-center md:px-8">
            <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl">
              We'd Love to <span className="text-gradient-gold">Hear From You</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground">
              Questions, feedback, bug reports, or partnership ideas — we read every message and reply within 24–48 hours.
            </p>
          </div>
        </section>

        <section className="bg-section-light py-14 sm:py-20">
          <div className="container mx-auto max-w-4xl px-3 sm:px-4 md:px-8">
            {/* Email cards */}
            <div className="mb-12 sm:mb-16 grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                { label: "Support Inquiries", desc: "Account issues, billing, or technical problems", email: "support@quotvid.com" },
                { label: "General & Partnerships", desc: "Press, partnerships, or general questions", email: "hello@quotvid.com" },
              ].map((c) => (
                <div key={c.email} className="rounded-xl border border-primary/10 bg-foreground/[0.02] p-5 sm:p-8">
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-light-heading">{c.label}</h3>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-light-body">{c.desc}</p>
                  <a href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline break-all">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> {c.email}
                  </a>
                </div>
              ))}
            </div>

            {/* Contact form */}
            {submitted ? (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center">
                <p className="text-base sm:text-lg font-semibold text-light-heading">Thanks for reaching out!</p>
                <p className="mt-2 text-sm text-light-body">We'll get back to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-primary/10 bg-foreground/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-light-heading outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-primary/10 bg-foreground/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-light-heading outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-primary/10 bg-foreground/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-light-heading outline-none focus:border-primary/40"
                  >
                    {["General Question", "Billing", "Bug Report", "Partnership", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Message *</label>
                  <textarea
                    required
                    minLength={20}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-primary/10 bg-foreground/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-light-heading outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
