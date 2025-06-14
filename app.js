alert("Bem vindo ao jogo do número secreto");

let numeroSecreto = 4;
let chute;
let tentativas = 1;

// Enquanto
while (chute != numeroSecreto) {

    chute = prompt("Digite seu número entre 1 e 10");

    // Condicional
    if (chute == numeroSecreto) {
    
        alert(`Você acertou!! O número secreto é o ${numeroSecreto} e teve ${tentativas} tentativas.`);
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