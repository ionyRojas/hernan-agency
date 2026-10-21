import type { ReactNode } from "react";

import { Contenedor } from "@/components/contenedor";

type EncabezadoPaginaProps = {
  etiqueta?: string;
  /** Es el H1 de la página, con la palabra clave local. */
  titulo: string;
  texto?: string;
  children?: ReactNode;
};

/** Encabezado sin imagen para páginas internas. Contiene el único H1 de la página. */
export function EncabezadoPagina({ etiqueta, titulo, texto, children }: EncabezadoPaginaProps) {
  return (
    <header className="pt-12 pb-6 sm:pt-20">
      <Contenedor className="animate-aparecer">
        <h1 className="max-w-4xl font-titulo text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
          {etiqueta ? (
            <span className="mb-4 block text-sm font-semibold tracking-[0.2em] text-acento uppercase sm:text-base">
              {etiqueta}
            </span>
          ) : null}
          {titulo}
        </h1>
        {texto ? (
          <p className="mt-6 max-w-2xl text-lg text-pretty text-gris sm:text-xl">{texto}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </Contenedor>
    </header>
  );
}
