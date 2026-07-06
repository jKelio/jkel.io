/*
 * Hero background video (decision D-15). Absolutely positioned inside the
 * hero section only — the rest of the page stays on the ink canvas. The
 * Tinte scrim layers keep contrast for Papier text on any frame and pull
 * the footage into the ink palette.
 */
const HeroVideo = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-tinte/70" />
    <div className="absolute inset-0 bg-gradient-to-r from-tinte via-tinte/50 to-transparent" />
  </div>
);

export default HeroVideo;
