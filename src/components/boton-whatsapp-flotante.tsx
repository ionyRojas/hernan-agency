import { IconoWhatsApp } from "@/components/boton-whatsapp";
import { mensajes } from "@/content/mensajes-whatsapp";
import { whatsappUrl } from "@/lib/whatsapp";

export function BotonWhatsAppFlotante() {
  return (
    <a
      href={whatsappUrl(mensajes.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-acento text-fondo shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento sm:right-6 sm:bottom-6"
    >
      <IconoWhatsApp className="size-7" />
    </a>
  );
}
