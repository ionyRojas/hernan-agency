/**
 * Mapa de todas las imágenes de la web. Cada slot apunta a un archivo dentro de
 * `public/media/`. Para cambiar una imagen basta con reemplazar el archivo manteniendo el
 * mismo nombre. Para agregar una nueva, se suma una línea aquí y el archivo en su carpeta.
 *
 * Este archivo no importa nada para que `scripts/check-media.ts` pueda leerlo con Node.
 */
const base = "/media";

function galeria(carpeta: string, cantidad: number): readonly string[] {
  return Array.from(
    { length: cantidad },
    (_, indice) => `${base}/${carpeta}/galeria-${String(indice + 1).padStart(2, "0")}.jpg`,
  );
}

function sector(slug: string) {
  return {
    portada: `${base}/sectores/${slug}/portada.jpg`,
    galeria: galeria(`sectores/${slug}`, 3),
  };
}

export const media = {
  brand: {
    logo: `${base}/brand/logo.svg`,
    logoClaro: `${base}/brand/logo-claro.svg`,
    ogDefault: `${base}/brand/og-default.jpg`,
  },
  hero: {
    portada: `${base}/hero/hero.png`,
  },
  equipo: {
    influencer: `${base}/equipo/influencer.jpg`,
    fernanda: `${base}/equipo/fernanda.jpg`,
    fundadores: `${base}/equipo/fundadores.jpg`,
  },
  videosFundador: {
    quienesSomos: `${base}/videos-fundador/quienes-somos.jpg`,
    comoAyudamos: `${base}/videos-fundador/como-ayudamos.jpg`,
    vision: `${base}/videos-fundador/vision.jpg`,
  },
  servicios: {
    planesMensuales: {
      portada: `${base}/servicios/planes-mensuales/portada.jpg`,
      galeria: galeria("servicios/planes-mensuales", 3),
    },
    audiovisual: { portada: `${base}/servicios/audiovisual/portada.jpg` },
    fotografia: { portada: `${base}/servicios/fotografia/portada.jpg` },
    diseno: { portada: `${base}/servicios/diseno/portada.jpg` },
    redesSociales: { portada: `${base}/servicios/redes-sociales/portada.jpg` },
  },
  sectores: {
    "restaurantes-gastronomia": sector("restaurantes-gastronomia"),
    "marcas-consumo": sector("marcas-consumo"),
    "empresas-locales": sector("empresas-locales"),
    ecommerce: sector("ecommerce"),
    "hoteles-turismo": sector("hoteles-turismo"),
    educacion: sector("educacion"),
    ropa: sector("ropa"),
    "empresas-nacionales": sector("empresas-nacionales"),
  },
  influencers: {
    portada: `${base}/influencers/portada.jpg`,
  },
  casos: {
    "ejemplo-gastronomia": {
      portada: `${base}/casos/ejemplo-gastronomia/portada.jpg`,
      galeria: galeria("casos/ejemplo-gastronomia", 3),
    },
    "ejemplo-turismo": {
      portada: `${base}/casos/ejemplo-turismo/portada.jpg`,
      galeria: galeria("casos/ejemplo-turismo", 3),
    },
  },
  /** Logos de clientes en `clientes/logo-<cliente>.svg`. Vacío hasta tener autorización. */
  clientes: [] as readonly string[],
  redes: Array.from(
    { length: 6 },
    (_, indice) => `${base}/redes/post-${String(indice + 1).padStart(2, "0")}.jpg`,
  ),
} as const;

export type SlugSectorMedia = keyof typeof media.sectores;
export type SlugCasoMedia = keyof typeof media.casos;
