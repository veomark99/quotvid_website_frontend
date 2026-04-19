import { APP_URL, SITE_URL, absoluteUrl } from "@/lib/site";
import { solutionAbsoluteUrl, type SeoLandingPage } from "@/lib/seo-landing-pages";

// Homepage — WebSite + Organization + SoftwareApplication
export function WebsiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "QuotVid",
              description: "AI-powered quote video generator for content creators",
              inLanguage: "en-US",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "QuotVid",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/quotvid_white_logo.svg"),
                width: 150,
                height: 45,
              },
              sameAs: [
                "https://tiktok.com/@quotvid",
                "https://instagram.com/quotvid",
                "https://youtube.com/@quotvid",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@quotvid.com",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu", "Arabic"],
              },
            },
            {
              "@type": "SoftwareApplication",
              "@id": `${SITE_URL}/#app`,
              name: "QuotVid",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web",
              description:
                "AI-powered quote video generator with auto-posting to YouTube, Instagram, TikTok, Pinterest, and Facebook. Two persona modes, Custom Studio with live phone preview, YouTube background picker, background library, accent colors, font size control, 25 languages with RTL support, 20 categories, 10+ video styles, and cloud video storage.",
              url: SITE_URL,
              screenshot: absoluteUrl("/hero-phones.png"),
              featureList: [
                "AI quote video generation",
                "YouTube Shorts auto-posting",
                "Instagram Reels auto-posting",
                "TikTok auto-posting",
                "Pinterest Video Pin auto-posting",
                "Facebook Pages auto-posting",
                "Custom Studio with live preview",
                "20 content categories",
                "25 languages including RTL",
                "AI Persona Mode: automated daily video generation",
                "YouTube Background Picker: paste URL, pick a 30-second clip",
                "Personal Background Library: reuse clips without re-uploading",
                "Custom Accent Colors: up to 4 brand colors",
                "Font Size Control: Auto, Small, Medium, Large, X-Large",
                "Logo Watermark: position, size, opacity control",
                "Background Music Library + Custom Audio Upload",
                "1080×1920 Vertical Format for TikTok, Reels, Shorts",
                "Download MP4 with Custom File Name",
                "Cloudflare R2 Cloud Video Storage",
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "0",
                highPrice: "269",
                offerCount: 4,
                offers: [
                  { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", description: "5 videos total, watermark on all videos, AI Persona mode, 20 categories, 10+ video styles, 25 languages" },
                  { "@type": "Offer", name: "Monthly", price: "10", priceCurrency: "USD", billingIncrement: "month", description: "Unlimited videos per day, no watermark, Custom Studio with live preview, YouTube backgrounds, background library, accent colors, auto-posting to 5 platforms, custom audio upload" },
                  { "@type": "Offer", name: "Annual", price: "99", priceCurrency: "USD", billingIncrement: "year", description: "Everything in Monthly plus priority support." },
                  { "@type": "Offer", name: "Lifetime", price: "269", priceCurrency: "USD", description: "One-time payment, all features forever, no recurring charges" },
                ],
              },
            },
          ],
        }),
      }}
    />
  );
}

// Homepage FAQ section
export function HomeFaqJsonLd() {
  const faqs = [
    {
      q: "Which platforms can QuotVid post to?",
      a: "QuotVid auto-posts to YouTube Shorts, Instagram Reels, TikTok, Pinterest Video Pins, and Facebook Pages. Connect each platform once via secure OAuth login. Auto-posting is available on all paid plans.",
    },
    {
      q: "Is it safe to connect my social media accounts?",
      a: "Yes. QuotVid uses each platform's official OAuth 2.0 login — the same system used by Buffer, Hootsuite, and every major scheduling tool. We never see or store your password. Your tokens are encrypted with AES-256. Disconnect any platform instantly from your dashboard.",
    },
    {
      q: "Can I post to different platforms at different times?",
      a: "Yes. Set a separate posting time per platform in your local timezone. YouTube at 9am, TikTok at 6pm, Pinterest at 10am — QuotVid converts everything to UTC and handles the rest automatically.",
    },
    {
      q: "What type of videos does QuotVid create?",
      a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for Pinterest, TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template.",
    },
    {
      q: "Do I need video editing skills?",
      a: "None. QuotVid generates and renders everything. Set your persona once — niche, language, style, platforms — and fresh videos are generated and posted automatically every day. No design tools, no timelines, no rendering software.",
    },
    {
      q: "What is the Custom Studio?",
      a: "Custom Studio lets you write your own quote, upload your own background image or video, add custom audio, drag your text anywhere on the canvas, and preview everything on a live phone mockup before generating. Studio videos are stored forever — never auto-deleted.",
    },
    {
      q: "What happens to my videos after 7 days?",
      a: "AI-generated videos auto-delete after 7 days to keep your storage clean. Download them anytime before then. Custom Studio videos are kept forever until you manually delete them.",
    },
    {
      q: "What is the free trial?",
      a: "7 days free. 5 videos per day. All 5 platforms. Full auto-posting included. No credit card required. You see exactly what QuotVid produces for your niche before deciding anything.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your billing settings in one click. You keep access until your current period ends. 7-day money-back guarantee on all paid plans — no questions asked. Email hello@quotvid.com.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// Pricing page — Product with full offers
export function PricingJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "QuotVid",
          description:
            "AI quote video studio for TikTok, Instagram Reels, and YouTube Shorts. Two persona modes, live phone preview, YouTube background picker, 25 languages, 20 categories, 10+ video styles, accent colors, background library, and cloud storage.",
          url: SITE_URL,
          image: absoluteUrl("/hero-phones.png"),
          brand: { "@type": "Brand", name: "QuotVid" },
          offers: [
            {
              "@type": "Offer",
              name: "Free Plan",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${APP_URL}/auth/signup?plan=free`,
              description: "5 videos free, no credit card required, forever. 20 categories, 10+ video styles, 25 languages.",
            },
            {
              "@type": "Offer",
              name: "QuotVid Monthly",
              price: "10",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${APP_URL}/auth/signup?plan=monthly`,
              description: "Unlimited videos per day, no watermark, Custom Studio with live preview, YouTube backgrounds, background library, accent colors, font size control, custom audio upload. Billed monthly.",
            },
            {
              "@type": "Offer",
              name: "QuotVid Annual",
              price: "99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${APP_URL}/auth/signup?plan=annual`,
              description: "Everything in Monthly plus priority support. Billed annually. Saves about 17% vs 12 months at $10/mo ($99 vs $120).",
            },
            {
              "@type": "Offer",
              name: "QuotVid Lifetime",
              price: "269",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${APP_URL}/auth/signup?plan=lifetime`,
              description: "One-time payment, lifetime access, all future features, no recurring charges.",
            },
          ],
        }),
      }}
    />
  );
}

// Pricing page FAQ
export function PricingFaqJsonLd() {
  const faqs = [
    { q: "Do I need video editing skills?", a: "No. QuotVid handles everything automatically. Set your persona once and videos are generated and ready to download." },
    { q: "What platforms are the videos made for?", a: "TikTok, Instagram Reels, and YouTube Shorts. All videos are 1080×1920 vertical format." },
    { q: "Can I use my own logo and branding?", a: "Yes. Upload your logo, choose its corner position, adjust size and opacity, and add your channel name badge. All paid plans include full branding control." },
    { q: "What is the YouTube background feature?", a: "Paste any YouTube URL into the Custom Studio. Watch it, pick your favourite 30-second clip, and QuotVid extracts and uses it as your video background automatically." },
    { q: "Is there a free trial?", a: "Yes — the free plan lets you generate your first 5 videos with no credit card needed. The full pipeline runs: AI quote writing, video render, music, MP4 export." },
    { q: "Can I cancel anytime?", a: "Yes. Monthly plans cancel anytime from your billing settings. Annual plans include a 7-day money-back guarantee." },
    { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
  );
}

// Blog article
export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  slug,
}: {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          datePublished: publishedAt,
          dateModified: publishedAt,
          inLanguage: "en-US",
          author: {
            "@type": "Organization",
            name: "QuotVid",
            url: SITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: "QuotVid",
            logo: {
              "@type": "ImageObject",
              url: absoluteUrl("/quotvid_white_logo.svg"),
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${slug}`,
          },
          url: `${SITE_URL}/blog/${slug}`,
          image: {
            "@type": "ImageObject",
            url: absoluteUrl("/og-image.png"),
            width: 1200,
            height: 630,
          },
        }),
      }}
    />
  );
}

/** Programmatic SEO solution pages — WebPage + FAQPage in one graph */
export function SolutionLandingJsonLd({ page }: { page: SeoLandingPage }) {
  const pageUrl = solutionAbsoluteUrl(page.slug);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: page.h1,
              description: page.description,
              inLanguage: "en-US",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#app` },
            },
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: page.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      }}
    />
  );
}

// Breadcrumb for inner pages
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  );
}
