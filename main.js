var nave;
var incremento = 1;
var inc_inim = 2;
function setup () {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");
    
    nave = new Nave();
    inimigo = new Inimigo(width/2, 50);

    
}

function draw () {
    background(0, 0, 0);
    
    
    if(nave.pos.x > width || nave.pos.x < 0) {
        incremento *= -1;
    }
    nave.pos.x += incremento;
    
    nave.desenha();

    if(inimigo.pos.x > width-40 ||
        inimigo.pos.x < 40){
            inc_inim *= -1;
    }
    inimigo.pos.x += inc_inim;
    inimigo.desenha();
}