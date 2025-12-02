import { Link } from "react-router-dom";

export const AboutMeScreen = () => {
  return (
    <section className="bg-white border-t border-slate-200/70 pb-16 pt-10 md:pt-12">
      <div className="2xl:max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
            Sobre mí
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Soy Brenda, la persona detrás de Archibrenda.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-3">
            Soy profesora de Archicad con más de 8 años enseñando BIM y modelado
            3D a estudiantes, arquitectos e interioristas. Mi objetivo es que
            entiendas el programa y ganes seguridad al modelar.
          </p>
          <p className="text-sm md:text-base text-slate-600 mb-4">
            Trabajo con tus archivos, tus dudas y tu realidad, para que cada
            sesión se traduzca en avance concreto en tu día a día profesional.
          </p>
          <Link
            to="/sobre-mi"
            className="cursor-pointer inline-flex items-center text-sm font-medium text-[#7B6CFF] hover:text-[#5c4ef0]"
          >
            Conocer más sobre cómo enseño
            <span className="ml-1 text-base">↗</span>
          </Link>
        </div>

        <div className="flex justify-center h-44 md:h-80 rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-md shadow-slate-900/5">
          <img
            loading="lazy"
            src="/brenda-sutara.png"
            alt="Brenda Sutara, profesora de Archicad"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};
