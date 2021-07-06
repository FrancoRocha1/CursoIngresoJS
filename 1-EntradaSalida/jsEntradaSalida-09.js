/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var importeSueldo;
 var resultado; 
 var aumento;


 importeSueldo = txtIdSueldo.value;
importeSueldo = parseFloat(importeSueldo);		

//resultado = importeSueldo * 1.1;

  aumento = importeSueldo * 10/100;

  resultado = importeSueldo + aumento;


  txtIdResultado.value = resultado.toFixed(2);




 



}





// txtIdSueldo-> entrada
//txtIdResultado-> salida

/*
Que entra?
    El importe del sueldo
Que se procesa?
   Sumar al sueldo el 10%
Que sale?
  El importe con el aumento del 10%

Parseint -> NUMERO ENTERO
Parsefloat-> NUMERO CON COMA


*/