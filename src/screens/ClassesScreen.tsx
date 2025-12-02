import { Link } from "react-router-dom";

export const ClassesScreen = () => {
  return (
    <section className="bg-[#F9FAFB] border-t border-slate-200/70">
      <div className="2xl:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20 text-center">
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
  );
};
