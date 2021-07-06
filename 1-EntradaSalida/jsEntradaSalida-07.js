/* Franco Rocha Div D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

var primerNumero
var segundoNumero
var resultado

primerNumero = txtIdNumeroUno.value;
segundoNumero = txtIdNumeroDos.value;

primerNumero = parseInt(primerNumero);
segundoNumero = parseInt(segundoNumero);

resultado = primerNumero + segundoNumero;

alert(" La suma de su numer es: " + resultado);

}

function restar()
{
var	primerNumero
var	segundoNumero
var resultado

primerNumero = txtIdNumeroUno.value;
segundoNumero = txtIdNumeroDos.value;

primerNumero = parseInt(primerNumero);
segundoNumero = parseInt(segundoNumero);

resultado = primerNumero - segundoNumero;

alert(" Su resta es: " + resultado);

}

function multiplicar()
{ 
	var	primerNumero
	var	segundoNumero
	var resultado

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero * segundoNumero;

	alert(" Su multiplicacion es: " + resultado);
	
}

function dividir()
{
	var	primerNumero
	var segundoNumero
	var resultado

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero / segundoNumero;

	alert(" Su divsion es: " + resultado);




}



//txtIdNumeroUno
//txtIdNumeroDos
