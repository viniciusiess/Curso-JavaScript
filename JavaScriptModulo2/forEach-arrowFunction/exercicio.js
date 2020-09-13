// Exercicio

// Mostre no console cada parágrafos do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos)

// Mostre o texto dos parágrafos no console
parágrafos.forEach(function(item){
    console.log(item.innerText);
})


// Como corrigir os erros abaixo;
/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
    console.log(item, index);
});

let i = 0;
imgs.forEach( => {
    console.log(i++);
}); */
// R: Deve-se colocar parenteses ().
