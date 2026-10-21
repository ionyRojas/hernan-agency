/** Rutas internas de la web. Un solo lugar para no repetir cadenas en los componentes. */
export const rutas = {
  inicio: "/",
  agencia: "/agencia-de-marketing-villavicencio",
  planes: "/planes-mensuales-contenido",
  contratoInfluencers: "/contrato-de-influencers-villavicencio",
  // Si cambia el nombre del influencer: renombrar la carpeta de la ruta y agregar un
  // redirect 301 en next.config.ts.
  colaboraciones: "/colaboraciones-con-hernancho-castillo",
  nosotros: "/nosotros",
  casos: "/casos-de-exito",
  contacto: "/contacto",
  mediaKit: "/media-kit",
  sector: (slug: string) => `/sectores/${slug}`,
  caso: (slug: string) => `/casos-de-exito/${slug}`,
} as const;
