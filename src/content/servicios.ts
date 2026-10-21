import { media } from "@/content/media";
import { rutas } from "@/content/rutas";

export type Servicio = {
  numero: string;
  titulo: string;
  descripcion: string;
  href: string;
  imagen: string;
  destacado?: boolean;
};

/** Cinco servicios agrupados a partir de las respuestas de la agencia. */
export const servicios: readonly Servicio[] = [
  {
    numero: "01",
    titulo: "Planes mensuales integrales",
    descripcion:
      "Contenido, producción y redes con estrategia, mes a mes. Una solución completa, no tareas sueltas.",
    href: rutas.planes,
    imagen: media.servicios.planesMensuales.portada,
    destacado: true,
  },
  {
    numero: "02",
    titulo: "Producción audiovisual y fotografía",
    descripcion:
      "Videos para redes, reels y fotografía de productos y empresas con criterio creativo.",
    href: rutas.agencia,
    imagen: media.servicios.audiovisual.portada,
  },
  {
    numero: "03",
    titulo: "Diseño gráfico con estrategia",
    descripcion: "Piezas que forman parte de un plan, no adornos aislados.",
    href: rutas.agencia,
    imagen: media.servicios.diseno.portada,
  },
  {
    numero: "04",
    titulo: "Estrategia y asesoría de marca",
    descripcion:
      "Comunicación digital, parrillas de contenido y asesoría para marcas personales y empresariales.",
    href: rutas.agencia,
    imagen: media.servicios.redesSociales.portada,
  },
  {
    numero: "05",
    titulo: "Campañas e influencers",
    descripcion:
      "Campañas publicitarias y colaboraciones con creadores para amplificar tu mensaje.",
    href: rutas.contratoInfluencers,
    imagen: media.influencers.portada,
  },
];
