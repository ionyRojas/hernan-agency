/**
 * Crea una imagen de relleno liviana para cada slot de `src/content/media.ts` que todavía no
 * tenga archivo. Nunca sobrescribe archivos existentes: cuando llega el material real, basta
 * con reemplazar el archivo y este script deja de tocarlo.
 *
 * Uso: pnpm placeholders
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

import { media } from "../src/content/media.ts";

const raiz = join(import.meta.dirname, "..", "public");

type Medidas = { ancho: number; alto: number };

function recolectarRutas(valor: unknown): string[] {
  if (typeof valor === "string") return valor.startsWith("/media/") ? [valor] : [];
  if (Array.isArray(valor)) return valor.flatMap(recolectarRutas);
  if (valor && typeof valor === "object") return Object.values(valor).flatMap(recolectarRutas);
  return [];
}

function medidasPara(ruta: string): Medidas {
  if (ruta.includes("/redes/")) return { ancho: 1080, alto: 1920 };
  if (ruta.includes("og-default")) return { ancho: 1200, alto: 630 };
  if (ruta.includes("/equipo/influencer") || ruta.includes("/equipo/fernanda")) {
    return { ancho: 1200, alto: 1500 };
  }
  if (ruta.includes("/hero/")) return { ancho: 1920, alto: 1080 };
  return { ancho: 1600, alto: 1000 };
}

function etiquetaPara(ruta: string): string {
  return ruta.replace("/media/", "").replace(/\.(jpg|svg)$/, "");
}

function crearSvgDeRelleno({ ancho, alto }: Medidas, etiqueta: string): string {
  const tamano = Math.round(Math.min(ancho, alto) / 22);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}" viewBox="0 0 ${ancho} ${alto}">
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16161c"/>
      <stop offset="1" stop-color="#241812"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#fondo)"/>
  <rect x="${tamano}" y="${tamano}" width="${ancho - tamano * 2}" height="${alto - tamano * 2}" fill="none" stroke="#ff5a1f" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="12 12"/>
  <text x="50%" y="48%" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${tamano}" fill="#9a9aa3">IMAGEN PENDIENTE</text>
  <text x="50%" y="56%" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(tamano * 0.8)}" fill="#f5f2ec">${etiqueta}</text>
</svg>`;
}

function crearLogoSvg(textoColor: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="64" viewBox="0 0 320 64" role="img" aria-label="Digital Mys">
  <circle cx="24" cy="32" r="12" fill="#ff5a1f"/>
  <text x="48" y="42" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="1" fill="${textoColor}">DIGITAL MYS</text>
</svg>`;
}

function asegurarCarpeta(archivo: string): void {
  mkdirSync(dirname(archivo), { recursive: true });
}

async function main(): Promise<void> {
  const rutas = recolectarRutas(media);
  let creados = 0;

  for (const ruta of rutas) {
    const archivo = join(raiz, ruta);
    if (existsSync(archivo)) continue;
    asegurarCarpeta(archivo);

    if (ruta.endsWith("/logo.svg")) {
      writeFileSync(archivo, crearLogoSvg("#f5f2ec"));
    } else if (ruta.endsWith("/logo-claro.svg")) {
      writeFileSync(archivo, crearLogoSvg("#0b0b0f"));
    } else {
      const svg = crearSvgDeRelleno(medidasPara(ruta), etiquetaPara(ruta));
      await sharp(Buffer.from(svg)).jpeg({ quality: 55, mozjpeg: true }).toFile(archivo);
    }
    creados += 1;
  }

  const carpetaClientes = join(raiz, "media", "clientes", ".gitkeep");
  if (!existsSync(carpetaClientes)) {
    asegurarCarpeta(carpetaClientes);
    writeFileSync(carpetaClientes, "");
  }

  console.log(`Placeholders creados: ${creados}. Slots totales: ${rutas.length}.`);
}

await main();
