import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Tutoriales", path: "/tutoriales" },
  { label: "Clases", path: "/clases" },
  { label: "Sobre mí", path: "/sobre-mi" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineBottomRef = useRef<HTMLSpanElement>(null);
  const menuLabelRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, {
        autoAlpha: 0,
        yPercent: -3,
        pointerEvents: "none",
      });
      gsap.set([menuLabelRef.current, ctaRef.current, ...linkRefs.current], {
        autoAlpha: 0,
        y: 28,
      });
      gsap.set([lineTopRef.current, lineBottomRef.current], {
        transformOrigin: "50% 50%",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    const items = [menuLabelRef.current, ...linkRefs.current, ctaRef.current];
    const timeline = gsap.timeline({
      defaults: { ease: open ? "power3.out" : "power3.inOut" },
    });

    if (open) {
      timeline
        .to(
          overlayRef.current,
          {
            autoAlpha: 1,
            yPercent: 0,
            pointerEvents: "auto",
            duration: 0.5,
          },
          0
        )
        .to(lineTopRef.current, { y: 4, rotate: 45, duration: 0.32 }, 0)
        .to(lineBottomRef.current, { y: -4, rotate: -45, duration: 0.32 }, 0)
        .to(
          items,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.07,
          },
          0.14
        );
    } else {
      timeline
        .to(items, { autoAlpha: 0, y: 22, duration: 0.2, stagger: 0.025 }, 0)
        .to(
          overlayRef.current,
          {
            autoAlpha: 0,
            yPercent: -3,
            pointerEvents: "none",
            duration: 0.32,
          },
          0.08
        )
        .to(
          [lineTopRef.current, lineBottomRef.current],
          { y: 0, rotate: 0, duration: 0.26 },
          0
        );
    }

    return () => {
      timeline.kill();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const overlay =
    typeof document !== "undefined" &&
    createPortal(
      <div
        id="main-menu-overlay"
        ref={overlayRef}
        className="fixed inset-0 z-[120] overflow-hidden bg-[#fbf8f8] px-5 pb-10 pt-24 text-slate-950 sm:px-8 sm:pb-12 sm:pt-28 lg:px-14 lg:pt-32"
      >
        <div className="absolute left-0 right-0 top-0 z-[140] mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-10 lg:pt-3">
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Cerrar menú"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/72 text-slate-950 shadow-sm backdrop-blur-xl transition hover:border-[#FF6B81]/30 hover:bg-white"
              onClick={closeMenu}
            >
              <span className="relative block h-4 w-6" aria-hidden="true">
                <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-px w-6 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,107,129,0.16),transparent_28%),radial-gradient(circle_at_86%_78%,rgba(255,205,215,0.34),transparent_34%)]" />

        <div className="relative mx-auto grid h-full max-w-[1240px] grid-rows-[auto_1fr_auto] gap-8">
          <div className="flex items-start justify-between border-b border-slate-200/80 pb-5">
            <div ref={menuLabelRef}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6B81]">
                Menu
              </p>
              <p className="mt-3 max-w-[420px] text-sm leading-6 text-slate-500">
                Clases, recursos y contenido para aprender Archicad con
                proyectos reales.
              </p>
            </div>
          </div>

          <nav className="flex items-center">
            <ul className="w-full space-y-3 sm:space-y-4">
              {links.map((link, index) => (
                <li key={link.path}>
                  <NavLink
                    ref={(element) => {
                      if (element) linkRefs.current[index] = element;
                    }}
                    to={link.path}
                    onClick={closeMenu}
                    className="group flex items-baseline justify-between border-b border-slate-200/80 py-3 text-slate-950 transition hover:border-[#FF6B81]/40 hover:text-[#FF6B81] sm:py-4"
                  >
                    <span className="text-[clamp(2.4rem,9vw,6.5rem)] font-semibold leading-none tracking-normal">
                      {link.label}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition group-hover:text-[#FF6B81]">
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[460px] text-sm leading-6 text-slate-500">
              Aprendé a modelar, documentar y presentar tus proyectos con una
              metodología clara desde la primera clase.
            </p>

            <a
              ref={ctaRef}
              href="https://wa.me/2617007601"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF6B81] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(255,107,129,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ff516b]"
            >
              Reservar mi primera clase
            </a>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <header ref={rootRef} className="relative z-[130]">
      <div className="relative z-[130] flex items-center justify-between px-1 py-3 sm:px-4">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="rounded-full border border-white/70 bg-white/62 px-4 py-2 text-sm font-semibold italic text-slate-950 shadow-sm backdrop-blur-xl transition hover:border-[#FF6B81]/30 hover:text-[#FF6B81]"
        >
          Archibrenda
        </NavLink>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-menu-overlay"
          className="group inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/70 bg-white/62 text-slate-950 shadow-sm backdrop-blur-xl transition hover:border-[#FF6B81]/30 hover:bg-white/80"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              ref={lineTopRef}
              className="absolute left-0 top-1 block h-px w-6 bg-current transition-transform duration-300 group-hover:translate-y-0.5"
            />
            <span
              ref={lineBottomRef}
              className="absolute bottom-1 left-0 block h-px w-6 bg-current transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </span>
        </button>
      </div>

      {overlay}
    </header>
  );
};
