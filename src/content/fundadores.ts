import { media } from "@/content/media";
import { site } from "@/content/site";

export type Fundador = {
  nombre: string;
  rol: string;
  descripcion: string;
  imagen: string;
};

export const fundadores: readonly Fundador[] = [
  {
    nombre: site.influencer.nombre,
    rol: "Cofundador · Creación de contenido y comunidad",
    descripcion:
      "Creador de contenido con experiencia en comunicación digital y construcción de comunidades. Aporta creatividad y conocimiento real de las audiencias.",
    imagen: media.equipo.influencer,
  },
  {
    nombre: site.fundadora.nombre,
    rol: "Cofundadora · Dirección administrativa y gestión empresarial",
    descripcion:
      "Lidera la estructura administrativa, la organización y la visión empresarial de la agencia, para que cada proyecto se gestione con orden y compromiso.",
    imagen: media.equipo.fernanda,
  },
];

export const historiaDeLaAgencia = `${site.agencia.nombre} fue fundada por ${site.influencer.nombre}, creador de contenido con experiencia en comunicación digital y construcción de comunidades, y ${site.fundadora.nombre}, encargada de la dirección administrativa y la gestión empresarial. Unieron sus conocimientos, habilidades y experiencias para crear una solución integral para las marcas que buscan crecer en el mundo digital.`;

export const historiaDeLaCombinacion =
  "La agencia nace de combinar la creatividad, el conocimiento de audiencias y la creación de contenido, con la estructura administrativa, la organización y la visión empresarial. Así entendemos tanto la parte creativa como las necesidades reales de los negocios.";
