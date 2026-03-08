import { X, Check } from "lucide-react";

const pains = [
  "Writing fresh quotes every day takes hours",
  "Designing videos requires expensive tools or designers",
  "Posting consistently burns out even serious creators",
  "Managing content in multiple languages feels impossible",
];

const solutions = [
  "Tell QuotVid your niche and language once",
  "AI writes original quotes, designs your video, adds music",
  "A fresh professional video is ready every morning",
  "Works in 20 languages — including Urdu, Arabic, and Persian",
];

const ProblemSolution = () => (
  <section className="bg-section-light py-14 sm:py-20 md:py-28">
    <div className="container mx-auto px-3 sm:px-4 md:px-8">
      <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
        Creating Daily Content Is Exhausting.{" "}
        <span className="text-gradient-gold">Until Now.</span>
      </h2>

      <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
        {/* Pain */}
        <div className="space-y-4 sm:space-y-5">
          {pains.map((p) => (
            <div key={p} className="flex items-start gap-2.5 sm:gap-3">
              <X className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-destructive" />
              <p className="text-sm sm:text-base text-light-body">{p}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="space-y-4 sm:space-y-5">
          {solutions.map((s) => (
            <div key={s} className="flex items-start gap-2.5 sm:gap-3">
              <Check className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary" />
              <p className="text-sm sm:text-base text-light-body">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
