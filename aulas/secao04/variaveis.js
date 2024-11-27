// Variáveis em JavaScript

// Elas podem ser declaradas de 3 formas diferentes:
// var-> variável global
// let-> variável local 
// const-> variável constante (valor não pode ser alterado)
// Normalmente, a mais utilizada é a let

// var
var nome = 'Luiz';

// let
let idade = 25;

// const
const dataNascimento = '01/01/1995';

// Exibindo as variáveis
console.log(nome, idade, dataNascimento);

// Nomes de variáveis
// Não podem começar com números
// Não podem conter espaços
// Não podem conter caracteres especiais, exceto _ e $

let $nome = 'Luiz';
let _nome = 'Luiz';
// let @nome = 'Luis'; // Erro
// let !nome = 'Luiz'; // Erro

// Alterando o valor de uma variável
idade = idade + 1;

// Nova idade
console.log(idade);

// Mudando o tipo de uma variável (de number para string)
idade = '25 anos';

// Exibindo a nova idade
console.log(idade);

// Daclarando várias variáveis de uma vez
let nome2 = 'Maria', idade2 = 30, cidade = 'Rio de Janeiro';

// Exibindo as variáveis
console.log(nome2, idade2, cidade);