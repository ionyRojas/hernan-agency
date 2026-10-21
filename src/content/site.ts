/**
 * Datos que se repiten en toda la web. Ningún componente escribe estos valores a mano:
 * todos los leen de aquí. Para cambiar el nombre del influencer, el WhatsApp o la
 * ubicación, se edita este archivo.
 */
export const site = {
  agencia: {
    nombre: "Digital Mys",
    eslogan: "Transformamos empresas en marcas visibles.",
    descripcion:
      "Agencia creativa y de contenido en Villavicencio. Creamos contenido estratégico y de calidad que conecta con personas y genera oportunidades de crecimiento.",
  },
  influencer: {
    nombre: "Hernancho Castillo",
    primerNombre: "Hernancho",
    instagram: "hernanchocastillo",
    whatsapp: "573058135513",
    whatsappVisible: "+57 305 813 5513",
  },
  /** Quien desarrolló la web. Aparece en el footer con un enlace a su WhatsApp. */
  desarrollador: {
    nombre: "Jonathan Rojas",
    primerNombre: "Jonathan",
    whatsapp: "573125423506",
  },
  fundadora: {
    nombre: "Fernanda",
  },
  ubicacion: {
    ciudad: "Villavicencio",
    departamento: "Meta",
    pais: "Colombia",
    codigoPais: "CO",
  },
} as const;

export function instagramUrl(usuario: string): string {
  return `https://www.instagram.com/${usuario}/`;
}
