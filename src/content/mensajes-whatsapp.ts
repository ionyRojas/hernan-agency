import { site } from "@/content/site";

/** Mensajes prellenados según la página, para saber de dónde viene cada conversación. */
export const mensajes = {
  general: `Hola, quiero información sobre ${site.agencia.nombre}.`,
  agencia: `Hola, quiero conocer cómo ${site.agencia.nombre} puede ayudar a mi marca.`,
  planes: `Hola, quiero conocer los planes mensuales de ${site.agencia.nombre}.`,
  plan: (nombrePlan: string) =>
    `Hola, quiero cotizar el plan ${nombrePlan} de ${site.agencia.nombre}.`,
  influencers: `Hola ${site.influencer.primerNombre}, quiero cotizar una campaña con influencers.`,
  mediaKit: "Hola, quiero solicitar el Media Kit.",
  nosotros: `Hola, vi su historia en ${site.agencia.nombre} y quiero conversar sobre mi marca.`,
  casos: `Hola, vi los casos de éxito de ${site.agencia.nombre} y quiero hablar sobre mi marca.`,
  desarrollador: `Hola ${site.desarrollador.primerNombre}, vengo de la web de ${site.agencia.nombre} y quiero contratar tus servicios de desarrollo de aplicaciones web y móviles.`,
  contacto: `Hola, quiero contarles sobre mi negocio y cotizar con ${site.agencia.nombre}.`,
} as const;
