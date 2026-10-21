import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

import { BotonWhatsAppFlotante } from "@/components/boton-whatsapp-flotante";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { organizacionJsonLd } from "@/lib/json-ld-organizacion";
import { urlDelSitio } from "@/lib/site-url";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tituloBase = `${site.agencia.nombre} | Agencia de marketing y contenido en Villavicencio`;

export const metadata: Metadata = {
  metadataBase: new URL(urlDelSitio),
  title: { default: tituloBase, template: `%s | ${site.agencia.nombre}` },
  description: site.agencia.descripcion,
  applicationName: site.agencia.nombre,
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.agencia.nombre,
    title: tituloBase,
    description: site.agencia.descripcion,
    images: [{ url: media.brand.ogDefault, width: 1200, height: 630, alt: site.agencia.nombre }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-acento px-4 py-2 text-fondo focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <JsonLd datos={organizacionJsonLd()} />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <BotonWhatsAppFlotante />
      </body>
    </html>
  );
}
