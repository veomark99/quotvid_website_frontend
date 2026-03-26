import { APP_URL, SITE_URL } from "@/lib/site";

export type SeoLandingPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

/** Programmatic SEO — one authoritative page per high-intent keyword cluster. */
export const SEO_LANDING_PAGES: SeoLandingPage[] = [
  {
    slug: "quote-to-video",
    title: "Quote to Video — Turn Any Quote Into TikTok & Reels Videos | QuotVid",
    description:
      "Quote to video in minutes: AI writes the line, adds music & motion, and exports 1080×1920 MP4 for TikTok, Instagram Reels, and YouTube Shorts. Start free on QuotVid.",
    keywords: [
      "quote to video",
      "turn quotes into videos",
      "quote video maker",
      "AI quote to video",
      "short form quote video",
    ],
    h1: "Quote to Video, Without Editing Software",
    intro:
      "If you searched “quote to video,” you want a repeatable way to turn text into vertical clips that look intentional on TikTok, Instagram Reels, and YouTube Shorts. QuotVid is built for that workflow: AI drafts the quote, applies your category and style, and renders a finished MP4 you can post the same day—no timeline, no keyframes, no After Effects.",
    sections: [
      {
        heading: "Why “quote to video” is a full workflow, not a single template",
        body:
          "A quote-only post rarely carries enough motion to hold attention. A real quote-to-video pipeline pairs typography, pacing, background, and audio so the viewer stays for the full clip. QuotVid handles those layers together: category-aware copy, template matching, background music, and export at 1080×1920 so your content fits every major short-form feed without rework.",
      },
      {
        heading: "From idea to upload: what happens inside QuotVid",
        body:
          "Pick a niche category (stoic, business, mindset, poetry, and more), choose a visual style, set language, and generate. In Custom Studio you can refine backgrounds—including optional YouTube clip selection on paid plans—brand colors, font scale, watermark, and a live phone preview before you burn a render. That means fewer wasted exports and a consistent look for channels that post daily.",
      },
      {
        heading: "Who quote-to-video automation helps most",
        body:
          "Motivation pages, poetry accounts, faith and mindfulness creators, and multilingual channels all benefit when quote-to-video is automated: you keep publishing cadence while the tool handles layout and render. If you are comparing manual editors, remember the hidden cost is not software—it is the 30–45 minutes per video you spend on tasks QuotVid collapses into a single generate action.",
      },
    ],
    faqs: [
      {
        q: "Is QuotVid only for English quotes?",
        a: "No. QuotVid supports 25 languages with RTL options for scripts like Arabic and Urdu, so quote-to-video works for global audiences—not just Latin characters.",
      },
      {
        q: "Do I need editing experience for quote to video?",
        a: "No. You choose category, style, and branding; QuotVid generates the video. Custom Studio adds optional control without a traditional timeline editor.",
      },
      {
        q: "What format are quote videos exported in?",
        a: "1080×1920 vertical MP4—ready for TikTok, Instagram Reels, and YouTube Shorts.",
      },
    ],
  },
  {
    slug: "text-to-video-quotes",
    title: "Text to Video Quotes — AI Quote Videos for Social | QuotVid",
    description:
      "Create text to video quotes in 1080×1920: AI turns your brief into a full short-form clip with typography, music, and templates. Free plan available—try QuotVid today.",
    keywords: [
      "text to video quotes",
      "text to video quote maker",
      "quote text video",
      "AI text to video quotes",
      "short quote videos",
    ],
    h1: "Text to Video Quotes Built for Short-Form Feeds",
    intro:
      "“Text to video quotes” describes the jump from plain words on a screen to a finished vertical video people actually watch. QuotVid starts from your niche and language, generates quote text that fits the category, and renders motion-ready output—so you are not manually retyping captions in three different tools.",
    sections: [
      {
        heading: "How text becomes a quote video (not just a caption file)",
        body:
          "Many tools stop at captions on top of stock footage. QuotVid treats text-to-video quotes as a designed object: readable type hierarchy, safe margins for mobile, background that supports the mood, and audio that matches the pacing. The result reads as a native short—not a repurposed blog line with a waveform slapped on.",
      },
      {
        heading: "Templates, categories, and brand consistency",
        body:
          "Twenty categories and 10+ styles help text-to-video quotes stay on-brand when you post every day. Pair that with accent colors, optional logo watermark, and Custom Studio preview, and your audience recognizes your channel before they read the first word.",
      },
      {
        heading: "Internal links to go deeper",
        body:
          "Explore the full feature set on our features page, compare plans on pricing, or read the blog for growth tactics. If your focus is pure automation language, see our quote-to-video solution page as well.",
      },
    ],
    faqs: [
      {
        q: "Can I control the exact quote text?",
        a: "Yes. Custom Studio lets you edit copy before generating so text-to-video quotes match your voice while keeping layout and motion consistent.",
      },
      {
        q: "Does QuotVid add music automatically?",
        a: "Yes—there is a built-in music library with preview. Paid plans can also upload custom audio.",
      },
      {
        q: "Is there a free tier for text-to-video quotes?",
        a: "Yes. The free plan includes a limited number of full renders so you can evaluate quality before upgrading.",
      },
    ],
  },
  {
    slug: "motivational-quote-video-maker",
    title: "Motivational Quote Video Maker — Daily Clips for TikTok & Reels | QuotVid",
    description:
      "Motivational quote video maker with AI personas, 20 categories, 10+ styles, and 1080×1920 export. Automate daily motivational shorts—start free on QuotVid.",
    keywords: [
      "motivational quote video maker",
      "motivational quote videos",
      "motivation video maker",
      "daily motivation videos",
      "motivational reels maker",
    ],
    h1: "Motivational Quote Video Maker for Daily Posting",
    intro:
      "Motivation channels live or die on consistency. A motivational quote video maker should remove production drag: you set the niche once, keep branding locked, and ship vertical videos on a schedule. QuotVid’s AI Persona mode is aimed at that use case—automated drafts plus professional render—while Custom Studio gives you fine control when a post needs a unique background or exact wording.",
    sections: [
      {
        heading: "What makes a motivational quote video perform",
        body:
          "Strong motivation clips pair a credible line with visual calm or controlled energy—too much clutter and viewers swipe. QuotVid’s templates are tuned for quote-first layouts: legible type, balanced motion, and backgrounds that support the tone. That matters more than a single clever font because retention is driven by readability in the first second.",
      },
      {
        heading: "Daily volume without daily editing",
        body:
          "If you post every day, manual editing does not scale. Automating motivational quote videos shifts your time from production to positioning: thumbnails, hooks, and community replies. QuotVid handles render-heavy work so your calendar stays full without burning out your evenings.",
      },
      {
        heading: "Related workflows creators combine",
        body:
          "Teams often pair motivational content with broader quote-to-video workflows and multilingual quote pages. If you publish in more than one language, duplicate personas per language so typography and RTL settings stay correct.",
      },
    ],
    faqs: [
      {
        q: "Can I remove the watermark for brand-safe motivation content?",
        a: "Paid plans remove the QuotVid watermark so your motivational quote videos look fully native to your brand.",
      },
      {
        q: "Are backgrounds limited to stock?",
        a: "Free and paid tiers include curated visuals; paid Custom Studio adds YouTube clip backgrounds and your own uploads.",
      },
      {
        q: "Where do I start?",
        a: `Create a free account at ${APP_URL}/auth/signup, pick a motivation-friendly category, and generate your first clips in minutes.`,
      },
    ],
  },
];

export function getSeoLandingBySlug(slug: string): SeoLandingPage | undefined {
  return SEO_LANDING_PAGES.find((p) => p.slug === slug);
}

export function getAllSeoLandingSlugs(): string[] {
  return SEO_LANDING_PAGES.map((p) => p.slug);
}

export function solutionPath(slug: string): string {
  return `/solutions/${slug}`;
}

export function solutionAbsoluteUrl(slug: string): string {
  return `${SITE_URL}${solutionPath(slug)}`;
}
