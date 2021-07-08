/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	var num1;
	var num2;
	var suma;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	suma= num1+ num2;
	mensaje = "El resultado es " + suma;

	alert(mensaje);


}

function restar()
{
	
	var num1;
	var num2;
	var resta;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resta= num1-num2;
	mensaje = "El resultado es " + resta;

	alert(mensaje);

}

function multiplicar()
{ 
	
	var num1;
	var num2;
	var multiplicacion;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion= num1*num2;
	mensaje = "El resultado es " + multiplicacion;

	alert(mensaje);

}

function dividir()
{
	var num1;
	var num2;
	var division;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	division= num1/num2;
	mensaje = "El resultado es " + division;

	alert(mensaje);
}

