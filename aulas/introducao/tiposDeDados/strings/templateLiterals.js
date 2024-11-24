// Template Literals em JavaScript

// Template Literals são uma forma de criar strings em JavaScript que permitem a inclusão de expressões e variáveis de forma mais fácil e legível.
// Eles são delimitados por crases (`) ao invés de aspas simples (') ou duplas (").

const nome = "João";
const idade = 25;
const cidade = "São Paulo";

// Usando Template Literals para criar uma string
const mensagem = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;

console.log(mensagem);

// Template Literals também permitem a quebra de linha sem a necessidade de caracteres especiais
const mensagemMultilinha = `Esta é uma mensagem
que ocupa várias
linhas.`;

console.log(mensagemMultilinha);

// Também é possível incluir expressões dentro de Template Literals
const a = 5;
const b = 10;
const resultado = `A soma de ${a} e ${b} é ${a + b}.`;

console.log(resultado);