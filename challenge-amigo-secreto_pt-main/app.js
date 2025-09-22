let amigos = [];

/**
 * Exibe uma mensagem na tela
 * @param {string} texto - Mensagem a ser exibida
 * @param {string} cor - Cor do texto
 */

function mostrarMensagem(texto, cor = "red") {
    const msg = document.getElementById("mensagem");
    msg.textContent = texto;
    msg.style.color = cor;

    setTimeout(() => msg.textContent = "", 5000);
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        mostrarMensagem("Por favor, insira um nome!");
        return;
    }

    // Verifica se o nome já está na lista (ignora maiúsculas/minúsculas)
    const nomeExiste = amigos.some(amg => amg.toLowerCase() === nome.toLowerCase());
    if (nomeExiste) {
        mostrarMensagem("Amigo já adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        mostrarMensagem("Adicione amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indiceSorteado,1)[0];

    const li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
    
    if (amigos.length === 0) {
        mostrarMensagem("Todos os amigos da lista já foram sorteados!");
        return;
    }

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
}
