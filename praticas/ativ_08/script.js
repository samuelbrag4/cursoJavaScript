/*
Contador de Vogais

Peça ao usuário uma palavra e conte quantas vogais (a, e, i, o, u) ela tem.
*/

let vogais = ['a', 'e', 'i', 'o', 'u'];

let input = prompt('Digite uma palavra');

let contador = 0;

for (let i = 0; i < input.length; i++) {
    if (vogais.includes(input[i])) {
        contador++;
    }
}

alert(`A palavra "${input}" tem ${contador} vogais.`);