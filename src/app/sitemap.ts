import type { MetadataRoute } from "next";

import { casos } from "@/content/casos";
import { rutas } from "@/content/rutas";
import { sectoresPrincipales } from "@/content/sectores";
import { urlDelSitio } from "@/lib/site-url";

type EntradaDelSitemap = MetadataRoute.Sitemap[number];

function entrada(ruta: string, prioridad: number): EntradaDelSitemap {
  return { url: `${urlDelSitio}${ruta}`, priority: prioridad };
}

/** Casos pendientes no se indexan, así que tampoco entran al sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entrada(rutas.inicio, 1),
    entrada(rutas.agencia, 0.9),
    entrada(rutas.planes, 0.9),
    entrada(rutas.contratoInfluencers, 0.9),
    entrada(rutas.colaboraciones, 0.8),
    ...sectoresPrincipales.map((sector) => entrada(rutas.sector(sector.slug), 0.8)),
    entrada(rutas.nosotros, 0.7),
    entrada(rutas.casos, 0.6),
    ...casos
      .filter((caso) => caso.estado === "publicado")
      .map((caso) => entrada(rutas.caso(caso.slug), 0.6)),
    entrada(rutas.contacto, 0.7),
    entrada(rutas.mediaKit, 0.5),
  ];
}
