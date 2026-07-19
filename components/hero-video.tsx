"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Hero background video (D-15, optimized D-24). The poster frame carries the
 * first paint; playback starts only after hydration and only when the visitor
 * does not prefer reduced motion, so the footage costs nothing until the page
 * is interactive. The Tinte scrim layers keep contrast for Papier text on any
 * frame and pull the footage into the ink palette. The pause chip keeps the
 * looping motion WCAG 2.2.2 compliant; it is hidden without JavaScript, where
 * the video never plays anyway.
 */
const LABELS = {
  en: { pause: "Pause background video", play: "Play background video" },
  de: {
    pause: "Hintergrundvideo pausieren",
    play: "Hintergrundvideo abspielen",
  },
} as const;

const HeroVideo = ({ locale = "en" }: { locale?: keyof typeof LABELS }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setMotionAllowed(!mq.matches);
      const video = videoRef.current;
      if (!video) return;
      if (mq.matches) {
        video.pause();
        setPlaying(false);
      } else {
        video
          .play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const labels = LABELS[locale];

  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-tinte/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-tinte via-tinte/50 to-transparent" />
      </div>
      {motionAllowed && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? labels.pause : labels.play}
          className="absolute right-6 bottom-6 z-10 hidden items-center gap-2 rounded-full border border-haarlinie bg-tinte-tief/80 px-3 py-1.5 font-utility text-[11px] uppercase tracking-[0.08em] text-papier-gedaempft transition-colors hover:text-papier [.js_&]:inline-flex"
        >
          {playing ? "Motion ▮▮" : "Motion ▶"}
        </button>
      )}
    </>
  );
};

export default HeroVideo;
