import type { Metadata } from "next";

import { media } from "@/content/media";
import { site } from "@/content/site";

type EntradaMetadata = {
  titulo: string;
  descripcion: string;
  /** Ruta interna de la página, por ejemplo `/nosotros`. */
  ruta: string;
  imagen?: string;
  noIndexar?: boolean;
};

/** Metadata de página: título, descripción, canonical y Open Graph, siempre consistentes. */
export function crearMetadata({
  titulo,
  descripcion,
  ruta,
  imagen = media.brand.ogDefault,
  noIndexar = false,
}: EntradaMetadata): Metadata {
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    robots: noIndexar ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "es_CO",
      siteName: site.agencia.nombre,
      title: `${titulo} | ${site.agencia.nombre}`,
      description: descripcion,
      url: ruta,
      images: [{ url: imagen, width: 1200, height: 630, alt: titulo }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${titulo} | ${site.agencia.nombre}`,
      description: descripcion,
      images: [imagen],
    },
  };
}
