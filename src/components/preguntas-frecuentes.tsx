import { JsonLd } from "@/components/json-ld";
import type { Pregunta } from "@/content/preguntas";

type PreguntasFrecuentesProps = {
  preguntas: readonly Pregunta[];
};

/** Acordeón con `<details>` nativo (sin JavaScript) y datos estructurados `FAQPage`. */
export function PreguntasFrecuentes({ preguntas }: PreguntasFrecuentesProps) {
  const datos = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <div className="divide-y divide-linea border-y border-linea">
      <JsonLd datos={datos} />
      {preguntas.map((item) => (
        <details key={item.pregunta} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-titulo text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento sm:text-xl [&::-webkit-details-marker]:hidden">
            {item.pregunta}
            <span
              aria-hidden="true"
              className="text-2xl text-acento transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-gris">{item.respuesta}</p>
        </details>
      ))}
    </div>
  );
}
