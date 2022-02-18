function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  let x = 0;
  while (x < 10) {
    circle(20 * x, 20, 10);
    x += 1;
  }
}