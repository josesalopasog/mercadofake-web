/**
 * Transforma una fecha del formato "DD.MM.YY" al formato "D de [mes] del YYYY".
 * @param {string} fecha - La fecha en formato "DD.MM.YY".
 * @returns {string} - La fecha transformada al formato "D de [mes] del YYYY".
 */
export function formatDate(fecha) {
  // Definir los nombres de los meses
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  // Dividir la fecha en día, mes y año
  const [dia, mes, año] = fecha.split(".").map((num) => parseInt(num, 10));

  // Convertir el año al formato completo
  const añoCompleto = año;

  // Formatear la fecha
  return `${dia} de ${meses[mes - 1]} del ${añoCompleto}`;
}
