import Link from "next/link";

import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { Contenedor } from "@/components/contenedor";
import { Logo } from "@/components/logo";
import { MenuMovil } from "@/components/menu-movil";
import { mensajes } from "@/content/mensajes-whatsapp";
import { navegacionPrincipal } from "@/content/navegacion";
import { whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="sticky top-0 z-50 header-vivo border-b border-linea bg-fondo/85 backdrop-blur">
      <Contenedor className="relative flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navegacionPrincipal.map((enlace) => (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  className="enlace-subrayado text-sm text-gris transition-colors hover:text-texto"
                >
                  {enlace.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <BotonWhatsApp mensaje={mensajes.general}>Escríbenos</BotonWhatsApp>
        </div>

        <MenuMovil enlaces={navegacionPrincipal} hrefWhatsApp={whatsappUrl(mensajes.general)} />
      </Contenedor>
    </header>
  );
}
