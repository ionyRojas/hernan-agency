import { Media } from "@/components/media";
import type { Fundador } from "@/content/fundadores";

type TarjetaFundadorProps = {
  fundador: Fundador;
};

export function TarjetaFundador({ fundador }: TarjetaFundadorProps) {
  return (
    <article className="group tarjeta-viva revelar overflow-hidden rounded-3xl border border-linea bg-superficie">
      <Media
        src={fundador.imagen}
        alt={`Retrato de ${fundador.nombre}`}
        proporcion="aspect-[4/5]"
        sizes="(min-width: 768px) 40vw, 100vw"
      />
      <div className="p-6">
        <h3 className="font-titulo text-2xl font-bold">{fundador.nombre}</h3>
        <p className="mt-1 text-sm font-semibold text-acento">{fundador.rol}</p>
        <p className="mt-3 text-gris">{fundador.descripcion}</p>
      </div>
    </article>
  );
}
