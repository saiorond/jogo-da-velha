const todasCelulas = document.querySelectorAll("[data-celula]");
const container = document.querySelector("[data-container]")

let marcadoCirculo;

const combinacoesVitoriosas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function iniciarJogo() {
    for (const celula of todasCelulas) {
        celula.addEventListener("click", jogando, { once: true});
    }

    marcadoCirculo = false;

    container.classList.add("x");
}

function checandoVencedor(jogadorAtual) {
    
}

function marcandoEspaco(celula, adicionandoClasse) {
    celula.classList.add(adicionandoClasse);
}

function mudandoSimbolo() {
    marcadoCirculo = !marcadoCirculo;

    container.classList.remove("circulo");
    container.classList.remove("x");

    if(marcadoCirculo) {
        container.classList.add("circulo");
    } else {
        container.classList.add("x");
    }
};

function jogando(e) {
    //colocar o X ou Bolinha
    const celula = e.target;
    const adicionandoClasse = marcadoCirculo ? "circulo" : "x";
 
    marcandoEspaco (celula, adicionandoClasse);
    //verificar por vitória
    //verificar por empate
    //mudar símbolo
    mudandoSimbolo();
}

iniciarJogo();