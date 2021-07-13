/*
AUTOR: Ignacio Vera
Enunciado: TP3 Ferretería Pintura
/*
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/



function FahrenheitCentigrados () 
{
	
    var fahrenheit;
    var centigrados;

    fahrenheit=document.getElementById("txtIdTemperatura").value;
    
    fahrenheit=parseFloat(fahrenheit);

    centigrados=(fahrenheit-32)*0.556;

    mensaje=centigrados;

    alert(fahrenheit + " fahrenheit son " + centigrados + " centígrados");
}


function CentigradosFahrenheit () 
{

    
    var fahrenheit;
    var centigrados;

    centigrados=document.getElementById("txtIdTemperatura").value;
    
    centigrados=parseFloat(centigrados);

    fahrenheit=(centigrados*1.8)+32;

    mensaje=fahrenheit;

    alert(centigrados + " centigrados son " + fahrenheit + " fahrenheit");


}
