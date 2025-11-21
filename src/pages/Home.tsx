import { Scene3D } from "../three/Scene3D";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] px-2 md:px-18">
      {/* Texto */}
      <section className="flex flex-col justify-center gap-6 px-4 py-10 md:px-10 lg:px-16 order-2 lg:order-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
          Archibrenda · BIM & 3D
        </p>

        <h1 className="text-3xl font-semibold leading-tight text-white/85 md:text-4xl lg:text-5xl">
          Modelado BIM y visualizaciones 3D para arquitectura
        </h1>

        <p className="max-w-xl text-sm text-white/65 md:text-base">
          Soy Brenda, modeladora BIM en Archicad. Transformo tus proyectos en
          modelos 3D claros, ordenados y listos para comunicar tu arquitectura a
          clientes y equipos, tanto en documentación como en experiencias
          interactivas web.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-medium text-indigo-500 shadow-md shadow-indigo-600/30 transition hover:bg-indigo-50"
          >
            Ver portfolio 3D
          </Link>

          <Link
            to="/como-trabajo"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white/95"
          >
            Conocer el workflow
          </Link>
        </div>
      </section>

      {/* 3D */}
      <section className="order-1 lg:order-2 h-[280px] md:h-full">
        <Scene3D />
      </section>
    </div>
  );
};
