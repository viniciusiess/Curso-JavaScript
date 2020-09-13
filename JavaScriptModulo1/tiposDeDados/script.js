// Tipos de dados

var nome = 'Vinicius'; // string = texto
var idade = 21; // number = número
var possuiFaculdade = true; // boolean = verdadeiro ou falso
var time; // undefined = valor não definido
var comida = null; // null = valor nulo, sem valor
var simbolo = Symbol(); // symbol
var novoObjeto = {}; // object*/

// Exibe no console o tipo da variavel
console.log(typeof nome);

// Concatenação de strings
var sobrenome =  'Siess';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Concatenação string com número
var nomeIdade = nome + ' tem ' + idade + ' anos';
console.log(nomeIdade);

// Template String
var cidade = 'Petrópolis';
var estado = 'RJ';
// Nesse caso ele está concatenando sem precisar quebrar o texto, dentro da expressão pode-se colocado código javaScript
var cidadeEstado = `Minha cidade é ${cidade + estado}`;
console.log(cidadeEstado);