import type { Cifra } from "@/content/cifras";

type CuadriculaCifrasProps = {
  cifras: readonly Cifra[];
};

/** Bloques de cifras. Solo muestra las que tienen un valor real confirmado. */
export function CuadriculaCifras({ cifras }: CuadriculaCifrasProps) {
  const visibles = cifras.filter((cifra) => cifra.valor !== null);

  if (visibles.length === 0) return null;

  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {visibles.map((cifra, indice) => (
        <div
          key={cifra.etiqueta}
          className={`rounded-3xl border border-linea bg-superficie p-8 ${
            indice === 0 ? "sm:col-span-2" : ""
          }`}
        >
          <dd className="font-titulo text-6xl font-bold tracking-tight text-acento sm:text-7xl">
            {cifra.valor}
          </dd>
          <dt className="mt-3 text-gris">{cifra.etiqueta}</dt>
        </div>
      ))}
    </dl>
  );
}
