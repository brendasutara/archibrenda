import { Scene3D } from "../three/Scene3D";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 lg:py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Texto */}
          <section className="flex-1 flex flex-col justify-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Archibrenda · BIM & 3D
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
              Aprendé Archicad desde cero hasta avanzado con clases 1:1
              personalizadas.
            </h1>

            <p className="max-w-xl text-sm md:text-base text-slate-600">
              Clases de Archicad en español, personalizadas y aplicadas a tus
              proyectos reales. Aprendé Archicad desde cero, intermedio o
              avanzado con acompañamiento 1:1, sin memorizar botones y sin
              vueltas.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/clases"
                className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
              >
                Reservar mi primera clase
              </Link>

              <Link
                to="/tutoriales"
                className="cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Ver tutoriales gratuitos
              </Link>
            </div>

            <p className="text-xs md:text-sm text-slate-500">
              Ideal para arquitectos, interioristas y estudiantes que quieren
              dominar Archicad con acompañamiento real, no solo cursos grabados.
            </p>
          </section>

          {/* 3D */}
          <section className="flex-1 w-full">
            <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-lg shadow-slate-900/5 overflow-hidden">
              <Scene3D />
            </div>
          </section>
        </div>
      </div>

      {/* QUÉ PODÉS APRENDER */}
      <section className="border-t border-slate-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Qué podés aprender conmigo
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
            Te acompaño desde tus primeros pasos en Archicad hasta optimizar
            proyectos grandes con metodología BIM aplicada, siempre trabajando
            sobre tu propio modelo.
          </p>

          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6B81] mb-1">
                Desde cero
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Primeros pasos
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Navegación, interfaz, muros, puertas, ventanas, plantas y
                primeras vistas 3D sin volverte loco.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#7B6CFF] mb-1">
                Intermedio
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Modelado 3D real
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Capas, favoritos, organización del modelo y workflows para
                proyectos que crecen en complejidad.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#FFB347] mb-1">
                Avanzado
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Templates & optimización
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Templates, atributos, mobiliario, cortes complejos y modelos
                listos para documentación y render.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
                Proyectos reales
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Tu archivo, no ejemplos vacíos
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Trabajamos directamente sobre tu proyecto para que cada clase se
                traduzca en avance real.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/clases"
              className="cursor-pointer inline-flex items-center text-sm font-medium text-[#FF6B81] hover:text-[#ff516b]"
            >
              Quiero empezar desde cero
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#FDFBFF] border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Lo que dicen mis alumnos
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-2 max-w-xl">
                Opiniones reales de estudiantes y profesionales que ya pasaron
                por mis cursos y clases 1:1 de Archicad.
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
                <p className="text-sm font-semibold text-slate-900">
                  Fred Mera
                </p>
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

      {/* CLASES 1:1 - RESUMEN */}
      <section className="bg-[#F9FAFB] border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
            Clases personalizadas
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Aprendé Archicad con clases 1:1 a tu ritmo
          </h2>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-6">
            Sesiones en vivo, sobre tus propios proyectos, con explicaciones
            claras y acompañamiento real. Desde USD <strong>30/hora</strong>.
          </p>

          {/* Bullets */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 text-xs md:text-sm text-slate-600 mb-8">
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              • Ideal para destrabar dudas puntuales
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              • Trabajamos sobre tu archivo real
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              • Clases grabables
            </span>
          </div>

          {/* CTA */}
          <Link
            to="/clases"
            className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
          >
            Ver planes completos
            <span className="ml-1 text-base">↗</span>
          </Link>

          <p className="text-[11px] text-slate-500 mt-4">
            Packs desde 5 a 10 horas disponibles.
          </p>
        </div>
      </section>

      {/* TUTORIALES DESTACADOS */}
      <section className="border-t border-slate-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                Tutoriales destacados de Archicad
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl">
                Tutoriales gratuitos en español para aprender Archicad paso a
                paso. Cada video viene acompañado de explicación clara y
                ejemplos reales.
              </p>
            </div>

            <Link
              to="/tutoriales"
              className="cursor-pointer inline-flex items-center text-sm font-medium text-[#7B6CFF] hover:text-[#5c4ef0]"
            >
              Ver todos los tutoriales
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <Link
              to="/tutoriales"
              aria-label="Tutorial de Archicad desde cero: primeros pasos en el programa"
              className="cursor-pointer group rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex items-center rounded-full bg-[#FFE5EC] text-[#FF6B81] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] mb-3">
                Desde cero
              </span>
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2 group-hover:text-[#FF6B81]">
                Archicad desde cero: tus primeros pasos en el programa
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">
                Ideal si nunca abriste Archicad. Vemos interfaz, navegación,
                muros, puertas y tu primera vista 3D sin morir en el intento.
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Nivel: principiante</span>
                <span>Video + artículo</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/tutoriales"
              aria-label="Tutorial de Archicad: crear tu primer modelo 3D completo"
              className="cursor-pointer group rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex items-center rounded-full bg-[#E9E6FF] text-[#7B6CFF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] mb-3">
                Modelado 3D
              </span>
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2 group-hover:text-[#7B6CFF]">
                Cómo crear tu primer modelo 3D completo en Archicad
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">
                Del plano al 3D: estructura básica, niveles, cubiertas y vistas
                para presentar tu proyecto de forma clara.
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Nivel: intermedio</span>
                <span>Proyecto guiado</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/tutoriales"
              aria-label="Tutorial de Archicad: cortes 3D perspectivados"
              className="cursor-pointer group rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex items-center rounded-full bg-[#FFF4DD] text-[#FFB347] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] mb-3">
                Cortes 3D
              </span>
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2 group-hover:text-[#FFB347]">
                Cortes 3D perspectivados listos para impresionar
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-4">
                Aprende a crear cortes 3D claros y estéticos para presentaciones
                de proyectos, portfolios y redes sociales.
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Nivel: intermedio</span>
                <span>Tip visual</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="bg-white border-t border-slate-200/70 pb-16 pt-10 md:pt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
              Sobre mí
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Soy Brenda, la persona detrás de Archibrenda.
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-3">
              Soy profesora de Archicad con más de 8 años enseñando BIM y
              modelado 3D a estudiantes, arquitectos e interioristas. Mi
              objetivo es que entiendas el programa y ganes seguridad al
              modelar.
            </p>
            <p className="text-sm md:text-base text-slate-600 mb-4">
              Trabajo con tus archivos, tus dudas y tu realidad, para que cada
              sesión se traduzca en avance concreto en tu día a día profesional.
            </p>
            <Link
              to="/sobre-mi"
              className="cursor-pointer inline-flex items-center text-sm font-medium text-[#7B6CFF] hover:text-[#5c4ef0]"
            >
              Conocer más sobre cómo enseño
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>

          <div className="flex justify-center h-44 md:h-80 rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-md shadow-slate-900/5">
            <img
              loading="lazy"
              src="/brenda-sutara.png"
              alt="Brenda Sutara, profesora de Archicad"
              className="h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
