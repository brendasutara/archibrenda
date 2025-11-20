export type ArchibrendaModel = {
  slug: string; // para la URL: /portfolio/casa-minimalista
  name: string;
  description: string;
  category: "vivienda" | "local-comercial" | "interior" | "otro";
  file: string; // ruta dentro de /assets/models
  thumbnail?: string; // imagen previa si querés
};

const MODELS: ArchibrendaModel[] = [
  {
    slug: "casa-minimalista",
    name: "Casa Minimalista",
    description:
      "Modelo arquitectónico de vivienda unifamiliar minimalista, con énfasis en volúmenes puros y luz natural.",
    category: "vivienda",
    file: "/models/house-01.glb",
    thumbnail: "/models/house-01-thumb.jpg",
  },
  {
    slug: "local-comercial",
    name: "Local Comercial",
    description:
      "Espacio comercial con vidriera amplia y diseño orientado a la experiencia del usuario.",
    category: "local-comercial",
    file: "/models/shop-01.glb",
  },
];

export function useModels() {
  const getAll = () => MODELS;

  const getBySlug = (slug: string) =>
    MODELS.find((m) => m.slug === slug) ?? null;

  return { getAll, getBySlug };
}
