import { BandaCta } from "@/components/banda-cta";
import { BloqueFiltroCliente } from "@/components/bloque-filtro-cliente";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { EnlaceVideoFundador } from "@/components/enlace-video-fundador";
import { Hero } from "@/components/hero";
import { MigasDePan } from "@/components/migas-de-pan";
import { Seccion } from "@/components/seccion";
import { TarjetaFundador } from "@/components/tarjeta-fundador";
import { fundadores, historiaDeLaAgencia, historiaDeLaCombinacion } from "@/content/fundadores";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";
import { videosFundador } from "@/content/videos-fundador";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: `Nosotros: ${site.influencer.nombre} y ${site.fundadora.nombre}`,
  descripcion: `Conoce a ${site.influencer.nombre} y ${site.fundadora.nombre}, fundadores de ${site.agencia.nombre}, agencia creativa y de contenido en Villavicencio.`,
  ruta: rutas.nosotros,
  imagen: media.equipo.fundadores,
});

export default function Nosotros() {
  return (
    <>
      <Hero
        kicker="Nosotros"
        titulo={`Una agencia fundada por ${site.influencer.nombre} y ${site.fundadora.nombre}`}
        descripcion="Con identidad propia, para ayudar a las marcas a crecer en el mundo digital."
        imagen={media.equipo.fundadores}
        alt={`${site.influencer.nombre} y ${site.fundadora.nombre}, fundadores de ${site.agencia.nombre}`}
      />
      <MigasDePan migas={[{ etiqueta: "Nosotros" }]} />

      <Seccion etiquetadaPor="historia">
        <EncabezadoSeccion
          id="historia"
          etiqueta="Nuestra historia"
          titulo="Creatividad y estructura, en un mismo equipo"
          className="mb-8"
        />
        <div className="max-w-3xl space-y-5 text-lg text-gris">
          <p>{historiaDeLaAgencia}</p>
          <p>{historiaDeLaCombinacion}</p>
        </div>
      </Seccion>

      <Seccion etiquetadaPor="fundadores">
        <EncabezadoSeccion
          id="fundadores"
          etiqueta="Fundadores"
          titulo="Las personas detrás de la agencia"
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {fundadores.map((fundador) => (
            <li key={fundador.nombre}>
              <TarjetaFundador fundador={fundador} />
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="videos">
        <EncabezadoSeccion
          id="videos"
          etiqueta="En video"
          titulo="Cuéntanoslo en primera persona"
          texto="Mira los videos en nuestras redes: quiénes somos, cómo ayudamos y hacia dónde vamos."
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {videosFundador.map((video) => (
            <li key={video.titulo}>
              <EnlaceVideoFundador {...video} />
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion etiquetadaPor="valores">
        <EncabezadoSeccion
          id="valores"
          etiqueta="Cómo pensamos"
          titulo="Proceso, constancia y compromiso"
          className="mb-10"
        />
        <BloqueFiltroCliente />
      </Seccion>

      <BandaCta
        titulo="Conversemos sobre tu marca"
        texto="Cuéntanos qué quieres construir y vemos cómo acompañarte."
        mensaje={mensajes.nosotros}
      />
    </>
  );
}
