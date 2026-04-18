import Link from "next/link";

const platforms = [
  {
    name: "YouTube Shorts",
    desc: "Uploaded to your channel with custom title and description. Google-verified integration.",
  },
  {
    name: "Instagram Reels",
    desc: "Published directly to your Professional or Creator account via Meta's official API.",
  },
  {
    name: "TikTok",
    desc: "Posted to your TikTok account via TikTok's official publishing API. No app needed.",
  },
  {
    name: "Pinterest Video Pins",
    desc: "Pinned to your chosen board automatically. Perfect for Etsy sellers and quote pages.",
  },
  {
    name: "Facebook Pages",
    desc: "Posted as a video to any Facebook Page you manage. Full caption control.",
  },
];

export default function AutoPosting() {
  return (
    <>
      {/* Auto-posting feature block */}
      <section className="bg-section-light py-14 sm:py-20 md:py-28">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-light-heading md:text-4xl">
              Auto-Post to 5 Platforms —{" "}
              <span className="text-gradient-gold">No Manual Uploading. Ever.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-light-body max-w-2xl mx-auto leading-relaxed">
              Your video is done. Why upload it five times manually? Connect your accounts once — QuotVid posts your videos automatically on your schedule, in your timezone, to every platform at once. Cancel any scheduled post before it goes live.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-primary/20 bg-foreground/[0.02] p-4 sm:p-5"
              >
                <h3 className="font-semibold text-light-heading text-sm sm:text-base mb-1">
                  {p.name}
                </h3>
                <p className="text-xs sm:text-sm text-light-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-muted-foreground italic mb-6">
            Available on all paid plans. ✓ YouTube integration verified by Google&apos;s Third Party Data Safety Team.
          </p>
          <div className="text-center">
            <Link
              href="/integrations"
              className="inline-block rounded-xl border border-primary/30 px-6 py-3 text-sm font-semibold  transition-colors hover:bg-primary/10"
            >
              See all platform integrations →
            </Link>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <section className="bg-section-dark py-10 sm:py-14 border-t border-primary/10">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 text-center">
          <p className="mb-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            One video. Five platforms. Zero manual uploads.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {["YouTube", "Instagram", "TikTok", "Pinterest", "Facebook"].map((name) => (
              <span
                key={name}
                className="rounded-full border border-primary/25 bg-secondary px-4 py-2 text-xs sm:text-sm font-medium text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
