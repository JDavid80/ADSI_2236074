"use strict"

console.log("Operador AND...........&&");
console.log("Operador OR............||");
console.log("Operador de Negación...!=");

/* Operador AND */
var nameUser = "Pedro";
var passUser = "1234";
var nameBD = "Pedro";
var passBD = "12345";

if (nameUser === nameBD && passUser === passBD) {
    console.log("Bienvenido");
}
else {
    console.log("Usuario y/o contraseña incorrectos.");
}
console.log();
console.log();
/* Operador OR */
/* Si no hay fluido electrico o no hay transporte se suspende el evento */
var transporte = true;
var electricidad = false;
if (transporte === false || electricidad === false) {
    console.log("El evento ha sido suspendido");
}
else {
    console.log("El evento no ha sufrido modificaciones");
}

var estado = false;
if (estado != false) {
    console.log("Algoritmo ejecutado.");
}

