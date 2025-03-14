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
