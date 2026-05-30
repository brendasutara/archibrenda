import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const items = [
  {
    kicker: "Desde cero",
    title: "Primeros pasos",
    text: "Navegación, interfaz, muros, puertas, ventanas, plantas y primeras vistas 3D sin volverte loco.",
    color: "text-[#FF6B81]",
  },
  {
    kicker: "Intermedio",
    title: "Modelado 3D real",
    text: "Capas, favoritos, organización del modelo y workflows para proyectos que crecen en complejidad.",
    color: "text-[#7B6CFF]",
  },
  {
    kicker: "Avanzado",
    title: "Templates & optimización",
    text: "Templates, atributos, mobiliario, cortes complejos y modelos listos para documentación y render.",
    color: "text-[#FFB347]",
  },
  {
    kicker: "Proyectos reales",
    title: "Tu archivo, no ejemplos vacíos",
    text: "Trabajamos directamente sobre tu proyecto para que cada clase se traduzca en avance real.",
    color: "text-slate-500",
  },
];

export const LearnScreen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contenido"
      className="relative overflow-hidden border-t border-slate-200/70 bg-white"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 rounded-full bg-[#FF6B81]/7 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div data-reveal className="mb-10 max-w-2xl">
          <span className="mb-3 inline-flex rounded-full border border-[#FF6B81]/15 bg-[#FF6B81]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
            Metodología aplicada
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
            Qué podés aprender conmigo
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            Te acompaño desde tus primeros pasos en Archicad hasta optimizar
            proyectos grandes con metodología BIM aplicada, siempre trabajando
            sobre tu propio modelo.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article
              data-reveal-card
              key={item.title}
              className="group rounded-3xl border border-slate-200/80 bg-white/86 p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#FF6B81]/25 hover:shadow-[0_18px_50px_rgba(15,23,42,0.09)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <p
                  className={`text-xs font-bold uppercase tracking-[0.16em] ${item.color}`}
                >
                  {item.kicker}
                </p>
                <span className="text-xs font-bold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-8">
          <Link
            to="/clases"
            className="inline-flex items-center rounded-full border border-[#FF6B81]/25 bg-white px-5 py-3 text-sm font-bold text-[#FF6B81] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FF6B81] hover:text-white"
          >
            Quiero empezar desde cero
            <span className="ml-2 text-base">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
