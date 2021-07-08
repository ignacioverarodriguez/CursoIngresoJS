/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentajeUser;
	var resultado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	porcentajeUser=prompt("Ingrese el porcentaje a aumentar");

	resultado= sueldo * porcentajeUser / 100;

	document.getElementById("txtIdResultado").value= resultado + sueldo;

}
