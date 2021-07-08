/*
AUTOR: Ignacio Vera
Enunciado: TP1 Ferretería Facturación
*/
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio1;
var precio2;
var precio3;
var mensaje;

function Sumar () 
{
    var suma;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    suma= (precio1 + precio2 + precio3);

    mensaje = suma;

    alert(mensaje);

}
function Promedio () 
{
    var media;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    media= (precio1 + precio2 + precio3)/3;

    mensaje = media;

    alert(mensaje);
}
function PrecioFinal () 
{
    var final;
    var iva;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    final= (precio1 + precio2 + precio3);

    iva= final * 0.21;

    mensaje = iva + final;

    alert(mensaje);
}