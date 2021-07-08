/*
AUTOR: Ignacio Vera

Enunciado:
Bienvenidos
Realizar el algoritmo que pida los datos
necesarios para un triángulo equilátero 
por prompt y que muestre el perímetro
por alert.
*/

function mostrar()
{

    var datoUser;

    var perimetro;

    datoUser=prompt("ingrese los datos para calcular el perímetro");

    datoUser=parseFloat(datoUser);    

    perimetro=(datoUser * 3);


    alert("el resultado es " + perimetro);


}
