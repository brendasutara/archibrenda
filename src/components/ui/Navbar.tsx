import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="bg-slate-200 px-4 py-2 rounded-full">
          <h3 className="italic">Archibrenda</h3>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 bg-slate-200 rounded-full px-2 py-1">
          {["Inicio", "Tutoriales", "Clases", "Sobre mi"].map((label, i) => {
            const path =
              label === "Inicio"
                ? "/"
                : `/${label.toLowerCase().replace(" ", "-")}`;

            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  `2xl:px-4 px-2 py-1.5 rounded-full text-sm transition ${
                    isActive
                      ? "bg-white text-black shadow-inner w-28 text-center"
                      : "text-slate-600 hover:text-[#FF6B81]"
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg rounded-xl mx-4 p-4 flex flex-col gap-4 z-50">
          {["Inicio", "Tutoriales", "Clases", "Sobre mi"].map((label, i) => {
            const path =
              label === "Inicio"
                ? "/"
                : `/${label.toLowerCase().replace(" ", "-")}`;

            return (
              <NavLink
                key={i}
                to={path}
                onClick={() => setOpen(false)}
                className="text-slate-800 text-lg font-medium py-2 border-b border-slate-200"
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
