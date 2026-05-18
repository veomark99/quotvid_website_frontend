/**
 * Decorative short-form UI overlays (from quotvid_funnels).
 * Non-interactive; matches Pinterest-style pin chrome on preview videos.
 */

export function PinterestPinVideoChrome() {
  return (
    <div className="qv-pin-video-chrome" aria-hidden>
      <span className="qv-pin-video-chrome-more">⋯</span>
      <span className="qv-pin-save-pill">Save</span>
    </div>
  );
}
