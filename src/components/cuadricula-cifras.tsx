import type { Cifra } from "@/content/cifras";

type CuadriculaCifrasProps = {
  cifras: readonly Cifra[];
};

/** Bloques de cifras de la comunidad. */
export function CuadriculaCifras({ cifras }: CuadriculaCifrasProps) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cifras.map((cifra, indice) => (
        <div
          key={cifra.etiqueta}
          className={`tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-8 ${
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
