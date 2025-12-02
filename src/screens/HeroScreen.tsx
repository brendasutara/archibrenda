import { Navbar } from "../components/ui/Navbar";
import { Scene3D } from "../three/Scene3D";

export const HeroScreen = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full p-2 justify-center gap-4">
      <div className="flex flex-col">
        <Navbar />

        <div className="flex flex-col justify-center w-full py-10 flex-1 lg:max-w-[520px] gap-4 lg:gap-8 px-2">
          {/* TITLE */}
          <h1 className="hidden lg:block text-4xl md:text-5xl  text-slate-900 leading-tight">
            Aprendé <br /> <span className="italic"> Archicad </span>
            desde cero hasta avanzado <br /> clases 1:1 personalizadas
          </h1>

          <h1 className="block lg:hidden text-4xl md:text-5xl  text-slate-900 leading-tight">
            Aprendé <span className="italic"> Archicad </span>
            <br />
            desde cero hasta avanzado clases 1:1 personalizadas
          </h1>

          {/* SUBTEXT / DESCRIPTION */}
          <p className="text-slate-600 text-base leading-relaxed max-w-[420px]">
            Clases en vivo, en español, aplicadas a tus proyectos reales. No
            memorizás botones: entendés el modelo BIM, armás tu metodología y
            ganás seguridad al proyectar.
          </p>

          <a
            href="https://wa.me/2617007601"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-full w-32 bg-[#FF6B81] px-6 py-2 text-xs font-semibold text-white shadow-sm shadow-[#FF6B81]/40 hover:bg-[#ff516b]"
          >
            Reservar clase
          </a>
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
          <Scene3D />
        </div>
      </div>
    </section>
  );
};
