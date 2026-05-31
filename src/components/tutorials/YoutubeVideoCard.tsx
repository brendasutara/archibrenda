import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { YouTubeVideo } from "../../data/youtubeVideos.data";

type YoutubeVideoCardProps = {
  video: YouTubeVideo;
  compact?: boolean;
  featured?: boolean;
};

export const YoutubeVideoCard = ({
  video,
  compact = false,
  featured = false,
}: YoutubeVideoCardProps) => {
  return (
    <article
      className={[
        "group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 transition duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]",
        featured ? "h-full" : "",
      ].join(" ")}
    >
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/22"
        aria-label={`Ver video en YouTube: ${video.title}`}
      >
        <div
          className={[
            "relative overflow-hidden bg-[#f7f4f5]",
            featured ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-video",
          ].join(" ")}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/34 via-slate-950/4 to-transparent" />
          <span
            className={[
              "absolute left-4 top-4 inline-flex items-center justify-center rounded-full bg-[#FF6B81] text-white shadow-[0_14px_32px_rgba(255,107,129,0.32)] transition duration-300 group-hover:scale-105 group-hover:bg-[#ff516b]",
              featured ? "h-14 w-14" : "h-11 w-11",
            ].join(" ")}
          >
            <Play
              className={featured ? "h-6 w-6 fill-current" : "h-5 w-5 fill-current"}
              aria-hidden="true"
            />
          </span>
        </div>
      </a>

      <div className={featured ? "p-6 md:p-7" : compact ? "p-4" : "p-5"}>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex rounded-full bg-[#FF6B81]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF6B81]">
            {video.category}
          </span>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
            {video.duration}
          </span>
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
        >
          <h3
            className={[
              "font-semibold leading-tight text-slate-950 transition group-hover:text-[#FF6B81]",
              featured
                ? "text-2xl md:text-3xl"
                : compact
                  ? "line-clamp-2 text-base"
                  : "line-clamp-2 text-lg",
            ].join(" ")}
          >
            {video.title}
          </h3>
        </a>

        {featured || !compact ? (
          <p
            className={[
              "mt-3 text-sm leading-6 text-slate-600",
              featured ? "md:text-base md:leading-7" : "line-clamp-2",
            ].join(" ")}
          >
            {video.description}
          </p>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#FF6B81] transition hover:text-[#ff516b] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
          >
            Ver video
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {video.relatedTutorialSlug ? (
            <Link
              to={`/tutoriales/${video.relatedTutorialSlug}`}
              className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
            >
              Ver guía
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
};
