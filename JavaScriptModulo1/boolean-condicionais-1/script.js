var possuiGraduacao = true;

// Estrutura de condição
if(possuiGraduacao){ // avalia se a condição é true(verdadeira)
  console.log('Possui graduação'); // caso seja, executará o seguinte código
}else{ // caso a condição seja false
  console.log('Não possui graduação'); // executará o seguinte código
}

// Else if: Usado para quando haver mais de uma condição
var graduacao = true;
var doutorado = false;

if(doutorado){
  console.log('Possui graduaçãoe doutorado');
}else if(graduacao){
  console.log('Possui somente graduação');
}else{
  console.log('Não possui graduação');
}

// *OBS* O operador ! nega uma operação booleana, ou seja, !true = false

/*
Operadores de Comparação:

<, >, <=, >=, =, ==, ===, !=, !==, !===, &&, ||
menor, maior, menor igual, maior igual, igual, igual valor, igual em valor e tipo, diferente, diferente valor, diferente em valor e tipo

// Para true os dois valores tem q ser true
true && true = true
true && false = false

// Precisa de um valor verdadeiro para dar true
true || true = true
true || false = true
false || false = false

*/

// Switch pode verificar se uma variável é igual a diferentes valores utilizando o case

var corFavorita = 'Azul';

switch (corFavorita){
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  default:
    console.log('Feche os olhos');
  }