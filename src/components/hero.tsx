import Image from "next/image";
import type { ReactNode } from "react";

import { Contenedor } from "@/components/contenedor";

type HeroProps = {
  /** Palabra clave local, dentro del H1. Por ejemplo: "Agencia de marketing en Villavicencio". */
  kicker?: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  /** Botones de llamada a la acción. */
  children?: ReactNode;
  /** `completa` ocupa casi toda la pantalla; `media` es para páginas internas. */
  altura?: "completa" | "media";
};

const alturas = {
  completa: "min-h-[85svh]",
  media: "min-h-[60svh]",
} as const;

/** Portada con imagen a pantalla completa. Contiene el único H1 de la página. */
export function Hero({
  kicker,
  titulo,
  descripcion,
  imagen,
  alt,
  children,
  altura = "media",
}: HeroProps) {
  return (
    <section className={`relative isolate flex items-end overflow-hidden ${alturas[altura]}`}>
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-fondo via-fondo/70 to-fondo/20"
      />
      <Contenedor className="animate-aparecer pt-32 pb-14 sm:pb-20">
        <h1 className="max-w-4xl font-titulo text-4xl leading-[1.04] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {kicker ? (
            <span className="mb-4 block text-sm font-semibold tracking-[0.2em] text-acento uppercase sm:text-base">
              {kicker}
            </span>
          ) : null}
          {titulo}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-texto/80 sm:text-xl">{descripcion}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </Contenedor>
    </section>
  );
}
