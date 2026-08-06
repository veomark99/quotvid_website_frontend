"use client";

import { useEffect, useRef } from "react";
import { getAdSenseClient } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type BlogAdProps = {
  slot: string;
  /** Optional label for accessibility / layout */
  className?: string;
};

/**
 * Display ad unit for blog posts only.
 * Requires NEXT_PUBLIC_ADSENSE_CLIENT + a slot ID from AdSense.
 */
export default function BlogAd({ slot, className = "" }: BlogAdProps) {
  const client = getAdSenseClient();
  const pushed = useRef(false);

  useEffect(() => {
    if (!client || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense may throw if script is blocked or not ready yet
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <aside
      className={`my-8 overflow-hidden rounded-[10px] border border-[rgba(226,161,40,0.12)] bg-[rgba(255,255,255,0.02)] px-2 py-3 text-center ${className}`}
      aria-label="Advertisement"
    >
      <p className="mb-2 text-[10px] uppercase tracking-wider text-muted-foreground">Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
