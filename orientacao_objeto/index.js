var Cumprimento = /** @class */ (function () {
    //metodo construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ""; }
        if (_idade === void 0) { _idade = ""; }
        this.nome = _nome;
        this.idade = _idade;
    }
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// fim da definição da classe
// invocando a função e o resultado vou armazenar na variável de memória chamada resposta
var pessoa1 = new Cumprimento();
console.log(pessoa1.mostrarNomeIdade("19", "Gabriel"));
