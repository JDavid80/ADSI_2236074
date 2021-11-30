"use strict"

/* Convertir de forma implicita */
var num1 = "12";
var num2 = 4;

console.log("El resultado de la suma es: " + (num2 + num1));
console.log("El resultado de la resta es: " + (num2 - num1));
console.log("El resultado de la multiplicación es: " + (num2 * num1));
console.log("El resultado de la división es: " + (num2 / num1));

/* Convertir de forma explicita */
var num1Int = parseInt(num1);
console.log("El resultado de la suma es: " + (num2 + num1Int));

/* Convertir a String */
var num3 = 12;
var num4 = 12;
var num3Str = num3.toString();
var num4str = num4.toString();
console.log("El resultado de la suma es: " + (num3 + num4));
console.log("El resultado de la concatenación es: " + num3Str + num4str);















