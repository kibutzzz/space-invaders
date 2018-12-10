class Nave {
    constructor () {
        this.pos = createVector(200, 200);
    }


}


Nave.prototype.desenha = function() {
    rect(this.pos.x, this.pos.y, 20, 20);
};  