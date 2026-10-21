import Link from "next/link";

import { Media } from "@/components/media";
import type { Caso } from "@/content/casos";
import { media } from "@/content/media";
import { rutas } from "@/content/rutas";

type TarjetaCasoProps = {
  caso: Caso;
};

export function TarjetaCaso({ caso }: TarjetaCasoProps) {
  const pendiente = caso.estado === "pendiente";

  return (
    <article className="group">
      <Link href={rutas.caso(caso.slug)} className="block">
        <div className="relative">
          <Media
            src={media.casos[caso.slug].portada}
            alt={`Portada del caso ${caso.titulo}`}
            proporcion="aspect-[4/3]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="rounded-3xl border border-linea"
          />
          {pendiente ? (
            <span className="absolute top-4 left-4 rounded-full bg-fondo/85 px-3 py-1 text-xs font-semibold tracking-wider text-acento uppercase backdrop-blur">
              Próximamente
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-sm font-semibold tracking-wider text-acento uppercase">
          {caso.sector}
        </p>
        <h3 className="mt-1 font-titulo text-2xl font-bold group-hover:text-acento">
          {caso.titulo}
        </h3>
        <p className="mt-2 text-gris">{caso.resumen}</p>
      </Link>
    </article>
  );
}
