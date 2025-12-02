export const TestimonialsScreen = () => {
  return (
    <section className="bg-[#FDFBFF] border-t border-slate-200/70">
      <div className="2xl:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Lo que dicen mis alumnos
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
              Opiniones reales de estudiantes y profesionales que ya pasaron por
              mis cursos y clases 1:1 de Archicad.
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
              + de 8 años enseñando Archicad
            </p>
            <p className="mt-1 text-xs text-amber-500">
              ★★★★★ Alumnos recomiendan mis clases
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Andrea */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm shadow-slate-900/5">
            <p className="text-sm md:text-base text-slate-800 mb-4">
              “Me encantó el curso, realmente muy útil, abarca varios temas
              desde lo más básico hasta lo más complejo. Las clases fueron
              explicadas con claridad, no quedaban dudas respecto a cualquier
              tema. Se aprende mucho porque había cosas que no sabía que se
              podían hacer con el programa y me las facilitó también…”
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Andrea Ávila
              </p>
              <p className="text-xs text-slate-500">
                Estudiante de Arquitectura
              </p>
            </div>
          </article>

          {/* Fred */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm shadow-slate-900/5">
            <p className="text-sm md:text-base text-slate-800 mb-4">
              “Brenda te lleva desde lo muy básico del software hasta un nivel
              avanzado, enseñándonos herramientas que pocos cursos explican y
              desarrollando el proyecto de manera constructiva, como sería en
              obra. 100% recomendable.”
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-900">Fred Mera</p>
              <p className="text-xs text-slate-500">Dibujante CAD</p>
            </div>
          </article>

          {/* Brian */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm shadow-slate-900/5">
            <p className="text-sm md:text-base text-slate-800 mb-4">
              “Era lo que estaba buscando. Las clases y los descargables muy
              bien explicados paso a paso. Lo que más apuntaba yo era a la
              creación de planos y con este curso pude lograr realizarlos y
              hacerlos en menos tiempo que en Autocad. ¡Excelente!”
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Brian Alfaro
              </p>
              <p className="text-xs text-slate-500">Maestro Mayor de Obra</p>
            </div>
          </article>

          {/* Santiago */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm shadow-slate-900/5">
            <p className="text-sm md:text-base text-slate-800 mb-4">
              “Un curso muy didáctico, muy completo y muy útil. Siempre te
              resuelve tus dudas. Si apenas vas empezando o sos nivel
              intermedio, es para vos. Muy recomendable.”
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Santiago Casales Espinosa
              </p>
              <p className="text-xs text-slate-500">
                Estudiante de Arquitectura
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
