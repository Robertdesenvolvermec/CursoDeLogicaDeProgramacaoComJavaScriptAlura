let nome;

console.log('Olá, mundo!');
menagemConsole('Robert');
console.log(retornaNumeroDobrado(1));
console.log(retornaNumeroDobrado(2));

function menagemConsole(nome) {
    console.log(`Olá, ${nome}`);
}

function retornaNumeroDobrado(numeroDobrado) {
    return numeroDobrado * 2;
}

