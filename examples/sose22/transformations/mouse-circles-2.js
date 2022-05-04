// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = window.innerWidth;
const sketchHeight = window.innerHeight;
const kreise = [];
const kreiseAnzahl = 500;

// SETUP
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < kreiseAnzahl; i++) {
        kreise.push({
            x: random(0, sketchWidth),
            y: random(0, sketchHeight),
            size: random(0, sketchWidth / 10),
            alpha: random(0, 255),
        });
    }
}

// DRAW
function draw() {
    background(0, 100, 255);
    noStroke();

    for (let count = 0; count < kreise.length; count++) {
        fill(0, 0, 100, kreise[count].alpha);

        circle(kreise[count].x, kreise[count].y, kreise[count].size);

        let range = 150;
        if (
            kreise[count].x > mouseX - range &&
            kreise[count].x < mouseX + range &&
            kreise[count].y > mouseY - range &&
            kreise[count].y < mouseY + range
        ) {
            
          const d = dist(kreise[count].x, kreise[count].y, mouseX, mouseY);

          circle(
            kreise[count].x,
            kreise[count].y,
            kreise[count].size * (150 - d)/25);

        }
    }

    push();
    fill(255);
    textSize(sketchWidth / 10);
    text('SKYLINE', 100, sketchHeight - 200);
    pop();
}

// RESIZE
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// let bx;
// let by;
// let boxSize = 75;
// let overBox = false;
// let locked = false;

// if (
//     mouseX > x - boxSize &&
//     mouseX < x + boxSize &&
//     mouseY > y - boxSize &&
//     mouseY < y + boxSize
// ) {
//     overBox = true;
//     if (!locked) {
//         stroke(255);
//         fill(244, 122, 158);
//     }
// } else {
//     stroke(156, 39, 176);
//     fill(244, 122, 158);
//     overBox = false;
// }