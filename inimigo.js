class Inimigo {
    constructor (x,y) {
        this.pos = createVector(x, y+20);
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill(255, 50, 0);
    rect(this.pos.x, this.pos.y, 40, 40);
    pop();
};  