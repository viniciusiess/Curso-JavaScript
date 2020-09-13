// Document Object Model (DOM)
/* É uma interface que representa documentos HTML e XML através de objetos. Com ela é possivel
manipular a estrutura, estilo e conteúdo destes documentos*/

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// ** Ao inspecionar elemento, você está vendoo a representação oficial da DOM


// Window e Document
// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// ** window é um objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades


// Node
// Toda tag HTML é representada pelo objeto Element e por isso herda os seis métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click', callback); // ativa a função callback ao click no titulo
