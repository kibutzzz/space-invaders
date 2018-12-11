var nave;
var inimigos = []
var incremento = 1;
var inc_inim = 2;
var vidas = 3;
var pontos = 0;


function setup() {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");
    background(0, 0, 0);

    nave = new Nave();
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            inimigos.push(new Inimigo(i * 58, j * 60));
        }
    }

    
}

function draw() {
    

    fill(255);
    textSize(28);
    textFont('Georgia');
    text('VIDAS:' + vidas, width-160, 40);
    text('PONTOS:' +pontos, 60, 40);

    if (nave.pos.x > width || nave.pos.x < 0) {
        incremento *= -1;
    }
    nave.pos.x += incremento;

    nave.desenha();

    inimigos.forEach((inimigo) => {
        inimigo.desenha();
    });
}