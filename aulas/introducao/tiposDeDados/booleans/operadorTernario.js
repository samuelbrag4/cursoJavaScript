// Boolean: operador ternário

// O operador ternário é uma forma mais curta de escrever um if/else. Ele é composto por três partes:
// Ele não é muito utiizado pois complica o código de ler

// 1. A condição que será avaliada
// 2. O valor que será retornado caso a condição seja verdadeira
// 3. O valor que será retornado caso a condição seja falsa

// Exemplo:
const idade = 18;
const podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// O operador ternário é muito útil para retornar valores com base em condições. Ele é muito utilizado em JSX, por exemplo, para renderizar componentes condicionalmente.