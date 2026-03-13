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
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.quotvid.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://www.quotvid.com/#organization",
              name: "QuotVid",
              url: "https://www.quotvid.com",
              logo: "https://www.quotvid.com/quotvid_white_logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@quotvid.com",
                contactType: "customer service",
              },
            },
            {
              "@type": "SoftwareApplication",
              name: "QuotVid",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free trial available",
              },
              url: "https://app.quotvid.com",
            },
          ],
        }),
      }}
    />
  );
}

export function PricingJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "QuotVid",
          description: "AI-powered quote video generator",
          offers: [
            {
              "@type": "Offer",
              name: "Free Plan",
              price: "0",
              priceCurrency: "USD",
              description: "5 videos free, no credit card needed, forever",
            },
            {
              "@type": "Offer",
              name: "QuotVid Monthly",
              price: "10",
              priceCurrency: "USD",
              billingIncrement: "month",
              description: "Up to 20 videos per day, no watermark, priority generation",
            },
            {
              "@type": "Offer",
              name: "QuotVid Annual",
              price: "99",
              priceCurrency: "USD",
              billingIncrement: "year",
              description: "Everything in Monthly, unlimited history, early access, priority support",
            },
            {
              "@type": "Offer",
              name: "QuotVid Lifetime",
              price: "269",
              priceCurrency: "USD",
              description: "One-time payment, lifetime access, no recurring charges",
            },
          ],
        }),
      }}
    />
  );
}

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
          author: { "@type": "Organization", name: "QuotVid" },
          publisher: {
            "@type": "Organization",
            name: "QuotVid",
            logo: "https://www.quotvid.com/quotvid_white_logo.svg",
          },
          url: `https://www.quotvid.com/blog/${slug}`,
        }),
      }}
    />
  );
}
