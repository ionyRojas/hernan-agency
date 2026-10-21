import { site } from "@/content/site";

export type Pregunta = { pregunta: string; respuesta: string };

export const preguntasInicio: readonly Pregunta[] = [
  {
    pregunta: "¿Qué hace una agencia de marketing y contenido como Digital Mys?",
    respuesta:
      "Creamos contenido audiovisual, fotografía y piezas gráficas, diseñamos la estrategia y administramos las redes de tu marca para que comunique mejor y se vea profesional.",
  },
  {
    pregunta: "¿Para qué tipo de empresas trabajan?",
    respuesta:
      "Para restaurantes, marcas de consumo, tiendas, empresas locales y emprendedores que tienen un buen producto o servicio y quieren mejorar su presencia digital.",
  },
  {
    pregunta: "¿Garantizan ventas o resultados inmediatos?",
    respuesta:
      "No. El crecimiento digital depende del sector, la oferta, la audiencia, la inversión y la relación de tu marca con sus clientes. Nos comprometemos con contenido de calidad, estrategia profesional y mejora constante.",
  },
];

export const preguntasAgencia: readonly Pregunta[] = [
  {
    pregunta: "¿Dónde está la agencia y a quién atiende?",
    respuesta: `Estamos en ${site.ubicacion.ciudad}, ${site.ubicacion.departamento}. Atendemos marcas del Meta y de toda ${site.ubicacion.pais}, y también trabajamos de forma remota con marcas de otros países.`,
  },
  {
    pregunta: "¿Solo manejan redes sociales?",
    respuesta:
      "No. Vendemos soluciones completas: estrategia, producción audiovisual, fotografía, diseño, gestión de redes y campañas. No trabajamos tareas aisladas sin plan.",
  },
  {
    pregunta: "¿Cuánto tiempo dura un proceso de trabajo?",
    respuesta:
      "Construir presencia digital toma tiempo y constancia. Por eso trabajamos con planes mensuales y buscamos marcas que quieran un proceso continuo de mejora.",
  },
];

export const preguntasPlanes: readonly Pregunta[] = [
  {
    pregunta: "¿Cuánto cuesta un plan mensual?",
    respuesta:
      "Depende de lo que tu marca necesite. Escríbenos por WhatsApp, cuéntanos tu negocio y te enviamos una propuesta a tu medida.",
  },
  {
    pregunta: "¿Puedo contratar solo diseño o solo fotografía?",
    respuesta:
      "Nuestro enfoque son los planes integrales, porque el contenido funciona mejor cuando hay estrategia detrás. Cuéntanos tu caso y vemos la mejor opción.",
  },
  {
    pregunta: "¿Incluye influencers?",
    respuesta:
      "No. Las campañas con influencers se cotizan aparte, porque dependen del objetivo y del alcance que busques.",
  },
];

export const preguntasInfluencers: readonly Pregunta[] = [
  {
    pregunta: "¿Cómo contrato un influencer en Villavicencio?",
    respuesta: `Escríbenos por WhatsApp y cuéntanos tu objetivo. Diseñamos la campaña, definimos el formato y coordinamos la publicación con ${site.influencer.nombre}.`,
  },
  {
    pregunta: "¿Cuánto cuesta una campaña con influencers?",
    respuesta:
      "Se cotiza según el objetivo, los formatos y el alcance. Por eso la cotización se hace por WhatsApp, después de conocer la necesidad de tu marca.",
  },
  {
    pregunta: "¿Puedo contratar a la agencia y al influencer?",
    respuesta:
      "Sí, según tu objetivo. La agencia se encarga de estrategia, contenido y crecimiento digital; el influencer, de campañas, presencia y alcance. También hay un paquete integrado.",
  },
];

export const preguntasNosotros: readonly Pregunta[] = [
  {
    pregunta: "¿Quién está detrás de Digital Mys?",
    respuesta: `${site.influencer.nombre}, creador de contenido, y ${site.fundadora.nombre}, directora administrativa y de gestión empresarial. Juntos combinan creatividad, conocimiento de audiencias y estructura empresarial.`,
  },
];
