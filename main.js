var nave;
var inimigos = []
var incremento = 1;
function setup () {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");
    
    nave = new Nave();
    for (var i = 1; i <= 10; i ++){
        for(var j = 1; j <= 4; j ++) {
            inimigos.push(new Inimigo(i * 58, j * 60));
        }
    }
    
}

function draw () {
    background(0, 0, 0);
    
    
    if(nave.pos.x > width || nave.pos.x < 0) {
        incremento *= -1;
    }
    nave.pos.x += incremento;
    
    nave.desenha();

    inimigos.forEach((inimigo) => {
        inimigo.desenha();
    });
}