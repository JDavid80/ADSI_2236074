"use strict"

function validarInfo(numeroDocumento) {
    let numDocumento = document.getElementById(numeroDocumento).value;

    if (numDocumento === "") {
        alert("El número del documento es un dato obligatorio!");
    }
    else {
        alert("La información ha sido enviada con éxito!!")
    }
    
}