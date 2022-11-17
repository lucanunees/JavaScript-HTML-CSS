        // OPERADORES DE COMPARAÇÃO //

/*

> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou Igual a
== Igualdade (valor) *NÃO UTILIZAR*
=== Igualdade estrita (valor e tipo)
!= Diferente (valor) Se os valores forem igual ele irá retornar false. * NÃO UTILIZAR *
!== Diferente estrito(Valor e tipo) 

*/

const comp = 10 > 5;
const comp2 = 10 >= 11;
const comp3 = 10 >= 5;

console.log("Utilizando o comparador > utilizando apenas Number");
console.log(comp); // Ele retornará um boolean no caso (true) pois 10 é maior que 5;
console.log("Utilizando o comparador >= utilizando apenas Number");
console.log(comp2); // Ele retornará um boolean no caso (false) pois 10 não é maior e nem igual a 11;
console.log("Utilizando o comparador >= utilizando apenas Number");
console.log(comp3); // Ele retornará um boolean no caso (true) pois 10 é maior que 5, então ele nem valida se é igual, pois a primeira expressao ja foi verdadeira.

const num1 = 10; //Number
const num2 = '10'; // String
const comp4 = num1 == num2; // Essa expressão irá retornar um boolean (true), porém não são iguais pois um é do tipo number e o outro do tipo string.
                            // Por esse motivo utilizamos o sinal de ===, pois ele compara o valor e o tipo.
const comp5 = num1 === num2; // Essa expressão irá retornar um boolean (false), pois ele compara o valor e o tipo da variavel. E no caso é um number e uma string.

console.log("Utilizando o comparador == com um tipo number e um tipo String.");
console.log(comp4);              

console.log("Utilizando o comparador === com um tipo number e um tipo String.");
console.log(comp5);