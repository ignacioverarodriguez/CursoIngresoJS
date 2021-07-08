/*
AUTOR: Ignacio Vera

Enunciado:
Bienvenidos
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, 
que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{
  
    var nombre1;
    var peso1;
    var nombre2;
    var peso2;
    var nombres;
    var pesos;
    var pesosTotal;


    nombre1=prompt("Persona1: Ingrese su nombre");
    peso1=prompt("Persona 1: Ingrese su peso");

    nombre2=prompt("Persona 2: Ingrese su nombre");
    peso2=prompt("Persona 2: Ingrese su peso");

    peso1=parseFloat(peso1);  
    peso2=parseFloat(peso2);

    nombres=nombre1 + " y " + nombre2;

    pesos=peso1 + " y " + peso2;
    pesosTotal=peso1 + peso2;


    alert("Ustedes se llaman " + nombres + ", pensan " + pesos + " que sumados son " + pesosTotal);






}
