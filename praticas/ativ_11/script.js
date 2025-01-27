let idade = prompt("Olá! Qual a sua idade?");
idade = parseInt(idade); // Converte a entrada para um número inteiro

if (isNaN(idade)) {
    alert("Por favor, insira uma idade válida.");
} else if (idade >= 18) {
    alert("Você é maior de idade! Pode entrar na balada.");
} else {
    alert("Você é menor de idade! Por conta disso, não pode entrar na balada.");
}