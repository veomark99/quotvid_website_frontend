const stats = [
  { icon: "📲", label: "5 Platforms — Auto-Posting" },
  { icon: "🌍", label: "12 Languages + RTL" },
  { icon: "⚡", label: "4-Minute Setup" },
  { icon: "🎯", label: "20 Categories · 17 Video Styles" },
];

export default function StatsBar() {
  return (
    <section className="bg-section-card-dark py-6 sm:py-8">
      <div className="container mx-auto grid grid-cols-2 gap-3 sm:gap-4 px-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 sm:px-4 md:justify-between md:gap-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
            <span className="text-base sm:text-lg">{s.icon}</span>
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}
