import { construirLlmsFullTxt } from "@/lib/llms-txt";

/** Versión completa de llms.txt: planes, sectores y preguntas frecuentes en un solo archivo. */
export function GET() {
  return new Response(construirLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
