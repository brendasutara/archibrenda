import { Link } from "react-router-dom";
import { HeroTutorial } from "../screens/HeroTutorial";

export const Tutorials = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <HeroTutorial />

      {/* CATEGORÍAS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Categorías
          </h2>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "ABC Archicad", color: "#FF6B81" },
              { name: "Modelado 3D", color: "#7B6CFF" },
              { name: "Documentación", color: "#FFB347" },
              { name: "Representación gráfica", color: "#2EC3FF" },
              { name: "Optimizar el tiempo", color: "#6ee7b7" },
              { name: "Errores frecuentes", color: "#F43F5E" },
            ].map((cat) => (
              <button
                key={cat.name}
                className="cursor-pointer rounded-2xl border border-slate-300 px-4 py-3 bg-white text-sm font-medium hover:shadow-md hover:-translate-y-0.5 transition"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LISTADO DE TUTORIALES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-8">
            Últimos tutoriales
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD */}
            <article className="group cursor-pointer border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="w-full h-40 bg-slate-200 rounded-xl mb-4"></div>
              <span className="inline-block text-[11px] text-[#FF6B81] font-semibold mb-2">
                ABC Archicad
              </span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-[#FF6B81]">
                Archicad desde cero: tus primeros pasos
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Navegación, interfaz y primeros elementos para empezar sin
                frustrarse.
              </p>
              <p className="text-[11px] text-slate-500">
                Video + guía paso a paso
              </p>
            </article>

            <article className="group cursor-pointer border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="w-full h-40 bg-slate-200 rounded-xl mb-4"></div>
              <span className="inline-block text-[11px] text-[#7B6CFF] font-semibold mb-2">
                Modelado 3D
              </span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-[#7B6CFF]">
                Cómo crear tu primer modelo 3D completo
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Desde el plano hasta un modelo limpio y organizado para avanzar
                en BIM.
              </p>
              <p className="text-[11px] text-slate-500">Proyecto guiado</p>
            </article>

            <article className="group cursor-pointer border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
              <div className="w-full h-40 bg-slate-200 rounded-xl mb-4"></div>
              <span className="inline-block text-[11px] text-[#FFB347] font-semibold mb-2">
                Representación gráfica
              </span>
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-[#FFB347]">
                Cortes 3D perspectivados
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Cómo crear cortes 3D listos para presentaciones profesionales.
              </p>
              <p className="text-[11px] text-slate-500">Tip visual</p>
            </article>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/clases"
              className="cursor-pointer inline-flex items-center text-sm font-medium text-[#FF6B81] hover:text-[#ff516b]"
            >
              ¿Querés aprender Archicad conmigo? Ver clases 1:1 ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
