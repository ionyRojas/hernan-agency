import { Media } from "@/components/media";

type GaleriaMediaProps = {
  imagenes: readonly string[];
  /** Descripción del conjunto; a cada imagen se le agrega su número. */
  descripcion: string;
};

export function GaleriaMedia({ imagenes, descripcion }: GaleriaMediaProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {imagenes.map((imagen, indice) => (
        <li key={imagen}>
          <Media
            src={imagen}
            alt={`${descripcion}, imagen ${indice + 1}`}
            proporcion="aspect-[4/5]"
            sizes="(min-width: 640px) 33vw, 100vw"
            className="rounded-2xl border border-linea"
          />
        </li>
      ))}
    </ul>
  );
}
