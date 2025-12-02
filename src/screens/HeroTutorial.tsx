import { Navbar } from "../components/ui/Navbar";
import { Scene3DDetail } from "../three/Scene3DDetail";

export const HeroTutorial = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full p-2 justify-center gap-4">
      <div className="flex flex-col">
        <Navbar />

        <div className="flex flex-col justify-center w-full py-10 flex-1 lg:max-w-[520px] gap-4 lg:gap-8 px-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Tutoriales de Archicad en español
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-slate-600 mb-6">
            Aprendé Archicad paso a paso con tutoriales gratuitos: modelado 3D,
            documentación, optimización del tiempo, representación gráfica y
            mucho más.
          </p>

          {/* Buscador */}
          <div className="flex items-center w-full max-w-xl">
            <input
              type="text"
              placeholder="Buscar tutorial…"
              className="w-full border border-slate-300 rounded-l-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[#7B6CFF]"
            />
            <button className="bg-[#7B6CFF] text-white px-6 py-3 rounded-r-full cursor-pointer hover:bg-[#6b5ae9] transition">
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 py-2 md:px-4">
          <a
            href="https://wa.me/2617007601"
            target="_blank"
            rel="noreferrer"
            className="rounded-full text-[#FF6B81] text-xs font-semibold hover:text-[#ff516b] hover:underline underline-offset-4"
          >
            Reservar mi primera clase
          </a>
        </div>

        <div className="hero">
          <Scene3DDetail />
        </div>
      </div>
    </section>
  );
};
