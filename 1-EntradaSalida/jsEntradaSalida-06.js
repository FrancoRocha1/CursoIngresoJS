/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var primerNumero;
var segundoNumero;
var resultado;

primerNumero = txtIdNumeroUno.value;
segundoNumero = txtIdNumeroDos.value;

primerNumero = parseInt(primerNumero);// Parseo
segundoNumero = parseInt(segundoNumero);



resultado = primerNumero + segundoNumero;

alert(" La suma de los numeros es: " + resultado);






	
}






// txtIdNumeroUno
// txtIdNumeroDos
// operadores + - * / %
// parseint permite convetir algo que esta entre "" a algo entero