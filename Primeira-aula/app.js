alert("Bem vindo ao jogo do número secreto");

let numeroDinamico = prompt(`Digite um número maior que 10 para começar o jogo.`);
let numeroSecreto = parseInt(Math.random() * numeroDinamico + 1);
let chute;
let tentativas = 1;


// Enquanto
while (chute != numeroSecreto) {

    chute = prompt(`Digite seu número entre 1 e ${numeroDinamico}`);
    console.log(numeroSecreto);

    // Condicional
    if (chute == numeroSecreto) {

        console.log(numeroSecreto);

    } else {

        if (chute < numeroSecreto) {
            alert(`Você errou, o número é maior que ${chute}`);
        } else {
            alert(`Você errou, o número é menor que ${chute}`);
        }

        // contabiliza quantas vezes o usuário tentou acertar o número secreto
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Você acertou!! O número secreto é o ${numeroSecreto} e teve ${tentativas} ${palavraTentativa}.`);