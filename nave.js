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

    this.disparos.forEach((disparo) => {
        disparo.desenha();
        disparo.atualizaPosicao();
    });
};


Nave.prototype.moverParaDireita = function () {
    console.log("direita");
    if (this.pos.x < 640) {
        this.pos.x += this.vel;
    }
}

Nave.prototype.moverParaEsquerda = function () {
    console.log("esquerda");
    if (this.pos.x > 0) {
        this.pos.x -= this.vel;
    }
}

Nave.prototype.atira = function () {
    console.log("atira");
    push();
    //TODO logica dos disparos
    rectMode(CENTER);
    this.disparos.push(new Disparo(this.pos.x, this.pos.y));
    pop();
}
