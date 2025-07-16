let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

exibirTextoNaTela("h1", "JOGO DO NÚMERO SECRETO");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function verificarChute() {
<<<<<<< HEAD
    let chute = document.querySelector('input').value;
    console.log("O botão foi clicado");


    console.log(chute == numeroSecreto);
};
=======
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabéns!!");
    exibirTextoNaTela("p", "Você acertou!!");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "Você errou, o número é menor.");
    } else {
      exibirTextoNaTela("p", "Você errou, o número é maior.");
    }
  }
}
>>>>>>> 3623788806e314367e2b67bf109b64a21cb6aa20

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
