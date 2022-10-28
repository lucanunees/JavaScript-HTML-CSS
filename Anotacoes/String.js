        // STRINGS //

        //As string tem elemento e esse elemento é sequencial de acordo com
        //o que esta dentro da string.
        // Sendo assim é possivel pegar qualquer elemento da string utilizando:


        //        01234567 Quantidade de elementos, se tivesse mais iria continuando.
//let umaString  = "Um texto";

//console.log(umaString[1]);
//console.log(umaString.charAt(6)); // Dentro do parenteses passar a sequencia do elemeto que desejo.

        //Para descobrir qual a posição do elemento dentro da string:
        //Nesse exemplo ele esta mostrando o valor 3, ou seja o meu Texto começa do elemento 3.

//console.log(umaString.indexOf('texto'));    

        // O LastIndexOf começa pelo ultimo elemento e vai até o primeiro, da direita para a esquerda.
        //Neste caso ele retornou o elemento 7
//console.log(umaString.lastIndexOf("o"));


        //Expressão regular (função match), retorna todas as letras maiuscula de a/z dentro da minha string.
        //Para colocar uma expressão regular basta colocar // dentro dos parenteses
//console.log(umaString.match(/[a-z]/g)); // Colocando o G ele salva em uma array        

        // A função replace é utilizado para substituir um elemento da string.

//console.log(umaString.replace('Um', 'Uma')); // Na primeira aspas eu coloco o valor que desejo substituir e na segunda aspas o valor a ser colocado.        

        // Outro exemplo de replace utilizando expressao regular.
//console.log(umaString.replace(/t/, 'B')); // No caso estou substituindo na minha string a primeira letra que começa t por B.

        // Se eu quiser substituir todas as letras da minha string eu acrescendo a flag G
//console.log(umaString.replace(/t/g, 'B'));        

        // Saber o tamanho da minha string.
//console.log(umaString.length); 

        // A função slice serve para pegar uma parte especifica da string
//console.log(umaString.slice(3,8)); //Na primeiro eu coloco o indice da onde eu quero iniciar separo por , e após a virgula até aonde eu quero pegar da string.
//console.log(umaString.slice(-5)); // Desta forma também funciona, ele pega o valor total da minha string e tira o valor indicado e pega o valor.
//console.log(umaString.slice(1));

        // A função substring também faz a mesma coisa:
        // Ele pegou o valor total da string(8) e tirou 1, no caso ficou 7, ele retorna esse elemento da posição 07
//console.log(umaString.substring(umaString.length, umaString.length -1)); 

        // A função SPLIT é uma separador, por exemplo quero pegar as palavras separadas por espaço:
        // E ele me retorna uma array. ([ 'Um', 'texto' ])
//console.log(umaString.split(' '));        

