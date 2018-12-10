var nave;

function setup () {
    var myCanvas = createCanvas(640, 480);
    myCanvas.parent("#wrapper");
    background(0, 0, 0);


    nave = new Nave();

    nave.desenha();
}

function draw() {
    
}