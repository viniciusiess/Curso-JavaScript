/* Funções: Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor. */

const { realpathSync } = require("fs");

// nome da função = areaQuadrado
// parametro = lado
function areaQuadrado(lado){
  return lado * lado;
}

// função recebendo valores nos parametros
areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

function pi(){
  return 3.14;
}

var total = 5 * pi();
console.log(total);

//Parametros e Argumentos
/* 
  Ao criar uma função, você pode definir parâmetros
  Ao executar uma função, você pode passar argumentos  
*/

// peso e alturas são parâmetros
function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

// Parênteses executa a função

function corFavorita(cor){
  if(cor === 'azul'){
    return 'Você gosta do céu';
  } else if(cor === 'verde'){
    return 'Você gosta dos campos';
  } else{
    return 'Você gosta de outra de cor';
  }
}
corFavorita(); // Nesse caso está retornando 'Você gosta de outra de cor'


// Argumentos poder ser Funções
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento
addEventListener('click', function(){
  console.log('clicou!');
});
// A função possui dois argumentos 
// Primeiro é a string 'click'
// Segunda é uma função anônima
// *OBS* Funções anônimas são aquelas em que o nome da função não é definido, escritos como function() {} ou () => {}


// Uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade){
  if(typeof idade !== 'number'){
    return 'Informe sua idade';
  }else if(idade>=60){
    return true;
  }else{
    return false;
  }
}

console.log(terceiraIdade(61))


// Escopo: Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele
function faltaVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises); // Perceba que não exibirá o valor da variável


// Escopo Léxico
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';

function dados(){
  var nome = 'Vinicius';
  var idade = 21;
  function outrosDados(){
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
dados(); // Retorna 'Vinicius, 29, Rio de Janeiro, Designer'
outrosDados(); // Retorna um erro