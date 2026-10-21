import { construirLlmsTxt } from "@/lib/llms-txt";

/** Índice para modelos de lenguaje (estándar llms.txt). Se genera en el build. */
export function GET() {
  return new Response(construirLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
