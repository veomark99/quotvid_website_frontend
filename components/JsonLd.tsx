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
              "@id": "https://www.quotvid.com/#website",
              url: "https://www.quotvid.com",
              name: "QuotVid",
              description: "AI-powered quote video generator for content creators",
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.quotvid.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://www.quotvid.com/#organization",
              name: "QuotVid",
              url: "https://www.quotvid.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.quotvid.com/quotvid_white_logo.svg",
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
              "@id": "https://www.quotvid.com/#app",
              name: "QuotVid",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web",
              description:
                "AI-powered quote video generator for TikTok, Instagram Reels, and YouTube Shorts. Custom Studio with live preview, YouTube background picker, watermark system, and automated daily content generation.",
              url: "https://www.quotvid.com",
              screenshot: "https://www.quotvid.com/hero-phones.png",
              featureList: [
                "AI Persona Mode — Fully Automatic Daily Video Generation",
                "Custom Studio with Live Phone Preview",
                "YouTube Background Picker — Paste URL, Pick 30-Second Clip",
                "Upload Custom Image and Video Backgrounds",
                "Logo Watermark System — Position, Size, Opacity Control",
                "Channel Name Badge Overlay",
                "Background Music Library + Custom Upload",
                "20+ Content Categories",
                "6 Animation Templates",
                "1080×1920 Vertical Format for TikTok, Reels, Shorts",
                "20 Language Support with RTL",
                "Cloudflare R2 Cloud Storage",
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "0",
                highPrice: "269",
                offerCount: 4,
                offers: [
                  { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", description: "5 videos total, watermark on all videos, AI Persona mode" },
                  { "@type": "Offer", name: "Monthly", price: "10", priceCurrency: "USD", billingIncrement: "month", description: "20 videos per day, no watermark, Custom Studio, YouTube backgrounds" },
                  { "@type": "Offer", name: "Annual", price: "99", priceCurrency: "USD", billingIncrement: "year", description: "Everything in Monthly plus unlimited history and priority support" },
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
      q: "What type of videos does QuotVid create?",
      a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template.",
    },
    {
      q: "How many videos do I get?",
      a: "Free plan users get 5 videos total — no credit card required, no time limit. Paid plan users (Monthly, Annual, Lifetime) get up to 20 videos per day.",
    },
    {
      q: "Do I need video editing skills?",
      a: "No. QuotVid handles everything automatically. Set your persona once and videos are generated and ready to download. No design tools, no timelines, no rendering software.",
    },
    {
      q: "What is the Custom Studio?",
      a: "Custom Studio is a full-width two-column interface where you control every aspect of your video: background (upload, YouTube URL, or personal library), watermark and logo, background music, and animation style. Everything updates a live phone preview before you generate.",
    },
    {
      q: "What is the YouTube background feature?",
      a: "Paste any YouTube URL into the Custom Studio. The video loads right in the studio — watch it, pick your favourite 30-second clip, and QuotVid extracts and uses it as your video background automatically. No downloading required.",
    },
    {
      q: "Can I use my own logo and branding?",
      a: "Yes. Upload your logo, choose its corner position, adjust size and opacity, and add your channel name badge. All paid plans include full branding control previewed live before generating.",
    },
    {
      q: "Is there really a free plan with no card required?",
      a: "Yes — get 5 videos completely free, no credit card required, no time limit. You see exactly what QuotVid produces for your niche before deciding anything.",
    },
    {
      q: "Who is QuotVid best for?",
      a: "QuotVid is best for social media content creators, personal brand builders, poetry page owners, and anyone who wants to post consistently on TikTok, Instagram, or YouTube Shorts without spending hours on content creation.",
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
            "AI-powered quote video generator for content creators. Create daily short-form videos for TikTok, Instagram Reels, and YouTube Shorts.",
          url: "https://www.quotvid.com",
          image: "https://www.quotvid.com/hero-phones.png",
          brand: { "@type": "Brand", name: "QuotVid" },
          offers: [
            {
              "@type": "Offer",
              name: "Free Plan",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://app.quotvid.com/auth/signup?plan=free",
              description: "5 videos free, no credit card required, forever",
            },
            {
              "@type": "Offer",
              name: "QuotVid Monthly",
              price: "10",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://app.quotvid.com/auth/signup?plan=monthly",
              description: "Up to 20 videos per day, no watermark, priority generation. Billed monthly.",
            },
            {
              "@type": "Offer",
              name: "QuotVid Annual",
              price: "99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://app.quotvid.com/auth/signup?plan=annual",
              description: "Everything in Monthly, unlimited history, early access, priority support. Billed annually.",
            },
            {
              "@type": "Offer",
              name: "QuotVid Lifetime",
              price: "269",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://app.quotvid.com/auth/signup?plan=lifetime",
              description: "One-time payment, lifetime access, no recurring charges.",
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
            url: "https://www.quotvid.com",
          },
          publisher: {
            "@type": "Organization",
            name: "QuotVid",
            logo: {
              "@type": "ImageObject",
              url: "https://www.quotvid.com/quotvid_white_logo.svg",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.quotvid.com/blog/${slug}`,
          },
          url: `https://www.quotvid.com/blog/${slug}`,
          image: "https://www.quotvid.com/og-image.png",
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
