export default function ProblemPain() {
  return (
    <section
      className="bg-zinc-950 py-20 sm:py-24"
      aria-labelledby="problem-pain-heading"
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          id="problem-pain-heading"
          className="mb-12 sm:mb-14 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.25rem]"
        >
          You already know what the problem is.
        </h2>

        <div className="mx-auto flex max-w-2xl flex-col gap-5 sm:gap-6">
          <p className="border-l-4 border-amber-500/90 pl-4 text-lg leading-relaxed text-zinc-100 sm:text-xl">
            You need to post every day to grow.
          </p>
          <p className="border-l-4 border-amber-500/90 pl-4 text-lg leading-relaxed text-zinc-100 sm:text-xl">
            But creating quote videos manually takes 30–60 minutes.
          </p>
          <p className="border-l-4 border-amber-500/90 pl-4 text-lg leading-relaxed text-zinc-100 sm:text-xl">
            Then you have to upload to Pinterest. Then YouTube. Then TikTok.
          </p>
          <p className="border-l-4 border-amber-500/70 pl-4 text-base leading-relaxed text-zinc-500 sm:text-[1.05rem]">
            Then you skip a day. Then three days. Then a week.
          </p>
          <p className="border-l-4 border-red-500/80 pl-4 text-lg font-medium leading-relaxed text-red-400 sm:text-xl">
            And the algorithm forgets you.
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-bold leading-snug text-amber-400 sm:mt-14 sm:text-2xl md:text-[1.75rem]">
          QuotVid fixes this completely.
        </p>
      </div>
    </section>
  );
}
