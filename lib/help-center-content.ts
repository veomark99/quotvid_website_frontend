/**
 * Single source for Help Center: six topic groups, unique articles (no duplicates).
 * Each item opens in a <details> block on /help#slug for deep links.
 */

export type HelpArticle = {
  slug: string;
  title: string;
  body: string;
};

export type HelpCategory = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  articles: HelpArticle[];
};

export const helpCategories: HelpCategory[] = [
  {
    id: "getting-started",
    icon: "🚀",
    title: "Getting started",
    desc: "New to QuotVid? Start here.",
    articles: [
      {
        slug: "create-first-video",
        title: "How to create your first video",
        body: "Sign up for a free account, complete onboarding, then open AI Persona or Custom Studio. Pick a category, language, and template, add optional branding, and click generate. Your first five videos are free with no card required.",
      },
      {
        slug: "setup-persona",
        title: "Setting up your content persona",
        body: "A persona stores your category, language, template, fonts, colors, watermark, and music defaults. You can maintain separate personas for different channels or languages. Changes apply to the next videos you generate in that persona.",
      },
      {
        slug: "content-niches",
        title: "Understanding content niches",
        body: "Categories (Stoic, Business, Poetry, and others) help the app match tone and template style to your audience. Pick the niche that best fits your page; you can change it anytime without losing past videos.",
      },
      {
        slug: "supported-languages",
        title: "Supported languages guide",
        body: "QuotVid supports many languages with automatic font and layout choices. Right-to-left scripts (such as Arabic and Persian) render with appropriate typography. Choose your language in persona or Custom Studio before generating.",
      },
      {
        slug: "download-videos",
        title: "How to download your videos",
        body: "When a video finishes rendering, open the Videos list, select your file, and download the MP4. Completed files stay available in your account for access from any device you use to log in.",
      },
    ],
  },
  {
    id: "account-billing",
    icon: "💳",
    title: "Account and billing",
    desc: "Plans, payments, and your account.",
    articles: [
      {
        slug: "free-plan",
        title: "What the free plan includes",
        body: "The free plan includes five total videos, full access to categories and templates, and a watermark on exports so you can evaluate quality before upgrading. No credit card is required to start.",
      },
      {
        slug: "upgrade-plan",
        title: "How to upgrade your plan",
        body: "Open billing or pricing from your account, choose Monthly, Annual, or Lifetime, and complete checkout through our payment provider. Paid plans remove the watermark and raise daily generation limits according to your plan.",
      },
      {
        slug: "cancel-subscription",
        title: "Canceling your subscription",
        body: "You can cancel a recurring plan from billing settings. You keep access until the end of the paid period. Download any videos you need before the period ends if you are not renewing.",
      },
      {
        slug: "refund-policy",
        title: "Money-back window",
        body: "Annual subscriptions include a short money-back window listed at checkout. Monthly plans can be canceled before renewal without a long-term commitment. See the latest terms on the pricing page for current policy text.",
      },
      {
        slug: "payment-methods",
        title: "Accepted payment methods",
        body: "We accept major cards and other methods shown at checkout via our payment partner. Receipts and invoices are available from your billing portal after purchase.",
      },
    ],
  },
  {
    id: "video-generation",
    icon: "🎬",
    title: "Video generation",
    desc: "How QuotVid builds your videos.",
    articles: [
      {
        slug: "ai-quote-generation",
        title: "How AI generates quotes",
        body: "In AI Persona mode, the system writes on-brand quote text from your category and language settings. In Custom Studio you can paste your own text. Either way, rendering applies your template, background, and typography choices.",
      },
      {
        slug: "video-templates",
        title: "Choosing and changing templates",
        body: "Templates control motion and layout. The app can suggest options that fit your category. Switch templates in persona settings or per video in Custom Studio, and use the live preview to check composition before you render.",
      },
      {
        slug: "background-music",
        title: "Background music options",
        body: "Pick a track from the built-in library or upload your own audio where your plan allows. Preview audio in the studio before generating so the mood matches your quote.",
      },
      {
        slug: "rtl-languages",
        title: "RTL languages (Arabic, Persian, and similar)",
        body: "For right-to-left scripts, QuotVid lays out text and punctuation in reading order with fonts suited to each language. Set the language in your persona or studio so captions and line breaks behave correctly.",
      },
      {
        slug: "video-specs",
        title: "Video format (1080×1920)",
        body: "Exports are vertical 1080×1920 MP4, ready for TikTok, Instagram Reels, and YouTube Shorts. File naming options in the app help you organize batches for posting.",
      },
    ],
  },
  {
    id: "social-posting",
    icon: "📲",
    title: "Social posting",
    desc: "Schedules and connected accounts.",
    articles: [
      {
        slug: "connect-tiktok",
        title: "Connecting TikTok",
        body: "Follow the in-app prompts to connect your TikTok account when posting or scheduling is available for your plan. Permissions are used only to post content you approve.",
      },
      {
        slug: "connect-instagram",
        title: "Connecting Instagram for Reels",
        body: "Connect Meta or Instagram as guided in the product. Requirements can change with platform policy; the app shows the current connection steps.",
      },
      {
        slug: "connect-youtube",
        title: "YouTube Shorts posting",
        body: "Where supported, link your YouTube channel to publish Shorts-format uploads. You can always download MP4 files and upload manually from YouTube Studio.",
      },
      {
        slug: "auto-schedule",
        title: "How daily auto-schedule works",
        body: "With AI Persona and an active schedule, new videos can be generated on a cadence you set. Review your queue and posting windows so they match your audience timezone.",
      },
      {
        slug: "bulk-generation",
        title: "Bulk generation",
        body: "Batch or daily flows create multiple videos from your persona rules. Check how many runs are queued on the dashboard so you only generate what you intend.",
      },
    ],
  },
  {
    id: "brand-kit",
    icon: "🏷️",
    title: "Brand kit",
    desc: "Logo, colors, and on-screen identity.",
    articles: [
      {
        slug: "logo-watermark",
        title: "Adding your logo watermark",
        body: "Upload a PNG with transparency, then set corner position, size, and opacity. The live phone preview shows how the logo sits over your quote and background.",
      },
      {
        slug: "channel-name",
        title: "Channel name overlay",
        body: "Add a short handle or channel label. Keep it readable at small sizes; the preview helps you avoid overlap with quote text.",
      },
      {
        slug: "brand-position",
        title: "Position and opacity",
        body: "Drag or use numeric controls where available. Balance visibility with distraction: lower opacity often works on busy backgrounds.",
      },
      {
        slug: "persona-brand",
        title: "Per-persona brand settings",
        body: "Each persona remembers its own logo, colors, and typography. Switch personas when you manage more than one brand or language channel.",
      },
    ],
  },
  {
    id: "technical",
    icon: "🛠️",
    title: "Technical help",
    desc: "Troubleshooting and performance.",
    articles: [
      {
        slug: "slow-generation",
        title: "Why is my video taking long?",
        body: "Rendering queues by server load and video length. Wait times vary; leave the tab open or check the Videos list for status. If a job fails, retry from the app or contact support with the job time.",
      },
      {
        slug: "download-quality",
        title: "Download quality and MP4 issues",
        body: "Use a stable connection for downloads. If a file will not play, re-download or regenerate. Ensure your browser allows downloads from the app domain.",
      },
      {
        slug: "login-issues",
        title: "Login and access problems",
        body: "Reset your password from the sign-in page, check spam for verification mail, and try an incognito window to rule out extensions. Contact support if your account email changed.",
      },
      {
        slug: "contact-support",
        title: "Contact support",
        body: "Use the contact form or support email from the site footer. Include your account email, approximate time of the issue, and any error message shown in the app.",
      },
    ],
  },
];
