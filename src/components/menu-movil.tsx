"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { EnlaceDeNavegacion } from "@/content/navegacion";

type MenuMovilProps = {
  enlaces: readonly EnlaceDeNavegacion[];
  /** URL de WhatsApp ya calculada en el servidor. */
  hrefWhatsApp: string;
};

/**
 * Menú de móvil. El menú queda abierto solo mientras la ruta sea la misma en la que se abrió,
 * así se cierra al navegar sin necesitar un efecto.
 */
export function MenuMovil({ enlaces, hrefWhatsApp }: MenuMovilProps) {
  const rutaActual = usePathname();
  const [rutaDondeSeAbrio, setRutaDondeSeAbrio] = useState<string | null>(null);
  const abierto = rutaDondeSeAbrio === rutaActual;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={abierto}
        aria-controls="menu-movil"
        onClick={() => setRutaDondeSeAbrio(abierto ? null : rutaActual)}
        className="flex size-11 items-center justify-center rounded-full border border-linea text-texto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
      >
        <span className="sr-only">{abierto ? "Cerrar menú" : "Abrir menú"}</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      <nav
        id="menu-movil"
        aria-label="Menú principal"
        hidden={!abierto}
        className="absolute inset-x-0 top-full border-b border-linea bg-fondo px-5 py-6"
      >
        <ul className="flex flex-col gap-1">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <Link
                href={enlace.href}
                className="block rounded-lg px-3 py-3 font-titulo text-xl text-texto hover:text-acento"
              >
                {enlace.etiqueta}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={hrefWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center rounded-full bg-acento px-6 py-3 text-sm font-semibold text-fondo"
        >
          Escríbenos por WhatsApp
        </a>
      </nav>
    </div>
  );
}
