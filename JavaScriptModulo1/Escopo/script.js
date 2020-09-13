// Escopo da Função
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas

function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Mostra fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo evita conflitos de nomes de variaveis


// Varoável Global(Erro)
// Declarar variáveis sem a palavra chave var, const e let, cria uma variavel que pode ser acessar em qualquer escopo (global). Isso é um erro

function carros(){
    carro = 'Fusca'
    console.log(carro)
}

carros(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso


// Escopo da Função(Pai)
// Variéveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

var carro = 'Fusca';

function modeloCarro(){
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

modeloCarro(); // Meu carro é um Fusca
console.log(carro) // Fusca


// Escopo de Bloco
// Variaveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declaramos uma variavel é utilizando const e let, pois estas respeitam o escopo do bloco

if(true) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // fusca


// CONST e LET no lugar de VAR

// ** CONST: Matém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código

const mes = 'Dezembro';
mes = 'Janeiro'; // Erro, tentou modificar o valor
const semana; // Erro, declarou sem valor

const data = {
    dia: 23,
    mes: 'Agosto',
    ano: 2020,
}

data.dia = 24; // Funciona
data = 'Janeiro'; // Erro


// ** LET: Mantém o escopo no bloco, impede a redaclaração, mas permite a modificação do valor da variável

let ano;
ano = 2019;
ano++;
console.log(ano); // 2019

let ano = 2020; // Erro, redeclarou a variavel