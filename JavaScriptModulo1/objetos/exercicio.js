// Exercicios

// Crie um objeto com os seus dados pessoais deve possuir pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto, que mostre seu nome completo
var dados = {
    nome: 'Vinicius',
    sobrenome: 'Siess',
    idade: 21,
    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}
console.log(carro.preco)
carro.preco = 3000
console.log(carro.preco)




// Nomeie 3 propriedades ou métodos de strings
var diaMesAno = "vinte dois de agosto de dois mil e vinte";
diaMesAno.length; // retorna o tamanho da string = 40
diaMesAno.toUpperCase; // deixa as letras em maiusculas
diaMesAno.slice(1,7); // retorna 'vinte' e 'mil'


// Nomeie 3 propriedades ou métodos de elementos do DOM
document.getElementById(); // retorna um elemento com um ID espeifico
document.setAttribute(); // Para definir ou modificar o valor especificado
document.getElementsByTagName(); // Retorna todos elementos com a tag especificada


