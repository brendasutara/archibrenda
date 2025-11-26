import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#FDFBFF]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-6 lg:px-8 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-900 hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B81] to-[#7B6CFF] text-white text-lg font-semibold shadow-sm">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Archibrenda</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              BIM & 3D
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link to="/" className="hover:text-slate-900">
            Inicio
          </Link>
          <Link to="/tutoriales" className="hover:text-slate-900">
            Tutoriales
          </Link>
          <Link to="/clases" className="hover:text-slate-900">
            Clases 1:1
          </Link>
          <Link to="/sobre-mi" className="hover:text-slate-900">
            Sobre mí
          </Link>
        </nav>

        <a
          href="https://wa.me/2617007601"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-[#FF6B81] px-4 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#FF6B81]/40 hover:bg-[#ff516b]"
        >
          Reservar clase
        </a>
      </div>
    </header>
  );
}
