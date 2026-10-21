import { BandaCta } from "@/components/banda-cta";
import { BotonEnlace } from "@/components/boton-enlace";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { Hero } from "@/components/hero";
import { IndiceServicios } from "@/components/indice-servicios";
import { MigasDePan } from "@/components/migas-de-pan";
import { PasosProceso } from "@/components/pasos-proceso";
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes";
import { Seccion } from "@/components/seccion";
import { SectoresExperiencia } from "@/components/sectores-experiencia";
import { TarjetaCaso } from "@/components/tarjeta-caso";
import { casos } from "@/content/casos";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { preguntasAgencia } from "@/content/preguntas";
import { rutas } from "@/content/rutas";
import { servicios } from "@/content/servicios";
import { site } from "@/content/site";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: "Agencia de marketing en Villavicencio",
  descripcion:
    "La agencia de marketing digital más grande de los Llanos, en Villavicencio y el Meta: estrategia, producción audiovisual, fotografía, redes sociales y campañas con influencers.",
  ruta: rutas.agencia,
});

const piezasDeLaPropuesta = [
  "Estrategia",
  "Contenido",
  "Campañas",
  "Influencia",
  "Distribución digital",
] as const;

export default function AgenciaDeMarketing() {
  return (
    <>
      <Hero
        titulo="Agencia de marketing en Villavicencio"
        descripcion="Somos la agencia de marketing digital más grande de los Llanos: creamos contenido, producción audiovisual y campañas que posicionan tu marca y conectan con su audiencia."
        imagen={media.servicios.audiovisual.portada}
        alt="Equipo de Digital Mys produciendo contenido"
      >
        <BotonWhatsApp mensaje={mensajes.agencia}>Cuéntanos tu marca</BotonWhatsApp>
        <BotonEnlace href={rutas.planes}>Ver planes mensuales</BotonEnlace>
      </Hero>
      <MigasDePan migas={[{ etiqueta: "Agencia de marketing en Villavicencio" }]} />

      <Seccion etiquetadaPor="propuesta">
        <EncabezadoSeccion
          id="propuesta"
          etiqueta="Propuesta integrada"
          titulo="Marketing para marcas, de principio a fin"
          texto="Una sola agencia que une las piezas que tu marca necesita para crecer."
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {piezasDeLaPropuesta.map((pieza, indice) => (
            <li
              key={pieza}
              className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6"
            >
              <span className="font-titulo text-3xl font-bold text-acento">
                {String(indice + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-titulo text-xl font-semibold">{pieza}</p>
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="servicios">
        <EncabezadoSeccion
          id="servicios"
          etiqueta="Servicios"
          titulo="Lo que hacemos por tu marca"
          className="mb-12"
        />
        <IndiceServicios servicios={servicios} />
      </Seccion>

      <Seccion etiquetadaPor="proceso">
        <EncabezadoSeccion
          id="proceso"
          etiqueta="Cómo trabajamos"
          titulo="Un proceso claro, mes a mes"
          className="mb-10"
        />
        <PasosProceso />
      </Seccion>

      <Seccion etiquetadaPor="casos">
        <EncabezadoSeccion
          id="casos"
          etiqueta="Casos de éxito"
          titulo="Marcas que ya construyen con nosotros"
          className="mb-10"
        />
        <ul className="grid gap-8 md:grid-cols-2">
          {casos.map((caso) => (
            <li key={caso.slug}>
              <TarjetaCaso caso={caso} />
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="experiencia">
        <EncabezadoSeccion
          id="experiencia"
          etiqueta="Experiencia"
          titulo="También hemos trabajado en otros sectores"
          texto="Turismo, educación, ropa, marcas de consumo y empresas nacionales y locales."
          className="mb-10"
        />
        <SectoresExperiencia />
      </Seccion>

      <Seccion etiquetadaPor="cobertura">
        <EncabezadoSeccion
          id="cobertura"
          etiqueta="Cobertura"
          titulo={`Desde ${site.ubicacion.ciudad} para el ${site.ubicacion.departamento} y toda ${site.ubicacion.pais}`}
          texto="La agencia que más se mueve en el Meta y los Llanos. Trabajamos de forma presencial en Villavicencio y el Meta, y de forma remota con marcas de otras ciudades y países."
        />
      </Seccion>

      <Seccion etiquetadaPor="preguntas">
        <EncabezadoSeccion
          id="preguntas"
          etiqueta="Preguntas"
          titulo="Preguntas frecuentes sobre nuestra agencia en Villavicencio"
          className="mb-10"
        />
        <PreguntasFrecuentes preguntas={preguntasAgencia} />
      </Seccion>

      <BandaCta
        titulo="Hagamos visible tu marca"
        texto="Cuéntanos tu negocio y te proponemos un plan a tu medida."
        mensaje={mensajes.agencia}
      />
    </>
  );
}
