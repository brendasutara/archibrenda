import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Inicio", to: "/" },
  { label: "Tutoriales", to: "/tutoriales" },
  { label: "Clases", to: "/clases" },
  { label: "Sobre mí", to: "/sobre-mi" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-[#fbf8f9] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,107,129,0.13),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(255,205,215,0.28),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="grid gap-10 border-b border-slate-200/80 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#FF6B81]/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B81] shadow-sm backdrop-blur">
              Archibrenda
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[0.98] tracking-normal text-slate-950 sm:text-4xl md:text-5xl">
              Aprendé Archicad con proyectos reales y una guía clara.
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <a
              href="https://wa.me/2617007601"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#FF6B81] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(255,107,129,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff516b] sm:w-auto"
            >
              Reservar mi primera clase
            </a>
            <p className="max-w-sm text-sm leading-6 text-slate-600 lg:text-right">
              Clases 1:1 para modelar, documentar y presentar tus proyectos con
              seguridad.
            </p>
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              to="/"
              className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold italic text-slate-950 shadow-sm backdrop-blur transition hover:border-[#FF6B81]/30 hover:text-[#FF6B81]"
            >
              Archibrenda
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Landing y contenidos creados por Brenda Sutara para aprender
              Archicad de forma aplicada, clara y profesional.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#FF6B81]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Brenda Sutara. Todos los derechos reservados.
          </p>

          <a
            href="https://brendasutara.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-600 transition hover:text-[#FF6B81]"
          >
            brendasutara.com
          </a>
        </div>
      </div>
    </footer>
  );
}
