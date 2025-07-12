let nome;

console.log('Olá, mundo!');
menagemConsole('Robert');
console.log(retornaNumeroDobrado(1));
console.log(retornaMediaNumero(3,6,12));
console.log(`retorna o maior número entre 1 e 2: ${retornaMaiorNumero(1,2)}`);
console.log(`retorna o maior número entre 3 e 2: ${retornaMaiorNumero(3,2)}`);
console.log(`retorna o resultado da multiplicação do próprio número 3: ${retornaNumeroMultiplicadoPorEleMesmo(3)}`);


function menagemConsole(nome) {
    console.log(`Olá, ${nome}`);
}

function retornaNumeroDobrado(numeroDobrado) {
    return numeroDobrado * 2;
}

function retornaMediaNumero(numero1, numero2, numero3) {
    return media = (numero1 + numero2 + numero3) / 3;
}

function retornaMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;        
    } else {
        return numero2;
    }
}

// uma solução alternativa de operador ternário para condições:
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);


function retornaNumeroMultiplicadoPorEleMesmo(numeroMult) {
    return numeroMult * numeroMult;    
}