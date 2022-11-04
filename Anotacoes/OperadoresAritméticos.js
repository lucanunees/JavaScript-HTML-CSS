
    //OPERADORES ARITMÉTICOS. //

    /*
    
    + = Ele faz adição e concatenação. 
    - = Diminuição 
    / = Divisão
    * = Multiplicação
    ** = Potenciação, no caso da constante, dois elevado á dois é 4.
    % = Resto da divisão.

    // PRECEDÊNCIA //
    
    () = Primeiro parenteses
    ** = Potenciação
    *, /, %  = Multiplicação, Divisão e resto da divisão
    +, - = Adição e subtração
    
    */

const num1 = '5'; // formato de string, se eu concatenar com o num10, ele irá juntar os valores e não somar.
const num10 = 10;    
const num2 = 15;
const potenciacao = 2;

    //Contador, faz a adição automatica
let contador = 1;

contador++; //2, desta forma ele mostra o valor e depois incrmenta mais 1 ou seja, na proxima execução que mostraria o valor atualizado.
contador++; //3
contador++; //4
contador++; //5
  
    // Pode ser utilizado desta maneira fazendo o pré incremento:
++contador; // ele incrementa 1 e depois mostra o valor.

    // também podemos subtrair(Decremento):
--contador;
++contador;
console.log(contador); // Resultado: 5


console.log(num1 + num10); // resultado: 510
console.log(num10 + num2); // resultado: 25
console.log(num10 * num2); // resultado: 150
console.log(num10 - num2); // resultado: -5;
console.log(num10 / num2); // resultado: 0.6666
console.log(potenciacao ** potenciacao); // resultado: 4
console.log(num10 % num2); // Resultado: 10
console.log(num10 + num2 * num2); // Resulado: 235, aqui no caso ele fez primeiro a multiplicação e depois somouo resultado.
console.log((num10 + num2) * num2); // resultado: 375 nesse caso ele fez primeiro a soma, depois fez a multiplicação do valor da soma.

    // CONVERTER STRING PARA NUMERO //

const num3 = 10;
const num4 =  parseInt('20'); // Utilizando o parseInt eu converto o numero de string para int, sendo assim possibilitando a soma.
const num5 = parseFloat('5.2'); // Posso ser mais especifico, quando eu já sei qual o tipo de dado.
const num6 = Number('9.5'); // Ou utilizar direto o number e ele resolve automaticamente.
console.log(num3 + num4); 
 



