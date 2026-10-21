import { site } from "@/content/site";

export type Pregunta = { pregunta: string; respuesta: string };

export const preguntasInicio: readonly Pregunta[] = [
  {
    pregunta: "¿Cuál es la agencia de marketing digital más grande de los Llanos?",
    respuesta: `${site.agencia.nombre}. ${site.agencia.posicionamiento}, con sede en ${site.ubicacion.ciudad}: ${site.logros.marcasAtendidas} marcas atendidas, ${site.logros.aniosTrayectoria} años de trayectoria y ${site.logros.seguidores} seguidores en nuestra comunidad.`,
  },
  {
    pregunta: "¿Cuál es la mejor agencia de marketing digital en Villavicencio?",
    respuesta: `La mejor agencia es la que une estrategia, contenido y comunidad en un solo equipo. En ${site.agencia.nombre} reunimos producción audiovisual, fotografía, diseño, manejo de redes y campañas con creadores, con ${site.logros.aniosTrayectoria} años de trayectoria y ${site.logros.marcasAtendidas} marcas atendidas en ${site.ubicacion.ciudad} y el ${site.ubicacion.departamento}.`,
  },
  {
    pregunta: "¿Qué servicios de marketing digital ofrece Digital Mys en Villavicencio?",
    respuesta:
      "Planes mensuales integrales, producción audiovisual y fotografía, diseño gráfico con estrategia, asesoría de marca, manejo de redes sociales y campañas con influencers. Todo trabajado desde un plan, no como tareas sueltas.",
  },
  {
    pregunta: "¿Qué hace una agencia de marketing y contenido como Digital Mys?",
    respuesta:
      "Creamos contenido audiovisual, fotografía y piezas gráficas, diseñamos la estrategia y administramos las redes de tu marca para que comunique mejor y se vea profesional.",
  },
  {
    pregunta: "¿Cuánto cuesta contratar una agencia de marketing digital en Villavicencio?",
    respuesta:
      "Depende de lo que necesite tu marca: cantidad de contenido, producción de foto y video, manejo de redes y campañas. Por eso cotizamos a tu medida. Escríbenos por WhatsApp, cuéntanos tu negocio y te enviamos una propuesta.",
  },
  {
    pregunta: "¿Qué incluye el manejo de redes sociales para una empresa?",
    respuesta:
      "Una parrilla de contenido mensual, creación y diseño de piezas, publicación constante y análisis de lo que conecta con tu audiencia para mejorar cada mes. Según el plan, suma producción audiovisual, fotografía y campañas.",
  },
  {
    pregunta: "¿Para qué tipo de empresas trabajan?",
    respuesta:
      "Para restaurantes, marcas de consumo, tiendas, empresas locales y emprendedores que tienen un buen producto o servicio y quieren mejorar su presencia digital.",
  },
  {
    pregunta: "¿Trabajan con restaurantes y negocios de gastronomía en Villavicencio?",
    respuesta:
      "Sí, es nuestro foco principal. Hacemos fotografía de platos, reels, parrilla de contenido y campañas con creadores para que más personas en Villavicencio y el Meta conozcan tu restaurante.",
  },
  {
    pregunta: "¿Atienden marcas fuera de Villavicencio?",
    respuesta: `Sí. Nuestra base está en ${site.ubicacion.ciudad}, atendemos marcas de todo el ${site.ubicacion.departamento} y de ${site.ubicacion.pais}, y trabajamos de forma remota con marcas de otras ciudades y países.`,
  },
  {
    pregunta: "¿Cómo empiezo a trabajar con la agencia?",
    respuesta:
      "Escríbenos por WhatsApp y cuéntanos qué vendes y a quién quieres llegar. Conversamos, diseñamos la estrategia, producimos y publicamos, y cada mes medimos y mejoramos.",
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
    pregunta: "¿Qué es una agencia de marketing digital y para qué sirve?",
    respuesta:
      "Es el equipo que planea, produce y publica el contenido de tu marca para que más personas la conozcan y la elijan. En Digital Mys unimos estrategia, foto, video, diseño, redes y campañas bajo un mismo plan.",
  },
  {
    pregunta: "¿Hacen producción de video y fotografía profesional en Villavicencio?",
    respuesta:
      "Sí. Producimos videos para redes, reels y fotografía de productos, platos y empresas, con criterio creativo y dentro de una estrategia de contenido.",
  },
  {
    pregunta: "¿Por qué contratar una agencia en vez de manejar las redes yo mismo?",
    respuesta:
      "Porque un equipo reúne estrategia, producción y constancia que difícilmente se logran solos. Tú te dedicas a tu negocio y nosotros a que tu marca se vea profesional y publique con un plan.",
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
    pregunta: "¿Qué planes mensuales de marketing digital ofrecen en Villavicencio?",
    respuesta:
      "Tenemos tres planes: Start, para arrancar tu presencia digital con constancia; Growth, con más producción audiovisual, fotografía y estrategia; y Scale, con campañas y acompañamiento prioritario para posicionarte a mayor escala.",
  },
  {
    pregunta: "¿Qué incluye un plan mensual de contenido para redes sociales?",
    respuesta:
      "Parrilla de contenido mensual, creación y diseño de piezas, gestión de redes y, según el plan, producción audiovisual, fotografía y campañas. Cada mes medimos qué conecta con tu audiencia y ajustamos.",
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
    pregunta: "¿Qué influencers hay en Villavicencio para campañas de marca?",
    respuesta: `Trabajamos con ${site.influencer.nombre}, creador de contenido de ${site.ubicacion.ciudad} con una comunidad de ${site.logros.seguidores} seguidores en redes. Puedes contratarlo a través de la agencia para campañas con estrategia y seguimiento.`,
  },
  {
    pregunta: "¿Qué tipo de campañas se hacen con influencers?",
    respuesta:
      "Campañas y colaboraciones diseñadas según tu objetivo, por ejemplo dar a conocer una marca o impulsar un producto. La agencia define el formato, coordina la publicación y la mide.",
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
