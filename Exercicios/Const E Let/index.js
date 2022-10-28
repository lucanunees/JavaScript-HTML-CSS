
    // Criar uma frase utilizando const e let. //

//const nome = 'Lucas';
//const sobreNome = 'Nunes';
//const idade = 25;
//const peso = 84;
//const alturaEmM = 1.80;

//let indiceMassaCorporal; // Peso / (altura * altura)
//let anoNascimento;
//let anoAtual = 2022;


    // Resultado final //

//indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
//anoNascimento = anoAtual - idade;

    // Colocando , entre os valores, automaticamente ele cria separado, se eu quero juntar os valores, eu adiciono o sinal de +
//console.log(nome, sobreNome, "tem", idade, "anos,", "pesa", peso, "KG, tem", alturaEmM ,"de altura", "e seu IMC é de:", indiceMassaCorporal + ".")
//console.log(nome, sobreNome, "nasceu em", anoNascimento + ".")

    // Desta forma ficaria mais legivel e deixaria o código mais "limpo"
    // Colocando o ${} entre as variaveis ele mostra o valor delas.
    // Isso se chama Template strings
//console.log(`${nome} ${sobreNome} nasceu em ${anoNascimento}.`)




    //Segundo Exercicio com variaveis //
    //Passar os valores das variaveis para as variaveis

//let varA = 'A' // Variável A recebe o valor da B
//let varB = 'B' // Variável A recebe o valor da C
//let varC = 'C' // Variável A recebe o valor da A

//const variA = varA
//const variB = varB
//const variC = varC

//varA = variB
//varB = variC
//varC = variA   

//console.log(varA, varB, varC);

    //Poderia utilizar array

//[varA, varB, varC] = [varB, varC, varA]