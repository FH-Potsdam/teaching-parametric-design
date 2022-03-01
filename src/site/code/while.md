<pre>function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  let x = 1;
  while (x < 20) {
    circle(20 * x, 20, 10);
    x += 1;
  }
}</pre>