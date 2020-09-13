// Exercicios

// Por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(var, marca, portas);
// R: Retorna erro, pois pedi para exibir no console "var" e nome da variavel que é cor
// E também let e const não escapam o escopo de bloco


// Como corrigir o erro abaixo?
function somarDois(x){
    const dois = 2;
    return x + dois;
}

function dividirDois(x){
    return x + dois;
}
somarDois(4);
dividirDois(6);
// R: Não funciona pq a variavel dois foi definida dentro do primeiro escopo e const nao vaza o escopo


// O que fazer para total retornar 500?

var numero = 50;

for(var numero = 0; numero < 10; numero++){
    console.log(numero)
}
// R: Modificando o var pelo let
