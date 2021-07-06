/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var	numeroDividendo
	var numeroDivisor
	var restoFinal

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);

	restoFinal = numeroDividendo%numeroDivisor;

	alert(" El resto es: " + restoFinal);







}




//txtIdNumeroDividendo
//txtIdNumeroDivisor