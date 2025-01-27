/*
Contagem Regressiva

Peça um número ao usuário e faça uma contagem regressiva até 0, exibindo cada número no console.
*/

let input = prompt("Digite um número para a contagem regressiva: ");
input = parseInt(input);

while (input >= 0) {
    console.log(input);
    input--;
}