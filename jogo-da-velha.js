const todasCelulas = document.querySelectorAll("[data-celula]");

for (const celula of todasCelulas) {
    celula.addEventListener("click", jogando, { once: true});
}

function jogando() {
    //colocar o X ou Bolinha
    //verificar por vitória
    //verificar por empate
    //mudar símbolo
}