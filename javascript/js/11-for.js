"use strict"

/* Generando un conteo del 1 a l 10 */
for (var i = 1; i <= 10; i++) {
    console.log("Aprendiz N. " + i);
}

/* Generar un consecutivo..2 4 8 16 32 64 128 256 512 1024 */

/* Mostrar los elementos de un arreglo */
var aprendiz = new Array();
aprendiz[0] = 1;
aprendiz[1] = "CC";
aprendiz[2] = "1084330565";
aprendiz[3] = "Karol Xiomara";
aprendiz[4] = "Rojas";
aprendiz[5] = "Calle 10 N. 5-26";
aprendiz[6] = "3105689741";
aprendiz[7] = "2002-05-21";
aprendiz[8] = true;

var instructor = new Array(1, "CC", "12240356", "Wilson", "Martinez", "Calle 4 N. 3-25", "3154567892", "2021-11-23", true);

var titulados = [1, "2236074", "ADSI", "2021-01-24", "2022-07-05", "Sergio Jaramillo", true]; 

/* Mostrando los elementos de un arreglo */
for (var i = 0; i <= aprendiz.length -1; i++) {
    console.log(aprendiz[i]);
}

/* Mostrar todos los datos del instructor, 
exceptuando el id y la dirección... */

for (var i = 1; i <= instructor.length - 1; i++) {
    if (i === 5) {
        /* No hace nada el código (No muestra información al usuario) */
    }
    else {
        console.log(instructor[i]);
    }
}








