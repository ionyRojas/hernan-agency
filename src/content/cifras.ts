import { site } from "@/content/site";

export type Cifra = {
  valor: string;
  etiqueta: string;
};

/**
 * Cifras de la comunidad. Los valores viven en `site.logros`; aquí solo se les da etiqueta.
 */
export const cifras: readonly Cifra[] = [
  { valor: site.logros.seguidores, etiqueta: "Seguidores en redes" },
  { valor: site.logros.alcanceMensual, etiqueta: "Alcance mensual" },
  { valor: site.logros.visualizaciones, etiqueta: "Visualizaciones" },
];
