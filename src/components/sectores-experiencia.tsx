import Link from "next/link";

import { Media } from "@/components/media";
import { media } from "@/content/media";
import { sectoresDeExperiencia, type SectorDeExperiencia } from "@/content/sectores";

function Mosaico({ sector }: { sector: SectorDeExperiencia }) {
  const contenido = (
    <>
      <Media
        src={media.sectores[sector.slugMedia].portada}
        alt={`Trabajo de contenido para ${sector.nombre}`}
        proporcion="aspect-[4/3]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="rounded-2xl border border-linea"
      />
      <p className="mt-3 font-titulo text-lg font-semibold group-hover:text-acento">
        {sector.nombre}
      </p>
    </>
  );

  return sector.href ? (
    <Link href={sector.href} className="group block">
      {contenido}
    </Link>
  ) : (
    <div className="group block">{contenido}</div>
  );
}

/** Sectores donde la agencia tiene experiencia, con enlace cuando existe página propia. */
export function SectoresExperiencia() {
  return (
    <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {sectoresDeExperiencia.map((sector) => (
        <li key={sector.nombre}>
          <Mosaico sector={sector} />
        </li>
      ))}
    </ul>
  );
}
