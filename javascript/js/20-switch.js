"use strict"

var nota = 9;
console.log("Resultado: ");
switch(nota) {
    case 10:
        console.log("Excelente!");
        break;
    case 9:
    case 8:
        console.log("Muy bueno");
        break;
    case 7:
    case 6:
        console.log("Bueno");
        break;
    case 5:
        console.log("Aceptable");
        break;
    case 4:
    case 3:
        console.log("Malo");
        break;
    case 2:
    case 1:
        console.log("Muy malo");
        break;
    default:
        console.log("por favor, ingrese una nota válida");
}

var ciudad = "Pitalito";

switch(ciudad) {
    case "Bogotá":
        console.log("2600 m.s.n.m.");
        break;
    case "Calí":
        console.log("1018 m.s.n.m.");
        break;
    case "Neiva":
        console.log("442 m.s.n.m.");
        break;
    case "Pitalito":
        console.log("1318 m.s.n.m.");
        break;
    default:
        console.log("Por favor, ingrese una ciudad válida");
}














