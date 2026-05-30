type TutorialCategoriesProps = {
  categories: string[];
};

export const TutorialCategories = ({ categories }: TutorialCategoriesProps) => {
  return (
    <section
      data-tutorial-categories
      className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 md:py-16 lg:px-10"
    >
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-[#FF6B81]/18 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-sm">
            Explorar por tema
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            Categorías
          </h2>
        </div>
        <p className="max-w-[470px] text-sm leading-6 text-slate-600">
          Elegi el tema que necesitás reforzar y avanzá con tutoriales claros,
          aplicados y gratuitos.
        </p>
      </div>

      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <button
            data-tutorial-category
            key={category}
            type="button"
            className="group min-h-24 min-w-[178px] cursor-pointer rounded-2xl border border-white/80 bg-white/86 px-4 py-4 text-left shadow-sm shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:border-[#FF6B81]/25 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:min-w-0"
          >
            <span className="mb-5 block h-2 w-2 rounded-full bg-[#FF6B81] transition group-hover:scale-125" />
            <span className="text-sm font-bold leading-snug text-slate-950 transition group-hover:text-[#FF6B81]">
              {category}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
