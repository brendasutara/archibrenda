export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-[#FDFBFF]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B81] to-[#7B6CFF] text-white text-sm font-semibold">
            A
          </div>
          <span className="text-sm font-semibold">Archibrenda</span>
        </div>

        <p className="text-xs text-slate-500 sm:ml-4">
          © {year} Archibrenda — Clases de Archicad 1:1 en español.
        </p>

        <div className="flex items-center gap-3 sm:ml-auto text-slate-500">
          {/* Iconos simples, luego podés agregar links reales */}
          <span className="text-xs">IG</span>
          <span className="text-xs">YT</span>
          <span className="text-xs">LI</span>
        </div>
      </div>
    </footer>
  );
}
