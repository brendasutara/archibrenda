import { useLayoutEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (sectionRef: RefObject<HTMLElement | null>) => {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-reveal-card]");
      const image = gsap.utils.toArray<HTMLElement>("[data-reveal-image]");

      if (reduceMotion) {
        gsap.set([...revealItems, ...cards, ...image], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      timeline
        .fromTo(
          revealItems,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08 }
        )
        .fromTo(
          cards,
          { autoAlpha: 0, y: 26 },
          { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.08 },
          "-=0.28"
        )
        .fromTo(
          image,
          { autoAlpha: 0, y: 28, scale: 0.97 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.42"
        );
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
};
