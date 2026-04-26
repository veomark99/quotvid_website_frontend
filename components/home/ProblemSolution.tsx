const pains = [
  "Creating videos manually takes 30–60 minutes every single day",
  "Then you upload to Pinterest. Then YouTube. Then TikTok. Separately.",
  "You miss a day. Then three days. The algorithm forgets you.",
  "Competitors who post consistently are growing. You are not.",
];

const solutions = [
  "QuotVid generates your videos automatically — fresh every day",
  "Connects to Pinterest, YouTube, Instagram, TikTok, and Facebook",
  "Posts automatically on your schedule, in your timezone",
  "You do nothing. You wake up to published content.",
];

export default function ProblemSolution() {
  return (
    <section className="bg-section-light py-14 sm:py-20 md:py-28">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 className="mb-10 sm:mb-16 text-center text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
          Manual Posting Is Killing Your Growth.{" "}
          <span className="text-gradient-gold">There Is a Better Way.</span>
        </h2>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-4 sm:space-y-5">
            {pains.map((p) => (
              <div key={p} className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-0.5 text-destructive font-bold text-sm shrink-0">✗</span>
                <p className="text-sm sm:text-base text-light-body">{p}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4 sm:space-y-5">
            {solutions.map((s) => (
              <div key={s} className="flex items-start gap-2.5 sm:gap-3">
                <span className="mt-0.5 text-[#e2a128] font-bold text-sm shrink-0">✓</span>
                <p className="text-sm sm:text-base text-light-body">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
