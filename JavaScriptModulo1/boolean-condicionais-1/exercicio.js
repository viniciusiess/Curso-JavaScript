// Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual', 'É menor'

var minhaIdade = 21;
var idadeIrma = 24;

if (minhaIdade === idadeIrma){
  console.log('é igual');
} else if (minhaIdade < idadeIrma){
  console.log('é menor');
}else{
  console.log('é maior');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);
// R: 3

// Verifique se as seguintes variáveis são Truty ou Falsy
var nome = 'Vinicius';
var idade = 21;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// R: true true false false false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasi > china){
  console.log('Brasil tem mais habitantes');
}else{
  console.log('China tem mais habitantes');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('verdadeiro');
} else{
  console.log('falso');
}

//R: falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão');
}else{
  console.log('false');
}

//R: cão