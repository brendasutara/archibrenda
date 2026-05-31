import { useRef } from "react";
import { ArrowLeft, ArrowRight, Youtube } from "lucide-react";
import {
  youtubeChannelUrl,
  youtubeVideos,
  type YouTubeVideo,
} from "../../data/youtubeVideos.data";
import { YoutubeVideoCard } from "./YoutubeVideoCard";

type LatestYoutubeVideosProps = {
  title?: string;
  subtitle?: string;
  limit?: number;
  compact?: boolean;
  variant?: "carousel" | "featured" | "grid";
  className?: string;
};

const getVisibleVideos = (limit?: number) =>
  typeof limit === "number" ? youtubeVideos.slice(0, limit) : youtubeVideos;

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div data-youtube-heading>
    <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B81]/18 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-sm">
      <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
      YouTube
    </span>
    <h2 className="mt-4 max-w-[780px] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.96] tracking-normal text-slate-950">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-4 max-w-[640px] text-sm leading-6 text-slate-600 md:text-base md:leading-7">
        {subtitle}
      </p>
    ) : null}
  </div>
);

const ChannelLink = () => (
  <a
    href={youtubeChannelUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#FF6B81]/24 bg-white px-5 text-sm font-bold text-[#FF6B81] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#FF6B81] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18"
  >
    Ver canal
    <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </a>
);

const CarouselVideos = ({
  videos,
  compact,
}: {
  videos: YouTubeVideo[];
  compact: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "prev" | "next") => {
    const node = scrollRef.current;
    if (!node) return;

    const amount = Math.min(node.clientWidth * 0.86, 840);
    node.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Ver videos anteriores"
        onClick={() => scrollByCards("prev")}
        className="absolute -left-20 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-600 shadow-[0_14px_36px_rgba(15,23,42,0.1)] transition hover:-translate-x-0.5 hover:text-[#FF6B81] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18 md:flex"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      </button>

      <div
        ref={scrollRef}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            data-youtube-video
            className="min-w-[82vw] snap-start sm:min-w-[360px] lg:min-w-[390px]"
          >
            <YoutubeVideoCard video={video} compact={compact} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Ver videos siguientes"
        onClick={() => scrollByCards("next")}
        className="absolute -right-20 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-600 shadow-[0_14px_36px_rgba(15,23,42,0.1)] transition hover:translate-x-0.5 hover:text-[#FF6B81] focus:outline-none focus:ring-4 focus:ring-[#FF6B81]/18 md:flex"
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

const FeaturedVideos = ({
  videos,
  compact,
}: {
  videos: YouTubeVideo[];
  compact: boolean;
}) => {
  const [featuredVideo, ...secondaryVideos] = videos;

  if (!featuredVideo) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
      <div data-youtube-video>
        <YoutubeVideoCard video={featuredVideo} featured />
      </div>

      {secondaryVideos.length > 0 ? (
        <div className="min-w-0">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-1 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {secondaryVideos.map((video) => (
              <div
                key={video.id}
                data-youtube-video
                className="min-w-[78vw] snap-start sm:min-w-[320px] lg:min-w-0"
              >
                <YoutubeVideoCard video={video} compact={compact} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const LatestYoutubeVideos = ({
  title = "Últimos videos",
  subtitle = "Tutoriales rápidos para resolver dudas frecuentes de Archicad y trabajar con más claridad.",
  limit,
  compact = false,
  variant = "carousel",
  className = "",
}: LatestYoutubeVideosProps) => {
  const visibleVideos = getVisibleVideos(limit);

  if (visibleVideos.length === 0) return null;

  return (
    <section
      className={`relative overflow-hidden bg-[#fbf8f8] py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader title={title} subtitle={subtitle} />
          <ChannelLink />
        </div>

        {variant === "featured" ? (
          <FeaturedVideos videos={visibleVideos} compact={compact} />
        ) : null}

        {variant === "carousel" ? (
          <CarouselVideos videos={visibleVideos} compact={compact} />
        ) : null}

        {variant === "grid" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVideos.map((video) => (
              <div key={video.id} data-youtube-video>
                <YoutubeVideoCard video={video} compact={compact} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
