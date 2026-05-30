import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const TutorialsCTA = () => {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-10">
      <div
        data-tutorial-cta
        className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[2rem] border border-white/80 bg-white px-5 py-10 shadow-[0_28px_90px_rgba(15,23,42,0.08)] sm:px-8 md:px-12 md:py-14"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,107,129,0.18),transparent_28%),radial-gradient(circle_at_12%_90%,rgba(255,205,215,0.28),transparent_32%)]" />
        <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[700px]">
            <span className="inline-flex rounded-full border border-[#FF6B81]/18 bg-[#FF6B81]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
              Clases personalizadas
            </span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.98] tracking-normal text-slate-950">
              ¿Querés aprender Archicad conmigo?
            </h2>
            <p className="mt-5 max-w-[640px] text-sm leading-7 text-slate-600 md:text-base">
              Si querés avanzar más rápido, podés combinar estos tutoriales
              gratuitos con clases 1:1 aplicadas a tus propios proyectos.
            </p>
          </div>

          <Link
            to="/clases"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF6B81] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_44px_rgba(255,107,129,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ff516b] hover:shadow-[0_24px_54px_rgba(255,107,129,0.4)] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/22"
          >
            Ver clases 1:1
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
