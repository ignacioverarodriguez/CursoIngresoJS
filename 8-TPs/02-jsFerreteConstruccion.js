/*
AUTOR: Ignacio Vera
Enunciado: TP2 Ferretería Construccion
/*
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var mensaje;
var alambre;
var perimetro;         


function Rectangulo () 
{
    var largo;
    var ancho;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perimetro=(largo*2) + (ancho*2);

    alambre=(perimetro)*3;
    mensaje=alambre;


    alert("La cantidad de alambre que se debe comprar es " + mensaje + " metros");

}

function Circulo () 
{
	var radio;

    radio=document.getElementById("txtIdRadio").value;
    radio=parseFloat(radio);

    perimetro=(2*3.14*radio);

    alambre=perimetro*3;
    
    mensaje=alambre;

    alert("La cantidad de alambre que se debe comprar es " + mensaje + " metros");

}

function Materiales () 
{
	
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo=document.getElementById("txtIdLargo").value;
    ancho=document.getElementById("txtIdAncho").value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    area=largo*ancho;

    cal=area*3;
    cemento=area*2;
    
    mensaje= "Usted necesita " + cal + " bolsas de cal " + "y " + cemento + " bolsas de cemento.";

    alert(mensaje);


}