import { Scene3D } from "../three/Scene3D";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid min-h-[calc(100vh-120px)] grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Texto */}
      <section className="flex flex-col gap-6 px-4 py-10 md:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
          Archibrenda · BIM & 3D
        </p>

        <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
          Modelado BIM y visualizaciones 3D para arquitectura
        </h1>

        <p className="max-w-xl text-sm text-slate-600 md:text-base">
          Soy Brenda, modeladora BIM en Archicad. Transformo tus proyectos en
          modelos 3D claros, ordenados y listos para comunicar tu arquitectura a
          clientes y equipos, tanto en documentación como en experiencias
          interactivas web.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-600/30 transition hover:bg-indigo-500"
          >
            Ver portfolio 3D
          </Link>

          <Link
            to="/como-trabajo"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
          >
            Conocer el workflow
          </Link>
        </div>
      </section>

      {/* 3D */}
      <section className="border-t border-slate-200 bg-slate-900/5 lg:border-t-0 lg:border-l lg:bg-transparent">
        <Scene3D />
      </section>
    </div>
  );
};
