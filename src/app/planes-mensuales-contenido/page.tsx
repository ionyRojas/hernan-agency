import { BandaCta } from "@/components/banda-cta";
import { BloqueFiltroCliente } from "@/components/bloque-filtro-cliente";
import { BotonEnlace } from "@/components/boton-enlace";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { Hero } from "@/components/hero";
import { MigasDePan } from "@/components/migas-de-pan";
import { PaquetesDesde } from "@/components/paquetes-desde";
import { PasosProceso } from "@/components/pasos-proceso";
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes";
import { Seccion } from "@/components/seccion";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { planes } from "@/content/planes";
import { preguntasPlanes } from "@/content/preguntas";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: "Planes mensuales de contenido y redes",
  descripcion:
    "Planes mensuales integrales de contenido, producción audiovisual y manejo de redes sociales para marcas en Villavicencio, el Meta y Colombia.",
  ruta: rutas.planes,
  imagen: media.servicios.planesMensuales.portada,
});

const queIncluye = [
  "Parrilla de contenido",
  "Producción audiovisual",
  "Fotografía",
  "Diseño con estrategia",
  "Gestión de redes sociales",
] as const;

export default function PlanesMensuales() {
  return (
    <>
      <Hero
        kicker="Planes mensuales"
        titulo="Contenido y redes con estrategia, mes a mes"
        descripcion={`Un plan integral para que ${site.agencia.nombre} se encargue de crear, publicar y mejorar el contenido de tu marca.`}
        imagen={media.servicios.planesMensuales.portada}
        alt="Contenido mensual producido por Digital Mys"
      >
        <BotonWhatsApp mensaje={mensajes.planes}>Solicitar propuesta</BotonWhatsApp>
      </Hero>
      <MigasDePan migas={[{ etiqueta: "Planes mensuales" }]} />

      <Seccion etiquetadaPor="incluye">
        <EncabezadoSeccion
          id="incluye"
          etiqueta="Qué incluye"
          titulo="Todo lo que tu marca necesita para comunicar mejor"
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {queIncluye.map((item) => (
            <li
              key={item}
              className="rounded-3xl border border-linea bg-superficie p-6 font-titulo text-lg font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="planes">
        <EncabezadoSeccion
          id="planes"
          etiqueta="Planes"
          titulo="Elige el nivel que acompaña a tu marca"
          texto="Tres niveles que crecen contigo. Te enviamos la propuesta por WhatsApp."
          className="mb-12"
        />
        <PaquetesDesde planes={planes} />
        <aside className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-linea bg-superficie p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-gris">
            <span className="font-semibold text-texto">
              El plan de influencers se cotiza aparte.
            </span>{" "}
            Para campañas con {site.influencer.nombre} y su comunidad.
          </p>
          <BotonEnlace href={rutas.colaboraciones}>Ver colaboraciones</BotonEnlace>
        </aside>
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

      <Seccion>
        <BloqueFiltroCliente />
      </Seccion>

      <Seccion etiquetadaPor="preguntas">
        <EncabezadoSeccion
          id="preguntas"
          etiqueta="Preguntas"
          titulo="Preguntas sobre los planes"
          className="mb-10"
        />
        <PreguntasFrecuentes preguntas={preguntasPlanes} />
      </Seccion>

      <BandaCta
        titulo="Recibe una propuesta a tu medida"
        texto="Cuéntanos tu negocio y el nivel que más se ajusta a lo que quieres construir."
        mensaje={mensajes.planes}
        etiquetaBoton="Solicitar propuesta"
      />
    </>
  );
}
