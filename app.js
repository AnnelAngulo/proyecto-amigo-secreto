// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//-------Crear lista----------
let amigo = [];
//-------Función para agregar nombres de amigos ----------------------
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    // !-- si no se ingresa nombre de amigo 
    if (!nombreAmigo) {
        alert ("Debe ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    cargaAmigos();
    
}
//-----Función para cargar nombre de amigos de la matriz  -------------------
function cargaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML ="";
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}
//------- Función para sortear nombre de amigo -------------------
function sortearAmigo() {
    if (amigo.length === 0) {
        alert ("No hay Amigos para realizar el Sorteo");
        return;
    }
let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = ` El Amigo Sorteado es : ${amigoSorteado}`;
let limpiarLista = document.getElementById("listaAmigos");
limpiarLista.innerHTML = "";

}
