class Inimigo {
    constructor () {
        this.pos = createVector(50, 50);
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill('red');
    rect(this.pos.x, this.pos.y, 40, 40);
    pop();
};  