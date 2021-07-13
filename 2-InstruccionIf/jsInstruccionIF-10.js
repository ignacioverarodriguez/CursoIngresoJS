/* AUTOR: Ignacio Vera Rodriguez
Enunciado: Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4


 */

function mostrar() {
  var random;

  random = parseInt(Math.random() * 10 + 1);

  if (random >= 9) {
    alert(random + " EXCELENTE");
  } else if (random >= 4) {
    alert(random + " APROBÓ");
  } else if (random < 4) {
    alert(random + " Vamos, la próxima se puede");
  }
}
