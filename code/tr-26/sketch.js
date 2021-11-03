const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(100);

  for(let count = 1; count <= 3; count += 1) {
    noFill();
    stroke("black");
    strokeWeight(6);
    let rectSize = 20 + count * 20;
    rect(
      sketchWidth / 2 - rectSize/ 2,
      sketchHeight / 2 - rectSize/ 2,
      rectSize
    );
  }
}

