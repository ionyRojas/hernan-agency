import Image from "next/image";
import Link from "next/link";

import { media } from "@/content/media";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";

export function Logo() {
  return (
    <Link href={rutas.inicio} aria-label={`${site.agencia.nombre}, ir al inicio`}>
      <Image
        src={media.brand.logo}
        alt={site.agencia.nombre}
        width={160}
        height={32}
        unoptimized
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}
