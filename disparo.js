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


Disparo.prototype.checaColisao = function(inimigo) {

    if(this.pos.x > inimigo.pos.x - inimigo.tamanho / 2 && 
        this.pos.x < inimigo.pos.x + inimigo.tamanho / 2 &&
        this.pos.y > inimigo.pos.y - inimigo.tamanho / 2 &&
        this.pos.y < inimigo.pos.y + inimigo.tamanho / 2 ) {
        return true;
    }

    return false;
}