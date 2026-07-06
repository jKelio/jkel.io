"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Observes [data-reveal] elements and fades them up on viewport entry
 * (decision D-17). Re-scans on route change; IntersectionObserver only —
 * no scroll listeners. The html.js class gates the hidden initial state
 * so content is never invisible without JavaScript.
 */
const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");

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
