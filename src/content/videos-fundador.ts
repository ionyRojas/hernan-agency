import { media } from "@/content/media";
import type { Plataforma } from "@/content/posts";
import { instagramUrl, site } from "@/content/site";

export type VideoFundador = {
  titulo: string;
  imagen: string;
  plataforma: Plataforma;
  /** URL del video en la red social. Por ahora apunta al perfil de Instagram. */
  url: string;
};

const perfil = instagramUrl(site.influencer.instagram);

export const videosFundador: readonly VideoFundador[] = [
  {
    titulo: "Quiénes somos",
    imagen: media.videosFundador.quienesSomos,
    plataforma: "instagram",
    url: perfil,
  },
  {
    titulo: "Cómo ayudamos",
    imagen: media.videosFundador.comoAyudamos,
    plataforma: "instagram",
    url: perfil,
  },
  {
    titulo: "Nuestra visión",
    imagen: media.videosFundador.vision,
    plataforma: "instagram",
    url: perfil,
  },
];
