import Link from "next/link";

import { Media } from "@/components/media";
import type { Servicio } from "@/content/servicios";

type IndiceServiciosProps = {
  servicios: readonly Servicio[];
};

/** Lista numerada con líneas finas. El servicio destacado lleva el acento de color. */
export function IndiceServicios({ servicios }: IndiceServiciosProps) {
  return (
    <ol className="border-b border-linea">
      {servicios.map((servicio) => (
        <li key={servicio.numero} className="revelar border-t border-linea">
          <Link
            href={servicio.href}
            className="group grid items-center gap-4 py-8 transition-colors duration-300 hover:bg-gradient-to-r hover:from-superficie hover:to-transparent md:grid-cols-[5rem_1fr_9rem_2rem] md:gap-8"
          >
            <span className="font-titulo text-2xl text-gris transition-colors group-hover:text-acento">
              {servicio.numero}
            </span>
            <div className="transition-[translate] duration-500 ease-suave group-hover:translate-x-2">
              <h3 className="font-titulo text-2xl font-semibold sm:text-3xl">
                {servicio.titulo}
                {servicio.destacado ? (
                  <span className="ml-3 inline-block rounded-full bg-acento px-3 py-1 align-middle text-xs font-semibold tracking-wider text-fondo uppercase">
                    Principal
                  </span>
                ) : null}
              </h3>
              <p className="mt-2 max-w-xl text-gris">{servicio.descripcion}</p>
            </div>
            <Media
              src={servicio.imagen}
              alt=""
              proporcion="aspect-[4/3]"
              sizes="144px"
              className="hidden rounded-xl md:block"
            />
            <span
              aria-hidden="true"
              className="hidden text-2xl text-gris transition-[translate,color] duration-300 group-hover:translate-x-2 group-hover:text-acento md:block"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
