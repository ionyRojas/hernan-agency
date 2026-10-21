import { rutas } from "@/content/rutas";

export type EnlaceDeNavegacion = { etiqueta: string; href: string };

export const navegacionPrincipal: readonly EnlaceDeNavegacion[] = [
  { etiqueta: "Agencia", href: rutas.agencia },
  { etiqueta: "Planes", href: rutas.planes },
  { etiqueta: "Influencers", href: rutas.contratoInfluencers },
  { etiqueta: "Casos", href: rutas.casos },
  { etiqueta: "Nosotros", href: rutas.nosotros },
];
