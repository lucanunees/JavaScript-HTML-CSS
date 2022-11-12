
    // Quando criamos uma const desta forma, ela é global ou seja pode ser
    // acessada de qualquer lugar. E desta forma ela pode entrar em conflito com alguma biblioteca
    // que eu possa estar utilizando no meu sistema.
//const nomeGlobal = 'Lucas';

    // Para proteger meu sistemas de conflitos com outras bibliotecas, eu adiciono
    // meu escopo em uma função.
    // Desta forma, tudo que esta dentro da minha function, só pode ser acessada por ela.

//function meuEscopo(){
    // Estou pegando meu formulario através da classe:
//const form = document.querySelector('.form');
//const resultado = document.querySelector('.resultado');

//const pessoas = []; //Criando uma array para receber os valores do form a cada envio.

    //Se tivesse um ID, seria: 
    //const form = document.querySelector('#form');

    // E pelo nome da tag, seria:
    //const form = document.querySelector('form');

    //Agora para fazer com que ao clicar no botão enviar, ele não recarregue a pagina:
//form.onsubmit = function (evento){ // Então o que esta acontecendo, tudo que acontece na página é um evento,
                                       // Estou dizendo que dentro do form ao clicar no enviar, ao fazer o submit do meu form,
                                       // Eu disparo um alerta.

    //A função correta que previni o reload da pagina é:
    //evento.preventDefault();
    //console.log("Evento parado utilizando o onsubmit:")
//};

//function recebeEvento(evento){ //Passando o evento dentro dos parenteses
    //console.log("Evento parado utilizando o addEventListener")
    //evento.preventDefault();

        //Estou pegando as coisas do form, dentro da pagina e colocando na const nome.
    //const nome = form.querySelector('.nome');
    //const sobrenome = form.querySelector('.sobreNome');
    //const peso = form.querySelector('.peso');
    //const altura = form.querySelector('.altura');
    //console.log(nome,sobrenome,peso,altura); //Desta forma ele ja vai me mostrar o input direto.. mas eu preciso do valor e para pegar o valor, basta colocar o value:
    //console.log(nome.value, sobrenome.value,peso.value,altura.value);
    
//}
    //Outra forma de pegar o evento e manipular é:
//form.addEventListener('submit', recebeEvento);  //Então eu adiciono qual o evento ele quer ouvir.. isso é um método então dentro de () eu passo o parametro.
                                                //Na opção acima eu preciso colocar a palavra on, aqui basta colocar o evento, seguido do método.
//}
//meuEscopo();


            // EXERCICIO //
function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = []; 
    form.addEventListener('submit', recebeEvento);    
    
    function recebeEvento(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
       
        pessoas.push({   //Criando um array e adicionando um objeto em cada indice.
            nome: nome.value,
            sobreNome: sobreNome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}</p>`
    };
  
}
meuEscopo();


