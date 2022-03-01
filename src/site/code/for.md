<pre>function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  for(let x = 1; x < 20; x += 1) {
    circle(20 * x, 20, 10);
  }
}</pre>