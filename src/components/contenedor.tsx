import type { ReactNode } from "react";

type ContenedorProps = {
  children: ReactNode;
  className?: string;
};

export function Contenedor({ children, className = "" }: ContenedorProps) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}
