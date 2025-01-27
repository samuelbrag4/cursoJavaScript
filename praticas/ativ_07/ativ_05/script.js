/*
Jogo de Adivinhação

Gere um número aleatório entre 1 e 10. O usuário deve tentar adivinhar esse número. A cada tentativa, o programa deve dizer se o número é maior ou menor. O jogo continua até o usuário acertar.
*/

let randomNumber = Math.floor(Math.random() * 10) + 1;

// Divida: O que o .floor() faz? O que o .random() faz? O que o + 1 faz?

let input = parseInt(prompt('Tente adivinhar o numero: '));

let attempts = 1;

while (input !== randomNumber) {
    if (input < randomNumber) {
        input = parseInt(prompt('Tente um número maior'));
    }

    if (input > randomNumber) {
        input = parseInt(prompt('Tente um número menor'));
    }

    attempts++;
}

console.log(`Parabéns! Você acertou em ${attempts} tentativas!`);