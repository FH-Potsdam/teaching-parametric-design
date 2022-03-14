<pre>const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

  background(255);
  stroke(255);
  fill(0);
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      const shapeNum = random(0,2);
      if (shapeNum < 1) {
        circle(x * size + size / 2, y * size + size / 2, size);
      } else {
        rect(x * size, y * size, size, size);
      }
    }
  }
}

function draw(){
}</pre>