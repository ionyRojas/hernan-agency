import { Contenedor } from "@/components/contenedor";
import { site } from "@/content/site";

const logros = [
  { valor: site.logros.seguidores, etiqueta: "seguidores en redes" },
  { valor: site.logros.marcasAtendidas, etiqueta: "marcas atendidas" },
  { valor: site.logros.aniosTrayectoria, etiqueta: "años de trayectoria" },
  { valor: site.logros.alcanceMensual, etiqueta: "de alcance mensual" },
] as const;

/** Franja de logros bajo el hero. Los valores se editan en `site.logros`. */
export function FranjaLogros() {
  return (
    <section aria-label="Logros de la agencia" className="border-y border-linea bg-superficie/60">
      <Contenedor>
        <dl className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
          {logros.map((logro) => (
            <div key={logro.etiqueta} className="px-4 text-center">
              <dd className="font-titulo text-4xl font-bold tracking-tight text-acento sm:text-5xl">
                {logro.valor}
              </dd>
              <dt className="mt-2 text-sm text-gris sm:text-base">{logro.etiqueta}</dt>
            </div>
          ))}
        </dl>
      </Contenedor>
    </section>
  );
}
