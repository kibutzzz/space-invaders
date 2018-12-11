class Nave {
    constructor() {
        this.pos = createVector(320, 400);

        this.vel = 2;
        this.disparos= [];
        this.ultimoDisparo = (new Date()).getTime();
        this.COOLDOWN = 400; // tempo de espera do tiro em milissegundos
    }

}


Nave.prototype.desenha = function () {
    push();
    rectMode(CENTER);
    fill(255);
    rect(this.pos.x, this.pos.y, 20, 20);
    pop();

    this.disparos.forEach((disparo) => {
        disparo.desenha();
        disparo.atualizaPosicao();
    });
};


Nave.prototype.moverParaDireita = function () {
    if (this.pos.x < 640) {
        this.pos.x += this.vel;
    }
}

Nave.prototype.moverParaEsquerda = function () {
    if (this.pos.x > 0) {
        this.pos.x -= this.vel;
    }
}

Nave.prototype.atira = function () {
    
    push();
    //TODO logica dos disparos
    rectMode(CENTER);
    console.log(this.ultimoDisparo);
    if((new Date()).getTime() - this.ultimoDisparo  > this.COOLDOWN) {
        this.disparos.push(new Disparo(this.pos.x, this.pos.y));
        this.ultimoDisparo = (new Date()).getTime();
    }
    pop();
}
