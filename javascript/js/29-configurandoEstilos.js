"use strict"

function fuente_grande() {
    document.getElementById("parrafo-principal").style.fontWeight = "900";
    document.getElementById("parrafo-principal").style.color = "red";
}
function fuente_normal() {
    document.getElementById("parrafo-principal").style.fontWeight = "100";
    document.getElementById("parrafo-principal").style.color = "black";
}
function img_invisible() {
    document.getElementById("tren-suiza").style.visibility = "hidden";
}
function img_visible() {
    document.getElementById("tren-suiza").style.visibility = "visible";
}
function conf_margenes() {
    document.getElementById("img-kioto").style.margin = "20px";
}
function retornar_margenes() {
    document.getElementById("img-kioto").style.margin = 0;
}