/** Convierte un texto en un id seguro para anclas: sin tildes, en minúsculas y con guiones. */
export function aId(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
