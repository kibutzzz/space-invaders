class Inimigo {
    constructor (x,y) {
        this.pos = createVector(x, y);
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill('red');
    rect(this.pos.x, this.pos.y, 40, 40);
    pop();
};  