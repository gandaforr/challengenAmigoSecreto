// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo_secreto = "";
let amigos = [];

function validarAmigo(nombre){
    if(nombre.trim() === ""){
        return 1;
    }

    for(var i=0; i<amigos.length; i++){
        if (amigos[i].trim().toLowerCase() == nombre.trim().toLowerCase()){
            return 0;
        }
    }
    return -1;
}

function agregarAmigoSecret(nombre){
    let validador = validarAmigo(nombre);
    if(validador == 0){
        alert("los nombres deben ser dieferentes");
    }
    else if(validador == 1){
        alert("los nombres no deben de estar vacios")
    }
    else{
        amigos.push(nombre);
    }
}

function actualizarListaDeAmigos(){
    //let listaAmigos = document.querySelector('#listaAmigos');
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for(var i = 0; i < amigos.length; i++){
        let integranteAmigo = document.createElement("li");
        integranteAmigo.textContent = amigos[i];
        listaAmigos.appendChild(integranteAmigo);
    }
}

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');
    agregarAmigoSecret(amigo.value);
    amigo.value = " ";
    actualizarListaDeAmigos();
}

function aleotorioMatriz(matriz){
    return matriz[Math.floor(Math.random() * matriz.length)];
    //return Math.floor(Math.random() * n) + 1;
}

function limpiar(){
    amigos = [];
    document.querySelector("#resultado").textContent = "";
    actualizarListaDeAmigos();
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Debes de introducir un amigo");
        return;
    }
    // elegir aleatoriamente un elemento de un array y 
    //darle ese valor a amigo secreto
    amigo_secreto = aleotorioMatriz(amigos);
  
    // actualizarlo en la pagina
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = amigo_secreto;
}