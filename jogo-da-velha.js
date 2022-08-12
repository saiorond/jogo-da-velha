const todasCelulas = document.querySelectorAll("[data-celula]");
const container = document.querySelector("[data-container]")

let marcadoCirculo = false;

function marcandoEspaco(celula, adicionandoClasse) {
    celula.classList.add(adicionandoClasse);
}

function mudandoSimbolo() {
    marcadoCirculo = !marcadoCirculo
}

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

for (const celula of todasCelulas) {
    celula.addEventListener("click", jogando, { once: true});
}