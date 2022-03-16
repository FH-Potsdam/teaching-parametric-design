<pre>function setup() {
  createCanvas(400, 400);
}

let offset = 0;

function draw() {
  background(255);

  for (let x = 0; x < 400; x += 10) {
    const y = noise(x / 100 + offset);
    circle(x, y * 400, 5);
  }

  offset += 0.03;
}</pre>