<pre>function setup() {
  createCanvas(400, 400);
}

const size = 10;
let offset = 0;

function draw() {
  background(255);
  noStroke();

  for (let x = 0; x < 400; x += size) {
    for (let y = 0; y < 400; y += size) {
      /*
      we pick x and y as coordinates
      and move the offset on the z-axis
      */
      const colorValue = noise(
        x / 400,
        y / 400,
        offset
      );
      fill(20, colorValue * 255, 115);
      rect(x, y, size);
    }
  }

  offset += 0.002;
}</pre>