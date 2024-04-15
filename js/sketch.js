var canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("P5Canvas");

    background(0);

    noStroke();
}

function draw() {
    ellipse(mouseX, mouseY, 50);
}