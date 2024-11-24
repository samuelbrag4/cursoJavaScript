// Booleans: operadores lógicos

// Operador lógico AND (&&) - para ser true, os dois "lados" da comparação precisam ser true
// Operador lógico OR (||) - para ser true, basta um dos "lados" da comparação ser true
// Operador lógico NOT (!) - inverter os valores (true vira false)

// Exemplo de uso do operador lógico AND (&&)
console.log(true && true); // true
console.log(true && false); // false

// Exemplo de uso do operador lógico OR (||)
console.log(true || false); // true
console.log(false || false); // false

// Exemplo de uso do operador lógico NOT (!)
console.log(!true); // false
console.log(!false); // true

// Exemplo de uso de operadores lógicos - AND (&&)
const idade1 = 18;
const maiorDeIdade1 = idade1 >= 18;
const possuiCarteiraDeMotorista = true;

const podeDirigir1 = maiorDeIdade1 && possuiCarteiraDeMotorista;
console.log(podeDirigir1); // true

console.log("-----");

// Exemplo de uso de operadores lógicos - OR (||)
const idade = 18;
const maiorDeIdade = idade >= 18;
const estaAcompanhado = false;

const podeDirigir = maiorDeIdade || estaAcompanhado;
console.log(podeDirigir); // true

console.log("-----");

// Exemplo de uso de operadores lógicos - NOT (!)
const idade2 = 18;
const maiorDeIdade2 = idade2 >= 18;
const naoPossuiCarteiraDeMotorista = false;

const naoPodeDirigir = !maiorDeIdade2 || !naoPossuiCarteiraDeMotorista;
console.log(naoPodeDirigir); // false