<pre>const sketchWidth = 400;
const sketchHeight = 400;
const circleSize = 20;
const padding = 5;
const spacing = circleSize + 2 * padding;

// calculate how many rows and columns we need
const columns = Math.floor(sketchWidth / spacing);
const rows = Math.floor(sketchHeight / spacing);

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      circle(x * spacing, y * spacing, circleSize);
    }
  }
}</pre>