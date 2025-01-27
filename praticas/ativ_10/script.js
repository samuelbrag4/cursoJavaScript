/*
Jogo do Par ou Ímpar

Crie um jogo onde o usuário escolhe "par" ou "ímpar" e digita um número. O computador gera um número aleatório entre 1 e 10. Some os dois números e diga quem ganhou!
*/

let escolha = prompt("Escolha par ou ímpar:");

let numero = parseInt(prompt("Digite um número:"));

let numeroComputador = Math.floor(Math.random() * 10) + 1;

let soma = numero + numeroComputador;

if (soma % 2 === 0) {
    if (escolha === "par") {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
} else {
    if (escolha === "ímpar") {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}

