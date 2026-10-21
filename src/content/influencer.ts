import { site } from "@/content/site";

export const incluyePlanInfluencer: readonly string[] = [
  "Estrategia de la campaña",
  "Contenido profesional",
  `Publicación en las redes de ${site.influencer.nombre}`,
  "Publicidad pagada para amplificar el mensaje",
];

export const formatosDeColaboracion: readonly { titulo: string; texto: string }[] = [
  { titulo: "Reel", texto: "Video corto con la voz y el estilo del creador." },
  { titulo: "Historias", texto: "Presencia cercana y directa durante varios días." },
  { titulo: "Publicación", texto: "Contenido fijo en el perfil con tu marca como protagonista." },
  { titulo: "Visita al negocio", texto: "Experiencia en tu local, contada desde adentro." },
];

export const porQueFunciona: readonly { titulo: string; texto: string }[] = [
  {
    titulo: "Comunidad real",
    texto:
      "Una audiencia local y nacional que sigue al creador por su contenido, no por un anuncio.",
  },
  {
    titulo: "Confianza de un creador",
    texto: "Las recomendaciones de alguien a quien la gente ya conoce se sienten cercanas.",
  },
  {
    titulo: "Contenido profesional detrás",
    texto: "La agencia cuida la estrategia, la producción y la distribución de la campaña.",
  },
];

export const paraQuienEs: readonly string[] = [
  "Marcas con intención de invertir en posicionamiento y contenido de calidad.",
  "Negocios que entienden que la influencia suma a un proceso, no lo reemplaza.",
  "Empresas que quieren llegar a una audiencia de Villavicencio, el Meta y Colombia.",
];

export const noEsParaQuien: readonly string[] = [
  "Marcas que buscan resultados inmediatos o ventas garantizadas.",
  "Quienes esperan que una sola publicación resuelva toda su estrategia.",
];
