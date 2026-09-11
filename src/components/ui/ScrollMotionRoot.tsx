import { useEffect } from "react";
import { animate, inView } from "framer-motion";

/**
 * Site-wide scroll reveals for any element marked with data-reveal.
 * Optional: data-reveal-delay (seconds), data-reveal-y (px).
 */
export default function ScrollMotionRoot() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    elements.forEach((el, index) => {
      const y = Number(el.dataset.revealY ?? 36);
      const tilt = index % 2 === 0 ? -0.6 : 0.6;
      el.dataset.revealTilt = String(tilt);
      el.style.opacity = "0";
      el.style.transform = `translate3d(0, ${y}px, 0) scale(0.97) rotate(${tilt}deg)`;
      el.style.filter = "blur(1px)";
      el.style.willChange = "opacity, transform, filter";
    });

    const unsubs = elements.map((el) => {
      const delay = Number(el.dataset.revealDelay ?? 0);
      return inView(
        el,
        () => {
          animate(
            el,
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)",
              filter: "blur(0px)",
            },
            {
              type: "spring",
              stiffness: 110,
              damping: 20,
              mass: 0.7,
              delay,
            },
          );
        },
        { amount: 0.16, margin: "0px 0px -10% 0px" },
      );
    });

    return () => unsubs.forEach((stop) => stop());
  }, []);

  return null;
}
