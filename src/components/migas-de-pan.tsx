import Link from "next/link";

import { Contenedor } from "@/components/contenedor";
import { JsonLd } from "@/components/json-ld";
import { rutas } from "@/content/rutas";
import { urlDelSitio } from "@/lib/site-url";

export type MigaDePan = { etiqueta: string; href?: string };

type MigasDePanProps = {
  /** Páginas intermedias y la actual. "Inicio" se agrega automáticamente. */
  migas: readonly MigaDePan[];
};

export function MigasDePan({ migas }: MigasDePanProps) {
  const todas: readonly MigaDePan[] = [{ etiqueta: "Inicio", href: rutas.inicio }, ...migas];

  const datos = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: todas.map((miga, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: miga.etiqueta,
      ...(miga.href ? { item: `${urlDelSitio}${miga.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Migas de pan" className="pt-6">
      <JsonLd datos={datos} />
      <Contenedor>
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gris">
          {todas.map((miga, indice) => (
            <li key={miga.etiqueta} className="flex items-center gap-2">
              {indice > 0 ? <span aria-hidden="true">/</span> : null}
              {miga.href ? (
                <Link href={miga.href} className="hover:text-texto">
                  {miga.etiqueta}
                </Link>
              ) : (
                <span aria-current="page" className="text-texto">
                  {miga.etiqueta}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Contenedor>
    </nav>
  );
}
