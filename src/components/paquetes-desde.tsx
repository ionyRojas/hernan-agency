import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { mensajes } from "@/content/mensajes-whatsapp";
import type { Plan } from "@/content/planes";

type PaquetesDesdeProps = {
  planes: readonly Plan[];
  /** Mensaje de WhatsApp personalizado por plan. Por defecto, el mensaje general de planes. */
  mensajePorPlan?: (nombrePlan: Plan["nombre"]) => string;
};

export function PaquetesDesde({ planes, mensajePorPlan = mensajes.plan }: PaquetesDesdeProps) {
  return (
    <div>
      <ul className="grid gap-5 lg:grid-cols-3">
        {planes.map((plan) => (
          <li
            key={plan.nombre}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              plan.recomendado ? "border-acento bg-superficie-alta" : "border-linea bg-superficie"
            }`}
          >
            {plan.recomendado ? (
              <span className="absolute -top-3 left-8 rounded-full bg-acento px-3 py-1 text-xs font-semibold tracking-wider text-fondo uppercase">
                Recomendado
              </span>
            ) : null}
            <h3 className="font-titulo text-3xl font-bold">{plan.nombre}</h3>
            <p className="mt-2 text-gris">{plan.paraQuien}</p>

            <p className="mt-6 text-sm text-gris">{plan.desde ? "Desde" : "Inversión mensual"}</p>
            <p className="font-titulo text-2xl font-semibold">
              {plan.desde ?? "A la medida de tu marca"}
            </p>

            <ul className="mt-6 flex-1 space-y-3 border-t border-linea pt-6 text-sm">
              {plan.incluye.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="text-acento">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <BotonWhatsApp
              mensaje={mensajePorPlan(plan.nombre)}
              variante={plan.recomendado ? "primario" : "secundario"}
              className="mt-8"
            >
              Solicitar propuesta
            </BotonWhatsApp>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-gris">
        Los entregables exactos y la inversión se definen en tu propuesta, después de conocer tu
        marca.
      </p>
    </div>
  );
}
