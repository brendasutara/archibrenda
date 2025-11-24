export const Classes = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
              Clases 1:1 de Archicad
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Aprendé Archicad con clases personalizadas, a tu ritmo y sobre tus
              propios proyectos.
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-4 max-w-xl">
              Sesiones en vivo, 100% online, para que destrabes dudas reales de
              tus proyectos, ordenes tu flujo de trabajo y ganes seguridad
              usando Archicad en el día a día.
            </p>
            <p className="text-xs md:text-sm text-slate-500 mb-6">
              Más de 8 años enseñando Archicad a arquitectos, interioristas y
              estudiantes de Argentina, Chile, Perú, México y toda
              Latinoamérica.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#planes"
                className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B81] px-7 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#FF6B81]/40 transition hover:bg-[#ff516b]"
              >
                Ver planes y precios
              </a>
              <a
                href="#como-funcionan"
                className="cursor-pointer inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
              >
                Cómo funcionan las clases
              </a>
            </div>
          </div>

          <div className="h-48 md:h-72 rounded-3xl bg-gradient-to-br from-[#FFE5EC] via-[#F3E7FF] to-[#E4F0FF] shadow-md shadow-slate-900/5 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Clases 1:1 por videollamada
              </p>
              <p className="text-xs text-slate-600 mb-3">
                Compartimos pantalla, trabajamos sobre tu archivo y cada sesión
                puede quedar grabada para que la repases.
              </p>
              <p className="text-xs text-slate-500">
                Podés empezar con una sola clase o elegir un pack para avanzar
                más rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONAN */}
      <section
        id="como-funcionan"
        className="border-b border-slate-200 bg-[#F9FAFB]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
            Cómo funcionan las clases 1:1
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-8 max-w-2xl">
            Trabajamos de forma simple y organizada, para que aproveches cada
            minuto de la sesión.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Paso 1
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Me contás qué necesitas
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Definimos tu nivel, objetivos y si querés trabajar sobre un
                proyecto propio o empezar desde cero.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Paso 2
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Agendamos y nos conectamos
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Las clases son online, por videollamada. Podés compartir
                pantalla y archivos para trabajar en tiempo real.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Paso 3
              </p>
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Te llevás avances concretos
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Cada sesión termina con algo resuelto: detalles del modelo,
                plantilla más ordenada o dudas destrabadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="planes" className="bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              Planes y precios de clases 1:1
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Podés empezar con una clase suelta o elegir un pack para avanzar
              con más continuidad. Los precios están en dólares estadounidenses
              (USD).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Clase suelta */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Clase suelta
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                Para dudas puntuales
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 30
              </p>
              <p className="text-xs text-slate-500 mb-4">
                1 hora en vivo para destrabar problemas concretos en tu
                proyecto.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• Resolución de dudas específicas</li>
                <li>• Ideal si ya usás Archicad</li>
                <li>• Recomendado para consultas técnicas</li>
              </ul>
              <a
                href="#contacto"
                className="cursor-pointer mt-auto inline-flex justify-center items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Agendar clase suelta
              </a>
            </div>

            {/* Pack inicio */}
            <div className="rounded-3xl border border-[#FF6B81] bg-white p-6 flex flex-col shadow-md shadow-[#FF6B81]/15 relative">
              <span className="absolute top-4 right-4 rounded-full bg-[#FF6B81] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                Más elegido
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Pack Inicio · 5 h
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                De cero a base sólida
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 120
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Para aprender lo esencial de Archicad y sentirte seguro al
                modelar y documentar un proyecto sencillo.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• De cero a modelo básico completo</li>
                <li>• Trabajo sobre tu propio proyecto o uno guía</li>
                <li>• Grabaciones + tareas entre clases</li>
              </ul>
              <a
                href="#contacto"
                className="cursor-pointer mt-auto inline-flex justify-center items-center rounded-full bg-[#FF6B81] px-4 py-2 text-xs font-semibold text-white hover:bg-[#ff516b]"
              >
                Reservar Pack Inicio
              </a>
            </div>

            {/* Pack intensivo */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">
                Pack Intensivo · 10 h
              </h3>
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
                De cero a intermedio
              </p>
              <p className="text-3xl font-semibold text-slate-900 mb-1">
                USD 200
              </p>
              <p className="text-xs text-slate-500 mb-4">
                Para ordenar tu flujo de trabajo completo: modelado 3D,
                organización, documentación y representación.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li>• Modelado 3D más avanzado</li>
                <li>• Organización de capas, favoritos y plantillas</li>
                <li>• Proyectos reales listos para presentar</li>
              </ul>
              <a
                href="#contacto"
                className="cursor-pointer mt-auto inline-flex justify-center items-center rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
              >
                Reservar Pack Intensivo
              </a>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-slate-500 text-center max-w-2xl mx-auto">
            Los pagos pueden realizarse en moneda local equivalente según tu
            país. Una vez que me escribas coordinamos medio de pago y agenda.
          </p>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="bg-[#F9FAFB] border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            ¿Para quién son estas clases?
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Te sirve si…
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                <li>• Usás Archicad o querés empezar desde cero.</li>
                <li>• Querés trabajar sobre tus propios proyectos reales.</li>
                <li>
                  • Sentís que los cursos grabados no responden tus dudas.
                </li>
                <li>• Necesitás ordenar tu modelo, capas y plantilla.</li>
                <li>• Buscás acompañamiento cercano y explicaciones claras.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Quizás no es para vos si…
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-600">
                <li>• Solo querés ver un curso rápido sin practicar.</li>
                <li>• No podés dedicar nada de tiempo entre clases.</li>
                <li>• Buscás aprender otro software distinto a Archicad.</li>
                <li>• Preferís clases masivas sin personalización.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CONTACTO */}
      <section id="contacto" className="bg-white pb-16 pt-12 md:pt-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* FAQ */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
              Preguntas frecuentes sobre las clases
            </h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4 bg-[#F9FAFB]">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  ¿Las clases se graban?
                </p>
                <p className="text-sm text-slate-600">
                  Sí, podemos grabar las sesiones para que las repases después,
                  siempre que la plataforma que usemos lo permita.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 bg-[#F9FAFB]">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  ¿Qué versión de Archicad necesito?
                </p>
                <p className="text-sm text-slate-600">
                  Trabajo principalmente con Archicad 26 en español, pero las
                  bases sirven para versiones cercanas. Si usás otra versión, lo
                  vemos antes de comenzar.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 bg-[#F9FAFB]">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  ¿En qué horario se dictan las clases?
                </p>
                <p className="text-sm text-slate-600">
                  Coordinamos según tu país y disponibilidad. Suelo tener
                  horarios por la tarde (hora Argentina), de lunes a viernes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 bg-[#F9FAFB]">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  ¿Cómo reservo mi lugar?
                </p>
                <p className="text-sm text-slate-600">
                  Me escribís con el plan que te interesa, coordinamos días y
                  horarios, y te paso los datos de pago para confirmar la
                  reserva.
                </p>
              </div>
            </div>
          </div>

          {/* Contacto simple */}
          <div className="rounded-3xl bg-[#FDFBFF] border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-3">
              ¿Querés reservar o tenés dudas?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Escribime contándome tu nivel, desde qué país sos y qué plan te
              interesa. Te respondo con horarios disponibles y próximos pasos.
            </p>

            {/* Podés reemplazar esto por un formulario real o link a WhatsApp */}
            <a
              href="mailto:tu-correo@ejemplo.com"
              className="cursor-pointer inline-flex items-center justify-center w-full rounded-full bg-[#7B6CFF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#5c4ef0] mb-3"
            >
              Escribirme por mail
            </a>

            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer inline-flex items-center justify-center w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Consultar por WhatsApp
            </a>

            <p className="mt-3 text-[11px] text-slate-500">
              *Podés escribir en cualquier momento, te respondo lo antes posible
              😊
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
