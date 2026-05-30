import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const bullets = [
  "Ideal para destrabar dudas puntuales",
  "Trabajamos sobre tu archivo real",
  "Clases grabables",
];

export const ClassesScreen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/70 bg-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,107,129,0.08),transparent)]" />

      <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6 md:py-24 lg:px-8">
        <div
          data-reveal
          className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-[#fbf8f9]/80 px-5 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:px-10 md:py-14"
        >
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
            Clases personalizadas
          </span>

          <h2 className="mx-auto mb-4 max-w-2xl text-2xl font-semibold text-slate-900 md:text-4xl">
            Aprendé Archicad con clases 1:1 a tu ritmo
          </h2>

          <p className="mx-auto mb-7 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Sesiones en vivo, sobre tus propios proyectos, con explicaciones
            claras y acompañamiento real. Desde USD <strong>30/hora</strong>.
          </p>

          <div className="mb-8 flex flex-col justify-center gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap">
            {bullets.map((bullet) => (
              <span
                data-reveal-card
                key={bullet}
                className="rounded-full border border-white/80 bg-white px-4 py-2 shadow-sm"
              >
                {bullet}
              </span>
            ))}
          </div>

          <Link
            to="/clases"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-8 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(255,107,129,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ff516b]"
          >
            Ver planes completos
            <span className="ml-2 text-base">↗</span>
          </Link>

          <p className="mt-4 text-[11px] text-slate-500">
            Packs desde 5 a 10 horas disponibles.
          </p>
        </div>
      </div>
    </section>
  );
};
