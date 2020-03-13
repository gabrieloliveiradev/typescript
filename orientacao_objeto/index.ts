class Cumprimento {
    //nomedoatributo:tipo
    nome:string
    idade:string

    //metodo construtor
    constructor(_nome:string="", _idade:string=""){
        this.nome = _nome
        this.idade = _idade
    }
    mostrarNomeIdade (idade:string, nome:string){
        return `${nome} tem ${idade} anos`
    }
}
// fim da definição da classe

// invocando a função e o resultado vou armazenar na variável de memória chamada resposta
let pessoa1 = new Cumprimento()
console.log(pessoa1.mostrarNomeIdade("19","Gabriel"))
