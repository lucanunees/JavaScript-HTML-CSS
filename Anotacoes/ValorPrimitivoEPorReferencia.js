        // Valores Primitivos e Por Referencia //

        // Valores PRIMITIVOS //
    //Primitivos(copia)  não podemos mudar nada nele.
    // (valores imutáveis)- string, number, boolean, undedfined, null (biginit, symbol). 

console.log(' Exemplo de Valores PRIMITIVOS (copia):')
let varA = 'A';
let varB = varA; // Ele cria uma copia do valor atual do varA.
console.log(varA,varB);

varA = 'B';
console.log(varA, varB); // Somente o varA irá receber o valor B, a varB continua com o valor passado anteriormente.


        // Valores REFERENCIA //
    //Referência(atualiza pois está apontando para o mesmo local)  Pode ser mudado.  
    //(valor mutável)- array, object, function.

    //Exemplo:
console.log(' Exemplo de Valores por REFERENCIA (atualiza ambos):')
let aa = [1,2,3];
let bb = aa;
console.log(aa,bb); // Irá mostrar os dois valores igual porque ele esta apontando para o mesmo local.

aa.push(4); // Adicionando mais um indice na array, ambos as variaveis irão mostrar os valor atualizados.
           // Mesmo atualizado apenas a variavel a.
console.log(aa,bb);

bb.pop(); // Retirando o ultimo indice da array, da variavel B como estão apontando para o mesmo local, as duas serão atualizadas
         // Tanto a variável A como a B.
console.log(aa,bb);


    //O mesmo funciona para objeto
    //Exemplo:
console.log('Exemplo com Objetos:');
const a = {
    nome:'Lucas',
    sobrenome: 'Nunes'
};

const b = a; // Ele está pegando como referencia, ou seja se atualizar ou um ou outro ambos seram modificados.
             // Esta apontando para o mesmo local.
a.nome = 'Rafael';
console.log(a);
console.log(b);

    // Para criar uma cópia de fato é preciso colocar ...
const c = {...a}; // Desta forma eu crio uma copia do A dentro do C e se alterar o valor do A não afeta o C.
console.log(c);

console.log('Exemplo com as alterações nas variaveis, apenas a ultima não é atualizada:')
a.nome = 'Lucas';
b.sobrenome = 'Rocha'
console.log(a); // Irá atualizar acrescentando no nome: Lucas
console.log(b); // Irá atualizar acrescentando no nome: Lucas
console.log(c); // Permanecera com o valor antigo, sem alteração.

