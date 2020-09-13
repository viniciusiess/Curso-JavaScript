// Height e Width
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll


// getBoundingClientRect()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll


// Window
window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerWidth; // soma a barra de endereço
window.pageYOffset; // distância total de scroll horizontal
window.pageXOffset; // distância total do scroll vertial

if(window.innerWidth < 600){
    console.log('Tela menor que 600px')
}


// matchMedia();
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}