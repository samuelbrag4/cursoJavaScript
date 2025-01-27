/*
Soma de Números Positivos

O programa deve pedir ao usuário vários números e somá-los. Quando o usuário inserir um número negativo, o programa deve parar e exibir a soma total.
*/

let sum = 0;

while (true) {
    let input = prompt('Digite um número:');
    input = parseInt(input);

    if (isNaN(input)) {
        alert('Por favor, digite um número válido.');
        continue
    }

    if (input < 0) {
        alert(`A soma total é ${sum}.`);
        break;
    }

    sum += input;
}

alert(`A soma total é: ${sum}`);