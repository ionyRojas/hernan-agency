type EncabezadoSeccionProps = {
  /** Número o etiqueta corta sobre el título, por ejemplo "01". */
  etiqueta?: string;
  titulo: string;
  texto?: string;
  id?: string;
  className?: string;
};

export function EncabezadoSeccion({
  etiqueta,
  titulo,
  texto,
  id,
  className = "",
}: EncabezadoSeccionProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      {etiqueta ? (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-acento uppercase">
          {etiqueta}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-titulo text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
      >
        {titulo}
      </h2>
      {texto ? <p className="mt-4 text-lg text-pretty text-gris">{texto}</p> : null}
    </header>
  );
}
