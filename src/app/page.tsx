import type { Metadata } from "next";

import { BandaCta } from "@/components/banda-cta";
import { BotonEnlace } from "@/components/boton-enlace";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { CuadriculaCifras } from "@/components/cuadricula-cifras";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { FranjaClientes } from "@/components/franja-clientes";
import { Hero } from "@/components/hero";
import { IndiceServicios } from "@/components/indice-servicios";
import { PreguntasFrecuentes } from "@/components/preguntas-frecuentes";
import { RielPosts } from "@/components/riel-posts";
import { Seccion } from "@/components/seccion";
import { SectoresExperiencia } from "@/components/sectores-experiencia";
import { TarjetaFundador } from "@/components/tarjeta-fundador";
import { cifras } from "@/content/cifras";
import { fundadores } from "@/content/fundadores";
import { media } from "@/content/media";
import { mensajes } from "@/content/mensajes-whatsapp";
import { posts } from "@/content/posts";
import { preguntasInicio } from "@/content/preguntas";
import { rutas } from "@/content/rutas";
import { servicios } from "@/content/servicios";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: rutas.inicio },
};

export default function Inicio() {
  return (
    <>
      <Hero
        altura="completa"
        kicker="Agencia de marketing en Villavicencio"
        titulo={site.agencia.eslogan}
        descripcion="Contenido estratégico y de calidad que conecta con personas y genera oportunidades de crecimiento para tu marca."
        imagen={media.hero.portada}
        alt="Producción de contenido de Digital Mys"
      >
        <BotonWhatsApp mensaje={mensajes.general}>Escríbenos por WhatsApp</BotonWhatsApp>
        <BotonEnlace href={rutas.planes}>Ver planes mensuales</BotonEnlace>
      </Hero>

      <FranjaClientes />

      <Seccion etiquetadaPor="servicios">
        <EncabezadoSeccion
          id="servicios"
          etiqueta="Servicios"
          titulo="Soluciones completas, no tareas sueltas"
          texto="Estrategia, producción y redes trabajando juntas para que tu marca comunique mejor."
          className="mb-12"
        />
        <IndiceServicios servicios={servicios} />
      </Seccion>

      <Seccion etiquetadaPor="comunidad">
        <EncabezadoSeccion
          id="comunidad"
          etiqueta="Comunidad"
          titulo="Una comunidad digital que amplifica tu mensaje"
          texto="Además de crear campañas, contamos con una comunidad que permite potenciar el mensaje de tu marca."
          className="mb-12"
        />
        <CuadriculaCifras cifras={cifras} />
      </Seccion>

      <Seccion etiquetadaPor="en-redes">
        <EncabezadoSeccion
          id="en-redes"
          etiqueta="En redes"
          titulo="El contenido se ve mejor en movimiento"
          texto="Mira lo que publicamos en Instagram y TikTok."
          className="mb-10"
        />
        <RielPosts posts={posts} />
      </Seccion>

      <Seccion etiquetadaPor="sectores">
        <EncabezadoSeccion
          id="sectores"
          etiqueta="Sectores"
          titulo="Nuestro foco: restaurantes y gastronomía"
          texto="Es nuestra prioridad. También hemos trabajado con marcas de otros sectores."
          className="mb-10"
        />
        <SectoresExperiencia />
      </Seccion>

      <Seccion etiquetadaPor="fundadores">
        <EncabezadoSeccion
          id="fundadores"
          etiqueta="Quiénes somos"
          titulo="Dos perfiles, una sola agencia"
          texto="Creatividad y conocimiento de audiencias, junto con estructura y visión empresarial."
          className="mb-10"
        />
        <ul className="grid gap-5 md:grid-cols-2">
          {fundadores.map((fundador) => (
            <li key={fundador.nombre}>
              <TarjetaFundador fundador={fundador} />
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <BotonEnlace href={rutas.nosotros}>Conoce nuestra historia</BotonEnlace>
        </div>
      </Seccion>

      <Seccion etiquetadaPor="preguntas">
        <EncabezadoSeccion
          id="preguntas"
          etiqueta="Preguntas"
          titulo="Lo que suelen preguntarnos"
          className="mb-10"
        />
        <PreguntasFrecuentes preguntas={preguntasInicio} />
      </Seccion>

      <BandaCta
        titulo="Hablemos de tu marca"
        texto="Cuéntanos qué vendes, a quién quieres llegar y qué quieres construir. Te respondemos por WhatsApp."
        mensaje={mensajes.general}
      />
    </>
  );
}
