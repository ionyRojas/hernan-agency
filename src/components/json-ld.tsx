type JsonLdProps = {
  datos: Record<string, unknown>;
};

/** Datos estructurados. Se reemplaza `<` para evitar inyección de HTML dentro del script. */
export function JsonLd({ datos }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }}
    />
  );
}
