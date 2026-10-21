export type NombrePlan = "Start" | "Growth" | "Scale";

export type Plan = {
  nombre: NombrePlan;
  paraQuien: string;
  incluye: readonly string[];
  recomendado?: boolean;
  /** Valor "Desde" en pesos. `null` mientras la agencia no lo defina. */
  desde: string | null;
};

/**
 * Entregables de ejemplo, pendientes de confirmar con la agencia (cantidad de piezas, sesiones
 * de foto y reportes). El valor "Desde" también está pendiente: cuando se defina, se escribe en
 * `desde` y la web lo muestra sola.
 */
export const planes: readonly Plan[] = [
  {
    nombre: "Start",
    paraQuien: "Para marcas que arrancan su presencia digital con constancia.",
    incluye: [
      "Parrilla de contenido mensual",
      "Creación de contenido para redes",
      "Diseño de piezas con estrategia",
      "Gestión de redes sociales",
    ],
    desde: null,
  },
  {
    nombre: "Growth",
    paraQuien: "Para marcas que quieren más producción, más estrategia y mejor presencia.",
    incluye: [
      "Todo lo de Start",
      "Producción audiovisual y reels",
      "Fotografía de producto o empresa",
      "Estrategia de comunicación digital",
    ],
    recomendado: true,
    desde: null,
  },
  {
    nombre: "Scale",
    paraQuien: "Para marcas con intención de invertir en posicionamiento a mayor escala.",
    incluye: [
      "Todo lo de Growth",
      "Campañas publicitarias",
      "Asesoría de marca",
      "Acompañamiento prioritario",
    ],
    desde: null,
  },
];
