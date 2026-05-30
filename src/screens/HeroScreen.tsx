import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Check, PlayCircle } from "lucide-react";
import { Navbar } from "../components/ui/Navbar";
import { HeroModelShowcase } from "../components/hero/HeroModelShowcase";
import { ScrollIndicator } from "../components/hero/ScrollIndicator";

const benefits = ["En vivo", "A tu ritmo", "Nivel inicial o avanzado"];

export const HeroScreen = () => {
  const [showHint, setShowHint] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const nav = "[data-hero-nav]";
      const intro = "[data-hero-intro]";
      const title = "[data-hero-title]";
      const copy = "[data-hero-copy]";
      const actions = "[data-hero-action]";
      const benefits = "[data-hero-benefit]";
      const note = "[data-hero-note]";
      const visual = "[data-hero-visual]";
      const cards = "[data-hero-card]";
      const scroll = "[data-hero-scroll]";

      if (reduceMotion) {
        gsap.set(
          [nav, intro, title, copy, actions, benefits, note, visual, cards, scroll],
          { autoAlpha: 1, y: 0, scale: 1 }
        );
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.08,
      });

      timeline
        .fromTo(nav, { autoAlpha: 0, y: -14 }, { autoAlpha: 1, y: 0, duration: 0.55 })
        .fromTo(intro, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48 }, "-=0.18")
        .fromTo(title, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.72 }, "-=0.12")
        .fromTo(copy, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.36")
        .fromTo(actions, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08 }, "-=0.24")
        .fromTo(benefits, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.06 }, "-=0.22")
        .fromTo(note, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.16")
        .fromTo(visual, { autoAlpha: 0, y: 34, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.78 }, "-=0.76")
        .fromTo(cards, { autoAlpha: 0, y: 18, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.48, stagger: 0.07 }, "-=0.34")
        .fromTo(scroll, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.16");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] overflow-x-hidden bg-[#fbf8f9] text-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,107,129,0.14),transparent_30%),radial-gradient(circle_at_78%_12%,rgba(255,205,215,0.34),transparent_31%),linear-gradient(180deg,#fff_0%,#fbf8f9_48%,#fff7f8_100%)]" />
      <div className="pointer-events-none absolute left-0 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FF6B81]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-28 pt-2 sm:px-6 sm:pb-24 lg:px-10 lg:pb-14 lg:pt-0">
        <div data-hero-nav>
          <Navbar />
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-7 py-8 sm:gap-9 sm:py-10 md:gap-10 lg:grid-cols-[minmax(390px,0.88fr)_1.12fr] lg:gap-6 lg:py-0 xl:grid-cols-[minmax(440px,0.9fr)_1.1fr] xl:gap-12 2xl:gap-16">
          <div className="relative z-40 flex max-w-[640px] flex-col items-start lg:max-w-[560px] xl:max-w-[640px]">
            <p
              data-hero-intro
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6B81]/20 bg-white/78 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-[0_12px_34px_rgba(255,107,129,0.12)] backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF6B81]" />
              Clases 1:1 de Archicad
            </p>

            <h1
              data-hero-title
              className="mt-5 max-w-[720px] text-[clamp(2.45rem,10vw,4.1rem)] font-semibold leading-[0.94] tracking-normal text-slate-950 sm:mt-6 sm:text-[clamp(3rem,7vw,4.35rem)] lg:text-[clamp(3.1rem,4.6vw,4.35rem)]"
            >
              Aprendé Archicad creando proyectos reales
            </h1>

            <p
              data-hero-copy
              className="mt-5 max-w-[570px] text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg lg:max-w-[520px] lg:text-base lg:leading-7 xl:max-w-[570px] xl:text-lg"
            >
              Mirá lo que podés aprender a modelar con clases personalizadas de
              Archicad. Vas a modelar, documentar y presentar tus proyectos con
              una metodología clara desde la primera clase.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:mt-8">
              <a
                data-hero-action
                href="https://wa.me/2617007601"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF6B81] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_44px_rgba(255,107,129,0.34)] transition hover:-translate-y-0.5 hover:bg-[#ff516b] hover:shadow-[0_24px_54px_rgba(255,107,129,0.42)] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/22"
              >
                Reservar mi primera clase
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              <a
                data-hero-action
                href="#contenido"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/82 px-7 py-4 text-sm font-bold text-slate-800 shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur transition hover:border-[#FF6B81]/35 hover:text-[#FF6B81] focus:outline-none focus:ring-4 focus:ring-slate-200/70"
              >
                <PlayCircle className="h-4 w-4" />
                Ver contenido del curso
              </a>
            </div>

            <div className="mt-7 grid w-full grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:flex sm:w-auto sm:flex-wrap lg:mt-7">
              {benefits.map((benefit) => (
                <span
                  data-hero-benefit
                  key={benefit}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200/80 bg-white/78 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B81]/12 text-[#FF6B81]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {benefit}
                </span>
              ))}
            </div>

            <div
              data-hero-note
              className="mt-7 flex items-center gap-4 border-l-2 border-[#FF6B81] pl-4 lg:mt-7"
            >
              <p className="max-w-[500px] text-sm font-medium leading-6 text-slate-600 lg:max-w-[460px] xl:max-w-[500px]">
                El modelo de cocina es el resultado final: una pieza BIM
                completa para entender decisiones de modelado, documentación y
                presentación.
              </p>
            </div>
          </div>

          <HeroModelShowcase
            showHint={showHint}
            onFirstInteract={() => setShowHint(false)}
          />
        </div>

        <div
          data-hero-scroll
          className="z-50 mx-auto mt-2 lg:absolute lg:bottom-6 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
        >
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
};
