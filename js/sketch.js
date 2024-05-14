var canvas;

let img1, img2, img3, img4, img5;

function preload() {
    img1 = loadImage("../assets/images/sketch-images/1.jpg");
    img2 = loadImage("../assets/images/sketch-images/2.jpg");
    img3 = loadImage("../assets/images/sketch-images/3.jpg");
    img4 = loadImage("../assets/images/sketch-images/4.jpg");
    img5 = loadImage("../assets/images/sketch-images/5.jpg");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("P5Canvas");

    noStroke();
    frameRate(1);

    textureMode(NORMAL);

    // ------1度目の描画------

    background(255);

    for (let i = 0; i < 5; i++) {
        drawShape(img1);
        drawShape(img2);
        drawShape(img3);
        drawShape(img4);
        drawShape(img5);
    }
}

function draw() {
    background(255);

    for (let i = 0; i < 5; i++) {
        drawShape(img1);
        drawShape(img2);
        drawShape(img3);
        drawShape(img4);
        drawShape(img5);
    }
}

function drawShape(win) {
    beginShape();
    texture(win);
    vertex(random(-width / 2, width / 2), random(-height / 2, height / 2), 0, 0);
    vertex(random(-width / 2, width / 2), random(-height / 2, height / 2), 1, 0);
    vertex(random(-width / 2, width / 2), random(-height / 2, height / 2), 1, 1);
    vertex(random(-width / 2, width / 2), random(-height / 2, height / 2), 0, 1);
    endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
}