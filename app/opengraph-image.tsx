import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "QuotVid — AI Quote Video Generator for TikTok, Reels & YouTube Shorts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1200 55%, #0d0d0d 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(245,200,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,0,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "-3px",
            color: "#ffffff",
            marginBottom: 20,
            display: "flex",
          }}
        >
          Quot
          <span style={{ color: "#f5c800" }}>Vid</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 720,
            textAlign: "center",
            lineHeight: 1.45,
            marginBottom: 44,
          }}
        >
          AI Quote Video Generator for TikTok, Instagram Reels &amp; YouTube Shorts
        </div>

        {/* CTA pill */}
        <div
          style={{
            padding: "14px 40px",
            background: "linear-gradient(90deg, #f5c800, #d4a017)",
            borderRadius: 14,
            fontSize: 22,
            fontWeight: 700,
            color: "#000000",
            letterSpacing: "0.2px",
          }}
        >
          Start Free — No Credit Card Required
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            gap: 48,
            color: "rgba(255,255,255,0.45)",
            fontSize: 17,
          }}
        >
          <span>20 Languages</span>
          <span>·</span>
          <span>9 Niches</span>
          <span>·</span>
          <span>Zero Editing</span>
          <span>·</span>
          <span>quotvid.com</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
