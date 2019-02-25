var img;
var pic = true;

function preload() {
    if (pic == true) {
    img = loadImage('nite.jpg'); // load media and other data
    }
else {
img = loadImage('day.jpg'); // load media and other data
 }
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    background(255, 0, 200);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
} 

/*
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(0);
    }
    ellipse(mouseX, mouseY, 80, 80);
} */

function draw() { // only executed once preload is has finished loading data
    image(img, 0, 0, width, height);
}

// global mousePressed handler
function mousePressed() {
    /* img = loadImage('day.jpg'); // load media and other data */
    if (pic == true) {
        img = loadImage('day.jpg'); // load media and other data
        pic = false;
    }
    else {
        img = loadImage('nite.jpg'); // load media and other data
        pic = true;
    }
}