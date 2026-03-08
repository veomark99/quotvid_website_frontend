import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What type of videos does QuotVid create?",
    a: "QuotVid creates vertical 1080×1920 quote videos — the standard format for TikTok, Instagram Reels, and YouTube Shorts. Each video includes an AI-written quote, professional typography, background music, and your chosen visual template.",
  },
  {
    q: "How many videos do I get per day?",
    a: "Free trial users get up to 5 videos per day. Paid plan users get up to 20 videos per day.",
  },
  {
    q: "Which languages are supported?",
    a: "QuotVid supports 20 languages including English, Urdu, Arabic, Spanish, Hindi, Persian, French, German, Russian, Chinese, Japanese, Korean, Turkish, and Indonesian. Arabic, Urdu, and Persian include full right-to-left text rendering with appropriate fonts.",
  },
  {
    q: "Do I need design or video editing skills?",
    a: "None at all. Set your persona once (language, niche, template, music), and QuotVid generates everything. Videos are ready to download and post.",
  },
  {
    q: "Can I change my content style after signing up?",
    a: "Yes, any time. Visit your Persona Settings page to update your category, language, template, background, or music preferences.",
  },
  {
    q: "Is there really a free trial with no card required?",
    a: "Yes — 7 days free, no credit card required. You'll see QuotVid generate videos for your niche before making any payment decision.",
  },
  {
    q: "Who is QuotVid best for?",
    a: "QuotVid is best for social media content creators, personal brand builders, poetry page owners, and anyone who wants to post consistently on TikTok, Instagram, or YouTube Shorts without spending hours on content creation.",
  },
];

const FAQ = () => (
  <section className="bg-section-light py-14 sm:py-20 md:py-28">
    <div className="container mx-auto max-w-3xl px-3 sm:px-4 md:px-8">
      <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-primary/10 bg-foreground/[0.02] px-4 sm:px-6"
          >
            <AccordionTrigger className="text-left text-xs sm:text-sm font-semibold text-light-heading hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-sm leading-relaxed text-light-body">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
