/*
Fibonacci

Peça um número n ao usuário e exiba os primeiros n números da sequência de Fibonacci.
(Exemplo para n = 5: 0, 1, 1, 2, 3)
*/

let n = parseInt(prompt("Digite um número:"));

let a = 0;

let b = 1;

let c = 0;

for (let i = 0; i < n; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}