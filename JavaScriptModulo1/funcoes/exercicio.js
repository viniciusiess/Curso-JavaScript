// Crie uma função para verificar se um valor é truthy
function verificaValor(valor){
    return !!valor;
};

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado){
    return lado * 4;
}

// Crie uma função que retorne o seu nome completo, ela deve possuir os parametros nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

// Crie uma função que verifica se um número é par
function verificaPar(num){
    if (num % 2 === 0){
        console.log('é par')
    }else{
        console.log('é ímpar')
    }
}

// Crie uma função que retorne o tipo de dado de argumento passando nela (typeof)
function verificaTipo(tipo){
    return typeof tipo;
}

// Utilize o addEventListener para mostrar no console o seu nome completo quando houver um scroll na página

addEventListener('scroll', function(){
    console.log('Vinicius Siess')
})
