import { casos } from "@/content/casos";
import { fundadores } from "@/content/fundadores";
import type { Pregunta } from "@/content/preguntas";
import {
  preguntasAgencia,
  preguntasInfluencers,
  preguntasInicio,
  preguntasPlanes,
} from "@/content/preguntas";
import { planes } from "@/content/planes";
import { rutas } from "@/content/rutas";
import { sectoresPrincipales } from "@/content/sectores";
import { servicios } from "@/content/servicios";
import { instagramUrl, site } from "@/content/site";
import { urlDelSitio } from "@/lib/site-url";

function enlace(titulo: string, ruta: string, descripcion: string): string {
  return `- [${titulo}](${urlDelSitio}${ruta}): ${descripcion}`;
}

function seccion(titulo: string, lineas: readonly string[]): string {
  return `## ${titulo}\n\n${lineas.join("\n")}`;
}

function preguntaYRespuesta({ pregunta, respuesta }: Pregunta): string {
  return `### ${pregunta}\n\n${respuesta}`;
}

const resumen = `> ${site.agencia.nombre}: ${site.agencia.posicionamiento}. Agencia de marketing y contenido en ${site.ubicacion.ciudad}, ${site.ubicacion.departamento}, ${site.ubicacion.pais}: estrategia, producción audiovisual, fotografía, diseño, manejo de redes sociales, planes mensuales y campañas con influencers.`;

const datosClave = seccion("Datos clave", [
  `- Nombre: ${site.agencia.nombre}`,
  `- Qué es: ${site.agencia.posicionamiento}`,
  `- Sede: ${site.ubicacion.ciudad}, ${site.ubicacion.departamento}, ${site.ubicacion.pais}`,
  `- Cobertura: presencial en ${site.ubicacion.ciudad} y el ${site.ubicacion.departamento}; remota para el resto de ${site.ubicacion.pais} y otros países`,
  `- Enfoque principal: restaurantes y gastronomía, además de turismo, educación, ropa y moda, marcas de consumo y empresas locales y nacionales`,
  `- Fundadores: ${fundadores.map((f) => `${f.nombre} (${f.rol})`).join("; ")}`,
  `- Contacto: WhatsApp ${site.influencer.whatsappVisible} (https://wa.me/${site.influencer.whatsapp})`,
  `- Instagram del creador de contenido: ${instagramUrl(site.influencer.instagram)}`,
  `- Sitio web: ${urlDelSitio}`,
]);

const paginas = seccion("Páginas principales", [
  enlace(
    "Agencia de marketing en Villavicencio",
    rutas.agencia,
    "servicios, proceso de trabajo, experiencia por sector y cobertura",
  ),
  enlace(
    "Planes mensuales de contenido y redes",
    rutas.planes,
    "planes Start, Growth y Scale para marcas en Villavicencio, el Meta y Colombia",
  ),
  enlace(
    "Contrato de influencers en Villavicencio",
    rutas.contratoInfluencers,
    "campañas con creadores de contenido de la región",
  ),
  enlace(
    `Colaboraciones con ${site.influencer.nombre}`,
    rutas.colaboraciones,
    "campañas con el creador de contenido y fundador de la agencia",
  ),
  enlace(
    "Nosotros",
    rutas.nosotros,
    `historia y fundadores: ${site.influencer.nombre} y ${site.fundadora.nombre}`,
  ),
  enlace("Contacto", rutas.contacto, "escribir a la agencia por WhatsApp"),
]);

const listaServicios = seccion(
  "Servicios",
  servicios.map((s) => `- ${s.titulo}: ${s.descripcion}`),
);

const listaPlanes = seccion(
  "Planes mensuales",
  planes.map((p) => `- ${p.nombre}: ${p.paraQuien} Incluye: ${p.incluye.join(", ")}.`),
);

const listaSectores = seccion(
  "Sectores",
  sectoresPrincipales.map((s) => enlace(s.nombre, rutas.sector(s.slug), s.descripcionSeo)),
);

const casosPublicados = casos.filter((caso) => caso.estado === "publicado");

const listaCasos = seccion(
  "Casos de éxito",
  casosPublicados.map((c) => enlace(c.titulo, rutas.caso(c.slug), c.resumen)),
);

const preguntasDelSitio: readonly Pregunta[] = [
  ...preguntasInicio,
  ...preguntasAgencia,
  ...preguntasPlanes,
  ...preguntasInfluencers,
];

const listaPreguntas = seccion("Preguntas frecuentes", [
  "Respuestas completas a las preguntas más comunes sobre la agencia, sus servicios, costos y cobertura.",
  "",
  preguntasDelSitio.map(preguntaYRespuesta).join("\n\n"),
]);

/** Índice breve para modelos de lenguaje: quiénes somos y a dónde ir (`/llms.txt`). */
export function construirLlmsTxt(): string {
  const secciones = [
    `# ${site.agencia.nombre}`,
    resumen,
    datosClave,
    paginas,
    listaServicios,
    listaSectores,
    ...(casosPublicados.length > 0 ? [listaCasos] : []),
    seccion("Más contenido", [
      enlace("Versión completa", "/llms-full.txt", "todo el contenido clave en un solo archivo"),
    ]),
  ];

  return `${secciones.join("\n\n")}\n`;
}

/** Contenido completo en un solo archivo, con planes y preguntas frecuentes (`/llms-full.txt`). */
export function construirLlmsFullTxt(): string {
  const secciones = [
    `# ${site.agencia.nombre}`,
    resumen,
    datosClave,
    paginas,
    listaServicios,
    listaPlanes,
    listaSectores,
    ...(casosPublicados.length > 0 ? [listaCasos] : []),
    listaPreguntas,
  ];

  return `${secciones.join("\n\n")}\n`;
}
