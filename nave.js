class Nave {
    constructor () {
        this.pos = createVector(320, 400);
    }


}


Nave.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 20, 20);
    pop();
};  