"use client";

import { useState } from "react";

type FormState = { name: string; email: string; subject: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "General Question", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center">
        <p className="text-base sm:text-lg font-semibold text-light-heading">Thanks for reaching out!</p>
        <p className="mt-2 text-sm text-light-body">We&apos;ll get back to you within 24–48 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-lg border border-primary/20 bg-foreground/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-light-heading outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Full Name *</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Email Address *</label>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Subject</label>
        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass}>
          {["General Question", "Billing", "Bug Report", "Partnership", "Other"].map((o) => (
            <option key={o} style={{ backgroundColor: "#f5f7fa", color: "#1b2540" }}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-xs sm:text-sm font-medium text-light-heading">Message *</label>
        <textarea required minLength={20} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} />
      </div>
      {status === "error" && <p className="text-xs text-destructive">Something went wrong. Please email us directly at hello@quotvid.com</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto rounded-xl bg-gradient-gold px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
