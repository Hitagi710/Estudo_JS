const carrinho=[
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//Retonar um array apenas com os preços


const paraObjeto=json=>JSON.parse(json)
const apenasPreco=obj=>"Preço: "+obj.preco



resultado=carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)