    // Aqui são comandoas que vão ser executados no window ou seja na tela, não
    // é executado através do Node.

//alert('Com a nossa mensagem');
//confirm('Deseja Cancelar?');
//prompt('Digite teu nome:');

    // Para salvar um valor de retorno basta criar uma variavel e chamar o objeto confirm por exemplo.
    // Se eu digitar o nome da variavel na tela de inspecionar aba Console, eu consigo ver o valor da minha variável.

//let confirma = confirm('Realmente deseja cancelar?');
//let nomeUser = prompt('Digite seu nome:');
//let idade = prompt('Digite sua idade:');


    // EXERCICIO //
    // FAÇA UM CALCULO ATRAVÉS DO NAVEGADOR//

alert('Calculadora Online, clicar em OK para iniciar.');
let num1 = prompt('Digite um número:');
let num2 = prompt('Para efetuar a soma, digite outro número:')

num1 = Number(num1);
num2 = Number(num2);


let resultadoDaSoma = num1 + num2;

alert(`O resultado da soma dos valores digitados é de: ${resultadoDaSoma}`);


