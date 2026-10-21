import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { CuadriculaCifras } from "@/components/cuadricula-cifras";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { cifras } from "@/content/cifras";
import {
  formatosDeColaboracion,
  incluyePlanInfluencer,
  noEsParaQuien,
  paraQuienEs,
  porQueFunciona,
} from "@/content/influencer";
import { mensajes } from "@/content/mensajes-whatsapp";

type PlanInfluencerProps = {
  /** `resumen` muestra lo esencial; `completo` agrega formatos, motivos y filtro de cliente. */
  variante?: "resumen" | "completo";
};

function BotonCotizar() {
  return <BotonWhatsApp mensaje={mensajes.influencers}>Cotizar por WhatsApp</BotonWhatsApp>;
}

/** Plan premium de influencers. Se cotiza por WhatsApp, sin precio publicado. */
export function PlanInfluencer({ variante = "completo" }: PlanInfluencerProps) {
  const completo = variante === "completo";

  return (
    <div className="space-y-16">
      <div className="rounded-[2rem] border border-acento/40 bg-superficie-alta p-8 sm:p-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-acento uppercase">
          Plan premium · Se cotiza aparte
        </p>
        <h2
          id="plan-influencer"
          className="mt-3 font-titulo text-3xl font-bold tracking-tight text-balance sm:text-5xl"
        >
          Pon tu marca frente a una comunidad real
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gris">
          Estrategia, contenido, publicación y publicidad en un solo plan. Cuéntanos tu objetivo por
          WhatsApp y te enviamos una cotización a la medida.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {incluyePlanInfluencer.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="text-acento">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <BotonCotizar />
        </div>
      </div>

      <CuadriculaCifras cifras={cifras} />

      {completo ? (
        <>
          <section aria-labelledby="formatos">
            <EncabezadoSeccion
              id="formatos"
              etiqueta="Formatos"
              titulo="Cómo puede participar tu marca"
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {formatosDeColaboracion.map((formato) => (
                <li
                  key={formato.titulo}
                  className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6"
                >
                  <h3 className="font-titulo text-xl font-semibold">{formato.titulo}</h3>
                  <p className="mt-2 text-gris">{formato.texto}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <BotonCotizar />
            </div>
          </section>

          <section aria-labelledby="por-que-funciona">
            <EncabezadoSeccion
              id="por-que-funciona"
              etiqueta="Por qué funciona"
              titulo="Influencia con estrategia detrás"
            />
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {porQueFunciona.map((motivo) => (
                <li
                  key={motivo.titulo}
                  className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6"
                >
                  <h3 className="font-titulo text-xl font-semibold">{motivo.titulo}</h3>
                  <p className="mt-2 text-gris">{motivo.texto}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="para-quien">
            <EncabezadoSeccion
              id="para-quien"
              etiqueta="Antes de escribir"
              titulo="Para quién es y para quién no"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6">
                <h3 className="font-titulo text-xl font-semibold text-acento">Es para ti si…</h3>
                <ul className="mt-4 space-y-3 text-gris">
                  {paraQuienEs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6">
                <h3 className="font-titulo text-xl font-semibold">No es para ti si…</h3>
                <ul className="mt-4 space-y-3 text-gris">
                  {noEsParaQuien.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <BotonCotizar />
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
