//Função sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,4,5,6,7,8)
imprimirSoma()

//Função com retorno
function soma(a,b=1){//Definir um valor padrão para b caso nao seja passado algo  como parametro
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())