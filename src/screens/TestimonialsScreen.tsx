import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Me encantó el curso, realmente muy útil, abarca varios temas desde lo más básico hasta lo más complejo. Las clases fueron explicadas con claridad.",
    name: "Andrea Ávila",
    role: "Estudiante de Arquitectura",
  },
  {
    quote:
      "Brenda te lleva desde lo muy básico del software hasta un nivel avanzado, enseñando herramientas que pocos cursos explican.",
    name: "Fred Mera",
    role: "Dibujante CAD",
  },
  {
    quote:
      "Era lo que estaba buscando. Las clases y los descargables muy bien explicados paso a paso. Pude crear planos en menos tiempo.",
    name: "Brian Alfaro",
    role: "Maestro Mayor de Obra",
  },
  {
    quote:
      "Un curso muy didáctico, muy completo y muy útil. Siempre te resuelve tus dudas. Si apenas vas empezando o sos nivel intermedio, es para vos.",
    name: "Santiago Casales Espinosa",
    role: "Estudiante de Arquitectura",
  },
];

export const TestimonialsScreen = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-slate-200/70 bg-[#fbf8f9]"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF6B81]/9 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <span className="mb-3 inline-flex rounded-full border border-white/80 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
              Experiencias reales
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
              Lo que dicen mis alumnos
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
              Opiniones reales de estudiantes y profesionales que ya pasaron
              por mis cursos y clases 1:1 de Archicad.
            </p>
          </div>

          <div
            data-reveal
            className="rounded-2xl border border-white/80 bg-white/70 px-5 py-4 text-left shadow-sm backdrop-blur md:text-right"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              + de 8 años enseñando
            </p>
            <p className="mt-1 text-xs font-semibold text-amber-500">
              ★★★★★ Alumnos recomiendan mis clases
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              data-reveal-card
              key={testimonial.name}
              className="rounded-3xl border border-white/80 bg-white/82 p-6 shadow-sm shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.09)] md:p-7"
            >
              <p className="mb-5 text-base leading-7 text-slate-800">
                “{testimonial.quote}”
              </p>
              <div className="border-t border-slate-200/80 pt-4">
                <p className="text-sm font-semibold text-slate-950">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
