var nave;
var inimigos = []
var incremento = 1;
var inc_inim = 2;
function setup() {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");

    nave = new Nave();
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 4; j++) {
            inimigos.push(new Inimigo(i * 58, j * 60));
        }
    }

}

function draw() {
    background(0, 0, 0);

    nave.desenha();

    inimigos.forEach((inimigo) => {
        inimigo.desenha();
    });

    //verifica se alguma tecla esta pressionada
    if (keyIsPressed) {
        //se a seta para a direita estiver pressionada
        if (keyCode == 39) {
            nave.moverParaDireita();
        }

        //se a seta para a esquerda estiver pressionada
        if (keyCode == 37) {
            nave.moverParaEsquerda();
        }

    }
}


