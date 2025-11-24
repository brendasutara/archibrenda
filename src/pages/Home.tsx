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
              Clases prácticas, aplicadas a tus proyectos reales, con una
              profesora que enseña de forma clara y sin vueltas. Desde tus
              primeros muros hasta modelos avanzados listos para presentar.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/clases"
                className="inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
              >
                Reservar mi primera clase
              </Link>

              <Link
                to="/tutoriales"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
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
            Te acompaño desde tus primeros pasos hasta optimizar proyectos
            grandes, siempre aplicando lo que vemos sobre tu propio modelo.
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
              className="inline-flex items-center text-sm font-medium text-[#FF6B81] hover:text-[#ff516b]"
            >
              Quiero empezar desde cero
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING SIMPLE */}
      <section className="bg-[#F9FAFB] border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              Elegí cómo querés aprender
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Podés empezar con una clase puntual para resolver dudas o avanzar
              con packs pensados para progresar de verdad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Clase suelta */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Clase suelta
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                Para dudas puntuales
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 30
              </p>
              <p className="text-xs text-slate-500 mb-4">
                1 hora en vivo para destrabar problemas concretos en tu
                proyecto.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• Resolución de dudas específicas</li>
                <li>• Sesión grabada para que la repases</li>
                <li>• Ideal si ya usás Archicad</li>
              </ul>
              <Link
                to="/clases"
                className="mt-auto inline-flex justify-center items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Reservar clase suelta
              </Link>
            </div>

            {/* Pack inicio */}
            <div className="rounded-3xl border border-[#FF6B81] bg-white p-6 flex flex-col shadow-md shadow-[#FF6B81]/15 relative">
              <span className="absolute top-4 right-4 rounded-full bg-[#FF6B81] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                Más elegido
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Pack Inicio · 5h
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                Empezar con base sólida
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 120
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Para aprender lo esencial de Archicad y sentirte seguro al
                modelar.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• De cero a modelo básico completo</li>
                <li>• Trabajo sobre tu propio proyecto</li>
                <li>• Grabaciones + ejercicios guiados</li>
              </ul>
              <Link
                to="/clases"
                className="mt-auto inline-flex justify-center items-center rounded-full bg-[#FF6B81] px-4 py-2 text-xs font-semibold text-white hover:bg-[#ff516b]"
              >
                Reservar Pack Inicio
              </Link>
            </div>

            {/* Pack intensivo */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Pack Intensivo · 10h
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                De cero a intermedio
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 200
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Para avanzar de forma profunda, ordenando tu workflow completo
                en Archicad.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• Modelado 3D más avanzado</li>
                <li>• Organización de capas y favoritos</li>
                <li>• Proyectos reales listos para presentar</li>
              </ul>
              <Link
                to="/clases"
                className="mt-auto inline-flex justify-center items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Reservar Pack Intensivo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
            Lo que dicen mis alumnos
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="h-full rounded-3xl bg-[#F9FAFB] p-6 md:p-7 shadow-sm">
              <p className="text-sm text-slate-700 mb-4">
                “Aprendí más en cinco horas con Brenda que en varios cursos
                grabados. Pudimos trabajar directamente sobre mi proyecto y
                ahora sí siento que entiendo Archicad.”
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-300" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Nombre del alumno
                  </p>
                  <p className="text-xs text-slate-500">
                    Arquitecta · Alumna Pack Inicio
                  </p>
                </div>
              </div>
            </article>

            <article className="h-full rounded-3xl bg-[#F9FAFB] p-6 md:p-7 shadow-sm">
              <p className="text-sm text-slate-700 mb-4">
                “Venía usando Archicad hace años, pero desordenado. Ordenamos
                capas, favoritos y plantilla. Hoy trabajo mucho más rápido y
                seguro.”
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-300" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Nombre del alumno
                  </p>
                  <p className="text-xs text-slate-500">
                    Estudio de arquitectura · Pack Intensivo
                  </p>
                </div>
              </div>
            </article>
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
              Ayudo a arquitectos, interioristas y estudiantes a dominar
              Archicad con clases prácticas aplicadas a proyectos reales. No
              quiero que memorices botones, quiero que entiendas el programa y
              ganes seguridad al modelar.
            </p>
            <p className="text-sm md:text-base text-slate-600 mb-4">
              Trabajo con tus archivos, tus dudas y tu realidad, para que cada
              sesión se traduzca en avance concreto en tu día a día profesional.
            </p>
            <Link
              to="/sobre-mi"
              className="inline-flex items-center text-sm font-medium text-[#7B6CFF] hover:text-[#5c4ef0]"
            >
              Conocer más sobre cómo enseño
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>

          <div className="flex justify-center h-44 md:h-80 rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-md shadow-slate-900/5">
            <img
              src="/src/assets/brenda-sutara.png"
              alt="Brenda Sutara"
              className="h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
