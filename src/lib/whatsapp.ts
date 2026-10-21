import { site } from "@/content/site";

/** Enlace directo a un WhatsApp con el mensaje ya escrito. Por defecto, el del influencer. */
export function whatsappUrl(mensaje: string, numero: string = site.influencer.whatsapp): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
