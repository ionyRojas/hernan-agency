import { BandaCta } from "@/components/banda-cta";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { CuadriculaCifras } from "@/components/cuadricula-cifras";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { MigasDePan } from "@/components/migas-de-pan";
import { PlanInfluencer } from "@/components/plan-influencer";
import { RielPosts } from "@/components/riel-posts";
import { Seccion } from "@/components/seccion";
import { cifras } from "@/content/cifras";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { posts } from "@/content/posts";
import { rutas } from "@/content/rutas";
import { site } from "@/content/site";
import { influencerJsonLd } from "@/lib/json-ld-organizacion";
import { crearMetadata } from "@/lib/seo";

export const metadata = crearMetadata({
  titulo: `Colaboraciones con ${site.influencer.nombre}`,
  descripcion: `Campañas con ${site.influencer.nombre}, creador de contenido en Colombia: estrategia, contenido, publicación en sus redes y publicidad para tu marca.`,
  ruta: rutas.colaboraciones,
  imagen: media.influencers.portada,
});

export default function ColaboracionesConElInfluencer() {
  return (
    <>
      <JsonLd datos={influencerJsonLd()} />
      <Hero
        kicker="Creador de contenido digital"
        titulo={`Colaboraciones con ${site.influencer.nombre}`}
        descripcion="Pon tu marca frente a una comunidad real, con estrategia y producción profesional detrás."
        imagen={media.influencers.portada}
        alt={`Foto de ${site.influencer.nombre}`}
      >
        <BotonWhatsApp mensaje={mensajes.influencers}>Cotizar por WhatsApp</BotonWhatsApp>
        <BotonWhatsApp mensaje={mensajes.mediaKit} variante="secundario">
          Solicitar Media Kit
        </BotonWhatsApp>
      </Hero>
      <MigasDePan migas={[{ etiqueta: `Colaboraciones con ${site.influencer.nombre}` }]} />

      <Seccion etiquetadaPor="alcance">
        <EncabezadoSeccion
          id="alcance"
          etiqueta="Alcance"
          titulo="La comunidad detrás de cada campaña"
          className="mb-10"
        />
        <CuadriculaCifras cifras={cifras} />
      </Seccion>

      <Seccion etiquetadaPor="plan-influencer">
        <PlanInfluencer variante="completo" />
      </Seccion>

      <Seccion etiquetadaPor="en-redes">
        <EncabezadoSeccion
          id="en-redes"
          etiqueta="En redes"
          titulo="Así se ve el contenido"
          texto="Mira publicaciones reales en Instagram y TikTok."
          className="mb-10"
        />
        <RielPosts posts={posts} />
      </Seccion>

      <BandaCta
        titulo="Hablemos de tu campaña"
        texto="Cuéntanos tu objetivo por WhatsApp. Si prefieres, solicita primero el Media Kit."
        mensaje={mensajes.influencers}
        etiquetaBoton="Cotizar por WhatsApp"
      />
    </>
  );
}
