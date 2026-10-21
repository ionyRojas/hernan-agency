import { site } from "@/content/site";

/**
 * Texto de filtro de cliente. Comunica proceso y compromiso, sin prometer resultados
 * inmediatos, para atraer marcas que piensan a largo plazo.
 */
export function BloqueFiltroCliente() {
  return (
    <aside className="rounded-3xl border border-linea bg-superficie p-8 sm:p-10">
      <h2 className="font-titulo text-2xl font-bold sm:text-3xl">
        Trabajamos con marcas que construyen a largo plazo
      </h2>
      <p className="mt-4 max-w-3xl text-gris">
        En {site.agencia.nombre} no prometemos resultados imposibles ni ventas inmediatas. El
        crecimiento digital depende del sector, la oferta, la audiencia, la inversión y la relación
        que tu marca construya con sus clientes. Nos comprometemos con contenido de calidad,
        estrategia profesional y mejora constante.
      </p>
      <p className="mt-4 max-w-3xl text-gris">
        Buscamos empresas que ven las redes como una herramienta de construcción de marca y de
        oportunidades, no como una fórmula mágica ni un gasto.
      </p>
    </aside>
  );
}
