// Exercicios

// Retorne no console todas imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem');
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao')
const h2Animais = animais.querySelector('h2');

console.log(animais);
console.log(h2Animais);

// Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[--paragrafos.length]);