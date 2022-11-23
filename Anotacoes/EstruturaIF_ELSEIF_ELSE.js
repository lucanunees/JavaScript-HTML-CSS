        // ESTRUTURA CONDICIONAL IF & ELSE IF & ELSE //

/*

A condição IF, pode ser usada sozinha.
Sempre que utilizar a palavra else, preciso de um if antes.
Eu posso ter vários else if na checagem.
So posso ter um else na checagem.
Podemos usar condições sem Else if, utilizando apenas if e else.

*/

   // Exemplo:
const hora = 15;
const hora2 = 13;

   // Se a hora for menor que 12, ele irá entrar (true) dentro do if e executar o console.log.     

console.log('Condição IF (true):')
if (hora < 12){
        console.log('Bom dia!');
        
}

   // Se a hora for menor   12 a condição já seria (false) e não executaria o bloco de código.
console.log('------------------------------------');
console.log('Condição IF (false):')
if (hora2 < 12){
        console.log('Bom dia!');
}

   // Para criar uma estrutura condicional, eu posso acrescentar o else if, ou seja se a condição IF for (false), 
   // Ele verifica a condição else if.
   // Se a condição IF for (true), ele ignora o else if.

console.log('------------------------------------');
console.log('Condição IF e Else IF e Else:')

if (hora >= 0 && hora <= 11){
        console.log('Bom dia!');
}else if(hora >= 12 && hora <= 17){
        console.log('Boa tarde!');
}else if(hora >= 18 && hora <= 23){
        console.log('Boa noite!');
}else{ // A condição else, significa que se nenhuma acima for verdadeira, ele executa o else.
        console.log('Verificar a hora informada!');
}

   // Outra exemplo utilizando true or false.
console.log('------------------------------------');
console.log('Outro exemplo utilizando true or false:');
const tenhoDinheiro = false;

if (tenhoDinheiro){ // Aqui ele valida se a condição é true, se a variavel é true.
        console.log('Bora gastar! ;)');
}else { // Se for false ele cairá no else.
        console.log('Bora ficar em casa :(')
}


