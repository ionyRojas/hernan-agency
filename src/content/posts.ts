import { media } from "@/content/media";
import { instagramUrl, site } from "@/content/site";

export type Plataforma = "instagram" | "tiktok";

export type Post = {
  /** Captura vertical del post, en `public/media/redes/`. */
  imagen: string;
  plataforma: Plataforma;
  /** URL del post original. */
  url: string;
  alt: string;
};

const perfilInstagram = instagramUrl(site.influencer.instagram);

/**
 * Posts que se muestran como feed. Por ahora cada captura enlaza al perfil de Instagram del
 * influencer. Para enlazar al post exacto, reemplaza `url` por la URL del post o del reel.
 * Para sumar uno nuevo: agrega la captura en `public/media/redes/` y una línea aquí.
 */
export const posts: readonly Post[] = media.redes.map((imagen, indice) => ({
  imagen,
  plataforma: "instagram",
  url: perfilInstagram,
  alt: `Captura del post ${indice + 1} de ${site.influencer.nombre} en Instagram`,
}));
