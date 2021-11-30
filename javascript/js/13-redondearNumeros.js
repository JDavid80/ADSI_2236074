"use strict"

/* Redondear de forma automática */
var valor1 = 2.3;
var valor1Redondeado = Math.round(valor1);
console.log("El valor 1 redondeado es: " + valor1Redondeado);

var valor2 = 2.6;
var valor2Redondeado = Math.round(valor2);
console.log("El valor 2 redondeado es: " + valor2Redondeado);

var valor3 = 2.5;
var valor3Redondeado = Math.round(valor3);
console.log("El valor 3 redondeado es: " + valor3Redondeado);

/* Controlar el redondeado */
var valor4 = 2.99;
var valor4Redondeado = Math.floor(valor4);
console.log("El valor 4 redondeado es: " + valor4Redondeado);

/* ceil */
var valor5 = 2.001;
var valor5Redondeado = Math.ceil(valor5);
console.log("El valor 5 redondeado es: " + valor5Redondeado);