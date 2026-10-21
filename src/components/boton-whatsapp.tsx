import type { ReactNode } from "react";

import { whatsappUrl } from "@/lib/whatsapp";

type Variante = "primario" | "secundario";

type BotonWhatsAppProps = {
  /** Mensaje que llega escrito al WhatsApp, según la página de origen. */
  mensaje: string;
  children: ReactNode;
  variante?: Variante;
  className?: string;
};

const estilosPorVariante: Record<Variante, string> = {
  primario: "bg-acento text-fondo hover:bg-acento-fuerte",
  secundario: "border border-linea text-texto hover:border-acento hover:text-acento",
};

export function IconoWhatsApp({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.05L2 22l5.08-1.5A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3 .88.9-2.93-.2-.3a8.1 8.1 0 1 1 6.73 3.66Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.94-1.2 7.3 7.3 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

/** Botón que abre el WhatsApp con el mensaje prellenado. Es un enlace: no usa JavaScript. */
export function BotonWhatsApp({
  mensaje,
  children,
  variante = "primario",
  className = "",
}: BotonWhatsAppProps) {
  return (
    <a
      href={whatsappUrl(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento ${estilosPorVariante[variante]} ${className}`}
    >
      <IconoWhatsApp />
      {children}
    </a>
  );
}
