/**
 * Verifica la carpeta de medios:
 *  - Cada ruta de `src/content/media.ts` existe en `public/`.
 *  - Los nombres están en minúsculas y sin espacios.
 *  - No hay videos en `public/` (la web usa solo imágenes).
 *  - Avisa si una imagen supera el peso recomendado.
 *
 * Uso: pnpm check-media
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

import { media } from "../src/content/media.ts";

const raiz = join(import.meta.dirname, "..", "public");
const pesoRecomendadoBytes = 300 * 1024;
const extensionesDeVideo = [".mp4", ".mov", ".webm", ".m4v", ".avi", ".mkv"];

function recolectarRutas(valor: unknown): string[] {
  if (typeof valor === "string") return valor.startsWith("/media/") ? [valor] : [];
  if (Array.isArray(valor)) return valor.flatMap(recolectarRutas);
  if (valor && typeof valor === "object") return Object.values(valor).flatMap(recolectarRutas);
  return [];
}

function listarArchivos(carpeta: string): string[] {
  return readdirSync(carpeta, { withFileTypes: true }).flatMap((entrada) => {
    const ruta = join(carpeta, entrada.name);
    return entrada.isDirectory() ? listarArchivos(ruta) : [ruta];
  });
}

function tieneNombreInvalido(ruta: string): boolean {
  return /\s/.test(ruta) || ruta !== ruta.toLowerCase() || /[^\x00-\x7f]/.test(ruta);
}

const errores: string[] = [];
const avisos: string[] = [];

for (const ruta of recolectarRutas(media)) {
  if (tieneNombreInvalido(ruta)) {
    errores.push(`Nombre inválido (usa minúsculas, sin espacios ni tildes): ${ruta}`);
  }
  if (!existsSync(join(raiz, ruta))) {
    errores.push(`Falta el archivo: public${ruta}`);
  }
}

const archivosDeMedia = listarArchivos(raiz).filter((archivo) => !archivo.endsWith("README.md"));

for (const archivo of archivosDeMedia) {
  const relativa = relative(raiz, archivo);
  const minuscula = archivo.toLowerCase();

  if (extensionesDeVideo.some((extension) => minuscula.endsWith(extension))) {
    errores.push(`No se permiten videos (usa un enlace a Instagram o TikTok): public/${relativa}`);
    continue;
  }

  if (tieneNombreInvalido(relativa)) {
    errores.push(`Nombre inválido (usa minúsculas, sin espacios ni tildes): public/${relativa}`);
  }

  const esImagen = /\.(jpe?g|png|webp|avif)$/.test(minuscula);
  if (esImagen && statSync(archivo).size > pesoRecomendadoBytes) {
    const kilobytes = Math.round(statSync(archivo).size / 1024);
    avisos.push(`Pesa ${kilobytes} KB (recomendado hasta 300 KB): public/${relativa}`);
  }
}

for (const aviso of avisos) console.warn(`AVISO  ${aviso}`);
for (const error of errores) console.error(`ERROR  ${error}`);

if (errores.length > 0) {
  console.error(`\ncheck-media: ${errores.length} error(es).`);
  process.exit(1);
}

console.log(`check-media: todo en orden (${avisos.length} aviso(s)).`);
