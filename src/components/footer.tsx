import Link from "next/link";

import { IconoWhatsApp } from "@/components/boton-whatsapp";
import { Contenedor } from "@/components/contenedor";
import { Logo } from "@/components/logo";
import { rutas } from "@/content/rutas";
import { sectoresPrincipales } from "@/content/sectores";
import { instagramUrl, site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { mensajes } from "@/content/mensajes-whatsapp";

const enlaceClase = "enlace-subrayado text-gris transition-colors hover:text-texto";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-linea bg-superficie">
      <Contenedor className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-gris">{site.agencia.eslogan}</p>
          <p className="mt-6 text-sm text-gris">
            {site.ubicacion.ciudad}, {site.ubicacion.departamento}, {site.ubicacion.pais}.
            <br />
            Trabajamos para toda Colombia y de forma remota.
          </p>
        </div>

        <nav aria-label="Agencia">
          <h2 className="font-titulo text-sm tracking-widest text-texto uppercase">Agencia</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={rutas.agencia} className={enlaceClase}>
                Agencia de marketing en Villavicencio
              </Link>
            </li>
            <li>
              <Link href={rutas.planes} className={enlaceClase}>
                Planes mensuales
              </Link>
            </li>
            <li>
              <Link href={rutas.casos} className={enlaceClase}>
                Casos de éxito
              </Link>
            </li>
            <li>
              <Link href={rutas.nosotros} className={enlaceClase}>
                Nosotros
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Sectores">
          <h2 className="font-titulo text-sm tracking-widest text-texto uppercase">Sectores</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {sectoresPrincipales.map((sector) => (
              <li key={sector.slug}>
                <Link href={rutas.sector(sector.slug)} className={enlaceClase}>
                  {sector.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Influencers y contacto">
          <h2 className="font-titulo text-sm tracking-widest text-texto uppercase">
            Influencers y contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href={rutas.contratoInfluencers} className={enlaceClase}>
                Contrato de influencers
              </Link>
            </li>
            <li>
              <Link href={rutas.colaboraciones} className={enlaceClase}>
                Colaboraciones con {site.influencer.nombre}
              </Link>
            </li>
            <li>
              <Link href={rutas.mediaKit} className={enlaceClase}>
                Media Kit
              </Link>
            </li>
            <li>
              <a
                href={whatsappUrl(mensajes.general)}
                target="_blank"
                rel="noopener noreferrer"
                className={enlaceClase}
              >
                WhatsApp {site.influencer.whatsappVisible}
              </a>
            </li>
            <li>
              <a
                href={instagramUrl(site.influencer.instagram)}
                target="_blank"
                rel="noopener noreferrer"
                className={enlaceClase}
              >
                Instagram @{site.influencer.instagram}
              </a>
            </li>
          </ul>
        </nav>
      </Contenedor>

      <div className="border-t border-linea py-6">
        <Contenedor className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gris">
            Página web creada y desarrollada by{" "}
            <span className="font-semibold text-texto">{site.desarrollador.nombre}</span>
          </p>
          <a
            href={whatsappUrl(mensajes.desarrollador, site.desarrollador.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="boton inline-flex items-center gap-2 self-start rounded-full border border-linea px-4 py-2 text-xs font-semibold text-texto hover:border-acento hover:text-acento"
          >
            <IconoWhatsApp className="size-4" />
            ¿Quieres una web así? Escríbeme
          </a>
        </Contenedor>
      </div>
    </footer>
  );
}
