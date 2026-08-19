import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUBJECTS = new Set(["General Question", "Billing", "Bug Report", "Partnership", "Other"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function clientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function pruneHits(now: number): void {
  if (hits.size < 4000) return;
  for (const [key, times] of hits) {
    const recent = times.filter((t) => now - t < WINDOW_MS);
    if (recent.length) hits.set(key, recent);
    else hits.delete(key);
  }
}

function allow(key: string): boolean {
  const now = Date.now();
  pruneHits(now);
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

function clean(value: unknown, max: number): string {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Mail is not configured" }, { status: 503 });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const name = clean((body as { name?: unknown }).name, 80);
    const email = clean((body as { email?: unknown }).email, 120).toLowerCase();
    const subject = clean((body as { subject?: unknown }).subject, 40);
    const message = clean((body as { message?: unknown }).message, 4000);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: "Message is too short" }, { status: 400 });
    }
    if (!SUBJECTS.has(subject)) {
      return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
    }

    const ip = clientIp(req);
    if (!allow(`ip:${ip}`) || !allow(`email:${email}`)) {
      return NextResponse.json({ error: "Too many messages. Try again in an hour." }, { status: 429 });
    }

    await resend.emails.send({
      from: "QuotVid Contact <noreply@quotvid.com>",
      to: "hello@quotvid.com",
      reply_to: email,
      subject: `[Contact] ${subject} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
