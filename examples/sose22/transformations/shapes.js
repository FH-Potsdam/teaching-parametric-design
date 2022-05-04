// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = window.innerWidth;
const sketchHeight = window.innerHeight;
const shapeCount = 400;
const size = 240;
const scaleTreshold = 1.2;
let shapes = [];

let xy = size / 2;

// SETUP
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let count = 0; count < shapeCount; count++) {
        shapes.push({
            scale: (scaleTreshold / shapeCount) * count,
            rotation: (360 / shapeCount) * count,
        });
    }
    console.log(shapes);
}

// RESIZE
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// DRAW
function draw() {
    background(255, 255, 255);
    noFill();
    stroke(0);
    strokeWeight(0.5);

    translate(windowWidth / 2, windowHeight / 2);
    for (let i = 0; i < shapes.length; i++) {
        push();

        scale(shapes[i].scale);
        if (shapes[i].scale > 20) {
            shapes[i].scale--;
        }

        rotate(shapes[i].rotation);
        translate(-size, -size);
        // strokeWeight(i * 0.1);
        square(xy, xy, size, shapes[i].roundness);

        shapes[i].rotation += 0.001;

        if (shapes[i].scale < scaleTreshold) {
            shapes[i].scale *= 1.0005;
        } else if (shapes[i].scale > scaleTreshold) {
            shapes[i].scale *= -0.5;
        }

        pop();
    }
}