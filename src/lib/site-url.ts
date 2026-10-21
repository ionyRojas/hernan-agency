/**
 * URL pública del sitio. Se valida al arrancar: si la variable de entorno no es una URL
 * válida, el build falla en lugar de publicar canonicals rotos.
 */
function resolverUrlDelSitio(): string {
  const configurada = process.env.NEXT_PUBLIC_SITE_URL;
  const produccionVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (configurada) return new URL(configurada).origin;
  if (produccionVercel) return new URL(`https://${produccionVercel}`).origin;
  return "http://localhost:3000";
}

export const urlDelSitio = resolverUrlDelSitio();
