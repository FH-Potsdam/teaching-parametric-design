<pre>const sketchWidth = 400;
const sketchHeight = 400;
const margin = 50;
const pointCount = 500;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

  background(255);
  stroke(75);
  noFill();

  beginShape();
  for (let p = 0; p < pointCount; p += 1) {
    curveVertex(
      random(margin, sketchWidth - margin),
      random(margin, sketchHeight - margin)
    );
  }
  endShape();
}

function draw() {
}</pre>