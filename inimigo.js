class Inimigo {
    constructor (x,y) {
        this.initialX = x;
        this.pos = createVector(x, y+20);
        this.tamanho = 40;
        this.vel = createVector(random(0.1,0.7), 0.15);
    }
}


Inimigo.prototype.desenha = function() {
    push();
    rectMode(CENTER);
    fill(255, 50, 0);
    rect(this.pos.x, this.pos.y, this.tamanho, this.tamanho, 7, 7, 7, 7);
    pop();
};  


Inimigo.prototype.flutua = function () {
    if(this.pos.x > this.initialX + 10|| this.pos.x < this.initialX - 10) {
        this.vel.x *= -1;
    } 
    this.pos.add(this.vel);
    
}