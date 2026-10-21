import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { CuadriculaCifras } from "@/components/cuadricula-cifras";
import { EncabezadoPagina } from "@/components/encabezado-pagina";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { MigasDePan } from "@/components/migas-de-pan";
import { Seccion } from "@/components/seccion";
import { cifras } from "@/content/cifras";
import { mensajes } from "@/content/mensajes-whatsapp";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: `Media Kit de ${site.influencer.nombre}`,
  descripcion: `Solicita el Media Kit de ${site.influencer.nombre}: comunidad, alcance y formatos de colaboración para tu marca.`,
  ruta: rutas.mediaKit,
});

export default function MediaKit() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="Media Kit"
        titulo={`Media Kit de ${site.influencer.nombre}`}
        texto="Te lo enviamos por WhatsApp después de conocer la necesidad de tu marca, para recomendarte el formato que mejor encaja."
      >
        <BotonWhatsApp mensaje={mensajes.mediaKit} className="px-8 py-4 text-base">
          Solicitar Media Kit por WhatsApp
        </BotonWhatsApp>
      </EncabezadoPagina>
      <MigasDePan migas={[{ etiqueta: "Media Kit" }]} />

      <Seccion etiquetadaPor="comunidad">
        <EncabezadoSeccion
          id="comunidad"
          etiqueta="Resumen"
          titulo="La comunidad en números"
          className="mb-10"
        />
        <CuadriculaCifras cifras={cifras} />
      </Seccion>
    </>
  );
}
