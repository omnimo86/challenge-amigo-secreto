// crea array amigos
let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

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

// crea funcion para crear lista de amigos la actualiza
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Borra contenido de la lista

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Crear función para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear, agrega un nombre");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}