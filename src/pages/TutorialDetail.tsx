import { useLayoutEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Clock, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useParams } from "react-router-dom";
import { TutorialCard } from "../components/tutorials/TutorialCard";
import { TutorialContentRenderer } from "../components/tutorials/TutorialContentRenderer";
import { getRelatedTutorials, getTutorialBySlug } from "../data/tutorials.data";

gsap.registerPlugin(ScrollTrigger);

export const TutorialDetail = () => {
  const { slug } = useParams();
  const tutorial = getTutorialBySlug(slug);
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(
          ["[data-detail-hero]", "[data-tutorial-step]", "[data-related-card]"],
          { autoAlpha: 1, y: 0, scale: 1 }
        );
        return;
      }

      gsap.fromTo(
        "[data-detail-hero]",
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08 }
      );

      gsap.fromTo(
        "[data-tutorial-step]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.58,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-detail-content]",
            start: "top 76%",
          },
        }
      );

      gsap.fromTo(
        "[data-related-card]",
        { autoAlpha: 0, y: 24, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-related-grid]",
            start: "top 82%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [slug]);

  if (!tutorial) {
    return (
      <main className="min-h-screen bg-[#fbf8f8] px-4 py-24 text-slate-950 sm:px-6 lg:px-10">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-sm">
          <span className="inline-flex rounded-full border border-[#FF6B81]/18 bg-[#FF6B81]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
            Tutorial no encontrado
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-950">
            No encontré este tutorial.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Puede que el enlace haya cambiado o que el tutorial todavía no esté publicado.
          </p>
          <Link
            to="/tutoriales"
            className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FF6B81] px-5 text-sm font-bold text-white transition hover:bg-[#ff516b] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/24"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a tutoriales
          </Link>
        </section>
      </main>
    );
  }

  const relatedTutorials = getRelatedTutorials(tutorial);
  const metadata = [tutorial.meta, tutorial.level, tutorial.duration].filter(Boolean);
  const detailContent = tutorial.youtubeVideoId
    ? [
        {
          type: "youtube" as const,
          videoId: tutorial.youtubeVideoId,
          title: tutorial.title,
          caption: "Mirá el video y seguí la guía escrita paso a paso.",
        },
        ...tutorial.content,
      ]
    : tutorial.content;

  return (
    <div ref={pageRef} className="min-h-screen overflow-x-hidden bg-[#fbf8f8] text-slate-950">
      <main className="bg-[linear-gradient(180deg,#fbf8f8_0%,#ffffff_46%,#f7f4f5_100%)]">
        <section className="mx-auto grid max-w-[1240px] gap-10 px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <div data-detail-hero>
            <Link
              to="/tutoriales"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#FF6B81] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Tutoriales
            </Link>

            <span
              className="mt-8 inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{
                color: tutorial.accent,
                backgroundColor: `${tutorial.accent}18`,
              }}
            >
              {tutorial.category}
            </span>

            <h1 className="mt-5 text-[clamp(2.65rem,8vw,5.75rem)] font-semibold leading-[0.94] tracking-normal text-slate-950">
              {tutorial.title}
            </h1>
            <p className="mt-6 max-w-[680px] text-base leading-8 text-slate-600 md:text-lg md:leading-9">
              {tutorial.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {metadata.map((item, index) => (
                <span
                  key={item}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 shadow-sm"
                >
                  {index === 1 ? (
                    <GraduationCap className="h-4 w-4 text-[#FF6B81]" aria-hidden="true" />
                  ) : null}
                  {index === 2 ? (
                    <Clock className="h-4 w-4 text-[#FF6B81]" aria-hidden="true" />
                  ) : null}
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            data-detail-hero
            className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_28px_90px_rgba(15,23,42,0.1)]"
          >
            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="aspect-[16/11] w-full rounded-[1.55rem] object-cover"
            />
          </div>
        </section>

        <section
          data-detail-content
          className="mx-auto grid max-w-[1120px] gap-10 px-4 pb-16 sm:px-6 md:pb-24 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-10"
        >
          <article>
            <TutorialContentRenderer content={detailContent} />
          </article>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81]">
                En esta guía
              </span>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-slate-950">
                Resolvé el problema paso a paso.
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Seguí el orden del tutorial y guardá la ruta de biblioteca correcta para futuras instalaciones.
              </p>
              <Link
                to="/clases"
                className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#FF6B81]/24 px-4 text-sm font-bold text-[#FF6B81] transition hover:bg-[#FF6B81] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
              >
                Clase 1:1
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 md:pb-24 lg:px-10">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-[#FF6B81]/18 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-sm">
                También podés ver
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
                Tutoriales relacionados
              </h2>
            </div>
            <Link
              to="/tutoriales"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B81] transition hover:text-[#ff516b]"
            >
              Ver todos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div data-related-grid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTutorials.map((relatedTutorial) => (
              <div key={relatedTutorial.slug} data-related-card>
                <TutorialCard tutorial={relatedTutorial} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
