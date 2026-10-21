import { media } from "@/content/media";
import { instagramUrl, site } from "@/content/site";
import { urlDelSitio } from "@/lib/site-url";

const zonasDeServicio = [
  { "@type": "City", name: site.ubicacion.ciudad },
  { "@type": "AdministrativeArea", name: site.ubicacion.departamento },
  { "@type": "Country", name: site.ubicacion.pais },
];

function personaInfluencer(): Record<string, unknown> {
  return {
    "@type": "Person",
    name: site.influencer.nombre,
    jobTitle: "Creador de contenido digital",
    image: `${urlDelSitio}${media.equipo.influencer}`,
    sameAs: [instagramUrl(site.influencer.instagram)],
  };
}

/** Agencia como `ProfessionalService` con área de servicio Villavicencio, el Meta y Colombia. */
export function organizacionJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.agencia.nombre,
    url: urlDelSitio,
    description: site.agencia.descripcion,
    logo: `${urlDelSitio}${media.brand.logo}`,
    image: `${urlDelSitio}${media.brand.ogDefault}`,
    telephone: `+${site.influencer.whatsapp}`,
    areaServed: zonasDeServicio,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.ubicacion.ciudad,
      addressRegion: site.ubicacion.departamento,
      addressCountry: site.ubicacion.codigoPais,
    },
    knowsAbout: [
      "Agencia de marketing",
      "Contrato de influencers",
      "Creación de contenido",
      "Producción audiovisual",
      "Manejo de redes sociales",
    ],
    founder: [personaInfluencer(), { "@type": "Person", name: site.fundadora.nombre }],
  };
}

/** El influencer como `Person` independiente, para su página de colaboraciones. */
export function influencerJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    ...personaInfluencer(),
    worksFor: { "@type": "ProfessionalService", name: site.agencia.nombre, url: urlDelSitio },
  };
}
