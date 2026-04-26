const niches = [
  { icon: "🏛️", label: "Stoic Philosophy" },
  { icon: "💪", label: "Discipline & Focus" },
  { icon: "📈", label: "Business & Success" },
  { icon: "🧠", label: "Psychology & Mind" },
  { icon: "🐺", label: "Sigma Mindset" },
  { icon: "🌱", label: "Growth Mindset" },
  { icon: "✍️", label: "Urdu Poetry" },
  { icon: "🌙", label: "Arabic & Persian" },
  { icon: "🧘", label: "Mindfulness & Calm" },
  { icon: "❤️", label: "Love & Relationships" },
  { icon: "🙏", label: "Faith & Spirituality" },
  { icon: "😂", label: "Humor & Wit" },
  { icon: "📚", label: "Education & Wisdom" },
  { icon: "🏆", label: "Fitness & Health" },
  { icon: "💡", label: "Leadership & Vision" },
  { icon: "🎨", label: "Creativity & Art" },
  { icon: "👨‍👩‍👧", label: "Family & Parenting" },
  { icon: "🌍", label: "Social Impact" },
  { icon: "🎓", label: "Student Life" },
  { icon: "🕊️", label: "Peace & Healing" },
];

export default function Niches() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 text-center md:px-8">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          Built For <span className="text-gradient-gold">Every Type</span> of Creator
        </h2>
        <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-muted-foreground">
          Whether you run a motivational page, a poetry channel, or a business brand, QuotVid fits your niche.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {niches.map((n) => (
            <div key={n.label} className="rounded-full border border-[rgba(226,161,40,0.25)] bg-[rgba(226,161,40,0.06)] px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#E5E7EB] transition-all hover:border-[rgba(226,161,40,0.55)] hover:bg-[rgba(226,161,40,0.12)] hover:text-[#f0b94a] hover:shadow-[0_0_20px_rgba(226,161,40,0.15)]">
              {n.icon} {n.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
