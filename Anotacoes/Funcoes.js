        //DECLARAÇÃO CLASSICA DE UMA FUNÇÃO//
    // FUNÇÃO = AÇÃO.
    // Função realiza alguma acção, algum bloco de código.
    // Adicionando um parametro a função eu consigo deixar ela mais flexivel a mudanças.
    // O que está dentro da função só é utilizado por ela, ou seja não dá pra utilizar variavel 
    // que esteja dentro de uma função.

function saudacao(nome){
    //minha função saudacao, precisa de um parametro nome para executar.
    // Caso uma função for retornar algo, tem que ser de acordo com o que ela faz.
//console.log(`Bom Dia, ${nome}!`);
//return 'Coloque o que for retornar da minha função aqui', 123;
   return `Bom Dia, ${nome}!`;
}

    // Para chamar uma função, ele irá executar o console.log mostrando a mensagem.
    // Sendo assim, posso chamar a minha função com parametros diferentes.
saudacao('Lucas');
saudacao('Rafael');

    // Para que minha função RETORNE algum valor, eu preciso adicionar o Return no final da variavel.
    // Depois da palavra return eu preciso falar o que ela vai retornar, caso contrario não ira retornar undefined.

const variavelRetorno = saudacao('Rocha');
console.log(variavelRetorno);


    //Criando uma função que realiza uma soma entre dois valores.
function soma(x,y){
    const resultado = x + y;
    return resultado; //Tudo que esta abaixo de return não sera executado. Quando o JS lê o return ele encerra a função.
}

    // Posso mostrar na tela a soma ou salvar em uma variavel e mostrar.
//console.log(soma(1,2));
//console.log(soma(5,5));
//console.log(soma(10,10));

    //Salvando em variavel.
const resultado = soma(5,10);
console.log(resultado);


    // Se eu não mandar um parametro pra minha função ou seja, se eu não enviar nenhum valor a função,
    // Eu consigo colocar como padrão o valor na função para ela não retornar NaN.

function soma(x=1,y=2){
    const resultado = x + y;
    return resultado;
}

const resultadoSoma = soma(); // Nesse caso como não passei nenhum valor, ele retorna 3
console.log(resultadoSoma);

    //Poderia mandar apenas o valor x, e ele pegaria o y padrão.
console.log(soma(5)); // Ele retornaria 5 + 2 = 7

        


        //DECLARAÇÃO ANONIMA DE UMA FUNÇÃO//
    // Criar uma função dentro de uma variavel.
    
const raiz = function (n){
    // Não é necessario colocar nome para a função.
    return n ** 0.5;
};  // Neste caso eu preciso colocar ;

console.log(raiz(9));
console.log(raiz(10));


        //ARROW FUNÇÃO //
    //Basicamente eu tiro a palavra funcion e só passo o parametro e dentro da {} o meu bloco que deve ser executado.

const multiplicacao = (n,y) => {
    return n * y;
};

console.log(multiplicacao(3,2));

    // Se a minha função tiver apenas 1 parametro e conter apenas uma linha de execução
    // como o exemplo acima, poderia executar também desta forma.

const raizFuncArrow = n => n ** 0.5; // Nesse caso eu deixo o meu código em apenas 1 linha.

console.log(raizFuncArrow(9));