class Inimigo {
    constructor (x,y) {
        this.pos = createVector(x, y);
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill(255, 50, 0);
    rect(this.pos.x, this.pos.y, 40, 40);
    pop();
};  