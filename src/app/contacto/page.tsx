import { BloqueFiltroCliente } from "@/components/bloque-filtro-cliente";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { EncabezadoPagina } from "@/components/encabezado-pagina";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { MigasDePan } from "@/components/migas-de-pan";
import { Seccion } from "@/components/seccion";
import { mensajes } from "@/content/mensajes-whatsapp";
import { rutas } from "@/content/rutas";
import { instagramUrl, site } from "@/content/site";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: "Contacto con Digital Mys en Villavicencio",
  descripcion:
    "Escríbenos por WhatsApp y cuéntanos sobre tu marca. Agencia de marketing y contenido en Villavicencio, el Meta y toda Colombia.",
  ruta: rutas.contacto,
});

const quePuedesContarnos = [
  "Qué tipo de negocio tienes.",
  "Qué quieres lograr con tu contenido y tus redes.",
  "Qué inversión mensual aproximada manejas.",
] as const;

export default function Contacto() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="Contacto"
        titulo="Hablemos de tu marca por WhatsApp"
        texto={`Escríbenos al ${site.influencer.whatsappVisible}. Te respondemos de forma directa.`}
      >
        <BotonWhatsApp mensaje={mensajes.contacto} className="px-8 py-4 text-base">
          Escribir por WhatsApp
        </BotonWhatsApp>
      </EncabezadoPagina>
      <MigasDePan migas={[{ etiqueta: "Contacto" }]} />

      <Seccion etiquetadaPor="que-contar">
        <EncabezadoSeccion
          id="que-contar"
          etiqueta="Para empezar"
          titulo="Cuéntanos esto al escribirnos"
          texto="Así podemos entender tu necesidad y proponerte algo útil desde el primer mensaje."
          className="mb-8"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {quePuedesContarnos.map((item, indice) => (
            <li
              key={item}
              className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6"
            >
              <span className="font-titulo text-3xl font-bold text-acento">
                {String(indice + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion>
        <BloqueFiltroCliente />
      </Seccion>

      <Seccion etiquetadaPor="donde">
        <EncabezadoSeccion
          id="donde"
          etiqueta="Dónde estamos"
          titulo={`${site.ubicacion.ciudad}, ${site.ubicacion.departamento}`}
          texto="Trabajamos con marcas de Villavicencio y el Meta, de toda Colombia y de forma remota con otros países."
          className="mb-6"
        />
        <a
          href={instagramUrl(site.influencer.instagram)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-acento underline underline-offset-4"
        >
          Síguenos en Instagram: @{site.influencer.instagram}
        </a>
      </Seccion>
    </>
  );
}
