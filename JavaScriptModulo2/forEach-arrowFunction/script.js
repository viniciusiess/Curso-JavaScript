// forEach
// Constantemente vamos selecionar uma lista de itens do DOM.
// A melhor forma para interagirmos com os mesmos é utilizado o método forEach

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
    console.log(item)
})


// Parâmetros do forEach
// O primeiro parâmetro é o callbak, ou seja, a função que será ativada a cada item.
// Essa função pode receber três parâmetros: valorAtual, index e array

const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
    console.log(valorAtual); // o item atual no loop
    console.log(index); // o numero do index
    console.log(array); // a array completa
})


// forEach e Array
// forEach é um método de array, alguns objetos array-like possuem este método.
// Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); // Transformando em uma array

titulosArray.forEach(function(item){
    console.log(item)
});



// Arrow Function
// Sintaxe curta em relação a function expression. 
// Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos

const imgs = document.querySelectorAll('img')

imgs.forEach((item) => {
    console.log(item)
});



// Argumentos e Parênteses
const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
    console.log(item)
});

//  multiplos argumentos precisam de parênteses
imgs.forEach((item, index) =>{
    console.log(item, index)
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
    console.log(i++)
});

// Return - é possível omitir as chaves {} para uma função que retorna uma linha
imgs.forEach(item => {
    console.log(item)
});

imgs.forEach(item => console.log(item));