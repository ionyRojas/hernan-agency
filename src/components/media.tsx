import Image from "next/image";

type MediaProps = {
  src: string;
  /** Texto alternativo obligatorio. Usa "" solo si la imagen es puramente decorativa. */
  alt: string;
  /** Clases de proporción, por ejemplo `aspect-[4/5]`. */
  proporcion?: string;
  sizes?: string;
  prioridad?: boolean;
  className?: string;
};

/** Imagen de la carpeta de medios. Server Component: no envía JavaScript al cliente. */
export function Media({
  src,
  alt,
  proporcion = "aspect-[16/10]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  prioridad = false,
  className = "",
}: MediaProps) {
  return (
    <div className={`relative overflow-hidden bg-superficie ${proporcion} ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={prioridad} className="object-cover" />
    </div>
  );
}
