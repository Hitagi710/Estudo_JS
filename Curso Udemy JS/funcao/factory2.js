function criarProduto(nome,preco,desconto=20){
    return{
        nome,//:pode usar o : para receber o valor do parametro
        preco,
        desconto
    }
}

console.log(criarProduto('Lapis',20.50))