const niches = [
  { icon: "🏛️", label: "Stoic Philosophy" },
  { icon: "💪", label: "Discipline & Focus" },
  { icon: "📈", label: "Business & Success" },
  { icon: "🧠", label: "Psychology & Mind" },
  { icon: "🐺", label: "Sigma Mindset" },
  { icon: "🌱", label: "Growth Mindset" },
  { icon: "✍️", label: "Urdu Poetry" },
  { icon: "🌙", label: "Arabic & Persian" },
];

export default function Niches() {
  return (
    <section className="bg-section-dark py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 text-center md:px-8">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
          Built For <span className="text-gradient-gold">Every Type</span> of Creator
        </h2>
        <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-muted-foreground">
          Whether you run a motivational page, share Urdu poetry, or build a business brand — QuotVid was built for your niche.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {niches.map((n) => (
            <div key={n.label} className="rounded-full border border-primary/20 bg-secondary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(39_76%_52%/0.15)]">
              {n.icon} {n.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
