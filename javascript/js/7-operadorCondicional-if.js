"use strict"

/* Operador Condicional sencillo if */
var passBD = "1234";
var passUser = 1234;

if (passBD == passUser) {
    console.log("Bienvenido!!");
}
else {
    console.log("Acceso denegado.");
}

/* Condicional con operador 'Estrictamente igual' */
if (passBD === passUser) {
    console.log("Bienvenido!!");
}
else {
    console.log("Acceso denegado.");
}

/* Condicional anidado */
/* Tiendas Metro tiene descuento del 5% en Cerveza.
Si la compra es igual o superior a $20000 en cervezas tiene un 5% de descuento adicional.
Declarar 2 variables e inicializarlas y determinar el valor final de cada una */

var arroz_roaxlb = 2000;
var cerveza_coronaxund = 5000;

var productoCliente = "cerveza";
var cantidadUnidadesCliente = 4;
var costoProductoCliente = 0;

if (productoCliente === "cerveza_coronaxund") {
    var costoCerveza = cerveza_coronaxund * cantidadUnidadesCliente;
    cerveza_coronaxund = cerveza_coronaxund * .95;
    var auxCostoSinDescuento2 = cantidadUnidadesCliente * cerveza_coronaxund;
    if (costoCerveza >= 20000) {
        cerveza_coronaxund = cerveza_coronaxund * .95;
    }
    console.log("Costo Total: " + cerveza_coronaxund * cantidadUnidadesCliente);
}
else if(productoCliente === "arroz_roaxlb") {
        console.log("Costo Total: " + cantidadUnidadesCliente * arroz_roaxlb);
}
else {
    console.log("Seleccione un producto válido");
}

















