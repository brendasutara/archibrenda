import { Instagram, Youtube, Globe, ArrowUpRight } from "lucide-react";

type LinkItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
  note?: string;
};

export const Links = () => {
  const LINKS: LinkItem[] = [
    {
      label: "Reservar mi primera clase 1:1",
      href: "https://archibrenda.com/clases",
      icon: <ArrowUpRight className="h-5 w-5" />,
      variant: "primary",
      note: "Clases en vivo • Enfocadas en tus dudas",
    },
    {
      label: "Instagram (tips)",
      href: "https://www.instagram.com/archibrenda/",
      icon: <Instagram className="h-5 w-5" />,
      variant: "secondary",
    },
    {
      label: "YouTube (tutoriales completos)",
      href: "https://www.youtube.com/@Archibrenda",
      icon: <Youtube className="h-5 w-5" />,
      variant: "secondary",
    },
    {
      label: "Mi web (programas y recursos)",
      href: "https://archibrenda.com/",
      icon: <Globe className="h-5 w-5" />,
      variant: "secondary",
    },
  ];

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-b from-[#F8F4FF] via-[#FFF7FB] to-white">
      {/* decoraciones suaves */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute top-52 left-10 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-md flex-col px-4 py-10">
        {/* Card */}
        <section className="rounded-[32px] border border-slate-200/70 bg-white/70 backdrop-blur-md shadow-[0_24px_80px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* header top strip */}
          <div className="h-2 w-full bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300" />

          <div className="px-6 pt-7 pb-6">
            {/* perfil */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-300 to-violet-300 blur-sm opacity-70" />
                <img
                  src="/brenda-sutara-byn.jpg"
                  alt="Brenda - Archibrenda"
                  className="relative h-20 w-20 rounded-full object-cover ring-4 ring-white"
                />
              </div>

              <h1 className="mt-4 text-xl font-semibold text-slate-900">
                Archibrenda
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Aprendé Archicad desde cero hasta avanzado • Clases 1:1
                personalizadas
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                Mendoza, AR • Online
              </div>
            </div>

            {/* Links */}
            <div className="mt-7 space-y-3">
              {LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "group block w-full rounded-full border px-5 py-3 transition",
                    "focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-white/40",
                    item.variant === "primary"
                      ? "border-rose-200 bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-[0_10px_30px_rgba(244,63,94,0.25)]"
                      : "border-slate-200 bg-white/80 text-slate-900 hover:bg-white shadow-sm",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          "grid h-9 w-9 place-items-center rounded-full",
                          item.variant === "primary"
                            ? "bg-white/15"
                            : "bg-slate-50 border border-slate-200",
                        ].join(" ")}
                      >
                        {item.icon}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium leading-tight">
                          {item.label}
                        </span>
                        {item.note ? (
                          <span
                            className={[
                              "mt-0.5 text-xs leading-tight",
                              item.variant === "primary"
                                ? "text-white/80"
                                : "text-slate-500",
                            ].join(" ")}
                          >
                            {item.note}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <span
                      className={[
                        "text-xs opacity-70 transition group-hover:opacity-100",
                        item.variant === "primary"
                          ? "text-white"
                          : "text-slate-500",
                      ].join(" ")}
                    >
                      Abrir
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* footer mini */}
            <div className="mt-7 border-t border-slate-200/70 pt-5 text-center">
              <p className="text-xs text-slate-500">
                Tip: si venís de TikTok, tocá{" "}
                <span className="font-medium text-slate-700">“Reservar”</span> y
                listo ✨
              </p>
            </div>
          </div>
        </section>

        {/* nota legal / mini */}
        <p className="mt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Archibrenda
        </p>
      </main>
    </div>
  );
};
