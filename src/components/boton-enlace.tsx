import Link from "next/link";
import type { ReactNode } from "react";

type BotonEnlaceProps = {
  href: string;
  children: ReactNode;
  variante?: "primario" | "secundario";
  className?: string;
};

const estilos = {
  primario: "bg-acento text-fondo hover:bg-acento-fuerte",
  secundario: "border border-linea text-texto hover:border-acento hover:text-acento",
} as const;

/** Botón para navegar a otra página de la web. */
export function BotonEnlace({
  href,
  children,
  variante = "secundario",
  className = "",
}: BotonEnlaceProps) {
  return (
    <Link
      href={href}
      className={`boton inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${estilos[variante]} ${className}`}
    >
      {children}
    </Link>
  );
}
