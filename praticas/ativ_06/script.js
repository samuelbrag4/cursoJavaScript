/*
Média de Notas

Peça ao usuário 3 notas e calcule a média delas. Depois, exiba uma mensagem dizendo se o aluno foi aprovado (média ≥ 7), está em recuperação (média entre 5 e 6.9) ou foi reprovado (média < 5).
*/

let input = parseInt(prompt("Digite a primeira nota: "));
let input2 = parseInt(prompt("Digite a segunda nota: "));
let input3 = parseInt(prompt("Digite a terceira nota: "));

let media = (input + input2 + input3) / 3;

if (media >= 7) {
    alert(`A média é ${media}. Aluno aprovado!`);
} else if (media >= 5 && media <= 6.9) {
    alert(`A média é ${media}. Aluno em recuperação!`);
} else {
    alert(`A média é ${media}. Aluno reprovado!`);
}