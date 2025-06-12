alert("Bem vindo ao jogo do número secreto");

let numeroSecreto = 5;
let chute = prompt("Digite seu número entre 1 e 30");

if( chute == numeroSecreto){
    alert("Você acertou!! O número secreto é o 5.");
    console.log('Você acertou!! O número secreto é o ' + numeroSecreto);
} else {
    alert("Você errou, tente novamente.");
    console.log('Usuário chutou número ' + chute);
};

//Nova linha