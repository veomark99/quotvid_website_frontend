/**
 * Real QuotVid exports for the marketing homepage carousel.
 * Same sources as quotvid_funnels funnel hero mosaic (media.quotvid.com).
 */

export type MarketingVideoSlide = {
  dayLabel: string;
  statLabel: string;
  videoSrc: string;
};

export const marketingVideoSlides: readonly MarketingVideoSlide[] = [
  {
    dayLabel: "Day 1 · Dedication",
    statLabel: "♥ 142 saves",
    videoSrc: "https://media.quotvid.com/videos/49/426.mp4",
  },
  {
    dayLabel: "Day 2 · Build in silence",
    statLabel: "♥ 98 saves",
    videoSrc: "https://media.quotvid.com/videos/49/768.mp4",
  },
  {
    dayLabel: "Day 3 · Freedom",
    statLabel: "♥ 211 saves",
    videoSrc: "https://media.quotvid.com/videos/49/777.mp4",
  },
  {
    dayLabel: "Day 4 · Modern mindset",
    statLabel: "♥ 76 saves",
    videoSrc: "https://media.quotvid.com/videos/49/827.mp4",
  },
] as const;
