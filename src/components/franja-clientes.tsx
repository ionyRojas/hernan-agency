import Image from "next/image";

import { Contenedor } from "@/components/contenedor";
import { media } from "@/content/media";

/** Logos de clientes. No se muestra nada hasta que haya logos autorizados en `media.clientes`. */
export function FranjaClientes() {
  if (media.clientes.length === 0) return null;

  return (
    <section aria-label="Marcas que confían en nosotros" className="border-y border-linea py-8">
      <Contenedor>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {media.clientes.map((logo) => (
            <li key={logo}>
              <Image
                src={logo}
                alt="Logo de una marca cliente"
                width={120}
                height={40}
                unoptimized
                className="h-8 w-auto opacity-70"
              />
            </li>
          ))}
        </ul>
      </Contenedor>
    </section>
  );
}
