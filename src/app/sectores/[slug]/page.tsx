import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BandaCta } from "@/components/banda-cta";
import { BotonEnlace } from "@/components/boton-enlace";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { GaleriaMedia } from "@/components/galeria-media";
import { Hero } from "@/components/hero";
import { MigasDePan } from "@/components/migas-de-pan";
import { PaquetesDesde } from "@/components/paquetes-desde";
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes";
import { Seccion } from "@/components/seccion";
import { SectoresExperiencia } from "@/components/sectores-experiencia";
import { media } from "@/content/media";
import type { NombrePlan } from "@/content/planes";
import { planes } from "@/content/planes";
import { rutas } from "@/content/rutas";
import { sectoresPrincipales, type Sector } from "@/content/sectores";
import { crearMetadata } from "@/lib/seo";

function buscarSector(slug: string): Sector | undefined {
  return sectoresPrincipales.find((sector) => sector.slug === slug);
}

export function generateStaticParams() {
  return sectoresPrincipales.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/sectores/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sector = buscarSector(slug);
  if (!sector) return {};

  return crearMetadata({
    titulo: sector.titulo,
    descripcion: sector.descripcionSeo,
    ruta: rutas.sector(sector.slug),
    imagen: media.sectores[sector.slug].portada,
  });
}

export default async function PaginaDeSector({ params }: PageProps<"/sectores/[slug]">) {
  const { slug } = await params;
  const sector = buscarSector(slug);
  if (!sector) notFound();

  const imagenes = media.sectores[sector.slug];
  const mensajePorPlan = (nombrePlan: NombrePlan) =>
    `${sector.mensajeWhatsApp} Me interesa el plan ${nombrePlan}.`;

  return (
    <>
      <Hero
        titulo={sector.titulo}
        descripcion={sector.intro}
        imagen={imagenes.portada}
        alt={`Contenido para ${sector.nombre} creado por Digital Mys`}
      >
        <BotonWhatsApp mensaje={sector.mensajeWhatsApp}>Conocer los planes</BotonWhatsApp>
        <BotonEnlace href={rutas.planes}>Ver planes mensuales</BotonEnlace>
      </Hero>
      <MigasDePan migas={[{ etiqueta: sector.nombre }]} />

      <Seccion etiquetadaPor="problemas">
        <EncabezadoSeccion
          id="problemas"
          etiqueta="¿Te suena familiar?"
          titulo="Lo que suele frenar a las marcas de este sector"
          className="mb-10"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {sector.problemas.map((problema) => (
            <li
              key={problema}
              className="rounded-3xl border border-linea bg-superficie p-6 text-lg"
            >
              {problema}
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="que-hacemos">
        <EncabezadoSeccion
          id="que-hacemos"
          etiqueta="Qué hacemos"
          titulo={`Cómo trabajamos con ${sector.nombre.toLowerCase()}`}
          className="mb-10"
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {sector.queHacemos.map((accion, indice) => (
            <li key={accion.titulo} className="rounded-3xl border border-linea bg-superficie p-6">
              <span className="font-titulo text-3xl font-bold text-acento">
                {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-titulo text-xl font-semibold">{accion.titulo}</h3>
              <p className="mt-2 text-gris">{accion.texto}</p>
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="trabajos">
        <EncabezadoSeccion
          id="trabajos"
          etiqueta="Trabajos"
          titulo="Contenido pensado para tu sector"
          className="mb-10"
        />
        <GaleriaMedia imagenes={imagenes.galeria} descripcion={`Trabajo para ${sector.nombre}`} />
      </Seccion>

      <Seccion etiquetadaPor="planes">
        <EncabezadoSeccion
          id="planes"
          etiqueta="Planes"
          titulo={`Planes para ${sector.nombre.toLowerCase()}`}
          texto="Elige el nivel que acompaña a tu marca. Te enviamos la propuesta por WhatsApp."
          className="mb-12"
        />
        <PaquetesDesde planes={planes} mensajePorPlan={mensajePorPlan} />
      </Seccion>

      <Seccion etiquetadaPor="experiencia">
        <EncabezadoSeccion
          id="experiencia"
          etiqueta="Experiencia"
          titulo="También hemos trabajado en otros sectores"
          className="mb-10"
        />
        <SectoresExperiencia />
      </Seccion>

      <Seccion etiquetadaPor="preguntas">
        <EncabezadoSeccion
          id="preguntas"
          etiqueta="Preguntas"
          titulo="Preguntas frecuentes"
          className="mb-10"
        />
        <PreguntasFrecuentes preguntas={sector.preguntas} />
      </Seccion>

      <BandaCta
        titulo={`Hagamos visible tu negocio de ${sector.nombre.toLowerCase()}`}
        texto="Cuéntanos qué ofreces y qué quieres construir. Te respondemos por WhatsApp."
        mensaje={sector.mensajeWhatsApp}
      />
    </>
  );
}
