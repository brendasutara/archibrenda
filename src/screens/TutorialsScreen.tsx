import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const tutorials = [
  {
    badge: "Desde cero",
    title: "Archicad desde cero: tus primeros pasos en el programa",
    text: "Ideal si nunca abriste Archicad. Vemos interfaz, navegación, muros, puertas y tu primera vista 3D sin morir en el intento.",
    color: "text-[#FF6B81] bg-[#FFE5EC]",
    meta: "Nivel: principiante",
    type: "Video + artículo",
  },
  {
    badge: "Modelado 3D",
    title: "Cómo crear tu primer modelo 3D completo en Archicad",
    text: "Del plano al 3D: estructura básica, niveles, cubiertas y vistas para presentar tu proyecto de forma clara.",
    color: "text-[#7B6CFF] bg-[#E9E6FF]",
    meta: "Nivel: intermedio",
    type: "Proyecto guiado",
  },
  {
    badge: "Cortes 3D",
    title: "Cortes 3D perspectivados listos para impresionar",
    text: "Aprende a crear cortes 3D claros y estéticos para presentaciones de proyectos, portfolios y redes sociales.",
    color: "text-[#FFB347] bg-[#FFF4DD]",
    meta: "Nivel: intermedio",
    type: "Tip visual",
  },
];

export const TutorialsScreen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="border-t border-slate-200/70 bg-[#f8f7f8]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <span className="mb-3 inline-flex rounded-full border border-white bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
              Recursos gratuitos
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
              Tutoriales destacados de Archicad
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Tutoriales gratuitos en español para aprender Archicad paso a
              paso. Cada video viene acompañado de explicación clara y ejemplos
              reales.
            </p>
          </div>

          <Link
            data-reveal
            to="/tutoriales"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#7B6CFF] shadow-sm transition hover:-translate-y-0.5 hover:border-[#7B6CFF]/30"
          >
            Ver todos los tutoriales
            <span className="ml-2 text-base">↗</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tutorials.map((tutorial, index) => (
            <Link
              data-reveal-card
              key={tutorial.title}
              to="/tutoriales"
              aria-label={`Tutorial: ${tutorial.title}`}
              className="group rounded-3xl border border-white/80 bg-white/84 p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.09)]"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${tutorial.color}`}
                >
                  {tutorial.badge}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-3 text-base font-semibold text-slate-950 transition group-hover:text-[#FF6B81]">
                {tutorial.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                {tutorial.text}
              </p>
              <div className="flex items-center justify-between border-t border-slate-200/80 pt-4 text-[11px] text-slate-500">
                <span>{tutorial.meta}</span>
                <span>{tutorial.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
