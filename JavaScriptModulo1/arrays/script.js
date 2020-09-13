// Array
// É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável

var videoGames = ['switch', 'ps4', 'xbox'];
videoGames[0] // switch
videoGames[1] // xbox


// Métodos e Propriedades de uma Array

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3ds'); // Adiciona ao final da array
videoGames.length; // 3


// For Loop
// Fazem algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero < 10; numero++){
    console.log(numero);
}
// O for loop possui 3 partes: inicio, condição, incremento


// While Loop
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console


// Arrays e Loops
var games = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < games.length; i++){  // games.lenght retorna a quantidade de elementos dentro da array
    console.log(games[i]);
}


// Break
// O loop irá parar caso encontro e palavra break

var consoles = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < consoles.length; i++){
    console.log(consoles[i]);
    if(consoles[i] === 'PS4'){
        break;
    }
}


// forEach
// forEach é um metódo que executa uma função para cada item da Array. É uma forma mais simples de utilizamos um loop com arrays (ou array-like)

var jogos = ['Switch', 'PS4', 'XBox', '3DS'];
jogos.forEach(function(item){
    console.log(item);
});
// O argumento item será atribuido dinamicamente