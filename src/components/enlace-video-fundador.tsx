import { Media } from "@/components/media";
import type { Plataforma } from "@/content/posts";

type EnlaceVideoFundadorProps = {
  titulo: string;
  imagen: string;
  plataforma: Plataforma;
  url: string;
};

const nombrePlataforma: Record<Plataforma, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
};

/** Portada con botón de reproducir que abre el video en la red social. No aloja video. */
export function EnlaceVideoFundador({ titulo, imagen, plataforma, url }: EnlaceVideoFundadorProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block tarjeta-viva overflow-hidden rounded-3xl border border-linea"
    >
      <Media
        src={imagen}
        alt={`Portada del video: ${titulo}`}
        proporcion="aspect-[16/10]"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-acento text-2xl text-fondo shadow-lg shadow-black/40 transition-[scale,box-shadow] duration-300 group-hover:scale-110 group-hover:shadow-brillo"
      >
        ▶
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fondo/90 to-transparent p-5">
        <span className="block font-titulo text-xl font-semibold">{titulo}</span>
        <span className="text-sm text-gris">Ver en {nombrePlataforma[plataforma]}</span>
      </span>
    </a>
  );
}
