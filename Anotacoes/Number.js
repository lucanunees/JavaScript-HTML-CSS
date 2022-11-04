
let num1 = 1;
let  num2 = 2.5;

    //Aqui ele iria somar, pois as duas variaveis são number.

console.log(num1 + num2); 

    // .toString()
    //Se eu quiser que ele mostre os dois números sem realizar a soma
    //devemos transformar esse number em string, porém só nesse
    //momento que ele será um string.

console.log(num1.toString() + num2);
    
    //Para mudar de fato a minha variavel number para string
    // basta passar o toString() no nome da variavel.
    // Desta forma, se eu utilizar o console.log(typeof num1);
    // Ele retornara uma string direto.

num1 = num1.toString(); 

    //Representação Binaria, passando o valor 2, ele transforma
    //em binario.

console.log(num1.toString(2)); 

    // .toFixed()
    //Para deixas com casas decimais ao invés de mostrar
    // o resultado gigante, dentro dos parenteses eu indico
    // quantas casas quero retornar.

console.log(num1.toFixed(2));

    // Number.isInteger(Nome Variavel);
    // Para verificar se o número é um número inteiro,
    // basta utilizar o método isInterger passando a variavel.
    // Ele irá retornar um boolean, true or False.

console.log(Number.isInteger(num1));

    //Number.isNaN(temp);
    // Nan = Not a Number, quando alguma conta dá erro na execução
    // e o retorno é esse significa que tem alguma conta
    // invalida.

let temp = num1 + "Ola"; // Neste caso ele retornará NaN pois 
                        // Estou tentando somber number com string.

    // Para verificar se o resultado é NaN eu posso fazer uma
    // validação antes, utilizando Number.IsNaN(Passando a variavel);

console.log(Number.isNaN(temp)); // Ele retornara true pois a conta é invalida.

//let num1 = 0.7;
//let num2 = 0.1;

    num1 += num2;

    // Se for somar esses valores era pra retornar 0.8
    // porém ele retorna 0.7999999, mesmo colocando o toFixed
    // esse valor não é correto, ele irá corrigir porém 
    // o valor não será o correto.

console.log(num1 + num2);
    
    // para resolver esse problema, devemos utilizar
    // o parseFloat.
    // E verificiando se ele é um inteiro vai começar a dar false


console.log(parseFloat(num1.toFixed(2))); // OU
console.log(Number(num1.toFixed(2)));
console.log(num1);
console.log(numer.isInteger(num1)); 



 

