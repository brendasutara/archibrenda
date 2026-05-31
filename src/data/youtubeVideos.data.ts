export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  url: string;
  duration: string;
  category: string;
  thumbnail: string;
  publishedAt?: string;
  relatedTutorialSlug?: string;
};

export const youtubeChannelUrl = "https://www.youtube.com/@Archibrenda/videos";

export const getYoutubeThumbnail = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: "Etd86-Eln0c",
    title:
      "Cómo funcionan las plumas en Archicad | Entendé colores y grosores de una vez",
    description:
      "Una explicación clara para entender cómo funcionan las plumas, colores, grosores y criterio gráfico en Archicad.",
    url: "https://youtu.be/Etd86-Eln0c",
    duration: "12:10",
    category: "ABC Archicad",
    thumbnail: getYoutubeThumbnail("Etd86-Eln0c"),
    relatedTutorialSlug: "como-funcionan-las-plumas",
  },
  {
    id: "1irAIsZ_oa4",
    title: "Cómo hacer un cielorraso en Archicad | Método claro y sin errores",
    description:
      "Paso a paso para modelar un cielorraso en Archicad con un método claro y ordenado.",
    url: "https://youtu.be/1irAIsZ_oa4",
    duration: "11:46",
    category: "Modelado 3D",
    thumbnail: getYoutubeThumbnail("1irAIsZ_oa4"),
    relatedTutorialSlug: "como-hacer-un-cielorraso-en-archicad",
  },
  {
    id: "10Ym8X_ov2s",
    title: "Sobrescrituras gráficas | La herramienta que falta en tu Archicad",
    description:
      "Aprendé a usar sobrescrituras gráficas para mejorar la lectura visual de tus planos.",
    url: "https://youtu.be/10Ym8X_ov2s",
    duration: "7:54",
    category: "Representación gráfica",
    thumbnail: getYoutubeThumbnail("10Ym8X_ov2s"),
    relatedTutorialSlug: "sobrescrituras-graficas-archicad",
  },
  {
    id: "cpgoWGgNYzQ",
    title: "Planta humanizada en Archicad | Sobrescrituras + colores exactos",
    description:
      "Cómo lograr una planta más cálida y clara usando sobrescrituras gráficas y colores precisos.",
    url: "https://youtu.be/cpgoWGgNYzQ",
    duration: "9:17",
    category: "Representación gráfica",
    thumbnail: getYoutubeThumbnail("cpgoWGgNYzQ"),
    relatedTutorialSlug: "planta-humanizada-en-archicad",
  },
  {
    id: "ovMcPnqFHWI",
    title:
      "Tutorial detalle constructivo de entrepiso alivianado en Archicad | Losetas y viguetas",
    description:
      "Primera parte del detalle constructivo de entrepiso alivianado en Archicad.",
    url: "https://youtu.be/ovMcPnqFHWI",
    duration: "Video",
    category: "Documentación",
    thumbnail: getYoutubeThumbnail("ovMcPnqFHWI"),
    relatedTutorialSlug: "entrepiso-alivianado-losetas-y-viguetas",
  },
  {
    id: "0NbhI92ADfs",
    title:
      "Detalle constructivo de entrepiso alivianado en Archicad | Materiales y forjados - Parte 2",
    description:
      "Segunda parte del detalle constructivo: materiales, forjados y organización del modelo.",
    url: "https://youtu.be/0NbhI92ADfs",
    duration: "Video",
    category: "Documentación",
    thumbnail: getYoutubeThumbnail("0NbhI92ADfs"),
    relatedTutorialSlug: "entrepiso-alivianado-materiales-y-forjados",
  },
  {
    id: "bIa_zA6tRO8",
    title:
      "Entrepiso alivianado en Archicad | Detalle constructivo 3D completo - Parte 3",
    description:
      "Tercera parte del detalle constructivo de entrepiso alivianado, con resultado 3D completo.",
    url: "https://youtu.be/bIa_zA6tRO8",
    duration: "16:24",
    category: "Modelado 3D",
    thumbnail: getYoutubeThumbnail("bIa_zA6tRO8"),
    relatedTutorialSlug: "entrepiso-alivianado-3d-completo",
  },
];
