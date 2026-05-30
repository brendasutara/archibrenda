import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TutorialsHero } from "../components/tutorials/TutorialsHero";
import { TutorialCategories } from "../components/tutorials/TutorialCategories";
import { TutorialCard } from "../components/tutorials/TutorialCard";
import { TutorialsCTA } from "../components/tutorials/TutorialsCTA";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "ABC Archicad",
  "Modelado 3D",
  "Documentación",
  "Representación gráfica",
  "Optimizar el tiempo",
  "Errores frecuentes",
];

const tutorials = [
  {
    image: "/blog/puntos-en-planta/portada.png",
    category: "Errores frecuentes",
    title: "Se me ven puntitos en planta",
    description:
      "Aprende por que aparecen esos puntos en planta y como corregir la visualizacion sin perder tiempo.",
    meta: "Video + guia paso a paso",
    accent: "#FF6B81",
  },
  {
    image: "/blog/no-hay-superficie/1.png",
    category: "Modelado 3D",
    title: "Cómo resolver el error de superficie",
    description:
      "Un caso practico para entender materiales, superficies y ajustes basicos del modelo.",
    meta: "Proyecto guiado",
    accent: "#7B6CFF",
  },
  {
    image: "/blog/como-funcionan-las-plumas/portada.png",
    category: "ABC Archicad",
    title: "Cómo funcionan las plumas en Archicad",
    description:
      "Configura plumas con criterio para que tus plantas, cortes y laminas se lean mejor.",
    meta: "Tip visual",
    accent: "#FFB347",
  },
  {
    image: "/blog/no-hay-superficie/2.png",
    category: "Documentación",
    title: "Ordena vistas antes de armar laminas",
    description:
      "Una forma simple de preparar vistas, escalas y estructura de documentacion para trabajar mas claro.",
    meta: "Flujo de trabajo",
    accent: "#2EC3FF",
  },
  {
    image: "/blog/puntos-en-planta/4.png",
    category: "Representacion grafica",
    title: "Mejora la lectura grafica de tus plantas",
    description:
      "Ajustes concretos para lograr una planta mas limpia, profesional y facil de presentar.",
    meta: "Clase aplicada",
    accent: "#6ee7b7",
  },
  {
    image: "/blog/no-hay-superficie/4.png",
    category: "Optimizar el tiempo",
    title: "Atajos para avanzar mas rapido",
    description:
      "Pequenos habitos de Archicad que reducen tareas repetitivas y ordenan tu proceso diario.",
    meta: "Productividad",
    accent: "#F43F5E",
  },
];

export const Tutorials = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const heroItems = [
        "[data-tutorial-nav]",
        "[data-tutorial-badge]",
        "[data-tutorial-title]",
        "[data-tutorial-copy]",
        "[data-tutorial-search]",
      ];

      if (reduceMotion) {
        gsap.set(
          [
            ...heroItems,
            "[data-tutorial-visual]",
            "[data-tutorial-blob]",
            "[data-tutorial-category]",
            "[data-tutorial-card]",
            "[data-tutorial-cta]",
          ],
          { autoAlpha: 1, y: 0, scale: 1, rotate: 0 }
        );
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.08 })
        .fromTo(
          "[data-tutorial-nav]",
          { autoAlpha: 0, y: -14 },
          { autoAlpha: 1, y: 0, duration: 0.55 }
        )
        .fromTo(
          "[data-tutorial-badge]",
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: 0.48 },
          "-=0.18"
        )
        .fromTo(
          "[data-tutorial-title]",
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.72 },
          "-=0.12"
        )
        .fromTo(
          "[data-tutorial-copy]",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          "-=0.34"
        )
        .fromTo(
          "[data-tutorial-search]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.25"
        )
        .fromTo(
          "[data-tutorial-blob]",
          { autoAlpha: 0, scale: 0.9, rotate: -3 },
          { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.8 },
          "-=0.58"
        )
        .fromTo(
          "[data-tutorial-visual]",
          { autoAlpha: 0, y: 34, scale: 0.96 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.78 },
          "-=0.72"
        );

      gsap.to("[data-tutorial-visual]", {
        y: -42,
        x: -18,
        scale: 1.055,
        rotate: 2.2,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-tutorial-content]",
          start: "top 82%",
          end: "bottom 35%",
          scrub: 0.8,
        },
      });

      gsap.to("[data-tutorial-blob]", {
        y: -24,
        x: 18,
        scale: 1.035,
        rotate: -2.5,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-tutorial-content]",
          start: "top 88%",
          end: "bottom 42%",
          scrub: 0.9,
        },
      });

      gsap.fromTo(
        "[data-tutorial-category]",
        { autoAlpha: 0, y: 20, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.48,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-tutorial-categories]",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        "[data-tutorial-card]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-tutorial-grid]",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        "[data-tutorial-cta]",
        { autoAlpha: 0, y: 30, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-tutorial-cta]",
            start: "top 82%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen overflow-x-hidden bg-[#fbf8f8] text-slate-950"
    >
      <TutorialsHero />

      <main
        data-tutorial-content
        className="relative z-10 border-t border-white/70 bg-[linear-gradient(180deg,#fbf8f8_0%,#ffffff_42%,#f7f4f5_100%)]"
      >
        <TutorialCategories categories={categories} />

        <section className="mx-auto max-w-[1240px] px-4 pb-14 pt-4 sm:px-6 md:pb-20 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#FF6B81]/18 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-sm">
                Recursos gratuitos
              </span>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.96] tracking-normal text-slate-950">
                Últimos tutoriales
              </h2>
            </div>
            <p className="max-w-[520px] text-sm leading-6 text-slate-600 md:text-base md:leading-7">
              Guias claras y aplicadas a ejemplos reales para modelar,
              documentar, representar y resolver problemas comunes dentro de
              Archicad.
            </p>
          </div>

          <div
            data-tutorial-grid
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tutorials.map((tutorial) => (
              <TutorialCard key={tutorial.title} tutorial={tutorial} />
            ))}
          </div>
        </section>

        <TutorialsCTA />
      </main>
    </div>
  );
};
