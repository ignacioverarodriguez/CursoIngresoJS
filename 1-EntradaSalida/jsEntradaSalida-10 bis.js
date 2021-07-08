/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {

	var importe;
	var porcentaje;
	var descuento;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	porcentaje = prompt("ingrese un porcentaje");
	descuento = (porcentaje * importe) / 100;

	document.getElementById("txtIdResultado").value = importe - descuento;

}
