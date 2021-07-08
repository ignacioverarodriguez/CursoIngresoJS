/*
AUTOR: Ignacio Vera

Enunciado:
Bienvenidos
Pedir por prompt el precio y el porcentaje de
descuento, mostrar el precio final con descuento
por id.
*/


function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;
    var descuento;

    precio=prompt("Ingrese el precio")
    precio=parseFloat(precio);

    porcentaje=prompt("Ingrese el porcentaje de descuento");

    descuento=precio * porcentaje/100;
    precioFinal=precio - descuento;

    document.getElementById("elPrecioFinal").value=precioFinal;

}
