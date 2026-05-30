type Tutorial = {
  image: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  accent: string;
};

type TutorialCardProps = {
  tutorial: Tutorial;
};

export const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  return (
    <article
      data-tutorial-card
      className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(15,23,42,0.1)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f4f5]">
        <img
          src={tutorial.image}
          alt={tutorial.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/18 to-transparent opacity-70" />
      </div>

      <div className="p-5">
        <span
          className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
          style={{
            color: tutorial.accent,
            backgroundColor: `${tutorial.accent}18`,
          }}
        >
          {tutorial.category}
        </span>

        <h3 className="mt-4 text-lg font-semibold leading-tight text-slate-950 transition group-hover:text-[#FF6B81]">
          {tutorial.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {tutorial.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          <span>{tutorial.meta}</span>
          <span className="text-[#FF6B81]">Ver</span>
        </div>
      </div>
    </article>
  );
};
