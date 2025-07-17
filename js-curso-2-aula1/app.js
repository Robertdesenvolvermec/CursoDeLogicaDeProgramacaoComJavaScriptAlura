let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirNovaMensagem();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela(
      "p",
      `Você acertou!! Com ${tentativas} ${palavraTentativa}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "Você errou, o número é menor.");
    } else {
      exibirTextoNaTela("p", "Você errou, o número é maior.");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirNovaMensagem();
  document.getElementById("reiniciar").setAttribute("desabled", true);
}

function exibirNovaMensagem() {
  exibirTextoNaTela("h1", "JOGO DO NÚMERO SECRETO");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
