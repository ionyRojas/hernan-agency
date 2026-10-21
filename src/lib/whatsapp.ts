import { site } from "@/content/site";

/** Enlace directo al WhatsApp del influencer con el mensaje ya escrito. */
export function whatsappUrl(mensaje: string): string {
  return `https://wa.me/${site.influencer.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
