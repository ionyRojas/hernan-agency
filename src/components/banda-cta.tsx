import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { Contenedor } from "@/components/contenedor";

type BandaCtaProps = {
  titulo: string;
  texto: string;
  /** Mensaje prellenado según la página. */
  mensaje: string;
  etiquetaBoton?: string;
};

/** Cierre de página con la llamada a la acción por WhatsApp. */
export function BandaCta({
  titulo,
  texto,
  mensaje,
  etiquetaBoton = "Escríbenos por WhatsApp",
}: BandaCtaProps) {
  return (
    <section aria-label="Contacto" className="py-16 sm:py-24">
      <Contenedor>
        <div className="rounded-[2rem] border border-linea bg-superficie px-8 py-14 text-center sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-3xl font-titulo text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
            {titulo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-pretty text-gris">{texto}</p>
          <BotonWhatsApp mensaje={mensaje} className="mt-8 px-8 py-4 text-base">
            {etiquetaBoton}
          </BotonWhatsApp>
        </div>
      </Contenedor>
    </section>
  );
}
