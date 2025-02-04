let num1 = 3;
let num2 = 2;
let num3 = 1;
let num4 = 4;
let num5 = 5;

function imprimirNumeros (...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num1, num2, num3, num4, num5);
imprimirNumeros(num1, num2, num3, num4);
imprimirNumeros(num1, num2, num3);