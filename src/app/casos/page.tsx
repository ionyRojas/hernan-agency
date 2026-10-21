import Link from "next/link";

import { BandaCta } from "@/components/banda-cta";
import { EncabezadoPagina } from "@/components/encabezado-pagina";
import { MigasDePan } from "@/components/migas-de-pan";
import { Seccion } from "@/components/seccion";
import { TarjetaCaso } from "@/components/tarjeta-caso";
import { casos, type Caso } from "@/content/casos";
import { mensajes } from "@/content/mensajes-whatsapp";
import { rutas } from "@/content/rutas";
import { aId } from "@/lib/texto";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: "Casos de éxito y resultados",
  descripcion:
    "Casos de contenido, redes y campañas de Digital Mys para marcas de Villavicencio, el Meta y Colombia.",
  ruta: rutas.casos,
});

function agruparPorSector(lista: readonly Caso[]): readonly [string, readonly Caso[]][] {
  const grupos = Map.groupBy(lista, (caso) => caso.sector);
  return [...grupos.entries()];
}

export default function PaginaDeCasos() {
  const grupos = agruparPorSector(casos);

  return (
    <>
      <EncabezadoPagina
        etiqueta="Casos"
        titulo="Casos de éxito de contenido y redes"
        texto="Proyectos reales con estrategia, producción y resultados medibles."
      />
      <MigasDePan migas={[{ etiqueta: "Casos" }]} />

      {grupos.length > 1 ? (
        <nav
          aria-label="Filtrar casos por sector"
          className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8"
        >
          <ul className="flex flex-wrap gap-3">
            {grupos.map(([sector]) => (
              <li key={sector}>
                <Link
                  href={`#${aId(sector)}`}
                  className="inline-block rounded-full border border-linea px-4 py-2 text-sm text-gris transition-colors hover:border-acento hover:text-acento"
                >
                  {sector}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {grupos.map(([sector, casosDelSector]) => (
        <Seccion key={sector} etiquetadaPor={aId(sector)}>
          <h2 id={aId(sector)} className="mb-8 font-titulo text-3xl font-bold">
            {sector}
          </h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {casosDelSector.map((caso) => (
              <li key={caso.slug}>
                <TarjetaCaso caso={caso} />
              </li>
            ))}
          </ul>
        </Seccion>
      ))}

      <BandaCta
        titulo="¿Quieres ser el próximo caso?"
        texto="Cuéntanos tu marca y construimos un plan a tu medida."
        mensaje={mensajes.casos}
      />
    </>
  );
}
