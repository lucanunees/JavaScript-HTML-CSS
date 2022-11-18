        // AVALIAÇÃO DE CURTO-CIRCUITO (SHOT-CIRCUIT) //

 /*
 Basicamente quando utilizamos os operadores logicos, principalmente o
 && (AND) e o || (OR), ele faz uma validação mais curta.
 Exemplo:

 && -> false && true; Ele irá retornar false, pois assim que ele encontrar na minha expressão um valor false ele ja 
 para e retorna o valor.

 */

console.log('---------------------------------');
console.log('Utilizando o operador logico && (AND):');
                //TRUE      FALSE    TRUE
 console.log('Lucas Nunes' && 0 && 'Rafael'); // Ele retorna o valor mesmo, no caso 0, pois ele encontrou um valor false.
 console.log('Lucas' && true && 'Rafael'); // Caso tenha um valor true, dentro da expressão ele irá retornar o ultimo valor.

/*
Dentro do javascript tudo pode ser avalidado ou em verdadeiro ou em falso.

FALSY: São valores que avaliam em false quando necessario.
false: é o valor literal false, já é validado de cara.
Qualquer coisa diferente de:
false, 0 '', "", ``, null, undefined, NaN. 
Irá retornar TRUE
*/
            //TRUE       TRUE
console.log('Lucas' && 'Rafael'); //Ele irá validar expressão por expressão e retornará o ultimo valor pois não tem false.

            //TRUE    FALSE    TRUE
console.log('Lucas' && '' && 'Rafael'); // Ele irá validar a expressão e identificar que tem uma string vazia, ele retornará o valor dessa expressão, no caso vazio.


console.log('---------------------------------');
console.log('Exemplo de curto-circuito:');

function falarOi (){
    return 'Oi!';
}

const podeExecutar = false;

// Aqui ele primeiro vai validar a minha variavel e como estou utilizando o operador && (AND) e precisa ser um valor true, 
// ele não irá executar minha função e retornará o vazio.
podeExecutar && falarOi(); 

//Somente para mostrar no terminal.
console.log(podeExecutar && falarOi()); // Se a expressão podeExecutar fosse verdadeira, ou seja, nenhum dos exemplos acima, fosse TRUE, ele iria executar minha função.


console.log('---------------------------------');
console.log('Utilizando o operador logico || (OR):');

//Ele funciona basicamente igual ao &&, porém se tiver um valor true dentro da minha expressão, ele irá retornar o valor dessa expressão.
console.log('Exemplo || (OR):');
console.log(0 || false || null || 'Lucas' || true); // Ele retornará o primeiro valor true dentro da minha expressão.


const corUsuarioSelecionada = null; // Se o usuario selecionar uma cor, irá setar esse valor aqui.
const corPadrao1 = 'red'; // Caso contrario, irá pegar o valor padrão
const corDefinida = corUsuarioSelecionada || corPadrao1;


// Para simplificar o código poderia ter feito assim:
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corDefinida);
console.log(corPadrao);