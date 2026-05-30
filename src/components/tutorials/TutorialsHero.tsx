import { Search } from "lucide-react";
import { Navbar } from "../ui/Navbar";
import { TutorialsScene3D } from "./TutorialsScene3D";

export const TutorialsHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#fbf8f8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,107,129,0.13),transparent_30%),radial-gradient(circle_at_76%_16%,rgba(255,205,215,0.36),transparent_32%),linear-gradient(180deg,#fff_0%,#fbf8f8_52%,#fff7f8_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[#FF6B81]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1440px] flex-col px-4 pb-16 pt-2 sm:px-6 lg:px-10 lg:pb-10 lg:pt-0">
        <div data-tutorial-nav>
          <Navbar />
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-8 py-8 md:py-10 lg:grid-cols-[minmax(390px,0.9fr)_1.1fr] lg:gap-8 lg:py-0 xl:grid-cols-[minmax(460px,0.9fr)_1.1fr] xl:gap-14">
          <div className="relative z-30 max-w-[660px]">
            <p
              data-tutorial-badge
              className="inline-flex items-center gap-2 rounded-full border border-[#FF6B81]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-[0_12px_34px_rgba(255,107,129,0.12)] backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[#FF6B81]" />
              Tutoriales de Archicad
            </p>

            <h1
              data-tutorial-title
              className="mt-5 max-w-[720px] text-[clamp(2.25rem,9.4vw,4.8rem)] font-semibold leading-[0.93] tracking-normal text-slate-950 sm:mt-6 sm:text-[clamp(3.1rem,7.4vw,5.45rem)] lg:text-[clamp(3.25rem,5.2vw,5.25rem)]"
            >
              Tutoriales de{" "}
              <span className="block sm:inline">Archicad en</span>{" "}
              <span className="block sm:inline">español</span>
            </h1>

            <p
              data-tutorial-copy
              className="mt-5 max-w-[610px] text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg lg:text-base xl:text-lg"
            >
              Aprendé Archicad paso a paso con tutoriales gratuitos: modelado
              3D, documentación, optimización del tiempo, representación
              gráfica y mucho más.
            </p>

            <form
              data-tutorial-search
              className="mt-8 flex w-full max-w-[620px] min-w-0 flex-col gap-3 rounded-[2rem] border border-white/80 bg-white/82 p-2 shadow-[0_22px_70px_rgba(15,23,42,0.1)] backdrop-blur sm:flex-row sm:items-center"
              role="search"
            >
              <label className="sr-only" htmlFor="tutorial-search">
                Buscar tutorial
              </label>
              <div className="flex min-h-12 min-w-0 flex-1 items-center gap-3 rounded-full bg-[#fbf8f8] px-4 text-slate-500 sm:bg-transparent">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  id="tutorial-search"
                  type="search"
                  placeholder="Buscar tutorial..."
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[#FF6B81] px-7 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,107,129,0.3)] transition hover:-translate-y-0.5 hover:bg-[#ff516b] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/22 sm:w-auto"
              >
                Buscar
              </button>
            </form>
          </div>

          <div className="relative z-20 mx-auto w-full max-w-[760px] lg:max-w-none">
            <div className="relative h-[min(390px,48svh)] w-full sm:h-[min(480px,54svh)] md:h-[min(540px,56svh)] lg:h-[min(610px,calc(100svh-136px))] xl:h-[min(680px,calc(100svh-128px))]">
              <div
                data-tutorial-blob
                className="pointer-events-none absolute left-1/2 top-1/2 h-[84%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[42%_58%_52%_48%/48%_36%_64%_52%] bg-[radial-gradient(circle_at_34%_24%,rgba(255,255,255,0.94),transparent_26%),linear-gradient(135deg,rgba(255,107,129,0.36),rgba(255,195,207,0.34)_52%,rgba(255,255,255,0.42)_100%)] shadow-[0_34px_96px_rgba(255,107,129,0.2)]"
              />
              <div className="pointer-events-none absolute left-[13%] top-[16%] h-[55%] w-[76%] rounded-full bg-[#FF6B81]/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-20 w-[58%] -translate-x-1/2 rounded-full bg-slate-900/12 blur-2xl" />

              <div data-tutorial-visual className="absolute inset-0 z-10">
                <TutorialsScene3D />
              </div>

              <div className="pointer-events-none absolute left-0 top-5 z-20 max-w-[148px] rounded-2xl border border-white/75 bg-white/80 px-4 py-3 shadow-[0_18px_54px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:left-8 sm:top-8 sm:max-w-[164px]">
                <p className="text-sm font-bold text-slate-950">
                  Paso a paso
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  ejemplos reales
                </p>
              </div>

              <div className="pointer-events-none absolute bottom-7 right-0 z-20 max-w-[150px] rounded-2xl border border-white/75 bg-white/80 px-4 py-3 shadow-[0_18px_54px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:right-8 sm:max-w-[178px]">
                <p className="text-sm font-bold text-slate-950">
                  Archicad claro
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  modelo y documentacion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
