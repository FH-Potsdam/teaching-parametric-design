<pre>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

const len = 100;
const max = 10;
const branches = 2;
const angleOffset = -60;
const branchAngle = 120;
const branchScale = 0.7;

function drawPart(level) {
  // after 10 levels we stop
  if (level < max) {
    push();
    // draw a line
    line(0, 0, 0, len);
    // move to the end of the line
    translate(0, len);
    scale(branchScale);
    // counter the scale for constant strokeWeight of 1
    strokeWeight(1 / Math.pow(0.7, level));
    // new branches
    for (let i = 0; i < branches; i += 1) {
      push();
      // rotate
      rotate(angleOffset + branchAngle * i);
      // and call the drawPart again
      drawPart(level + 1);
      pop();
    }
    pop();
  }
}

function draw() {
  background(255);
  stroke(0);

  // move to the center
  translate(200, 0);

  // call function
  drawPart(0);

  noLoop();
}</pre>