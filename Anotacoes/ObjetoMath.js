    // Objeto já disponibilizado pelo JavaScript

let num1 = 9.54578;

    // Para arredondar o valor para baixo, passando a variavel:
    // E o comando ceil arredonda para cima.
    // O comando round arredonda para o mais proximo numero inteiro.

let num2 = Math.floor(num1); 
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);


    // Para descobrir dentro de uma sequencia de numeros o maior numero;
    // utilizar max. E para descobrir o menor basta colocar min

console.log(Math.max(1,2,3,4,510,20,5500)); // ele retornará o maior: 5500
console.log(Math.min(1,2,3,4,1,-1,-2,-5,-1,-100, 1000,2312)); // Ele retornará o menor: -100

    // O comando random gera um numero aleatorio.
console.log(Math.random());

    // Para gerar um numero aleatorio dentro de um range;
console.log(Math.random() * (10 - 5) + 5); 
    // Esse range trará um numero de 10 até 5 

    // Para retornar sem os decimais, posso utilizar o round.
console.log(Math.round(math.random() * (10 - 5 ) + 5));

    // Relizar potenciação, passando o numero virgula o potenciador.
    // no caso 2 elevado à 10.
console.log(Math.pow(2,10));  // Ou utilizar desta forma abaixo:
console.log(2 ** 10);


    // Para calcular a raiz quadrada de um número:
let num10 = 4;
console.log(num1 ** 0.5); // Ele me retorna a sair quadrada do num1

