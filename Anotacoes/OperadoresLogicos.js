        // OPERADORES LOGICOS //

/*

&& = AND
|| = OR
! = NOT

*/


// A validação do && (AND) todas as expressões precisam ser verdadeiras, para ele retornar true.
// Caso qualquer expressão retorne false, toda a expressão completa irá retornar false.
console.log("--------------------------------------");
console.log("Utilizando o operador logico && (AND):");

const expressaoAndTrue = true && true && true;
const expressaoAndFalse =  true && true && false;

console.log(expressaoAndTrue); // Ele irá retornar um boolean (true), pois todos são verdadeiros.
console.log(expressaoAndFalse); // Ele irá retornar um boolean (false), pois nem todos são verdadeiros.
console.log(false && false && false); // Ele irá retornar um boolean (false), pois todos são falsos.
console.log(false && false && true); // Ele irá retornar um boolean (false), pois não são iguais.


// A validação do || (OR), se uma expressão for verdadeira ele irá retornar true.
// Se na expressão inteira tiver um true, ele retornará true.
console.log("--------------------------------------");
console.log("Utilizando o operador logico || (OR):");

const expressaoOr = false || true;
const expressaoOr2 = false || false || false || true;
const expressaoOr3 = false || false || false || false;

console.log(expressaoOr); // Ele irá retornar um boolean (true), pois dentro da minha expressão existe um true.
console.log(expressaoOr2); // Ele irá retornar um boolean (true), pois dentro da expressão existe um true, se todos fossem false, ele retornaria false.
console.log(expressaoOr3); // Ele irá retornar um boolean (false), pois dentro da minha expressão NÃO tem um valor true.

console.log("--------------------------------------");
console.log("Exemplo mais pratico:");

const usuario = 'Lucas';
const senha = '123456';

// Estou validando se o meu usuario é igual ao usuario digitado e se a senha é igual a senha digitada.
// Nesse caso todas as expressões tem que retornar true para liberar o login, caso contrario irá retornar false.
const liberarLogin = usuario === 'Lucas' && senha === '123456';
console.log(liberarLogin); // Retornará True

const liberarLogin2 = usuario === 'Lucas' && senha === '12345'; // A senha está diferente.
console.log(liberarLogin2); // Retornará false

// A validação do ! (NOT), a negação da expressão, ele inverte a expressão.
console.log("--------------------------------------");
console.log("Utilizando o operador logico ! (NOT):");

console.log(!false); // No caso eu estou negando a expressão false e ele retornará TRUE.
console.log(!true); // retornará false
