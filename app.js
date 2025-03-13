// crea array amigos
let amigos = [];

// crear funcion para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;

    // Validación
    if (inputAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Valor que no se repita
    if (amigos.includes(inputAmigo)) {
        alert(`El nombre ${inputAmigo} ya está en la lista`);
        return;
    }

    amigos.push(inputAmigo); // Agrega nombre al array amigos
    document.getElementById('amigo').value = ""; // Limpia el input
    actualizarLista();   
}

// crea funcion para crear lista de amigos


// crear una función para actualizar la lista de amigos


// crear funcion para sortea amigo