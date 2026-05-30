import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const AboutMeScreen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/70 bg-white pb-16 pt-12 md:pb-20 md:pt-16"
    >
      <div className="pointer-events-none absolute right-0 top-12 h-80 w-80 translate-x-1/3 rounded-full bg-[#FF6B81]/9 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:px-6 lg:px-8">
        <div data-reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
            Sobre mí
          </p>
          <h2 className="mb-5 max-w-2xl text-2xl font-semibold text-slate-900 md:text-4xl">
            Soy Brenda, la persona detrás de Archibrenda.
          </h2>
          <p className="mb-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Soy profesora de Archicad con más de 8 años enseñando BIM y
            modelado 3D a estudiantes, arquitectos e interioristas. Mi objetivo
            es que entiendas el programa y ganes seguridad al modelar.
          </p>
          <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Trabajo con tus archivos, tus dudas y tu realidad, para que cada
            sesión se traduzca en avance concreto en tu día a día profesional.
          </p>
          <Link
            to="/sobre-mi"
            className="inline-flex items-center rounded-full border border-[#7B6CFF]/25 bg-white px-5 py-3 text-sm font-bold text-[#7B6CFF] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#7B6CFF] hover:text-white"
          >
            Conocer más sobre cómo enseño
            <span className="ml-2 text-base">↗</span>
          </Link>
        </div>

        <div
          data-reveal-image
          className="relative mx-auto flex h-64 w-full max-w-[420px] justify-center overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-[0_24px_80px_rgba(15,23,42,0.1)] md:h-96"
        >
          <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/50" />
          <img
            loading="lazy"
            src="/brenda-sutara.png"
            alt="Brenda Sutara, profesora de Archicad"
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
