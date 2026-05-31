import {
  ArrowRight,
  CheckCircle2,
  Info,
  Lightbulb,
  Play,
  TriangleAlert,
} from "lucide-react";
import { Link } from "react-router-dom";
import type {
  TutorialContentBlock,
  TutorialImageBlock,
  TutorialNoteBlock,
} from "../../data/tutorials.data";

type TutorialContentRendererProps = {
  content: TutorialContentBlock[];
};

const noteStyles: Record<
  TutorialNoteBlock["type"],
  {
    icon: typeof Info;
    className: string;
    iconClassName: string;
  }
> = {
  note: {
    icon: Info,
    className: "border-[#FF6B81]/18 bg-[#FF6B81]/8 text-slate-700",
    iconClassName: "bg-[#FF6B81]/12 text-[#FF6B81]",
  },
  tip: {
    icon: Lightbulb,
    className: "border-amber-200 bg-amber-50 text-amber-950",
    iconClassName: "bg-amber-100 text-amber-700",
  },
  warning: {
    icon: TriangleAlert,
    className: "border-rose-200 bg-rose-50 text-rose-950",
    iconClassName: "bg-rose-100 text-rose-700",
  },
  success: {
    icon: CheckCircle2,
    className: "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconClassName: "bg-emerald-100 text-emerald-700",
  },
};

const TutorialImage = ({ block }: { block: TutorialImageBlock }) => (
  <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
    <img src={block.src} alt={block.alt} className="w-full object-cover" loading="lazy" />
    {block.caption ? (
      <figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-500">
        {block.caption}
      </figcaption>
    ) : null}
  </figure>
);

const TutorialNote = ({ block }: { block: TutorialNoteBlock }) => {
  const style = noteStyles[block.type];
  const Icon = style.icon;

  return (
    <aside
      className={`rounded-[1.5rem] border p-5 shadow-sm ${style.className}`}
      data-tutorial-block={block.type}
    >
      <div className="flex gap-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.iconClassName}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          {block.title ? (
            <h3 className="text-base font-semibold text-slate-950">{block.title}</h3>
          ) : null}
          <p className="mt-1 text-sm leading-7">{block.text}</p>
        </div>
      </div>
    </aside>
  );
};

export const TutorialContentRenderer = ({ content }: TutorialContentRendererProps) => {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            return (
              <section key={key} className="pt-4" data-tutorial-step>
                {block.eyebrow ? (
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
                    {block.eyebrow}
                  </span>
                ) : null}
                <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                  {block.title}
                </h2>
                {block.text ? (
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                    {block.text}
                  </p>
                ) : null}
              </section>
            );

          case "paragraph":
            return (
              <section
                key={key}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8"
                data-tutorial-step
              >
                {block.eyebrow ? (
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
                    {block.eyebrow}
                  </span>
                ) : null}
                {block.title ? (
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
                    {block.title}
                  </h2>
                ) : null}
                <p className="mt-4 text-base leading-8 text-slate-600">{block.text}</p>
              </section>
            );

          case "image":
            return (
              <div key={key} data-tutorial-step>
                <TutorialImage block={block} />
              </div>
            );

          case "step":
            const stepNumber = content
              .slice(0, index + 1)
              .filter((contentBlock) => contentBlock.type === "step").length;

            return (
              <section
                key={key}
                className="grid gap-5 rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 md:p-7"
                data-tutorial-step
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF6B81] text-sm font-bold text-white shadow-[0_14px_32px_rgba(255,107,129,0.28)]">
                    {stepNumber}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold leading-tight text-slate-950">
                      {block.title}
                    </h2>
                    <p className="mt-3 text-base leading-8 text-slate-600">{block.text}</p>
                  </div>
                </div>
                {block.image ? <TutorialImage block={block.image} /> : null}
              </section>
            );

          case "note":
          case "tip":
          case "warning":
          case "success":
            return (
              <div key={key} data-tutorial-step>
                <TutorialNote block={block} />
              </div>
            );

          case "twoColumns":
            return (
              <div key={key} className="grid gap-6 md:grid-cols-2" data-tutorial-step>
                <TutorialContentRenderer content={block.left} />
                <TutorialContentRenderer content={block.right} />
              </div>
            );

          case "gallery":
            return (
              <div key={key} className="grid gap-5 sm:grid-cols-2" data-tutorial-step>
                {block.images.map((image) => (
                  <TutorialImage key={image.src} block={image} />
                ))}
              </div>
            );

          case "youtube":
          case "video":
            return (
              <section
                key={key}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
                data-tutorial-step
              >
                <div className="relative aspect-video bg-slate-950">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${
                      block.type === "youtube" ? block.videoId : block.youtubeId
                    }`}
                    title={block.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B81]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF6B81]">
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    Video
                  </span>
                  <h2 className="mt-4 text-xl font-semibold leading-tight text-slate-950">
                    {block.title}
                  </h2>
                  {block.caption ? (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {block.caption}
                    </p>
                  ) : null}
                </div>
              </section>
            );

          case "cta":
            return (
              <section
                key={key}
                className="rounded-[1.75rem] border border-[#FF6B81]/18 bg-[#fff1f4] p-6 md:p-8"
                data-tutorial-step
              >
                <h2 className="text-2xl font-semibold leading-tight text-slate-950">
                  {block.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                  {block.text}
                </p>
                <Link
                  to={block.href}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FF6B81] px-5 text-sm font-bold text-white shadow-[0_16px_38px_rgba(255,107,129,0.3)] transition hover:-translate-y-0.5 hover:bg-[#ff516b] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/24"
                >
                  {block.label ?? block.buttonText}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </section>
            );
        }
      })}
    </div>
  );
};
