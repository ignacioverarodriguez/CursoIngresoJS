/* AUTOR: Ignacio Vera Rodriguez
Enunciado: Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive


 */

function mostrar() {
	var random;
	var mensaje;
	
	random=parseInt(Math.random()*10+1);

	mensaje=random;

	alert(mensaje);
	

  }