function Pessoa1(nome){
    
    this.nome=nome
    
    this.falar=function(){
        console.log(`Meu nome é ${this.nome}`)
    
    }
}

const pessoa=new Pessoa1('André')
pessoa.falar()