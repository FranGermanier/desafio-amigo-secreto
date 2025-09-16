// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja(valor) {
    document.querySelector(valor).value = '';
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    let repite = listaNombres.includes(nombreAmigo);
    console.log(repite);
    if (nombreAmigo !== '' && !repite) {
        listaNombres.push(nombreAmigo);
        console.log(listaNombres);
        asignarTextoElemento('listaAmigos', listaNombres.join(', '));
        limpiarCaja('#amigo');
    } else if (repite)  {
        alert('El nombre ya fue agregado');
        limpiarCaja('#amigo');
    } else {
        alert('Debe ingresar un nombre');
    }
}

function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert('Debe ingresar al menos dos amigos para sortear');
    } else {
        let numeroAleatorio = Math.floor(Math.random()*listaNombres.length);
        let amigoSeleccionado = listaNombres[numeroAleatorio];
        asignarTextoElemento('resultado', `El amigo seleccionado es: ${amigoSeleccionado}`);
    }
    return;
}