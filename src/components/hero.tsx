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
      <div className="absolute inset-0 -z-20 animate-acercar">
        <Image
          src={imagen}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-fondo via-fondo/70 to-fondo/20"
      />
      <Contenedor className="pt-32 pb-14 sm:pb-20">
        <h1 className="max-w-4xl animate-aparecer font-titulo text-4xl leading-[1.04] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {kicker ? (
            <span className="relative mb-4 block text-sm font-semibold tracking-[0.2em] text-acento-fuerte uppercase sm:text-base sm:text-acento">
              <span
                aria-hidden="true"
                className="absolute -inset-x-4 -inset-y-3 -z-10 bg-fondo/80 blur-xl sm:bg-fondo/45 sm:blur-lg"
              />
              <span className="relative [text-shadow:0_0_2px_#0b0b0f,0_1px_3px_#0b0b0f,0_0_18px_rgb(11_11_15_/_0.95),0_0_36px_rgb(11_11_15_/_0.85)]">
                {kicker}
              </span>
            </span>
          ) : null}
          {titulo}
        </h1>
        <p className="mt-6 max-w-2xl animate-aparecer text-lg text-pretty text-texto/80 [animation-delay:150ms] sm:text-xl">
          {descripcion}
        </p>
        {children ? (
          <div className="mt-8 flex animate-aparecer flex-wrap gap-3 [animation-delay:300ms]">
            {children}
          </div>
        ) : null}
      </Contenedor>
    </section>
  );
}
