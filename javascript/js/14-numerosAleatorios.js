"use strict"

/* Generar números de forma aleatoria sin argumentos */
var numeroAleatorio1 = Math.random();
console.log("Numero Aleatorio 1: " + numeroAleatorio1);

/* Generar números Aleatorios del 0 al 9 */
var numeroAleatorio2 = Math.random() * 10;
console.log("Número aleatorio 2: " + numeroAleatorio2);

/* Generar números aleatorios del 0 al 9 sin decimales */
var numeroAleatorio3 = Math.random() * 10;
console.log("Número aleatorio 3: " + Math.round(numeroAleatorio3));

/* Generar números aleatorios del 0 al 99 sin decimales */
var numeroAleatorio4 = Math.random() * 100;
console.log("Número aleatorio 4: " + Math.round(numeroAleatorio4));
