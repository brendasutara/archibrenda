import { Link } from "react-router-dom";

export const TutorialsScreen = () => {
  return (
    <section className="border-t border-slate-200/70 bg-white">
      <div className="2xl:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              Tutoriales destacados de Archicad
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Tutoriales gratuitos en español para aprender Archicad paso a
              paso. Cada video viene acompañado de explicación clara y ejemplos
              reales.
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
  );
};
