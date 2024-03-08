<pre>const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 30;

const points = [];
for (let p = 0; p < numPoints; p += 1) {
  points.push([
    Math.random() * sketchWidth, // x
    Math.random() * sketchHeight // y
  ]);
}

const numLoops = 20;
const minOpacity = 200;

function draw() {
  background(255);
  for (let l = 0; l < numLoops; l += 1) {
    noFill();
    stroke(0, minOpacity/numLoops * l)
    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l,
        points[p][1] + l
      );
    }
    endShape();
  }
}</pre>