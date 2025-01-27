/*
Tabuada Interativa

Peça ao usuário um número e exiba a tabuada desse número de 1 a 10.
*/

let input = prompt("Digite um número para ver a tabuada dele de 1 a 10");
input = parseInt(input);

if (isNaN(input)) {
    console.log("Por favor, digite um número válido.");
    return;
}

for (let i = 1; i <= 10; i++) {
    console.log(`${input} x ${i} = ${input * i}`);
}
