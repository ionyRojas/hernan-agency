import type { SlugSectorMedia } from "@/content/media";
import type { Pregunta } from "@/content/preguntas";
import { rutas } from "@/content/rutas";

export type Sector = {
  slug: Extract<
    SlugSectorMedia,
    | "restaurantes-gastronomia"
    | "marcas-consumo"
    | "empresas-locales"
    | "ecommerce"
    | "hoteles-turismo"
  >;
  nombre: string;
  /** H1 con la palabra clave local. */
  titulo: string;
  descripcionSeo: string;
  intro: string;
  problemas: readonly string[];
  queHacemos: readonly { titulo: string; texto: string }[];
  mensajeWhatsApp: string;
  preguntas: readonly Pregunta[];
};

const preguntaCobertura: Pregunta = {
  pregunta: "¿Trabajan solo en Villavicencio?",
  respuesta:
    "Nuestra base está en Villavicencio y trabajamos con marcas del Meta y de toda Colombia. También podemos trabajar de forma remota con marcas de otros países.",
};

const preguntaTiempos: Pregunta = {
  pregunta: "¿Cuánto tardan en verse resultados?",
  respuesta:
    "Depende de tu punto de partida, tu oferta, tu audiencia y tu constancia. No prometemos ventas inmediatas: construimos presencia mes a mes, analizamos qué conecta y lo mejoramos.",
};

export const sectoresPrincipales: readonly Sector[] = [
  {
    slug: "restaurantes-gastronomia",
    nombre: "Restaurantes y gastronomía",
    titulo: "Marketing para restaurantes y gastronomía en Villavicencio",
    descripcionSeo:
      "Fotografía de platos, contenido audiovisual y manejo de redes para restaurantes y marcas gastronómicas en Villavicencio y el Meta. Estrategia constante, sin promesas mágicas.",
    intro:
      "La comida entra por los ojos. Convertimos tu cocina, tu ambiente y tu equipo en contenido que se antoja, para que más personas en Villavicencio y el Meta te conozcan y te recuerden.",
    problemas: [
      "Tienes una gran cocina, pero tus redes no lo muestran.",
      "Publicas cuando tienes tiempo y sin un plan.",
      "Tus fotos y videos no reflejan la calidad de lo que sirves.",
    ],
    queHacemos: [
      {
        titulo: "Fotografía de platos y producto",
        texto: "Imágenes con luz, estilo y detalle para que cada plato se vea como se sabe.",
      },
      {
        titulo: "Reels y contenido corto",
        texto: "Videos pensados para redes que muestran tu cocina, tu equipo y tu ambiente.",
      },
      {
        titulo: "Parrilla de contenido mensual",
        texto: "Un plan de publicaciones con sentido, no solo fechas llenas.",
      },
      {
        titulo: "Campañas con creadores",
        texto: "Alianzas con creadores de contenido para ampliar tu alcance en la región.",
      },
    ],
    mensajeWhatsApp: "Hola, tengo un restaurante y quiero conocer los planes.",
    preguntas: [
      {
        pregunta: "¿Cómo promocionar un restaurante en Villavicencio?",
        respuesta:
          "Con fotografía y reels que muestren tus platos y tu ambiente, una parrilla de contenido constante y alianzas con creadores de contenido de la región. Lo diseñamos según tu restaurante y tu público.",
      },
      preguntaCobertura,
      preguntaTiempos,
    ],
  },
  {
    slug: "marcas-consumo",
    nombre: "Marcas de consumo",
    titulo: "Marketing para marcas de consumo en Villavicencio y Colombia",
    descripcionSeo:
      "Contenido, fotografía de producto y estrategia de comunicación para marcas de consumo en Villavicencio, el Meta y toda Colombia.",
    intro:
      "Un buen producto necesita una marca que se vea y se sienta. Creamos contenido que explica por qué tu producto merece un lugar en la vida de tus clientes.",
    problemas: [
      "Tu producto es bueno, pero se ve igual que los demás.",
      "Tu marca no tiene una línea visual ni una voz propia.",
      "Cuesta explicar en redes por qué vale la pena elegirte.",
    ],
    queHacemos: [
      {
        titulo: "Fotografía de producto",
        texto: "Imágenes cuidadas que dan valor a tu producto en cualquier pantalla.",
      },
      {
        titulo: "Identidad de contenido",
        texto: "Una línea visual y una voz coherentes para que te reconozcan.",
      },
      {
        titulo: "Estrategia de comunicación",
        texto: "Mensajes claros para cada canal y cada etapa de tu marca.",
      },
      {
        titulo: "Campañas con influencers",
        texto: "Creadores que conectan tu producto con audiencias reales.",
      },
    ],
    mensajeWhatsApp: "Hola, tengo una marca de consumo y quiero conocer los planes.",
    preguntas: [
      {
        pregunta: "¿Hacen marketing para marcas de consumo en Villavicencio?",
        respuesta:
          "Sí. Creamos fotografía de producto, una identidad de contenido, estrategia de comunicación y campañas con influencers para marcas de consumo del Meta y de toda Colombia.",
      },
      preguntaCobertura,
      preguntaTiempos,
    ],
  },
  {
    slug: "empresas-locales",
    nombre: "Empresas locales",
    titulo: "Marketing para empresas locales en Villavicencio y el Meta",
    descripcionSeo:
      "Contenido profesional y manejo de redes para empresas locales y familiares de Villavicencio y el Meta que quieren profesionalizar su presencia digital.",
    intro:
      "Muchos te conocen en tu ciudad, pero poca gente te encuentra en internet. Profesionalizamos tu presencia digital para que tu empresa se vea tan sólida como es.",
    problemas: [
      "Todos te conocen en el barrio, pero casi nadie en redes.",
      "Tus publicaciones se ven improvisadas.",
      "No sabes qué contenido publicar ni con qué frecuencia.",
    ],
    queHacemos: [
      {
        titulo: "Manejo de redes con estrategia",
        texto: "Publicamos con un plan, un estilo y un objetivo claros.",
      },
      {
        titulo: "Producción de contenido",
        texto: "Fotos y videos hechos con criterio para mostrar tu empresa como es.",
      },
      {
        titulo: "Asesoría de marca",
        texto: "Te ayudamos a decidir cómo quieres que te vean y cómo comunicarlo.",
      },
    ],
    mensajeWhatsApp: "Hola, tengo una empresa local y quiero conocer los planes.",
    preguntas: [
      {
        pregunta: "¿Cómo mejorar las redes sociales de mi empresa en Villavicencio?",
        respuesta:
          "Empieza por un plan: definir qué comunicar, con qué estilo y con qué frecuencia. Nosotros lo armamos, producimos fotos y videos con criterio y publicamos con constancia para que tu empresa se vea tan sólida como es.",
      },
      preguntaCobertura,
      preguntaTiempos,
    ],
  },
  {
    slug: "ecommerce",
    nombre: "E-commerce",
    titulo: "Contenido y redes para e-commerce en Colombia",
    descripcionSeo:
      "Fotografía de producto, video corto y estrategia de contenido para tiendas online y e-commerce en Colombia, con base en Villavicencio.",
    intro:
      "En una tienda online, el contenido hace de vitrina y de vendedor. Creamos imágenes y videos que muestran tu producto y cuentan por qué comprarlo.",
    problemas: [
      "Tus fotos de catálogo se ven planas.",
      "Recibes visitas, pero la tienda no tiene identidad.",
      "Tu contenido muestra el producto, pero no cuenta una historia.",
    ],
    queHacemos: [
      {
        titulo: "Fotografía de catálogo y de estilo de vida",
        texto: "Imágenes limpias y otras con contexto para que el producto se imagine en uso.",
      },
      {
        titulo: "Video corto de producto",
        texto: "Piezas verticales para redes y para tu tienda.",
      },
      {
        titulo: "Contenido para campañas",
        texto: "Piezas listas para lanzamientos, temporadas y publicidad.",
      },
    ],
    mensajeWhatsApp: "Hola, tengo un e-commerce y quiero conocer los planes.",
    preguntas: [
      {
        pregunta: "¿Crean contenido para tiendas online y e-commerce en Colombia?",
        respuesta:
          "Sí. Hacemos fotografía de catálogo y de estilo de vida, video corto de producto y piezas para campañas, lanzamientos y temporadas, desde Villavicencio para toda Colombia.",
      },
      preguntaCobertura,
      preguntaTiempos,
    ],
  },
  {
    slug: "hoteles-turismo",
    nombre: "Hoteles y turismo",
    titulo: "Marketing para hoteles y turismo en el Meta y los Llanos",
    descripcionSeo:
      "Fotografía, contenido audiovisual y estrategia en redes para hoteles, agencias de viajes y experiencias turísticas del Meta, los Llanos y Colombia.",
    intro:
      "El turismo se vende con emoción. Mostramos tu destino, tu hotel o tu experiencia como la viviría tu próximo huésped.",
    problemas: [
      "Tu destino es increíble, pero en redes no se nota.",
      "Dependes de intermediarios para que te encuentren.",
      "Tu contenido muestra lugares, pero no cuenta experiencias.",
    ],
    queHacemos: [
      {
        titulo: "Fotografía y video de experiencias",
        texto: "Contenido que transmite cómo se siente estar ahí.",
      },
      {
        titulo: "Contenido de destino",
        texto: "Historias que ponen en el mapa tu hotel, tu ruta o tu región.",
      },
      {
        titulo: "Campañas con creadores",
        texto: "Colaboraciones con creadores para llegar a nuevos viajeros.",
      },
    ],
    mensajeWhatsApp: "Hola, tengo un negocio de turismo y quiero conocer los planes.",
    preguntas: [
      {
        pregunta: "¿Hacen marketing para hoteles y turismo en el Meta y los Llanos?",
        respuesta:
          "Sí. Producimos fotografía y video de experiencias, contenido de destino y campañas con creadores para hoteles, agencias de viajes y rutas turísticas del Meta y los Llanos.",
      },
      preguntaCobertura,
      preguntaTiempos,
    ],
  },
];

export type SectorDeExperiencia = {
  nombre: string;
  slugMedia: SlugSectorMedia;
  /** Solo los sectores con página propia tienen enlace. */
  href?: string;
};

/** Sectores donde la agencia tiene experiencia, incluidos los que no tienen página propia. */
export const sectoresDeExperiencia: readonly SectorDeExperiencia[] = [
  {
    nombre: "Gastronomía y restaurantes",
    slugMedia: "restaurantes-gastronomia",
    href: rutas.sector("restaurantes-gastronomia"),
  },
  {
    nombre: "Turismo",
    slugMedia: "hoteles-turismo",
    href: rutas.sector("hoteles-turismo"),
  },
  { nombre: "Educación", slugMedia: "educacion" },
  { nombre: "Ropa y moda", slugMedia: "ropa" },
  {
    nombre: "Marcas de consumo",
    slugMedia: "marcas-consumo",
    href: rutas.sector("marcas-consumo"),
  },
  { nombre: "Empresas nacionales", slugMedia: "empresas-nacionales" },
  {
    nombre: "Empresas locales",
    slugMedia: "empresas-locales",
    href: rutas.sector("empresas-locales"),
  },
];
