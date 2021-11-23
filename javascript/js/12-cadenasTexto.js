"use strict"

/* Cambiando todo a mayusculas con el método toUpperCase*/
var fraseAMayuscula = "eSta es Una PrUeba en JAvasCripT";  /* Camel Case */
fraseAMayuscula = fraseAMayuscula.toUpperCase();

console.log(fraseAMayuscula);

/* Cambiando todo a minusculas con el método toLowerCase */
var fraseAMinuscula = "eSta es Una PrUeba en JAvasCripT";  /* Camel Case */
fraseAMinuscula = fraseAMinuscula.toLowerCase();

console.log(fraseAMinuscula);

/*  Cambiar todo a minusculas y la primer letra de la frase mostrarla en mayuscula */
/* Método charAt(0) */
var frasePrimerMayuscula = "eSta es Una PrUeba en JAvasCripT";
var auxPrimLetra = "";
var auxLetrasRestantes = "";
var auxTotalLetrasRestantes = "";
for (var i = 0; i <= frasePrimerMayuscula.length - 1; i++) {
    
    if (i === 0) {
        auxPrimLetra = frasePrimerMayuscula.charAt(0);
        auxPrimLetra = auxPrimLetra.toUpperCase();
    }
    else {
        auxLetrasRestantes = frasePrimerMayuscula.charAt(i);
        auxLetrasRestantes = auxLetrasRestantes.toLowerCase();
        auxTotalLetrasRestantes = auxTotalLetrasRestantes + auxLetrasRestantes;
    }
    
}
console.log(auxPrimLetra + auxTotalLetrasRestantes);