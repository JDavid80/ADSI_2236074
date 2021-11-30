/* "use strict" */

console.log("===Fecha y Hora del GMT===");
var timeGMT = new Date();
console.log("La fecha y la hora actual es: " + timeGMT);

/* Obtener el día actual de la semana */
var fechaActual = new Date();
var diaSemanaInt = fechaActual.getDay();

var diasSemanaStr = ["Domingo", "Lunes", "Martes", "Miercoles", 
                     "Jueves", "Viernes", "Sabado"]
console.log("Dia de la semana: " + diasSemanaStr[diaSemanaInt]);

/* Metodos de fechas */
/* Obtener hora, día, mes y año actual */
var fechaCompleta = fechaActual.getDate() + "/" + (fechaActual.getMonth() + 1) + "/" + 
                    fechaActual.getFullYear();
console.log("Fecha Actual: " + fechaCompleta);
var horaActual = fechaActual.getHours() + ":" + fechaActual.getMinutes() + ":" +
           fechaActual.getSeconds();
console.log("Hora Actual: " + horaActual);

/* Establecer días de diferencia */
var newYear = new Date("January 1, 2022");
console.log(newYear.getTime());

var msCurrent = fechaActual.getTime();
console.log(msCurrent);

var diffMS = newYear.getTime() - fechaActual.getTime();
var diasDiff = diffMS / (1000 * 60 * 60 * 24);
console.log(diasDiff);














