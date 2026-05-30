import { Scene3D } from "../../three/Scene3D";

type HeroModelShowcaseProps = {
  showHint: boolean;
  onFirstInteract?: () => void;
};

const floatingCards = [
  {
    label: "Modelo BIM",
    detail: "volumen, capas y criterio",
    className: "left-5 top-4 sm:left-10 sm:top-6 lg:left-8 lg:top-8 xl:left-12",
    mobileVisible: true,
  },
  {
    label: "Documentación",
    detail: "plantas, cortes y láminas",
    className: "right-4 top-14 sm:right-8 sm:top-16 lg:right-4 xl:right-8",
    mobileVisible: false,
  },
  {
    label: "Corrección 1:1",
    detail: "feedback sobre tu avance",
    className:
      "left-4 bottom-16 sm:left-10 sm:bottom-20 lg:left-4 lg:bottom-24 xl:left-10",
    mobileVisible: false,
  },
  {
    label: "Proyecto de cocina",
    detail: "resultado final aplicado",
    className:
      "right-4 bottom-6 sm:right-9 sm:bottom-8 lg:right-4 lg:bottom-12 xl:right-8",
    mobileVisible: true,
  },
];

export const HeroModelShowcase = ({
  showHint,
  onFirstInteract,
}: HeroModelShowcaseProps) => {
  return (
    <div
      data-hero-visual
      className="relative z-20 mx-auto flex w-full max-w-[680px] items-center justify-center lg:max-w-[760px] xl:max-w-none"
    >
      <div className="relative h-[min(340px,48svh)] w-full sm:h-[min(430px,54svh)] md:h-[min(500px,56svh)] lg:h-[min(540px,calc(100svh-150px))] xl:h-[min(640px,calc(100svh-150px))] 2xl:h-[680px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[38%_62%_52%_48%/48%_38%_62%_52%] bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.92),transparent_26%),linear-gradient(135deg,rgba(255,107,129,0.36),rgba(255,195,207,0.34)_48%,rgba(255,255,255,0.36)_100%)] shadow-[0_32px_90px_rgba(255,107,129,0.18)] sm:h-[86%]" />
        <div className="pointer-events-none absolute left-[12%] top-[16%] h-[56%] w-[76%] rounded-full bg-[#FF6B81]/16 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-20 w-[60%] -translate-x-1/2 rounded-full bg-slate-900/12 blur-2xl sm:h-24" />

        <div className="absolute inset-0 z-20">
          <Scene3D onFirstInteract={onFirstInteract} />
        </div>

        <div className="pointer-events-none absolute inset-0 z-30">
          {floatingCards.map((card) => (
            <div
              data-hero-card
              key={card.label}
              className={`absolute max-w-[150px] rounded-2xl border border-white/75 bg-white/78 px-3 py-2.5 shadow-[0_18px_54px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:max-w-[180px] sm:px-4 sm:py-3 ${
                card.mobileVisible ? "" : "hidden sm:block"
              } ${card.className}`}
            >
              <p className="text-xs font-bold leading-tight text-slate-950 sm:text-sm">
                {card.label}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-[11px] sm:tracking-[0.12em]">
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {showHint && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 z-40 -translate-x-1/2 sm:bottom-5">
            <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-3 py-2 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white">
                3D
              </span>
              Arrastrá suave para mover
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
