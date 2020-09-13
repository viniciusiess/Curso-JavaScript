// Selecionando Elementos pelo DOM
// ID: getElementById seleciona e retorna elementos do DOM

// Selecionando elementos pelo id deles
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
// ** retorna null caso não exista


// Classe e Tag
// getElementsByClassName e getElementsByTagName, selecionam e retornam uma lista de elementos do DOM.
// A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);


// Selector Geral Único
// querySlector retorna o primeiro elemento que combina com o seu seletor CSS
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');
// Busca dentro de ul apenas
const navItem = primeiroUl.querySelector('li');


// Selector Geral lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
// Retorna o segundo elemento
console.log(gridSection[1]);


// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySeletorAll é estática

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('gri-section');
const gridSectionNode = document.qyerySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens



// Array-Like
// HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// O método de Array forEach() por exemplo , existe apenas em NodeList.

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array){
    gridItem.classList.add('azul');
    console.log(index) // index do item na array
    console.log(array) // a array completa
});
