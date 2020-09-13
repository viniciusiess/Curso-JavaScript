// Variaveis são usadas para guardar informações, para poder ser utilizadas pelo código
var nome = 'Vinicius'; // variável do tipo string
var idade = 21; // variável do tipo number
var faculdade = true; // variável do tipo boolean
// É utilizado para exibir no console os dados que vão ser colocados dentro no parenteses
console.log(nome, idade, faculdade);

var preco = 25;
var totalComprado = 5;
// Operação matemática de multiplicação entre as duas variáveis e armazenando-a em uma nova variável
var totalPreco = totalComprado * preco;
console.log(totalPreco);

// Não é necessário ficar colocando a palavra várias vezes, somente uma vez é necessário
var sobrenome = 'Siess', cidade = 'Petrópolis';
console.log(sobrenome, cidade);

// Pode-se declarar uma variável undefined, que é uma variável sem valor ainda
var semDefinir;
console.log(semDefinir);

// Pode-se atribuir novos valores para as variáveis já declaradas
faculdade = 'FAETERJ';
console.log(faculdade);

/* Nomes das variáveis

  *Os nomes podem iniciar com $, _ ou letras
    - Podem conter números, mas não iniciar com eles

  *Case sensitive
    - nome é diferente de Nome

  *Não pode utilizar palavras reservadas

  *Camel case
    - ex: nomeVariavel

*/