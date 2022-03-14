<pre>const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);
  noStroke();
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      fill(random(125, 175), 100, 100);
      rect(x * size, y * size, size, size);
    }
  }
}</pre>