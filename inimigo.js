class Inimigo {
    constructor (x,y) {
        this.pos = createVector(x, y+20);
        this.tamanho = 40;
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill(255, 50, 0);
    rect(this.pos.x, this.pos.y, this.tamanho, this.tamanho);
    pop();
};  