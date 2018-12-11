var nave;
var incremento = 1;
function setup () {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");
    
    nave = new Nave();
    inimigo = new Inimigo();

    
}

function draw () {
    background(0, 0, 0);
    
    
    if(nave.pos.x > width || nave.pos.x < 0) {
        incremento *= -1;
    }
    nave.pos.x += incremento;
    
    nave.desenha();
}