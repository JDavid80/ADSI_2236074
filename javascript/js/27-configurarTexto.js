"use strict"

function expandirTexto() {
    let textoCompleto = "<p>Esta semana, hace cuatro años, el cohete operativo más poderoso del mundo, el Falcon Heavy de SpaceX, hizo su lanzamiento inaugural desde Florida y se lanzó al espacio exterior transportando nada más que el Tesla roadster personal de Elon Musk. <br>" + 

    'El auto deportivo rojo cereza, que está ocupado por un maniquí vestido con un traje espacial apodado "Starman", todavía está afuera, tomando un camino orbital oblongo y solitario alrededor del Sol, viajando tan lejos como la órbita de Marte y, en otros momentos, tan cerca como la órbita de la Tierra. <br>' + 
    
    'El auto no está en un viaje científico. Este fue un lanzamiento de prueba, por lo que SpaceX necesitaba una carga útil ficticia, y Musk dijo anteriormente que quería que fuera "la cosa más tonta que podamos imaginar". Así que eligió su propio lujoso roadster Tesla. <br>' + 
    
    "A partir de este lunes, el roadster estaba a unos 234 millones de kilómetros de la Tierra y a unos 321 millones de kilómetros de Marte, atravesando una tierra de nadie en el espacio exterior, según el sitio web de seguimiento whereisroadster.com, que utiliza datos de la NASA para controlar el auto. " + 
    "<a href='javascript:void(0)' onclick='acortarTexto();'><br>Click aquí para continuar...</a><p>"

    document.getElementById("long-text").innerHTML = textoCompleto;
}
function acortarTexto() {
    let textoCorto = "<p id='long-text'> " + 
    "Esta semana, hace cuatro años, el cohete operativo más poderoso del mundo, el Falcon Heavy de SpaceX, hizo su lanzamiento inaugural desde Florida. " + 
    "<a href='javascript:void(0)' onclick='expandirTexto();'><br>Click aquí para continuar...</a> " + "</p>";

    document.getElementById("long-text").innerHTML = textoCorto;
}