/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

	var importe;
	var resultado;
	var importeFinal;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	porcentajeUser=prompt("Ingrese el porcentaje a aumentar");

	resultado = importe * ".25";
	importeFinal = importe - resultado;

	document.getElementById("txtIdResultado").value = importeFinal;

}
