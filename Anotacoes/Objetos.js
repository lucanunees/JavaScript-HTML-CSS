        //OBJETOS//

    //Um exemplo, se eu tivesse que criar uma pessoa, eu teria que realizar esse mesmo bloco de código
    //diversas vezes alterando o nome da variavel const entre nome03, nome04 etc...
const nome01 = 'Lucas';
const sobreNome01 = 'Nunes';
const idade01 = 25;

const nome02 = 'Gabriela';
const sobreNome02 = 'Brandão';
const idade02 = 26;

    //Para facilitar eu poderia agrupar, criar um OBJETO.
    //Para criar um objeto basta colocar chaves {} e dentro eu adiciono os atributos, não precisa criar const nem let.

//Esse aqui é um objeto literal.
console.log("Criando um objeto (Objeto Literal) para cada Pessoa.");
const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Nunes',
    idade: 25

};

const pessoa2 = {
    nome: 'Gabriela',
    sobrenome: 'Brandão',
    idade: 26
};

    // Para acessar esse objetos, os atributos dentro dele, eu utilizo o ponto (.), exemplo pessoa1. e neste caso
    // irá aparecer todos os atributos que eu coloquei, métodos e etc.

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

    // Mesmo assim eu ainda precisaria criar vários objetos se eu quisesse ter mais nomes,
    // Poderia criar uma função que me retorna um objeto.
console.log("Utilizando a função (função factor) para criar os objetos:");  

//Nome desta função é FACTOR, ela cria objetos. 
function criaObjeto(nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaObjeto('Mateus','Henrique',23);
console.log(pessoa3.nome, pessoa3.sobrenome);

const pessoa4 = criaObjeto('Edson','Porfirio',49);
console.log(pessoa4.nome,pessoa4.sobrenome);

const pessoa5 = criaObjeto('Cleidiene','Domingos',48);
console.log(pessoa5.nome, pessoa5.sobrenome);

    //Se o nome dos parametros forem iguais ao dos atributos, basta colocar os atributos sem utilizar o :

console.log("Utilizando a criação mais curta da função factor:");    
function criaObjeto2(nome,sobrenome,idade){
    return{nome,sobrenome,idade};
}

const pessoa6 = criaObjeto2('Arthur','Nunes', 5);
console.log(pessoa6.nome, pessoa6.sobrenome);

console.log("Criando um objeto literal, com uma função/metodo 'fala', dentro:");

const pessoa7 = {
    nome: 'Bruno',
    sobrenome: 'Nunes',
    idade: 27,

    //Não preciso utilizar a palavra function, basta colocar direto.    
    fala(){
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}.`);
    }
};

    //Para que esse objeto, utilize a função falar, basta chamar igual as anteriores.
pessoa7.fala();