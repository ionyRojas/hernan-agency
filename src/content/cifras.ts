export type Cifra = {
  /** `null` mientras el dato real no esté confirmado. Las cifras sin valor no se muestran. */
  valor: string | null;
  etiqueta: string;
};

/**
 * Cifras de la comunidad. Solo se muestran las que tienen valor. No se inventan números:
 * cuando lleguen los datos reales de alcance y visualizaciones, se escriben aquí y se
 * actualizan periódicamente.
 */
export const cifras: readonly Cifra[] = [
  { valor: "100K+", etiqueta: "Más de 100 mil seguidores en redes" },
  { valor: null, etiqueta: "Alcance mensual" },
  { valor: null, etiqueta: "Visualizaciones" },
  { valor: null, etiqueta: "Publicaciones por campaña" },
];
