import { pasosDeProceso } from "@/content/proceso";

export function PasosProceso() {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {pasosDeProceso.map((paso, indice) => (
        <li
          key={paso.titulo}
          className="tarjeta-viva revelar rounded-3xl border border-linea bg-superficie p-6"
        >
          <span className="font-titulo text-4xl font-bold text-acento">
            {String(indice + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 font-titulo text-xl font-semibold">{paso.titulo}</h3>
          <p className="mt-2 text-gris">{paso.texto}</p>
        </li>
      ))}
    </ol>
  );
}
