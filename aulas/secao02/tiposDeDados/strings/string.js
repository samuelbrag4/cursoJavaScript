// Uma string é sempre declarada entre "" ou '' ou com crase ``.
// Todo dado declarado dessa forma, é uma string.

string = "Texto";

console.log(typeof("Esta é uma string!"));
console.log(typeof('Esta é uma string também!'));
console.log(typeof(`Esta é uma string também!`));

// STRINGS: Detalhes técnicos - Template Literals

console.log("-----SEPARAÇÃO-----");

// Pular linha:
console.log("Esta é uma string!\nDe duas linhas!");

console.log("-----SEPARAÇÃO-----");

// Se dentro de uma string eu desejo colocar "aspas", eu posso fazer isso de duas formas:
console.log("Esta é uma string com \"aspas\"!");    
console.log('Esta é outra string com "aspas"!');
// Ou eu utilizo a barra, ou eu utilizo aspas simples no inicio para depois poder utilizar aspas duplas.

console.log("-----SEPARAÇÃO-----");

// Para realizar concatenação de valores de outros tipos em string pode fazer isso:
console.log(`A soma de 2 + 2 é ${2 + 2}`)
console.log(`Este é um ${string}!`)
// Para fazer isso, é necessário utilizar crase `` e ${} para realizar a concatenação.

console.log("-----SEPARAÇÃO-----");

// Concatenação de Strings:
console.log("Olá" + " " + "Mundo" + "!");