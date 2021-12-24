const startPoints = 1;
const startWeight = 10;
const startLength = 40;
const angle = 45;
const lengthDecrease = 0.75;

const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
    createCanvas(sketchWidth, sketchHeight, SVG);
    angleMode(DEGREES);
}

function draw() {
  background(0);
  // move to the middle
  translate(sketchWidth / 2, sketchHeight / 2);
  stroke('green');

  // starting points for new fractal trees
  for (let s = 0; s < startPoints; s += 1) {
    push();
    rotate(360 / startPoints * s);
    branch(startLength, startWeight);
    pop();
  }
  noLoop();
}

function branch(length, weightIn) {
  let weight = weightIn - 1;
  strokeWeight(weight);

  // New line
  line(0,0,0, -length);

  // Move to end of the new line
  translate(0, -length);

  // stop if weight is 0
  if (weight > 0) {
    push();
        rotate(angle);
        branch(length * lengthDecrease, weight);
    pop();
    push();
        rotate(-angle);
        branch(length * lengthDecrease, weight);
    pop();
    // push();
    //     rotate(0);
    //     branch(length * lengthDecrease, weight);
    // pop();
  }
}