const peso1=1.0
const peso2=Number('2.1')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//Esse metodo ve o tipo de variavel do Number
console.log(Number.isInteger(peso2))

const avaliacao1=9.871
const avaliacao2=6.871

const total=avaliacao1 * peso1 +avaliacao2*peso2
const media=total/(peso1+peso2)

console.log(media.toFixed(2))//Esse metodo controla as casas decimais
console.log(media.toString())//Esse metodo transforma o valor em String
//Se colocar 2 como parametro para o metodo toString ele retorna o valor em binario