import type { ReactNode } from "react";

import { Contenedor } from "@/components/contenedor";

type SeccionProps = {
  children: ReactNode;
  /** Id del encabezado que nombra la sección, para accesibilidad. */
  etiquetadaPor?: string;
  className?: string;
};

export function Seccion({ children, etiquetadaPor, className = "" }: SeccionProps) {
  return (
    <section aria-labelledby={etiquetadaPor} className={`py-16 sm:py-24 ${className}`}>
      <Contenedor>{children}</Contenedor>
    </section>
  );
}
