"use strict"

let parrafo = document.getElementsByTagName("p");

function cambiarParrafo() {
    parrafo[3].innerHTML = "Este texto es modificado desde Javascript";
    parrafo[3].style.color = "red";
    parrafo[3].style.fontSize = "1.6em";
}
function retornarParrafo() {
    parrafo[3].innerHTML = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque mollitia assumenda dolorem ratione nulla eos facere illum eaque numquam maiores. Est, obcaecati doloremque facilis, molestiae omnis quia laborum consequuntur, magnam libero ea enim mollitia hic?</p>";
    parrafo[3].style.color = "black";
    parrafo[3].style.fontSize = "1em";
}