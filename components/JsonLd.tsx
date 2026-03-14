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
                "AI-powered quote video generator. Creates 1080×1920 vertical videos for TikTok, Instagram Reels, and YouTube Shorts in 20 languages.",
              url: "https://app.quotvid.com",
              screenshot: "https://www.quotvid.com/hero-phones.png",
              featureList: [
                "AI quote generation in 9 content niches",
                "9 professional video templates",
                "20 language support with RTL",
                "Social media auto-posting",
                "Daily video automation",
                "1080×1920 vertical format",
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "0",
                highPrice: "269",
                offerCount: 4,
                offers: [
                  { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
                  { "@type": "Offer", name: "Monthly", price: "10", priceCurrency: "USD", billingIncrement: "month" },
                  { "@type": "Offer", name: "Annual", price: "99", priceCurrency: "USD", billingIncrement: "year" },
                  { "@type": "Offer", name: "Lifetime", price: "269", priceCurrency: "USD" },
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
      a: "Free plan users get 5 videos total — no credit card required, no time limit. Paid plan users get up to 20 videos per day.",
    },
    {
      q: "Which languages are supported?",
      a: "QuotVid supports 20 languages including English, Urdu, Arabic, Spanish, Hindi, Persian, French, German, Russian, Chinese, Japanese, Korean, Turkish, and Indonesian. Arabic, Urdu, and Persian include full right-to-left text rendering.",
    },
    {
      q: "Do I need design or video editing skills?",
      a: "None at all. Set your persona once (language, niche, template, music), and QuotVid generates everything automatically.",
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
    { q: "Can I cancel anytime?", a: "Yes. Cancel your subscription at any time from your billing settings. You retain access until the end of your billing period." },
    { q: "Is the free plan really free forever?", a: "Yes — the Free plan has no time limit. You get 5 videos with no credit card required, forever." },
    { q: "Do you offer a refund?", a: "Yes. We offer a 7-day money-back guarantee on all paid plans. Email hello@quotvid.com within 7 days of payment." },
    { q: "Can I upgrade or downgrade later?", a: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings." },
    { q: "What payment methods do you accept?", a: "All major credit cards (Visa, Mastercard, Amex) and PayPal via Lemon Squeezy." },
    { q: "Is there an annual plan?", a: "Yes — the QuotVid Annual plan is $99/year and saves 18% vs monthly. It includes everything in Monthly plus unlimited video history, early access to new features, and priority support." },
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
