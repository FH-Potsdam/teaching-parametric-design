

// VARIABLES
const canvasWidth = 400;
const canvasHeight = 400;
const size = 15;
const multi = 13;

// PRELOAD
function preload() {}

// SETUP
function setup() {
    createCanvas(canvasWidth, canvasHeight)
}
// DRAW
function draw() {
  background(255);
  fill(0);
  noStroke();
  for (let x = 20; x <= canvasWidth - 40; x += size) {
    for (let y = 20; y <= canvasHeight - 40; y += size) {
      const cSize = (x + y) / (canvasWidth * 2) * multi;
      circle(x, y, cSize);
    }
  }
  for (let x = 20; x <= canvasWidth - 40; x += size) {
    for (let y = 20; y <= canvasHeight - 40; y += size) {
      const cSize = multi - ((x + y) / (canvasWidth * 2) * multi);
      circle(x, y, cSize);
    }
  }
  noLoop();

  // stroke('red');
  // strokeWeight(1);
  // line(0, 0, 50, 50);
  // const dist = 20;
  // const a = Math.sqrt(dist*dist/2);
  // strokeWeight(10);
  // point(a, a);
}