**Parametric Design**

## Fractals

Fractals are basically repetetive patterns and drawing commands. You draw a line and then you move to the end of the line and draw a set of news lines, which again you use to draw each another set of new lines. Thanks to *translate* and *rotate* it is quite easy to move and draw without any need to calculate the current position. I have created a very basic example for such structures, to get started play around with the starting points, weights, angles, etc.:

```js
const startPoints = 3;
const startWeight = 10;
const startLength = 40;
const angle = 45;
const lengthDecrease = 0.75;

const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
    createCanvas(sketchWidth, sketchHeight);
    angleMode(DEGREES);
}

function draw() {
  background(0);
  // move to the middle
  translate(sketchWidth / 2, sketchHeight / 2);
  stroke(255,100);

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
    // turn to the left
    push();
        rotate(angle);
        branch(length * lengthDecrease, weight);
    pop();
    // turn to the right
    push();
        rotate(-angle);
        branch(length * lengthDecrease, weight);
    pop();
    // in the middle
    // push();
    //     rotate(0);
    //     branch(length * lengthDecrease, weight);
    // pop();
  }
}
```