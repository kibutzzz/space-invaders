class Disparo {
    constructor (x, y) {
        this.pos = createVector(x, y);
    }
}


Disparo.prototype.desenha = function () {
    push();
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y , 5, 5);
    pop();
}
Disparo.prototype.atualizaPosicao = function () {
    this.pos.y -= 3;
}