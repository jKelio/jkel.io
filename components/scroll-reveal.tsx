"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Observes [data-reveal] elements and fades them up on viewport entry
 * (decision D-17). Re-scans on route change; IntersectionObserver only —
 * no scroll listeners. The html.js class that gates the hidden initial
 * state is set by a pre-paint inline script in RootShell (D-32), so
 * in-view sections never paint visible and then snap hidden at hydration.
 */
const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]:not(.revealed)");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
