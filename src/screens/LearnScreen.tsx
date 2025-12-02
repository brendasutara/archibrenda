import { Link } from "react-router-dom";

export const LearnScreen = () => {
  return (
    <section className="border-t border-slate-200/70 bg-white">
      <div className="2xl:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
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
              Navegación, interfaz, muros, puertas, ventanas, plantas y primeras
              vistas 3D sin volverte loco.
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
  );
};
