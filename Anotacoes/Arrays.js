
    //Array é como se fosse uma lista, uma coleção de coisas.
    // para criar uma array basta colocar [] e dentro separado por virugla os valores.
    //Diferente de uma string que é tem indice do começo ao fim, uma array 
    // tem seu indice através do elemento.

//INDICE STRING  01234567891011 (conta o espaço).
const nome =    'Lucas Nunes'
console.log(nome[0]); // Para acessar um indice da minha string, no caso ele retornaria L.

//INDICE           0       1       2        3         4  
const alunos = ['Lucas','Mateus','Edson', 'Bruno', 'Arthur'];


    // Para ACESSAR o indice da array, ele retorna o elemento inteiro. (Lucas)
console.log(alunos[0]); 

    //Para EDITAR um elemento dentro de uma array, eu coloco o indice = o novo valor.
alunos[0] = 'Rafael';

    //Para ADICIONAR um novo elemento na array.
alunos[5] = 'Lucas'; // Basta acrescentar um indice que ainda não foi criado.
    //Outra forma de ADICIONAR um elemento quando não se sabe o tamanho da array.

alunos[alunos.length] = 'Gabriela'; // Nesse caso ele vai pegar o tamanho da array e acrescentar o novo elemento ao FINAL da array.
alunos[alunos.length] = 'Cleidiene';
alunos[alunos.length] = 'Simba';
alunos[alunos.length] = 'Zeca';

    // Outra forma de ADICIONAR um elemento, sem se preocupar com o tamanho, colocando direto ao FINAL da array.
alunos.push('Thor'); 
alunos.push('Linda');

    // Outra forma de ADICIONAR um elemento porém ao INICIO da array ele irá empurrar os demais para frente.
alunos.unshift('First');
console.log(alunos);
   
    // Para Saber o TAMANHO da array, quantos indices existem.
console.log(alunos.length);

    // Para REMOVER um elemento, nesse caso ele removerá o ULTIMO elemento.
alunos.pop(); // É POSSIVEL SALVAR o elemento removido em uma variavel.
const alunosApagados = alunos.pop();
console.log(alunosApagados);

    // Para REMOVER um elemento, nesse caso ele removerá o PRIMEIRO elemento.
alunos.shift();

    // Para REMOVER um elemento, nesse caso sem apagar junto o indice, deixando o indice vazio.
console.log(alunos);
    // Ele mostrara o indice 0 como <1 empty item> no lugar do indice.
delete alunos[0];
delete alunos[1];
delete alunos[5]; 
console.log(alunos); 

    // Para PEGAR UMA PARTE ESPECIFICA da array, nesse caso quero pegar do indice 0 até 0 3,
    //utilizando o slice(0,3) eu coloco a partir do indice inicial até o final.
console.log(alunos.slice(0,3));

    // Outra forma de utilizar o slice, é passando numero negativo, ou seja ele vai pegar do indice 0 menos o valor que eu passar
    // ele pega o tamanho da array menos o valor que eu colocar negativo.

console.log(alunos.slice(0,-1)); // Nesse caso ele vai trazer do indice 0 até o penultimo indice. 

   //  Se eu utilizar o typeof para verificar o tipo, ele não vai mostrar array e sim Object.
   // Mas se eu quero ter certeza que estou utilizando uma array, basta utilizar o instanceof.
console.log(typeof alunos); // Retornará Object
console.log(alunos instanceof Array); // Ele retornará true se for uma array.

