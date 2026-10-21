import { BotonEnlace } from "@/components/boton-enlace";
import { EncabezadoPagina } from "@/components/encabezado-pagina";
import { rutas } from "@/content/rutas";

export default function NoEncontrada() {
  return (
    <EncabezadoPagina
      etiqueta="Error 404"
      titulo="Esta página no existe"
      texto="Puede que el enlace haya cambiado. Vuelve al inicio o revisa nuestros planes."
    >
      <BotonEnlace href={rutas.inicio} variante="primario">
        Ir al inicio
      </BotonEnlace>
      <BotonEnlace href={rutas.planes}>Ver planes</BotonEnlace>
    </EncabezadoPagina>
  );
}
