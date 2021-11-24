const sketchHeight = 400;
const sketchWidth = 400;

let colorValues = [50, 100, 200];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  noLoop();
  background(255);
  fill("black");
  let triangleSize = 20;
  for (let y = 0; y < sketchHeight; y += triangleSize * 2) {
    for (let x = 0; x < sketchWidth; x += triangleSize * 2) {
      fill(colorValues[Math.round(random(-0.5, 2.4999))]);
      let triangleType = Math.round(random(-0.5, 3.4999));
      if (triangleType === 0) {
        triangle(
          x, y,
          x + triangleSize, y,
          x + triangleSize, y + triangleSize
        );
      }else if (triangleType === 1) {
        triangle(
          x + triangleSize, y,
          x + triangleSize, y + triangleSize,
          x, y + triangleSize
        );
      }else if (triangleType === 2) {
        triangle(
          x + triangleSize, y + triangleSize,
          x, y + triangleSize,
          x, y
        );
      } else {
        triangle(
          x, y + triangleSize,
          x + triangleSize, y + triangleSize,
          x + triangleSize, y
        );
      }
    }
  }
}

