<pre>let len;
let max;
let branches;
let angleOffset;
let branchAngle;
let branchScale;

function setup() {
  angleMode(DEGREES);

  len = createSlider(0, 200, 100);
  len.position(10, 270);
  len.input(reDraw);
  max = createSlider(1, 10, 10, 1);
  max.position(10, 290);
  max.input(reDraw);
  branches = createSlider(1, 6, 2, 1);
  branches.position(10, 310);
  branches.input(reDraw);
  angleOffset = createSlider(-180, 180, -60, 1);
  angleOffset.position(10, 330);
  angleOffset.input(reDraw);
  branchAngle = createSlider(0, 180, 120, 1);
  branchAngle.position(10, 350);
  branchAngle.input(reDraw);
  branchScale = createSlider(0.1, 1, 0.7, 0.05);
  branchScale.position(10, 370);
  branchScale.input(reDraw);

  createCanvas(400, 400);
}

function reDraw() {
  loop();
}

function drawPart(level) {
  // after 10 levels we stop
  if (level < max.value()) {
    push();
    // draw a line
    line(0, 0, 0, len.value());
    // move to the end of the line
    translate(0, len.value());
    scale(branchScale.value());
    // counter the scale for constant strokeWeight of 1
    strokeWeight(1 / Math.pow(branchScale.value(), level));
    // new branches
    for (let i = 0; i < branches.value(); i += 1) {
      push();
      // rotate
      rotate(angleOffset.value() + branchAngle.value() * i);
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