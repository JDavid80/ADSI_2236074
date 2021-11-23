"use strict"

/* Forma 1 de declarar e inicializar arrays */
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

/* Forma 2 de declarar e inicilizar arrays */
var instructor = new Array(1, "CC", "12240356", "Wilson", "Martinez", "Calle 4 N. 3-25", "3154567892", "2021-11-23", true);

/* Forma 3 de declarar e inicializar arrays */
var titulados = [1, "2236074", "ADSI", "2021-01-24", "2022-07-05", "Sergio Jaramillo", true]; 

/* Mostrar los nombres y apellidos del aprendiz, del instructor y del líder del titulado */
console.log("Nombres del aprendiz: " + aprendiz[3] + " " + aprendiz[4]);
console.log("Nombres del instructor: " + instructor[3] + " " + instructor[4]);
console.log("Nombre del líder: " + titulados[5]);

/* Método Length */
/* Si la frase supera las 20 letras, informar al usuario */
var fraseUsuario = "Los aprendices de ADSI";
var cantCaracteresFrase = fraseUsuario.length;
if (cantCaracteresFrase > 20) {
    console.log("La frase supera los 20 carácteres.");
}














