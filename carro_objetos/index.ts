class Carro {
    marca:string
    vel_atual:number
    vel_max:number
    ano:string

    constructor (_marca="",_vel_atual=0,_vel_max=60,_ano=""){
        this.marca = _marca
        this.vel_atual = _vel_atual
        this.vel_max = _vel_max
        this.ano = _ano
    }

    acelerar (marca, vel_atual, vel_max, ano){
        if (this.vel_atual < vel_max){
            this.vel_atual = this.vel_atual +10
            console.log(this.vel_atual)
        }
        else {
            console.log("Velocidade não apropriada")
        }
    }
    desacelerar (marca, vel_atual, vel_max, ano){
        if (this.vel_atual > 0){
            this.vel_atual = this.vel_atual -10
            return(this.vel_atual)
        }
        else {
            console.log("Velocidade não apropriada")
        }
    }
}

let resposta = new Carro()

resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)
resposta.acelerar("Ford",0,60,1970)

// resposta.desacelerar("Ford",50,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)
// resposta.desacelerar("Ford",0,60,1970)

