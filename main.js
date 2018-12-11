var nave;
var inimigos = []
var incremento = 1;
var inc_inim = 2;
var vidas = 3;
var pontos = 0;

var moverDireita = false;
var moverEsquerda = false;
var atirar = false;

function setup() {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");

    nave = new Nave();
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 3; j++) {
            inimigos.push(new Inimigo(i * 58, j * 60));
        }
    }

}

function draw() {

    background(0, 0, 0);
    fill(255);
    textSize(28);
    textFont('Georgia');
    text('VIDAS:' + vidas, width - 160, 40);
    text('PONTOS:' + pontos, 60, 40);

    // if (nave.pos.x > width || nave.pos.x < 0) {
    //     incremento *= -1;
    // }
    // nave.pos.x += incremento;

    nave.desenha();

    inimigos.forEach((inimigo) => {
        inimigo.desenha();
    });

    //se a seta para a direita estiver pressionada
    if (keyIsDown(39)) {
        nave.moverParaDireita();
    }

    //se a seta para a esquerda estiver pressionada
    if (keyIsDown(37)) {
        nave.moverParaEsquerda();
    }

    //se a barra de espaço estiver pressionada
    if (keyIsDown(32)) {
        nave.atira();
    }
}
