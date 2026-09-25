import { useEffect } from "react";

/**
 * Site-wide scroll reveals for [data-reveal].
 * Optional: data-reveal-delay (seconds), data-reveal-y (px).
 * Skips nested [data-reveal] so children are not left stuck at opacity 0.
 */
export default function ScrollMotionRoot() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const all = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const elements = all.filter((el) => !el.parentElement?.closest("[data-reveal]"));

    if (prefersReduced) {
      all.forEach(revealNow);
      return;
    }

    if (!elements.length) return;

    elements.forEach((el) => {
      const y = Number(el.dataset.revealY ?? 22);
      el.style.opacity = "0";
      el.style.transform = `translate3d(0, ${y}px, 0)`;
      el.style.transition = "none";
      el.style.willChange = "opacity, transform";
    });

    const reveal = (el: HTMLElement) => {
      if (el.dataset.revealed === "true") return;
      el.dataset.revealed = "true";
      const delay = Number(el.dataset.revealDelay ?? 0);
      window.setTimeout(() => {
        el.style.transition =
          "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        el.style.opacity = "1";
        el.style.transform = "translate3d(0, 0, 0)";
        window.setTimeout(() => {
          el.style.willChange = "auto";
        }, 550);
      }, delay * 1000);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      // Start just before content enters the fold — less empty space, still intentional.
      { threshold: 0.05, rootMargin: "0px 0px 10% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    // Failsafe: never leave content stuck invisible.
    const failsafe = window.setTimeout(() => {
      elements.forEach((el) => {
        if (el.dataset.revealed !== "true") revealNow(el);
      });
    }, 1600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}

function revealNow(el: HTMLElement) {
  el.dataset.revealed = "true";
  el.style.opacity = "1";
  el.style.transform = "none";
  el.style.filter = "none";
  el.style.transition = "none";
  el.style.willChange = "auto";
}
