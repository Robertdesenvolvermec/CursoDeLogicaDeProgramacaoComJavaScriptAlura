let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log("O botão foi clicado");


    console.log(chute == numeroSecreto);
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}
