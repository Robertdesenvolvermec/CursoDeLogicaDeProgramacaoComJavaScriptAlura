let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirTextoNaTela("h1", "JOGO DO NÚMERO SECRETO");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!!");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela("p", `Você acertou!! Com ${tentativas} ${palavraTentativa}"`);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "Você errou, o número é menor.");
    } else {
      exibirTextoNaTela("p", "Você errou, o número é maior.");
    }
    tentativas++
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
