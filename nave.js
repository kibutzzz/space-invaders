class Nave {
    constructor() {
        this.pos = createVector(320, 400);

        this.vel = 2;
        this.disparos= [];
    }

}


Nave.prototype.desenha = function () {
    push();
    rectMode(CENTER);
    fill(255);
    rect(this.pos.x, this.pos.y, 20, 20);
    pop();

    this.disparos.forEach((disparo, index) => {
        disparo.desenha();
        disparo.atualizaPosicao();
        
        if(disparo.pos.y < 0) {
            this.disparos.splice(index, 1);
        }
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
    this.disparos.push(new Disparo(this.pos.x, this.pos.y));
    pop();
}
