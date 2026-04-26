export default function ProblemPain() {
  return (
    <section
      className="bg-section-dark py-20 sm:py-24"
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
          <p className="border-l-4 border-[#e2a128] pl-4 text-lg leading-relaxed text-[#F9FAFB] sm:text-xl">
            You need to post every day to grow.
          </p>
          <p className="border-l-4 border-[#e2a128] pl-4 text-lg leading-relaxed text-[#F9FAFB] sm:text-xl">
            But creating quote videos manually takes 30–60 minutes.
          </p>
          <p className="border-l-4 border-[#e2a128] pl-4 text-lg leading-relaxed text-[#F9FAFB] sm:text-xl">
            Then you have to upload to Pinterest. Then YouTube. Then TikTok.
          </p>
          <p className="border-l-4 border-[rgba(226,161,40,0.45)] pl-4 text-base leading-relaxed text-[#6B7280] sm:text-[1.05rem]">
            Then you skip a day. Then three days. Then a week.
          </p>
          <p className="border-l-4 border-[#F87171] pl-4 text-lg font-medium leading-relaxed text-[#F87171] sm:text-xl">
            And the algorithm forgets you.
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-bold leading-snug text-[#e2a128] sm:mt-14 sm:text-2xl md:text-[1.75rem]">
          QuotVid fixes this completely.
        </p>
      </div>
    </section>
  );
}
