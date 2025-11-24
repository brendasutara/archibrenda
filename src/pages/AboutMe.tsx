import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
              Sobre mí
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Soy Brenda, arquitecta digital detrás de Archibrenda.
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-4 max-w-xl">
              Desde hace más de 8 años enseño Archicad a arquitectos,
              interioristas y estudiantes de toda Latinoamérica. Mi objetivo es
              que dejes de pelearte con el programa y lo uses como aliado para
              diseñar, documentar y presentar mejor tus proyectos.
            </p>
            <p className="text-sm md:text-base text-slate-600 mb-6 max-w-xl">
              Combino mi experiencia como modeladora BIM, docente y creadora de
              contenido para explicarte Archicad de forma clara, aplicada a
              casos reales y sin vueltas técnicas innecesarias.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/clases"
                className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
              >
                Ver clases 1:1
                <span className="ml-1 text-base">↗</span>
              </Link>
              <Link
                to="/tutoriales"
                className="cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Ver tutoriales gratuitos
                <span className="ml-1 text-base">↗</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center h-52 md:h-80 rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-md shadow-slate-900/5 overflow-hidden">
            <img
              src="/src/assets/brenda-sutara.png"
              alt="Brenda Sutara, creadora de Archibrenda"
              className="h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* MI CAMINO CON ARCHICAD */}
      <section className="border-b border-slate-200 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Mi camino con Archicad y la enseñanza
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
            Empecé como usuaria, después como modeladora para estudios y, casi
            sin darme cuenta, mis colegas comenzaron a pedirme que les explique
            “cómo lo hacía tan rápido”. De ahí nacieron los cursos, los
            tutoriales y las clases personalizadas.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                1 · Usuaria curiosa
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Del dibujo 2D al BIM
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Pasé de dibujar todo en 2D a entender el potencial del modelo 3D
                completo: un solo archivo, muchas vistas y documentación
                coherente.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                2 · Modeladora BIM
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Proyectos reales para estudios
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Trabajé modelando, organizando archivos y creando plantillas
                para estudios de arquitectura, donde el tiempo y la prolijidad
                importan muchísimo.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                3 · Docente y creadora
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Cursos, tutoriales y clases 1:1
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Hoy combino mi experiencia técnica con la docencia: explico el
                programa con ejemplos concretos, lenguaje simple y foco en tu
                práctica profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO ENSEÑO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Cómo son mis clases y contenidos
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
            Mi enfoque es práctico, cercano y sin tecnicismos de más. No quiero
            que memorices botones: quiero que entiendas qué estás haciendo y por
            qué.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F9FAFB] border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Aplicado a tu realidad
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Siempre que podemos, trabajamos con tus archivos, no con un
                ejemplo inventado. Así lo que ves en clase se refleja
                directamente en tus proyectos.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F9FAFB] border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Paso a paso y sin apuro
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Divido los procesos en pasos claros, para que puedas repetirlos
                después sin perderte. Si hace falta, lo vemos de nuevo.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F9FAFB] border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Buen clima y acompañamiento
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Aprender software puede frustrar. Mi rol es que te sientas
                acompañado, que preguntes todo y que salgas de cada sesión con
                más confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDO AYUDARTE A LOGRAR */}
      <section className="border-b border-slate-200 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            ¿En qué puedo ayudarte con Archicad?
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
            Ya sea que recién estés empezando o que vengas usando el programa
            hace años, mis clases y contenidos apuntan a que ganes tiempo y
            seguridad en tu flujo de trabajo.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Empezar desde cero
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Instalación, interfaz, primeros muros, ventanas, vistas y
                documentación básica.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Ordenar tu modelo
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Capas, favoritos, plantillas, organización de archivos y buenas
                prácticas de trabajo en equipo.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Mejorar cómo presentás
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Cortes 3D, vistas para clientes, representación gráfica y
                pequeños trucos para que tu proyecto se vea más profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white pb-16 pt-10 md:pt-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Si querés que Archicad deje de ser un problema y pase a ser una
            herramienta aliada, puedo ayudarte.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6">
            Podés empezar por una clase suelta para destrabar dudas puntuales,
            aprender con mis tutoriales gratuitos o avanzar con un pack de
            clases 1:1.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/clases"
              className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
            >
              Ver planes de clases 1:1
              <span className="ml-1 text-base">↗</span>
            </Link>
            <Link
              to="/tutoriales"
              className="cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Ir a los tutoriales
              <span className="ml-1 text-base">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
