import type { SlugCasoMedia } from "@/content/media";

export type Caso = {
  slug: SlugCasoMedia;
  titulo: string;
  sector: string;
  resumen: string;
  /** Los casos "pendiente" muestran "Próximamente", no se indexan y no entran al sitemap. */
  estado: "pendiente" | "publicado";
  problema: string;
  queHicimos: string;
  resultados: readonly { valor: string; etiqueta: string }[];
  /** Enlace al post en Instagram o TikTok, si existe. */
  enlacePost?: string;
};

/**
 * Casos de éxito. Los dos primeros son espacios reservados: se reemplazan por casos reales,
 * con autorización del cliente y resultados medidos, y se cambian a `estado: "publicado"`.
 */
export const casos: readonly Caso[] = [
  {
    slug: "ejemplo-gastronomia",
    titulo: "Caso de gastronomía",
    sector: "Restaurantes y gastronomía",
    resumen: "Pronto publicaremos un caso real de contenido y redes para una marca gastronómica.",
    estado: "pendiente",
    problema: "Por definir con el cliente.",
    queHicimos: "Por definir con el cliente.",
    resultados: [],
  },
  {
    slug: "ejemplo-turismo",
    titulo: "Caso de turismo",
    sector: "Hoteles y turismo",
    resumen: "Pronto publicaremos un caso real de contenido y campañas para una marca de turismo.",
    estado: "pendiente",
    problema: "Por definir con el cliente.",
    queHicimos: "Por definir con el cliente.",
    resultados: [],
  },
];

export function buscarCaso(slug: string): Caso | undefined {
  return casos.find((caso) => caso.slug === slug);
}
