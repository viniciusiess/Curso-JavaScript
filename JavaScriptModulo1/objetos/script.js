// Objetos:
// Conjunto de variaveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Vinicius',
    idade: 21,
    faculdade: 'Tecnologia da Informação',
    empregado: false,
}

// nome do objeto . propriedade
pessoa.nome; // 'Vinicius'
pessoa.empregado // false

// Métodos
// É uma propriedade que possui uma função no local do seu valor
var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    // para chamar a propriedade lados que está dentro do objeto é preciso usar o this,
    perimetro: function(lado){
        return this.lados * lado;
    },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20


// Abreviação de area: function() {} para area() {}, no ES6+
var quad = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
}

// Objetos servem para organizar o código em pequenas partes reutilizáveis
Math.PI;
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi);


// Pode-se atribuir uma propriedade a uma variavel
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#ffffff',
    metadeHeight() {
        return this.height / 2;
    }
}

var bg = menu.backgroundColor;


// Protótipo e Herança
// O objeto herda propriedades e metódos do objeto que foi utilizado para criar o mesmo
var menu = {
    width: 800,
}
// ele avalia se tem a propriedade dentro do objeto
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false


// Tudo é Objeto
// Strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos
var nome = 'Vinicius';

nome.length; // 8
nome.charAt(1); // 'i'
nome.replace('ni', 'ní'); // Vinícius

// Números
var altura = 1.8;
altura.toString(); // trasforma em string - '1.8'
altura.toFixed(); // arredonda para o numero mais proximo - 2

// Funções
function areaQuadrado(lado){
    return lado * lado;
}

areaQuadrado.toString();
// "function areaQuadrado(lado){
//   return lado * lado; 
// }"

areaQuadrado.length; // 1


// Elementos do DOM
//HTML: <a class="btn">Clique</a>

var btn = document.querySelector('.btn'); // seleciona a classe btn no documento

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'clique'
btn.addEventListener('click', function(){
    console.log('clicou')
})