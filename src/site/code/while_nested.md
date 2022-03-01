<pre>function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  let x = 1;
  while(x < 20) {
    let y = 1;
    while(y < 20) {
      circle(20 * x, 20 * y, 10);
      y += 1;
    }
    x += 1;
  }
}</pre>