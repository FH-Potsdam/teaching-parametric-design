<pre>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

const size = 20;
const padding = 5;

function draw() {
  background(255);
  noStroke();
  fill(0);

  for (let x = 0; x < 400; x += (size + 2 * padding)) {
    for (let y = 0; y < 400; y += (size + 2 * padding)) {
      push();
      translate(x, y);
      rotate(random(0, 360));
      rect(-size/2, -size/2, size, size);
      pop();
    }
  }

  noLoop();
}</pre>