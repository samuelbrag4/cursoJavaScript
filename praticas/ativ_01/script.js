/*
Verificação de Números Pares e Ímpares

Crie um programa que peça ao usuário um número inteiro e informe se ele é par ou ímpar.
*/

let input = prompt('Olá! Digite um número: ')
input = parseInt(input)

// Duvida: o parselInt transforma o valor do input em um número inteiro?

if (isNaN(input)) {
    alert('Digite um número válido!')
} else if (input % 2 === 0) {
    alert('O número é par!')
} else {
    alert('O número é ímpar!')
}

// Duvida: qual a função do isNaN? O que ele faz? Qual o motivo de se utilizar 3 iguais em input % 2 === 0?