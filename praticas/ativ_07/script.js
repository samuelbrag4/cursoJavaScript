/*
Inversor de String

Peça ao usuário uma palavra e exiba ela invertida.
(Exemplo: "JavaScript" → "tpircSavaJ")
*/

let input = prompt('Digite uma palavra');

let inverso = '';

for (let i = input.length - 1; i >= 0; i--) {
  inverso += input[i];
}

alert(inverso);