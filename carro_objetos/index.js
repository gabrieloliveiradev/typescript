var Carro = /** @class */ (function () {
    function Carro(_marca, _vel_atual, _vel_max, _ano) {
        if (_marca === void 0) { _marca = ""; }
        if (_vel_atual === void 0) { _vel_atual = 0; }
        if (_vel_max === void 0) { _vel_max = 60; }
        if (_ano === void 0) { _ano = ""; }
        this.marca = _marca;
        this.vel_atual = _vel_atual;
        this.vel_max = _vel_max;
        this.ano = _ano;
    }
    Carro.prototype.acelerar = function (marca, vel_atual, vel_max, ano) {
        if (this.vel_atual < vel_max) {
            this.vel_atual = this.vel_atual + 10;
            console.log(this.vel_atual);
        }
        else {
            console.log("Velocidade não apropriada");
        }
    };
    Carro.prototype.desacelerar = function (marca, vel_atual, vel_max, ano) {
        if (this.vel_atual > 0) {
            this.vel_atual = this.vel_atual - 10;
            return (this.vel_atual);
        }
        else {
            console.log("Velocidade não apropriada");
        }
    };
    return Carro;
}());
var resposta = new Carro();
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
resposta.acelerar("Ford", 0, 60, 1970);
// resposta.desacelerar("Ford",50,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
