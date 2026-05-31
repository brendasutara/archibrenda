export type TutorialParagraphBlock = {
  type: "paragraph";
  eyebrow?: string;
  title?: string;
  text: string;
};

export type TutorialHeadingBlock = {
  type: "heading";
  title: string;
  eyebrow?: string;
  text?: string;
};

export type TutorialImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
};

export type TutorialStepBlock = {
  type: "step";
  title: string;
  text: string;
  image?: TutorialImageBlock;
};

export type TutorialNoteBlock = {
  type: "note" | "tip" | "warning" | "success";
  title?: string;
  text: string;
};

export type TutorialTwoColumnsBlock = {
  type: "twoColumns";
  left: TutorialContentBlock[];
  right: TutorialContentBlock[];
};

export type TutorialGalleryBlock = {
  type: "gallery";
  images: TutorialImageBlock[];
};

export type TutorialCtaBlock = {
  type: "cta";
  title: string;
  text: string;
  label?: string;
  buttonText?: string;
  href: string;
};

export type TutorialYouTubeBlock = {
  type: "youtube";
  videoId: string;
  title: string;
  caption?: string;
};

export type TutorialVideoBlock = {
  type: "video";
  youtubeId: string;
  title: string;
  caption?: string;
};

export type TutorialContentBlock =
  | TutorialParagraphBlock
  | TutorialHeadingBlock
  | TutorialImageBlock
  | TutorialStepBlock
  | TutorialNoteBlock
  | TutorialTwoColumnsBlock
  | TutorialGalleryBlock
  | TutorialCtaBlock
  | TutorialYouTubeBlock
  | TutorialVideoBlock;

export type Tutorial = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  meta: string;
  accent: string;
  level?: string;
  duration?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  content: TutorialContentBlock[];
};

export const tutorials: Tutorial[] = [
  {
    slug: "puntos-en-planta",
    image: "/blog/puntos-en-planta/portada.png",
    category: "Errores frecuentes",
    title: "Se me ven puntitos en planta",
    description:
      "Te enseño cómo solucionar cuando aparecen estos famosos puntos en planta, que hacen que desaparezcan hasta las puertas.",
    meta: "Video + guía paso a paso",
    accent: "#FF6B81",
    level: "Inicial",
    duration: "8 min",
    content: [
      {
        type: "paragraph",
        eyebrow: "Problema",
        title: "Hemos perdido nuestras bibliotecas.",
        text: "Cuando Archicad no encuentra las bibliotecas vinculadas, algunos objetos dejan de mostrarse correctamente. En planta pueden aparecer puntitos, símbolos incompletos o puertas que directamente desaparecen.",
      },
      {
        type: "paragraph",
        eyebrow: "Solución",
        title: "Tenemos que cargar las bibliotecas que se encuentran en nuestros archivos de programa.",
        text: "La corrección consiste en volver a vincular la biblioteca correspondiente desde el Administrador de bibliotecas.",
      },
      {
        type: "step",
        title: "Abrí el Administrador de bibliotecas",
        text: "Vamos a Archivo > Bibliotecas y Objetos > Administrador de bibliotecas.",
        image: {
          type: "image",
          src: "/blog/puntos-en-planta/2.png",
          alt: "Ruta Archivo, Bibliotecas y Objetos, Administrador de bibliotecas en Archicad",
        },
      },
      {
        type: "step",
        title: "Agregá una biblioteca vinculada",
        text: "Vamos a Añadir > Añadir Biblioteca vinculada.",
        image: {
          type: "image",
          src: "/blog/puntos-en-planta/3.png",
          alt: "Opción para añadir una biblioteca vinculada en Archicad",
        },
      },
      {
        type: "step",
        title: "Buscá la carpeta de Graphisoft",
        text: "Vamos a Archivos de programa > GRAPHISOFT > Archicad 24 > Bibliotecas de Archicad 24.",
        image: {
          type: "image",
          src: "/blog/puntos-en-planta/4.png",
          alt: "Carpeta de Bibliotecas de Archicad 24 dentro de Archivos de programa",
        },
      },
      {
        type: "note",
        title: "Versión instalada",
        text: "Si tenés otra versión, aparecerá el número correspondiente. Por ejemplo, Biblioteca 22 si tenés Archicad 22.",
      },
      {
        type: "step",
        title: "Seleccioná el archivo de biblioteca",
        text: "Una vez ahí, buscamos la biblioteca a cargar con terminación .lfc.",
        image: {
          type: "image",
          src: "/blog/puntos-en-planta/5.png",
          alt: "Archivo de biblioteca con terminación .lfc listo para cargar en Archicad",
        },
      },
      {
        type: "success",
        title: "Resultado final",
        text: "¡Listo! Tenemos otra vez nuestros objetos cargados.",
      },
      {
        type: "note",
        title: "Si todavía faltan objetos",
        text: "Si no aparecen todos los objetos, quizás es porque son de otra versión. En ese caso, hay que buscar la migración de bibliotecas correspondiente.",
      },
      {
        type: "image",
        src: "/blog/puntos-en-planta/6.png",
        alt: "Planta de Archicad con los objetos cargados correctamente",
        caption: "Objetos recuperados después de cargar la biblioteca correcta.",
      },
      {
        type: "cta",
        title: "¿Querés revisar tu archivo conmigo?",
        text: "En una clase 1:1 podemos ordenar bibliotecas, vistas, plumas y documentación sobre tu propio proyecto.",
        label: "Ver clases 1:1",
        href: "/clases",
      },
    ],
  },
  {
    slug: "no-hay-superficie",
    image: "/blog/no-hay-superficie/portada.png",
    category: "Modelado 3D",
    title: "Cómo resolver el error de superficie",
    description:
      "Un caso práctico para entender por qué una superficie aparece en magenta y cómo volver a cargar el catálogo correcto.",
    meta: "Proyecto guiado",
    accent: "#7B6CFF",
    level: "Inicial",
    duration: "10 min",
    content: [
      {
        type: "paragraph",
        eyebrow: "Problema",
        title: "La superficie aparece en magenta porque Archicad no encuentra el catálogo necesario.",
        text: "Cuando una textura o superficie se ve como un damero magenta, normalmente no es un problema del modelo: Archicad está avisando que falta una biblioteca o un catálogo de superficies vinculado al archivo.",
      },
      {
        type: "image",
        src: "/blog/no-hay-superficie/1.png",
        alt: "Modelo de Archicad con una terraza en damero magenta por superficie faltante",
        caption: "El damero magenta indica que la superficie asignada no se está encontrando.",
      },
      {
        type: "paragraph",
        eyebrow: "Solución",
        title: "Hay que volver a cargar el Catálogo de Superficies de la versión correspondiente.",
        text: "La forma más ordenada de resolverlo es entrar al Administrador de bibliotecas, revisar qué recurso figura como no encontrado y vincular el archivo .lcf correcto desde la carpeta de instalación de Archicad.",
      },
      {
        type: "step",
        title: "Abrí el Administrador de bibliotecas",
        text: "Vamos a Archivo > Bibliotecas y Objetos > Administrador de Bibliotecas. Desde ahí Archicad muestra qué bibliotecas están cargadas y cuáles faltan.",
        image: {
          type: "image",
          src: "/blog/no-hay-superficie/2.png",
          alt: "Menú Archivo, Bibliotecas y Objetos, Administrador de Bibliotecas en Archicad",
        },
      },
      {
        type: "step",
        title: "Revisá las bibliotecas marcadas como no encontradas",
        text: "En el listado buscá las filas que aparecen en rojo con el estado no se encuentra. En este ejemplo falta el Catálogo de Superficies y también aparece una biblioteca de ventanas avanzadas sin localizar.",
        image: {
          type: "image",
          src: "/blog/no-hay-superficie/3.png",
          alt: "Administrador de Bibliotecas con bibliotecas marcadas como no se encuentra",
        },
      },
      {
        type: "warning",
        title: "No reemplaces materiales al azar",
        text: "Si cambiás la superficie manualmente sin cargar el catálogo correcto, puede que arregles una vista puntual pero sigas teniendo referencias rotas en el archivo.",
      },
      {
        type: "step",
        title: "Añadí el catálogo de superficies",
        text: "Hacé clic en Añadir y buscá la carpeta de instalación de Archicad. Dentro de la biblioteca de tu versión, seleccioná Catálogo de Superficies con terminación .lcf.",
        image: {
          type: "image",
          src: "/blog/no-hay-superficie/4.png",
          alt: "Selección del archivo Catálogo de Superficies .lcf en la carpeta de biblioteca de Archicad",
        },
      },
      {
        type: "note",
        title: "La versión puede cambiar",
        text: "En la captura aparece Archicad 26, pero si trabajás con Archicad 24, 25 o 27 tenés que buscar el catálogo dentro de la carpeta de esa versión.",
      },
      {
        type: "step",
        title: "Aplicá los cambios y comprobá el modelo",
        text: "Cuando el catálogo esté vinculado, aplicá los cambios y volvé a la vista 3D. La superficie debería recuperar su textura correcta.",
        image: {
          type: "image",
          src: "/blog/no-hay-superficie/5.png",
          alt: "Modelo de Archicad con la superficie de madera recuperada correctamente",
        },
      },
      {
        type: "success",
        title: "Resultado final",
        text: "La superficie deja de verse en magenta y vuelve a mostrarse con su material real. El archivo queda más limpio porque la referencia faltante se corrige desde la biblioteca.",
      },
      {
        type: "tip",
        title: "Hábito recomendado",
        text: "Antes de compartir o migrar un proyecto, revisá el Administrador de bibliotecas. Si hay alertas, conviene resolverlas antes de seguir documentando o exportar renders.",
      },
      {
        type: "cta",
        title: "¿Tu archivo tiene materiales o bibliotecas rotas?",
        text: "En una clase 1:1 podemos revisar tu proyecto, detectar qué bibliotecas faltan y dejar una estructura ordenada para seguir trabajando.",
        label: "Ver clases 1:1",
        href: "/clases",
      },
    ],
  },
  {
    slug: "como-funcionan-las-plumas",
    image: "/blog/como-funcionan-las-plumas/portada.png",
    category: "ABC Archicad",
    title: "Cómo funcionan las plumas en Archicad",
    description:
      "Entendé de una vez cómo funcionan las plumas en Archicad: colores, grosores, conjuntos y criterio gráfico para que tus planos se lean mejor.",
    meta: "Video + guía visual",
    accent: "#FFB347",
    youtubeId: "Etd86-Eln0c",
    youtubeUrl: "https://youtu.be/Etd86-Eln0c",
    level: "Principiante",
    duration: "12 min",
    content: [
      {
        type: "paragraph",
        text: "Las plumas en Archicad suelen generar confusión, sobre todo si venís de trabajar en AutoCAD. Lo primero que tenés que entender es que las plumas no son capas: las capas organizan elementos, mientras que las plumas controlan colores y grosores de representación.",
      },
      {
        type: "video",
        youtubeId: "Etd86-Eln0c",
        title: "Cómo funcionan las plumas en Archicad",
      },
      {
        type: "heading",
        title: "Abrir Plumas y Colores",
      },
      {
        type: "paragraph",
        text: "Hay dos formas rápidas de abrir la configuración de plumas en Archicad. Podés ir desde el menú superior a Documento > Conjunto de Plumas > Plumas & Colores, o usar el icono de plumas que aparece en la barra inferior.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/menu-plumas.png",
        alt: "Menú Documento para abrir Plumas y Colores en Archicad",
        caption: "Desde Documento > Conjunto de Plumas podés acceder a la ventana de Plumas & Colores.",
      },
      {
        type: "note",
        text: "En algunas versiones de Archicad también podés encontrar esta opción desde la barra inferior, tocando el icono de plumas.",
      },
      {
        type: "heading",
        title: "Qué vas a encontrar en la ventana de plumas",
      },
      {
        type: "paragraph",
        text: "Cuando abrís Plumas y Colores, vas a ver una ventana con los conjuntos de plumas disponibles. Desde ahí podés elegir un conjunto, renombrarlo, borrarlo, guardar modificaciones y editar cada pluma según su número, color, grosor y nombre.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/ventana-plumas.png",
        alt: "Ventana Plumas y Colores de Archicad",
        caption: "La ventana de Plumas y Colores te permite modificar número, color, grosor y nombre de cada pluma.",
      },
      {
        type: "tip",
        text: "El nombre de la pluma es importante para orientarte. No mires solamente el color: revisá también el número, el grosor y la descripción.",
      },
      {
        type: "heading",
        title: "Plumas por defecto",
      },
      {
        type: "paragraph",
        text: "Los colores que vienen por defecto tienen una lógica: ayudan a reconocer rápidamente distintos elementos del modelo, como muros, aberturas, objetos, textos o tramas. En una primera instancia sirven para modelar y detectar visualmente qué es cada cosa.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/plumas-defecto.png",
        alt: "Conjunto de plumas por defecto de Archicad",
        caption: "Las plumas por defecto usan colores para diferenciar elementos y facilitar el trabajo durante el modelado.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/resultado-plumas-defecto.png",
        alt: "Resultado gráfico usando plumas por defecto",
        caption: "Resultado visual de una planta con plumas por defecto.",
      },
      {
        type: "heading",
        title: "Plumas blanco y negro",
      },
      {
        type: "paragraph",
        text: "Cuando trabajás en blanco y negro, las plumas dejan de ser una ayuda de color para modelar y pasan a definir con más claridad la lectura gráfica del plano. Ahí los grosores empiezan a ser fundamentales.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/plumas-blanco-negro.png",
        alt: "Conjunto de plumas blanco y negro",
        caption: "En blanco y negro, los grosores ayudan a ordenar la lectura del plano.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/resultado-plumas-blanco-negro.png",
        alt: "Resultado gráfico usando plumas blanco y negro",
        caption: "Resultado de una planta usando plumas blanco y negro.",
      },
      {
        type: "heading",
        title: "Plumas blancas",
      },
      {
        type: "paragraph",
        text: "Las plumas blancas también tienen una lógica. Lo que aparece más blanco suele corresponder a elementos que tienen mayor peso visual, como muros o elementos principales. En cambio, los objetos o elementos secundarios pueden quedar más oscuros para no competir con lo importante.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/plumas-blanco.png",
        alt: "Conjunto de plumas blancas",
        caption: "Las plumas blancas permiten generar otro tipo de lectura gráfica, donde algunos elementos destacan más que otros.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/resultado-plumas-blanco.png",
        alt: "Resultado gráfico usando plumas blancas",
        caption: "Resultado visual de una planta con plumas blancas.",
      },
      {
        type: "warning",
        title: "No confundas plumas con capas",
        text: "Las capas sirven para organizar y controlar la visibilidad de los elementos. Las plumas, en cambio, controlan cómo se representan esos elementos mediante color y grosor.",
      },
      {
        type: "heading",
        title: "Cómo funciona la lógica de columnas y filas",
      },
      {
        type: "paragraph",
        text: "Una forma simple de entender las plumas es pensarlas como una matriz. En las columnas aparecen los elementos, por ejemplo muros, aberturas, objetos, textos, forjados o vigas. En las filas aparecen categorías o usos gráficos, como general, cortes estructurales, cortes no estructurales, símbolos, contornos, tramas y fondos.",
      },
      {
        type: "image",
        src: "/blog/como-funcionan-las-plumas/plumas.png",
        alt: "Esquema de funcionamiento de plumas en Archicad",
        caption: "Las plumas funcionan cruzando elementos con categorías gráficas.",
      },
      {
        type: "tip",
        text: "Si estás empezando, en vez de modificar un solo casillero aislado, suele ser más claro modificar toda la columna del elemento que querés ajustar. Así evitás inconsistencias.",
      },
      {
        type: "heading",
        title: "Ejemplo: cambiar el color de los objetos",
      },
      {
        type: "paragraph",
        text: "Si querés cambiar cómo se ven los objetos, primero tenés que identificar qué columna corresponde a los objetos. Si modificás un casillero que no corresponde a la categoría correcta, puede parecer que el cambio no funciona.",
      },
      {
        type: "paragraph",
        text: "Por ejemplo, si modificás una pluma relacionada a cortes no estructurales, pero el objeto no está usando esa categoría, no vas a ver cambios. Por eso, cuando estás aprendiendo, puede ser más seguro modificar toda la columna correspondiente al elemento.",
      },
      {
        type: "heading",
        title: "Activar grosor real",
      },
      {
        type: "paragraph",
        text: "Para revisar si los grosores están funcionando, podés activar la visualización de grosor real. De esa manera vas a ver en pantalla algo más parecido a lo que después va a salir en la impresión o documentación.",
      },
      {
        type: "note",
        text: "Recordá que las plumas no son solo colores. También definen grosores, y esos grosores cambian mucho la legibilidad de un plano.",
      },
      {
        type: "heading",
        title: "Plumas y escalas",
      },
      {
        type: "paragraph",
        text: "Una misma configuración de plumas puede verse bien en una escala y demasiado gruesa en otra. Por eso es normal tener conjuntos de plumas diferentes para distintas escalas, por ejemplo 1:50, 1:100 o 1:200.",
      },
      {
        type: "paragraph",
        text: "Si un muro se ve bien en 1:50, puede quedar demasiado pesado en 1:100 o 1:200. En ese caso, conviene ajustar los grosores para que el plano mantenga buena lectura en cada escala.",
      },
      {
        type: "tip",
        text: "Cuando modifiques un conjunto de plumas, no lo dejes como “Personalizado”. Guardalo como un conjunto nuevo, por ejemplo: Plumas 1:100.",
      },
      {
        type: "heading",
        title: "Muros simples y muros compuestos",
      },
      {
        type: "paragraph",
        text: "En los muros simples, muchas veces vas a trabajar con una pluma principal para el corte del muro. Pero en los muros compuestos puede pasar que el núcleo use una pluma y los acabados usen otra.",
      },
      {
        type: "paragraph",
        text: "Esto permite que el núcleo se vea con más peso gráfico y los acabados con líneas más finas. Así el plano queda más claro y no todo compite con la misma intensidad.",
      },
      {
        type: "warning",
        text: "Si modificás la pluma de muros y algunos muros no cambian, puede ser porque son muros compuestos y están usando otra pluma para el núcleo o para los acabados.",
      },
      {
        type: "success",
        title: "Resumen",
        text: "Las plumas en Archicad controlan colores y grosores. Sirven para mejorar la lectura gráfica de tus planos, adaptar la documentación a distintas escalas y definir qué elementos deben tener más o menos peso visual.",
      },
      {
        type: "cta",
        title: "¿Querés aprender a configurar tus propias plumas?",
        text: "En mis clases 1:1 podemos revisar tu archivo real, ordenar tus conjuntos de plumas y armar una metodología gráfica clara para tus planos.",
        buttonText: "Ver clases 1:1",
        href: "/clases",
      },
    ],
  },
  {
    slug: "ordenar-vistas-antes-de-armar-laminas",
    image: "/blog/no-hay-superficie/2.png",
    category: "Documentación",
    title: "Ordena vistas antes de armar láminas",
    description:
      "Una forma simple de preparar vistas, escalas y estructura de documentación para trabajar más claro.",
    meta: "Flujo de trabajo",
    accent: "#2EC3FF",
    content: [
      {
        type: "paragraph",
        eyebrow: "En preparación",
        title: "Contenido editable desde datos.",
        text: "Agregá los bloques definitivos cuando desarrolles este tutorial.",
      },
    ],
  },
  {
    slug: "mejora-la-lectura-grafica-de-tus-plantas",
    image: "/blog/puntos-en-planta/4.png",
    category: "Representación gráfica",
    title: "Mejora la lectura gráfica de tus plantas",
    description:
      "Ajustes concretos para lograr una planta más limpia, profesional y fácil de presentar.",
    meta: "Clase aplicada",
    accent: "#6ee7b7",
    content: [
      {
        type: "paragraph",
        eyebrow: "En preparación",
        title: "Un tutorial visual para completar.",
        text: "La página individual ya queda generada automáticamente desde este objeto.",
      },
    ],
  },
  {
    slug: "atajos-para-avanzar-mas-rapido",
    image: "/blog/no-hay-superficie/4.png",
    category: "Optimizar el tiempo",
    title: "Atajos para avanzar más rápido",
    description:
      "Pequeños hábitos de Archicad que reducen tareas repetitivas y ordenan tu proceso diario.",
    meta: "Productividad",
    accent: "#F43F5E",
    content: [
      {
        type: "paragraph",
        eyebrow: "En preparación",
        title: "Bloques listos para documentar atajos.",
        text: "Cada nuevo tutorial necesita solo slug, metadata y contenido.",
      },
    ],
  },
];

export const tutorialCategories = Array.from(
  new Set(tutorials.map((tutorial) => tutorial.category))
);

export const getTutorialBySlug = (slug: string | undefined) =>
  tutorials.find((tutorial) => tutorial.slug === slug);

export const getRelatedTutorials = (currentTutorial: Tutorial, limit = 3) => {
  const sameCategory = tutorials.filter(
    (tutorial) =>
      tutorial.slug !== currentTutorial.slug &&
      tutorial.category === currentTutorial.category
  );

  const fallback = tutorials.filter(
    (tutorial) =>
      tutorial.slug !== currentTutorial.slug &&
      tutorial.category !== currentTutorial.category
  );

  return [...sameCategory, ...fallback].slice(0, limit);
};
