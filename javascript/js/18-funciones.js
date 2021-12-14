"use strict"

/* Función sin parámetros y sin retorno */
function mostrarHora() {
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    var minutosActualStr = minutosActual.toString();

    if (horaActual > 12) {
        horaActual = horaActual - 12;
    }
    if (minutosActual < 10) {
        minutosActualStr = "0" + minutosActualStr;
    }
    alert("Hora Actual: " + horaActual + ":" + minutosActualStr);
}

/* Función con parámetros y sin retorno */
function saludo(strHtml) {
    alert(strHtml);
}
function presentacion(nombre, titulado) {
    alert("Mi nombre es: " + nombre + " del titulado " + titulado);
}

/* Funcion con retorno */
function validarDescuento(valorProducto) {
    var total = 0;
    /* Si la compra es igual o mayor a 10000 tiene descuento del 10%
    y si esta entre 5000 y 9999 tiene descuento del 5% */
    if(valorProducto >= 10000) {
        total = valorProducto * .9;
    }
    else if(valorProducto >= 5000 && valorProducto <= 9999) {
        total = valorProducto * .95;
    }
    return total;
}
function calcularDescuento(valorProducto) {
    alert("Costo total con descuento: " + validarDescuento(valorProducto));
}

