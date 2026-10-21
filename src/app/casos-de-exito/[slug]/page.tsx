import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BandaCta } from "@/components/banda-cta";
import { BotonEnlace } from "@/components/boton-enlace";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { GaleriaMedia } from "@/components/galeria-media";
import { Hero } from "@/components/hero";
import { MigasDePan } from "@/components/migas-de-pan";
import { Seccion } from "@/components/seccion";
import { buscarCaso, casos } from "@/content/casos";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { rutas } from "@/content/rutas";
import { crearMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/casos-de-exito/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caso = buscarCaso(slug);
  if (!caso) return {};

  return crearMetadata({
    titulo: caso.titulo,
    descripcion: caso.resumen,
    ruta: rutas.caso(caso.slug),
    imagen: media.casos[caso.slug].portada,
    noIndexar: caso.estado === "pendiente",
  });
}

export default async function DetalleDeCaso({ params }: PageProps<"/casos-de-exito/[slug]">) {
  const { slug } = await params;
  const caso = buscarCaso(slug);
  if (!caso) notFound();

  const imagenes = media.casos[caso.slug];
  const pendiente = caso.estado === "pendiente";

  return (
    <>
      <Hero
        kicker={caso.sector}
        titulo={caso.titulo}
        descripcion={caso.resumen}
        imagen={imagenes.portada}
        alt={`Portada del caso de éxito ${caso.titulo}`}
      />
      <MigasDePan
        migas={[{ etiqueta: "Casos de éxito", href: rutas.casos }, { etiqueta: caso.titulo }]}
      />

      {pendiente ? (
        <Seccion>
          <p className="max-w-2xl rounded-3xl border border-linea bg-superficie p-8 text-lg text-gris">
            Este caso se publicará pronto, con la autorización del cliente y resultados medidos.
          </p>
          <div className="mt-8">
            <BotonEnlace href={rutas.casos}>Volver a los casos</BotonEnlace>
          </div>
        </Seccion>
      ) : (
        <>
          <Seccion etiquetadaPor="problema">
            <EncabezadoSeccion
              id="problema"
              etiqueta="El punto de partida"
              titulo="El reto"
              className="mb-6"
            />
            <p className="max-w-3xl text-lg text-gris">{caso.problema}</p>
          </Seccion>

          <Seccion etiquetadaPor="que-hicimos">
            <EncabezadoSeccion
              id="que-hicimos"
              etiqueta="La solución"
              titulo="Qué hicimos"
              className="mb-6"
            />
            <p className="max-w-3xl text-lg text-gris">{caso.queHicimos}</p>
          </Seccion>

          {caso.resultados.length > 0 ? (
            <Seccion etiquetadaPor="resultados">
              <EncabezadoSeccion
                id="resultados"
                etiqueta="Resultados"
                titulo="Lo que medimos"
                className="mb-10"
              />
              <dl className="grid gap-4 sm:grid-cols-3">
                {caso.resultados.map((resultado) => (
                  <div
                    key={resultado.etiqueta}
                    className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-8"
                  >
                    <dd className="font-titulo text-5xl font-bold text-acento">
                      {resultado.valor}
                    </dd>
                    <dt className="mt-2 text-gris">{resultado.etiqueta}</dt>
                  </div>
                ))}
              </dl>
            </Seccion>
          ) : null}

          <Seccion etiquetadaPor="galeria">
            <EncabezadoSeccion
              id="galeria"
              etiqueta="Galería"
              titulo="El trabajo en imágenes"
              className="mb-10"
            />
            <GaleriaMedia imagenes={imagenes.galeria} descripcion={caso.titulo} />
            {caso.enlacePost ? (
              <a
                href={caso.enlacePost}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-acento underline underline-offset-4"
              >
                Ver el post original en redes
              </a>
            ) : null}
          </Seccion>
        </>
      )}

      <BandaCta
        titulo="Construyamos tu próximo caso"
        texto="Cuéntanos tu marca y diseñamos un plan a tu medida."
        mensaje={mensajes.casos}
      />
    </>
  );
}
