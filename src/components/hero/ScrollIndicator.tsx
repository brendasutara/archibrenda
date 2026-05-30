import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const ScrollIndicator = () => {
  const rootRef = useRef<HTMLButtonElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        y: 12,
        autoAlpha: 0.35,
        duration: 1.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    document
      .getElementById("contenido")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      ref={rootRef}
      type="button"
      aria-label="Ir a la siguiente sección"
      onClick={scrollToContent}
      className="group inline-flex h-14 w-8 items-start justify-center rounded-full border border-slate-300/80 bg-white/60 p-1.5 shadow-sm backdrop-blur transition hover:border-[#FF6B81]/50 hover:bg-white/80 focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/15"
    >
      <span
        ref={dotRef}
        className="mt-1 h-2 w-2 rounded-full bg-[#FF6B81]"
        aria-hidden="true"
      />
    </button>
  );
};
