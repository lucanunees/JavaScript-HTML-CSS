
alert('Calculadora Online, clicar em OK para iniciar.');
        
const numero = Number(prompt('Digite um número:')); // Ele ja converte essa string para number.
//numero = Number(numero); // Para converter podemos fazer desta forma,
//Mudando o nome da variavel OU colocando ela direto na chamada entre o prompt.


    //Utilizando o document.getElementByID, eu consigo pegar 
    // o elemento da minha tela que tenha um ID
const numeroTitulo =  document.getElementById('numero-titulo');
const textoDiv = document.getElementById('resultado');

numeroTitulo.innerHTML = numero;

// Se não colocar o sinal de += ele vai salvar apenas o ultimo e
// desconsiderar o resto. Ele zera a cada vez que é chamado, porém
// acrescentando o += ele vai juntando.
textoDiv.innerHTML += `<p>Seu número é: <strong>${numero}.</strong></p>`;
textoDiv.innerHTML += `<p>Raiz quadrada do número é: <strong>${numero ** 0.5}.</strong></p>`;
textoDiv.innerHTML += `<p><strong>${numero},</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong> </p>`;
textoDiv.innerHTML += `<p><strong>${numero},</strong> é valido: <strong>${Number.isNaN(numero)}</strong></p>`;
textoDiv.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
textoDiv.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
textoDiv.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;




    //Jeito que eu fiz, correto porém tem outra forma.


//let numCalc = prompt("Digite o número:");
//numCalc = Number(numCalc); // Transformando esse numero em Number, pois ele vem em string.
//const numFinal = numCalc
//const raizQuadrad = numFinal ** 0.5;



//document.body.innerHTML += `<strong>Seu número é: ${numFinal}<strong>           <br />`;
//document.body.innerHTML += `Raiz quadrada do número é: ${raizQuadrad}          <br />`;
//document.body.innerHTML += `${numFinal} é inteiro: ${Number.isInteger(numFinal)} <br />`;
//document.body.innerHTML += `${numFinal} é NaN: ${Number.isNaN(numFinal)}         <br />`;
//document.body.innerHTML += `Arredondado para baixo: ${Math.floor(numFinal)}     <br />`;
//document.body.innerHTML += `Arredondado para cima: ${Math.ceil(numFinal)}       <br />`;
//document.body.innerHTML += `Com duas casas decimais: ${numFinal.toFixed(2)}     <br />`;