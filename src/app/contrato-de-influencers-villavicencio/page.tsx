import { BandaCta } from "@/components/banda-cta";
import { BotonEnlace } from "@/components/boton-enlace";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { CuadriculaCifras } from "@/components/cuadricula-cifras";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { Hero } from "@/components/hero";
import { MigasDePan } from "@/components/migas-de-pan";
import { PlanInfluencer } from "@/components/plan-influencer";
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes";
import { Seccion } from "@/components/seccion";
import { TarjetaCaso } from "@/components/tarjeta-caso";
import { casos } from "@/content/casos";
import { cifras } from "@/content/cifras";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { preguntasInfluencers } from "@/content/preguntas";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: "Contrato de influencers en Villavicencio y el Meta",
  descripcion:
    "Contrata influencers en Villavicencio y el Meta: campañas con estrategia, contenido profesional y publicación con creadores de contenido de la región.",
  ruta: rutas.contratoInfluencers,
  imagen: media.influencers.portada,
});

const pasosDeCampana = [
  {
    titulo: "Defines tu objetivo",
    texto: "Nos cuentas qué quieres lograr y a quién quieres llegar.",
  },
  {
    titulo: "Diseñamos la campaña",
    texto: "Elegimos el formato, el mensaje y el creador que mejor encaja con tu marca.",
  },
  {
    titulo: "Publicamos y analizamos",
    texto: "Lanzamos la campaña, revisamos cómo responde la audiencia y ajustamos.",
  },
] as const;

export default function ContratoDeInfluencers() {
  return (
    <>
      <Hero
        titulo="Contrato de influencers en Villavicencio y el Meta"
        descripcion="Campañas con creadores de contenido, con estrategia y producción profesional detrás, para que el mensaje de tu marca llegue a una comunidad real."
        imagen={media.influencers.portada}
        alt="Campaña con influencers de Digital Mys"
      >
        <BotonWhatsApp mensaje={mensajes.influencers}>Cotizar por WhatsApp</BotonWhatsApp>
        <BotonEnlace href={rutas.colaboraciones}>
          Colaboraciones con {site.influencer.nombre}
        </BotonEnlace>
      </Hero>
      <MigasDePan migas={[{ etiqueta: "Contrato de influencers" }]} />

      <Seccion etiquetadaPor="como-funciona">
        <EncabezadoSeccion
          id="como-funciona"
          etiqueta="Cómo funciona"
          titulo="Una campaña con influencers, paso a paso"
          className="mb-10"
        />
        <ol className="grid gap-5 md:grid-cols-3">
          {pasosDeCampana.map((paso, indice) => (
            <li key={paso.titulo} className="rounded-3xl border border-linea bg-superficie p-6">
              <span className="font-titulo text-4xl font-bold text-acento">
                {String(indice + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-titulo text-xl font-semibold">{paso.titulo}</h3>
              <p className="mt-2 text-gris">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </Seccion>

      <Seccion etiquetadaPor="agencia-e-influencer">
        <EncabezadoSeccion
          id="agencia-e-influencer"
          etiqueta="Dos formas de trabajar"
          titulo="Agencia, influencer o ambos"
          texto="Puedes contratar a la agencia, al influencer o a los dos, según tu objetivo."
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-linea bg-superficie p-8">
            <h3 className="font-titulo text-2xl font-bold">{site.agencia.nombre}</h3>
            <p className="mt-3 text-gris">
              Estrategia, contenido y crecimiento digital para tu marca, con un proceso continuo.
            </p>
          </div>
          <div className="rounded-3xl border border-linea bg-superficie p-8">
            <h3 className="font-titulo text-2xl font-bold">{site.influencer.nombre}</h3>
            <p className="mt-3 text-gris">
              Campañas, presencia, influencia y alcance a través de su comunidad en redes.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion etiquetadaPor="comunidad">
        <EncabezadoSeccion
          id="comunidad"
          etiqueta="Comunidad"
          titulo="Una comunidad que amplifica tu mensaje"
          className="mb-10"
        />
        <CuadriculaCifras cifras={cifras} />
      </Seccion>

      <Seccion etiquetadaPor="plan-influencer">
        <PlanInfluencer variante="resumen" />
      </Seccion>

      <Seccion etiquetadaPor="casos">
        <EncabezadoSeccion
          id="casos"
          etiqueta="Casos"
          titulo="Campañas y resultados"
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

      <Seccion etiquetadaPor="preguntas">
        <EncabezadoSeccion
          id="preguntas"
          etiqueta="Preguntas"
          titulo="Preguntas sobre campañas con influencers"
          className="mb-10"
        />
        <PreguntasFrecuentes preguntas={preguntasInfluencers} />
      </Seccion>

      <BandaCta
        titulo="Cotiza tu campaña con influencers"
        texto="Cuéntanos tu objetivo por WhatsApp y te enviamos una cotización a la medida."
        mensaje={mensajes.influencers}
        etiquetaBoton="Cotizar por WhatsApp"
      />
    </>
  );
}
